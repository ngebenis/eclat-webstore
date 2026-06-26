/* ═══════════════════════════════════════════════════════════════════════════
   ÉCLAT — API service layer
   Communicates with the Laravel 12 backend. Falls back to static data
   if NEXT_PUBLIC_API_URL is not set (for standalone front-end demo mode).
═══════════════════════════════════════════════════════════════════════════ */

import type {
  Product,
  Post,
  StoreLocation,
  ContactFormData,
  NewsletterFormData,
  ApiResponse,
  PaginatedResponse,
} from './types'

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api'

const DEFAULT_HEADERS: HeadersInit = {
  'Content-Type': 'application/json',
  Accept:         'application/json',
}

/* ─── Generic fetcher ────────────────────────────────────────────────────── */
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: DEFAULT_HEADERS,
    ...options,
    next: { revalidate: 60 }, // ISR — revalidate every 60 s
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(
      `API error ${res.status} on ${endpoint}: ${text.slice(0, 200)}`,
    )
  }

  return res.json() as Promise<T>
}

/* ─── Products ───────────────────────────────────────────────────────────── */
export const productApi = {
  list: (params?: {
    category?: string
    featured?: boolean
    page?: number
    perPage?: number
  }) => {
    const qs = new URLSearchParams()
    if (params?.category) qs.set('category', params.category)
    if (params?.featured)  qs.set('featured',  'true')
    if (params?.page)      qs.set('page',      String(params.page))
    if (params?.perPage)   qs.set('per_page',  String(params.perPage))
    const query = qs.toString() ? `?${qs}` : ''
    return apiFetch<PaginatedResponse<Product>>(`/products${query}`)
  },

  get: (slug: string) =>
    apiFetch<ApiResponse<Product>>(`/products/${slug}`),

  featured: () =>
    apiFetch<ApiResponse<Product[]>>('/products?featured=true&per_page=6'),
}

/* ─── Blog posts ─────────────────────────────────────────────────────────── */
export const postApi = {
  list: (params?: {
    category?: string
    page?: number
    perPage?: number
    tag?: string
  }) => {
    const qs = new URLSearchParams()
    if (params?.category) qs.set('category', params.category)
    if (params?.page)     qs.set('page',     String(params.page))
    if (params?.perPage)  qs.set('per_page', String(params.perPage))
    if (params?.tag)      qs.set('tag',      params.tag)
    const query = qs.toString() ? `?${qs}` : ''
    return apiFetch<PaginatedResponse<Post>>(`/posts${query}`)
  },

  get: (slug: string) =>
    apiFetch<ApiResponse<Post>>(`/posts/${slug}`),

  featured: () =>
    apiFetch<ApiResponse<Post[]>>('/posts?featured=true&per_page=3'),
}

/* ─── Store locations ────────────────────────────────────────────────────── */
export const storeApi = {
  list: (city?: string) => {
    const query = city ? `?city=${encodeURIComponent(city)}` : ''
    return apiFetch<ApiResponse<StoreLocation[]>>(`/store-locations${query}`)
  },

  get: (id: number) =>
    apiFetch<ApiResponse<StoreLocation>>(`/store-locations/${id}`),
}

/* ─── Contact ────────────────────────────────────────────────────────────── */
export const contactApi = {
  submit: (data: ContactFormData) =>
    apiFetch<ApiResponse<{ id: number }>>('/contact', {
      method: 'POST',
      body:   JSON.stringify(data),
    }),
}

/* ─── Newsletter ─────────────────────────────────────────────────────────── */
export const newsletterApi = {
  subscribe: (data: NewsletterFormData) =>
    apiFetch<ApiResponse<{ subscribed: boolean }>>('/newsletter/subscribe', {
      method: 'POST',
      body:   JSON.stringify(data),
    }),
}
