# @blitzon/api

Backend API for BlitzON (authentication / login), built for Railway.

- Express + TypeScript, compiled to `dist/main.js` (`npm start` runs `node dist/main`)
- JWT-based auth with bcrypt password hashing
- Postgres storage when `DATABASE_URL` is set, otherwise an in-memory store (users reset on redeploy)

## Endpoints

| Method | Path                 | Body                        | Result                  |
| ------ | -------------------- | --------------------------- | ----------------------- |
| GET    | `/health`            | –                           | `{ status: "ok", ... }` |
| POST   | `/api/auth/register` | `{ email, password, name? }`| `{ token, user }`       |
| POST   | `/api/auth/login`    | `{ email, password }`       | `{ token, user }`       |
| GET    | `/api/auth/me`       | – (Bearer token header)     | `{ user }`              |

## Railway setup (api service)

This repo is an npm **workspace** (`workspaces: ["apps/*"]` in the root
`package.json`), and the api service builds from the **repo root** using
workspace commands — no per-service Root Directory is needed:

- **Build command**: `npm run build --workspace=@blitzon/api`
- **Start command**: `npm run start --workspace=@blitzon/api`

Railway's builder runs `npm ci` at the repo root first (installing every
workspace's dependencies from the single root lockfile), then the build
command compiles `apps/api` to `dist/main.js`; the start command runs
`node dist/main` from `apps/api`.

> The root `package.json` **must** keep its `workspaces` field — without it
> `--workspace=@blitzon/api` can't be resolved, the build produces no
> `dist/`, and the service crashes with `Cannot find module .../dist/main`.

**Variables** (Settings → Variables on the api service):

- `JWT_SECRET` — a long random string (required for production).
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — optional; seeds an admin account on boot.
- `CORS_ORIGIN` — optional comma-separated list of allowed origins
  (e.g. `https://blitzonconsulting.de`). Empty = allow all.
- `DATABASE_URL` — add a Railway Postgres and reference it:
  `${{Postgres.DATABASE_URL}}`. Without it, users live in memory only.

Healthcheck path: `/health`.

## Railway setup (web service)

Set `NEXT_PUBLIC_API_URL` on the **web** service to the api service's public
URL (e.g. `https://blitzon-api-production.up.railway.app`) so the static
Next.js site knows where to send login requests, then redeploy the web
service (the value is baked in at build time).

## Local development

Run from the repo root (workspace-aware):

```bash
npm install                              # installs all workspaces
npm run build --workspace=@blitzon/api
npm run start --workspace=@blitzon/api   # http://localhost:3001
```
