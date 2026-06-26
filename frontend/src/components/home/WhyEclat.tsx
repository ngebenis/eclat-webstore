import { Droplets, ShieldCheck, Leaf, Zap } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const features = [
  {
    Icon:  Droplets,
    color: 'bg-blue-50 text-blue-600',
    ring:  'ring-blue-100',
    title: 'Cold Press Technology',
    description:
      'Proses pengepresan dingin pada tekanan hidraulik optimal mempertahankan hingga 70% lebih banyak nutrisi dibanding metode konvensional. Tidak ada panas, tidak ada oksidasi berlebih.',
    stat:  '70%',
    statLabel: 'Nutrisi Lebih Terjaga',
  },
  {
    Icon:  ShieldCheck,
    color: 'bg-emerald-50 text-emerald-600',
    ring:  'ring-emerald-100',
    title: 'HPP — No Preservatives',
    description:
      'High Pressure Processing (HPP) menginaktivasi patogen secara alami tanpa panas dan tanpa bahan kimia. Umur simpan hingga 45 hari dengan label 100% bersih.',
    stat:  '0',
    statLabel: 'Bahan Pengawet',
  },
  {
    Icon:  Leaf,
    color: 'bg-lime-50 text-lime-600',
    ring:  'ring-lime-100',
    title: 'Bahan Lokal Organik',
    description:
      'Kami bermitra langsung dengan 47+ petani organik lokal di Jawa dan Bali. Bahan baku segar dipanen dan diproses dalam 24 jam untuk kesegaran optimal.',
    stat:  '47+',
    statLabel: 'Petani Organik Mitra',
  },
  {
    Icon:  Zap,
    color: 'bg-amber-50 text-amber-600',
    ring:  'ring-amber-100',
    title: 'Enzim & Nutrisi Hidup',
    description:
      'Enzim yang aktif secara biologis membantu pencernaan dan penyerapan nutrisi. Setiap tegukan mengandung vitamin, mineral, dan fitokimia dalam bentuk paling bioavailable.',
    stat:  '100%',
    statLabel: 'Enzim Aktif',
  },
]

export function WhyEclat() {
  return (
    <section className="section-py bg-white" aria-labelledby="why-eclat-heading">
      <div className="container mx-auto">

        <AnimatedSection>
          <SectionHeader
            badge="Keunggulan ÉCLAT"
            title="Mengapa Memilih\nÉCLAT?"
            subtitle="Setiap keputusan produksi kami didasarkan pada satu prinsip: menghadirkan nutrisi terbaik tanpa kompromi."
            centered
            id="why-eclat-heading"
          />
        </AnimatedSection>

        {/* Feature cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, color, ring, title, description, stat, statLabel }, i) => (
            <AnimatedSection key={title} delay={i * 100} animation="slide-up">
              <div className="group flex flex-col rounded-3xl border border-border bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">

                {/* Icon */}
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ring-4 ${ring} ${color}`}>
                  <Icon className="h-7 w-7" />
                </div>

                {/* Stat */}
                <div className="mb-1">
                  <span className="font-serif text-4xl font-black text-eclat-950">{stat}</span>
                </div>
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-eclat-500">
                  {statLabel}
                </p>

                {/* Title + desc */}
                <h3 className="mb-2 font-serif text-lg font-bold leading-snug text-eclat-950 group-hover:text-eclat-700 transition-colors">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom banner */}
        <AnimatedSection delay={450} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-eclat-950 to-eclat-800 px-8 py-10 text-center">
            {/* Decorative circles */}
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-eclat-700/30" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-eclat-700/20" />

            <div className="relative z-10">
              <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                &ldquo;Karena tubuh Anda layak mendapatkan yang terbaik.&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/60">
                — Filosofi ÉCLAT Cold Press Juice
              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
