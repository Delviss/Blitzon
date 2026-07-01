const DEV_SECRET = "blitzon-dev-secret-change-me";

export const config = {
  port: Number(process.env.PORT) || 3001,
  jwtSecret: process.env.JWT_SECRET || DEV_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  databaseUrl: process.env.DATABASE_URL || "",
  // Comma-separated list of allowed origins; empty = allow all
  corsOrigins: (process.env.CORS_ORIGIN || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
  adminEmail: (process.env.ADMIN_EMAIL || "").trim().toLowerCase(),
  adminPassword: process.env.ADMIN_PASSWORD || ""
};

export function warnAboutMissingConfig(): void {
  if (config.jwtSecret === DEV_SECRET) {
    console.warn(
      "[config] JWT_SECRET is not set — using an insecure development secret. Set JWT_SECRET in Railway before going live."
    );
  }
  if (!config.databaseUrl) {
    console.warn(
      "[config] DATABASE_URL is not set — users are stored in memory and reset on every deploy. Attach a Postgres database in Railway for persistence."
    );
  }
}
