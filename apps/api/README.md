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

1. **Settings → Source**: connect this repo and set **Root Directory** to `apps/api`.
2. **Variables**:
   - `JWT_SECRET` — a long random string (required for production).
   - `ADMIN_EMAIL` / `ADMIN_PASSWORD` — optional; seeds an admin account on boot.
   - `CORS_ORIGIN` — optional comma-separated list of allowed origins
     (e.g. `https://blitzonconsulting.de`). Empty = allow all.
   - `DATABASE_URL` — add a Railway Postgres and reference it:
     `${{Postgres.DATABASE_URL}}`. Without it, users live in memory only.
3. Railway builds with `npm ci && npm run build` and starts with `npm start`
   (see `railway.json`). The healthcheck path is `/health`.

## Railway setup (web service)

Set `NEXT_PUBLIC_API_URL` on the **web** service to the api service's public
URL (e.g. `https://blitzon-api-production.up.railway.app`) so the static
Next.js site knows where to send login requests, then redeploy the web
service (the value is baked in at build time).

## Local development

```bash
cd apps/api
npm install
npm run build
node dist/main            # http://localhost:3001
```
