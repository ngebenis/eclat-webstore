import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn, formatPrice } from '@/lib/utils'
import type { Product } from '@/lib/types'

interface ProductCardProps {
  product:    Product
  className?: string
  priority?:  boolean
}

export function ProductCard({ product, className, priority = false }: ProductCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl bg-white',
        'border border-border shadow-sm',
        'hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
        className,
      )}
    >
      {/* ── Image area ─────────────────────────────────────────────── */}
      <div className="relative h-56 overflow-hidden">
        {/* Gradient background fallback */}
        <div className={cn(
          'absolute inset-0 bg-gradient-to-br',
          product.color,
        )} />

        {/* Product image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />

        {/* Overlaid badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.badge && (
            <Badge
              variant={
                product.badge === 'Best Seller' ? 'best-seller' :
                product.badge === 'New'         ? 'new'         :
                product.badge === 'Hot'         ? 'hot'         : 'default'
              }
            >
              {product.badge}
            </Badge>
          )}
          {!product.isAvailable && (
            <Badge variant="muted">Habis</Badge>
          )}
        </div>

        {/* Volume pill */}
        <div className="absolute bottom-3 right-3">
          <span className="rounded-full bg-black/30 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {product.volume}
          </span>
        </div>
      </div>

      {/* ── Content ────────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category */}
        <span className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-eclat-500">
          {product.category}
        </span>

        {/* Name + tagline */}
        <h3 className="font-serif text-lg font-bold leading-snug text-eclat-950 group-hover:text-eclat-700 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-muted-foreground italic">
          {product.tagline}
        </p>

        {/* Description */}
        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* Ingredients */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.ingredients.slice(0, 4).map((ing) => (
            <span
              key={ing}
              className="rounded-full bg-eclat-50 px-2.5 py-0.5 text-[10px] font-medium text-eclat-700"
            >
              {ing}
            </span>
          ))}
          {product.ingredients.length > 4 && (
            <span className="rounded-full bg-eclat-50 px-2.5 py-0.5 text-[10px] font-medium text-eclat-500">
              +{product.ingredients.length - 4}
            </span>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price + CTA */}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <div>
            <span className="text-xs text-muted-foreground">Mulai dari</span>
            <p className="text-base font-bold text-eclat-900">
              {formatPrice(product.price)}
            </p>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="flex items-center gap-1.5 rounded-full bg-eclat-800 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-eclat-900 hover:gap-2.5 group/btn"
            aria-label={`Lihat detail ${product.name}`}
          >
            Lihat Detail
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
