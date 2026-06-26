'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Droplets,
} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

/* ─── Nav data ───────────────────────────────────────────────────────────── */
const mainLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Blog & Artikel', href: '/blog' },
  { label: 'Lokasi Toko', href: '/find-store' },
  { label: 'Hubungi Kami', href: '/contact' },
]

const productLinks = [
  {
    label: 'Cold Pressed Juices',
    href: '/products?category=juices',
    desc: 'Diperas dingin, nutrisi penuh',
    emoji: '🥤',
  },
  {
    label: 'Wellness Shots',
    href: '/products?category=shots',
    desc: 'Konsentrasi nutrisi tinggi',
    emoji: '⚡',
  },
  {
    label: 'Cleanse Programs',
    href: '/products?category=cleanses',
    desc: 'Detoksifikasi terstruktur',
    emoji: '✨',
  },
  {
    label: 'Coconut Water',
    href: '/products?category=coconut',
    desc: 'Hidrasi alami sempurna',
    emoji: '🥥',
  },
]

const socialLinks = [
  { Icon: Instagram, href: 'https://instagram.com/eclat.id',  label: 'Instagram' },
  { Icon: Twitter,   href: 'https://twitter.com/eclat_id',    label: 'Twitter' },
  { Icon: Youtube,   href: 'https://youtube.com/@eclat',       label: 'YouTube' },
  { Icon: Facebook,  href: 'https://facebook.com/eclat.id',   label: 'Facebook' },
]

/* ─── Props ──────────────────────────────────────────────────────────────── */
interface MobileNavProps {
  open:    boolean
  onClose: () => void
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('?')[0])

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent side="left" className="flex flex-col p-0 w-[300px] sm:w-[340px]">

        {/* ── Logo area ──────────────────────────────────────────────── */}
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
          <SheetTitle asChild>
            <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-eclat-800">
                <Droplets className="h-4.5 w-4.5 text-white" size={18} />
              </span>
              <span>
                <span className="block font-serif text-xl font-bold tracking-widest text-eclat-900">
                  ÉCLAT
                </span>
                <span className="block text-[9px] font-semibold tracking-[0.2em] text-eclat-600 uppercase">
                  Cold Press Juice
                </span>
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        {/* ── Navigation ─────────────────────────────────────────────── */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">

          {/* Products accordion */}
          <Accordion type="single" collapsible className="mb-1">
            <AccordionItem value="products" className="border-none">
              <AccordionTrigger
                className={cn(
                  'rounded-xl px-3 py-3 text-sm font-semibold hover:bg-eclat-50 hover:no-underline',
                  pathname.startsWith('/products')
                    ? 'text-eclat-700 bg-eclat-50'
                    : 'text-eclat-dark',
                )}
              >
                Produk Kami
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <div className="ml-3 space-y-0.5">
                  {productLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-eclat-50 transition-colors"
                      >
                        <span className="text-base">{link.emoji}</span>
                        <span>
                          <span className="block text-sm font-medium text-eclat-900">
                            {link.label}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {link.desc}
                          </span>
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                  {/* All products link */}
                  <SheetClose asChild>
                    <Link
                      href="/products"
                      onClick={onClose}
                      className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-eclat-700 hover:underline"
                    >
                      Lihat Semua Produk
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </SheetClose>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Main links */}
          <div className="space-y-0.5">
            {mainLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition-colors',
                    isActive(link.href)
                      ? 'bg-eclat-50 text-eclat-700'
                      : 'text-eclat-dark hover:bg-eclat-50',
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-eclat-600" />
                  )}
                </Link>
              </SheetClose>
            ))}
          </div>
        </nav>

        {/* ── Bottom ─────────────────────────────────────────────────── */}
        <div className="border-t border-border px-6 pb-8 pt-5 space-y-4">

          {/* Contact info */}
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-eclat-600 shrink-0" />
              <span>+62 21 5151 8800</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-eclat-600 shrink-0" />
              <span>hello@eclat.id</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-3.5 w-3.5 text-eclat-600 shrink-0 mt-0.5" />
              <span>6 Lokasi di Indonesia</span>
            </div>
          </div>

          <Separator />

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-eclat-50 text-eclat-700 hover:bg-eclat-100 transition-colors"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

      </SheetContent>
    </Sheet>
  )
}
