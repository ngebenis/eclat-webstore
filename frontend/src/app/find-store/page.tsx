import type { Metadata } from 'next'
import Image from 'next/image'
import Link  from 'next/link'
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react'
import { SectionHeader }   from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { stores, getCities } from '@/data/stores'

export const metadata: Metadata = {
  title:       'Lokasi Toko — ÉCLAT Cold Press Juice',
  description: 'Temukan toko ÉCLAT terdekat di Jakarta, Bandung, Surabaya, dan Bali. Jam buka, alamat, dan layanan tersedia.',
  alternates:  { canonical: 'https://eclat.id/find-store' },
}

const cities = getCities()

export default function FindStorePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-eclat-950 to-eclat-900 py-20 md:py-28">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-eclat-400" />
              Lokasi Toko
            </span>
            <h1 className="font-serif text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Temukan ÉCLAT\ndi Dekat Anda
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-white/60">
              {stores.length} lokasi tersebar di 4 kota besar Indonesia. Buka setiap hari untuk melayani perjalanan wellness Anda.
            </p>

            {/* City pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {cities.map((city) => (
                <a
                  key={city}
                  href={`#${city.toLowerCase().replace(/\s/g, '-')}`}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  {city}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <div className="bg-eclat-800 py-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: `${stores.length}`,         label: 'Lokasi' },
              { value: '4',                         label: 'Kota' },
              { value: '07:00 – 22:00',             label: 'Jam Buka' },
              { value: 'Dine-in & Delivery',        label: 'Layanan' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-serif text-2xl font-black text-white">{value}</p>
                <p className="text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Store listing grouped by city ────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container mx-auto space-y-16">

          {cities.map((city) => {
            const cityStores = stores.filter((s) => s.city === city)
            const cityId     = city.toLowerCase().replace(/\s/g, '-')

            return (
              <div key={city} id={cityId}>
                <AnimatedSection>
                  <SectionHeader
                    badge={`${cityStores.length} Lokasi`}
                    title={city}
                  />
                </AnimatedSection>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {cityStores.map((store, i) => (
                    <AnimatedSection key={store.id} delay={i * 80} animation="slide-up">
                      <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                        {/* Store image */}
                        <div className="relative h-44 overflow-hidden">
                          {store.image ? (
                            <Image
                              src={store.image}
                              alt={store.name}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="h-full bg-gradient-to-br from-eclat-400 to-eclat-700 flex items-center justify-center">
                              <MapPin className="h-12 w-12 text-white/50" />
                            </div>
                          )}

                          {/* Open badge */}
                          <div className="absolute right-3 top-3">
                            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${store.isOpen ? 'bg-emerald-500 text-white' : 'bg-gray-400 text-white'}`}>
                              {store.isOpen ? '● Buka' : '● Tutup'}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col p-6">
                          <h3 className="font-serif text-xl font-bold text-eclat-950 group-hover:text-eclat-700 transition-colors">
                            {store.name}
                          </h3>

                          {/* Address */}
                          <div className="mt-3 flex items-start gap-2.5 text-sm text-muted-foreground">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-eclat-500" />
                            <span>{store.address}, {store.city} {store.postalCode}</span>
                          </div>

                          {/* Phone */}
                          <a
                            href={`tel:${store.phone.replace(/\s/g, '')}`}
                            className="mt-2 flex items-center gap-2.5 text-sm text-muted-foreground hover:text-eclat-700 transition-colors"
                          >
                            <Phone className="h-4 w-4 shrink-0 text-eclat-500" />
                            {store.phone}
                          </a>

                          {/* Email */}
                          {store.email && (
                            <a
                              href={`mailto:${store.email}`}
                              className="mt-2 flex items-center gap-2.5 text-sm text-muted-foreground hover:text-eclat-700 transition-colors"
                            >
                              <Mail className="h-4 w-4 shrink-0 text-eclat-500" />
                              {store.email}
                            </a>
                          )}

                          {/* Hours */}
                          <div className="mt-3 rounded-xl bg-eclat-50 p-3 space-y-1">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-eclat-700">
                              <Clock className="h-3.5 w-3.5" />
                              Jam Buka
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Senin – Jumat: {store.openingHours.weekdays}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Sabtu – Minggu: {store.openingHours.weekend}
                            </p>
                            {store.openingHours.holiday && (
                              <p className="text-xs text-muted-foreground">
                                Hari Libur: {store.openingHours.holiday}
                              </p>
                            )}
                          </div>

                          {/* Services */}
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {store.services.map((service) => (
                              <span
                                key={service}
                                className="rounded-full bg-eclat-100 px-2.5 py-1 text-[10px] font-semibold text-eclat-700"
                              >
                                {service}
                              </span>
                            ))}
                          </div>

                          {/* Directions CTA */}
                          <div className="mt-auto pt-4">
                            <a
                              href={`https://maps.google.com/?q=${store.coordinates.lat},${store.coordinates.lng}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex w-full items-center justify-center gap-2 rounded-xl bg-eclat-800 py-3 text-sm font-bold text-white transition-all hover:bg-eclat-900 group/btn"
                            >
                              <MapPin className="h-4 w-4" />
                              Buka di Google Maps
                              <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                            </a>
                          </div>
                        </div>
                      </article>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Map placeholder ───────────────────────────────────────────── */}
      <section className="section-py-sm bg-eclat-50">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden border border-border bg-white shadow-sm">
              <div className="h-72 bg-gradient-to-br from-eclat-100 to-eclat-200 flex flex-col items-center justify-center gap-4">
                <MapPin className="h-12 w-12 text-eclat-400" />
                <div>
                  <p className="font-serif text-xl font-bold text-eclat-900">Peta Interaktif</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Integrasikan Google Maps API untuk tampilan peta interaktif.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Delivery CTA ──────────────────────────────────────────────── */}
      <section className="section-py-sm bg-eclat-900">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Tidak Ada Toko di Kota Anda?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
              Kami melayani pengiriman ke seluruh Indonesia melalui platform delivery pilihan Anda. Hubungi kami untuk informasi lebih lanjut.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-eclat-900 hover:bg-eclat-50 transition-all"
              >
                Hubungi Kami
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
