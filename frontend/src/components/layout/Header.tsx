'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown, MapPin, Droplets } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { MobileNav } from './MobileNav'
import { useScrolled } from '@/hooks/useScrolled'

/* ─── Nav data ───────────────────────────────────────────────────────────── */
const productSubMenu = [
  {
    label: 'Cold Pressed Juices',
    href:  '/products?category=juices',
    desc:  'Diperas dingin, nutrisi penuh',
    emoji: '🥤',
  },
  {
    label: 'Wellness Shots',
    href:  '/products?category=shots',
    desc:  'Konsentrasi nutrisi tinggi',
    emoji: '⚡',
  },
  {
    label: 'Cleanse Programs',
    href:  '/products?category=cleanses',
    desc:  'Detoksifikasi terstruktur',
    emoji: '✨',
  },
  {
    label: 'Coconut Water',
    href:  '/products?category=coconut',
    desc:  'Hidrasi alami sempurna',
    emoji: '🥥',
  },
]

const navLinks = [
  { label: 'Beranda',  href: '/' },
  { label: 'Tentang',  href: '/about' },
  { label: 'Blog',     href: '/blog' },
  { label: 'Lokasi',   href: '/find-store' },
]

/* ─── Component ──────────────────────────────────────────────────────────── */
export function Header() {
  const pathname    = usePathname()
  const scrolled    = useScrolled(60)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const productMenuRef = useRef<HTMLDivElement>(null)

  /* On homepage the header starts transparent, elsewhere always solid */
  const isHome       = pathname === '/'
  const transparent  = isHome && !scrolled

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('?')[0])

  return (
    <>
      {/* ── Announcement bar ─────────────────────────────────────────── */}
      <div className={cn(
        'relative z-50 w-full bg-eclat-900 py-2 text-center text-xs font-medium text-white/90',
        'transition-all duration-300',
        scrolled && isHome ? 'opacity-0 -translate-y-full h-0 py-0 overflow-hidden' : '',
      )}>
        🌿&nbsp; Gratis ongkir Jabodetabek untuk pembelian di atas Rp 150.000 &nbsp;·&nbsp; HPP Cold Press Technology
      </div>

      {/* ── Main header ──────────────────────────────────────────────── */}
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          transparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border',
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between lg:h-18">

          {/* ── Logo ─────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="ÉCLAT Cold Press Juice — Halaman Utama"
          >
            <span className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full transition-colors',
              transparent ? 'bg-white/20 backdrop-blur-sm' : 'bg-eclat-800',
            )}>
              <Droplets
                size={18}
                className={cn(
                  'transition-colors',
                  transparent ? 'text-white' : 'text-white',
                )}
              />
            </span>
            <span className="leading-none">
              <span className={cn(
                'block font-serif text-xl font-bold tracking-[0.15em] transition-colors',
                transparent ? 'text-white' : 'text-eclat-900',
              )}>
                ÉCLAT
              </span>
              <span className={cn(
                'block text-[8.5px] font-semibold tracking-[0.25em] uppercase transition-colors',
                transparent ? 'text-white/70' : 'text-eclat-500',
              )}>
                Cold Press Juice
              </span>
            </span>
          </Link>

          {/* ── Desktop nav ──────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1">

            {/* Products mega-dropdown */}
            <div
              className="relative"
              ref={productMenuRef}
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold',
                  'transition-all duration-150',
                  transparent
                    ? 'text-white hover:bg-white/10'
                    : pathname.startsWith('/products')
                      ? 'bg-eclat-50 text-eclat-700'
                      : 'text-eclat-dark hover:bg-eclat-50',
                )}
                aria-expanded={productOpen}
                aria-haspopup="true"
              >
                Produk
                <ChevronDown
                  className={cn('h-3.5 w-3.5 transition-transform duration-200', productOpen && 'rotate-180')}
                />
              </button>

              {/* Dropdown panel */}
              <div
                className={cn(
                  'absolute left-1/2 top-full -translate-x-1/2 pt-3',
                  'transition-all duration-200 origin-top',
                  productOpen
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none',
                )}
              >
                <div className="w-72 rounded-2xl border border-border bg-white p-3 shadow-xl">
                  {/* Decorative top bar */}
                  <div className="mb-3 h-0.5 w-12 rounded-full bg-eclat-600 mx-auto" />

                  <div className="space-y-0.5">
                    {productSubMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-eclat-50 group"
                        onClick={() => setProductOpen(false)}
                      >
                        <span className="text-xl leading-none">{item.emoji}</span>
                        <span>
                          <span className="block text-sm font-semibold text-eclat-900 group-hover:text-eclat-700">
                            {item.label}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {item.desc}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 border-t border-border pt-3">
                    <Link
                      href="/products"
                      className="flex items-center justify-center gap-1 rounded-xl bg-eclat-50 p-2.5 text-xs font-semibold text-eclat-700 hover:bg-eclat-100 transition-colors"
                      onClick={() => setProductOpen(false)}
                    >
                      Lihat Semua Produk →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-150',
                  transparent
                    ? isActive(link.href)
                      ? 'bg-white/20 text-white'
                      : 'text-white hover:bg-white/10'
                    : isActive(link.href)
                      ? 'bg-eclat-50 text-eclat-700'
                      : 'text-eclat-dark hover:bg-eclat-50',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Right actions ─────────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Find Store CTA — desktop only */}
            <Button
              asChild
              size="sm"
              variant={transparent ? 'outline-white' : 'default'}
              className="hidden lg:inline-flex"
            >
              <Link href="/find-store">
                <MapPin className="h-3.5 w-3.5" />
                Temukan Toko
              </Link>
            </Button>

            {/* Mobile hamburger */}
            <button
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full transition-colors lg:hidden',
                transparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-eclat-700 hover:bg-eclat-50',
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Buka menu navigasi"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile nav sheet ──────────────────────────────────────────── */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
