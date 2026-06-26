import type { CleanseProgram } from '@/lib/types'

/* ═══════════════════════════════════════════════════════════════════════════
   ÉCLAT — Cleanse program definitions
═══════════════════════════════════════════════════════════════════════════ */

export const cleansePrograms: CleanseProgram[] = [
  {
    id: 1,
    slug: '1-day-reset',
    name: '1-Day Reset',
    duration: '1 Hari',
    description:
      'Introduksi sempurna untuk dunia cleanse. Satu hari penuh cold press juice untuk membersihkan sistem pencernaan dan mereset metabolisme.',
    bottles: 6,
    price: 285000,
    color: 'from-emerald-400 to-teal-500',
    features: [
      '6 botol cold press juice 350ml',
      'Panduan konsumsi lengkap',
      'Jadwal minum optimal',
      'Support via WhatsApp',
      'Free delivery area Jakarta',
    ],
    popular: false,
  },
  {
    id: 2,
    slug: '3-day-refresh',
    name: '3-Day Refresh',
    duration: '3 Hari',
    description:
      'Program andalan kami. Tiga hari intensif untuk detoksifikasi menyeluruh, peningkatan energi signifikan, dan reset total pola makan Anda.',
    bottles: 18,
    price: 795000,
    color: 'from-eclat-600 to-eclat-800',
    features: [
      '18 botol cold press juice 350ml',
      'Konsultasi gizi 1-on-1 pre-cleanse',
      'Panduan nutrisi post-cleanse',
      'Dedicated wellness coach support',
      'Free delivery area Jabodetabek',
      'Welcome kit ÉCLAT eksklusif',
    ],
    popular: true,
  },
  {
    id: 3,
    slug: '5-day-transform',
    name: '5-Day Transform',
    duration: '5 Hari',
    description:
      'Transformasi paling mendalam. Lima hari program komprehensif yang akan mengubah tidak hanya tubuh Anda, tetapi juga hubungan Anda dengan makanan.',
    bottles: 30,
    price: 1250000,
    color: 'from-eclat-800 to-eclat-950',
    features: [
      '30 botol cold press juice 350ml',
      'Konsultasi gizi 2x (pre & mid-cleanse)',
      'Panduan meal plan pasca-cleanse',
      'Priority 24/7 wellness support',
      'Free delivery seluruh Indonesia',
      'Welcome kit premium ÉCLAT',
      'Sertifikat Transform ÉCLAT',
      'Diskon 15% untuk pembelian berikutnya',
    ],
    popular: false,
  },
]
