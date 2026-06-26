import Link from 'next/link'
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Droplets,
  Leaf,
  ArrowRight,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'

/* ─── Link columns ───────────────────────────────────────────────────────── */
const productLinks = [
  { label: 'Cold Pressed Juices', href: '/products?category=juices' },
  { label: 'Wellness Shots',      href: '/products?category=shots' },
  { label: 'Cleanse Programs',    href: '/products?category=cleanses' },
  { label: 'Coconut Water',       href: '/products?category=coconut' },
  { label: 'Semua Produk',        href: '/products' },
]

const companyLinks = [
  { label: 'Tentang ÉCLAT',  href: '/about' },
  { label: 'Blog & Artikel', href: '/blog' },
  { label: 'Lokasi Toko',    href: '/find-store' },
  { label: 'Hubungi Kami',   href: '/contact' },
  { label: 'FAQ',            href: '/about#faq' },
]

const legalLinks = [
  { label: 'Kebijakan Privasi', href: '/privacy' },
  { label: 'Syarat & Ketentuan', href: '/terms' },
  { label: 'Kebijakan Cookie', href: '/cookies' },
]

const socialLinks = [
  { Icon: Instagram, href: 'https://instagram.com/eclat.id', label: 'Instagram' },
  { Icon: Twitter,   href: 'https://twitter.com/eclat_id',   label: 'Twitter' },
  { Icon: Youtube,   href: 'https://youtube.com/@eclat',      label: 'YouTube' },
  { Icon: Facebook,  href: 'https://facebook.com/eclat.id',  label: 'Facebook' },
]

const certBadges = [
  { label: 'BPOM Certified',     icon: '✓' },
  { label: 'Halal MUI',          icon: '✓' },
  { label: 'ISO 22000',          icon: '✓' },
  { label: 'Organic Certified',  icon: '✓' },
]

/* ─── Component ──────────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="bg-eclat-950 text-white/80">

      {/* ── Top CTA strip ──────────────────────────────────────────────── */}
      <div className="border-b border-white/10 bg-eclat-900">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <div>
            <p className="font-serif text-xl font-semibold text-white">
              Mulai Perjalanan Wellness Anda Hari Ini
            </p>
            <p className="mt-1 text-sm text-white/60">
              Bergabung dengan 50.000+ pelanggan yang sudah merasakan manfaatnya.
            </p>
          </div>
          <Link
            href="/products"
            className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-eclat-900 transition-all hover:bg-eclat-50 hover:shadow-lg hover:-translate-y-0.5"
          >
            Jelajahi Produk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ── Main footer body ───────────────────────────────────────────── */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

          {/* ── Brand column ─────────────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
            {/* Logo */}
            <Link href="/" className="mb-4 flex items-center gap-2.5 group w-fit">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <Droplets size={20} className="text-white" />
              </span>
              <span>
                <span className="block font-serif text-2xl font-bold tracking-[0.15em] text-white">
                  ÉCLAT
                </span>
                <span className="block text-[9px] font-semibold tracking-[0.25em] uppercase text-white/50">
                  Cold Press Juice
                </span>
              </span>
            </Link>

            {/* Tagline */}
            <p className="mb-6 max-w-[260px] text-sm leading-relaxed text-white/60">
              Premium cold-pressed juices & wellness programs dari bahan lokal organik terbaik Indonesia.{' '}
              <span className="text-white/80 font-medium">Pure. Natural. Radiant.</span>
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 text-sm text-white/60">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-eclat-400 shrink-0" />
                <a href="tel:+622151518800" className="hover:text-white transition-colors">
                  +62 21 5151 8800
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-eclat-400 shrink-0" />
                <a href="mailto:hello@eclat.id" className="hover:text-white transition-colors">
                  hello@eclat.id
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-eclat-400 shrink-0 mt-0.5" />
                <span>6 Lokasi: Jakarta, Bandung,<br />Surabaya & Bali</span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-eclat-700 hover:text-white hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Products column ───────────────────────────────────────── */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Produk
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white flex items-center gap-1.5 group"
                  >
                    <span className="h-px w-3 bg-white/20 group-hover:bg-eclat-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company column ────────────────────────────────────────── */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Perusahaan
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white flex items-center gap-1.5 group"
                  >
                    <span className="h-px w-3 bg-white/20 group-hover:bg-eclat-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Newsletter mini column ────────────────────────────────── */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-white/60 leading-relaxed">
              Dapatkan tips wellness, resep, dan promo eksklusif langsung di inbox Anda.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-2"
            >
              <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5 focus-within:border-eclat-500 transition-colors">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center gap-1 px-4 text-sm font-semibold text-eclat-400 hover:text-white transition-colors"
                  aria-label="Daftar newsletter"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p className="text-[10px] text-white/30">
                Dengan mendaftar, Anda menyetujui kebijakan privasi kami.
              </p>
            </form>

            {/* Certifications */}
            <div className="mt-6 flex flex-wrap gap-2">
              {certBadges.map((cert) => (
                <span
                  key={cert.label}
                  className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/50"
                >
                  <span className="text-eclat-400">{cert.icon}</span>
                  {cert.label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} ÉCLAT Cold Press Juice. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/30 transition-colors hover:text-white/60"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/30">
            <Leaf className="h-3 w-3 text-eclat-500" />
            <span>Made with care for your wellness</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
