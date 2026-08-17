# Sunshine Hospital — CMS Backend

Full-stack CMS for Sunshine Multi-Speciality Center website.

## Structure

```
sunshine-backend/
├── server/      ← Node.js + Express API (port 4000)
└── cms/         ← React + Vite admin dashboard (port 5173)
```

---

## Quick Start

### 1. Set up environment

```bash
cd server
cp .env.example .env
# Edit .env with your real values
```

### 2. Install dependencies

```bash
# Server
cd server && npm install

# CMS Dashboard
cd ../cms && npm install
```

### 3. Create admin account

```bash
cd server
npm run create-admin
# Follow the prompts to enter name, email, and password
```

### 4. Seed database from existing data

```bash
cd server
npm run seed
# This migrates all static data files to MongoDB
```

### 5. Start development servers

```bash
# Terminal 1 — API Server
cd server && npm run dev

# Terminal 2 — CMS Dashboard
cd cms && npm run dev

# Terminal 3 — Next.js Frontend (in sunshine/ directory)
cd ../../sunshine && npm run dev
```

### Access

| Service | URL |
|:---|:---|
| API Server | http://localhost:4000 |
| API Health | http://localhost:4000/health |
| CMS Dashboard | http://localhost:5173 |
| Next.js Website | http://localhost:3000 |

---

## API Reference

### Public Endpoints (no auth)
- `GET /api/services` — All published services
- `GET /api/services/:slug` — Service by slug
- `GET /api/testimonials` — Published testimonials
- `GET /api/health-guide` — Published articles
- `GET /api/health-guide/:slug` — Article by slug
- `GET /api/locations` — Published location pages
- `GET /api/locations/:slug` — Location page by slug
- `GET /api/settings` — Site settings

### Protected Endpoints (JWT required)
All `POST`, `PUT`, `DELETE`, `PATCH` routes.
Include `Authorization: Bearer <token>` header.

### Image Upload
```
POST /api/upload/image?folder=hero  (single)
POST /api/upload/images?folder=facilities  (multiple)
DELETE /api/upload/image  (body: { key: "hero/filename.jpg" })
GET /api/upload/media?folder=doctor
```

### ISR Revalidation
```
POST https://yoursite.com/api/revalidate
Body: { "secret": "REVALIDATE_SECRET", "tag": "services" }
```

---

## Deployment (Render)

1. Push this backend folder to GitHub
2. Create a new Web Service on Render, point to the `server/` directory
3. Set environment variables in Render dashboard:
   - `MONGODB_URI` (from MongoDB Atlas)
   - `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_S3_BUCKET`
   - `CORS_ORIGIN` = your Next.js production URL
   - `REVALIDATE_SECRET` = same value as `REVALIDATE_SECRET` in Next.js .env
4. Run seed script once on Render Shell: `npm run seed`
5. Create admin: `npm run create-admin`

---

## Next.js Frontend Changes

Set in `sunshine/.env.local`:
```env
NEXT_PUBLIC_API_URL=https://your-render-api-url.onrender.com
REVALIDATE_SECRET=same-as-server-env
```

The frontend now fetches from the API using `lib/api.ts` instead of static data files.
ISR revalidation is triggered automatically when the CMS saves content.
