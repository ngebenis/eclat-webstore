import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/* ─── Tailwind class merger ──────────────────────────────────────────────── */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* ─── Price formatter (IDR) ─────────────────────────────────────────────── */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/* ─── Date formatter ────────────────────────────────────────────────────── */
export function formatDate(
  dateString: string,
  options?: Intl.DateTimeFormatOptions,
): string {
  const defaults: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat('id-ID', options ?? defaults).format(
    new Date(dateString),
  )
}

/* ─── Reading-time estimator ────────────────────────────────────────────── */
export function readingTime(text: string): string {
  const wpm = 200
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wpm)
  return `${minutes} menit baca`
}

/* ─── Slug generator ─────────────────────────────────────────────────────── */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[éèê]/g, 'e')
    .replace(/[àâ]/g,  'a')
    .replace(/[ùûü]/g, 'u')
    .replace(/[îï]/g,  'i')
    .replace(/[ôö]/g,  'o')
    .replace(/[ç]/g,   'c')
    .replace(/\s+/g,   '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/* ─── Truncate text ─────────────────────────────────────────────────────── */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trimEnd() + '…'
}

/* ─── Class name for category gradient ─────────────────────────────────── */
export function categoryGradient(slug: string): string {
  const map: Record<string, string> = {
    juices:   'from-emerald-400 to-green-600',
    shots:    'from-amber-400 to-orange-500',
    cleanses: 'from-teal-400 to-cyan-600',
    coconut:  'from-lime-300 to-green-400',
  }
  return map[slug] ?? 'from-eclat-400 to-eclat-600'
}

/* ─── Delay helper for staggered animations ─────────────────────────────── */
export function staggerDelay(index: number, base = 100): string {
  return `${index * base}ms`
}
