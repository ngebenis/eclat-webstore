import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const milestones = [
  { year: '2019', label: 'ÉCLAT didirikan di Jakarta' },
  { year: '2021', label: 'Ekspansi ke Bandung & Bali' },
  { year: '2023', label: '47 petani organik mitra' },
  { year: '2024', label: 'Sertifikasi ISO 22000' },
]

const stats = [
  { value: '5+', label: 'Tahun Berpengalaman' },
  { value: '50K+', label: 'Pelanggan Setia' },
  { value: '12+', label: 'Varian Produk' },
]

export function OurStory() {
  return (
    <section className="section-py overflow-hidden bg-eclat-50/50" aria-labelledby="story-heading">
      <div className="container mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── Left: Image collage ──────────────────────────────────── */}
          <AnimatedSection animation="slide-in-left" className="order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&h=900&fit=crop&q=80"
                  alt="Petani organik mitra ÉCLAT di kebun"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/30 to-transparent" />
              </div>

              {/* Floating card — stats */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl bg-white p-5 shadow-xl border border-border">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Fakta Kami
                </p>
                <div className="flex gap-6">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="text-center">
                      <p className="font-serif text-2xl font-black text-eclat-950">{value}</p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card — certification */}
              <div className="absolute -left-4 sm:-left-8 top-8 rounded-2xl bg-eclat-800 p-4 shadow-xl">
                <p className="text-xs font-bold text-white/60">Bersertifikat</p>
                <p className="text-sm font-bold text-white">BPOM · Halal · ISO</p>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right: Text content ──────────────────────────────────── */}
          <AnimatedSection animation="slide-in-right" className="order-1 lg:order-2">
            <SectionHeader
              badge="Cerita Kami"
              title="Dari Passion\nmenjadi Gerakan\nWellness"
              subtitle=""
              id="story-heading"
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                ÉCLAT lahir dari keyakinan sederhana: <strong className="text-eclat-900">tubuh yang sehat dimulai dari nutrisi yang tepat</strong>. Pada 2019, dengan hydraulic press pertama dan kebun kale organik di Lembang, kami mulai membangun sesuatu yang lebih dari sekadar bisnis jus.
              </p>
              <p>
                Kami membangun ekosistem wellness — dari petani organik yang kami dukung langsung, hingga laboratorium gizi yang memvalidasi setiap formula kami. Setiap botol ÉCLAT adalah hasil kolaborasi antara alam Indonesia dan sains nutrisi modern.
              </p>
              <p>
                Lima tahun kemudian, kami masih berpegang pada filosofi awal:{' '}
                <em className="text-eclat-800 font-medium">Pure. Natural. Radiant.</em> Karena Anda layak mendapatkan yang terbaik, tanpa kompromi.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-8 space-y-3">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-center gap-4">
                  <span className="flex h-9 w-16 shrink-0 items-center justify-center rounded-full bg-eclat-100 text-xs font-bold text-eclat-700">
                    {m.year}
                  </span>
                  <span className="text-sm text-eclat-800">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-eclat-800 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-eclat-900 hover:shadow-lg hover:-translate-y-0.5"
              >
                Pelajari Selengkapnya
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
