'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { heroSlides } from '@/data/hero'

export function HeroBanner() {
  const [current,  setCurrent]  = useState(0)
  const [animating, setAnimating] = useState(false)

  const total = heroSlides.length

  const goTo = useCallback((idx: number) => {
    if (animating) return
    setAnimating(true)
    setCurrent((idx + total) % total)
    setTimeout(() => setAnimating(false), 600)
  }, [animating, total])

  const prev = useCallback(() => goTo(current - 1), [current, goTo])
  const next = useCallback(() => goTo(current + 1), [current, goTo])

  /* Auto-advance */
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = heroSlides[current]

  return (
    <section className="relative min-h-screen w-full overflow-hidden" aria-label="Hero banner">

      {/* ── Slides ─────────────────────────────────────────────────────── */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0',
          )}
        >
          {/* Background image */}
          <Image
            src={s.image}
            alt={s.title.replace(/\n/g, ' ')}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient overlay — left dark, right lighter */}
          <div className={cn(
            'absolute inset-0 bg-gradient-to-r',
            s.bgColor,
            'opacity-90',
          )} />
          {/* Bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-eclat-950/60 to-transparent" />
        </div>
      ))}

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-20 container mx-auto flex min-h-screen items-center">
        <div className="w-full max-w-2xl pb-24 pt-28 lg:pt-20">

          {/* Badge */}
          <div
            key={`badge-${current}`}
            className="mb-6 animate-slide-up"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-eclat-400 animate-pulse-soft" />
              {slide.badge}
            </span>
          </div>

          {/* Title */}
          <h1
            key={`title-${current}`}
            className="animate-slide-up font-serif text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{ animationDelay: '80ms' }}
          >
            {slide.title.split('\n').map((line, i) => (
              <span key={i} className="block">
                {i > 0 && (
                  <span className="text-eclat-300">{line}</span>
                )}
                {i === 0 && line}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            key={`sub-${current}`}
            className="animate-slide-up mt-4 text-lg font-semibold text-white/80 sm:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            {slide.subtitle}
          </p>

          {/* Description */}
          <p
            key={`desc-${current}`}
            className="animate-slide-up mt-3 max-w-lg text-base leading-relaxed text-white/70"
            style={{ animationDelay: '240ms' }}
          >
            {slide.description}
          </p>

          {/* CTAs */}
          <div
            key={`cta-${current}`}
            className="animate-slide-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: '320ms' }}
          >
            <Button asChild size="lg" variant="white">
              <Link href={slide.ctaPrimary.href}>
                {slide.ctaPrimary.label}
              </Link>
            </Button>
            {slide.ctaSecondary && (
              <Button asChild size="lg" variant="outline-white">
                <Link href={slide.ctaSecondary.href}>
                  {slide.ctaSecondary.label}
                </Link>
              </Button>
            )}
          </div>

          {/* Trust indicators */}
          <div
            className="animate-fade-in mt-10 flex flex-wrap items-center gap-6 text-xs text-white/50"
            style={{ animationDelay: '500ms' }}
          >
            {['HPP Technology', '100% Cold Pressed', 'BPOM Certified', 'Halal MUI'].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-eclat-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Controls ────────────────────────────────────────────────────── */}
      {/* Prev / Next arrows */}
      <div className="absolute inset-y-0 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Slide sebelumnya"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Slide berikutnya"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Pergi ke slide ${i + 1}`}
            className={cn(
              'rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
              i === current
                ? 'h-2.5 w-8 bg-white'
                : 'h-2.5 w-2.5 bg-white/40 hover:bg-white/60',
            )}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  )
}
