import type { HeroSlide } from '@/lib/types'

/* ═══════════════════════════════════════════════════════════════════════════
   ÉCLAT — Hero carousel slides
═══════════════════════════════════════════════════════════════════════════ */

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    badge: 'Cold Press · HPP Teknologi',
    title: 'Pure.\nCold.\nPressed.',
    subtitle: 'Nutrisi Hidup dalam Setiap Tetes',
    description:
      'Kami memeras dingin buah & sayuran terbaik Indonesia untuk menghadirkan nutrisi penuh yang tubuh Anda butuhkan — tanpa kompromi.',
    ctaPrimary:   { label: 'Lihat Produk Kami',   href: '/products' },
    ctaSecondary: { label: 'Pelajari Lebih Lanjut', href: '/about' },
    image:
      'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=1200&h=900&fit=crop&q=85',
    bgColor: 'from-eclat-950 via-eclat-900 to-eclat-800',
  },
  {
    id: 2,
    badge: 'Program Detoksifikasi',
    title: 'Reset.\nRefresh.\nRevive.',
    subtitle: 'Program Cleanse 1, 3 & 5 Hari',
    description:
      'Berikan tubuh Anda waktu untuk beristirahat dan meregenerasi diri. Program cleanse terstruktur kami dirancang bersama ahli gizi untuk hasil optimal.',
    ctaPrimary:   { label: 'Lihat Program Cleanse', href: '/products?category=cleanses' },
    ctaSecondary: { label: 'Konsultasi Gratis',      href: '/contact' },
    image:
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=1200&h=900&fit=crop&q=85',
    bgColor: 'from-teal-900 via-teal-800 to-emerald-900',
  },
  {
    id: 3,
    badge: 'Bahan Lokal Organik',
    title: 'Dari Ladang\nTerbaik\nIndonesia.',
    subtitle: '47+ Petani Mitra Organik',
    description:
      'Setiap botol ÉCLAT menceritakan kisah petani lokal kami. Dari kale organik Lembang hingga nanas manis Lampung — kualitas dimulai dari sumber.',
    ctaPrimary:   { label: 'Kisah Kami', href: '/about' },
    ctaSecondary: { label: 'Lihat Blog',  href: '/blog' },
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=900&fit=crop&q=85',
    bgColor: 'from-green-900 via-eclat-900 to-eclat-950',
  },
]
