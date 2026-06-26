'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import {
  Phone, Mail, MapPin, Clock, Send,
  CheckCircle, Instagram, Twitter
} from 'lucide-react'
import { Input }     from '@/components/ui/input'
import { Textarea }  from '@/components/ui/textarea'
import { Label }     from '@/components/ui/label'
import { Button }    from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { cn } from '@/lib/utils'

const subjects = [
  'Pertanyaan Produk',
  'Program Cleanse',
  'Kemitraan / B2B',
  'Kemitraan Petani',
  'Media & Press',
  'Lainnya',
]

const contactInfo = [
  { Icon: Phone, label: 'Telepon', value: '+62 21 5151 8800', href: 'tel:+622151518800' },
  { Icon: Mail,  label: 'Email',   value: 'hello@eclat.id',   href: 'mailto:hello@eclat.id' },
  { Icon: MapPin,label: 'Kantor Pusat', value: 'Pacific Place Mall Lt. 1, SCBD, Jakarta Selatan', href: null },
  { Icon: Clock, label: 'Jam Operasional', value: 'Senin – Jumat: 09.00 – 18.00 WIB', href: null },
]

const socials = [
  { Icon: Instagram, label: 'Instagram', handle: '@eclat.id',  href: 'https://instagram.com/eclat.id' },
  { Icon: Twitter,   label: 'Twitter',   handle: '@eclat_id',  href: 'https://twitter.com/eclat_id' },
]

/* ─── Page (client for form) ─────────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })
  const [errors,  setErrors]  = useState<Partial<typeof form>>({})
  const [loading, setLoading] = useState(false)
  const [done,    setDone]    = useState(false)

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim())    e.name    = 'Nama wajib diisi'
    if (!form.email.trim())   e.email   = 'Email wajib diisi'
    if (!form.subject)        e.subject = 'Pilih topik pesan'
    if (!form.message.trim()) e.message = 'Pesan wajib diisi'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Format email tidak valid'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      setDone(true)
    } catch {
      setDone(true) // optimistic
    } finally {
      setLoading(false)
    }
  }

  const field = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-eclat-950 to-eclat-900 py-20 md:py-28">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-eclat-400" />
              Hubungi Kami
            </span>
            <h1 className="font-serif text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Kami Siap Membantu
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-white/60">
              Ada pertanyaan, saran, atau ingin berkolaborasi? Tim kami siap merespons dalam 1 × 24 jam kerja.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-[1fr_420px]">

            {/* ── Form ───────────────────────────────────────────────── */}
            <AnimatedSection animation="slide-in-left">
              {done ? (
                <div className="flex flex-col items-center gap-4 py-20 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h2 className="font-serif text-3xl font-black text-eclat-950">
                    Pesan Terkirim! 🎉
                  </h2>
                  <p className="max-w-sm text-muted-foreground">
                    Terima kasih sudah menghubungi ÉCLAT. Tim kami akan membalas dalam 1 × 24 jam kerja ke email Anda.
                  </p>
                  <Button onClick={() => { setDone(false); setForm({ name:'', email:'', phone:'', subject:'', message:'' }) }}>
                    Kirim Pesan Lain
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-eclat-950">
                    Kirim Pesan
                  </h2>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Nama Lengkap <span className="text-red-500">*</span></Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => field('name', e.target.value)}
                        error={!!errors.name}
                        aria-describedby={errors.name ? 'name-err' : undefined}
                      />
                      {errors.name && <p id="name-err" className="text-xs text-red-500">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="nama@email.com"
                        value={form.email}
                        onChange={(e) => field('email', e.target.value)}
                        error={!!errors.email}
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+62 812 3456 7890"
                        value={form.phone}
                        onChange={(e) => field('phone', e.target.value)}
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <Label>Topik Pesan <span className="text-red-500">*</span></Label>
                      <Select value={form.subject} onValueChange={(v) => field('subject', v)}>
                        <SelectTrigger className={cn(errors.subject && 'border-red-400')}>
                          <SelectValue placeholder="Pilih topik…" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Pesan <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini…"
                      rows={6}
                      value={form.message}
                      onChange={(e) => field('message', e.target.value)}
                      error={!!errors.message}
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Mengirim…
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Kirim Pesan
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </AnimatedSection>

            {/* ── Sidebar ────────────────────────────────────────────── */}
            <AnimatedSection animation="slide-in-right" className="space-y-6">
              {/* Contact info card */}
              <div className="rounded-3xl bg-eclat-50 p-7 space-y-5">
                <h3 className="font-serif text-xl font-bold text-eclat-950">Informasi Kontak</h3>
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-eclat-100 text-eclat-700">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
                      {href ? (
                        <a href={href} className="mt-0.5 text-sm font-medium text-eclat-900 hover:text-eclat-700">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm text-eclat-800">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="rounded-3xl border border-border p-7 space-y-4">
                <h3 className="font-serif text-lg font-bold text-eclat-950">Media Sosial</h3>
                {socials.map(({ Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-eclat-50 group"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-eclat-100 text-eclat-700 group-hover:bg-eclat-700 group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-semibold text-eclat-900">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Find store CTA */}
              <div className="rounded-3xl bg-eclat-800 p-7 text-white">
                <h3 className="font-serif text-lg font-bold">Cari Toko Kami?</h3>
                <p className="mt-2 text-sm text-white/70">
                  Temukan 6 lokasi ÉCLAT terdekat di kota Anda.
                </p>
                <Link
                  href="/find-store"
                  className="mt-5 flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-eclat-900 hover:bg-eclat-50 transition-colors w-fit"
                >
                  <MapPin className="h-4 w-4" />
                  Lihat Lokasi Toko
                </Link>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  )
}
