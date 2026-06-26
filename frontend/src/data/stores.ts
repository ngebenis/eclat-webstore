import type { StoreLocation } from '@/lib/types'

/* ═══════════════════════════════════════════════════════════════════════════
   ÉCLAT — Store location data
═══════════════════════════════════════════════════════════════════════════ */

export const stores: StoreLocation[] = [
  {
    id: 1,
    name: 'ÉCLAT SCBD',
    address: 'Jl. Jend. Sudirman Kav. 52-53, Pacific Place Mall Lt. 1',
    city: 'Jakarta Selatan',
    province: 'DKI Jakarta',
    postalCode: '12190',
    phone: '+62 21 5151 8800',
    email: 'scbd@eclat.id',
    coordinates: { lat: -6.2238, lng: 106.8089 },
    openingHours: {
      weekdays: '08:00 – 21:00',
      weekend:  '09:00 – 22:00',
      holiday:  '09:00 – 21:00',
    },
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&q=80',
    isOpen: true,
    services: ['Dine-in', 'Take Away', 'Delivery', 'Cleanse Konsultasi'],
  },
  {
    id: 2,
    name: 'ÉCLAT Kemang',
    address: 'Jl. Kemang Raya No. 88, Kemang',
    city: 'Jakarta Selatan',
    province: 'DKI Jakarta',
    postalCode: '12730',
    phone: '+62 21 7179 4455',
    email: 'kemang@eclat.id',
    coordinates: { lat: -6.2603, lng: 106.8139 },
    openingHours: {
      weekdays: '07:30 – 20:00',
      weekend:  '08:00 – 21:00',
    },
    image:
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop&q=80',
    isOpen: true,
    services: ['Dine-in', 'Take Away', 'Delivery'],
  },
  {
    id: 3,
    name: 'ÉCLAT Pondok Indah',
    address: 'Pondok Indah Mall 2, Jl. Metro Pondok Indah, Lt. GF',
    city: 'Jakarta Selatan',
    province: 'DKI Jakarta',
    postalCode: '12310',
    phone: '+62 21 7592 0033',
    email: 'pi@eclat.id',
    coordinates: { lat: -6.2667, lng: 106.7833 },
    openingHours: {
      weekdays: '10:00 – 22:00',
      weekend:  '10:00 – 22:00',
    },
    image:
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop&q=80',
    isOpen: true,
    services: ['Dine-in', 'Take Away', 'Delivery', 'Gift Wrapping'],
  },
  {
    id: 4,
    name: 'ÉCLAT Bandung — Dago',
    address: 'Jl. Ir. H. Juanda No. 120, Dago',
    city: 'Bandung',
    province: 'Jawa Barat',
    postalCode: '40135',
    phone: '+62 22 2508 9911',
    email: 'bandung@eclat.id',
    coordinates: { lat: -6.8876, lng: 107.6107 },
    openingHours: {
      weekdays: '08:00 – 20:00',
      weekend:  '08:00 – 21:00',
    },
    image:
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop&q=80',
    isOpen: true,
    services: ['Dine-in', 'Take Away', 'Delivery'],
  },
  {
    id: 5,
    name: 'ÉCLAT Surabaya — Galaxy Mall',
    address: 'Galaxy Mall 3, Jl. Dharmahusada Indah Timur, Lt. 1',
    city: 'Surabaya',
    province: 'Jawa Timur',
    postalCode: '60285',
    phone: '+62 31 5912 7788',
    email: 'surabaya@eclat.id',
    coordinates: { lat: -7.2796, lng: 112.7731 },
    openingHours: {
      weekdays: '10:00 – 21:00',
      weekend:  '10:00 – 22:00',
    },
    image:
      'https://images.unsplash.com/photo-1536305030769-2be3fb07e12d?w=600&h=400&fit=crop&q=80',
    isOpen: true,
    services: ['Dine-in', 'Take Away', 'Delivery'],
  },
  {
    id: 6,
    name: 'ÉCLAT Bali — Seminyak',
    address: 'Jl. Petitenget No. 21, Seminyak',
    city: 'Badung',
    province: 'Bali',
    postalCode: '80361',
    phone: '+62 361 8469 9022',
    email: 'bali@eclat.id',
    coordinates: { lat: -8.6904, lng: 115.1648 },
    openingHours: {
      weekdays: '07:00 – 21:00',
      weekend:  '07:00 – 22:00',
    },
    image:
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop&q=80',
    isOpen: true,
    services: ['Dine-in', 'Take Away', 'Delivery', 'Wellness Retreat Partner'],
  },
]

export const getStore         = (id: number) => stores.find((s) => s.id === id)
export const storesByCity     = (city: string) =>
  stores.filter((s) => s.city.toLowerCase().includes(city.toLowerCase()))
export const getCities        = () => [...new Set(stores.map((s) => s.city))]
