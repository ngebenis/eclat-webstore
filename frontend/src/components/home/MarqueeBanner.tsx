import { Leaf } from 'lucide-react'

const items = [
  'Cold Pressed',
  'Tanpa Pengawet',
  'HPP Technology',
  'Bahan Lokal Organik',
  'BPOM Certified',
  'Halal MUI',
  'ISO 22000',
  '47+ Petani Mitra',
  '6 Lokasi',
  'Gratis Ongkir Jabodetabek',
  'Pure & Natural',
  'No Artificial Colors',
]

/* Duplicate array for seamless loop */
const doubled = [...items, ...items]

export function MarqueeBanner() {
  return (
    <div
      className="relative overflow-hidden bg-eclat-950 py-3.5"
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-eclat-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-eclat-950 to-transparent" />

      {/* Scrolling track */}
      <div className="animate-marquee flex w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-5 flex items-center gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] text-white/60"
          >
            <Leaf className="h-3 w-3 text-eclat-400 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
