import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ProductCard } from '@/components/shared/ProductCard'
import { featuredProducts } from '@/data/products'

export function FeaturedProducts() {
  return (
    <section
      className="section-py bg-gradient-to-b from-eclat-50/50 to-white"
      aria-labelledby="featured-heading"
    >
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <AnimatedSection>
            <SectionHeader
              badge="Koleksi Unggulan"
              title="Pilihan Terbaik\nuntuk Wellness Anda"
              subtitle="Setiap botol diformulasikan oleh ahli gizi dan dibuat dari bahan organik terpilih."
              id="featured-heading"
            />
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" className="shrink-0">
            <Link
              href="/products"
              className="flex items-center gap-2 rounded-full border-2 border-eclat-700 px-5 py-2.5 text-sm font-bold text-eclat-700 transition-all hover:bg-eclat-700 hover:text-white"
            >
              Semua Produk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Product grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 80} animation="slide-up">
              <ProductCard
                product={product}
                priority={i < 3}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom stats strip */}
        <AnimatedSection delay={500} className="mt-16">
          <div className="rounded-3xl bg-eclat-900 p-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: '12+',    label: 'Varian Produk' },
                { value: '47+',    label: 'Petani Organik Mitra' },
                { value: '50K+',   label: 'Pelanggan Setia' },
                { value: '6',      label: 'Toko di Indonesia' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-serif text-4xl font-black text-white md:text-5xl">
                    {value}
                  </p>
                  <p className="mt-1.5 text-sm text-white/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
