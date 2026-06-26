import Link from 'next/link'
import { Check, Star } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { cleansePrograms } from '@/data/cleansePrograms'
import { formatPrice, cn } from '@/lib/utils'

export function CleansePrograms() {
  return (
    <section
      className="section-py bg-gradient-to-b from-eclat-950 to-eclat-900"
      aria-labelledby="cleanse-heading"
    >
      <div className="container mx-auto">

        <AnimatedSection>
          <SectionHeader
            badge="Program Detoksifikasi"
            title="Pilih Program\nCleanse Anda"
            subtitle="Dirancang bersama ahli gizi untuk detoksifikasi menyeluruh dan transformasi kebiasaan hidup sehat."
            centered
            light
            id="cleanse-heading"
          />
        </AnimatedSection>

        {/* Program cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {cleansePrograms.map((program, i) => (
            <AnimatedSection key={program.id} delay={i * 100} animation="slide-up">
              <div className={cn(
                'relative flex flex-col rounded-3xl border p-8 transition-all duration-300',
                program.popular
                  ? 'border-eclat-400 bg-white shadow-2xl shadow-eclat-900/50 scale-[1.02]'
                  : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20',
              )}>

                {/* Popular badge */}
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                      <Star className="h-3 w-3 fill-white" />
                      Paling Populer
                    </span>
                  </div>
                )}

                {/* Duration pill */}
                <div className={cn(
                  'mb-5 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold',
                  program.popular
                    ? 'bg-eclat-100 text-eclat-800'
                    : 'bg-white/10 text-white',
                )}>
                  {program.duration}
                </div>

                {/* Name */}
                <h3 className={cn(
                  'font-serif text-2xl font-black',
                  program.popular ? 'text-eclat-950' : 'text-white',
                )}>
                  {program.name}
                </h3>

                {/* Bottles count */}
                <p className={cn(
                  'mt-1 text-sm font-medium',
                  program.popular ? 'text-eclat-600' : 'text-white/50',
                )}>
                  {program.bottles} botol cold press juice 350ml
                </p>

                {/* Description */}
                <p className={cn(
                  'mt-3 text-sm leading-relaxed',
                  program.popular ? 'text-eclat-700' : 'text-white/60',
                )}>
                  {program.description}
                </p>

                {/* Divider */}
                <div className={cn(
                  'my-6 h-px',
                  program.popular ? 'bg-eclat-100' : 'bg-white/10',
                )} />

                {/* Features */}
                <ul className="flex-1 space-y-2.5">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className={cn(
                        'mt-0.5 h-4 w-4 shrink-0',
                        program.popular ? 'text-eclat-600' : 'text-eclat-400',
                      )} />
                      <span className={cn(
                        'text-sm',
                        program.popular ? 'text-eclat-800' : 'text-white/70',
                      )}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="mt-8">
                  <p className={cn(
                    'mb-1 text-xs',
                    program.popular ? 'text-eclat-500' : 'text-white/40',
                  )}>
                    Harga paket
                  </p>
                  <p className={cn(
                    'mb-5 font-serif text-3xl font-black',
                    program.popular ? 'text-eclat-950' : 'text-white',
                  )}>
                    {formatPrice(program.price)}
                  </p>

                  <Link
                    href={`/contact?program=${program.slug}`}
                    className={cn(
                      'flex w-full items-center justify-center rounded-2xl py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5',
                      program.popular
                        ? 'bg-eclat-800 text-white hover:bg-eclat-900 hover:shadow-lg'
                        : 'border-2 border-white/20 text-white hover:bg-white/10',
                    )}
                  >
                    Mulai Program {program.name}
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footnote */}
        <AnimatedSection delay={400} className="mt-10 text-center">
          <p className="text-sm text-white/40">
            Semua program termasuk konsultasi pre-cleanse dan panduan nutrisi post-cleanse.
            Hubungi kami untuk program korporat dan grup.
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}
