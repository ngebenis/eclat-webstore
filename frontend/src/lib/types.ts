/* ═══════════════════════════════════════════════════════════════════════════
   ÉCLAT — Shared TypeScript type definitions
   These types mirror both the frontend data models and the Laravel API contract.
═══════════════════════════════════════════════════════════════════════════ */

/* ─── Product ────────────────────────────────────────────────────────────── */
export type ProductCategory = 'juices' | 'shots' | 'cleanses' | 'coconut'

export interface Nutrition {
  calories:    number
  protein:     number   // grams
  carbs:       number   // grams
  fat:         number   // grams
  fiber:       number   // grams
  sugar:       number   // grams
  sodium:      number   // mg
}

export interface Product {
  id:           number
  slug:         string
  name:         string
  tagline:      string
  description:  string
  longDescription?: string
  category:     string
  categorySlug: ProductCategory
  price:        number          // in IDR cents / units
  volume:       string          // e.g. "350ml"
  color:        string          // Tailwind gradient classes
  ingredients:  string[]
  benefits:     string[]
  nutrition?:   Nutrition
  featured:     boolean
  image:        string
  images?:      string[]
  badge?:       string          // e.g. "New", "Best Seller"
  isAvailable:  boolean
  createdAt:    string
}

/* ─── Blog / Post ────────────────────────────────────────────────────────── */
export type PostCategory =
  | 'wellness'
  | 'recipe'
  | 'science'
  | 'lifestyle'
  | 'news'

export interface Author {
  name:   string
  avatar: string
  bio?:   string
  role?:  string
}

export interface Post {
  id:          number
  slug:        string
  title:       string
  excerpt:     string
  content:     string
  category:    string
  categorySlug: PostCategory
  author:      Author
  image:       string
  publishedAt: string
  readingTime: string
  featured:    boolean
  tags:        string[]
}

/* ─── Store Location ─────────────────────────────────────────────────────── */
export interface OpeningHours {
  weekdays: string
  weekend:  string
  holiday?: string
}

export interface StoreLocation {
  id:           number
  name:         string
  address:      string
  city:         string
  province:     string
  postalCode:   string
  phone:        string
  email?:       string
  coordinates: {
    lat: number
    lng: number
  }
  openingHours: OpeningHours
  image?:       string
  isOpen:       boolean
  services:     string[]
}

/* ─── Contact form ───────────────────────────────────────────────────────── */
export interface ContactFormData {
  name:    string
  email:   string
  phone?:  string
  subject: string
  message: string
}

/* ─── Newsletter ─────────────────────────────────────────────────────────── */
export interface NewsletterFormData {
  email: string
  name?: string
}

/* ─── API response wrappers ──────────────────────────────────────────────── */
export interface ApiResponse<T> {
  data:    T
  message: string
  status:  number
}

export interface PaginatedResponse<T> {
  data:  T[]
  meta: {
    currentPage:  number
    lastPage:     number
    perPage:      number
    total:        number
  }
  links: {
    first: string
    last:  string
    prev:  string | null
    next:  string | null
  }
}

/* ─── Homepage hero slide ────────────────────────────────────────────────── */
export interface HeroSlide {
  id:          number
  badge:       string
  title:       string
  subtitle:    string
  description: string
  ctaPrimary:  { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  image:       string
  bgColor:     string
}

/* ─── Testimonial ────────────────────────────────────────────────────────── */
export interface Testimonial {
  id:       number
  name:     string
  avatar:   string
  location: string
  rating:   number
  quote:    string
  product?: string
}

/* ─── Cleanse program ────────────────────────────────────────────────────── */
export interface CleanseProgram {
  id:          number
  slug:        string
  name:        string
  duration:    string
  description: string
  bottles:     number
  price:       number
  color:       string
  features:    string[]
  popular?:    boolean
}
