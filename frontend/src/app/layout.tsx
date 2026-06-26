import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

/* ─── Fonts ─────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

/* ─── Viewport ───────────────────────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: '#052e16',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

/* ─── Site-wide Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://eclat.id'),
  title: {
    default: 'ÉCLAT Cold Press Juice — Pure. Natural. Radiant.',
    template: '%s | ÉCLAT Cold Press Juice',
  },
  description:
    'Discover ÉCLAT Cold Press Juice — premium cold-pressed juices, wellness shots, and cleanse programs crafted from the finest local ingredients. Pure nutrition, zero compromise.',
  keywords: [
    'cold press juice',
    'cold pressed juice',
    'wellness shots',
    'juice cleanse',
    'detox juice',
    'healthy drinks',
    'natural juice',
    'ÉCLAT',
    'jus cold press',
    'minuman sehat',
  ],
  authors: [{ name: 'ÉCLAT', url: 'https://eclat.id' }],
  creator: 'ÉCLAT',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    url: 'https://eclat.id',
    siteName: 'ÉCLAT Cold Press Juice',
    title: 'ÉCLAT Cold Press Juice — Pure. Natural. Radiant.',
    description:
      'Premium cold-pressed juices and wellness programs crafted from the finest local ingredients.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ÉCLAT Cold Press Juice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ÉCLAT Cold Press Juice',
    description: 'Premium cold-pressed juices and wellness programs.',
    images: ['/og-image.jpg'],
    creator: '@eclat_id',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://eclat.id',
  },
}

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
