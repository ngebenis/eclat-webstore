import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { productCategories } from '@/data/products'
import { cn } from '@/lib/utils'

export function ProductCategories() {
  return (
    <section className="section-py bg-white" aria-labelledby="categories-heading">
      <div className="container mx-auto">

        <AnimatedSection>
          <SectionHeader
            badge="Kategori Produk"
            title="Temukan Produk\nYang Tepat untuk Anda"
            subtitle="Dari cold press juice harian hingga program cleanse intensif — semua dirancang untuk mendukung perjalanan wellness Anda."
            centered
            id="categories-heading"
          />
        </AnimatedSection>

        {/* Category grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((cat, i) => (
            <AnimatedSection key={cat.slug} delay={i * 80} animation="slide-up">
              <Link
                href={`/products?category=${cat.slug}`}
                className={cn(
                  'group relative flex h-72 flex-col justify-end overflow-hidden rounded-3xl',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eclat-700 focus-visible:ring-offset-2',
                )}
                aria-label={`Lihat kategori ${cat.name}`}
              >
                {/* Background image */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-b',
                  'from-transparent via-black/20 to-black/80',
                  'group-hover:to-black/90 transition-all duration-300',
                )} />

                {/* Category colour accent */}
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-30 mix-blend-multiply',
                  cat.color,
                )} />

                {/* Text content */}
                <div className="relative z-10 p-5">
                  {/* Emoji + count pill */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-2xl">{cat.icon}</span>
                    <span className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {cat.count} Produk
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold leading-tight text-white">
                    {cat.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/70">
                    {cat.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">
                    Lihat Semua
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View all link */}
        <AnimatedSection delay={400} className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-eclat-700 underline-offset-4 hover:underline hover:text-eclat-900 transition-colors"
          >
            Lihat Seluruh Produk ÉCLAT
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>

      </div>
    </section>
  )
}
