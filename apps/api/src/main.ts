import bcrypt from "bcryptjs";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config, warnAboutMissingConfig } from "./config";
import { createStore, toPublicUser, UserStore } from "./store";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;
const BCRYPT_ROUNDS = 10;

interface AuthedRequest extends Request {
  userId?: string;
}

function signToken(userId: string, email: string): string {
  return jwt.sign({ sub: userId, email }, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn
  } as jwt.SignOptions);
}

function requireAuth(req: AuthedRequest, res: Response, next: NextFunction): void {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice("Bearer ".length) : "";
  if (!token) {
    res.status(401).json({ error: "Missing Authorization header" });
    return;
  }
  try {
    const payload = jwt.verify(token, config.jwtSecret);
    if (typeof payload === "string" || !payload.sub) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }
    req.userId = String(payload.sub);
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

function buildApp(store: UserStore): express.Express {
  const app = express();
  app.disable("x-powered-by");
  app.use(
    cors({
      origin: config.corsOrigins.length > 0 ? config.corsOrigins : true
    })
  );
  app.use(express.json({ limit: "64kb" }));

  const health = (_req: Request, res: Response) => {
    res.json({ status: "ok", service: "@blitzon/api", store: store.kind });
  };
  app.get("/", health);
  app.get("/health", health);

  app.post("/api/auth/register", async (req: Request, res: Response) => {
    const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password = typeof req.body?.password === "string" ? req.body.password : "";
    const name = typeof req.body?.name === "string" && req.body.name.trim() ? req.body.name.trim() : null;

    if (!EMAIL_RE.test(email)) {
      res.status(400).json({ error: "Bitte eine gültige E-Mail-Adresse angeben." });
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      res.status(400).json({ error: `Das Passwort muss mindestens ${MIN_PASSWORD_LENGTH} Zeichen lang sein.` });
      return;
    }
    if (await store.findByEmail(email)) {
      res.status(409).json({ error: "Für diese E-Mail-Adresse existiert bereits ein Konto." });
      return;
    }

    const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);
    const user = await store.create({ email, name, role: "user", passwordHash });
    res.status(201).json({ token: signToken(user.id, user.email), user: toPublicUser(user) });
  });

  app.post("/api/auth/login", async (req: Request, res: Response) => {
    const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password = typeof req.body?.password === "string" ? req.body.password : "";

    const user = email ? await store.findByEmail(email) : null;
    const valid = user ? await bcrypt.compare(password, user.passwordHash) : false;
    if (!user || !valid) {
      res.status(401).json({ error: "E-Mail oder Passwort ist falsch." });
      return;
    }
    res.json({ token: signToken(user.id, user.email), user: toPublicUser(user) });
  });

  app.get("/api/auth/me", requireAuth, async (req: AuthedRequest, res: Response) => {
    const user = req.userId ? await store.findById(req.userId) : null;
    if (!user) {
      res.status(401).json({ error: "Unbekannter Benutzer" });
      return;
    }
    res.json({ user: toPublicUser(user) });
  });

  app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: "Not found" });
  });

  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error("[api] unhandled error:", err);
    res.status(500).json({ error: "Internal server error" });
  });

  return app;
}

async function seedAdmin(store: UserStore): Promise<void> {
  if (!config.adminEmail || !config.adminPassword) return;
  if (await store.findByEmail(config.adminEmail)) {
    console.log(`[seed] Admin user ${config.adminEmail} already exists.`);
    return;
  }
  const passwordHash = await bcrypt.hash(config.adminPassword, BCRYPT_ROUNDS);
  await store.create({ email: config.adminEmail, name: "Admin", role: "admin", passwordHash });
  console.log(`[seed] Created admin user ${config.adminEmail}.`);
}

async function main(): Promise<void> {
  warnAboutMissingConfig();

  const store = createStore(config.databaseUrl);
  await store.init();
  await seedAdmin(store);

  const app = buildApp(store);
  app.listen(config.port, "0.0.0.0", () => {
    console.log(`[api] @blitzon/api listening on port ${config.port} (store: ${store.kind})`);
  });
}

main().catch((err) => {
  console.error("[api] failed to start:", err);
  process.exit(1);
});
