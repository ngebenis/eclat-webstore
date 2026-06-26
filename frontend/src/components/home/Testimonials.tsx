'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { testimonials } from '@/data/testimonials'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const visible = 3 // cards visible on desktop
  const total   = testimonials.length

  const canPrev = current > 0
  const canNext = current < total - visible

  const prev = useCallback(() => {
    if (canPrev) setCurrent((c) => c - 1)
  }, [canPrev])

  const next = useCallback(() => {
    if (canNext) setCurrent((c) => c + 1)
  }, [canNext])

  /* Auto-scroll on mobile (1 card) */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total)
    }, 5000)
    return () => clearInterval(timer)
  }, [total])

  return (
    <section className="section-py bg-white" aria-labelledby="testimonials-heading">
      <div className="container mx-auto">

        {/* Header + controls */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <AnimatedSection>
            <SectionHeader
              badge="Testimoni"
              title="Apa Kata\nPelanggan Kami"
              id="testimonials-heading"
            />
          </AnimatedSection>

          {/* Desktop nav arrows */}
          <AnimatedSection animation="slide-in-right" className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={cn(
                'flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all',
                canPrev
                  ? 'border-eclat-700 text-eclat-700 hover:bg-eclat-700 hover:text-white'
                  : 'border-border text-border cursor-not-allowed',
              )}
              aria-label="Testimonial sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className={cn(
                'flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all',
                canNext
                  ? 'border-eclat-700 text-eclat-700 hover:bg-eclat-700 hover:text-white'
                  : 'border-border text-border cursor-not-allowed',
              )}
              aria-label="Testimonial berikutnya"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </AnimatedSection>
        </div>

        {/* Carousel */}
        <div className="mt-12 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${current} * (100% / 3 + 8px)))` }}
            role="list"
            aria-label="Daftar testimonial"
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                role="listitem"
                className="flex min-w-[calc(100%-1rem)] flex-col rounded-3xl border border-border bg-white p-7 shadow-sm hover:shadow-md transition-shadow sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
              >
                {/* Quote icon */}
                <Quote className="mb-4 h-8 w-8 text-eclat-200" />

                {/* Stars */}
                <div className="mb-3 flex gap-0.5" aria-label={`Rating: ${t.rating} bintang`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-4 w-4',
                        i < t.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-gray-100 text-gray-200',
                      )}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 text-sm leading-relaxed text-eclat-800 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Product tag */}
                {t.product && (
                  <div className="mt-4">
                    <span className="rounded-full bg-eclat-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-eclat-600">
                      {t.product}
                    </span>
                  </div>
                )}

                {/* Author */}
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover ring-2 ring-eclat-100"
                  />
                  <div>
                    <p className="text-sm font-bold text-eclat-950">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(Math.min(i, total - visible))}
              aria-label={`Testimonial ${i + 1}`}
              className={cn(
                'rounded-full transition-all duration-300',
                i === current
                  ? 'h-2.5 w-6 bg-eclat-700'
                  : 'h-2.5 w-2.5 bg-border hover:bg-eclat-300',
              )}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
