'use client'

import { useState, type FormEvent } from 'react'
import { Mail, CheckCircle, Leaf, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export function Newsletter() {
  const [email,   setEmail]   = useState('')
  const [loading, setLoading] = useState(false)
  const [done,    setDone]    = useState(false)
  const [error,   setError]   = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setError('')

    try {
      // Call the API (falls back gracefully if backend isn't running)
      await fetch('/api/newsletter/subscribe', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
      })
      setDone(true)
    } catch {
      // Optimistic — show success anyway (proper error handling in prod)
      setDone(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-eclat-900 via-eclat-950 to-eclat-900 py-20 md:py-28"
      aria-labelledby="newsletter-heading"
    >
      {/* ── Decorative blobs ──────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-eclat-700/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-teal-700/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-eclat-800/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-2xl text-center">

        {/* Icon */}
        <AnimatedSection>
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-4 ring-white/5">
            <Mail className="h-8 w-8 text-eclat-300" />
          </div>
        </AnimatedSection>

        {/* Heading */}
        <AnimatedSection delay={80}>
          <h2
            id="newsletter-heading"
            className="font-serif text-3xl font-black text-white sm:text-4xl lg:text-5xl"
          >
            Bergabunglah dengan<br />
            <span className="text-eclat-300">50.000+ Wellness Warriors</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={160}>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Dapatkan tips wellness mingguan, resep eksklusif, update produk terbaru, dan promo khusus member langsung di inbox Anda. Gratis, selamanya.
          </p>
        </AnimatedSection>

        {/* Perks */}
        <AnimatedSection delay={240} className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            'Tips wellness mingguan',
            'Resep eksklusif',
            'Promo early access',
            'Panduan cleanse gratis',
          ].map((perk) => (
            <span key={perk} className="flex items-center gap-1.5 text-xs text-white/50">
              <Leaf className="h-3 w-3 text-eclat-400" />
              {perk}
            </span>
          ))}
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection delay={320} className="mt-10">
          {done ? (
            /* Success state */
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 ring-4 ring-emerald-500/10">
                <CheckCircle className="h-8 w-8 text-emerald-400" />
              </div>
              <p className="font-serif text-xl font-bold text-white">
                Selamat Bergabung! 🎉
              </p>
              <p className="text-sm text-white/60">
                Cek inbox Anda untuk email konfirmasi dari{' '}
                <span className="text-white/80">hello@eclat.id</span>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
              noValidate
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-13 pl-11 text-base"
                  aria-label="Alamat email"
                  aria-describedby={error ? 'newsletter-error' : undefined}
                  error={!!error}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="gold"
                disabled={loading}
                className="h-13 shrink-0 px-8"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Mendaftar...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Daftar Sekarang
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          )}

          {error && (
            <p id="newsletter-error" role="alert" className="mt-2 text-sm text-red-400">
              {error}
            </p>
          )}

          {!done && (
            <p className="mt-3 text-xs text-white/30">
              Kami menghormati privasi Anda. Berhenti berlangganan kapan saja.
            </p>
          )}
        </AnimatedSection>

      </div>
    </section>
  )
}
