import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeader }   from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ProductCard }     from '@/components/shared/ProductCard'
import { Newsletter }      from '@/components/home/Newsletter'
import { products, productCategories } from '@/data/products'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title:       'Produk — ÉCLAT Cold Press Juice',
  description: 'Jelajahi seluruh koleksi ÉCLAT: cold pressed juices, wellness shots, cleanse programs, dan coconut water dari bahan lokal organik terbaik.',
  alternates:  { canonical: 'https://eclat.id/products' },
}

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams

  const filtered = category
    ? products.filter((p) => p.categorySlug === category)
    : products

  const activeCategory = productCategories.find((c) => c.slug === category)

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-eclat-950 to-eclat-900 py-20 md:py-28">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-eclat-400" />
              {activeCategory ? activeCategory.name : 'Semua Produk'}
            </span>
            <h1 className="font-serif text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              {activeCategory ? activeCategory.name : 'Koleksi ÉCLAT'}
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
              {activeCategory
                ? activeCategory.description
                : 'Cold pressed juices, wellness shots, cleanse programs & coconut water dari bahan lokal organik terpilih.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Category filter ──────────────────────────────────────────── */}
      <div className="sticky top-16 z-30 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="container mx-auto">
          <nav
            className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar"
            aria-label="Filter kategori produk"
          >
            <Link
              href="/products"
              className={cn(
                'flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all',
                !category
                  ? 'bg-eclat-800 text-white'
                  : 'text-muted-foreground hover:text-eclat-800 hover:bg-eclat-50',
              )}
            >
              Semua
              <span className={cn(
                'rounded-full px-1.5 py-0.5 text-[10px] font-bold',
                !category ? 'bg-white/20 text-white' : 'bg-eclat-100 text-eclat-700',
              )}>
                {products.length}
              </span>
            </Link>

            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className={cn(
                  'flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all',
                  category === cat.slug
                    ? 'bg-eclat-800 text-white'
                    : 'text-muted-foreground hover:text-eclat-800 hover:bg-eclat-50',
                )}
              >
                <span>{cat.icon}</span>
                {cat.name}
                <span className={cn(
                  'rounded-full px-1.5 py-0.5 text-[10px] font-bold',
                  category === cat.slug ? 'bg-white/20 text-white' : 'bg-eclat-100 text-eclat-700',
                )}>
                  {cat.count}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Product grid ─────────────────────────────────────────────── */}
      <section className="section-py bg-gradient-to-b from-eclat-50/30 to-white">
        <div className="container mx-auto">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-4xl">🥤</p>
              <p className="mt-4 font-serif text-xl font-bold text-eclat-950">
                Produk tidak ditemukan
              </p>
              <p className="mt-2 text-muted-foreground">Coba kategori yang berbeda.</p>
              <Link
                href="/products"
                className="mt-6 inline-flex rounded-full bg-eclat-800 px-6 py-3 text-sm font-bold text-white hover:bg-eclat-900"
              >
                Lihat Semua Produk
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Menampilkan{' '}
                  <strong className="text-eclat-900">{filtered.length}</strong>{' '}
                  produk
                  {activeCategory && (
                    <> dalam <strong className="text-eclat-700">{activeCategory.name}</strong></>
                  )}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((product, i) => (
                  <AnimatedSection key={product.id} delay={i * 60} animation="slide-up">
                    <ProductCard product={product} priority={i < 4} />
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Newsletter />
    </>
  )
}
