import type { Metadata } from 'next'
import { notFound }  from 'next/navigation'
import Image         from 'next/image'
import Link          from 'next/link'
import { ArrowLeft, Check, MapPin, Droplets } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ProductCard }     from '@/components/shared/ProductCard'
import { Badge }           from '@/components/ui/badge'
import { Button }          from '@/components/ui/button'
import { products, getProduct } from '@/data/products'
import { formatPrice, cn }      from '@/lib/utils'

/* ─── Static params ──────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product  = getProduct(slug)
  if (!product) return {}
  return {
    title:       `${product.name} — ÉCLAT Cold Press Juice`,
    description: product.description,
    openGraph: {
      title:  product.name,
      images: [{ url: product.image }],
    },
    alternates: { canonical: `https://eclat.id/products/${slug}` },
  }
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product  = getProduct(slug)
  if (!product) notFound()

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      {/* ── Breadcrumb ───────────────────────────────────────────────── */}
      <nav className="border-b border-border bg-white py-3" aria-label="Breadcrumb">
        <div className="container mx-auto flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-eclat-700">Beranda</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-eclat-700">Produk</Link>
          <span>/</span>
          <Link
            href={`/products?category=${product.categorySlug}`}
            className="hover:text-eclat-700"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="font-medium text-eclat-900">{product.name}</span>
        </div>
      </nav>

      {/* ── Main product section ─────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Image column */}
            <AnimatedSection animation="slide-in-left">
              <div className="sticky top-24">
                <div className={cn(
                  'relative h-[480px] overflow-hidden rounded-3xl bg-gradient-to-br',
                  product.color,
                )}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover mix-blend-overlay opacity-70"
                    priority
                  />
                  {/* Floating volume pill */}
                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-eclat-900 shadow-sm">
                      {product.volume}
                    </span>
                  </div>
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute right-5 top-5">
                      <Badge variant={product.badge === 'Best Seller' ? 'best-seller' : 'new'}>
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Thumbnail row if multiple images */}
                {product.images && product.images.length > 1 && (
                  <div className="mt-3 flex gap-3">
                    {product.images.map((img, i) => (
                      <div key={i} className="relative h-20 w-20 overflow-hidden rounded-xl border-2 border-border">
                        <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Info column */}
            <AnimatedSection animation="slide-in-right">
              <div className="space-y-6">
                {/* Category + name */}
                <div>
                  <span className="text-sm font-bold uppercase tracking-wider text-eclat-500">
                    {product.category}
                  </span>
                  <h1 className="mt-1 font-serif text-4xl font-black text-eclat-950 sm:text-5xl">
                    {product.name}
                  </h1>
                  <p className="mt-2 text-lg italic text-muted-foreground">{product.tagline}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl font-black text-eclat-950">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-sm text-muted-foreground">/ {product.volume}</span>
                </div>

                {/* Description */}
                <p className="leading-relaxed text-muted-foreground">
                  {product.longDescription || product.description}
                </p>

                {/* Ingredients */}
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-eclat-700">
                    Bahan-Bahan
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="rounded-full border border-eclat-200 bg-eclat-50 px-4 py-1.5 text-sm font-medium text-eclat-800"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-eclat-700">
                    Manfaat
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-eclat-800">
                        <Check className="h-4 w-4 shrink-0 text-eclat-600" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nutrition */}
                {product.nutrition && (
                  <div className="rounded-2xl border border-border bg-eclat-50/50 p-5">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-eclat-700">
                      Informasi Nutrisi <span className="font-normal normal-case">(per {product.volume})</span>
                    </h3>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {[
                        { label: 'Kalori',   value: `${product.nutrition.calories}kcal` },
                        { label: 'Protein',  value: `${product.nutrition.protein}g` },
                        { label: 'Karbo',    value: `${product.nutrition.carbs}g` },
                        { label: 'Lemak',    value: `${product.nutrition.fat}g` },
                        { label: 'Serat',    value: `${product.nutrition.fiber}g` },
                        { label: 'Gula',     value: `${product.nutrition.sugar}g` },
                      ].map(({ label, value }) => (
                        <div key={label} className="rounded-xl bg-white p-3 text-center border border-border">
                          <p className="font-serif text-lg font-black text-eclat-950">{value}</p>
                          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA — no cart, only find store */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="flex-1">
                    <Link href="/find-store">
                      <MapPin className="h-4 w-4" />
                      Temukan di Toko Terdekat
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact?subject=order">
                      <Droplets className="h-4 w-4" />
                      Pesan via WhatsApp
                    </Link>
                  </Button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {['Cold Pressed', 'HPP Technology', 'BPOM Certified', 'Halal MUI'].map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground">#{tag.toLowerCase().replace(/\s/g, '-')}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Related products ─────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="section-py-sm bg-eclat-50/40">
          <div className="container mx-auto">
            <AnimatedSection>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold text-eclat-950">
                  Produk Serupa
                </h2>
                <Link
                  href={`/products?category=${product.categorySlug}`}
                  className="flex items-center gap-1 text-sm font-semibold text-eclat-700 hover:underline"
                >
                  Lihat Semua <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
                </Link>
              </div>
            </AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 80}>
                  <ProductCard product={p} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
