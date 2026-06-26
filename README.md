# ÉCLAT Cold Press Juice — Website

> Premium cold-pressed juice brand website built with **Next.js 15** (frontend) and **Laravel 12** (backend API). Inspired by [rejuve.co.id](https://rejuve.co.id/) — no store/cart, purely a marketing & wellness content platform.

---

## Tech Stack

| Layer      | Technology                                   |
|------------|----------------------------------------------|
| Frontend   | Next.js 15 · React 19 · TypeScript · Tailwind CSS · shadcn/ui |
| Backend    | Laravel 12 · PHP 8.3 · Sanctum               |
| Database   | PostgreSQL 16                                |
| Cache      | Redis 7                                      |
| DevOps     | Docker · Docker Compose · Nginx              |

---

## Project Structure

```
eclat-webstore/
├── frontend/                   # Next.js 15 App Router
│   ├── src/
│   │   ├── app/                # Pages (App Router)
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── about/
│   │   │   ├── products/
│   │   │   │   └── [slug]/
│   │   │   ├── blog/
│   │   │   │   └── [slug]/
│   │   │   ├── contact/
│   │   │   └── find-store/
│   │   ├── components/
│   │   │   ├── home/           # 10 homepage sections
│   │   │   ├── layout/         # Header, Footer, MobileNav
│   │   │   ├── shared/         # ProductCard, BlogCard, etc.
│   │   │   └── ui/             # shadcn/ui primitives
│   │   ├── data/               # Static data (mock / fallback)
│   │   ├── hooks/              # useScrolled, useToast, etc.
│   │   └── lib/                # utils, types, api service
│   └── Dockerfile
│
├── backend/                    # Laravel 12 API
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/Api/
│   │   │   ├── Requests/
│   │   │   └── Resources/
│   │   └── Models/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── routes/api.php
│   └── Dockerfile
│
├── docker/
│   └── nginx/default.conf
├── docker-compose.yml
└── README.md
```

---

## Pages

| Route               | Description                                    |
|---------------------|------------------------------------------------|
| `/`                 | Homepage — hero, products, why us, cleanse, story, testimonials, blog, newsletter |
| `/about`            | About — mission/vision, values, timeline, team, FAQ |
| `/products`         | Product listing with category filter           |
| `/products/[slug]`  | Product detail — ingredients, nutrition, benefits, find store |
| `/blog`             | Blog listing with category filter              |
| `/blog/[slug]`      | Article detail with rich content               |
| `/contact`          | Contact form with validation                   |
| `/find-store`       | Store locator grouped by city                  |

---

## API Endpoints

```
GET    /api/products                  List products (?category, ?featured, ?per_page)
GET    /api/products/{slug}           Product detail
GET    /api/categories                All categories
GET    /api/posts                     Blog posts (?category, ?featured, ?tag)
GET    /api/posts/{slug}              Post detail
GET    /api/store-locations           Store locations (?city)
GET    /api/store-locations/{id}      Single store
POST   /api/contact                   Submit contact form
POST   /api/newsletter/subscribe      Newsletter subscribe
DELETE /api/newsletter/unsubscribe    Newsletter unsubscribe
```

---

## Quick Start — Docker (Recommended)

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) v24+
- [Docker Compose](https://docs.docker.com/compose/) v2+

```bash
# 1. Clone the repository
git clone https://github.com/ngebenis/eclat-webstore.git
cd eclat-webstore

# 2. Start all services
docker compose up -d

# 3. Wait for services to be healthy, then run migrations + seeders
docker compose exec backend php artisan migrate --seed

# 4. Open the website
open http://localhost:3000        # Frontend (Next.js)
open http://localhost:8000/api    # Backend API (Laravel)
```

---

## Quick Start — Local Development

### Backend (Laravel)

```bash
cd backend

# 1. Install dependencies
composer install

# 2. Copy and configure environment
cp .env.example .env
php artisan key:generate

# 3. Configure your PostgreSQL + Redis in .env, then:
php artisan migrate --seed

# 4. Start the dev server
php artisan serve           # http://localhost:8000
```

### Frontend (Next.js)

```bash
cd frontend

# 1. Install dependencies
npm install

# 2. Copy and configure environment
cp .env.local.example .env.local
# Set NEXT_PUBLIC_API_URL=http://localhost:8000/api

# 3. Start the dev server
npm run dev                 # http://localhost:3000
```

> **Standalone mode (no backend required):** The frontend ships with complete static data in `src/data/`. If `NEXT_PUBLIC_API_URL` is not set or the API is unavailable, the site uses this data automatically.

---

## Environment Variables

### Frontend (`frontend/.env.local`)

| Variable                | Default                          | Description                |
|-------------------------|----------------------------------|----------------------------|
| `NEXT_PUBLIC_API_URL`   | `http://localhost:8000/api`      | Laravel API base URL       |
| `NEXT_PUBLIC_SITE_URL`  | `http://localhost:3000`          | Public site URL            |

### Backend (`backend/.env`)

| Variable      | Default         | Description          |
|---------------|-----------------|----------------------|
| `DB_HOST`     | `127.0.0.1`     | PostgreSQL host      |
| `DB_DATABASE` | `eclat_db`      | Database name        |
| `DB_USERNAME` | `eclat_user`    | Database user        |
| `DB_PASSWORD` | `secret`        | Database password    |
| `REDIS_HOST`  | `127.0.0.1`     | Redis host           |
| `FRONTEND_URL`| `http://localhost:3000` | CORS allow-origin |

---

## Key Features

### Frontend
- **SEO Optimized** — `generateMetadata()` on every page, `generateStaticParams()` for SSG, canonical URLs, OG/Twitter meta
- **Core Web Vitals** — `next/image` with AVIF/WebP, ISR (60s revalidate), font preloading, no layout shift
- **Scroll Animations** — `IntersectionObserver`-based reveal, staggered delays, 4 animation variants
- **Mobile First** — Fully responsive, Sheet-based mobile nav, touch-friendly carousels
- **Accessibility** — `aria-label`, `aria-describedby`, skip links, keyboard navigation, focus rings

### Backend
- **Redis Caching** — All read endpoints cached (15–360 min) with automatic invalidation
- **Rate Limiting** — Contact form (10/min), newsletter (5/min)
- **API Resources** — Consistent JSON response shaping with `JsonResource`
- **Form Validation** — `FormRequest` classes with Indonesian error messages
- **Soft Deletes** — Products and posts support restore/force-delete

---

## Brand Identity

| Token             | Value       | Usage                          |
|-------------------|-------------|--------------------------------|
| `eclat-950`       | `#052e16`   | Primary dark green, hero BG    |
| `eclat-800`       | `#166534`   | Buttons, headings              |
| `eclat-600`       | `#16a34a`   | Accents, highlights            |
| `eclat-100`       | `#dcfce7`   | Light backgrounds              |
| `eclat-gold`      | `#b45309`   | Gold CTA accents               |
| `eclat-cream`     | `#fefdf8`   | Page background                |
| Font Serif        | Playfair Display | Headings, brand text      |
| Font Sans         | Inter           | Body, UI elements         |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

## License

MIT © 2025 ÉCLAT Cold Press Juice
