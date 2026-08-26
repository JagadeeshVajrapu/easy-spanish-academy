# Blog Management System

## Architecture (inspected)

| Area | Existing project |
|---|---|
| Frontend | Next.js 16 App Router + React 19 + Tailwind 4 |
| Backend | None previously — now Next.js Route Handlers |
| Database | None previously — now **Prisma + SQLite** (`prisma/dev.db`) |
| Auth | None previously — now cookie JWT admin session (`jose`) |
| APIs | None previously — `/api/blogs`, `/api/admin/*` |
| Image upload | **Cloudinary** (`easy-spanish-academy/blogs`) — secure URL stored in DB |
| Admin | New `/admin/*` dashboard |
| Public blogs | Were static (`blog-data.ts`) — now DB-backed published posts |

## Setup

1. Copy `.env.example` → `.env` and change secrets.
2. `npm install`
3. `npx prisma migrate dev`
4. `npm run db:seed` (imports existing guide templates as published blogs)
5. `npm run dev`

## Admin login

- URL: `/admin/login`
- Default (from `.env`): username `admin` / password `ChangeMeNow!2026`
- Change `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and `AUTH_SECRET` before production.

## Routes

Admin:

- `/admin/login`
- `/admin/dashboard`
- `/admin/blogs`
- `/admin/blogs/create`
- `/admin/blogs/edit/[id]`

Public:

- `/blog` — published listing
- `/blog/[slug]` — detail + related + SEO JSON-LD

API:

- `GET /api/blogs` — published only
- `GET /api/blogs/[slug]` — published only
- Admin APIs under `/api/admin/*` (auth required)

## Image storage

Blog featured images are uploaded to **Cloudinary** (folder `easy-spanish-academy/blogs`).
Only the returned HTTPS URL is saved in the database.

Set these in `.env`:

```
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Find them in the Cloudinary console → **Dashboard** → API Keys.

## Production (Vercel) checklist

`/blog` needs these **Environment Variables** in Vercel (Production **and** Preview), then **Redeploy**:

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Neon pooled Postgres URL (`sslmode=require&connect_timeout=15`) |
| `ADMIN_USERNAME` | Admin login email/username |
| `ADMIN_PASSWORD` | Admin login password |
| `AUTH_SECRET` | Session signing secret (min 16 chars) |
| `CLOUDINARY_CLOUD_NAME` | Blog image uploads |
| `CLOUDINARY_API_KEY` | Blog image uploads |
| `CLOUDINARY_API_SECRET` | Blog image uploads |

Without `DATABASE_URL`, the live `/api/blogs` endpoint returns: `Environment variable not found: DATABASE_URL`.

After adding vars: Vercel → Deployments → Redeploy (or push a commit). Build runs `prisma migrate deploy` automatically.
