import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Users, Award, Heart, Target, Eye } from 'lucide-react'
import { SectionHeader }   from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { Newsletter }      from '@/components/home/Newsletter'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title:       'Tentang Kami — ÉCLAT Cold Press Juice',
  description: 'Pelajari kisah ÉCLAT — dari passion menjadi gerakan wellness Indonesia. Misi, visi, tim, dan komitmen kami pada kualitas bahan lokal organik.',
  alternates:  { canonical: 'https://eclat.id/about' },
}

/* ─── Static content ─────────────────────────────────────────────────────── */
const values = [
  {
    Icon:  Leaf,
    color: 'bg-emerald-50 text-emerald-700',
    ring:  'ring-emerald-100',
    title: 'Alam sebagai Prioritas',
    desc:  'Kami memilih bahan dari petani organik yang merawat tanah dengan penuh tanggung jawab. Alam yang sehat menghasilkan bahan yang sehat.',
  },
  {
    Icon:  Award,
    color: 'bg-amber-50 text-amber-700',
    ring:  'ring-amber-100',
    title: 'Kualitas Tanpa Kompromi',
    desc:  'Setiap batch produk melalui uji kualitas internal 14 titik dan sertifikasi eksternal BPOM, Halal MUI, dan ISO 22000.',
  },
  {
    Icon:  Users,
    color: 'bg-blue-50 text-blue-700',
    ring:  'ring-blue-100',
    title: 'Komunitas yang Kami Bangun',
    desc:  'Dari petani mitra hingga pelanggan setia, ÉCLAT adalah ekosistem — bukan sekadar brand. Setiap pembelian mendukung lebih dari 47 keluarga petani.',
  },
  {
    Icon:  Heart,
    color: 'bg-rose-50 text-rose-700',
    ring:  'ring-rose-100',
    title: 'Wellbeing Jangka Panjang',
    desc:  'Kami tidak menjual tren. Kami menjual kebiasaan sehat yang berkelanjutan — produk yang bisa dan harus dikonsumsi setiap hari.',
  },
]

const timeline = [
  { year: '2019', event: 'ÉCLAT didirikan di Jakarta dengan 1 hydraulic press dan 3 petani mitra.' },
  { year: '2020', event: 'Peluncuran program cleanse pertama. Mencapai 1.000 pelanggan dalam 6 bulan.' },
  { year: '2021', event: 'Ekspansi ke Bandung dan Bali. Peluncuran lini Wellness Shots.' },
  { year: '2022', event: 'Mendapatkan sertifikasi BPOM, Halal MUI, dan ISO 22000. 25 petani mitra.' },
  { year: '2023', event: 'Implementasi HPP Technology. 47+ petani organik mitra. 50.000+ pelanggan.' },
  { year: '2024', event: 'Buka 2 lokasi baru di Surabaya dan tambahan di Jakarta. Peluncuran program korporat.' },
]

const team = [
  {
    name:   'Amara Setiawan',
    role:   'Co-Founder & CEO',
    bio:    'Mantan konsultan nutrisi korporat yang memutuskan membangun brand wellness yang jujur dan terjangkau untuk Indonesia.',
    image:  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
  },
  {
    name:   'Dr. Sari Putri Andini',
    role:   'Chief Nutrition Officer',
    bio:    'Doktor Ilmu Gizi dari UI dengan 12 tahun pengalaman di food science. Arsitek di balik semua formula ÉCLAT.',
    image:  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80',
  },
  {
    name:   'Bimo Prasetyo',
    role:   'Co-Founder & COO',
    bio:    'Supply chain expert yang membangun jaringan petani organik ÉCLAT dari nol. Passionate tentang pertanian berkelanjutan.',
    image:  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
  },
]

const certs = [
  { name: 'BPOM RI',    desc: 'Terdaftar dan tersertifikasi Badan Pengawas Obat dan Makanan' },
  { name: 'Halal MUI',  desc: 'Sertifikasi halal dari Majelis Ulama Indonesia' },
  { name: 'ISO 22000',  desc: 'Sistem manajemen keamanan pangan internasional' },
  { name: 'Organik',    desc: 'Sertifikat pertanian organik dari lembaga independen' },
]

const faqs = [
  {
    q: 'Apa itu cold press juice dan mengapa berbeda?',
    a: 'Cold press juice dibuat dengan hydraulic press yang memeras buah/sayuran secara perlahan tanpa menghasilkan panas. Hasilnya: nutrisi, enzim, dan rasa lebih terjaga dibanding juicer sentrifugal konvensional yang berputar cepat dan mengoksidasi konten.',
  },
  {
    q: 'Berapa lama ÉCLAT bisa disimpan?',
    a: 'Produk ÉCLAT dengan proses HPP dapat disimpan hingga 45 hari dalam kulkas (4°C). Produk segar tanpa HPP disarankan dikonsumsi dalam 3–5 hari.',
  },
  {
    q: 'Apakah produk ÉCLAT cocok untuk penderita diabetes?',
    a: 'Beberapa produk kami rendah gula dan cocok untuk penderita diabetes, seperti Green Detox Supreme dan Pure Greens Balance. Namun kami selalu menyarankan konsultasi dengan dokter atau ahli gizi untuk kondisi medis spesifik.',
  },
  {
    q: 'Bagaimana cara memesan untuk perusahaan (B2B)?',
    a: 'Kami memiliki program korporat khusus untuk employee wellness, catering kantor, dan gift hampers. Hubungi kami di corporate@eclat.id atau melalui halaman Contact untuk penawaran khusus.',
  },
  {
    q: 'Apakah tersedia program langganan mingguan/bulanan?',
    a: 'Ya! Program berlangganan kami memberikan diskon 15% dan prioritas pengiriman. Daftar melalui aplikasi atau hubungi toko terdekat untuk informasi lebih lanjut.',
  },
]

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-eclat-950 py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&h=800&fit=crop&q=60"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-eclat-950/60 to-eclat-950" />
        </div>
        <div className="container relative z-10 mx-auto text-center">
          <AnimatedSection>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-eclat-400" /> Tentang ÉCLAT
            </span>
            <h1 className="mt-4 font-serif text-5xl font-black text-white sm:text-6xl lg:text-7xl">
              Dari Passion<br />
              <span className="text-eclat-300">Menjadi Gerakan</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Kami percaya bahwa setiap orang berhak atas nutrisi terbaik dari alam Indonesia. Inilah kisah kami.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2">
          {[
            {
              Icon:  Target,
              color: 'bg-eclat-50 text-eclat-700',
              label: 'Misi',
              title: 'Membuat Wellness\nTerjangkau & Accessible',
              body:  'ÉCLAT hadir untuk membuktikan bahwa gaya hidup sehat tidak harus mahal atau rumit. Dengan bahan lokal organik terbaik dan teknologi modern, kami menghadirkan nutrisi premium yang bisa dinikmati semua orang setiap hari.',
            },
            {
              Icon:  Eye,
              color: 'bg-amber-50 text-amber-700',
              label: 'Visi',
              title: 'Menjadi Brand Wellness\n#1 di Indonesia',
              body:  'Kami memimpikan Indonesia di mana wellness bukan privilege, melainkan kebiasaan. Di mana setiap keluarga memiliki akses ke produk nutrisi berkualitas tinggi dari sumber yang transparan dan berkelanjutan.',
            },
          ].map(({ Icon, color, label, title, body }, i) => (
            <AnimatedSection key={label} animation={i === 0 ? 'slide-in-left' : 'slide-in-right'}>
              <div className="h-full rounded-3xl border border-border p-10">
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</span>
                <h2 className="mt-2 font-serif text-3xl font-black text-eclat-950 whitespace-pre-line">{title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────────────── */}
      <section className="section-py bg-eclat-50/40">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeader badge="Nilai Kami" title="Prinsip yang Memandu\nSetiap Keputusan" centered />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, color, ring, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 80} animation="slide-up">
                <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-7">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ring-4 ${ring} ${color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-eclat-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <SectionHeader badge="Perjalanan" title="Dari 2019 hingga Kini" centered />
          </AnimatedSection>
          <div className="mt-14 relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-eclat-100 sm:left-1/2" aria-hidden="true" />
            <div className="space-y-10">
              {timeline.map(({ year, event }, i) => (
                <AnimatedSection key={year} delay={i * 80}>
                  <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-eclat-800 text-white ring-4 ring-white text-xs font-bold sm:left-1/2 z-10">
                      {i + 1}
                    </div>
                    {/* Card */}
                    <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] rounded-2xl border border-border bg-white p-5 shadow-sm ${i % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                      <span className="text-xs font-bold text-eclat-600">{year}</span>
                      <p className="mt-1 text-sm text-eclat-800">{event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────── */}
      <section className="section-py bg-eclat-50/40">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeader badge="Tim Kami" title="Orang-Orang di Balik\nSetiap Botol ÉCLAT" centered />
          </AnimatedSection>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {team.map(({ name, role, bio, image }, i) => (
              <AnimatedSection key={name} delay={i * 100} animation="slide-up">
                <div className="flex flex-col items-center rounded-3xl border border-border bg-white p-8 text-center">
                  <Image
                    src={image}
                    alt={name}
                    width={100}
                    height={100}
                    className="mb-4 h-24 w-24 rounded-full object-cover ring-4 ring-eclat-100"
                  />
                  <h3 className="font-serif text-xl font-bold text-eclat-950">{name}</h3>
                  <span className="mt-1 rounded-full bg-eclat-100 px-3 py-1 text-xs font-semibold text-eclat-700">
                    {role}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ───────────────────────────────────────────── */}
      <section className="section-py-sm bg-eclat-900">
        <div className="container mx-auto">
          <AnimatedSection>
            <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-white/40">
              Tersertifikasi & Terakreditasi
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {certs.map(({ name, desc }, i) => (
              <AnimatedSection key={name} delay={i * 60}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center hover:bg-white/10 transition-colors">
                  <p className="font-serif text-lg font-bold text-white">{name}</p>
                  <p className="mt-1.5 text-xs text-white/50">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-py bg-white" id="faq">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection>
            <SectionHeader badge="FAQ" title="Pertanyaan yang\nSering Ditanyakan" centered />
          </AnimatedSection>
          <AnimatedSection delay={100} className="mt-12 rounded-3xl border border-border bg-white p-2">
            <Accordion type="single" collapsible>
              {faqs.map(({ q, a }, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="px-5">{q}</AccordionTrigger>
                  <AccordionContent className="px-5">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="section-py-sm bg-eclat-50">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-black text-eclat-950 sm:text-4xl">
              Siap Memulai Perjalanan Wellness?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Jelajahi koleksi lengkap ÉCLAT dan temukan produk yang tepat untuk kebutuhan Anda.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/products" className="flex items-center gap-2 rounded-full bg-eclat-800 px-7 py-3.5 text-sm font-bold text-white hover:bg-eclat-900 transition-all hover:-translate-y-0.5">
                Lihat Produk <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="flex items-center gap-2 rounded-full border-2 border-eclat-700 px-7 py-3.5 text-sm font-bold text-eclat-700 hover:bg-eclat-700 hover:text-white transition-all">
                Hubungi Kami
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
