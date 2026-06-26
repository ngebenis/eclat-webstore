import type { Product } from '@/lib/types'

/* ═══════════════════════════════════════════════════════════════════════════
   ÉCLAT — Static product catalogue
   Used as fallback when the Laravel API is unavailable, and as seed data.
═══════════════════════════════════════════════════════════════════════════ */

export const products: Product[] = [
  /* ── Cold Pressed Juices ────────────────────────────────────────────── */
  {
    id: 1,
    slug: 'green-detox-supreme',
    name: 'Green Detox Supreme',
    tagline: 'The Ultimate Cleansing Experience',
    description:
      'Ramuan hijau sempurna yang menggabungkan sayuran berdaun segar dengan buah-buahan alkaline untuk detoksifikasi tubuh secara menyeluruh.',
    longDescription:
      'Green Detox Supreme adalah flagship product kami — perpaduan enam bahan pilihan yang diperas dingin pada tekanan optimal untuk menjaga setiap enzim dan nutrisi hidup. Kale dan bayam memberikan klorofil yang membersihkan darah, timun menghidrasi sel, apel hijau menyeimbangkan rasa, jahe mengaktifkan metabolisme, dan lemon menyegarkan sistem pencernaan Anda.',
    category: 'Cold Pressed Juices',
    categorySlug: 'juices',
    price: 55000,
    volume: '350ml',
    color: 'from-emerald-400 to-green-600',
    ingredients: ['Kale', 'Bayam', 'Timun', 'Apel Hijau', 'Jahe', 'Lemon'],
    benefits: ['Detoksifikasi', 'Boost Energi', 'Kaya Antioksidan', 'Alkalizing'],
    nutrition: {
      calories: 95,
      protein: 3.2,
      carbs: 18,
      fat: 0.5,
      fiber: 2.8,
      sugar: 12,
      sodium: 42,
    },
    featured: true,
    image:
      'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&h=800&fit=crop&q=80',
    ],
    badge: 'Best Seller',
    isAvailable: true,
    createdAt: '2024-01-15T00:00:00Z',
  },
  {
    id: 2,
    slug: 'tropical-sunrise',
    name: 'Tropical Sunrise',
    tagline: 'Taste of Paradise in Every Sip',
    description:
      'Perpaduan buah-buahan tropis segar dengan sentuhan kunyit anti-inflamasi. Vitamin C tinggi untuk imunitas harian Anda.',
    longDescription:
      'Tropical Sunrise membawa energi matahari pagi ke dalam setiap tetes. Nanas segar dari Lampung, mangga harum pilihan, wortel organik lokal, dan kunyit segar berpadu menciptakan harmoni rasa yang memanjakan lidah sekaligus memperkuat sistem imun Anda.',
    category: 'Cold Pressed Juices',
    categorySlug: 'juices',
    price: 48000,
    volume: '350ml',
    color: 'from-amber-300 to-orange-500',
    ingredients: ['Nanas', 'Mangga', 'Kunyit', 'Jeruk', 'Wortel'],
    benefits: ['Vitamin C Tinggi', 'Anti-Inflamasi', 'Boost Imunitas', 'Energizing'],
    nutrition: {
      calories: 120,
      protein: 1.5,
      carbs: 28,
      fat: 0.3,
      fiber: 2.1,
      sugar: 22,
      sodium: 25,
    },
    featured: true,
    image:
      'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=600&fit=crop&q=80',
    badge: 'New',
    isAvailable: true,
    createdAt: '2024-02-01T00:00:00Z',
  },
  {
    id: 3,
    slug: 'berry-antioxidant',
    name: 'Berry Antioxidant',
    tagline: 'Nature\'s Most Powerful Antioxidants',
    description:
      'Ledakan antioksidan dari campuran beri segar dengan beet yang kaya nitrat. Formula sempurna untuk kesehatan jantung dan otak.',
    longDescription:
      'Berry Antioxidant adalah gudang antioksidan alami. Blueberry, stroberi, dan anggur hitam menghadirkan flavonoid dan resveratrol yang melindungi sel dari kerusakan. Beet merah menambah nitrat alami yang meningkatkan aliran darah dan performa fisik.',
    category: 'Cold Pressed Juices',
    categorySlug: 'juices',
    price: 52000,
    volume: '350ml',
    color: 'from-purple-400 to-pink-600',
    ingredients: ['Blueberry', 'Stroberi', 'Beet Merah', 'Anggur Hitam', 'Lemon'],
    benefits: ['Antioksidan Tinggi', 'Kesehatan Jantung', 'Brain Boost', 'Anti-Aging'],
    nutrition: {
      calories: 110,
      protein: 2.0,
      carbs: 24,
      fat: 0.4,
      fiber: 3.5,
      sugar: 18,
      sodium: 30,
    },
    featured: true,
    image:
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=600&fit=crop&q=80',
    badge: 'Best Seller',
    isAvailable: true,
    createdAt: '2024-01-20T00:00:00Z',
  },
  {
    id: 4,
    slug: 'citrus-immunity',
    name: 'Citrus Immunity',
    tagline: 'Your Daily Immunity Shield',
    description:
      'Triple-citrus blend dengan jahe segar dan cayenne yang menghangatkan. Perlindungan harian terbaik untuk sistem imun Anda.',
    longDescription:
      'Citrus Immunity menggabungkan kekuatan tiga jenis citrus — jeruk, lemon, dan grapefruit — dengan jahe segar dan sentuhan cayenne yang mengaktifkan sirkulasi. Formula ini terbukti meningkatkan produksi sel imun dan memberikan perlindungan terhadap infeksi.',
    category: 'Cold Pressed Juices',
    categorySlug: 'juices',
    price: 45000,
    volume: '350ml',
    color: 'from-yellow-300 to-orange-400',
    ingredients: ['Jeruk', 'Lemon', 'Grapefruit', 'Jahe', 'Cayenne'],
    benefits: ['Imunitas Optimal', 'Vitamin C Tinggi', 'Anti-Bacterial', 'Warming'],
    nutrition: {
      calories: 88,
      protein: 1.8,
      carbs: 20,
      fat: 0.2,
      fiber: 1.5,
      sugar: 16,
      sodium: 15,
    },
    featured: true,
    image:
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop&q=80',
    isAvailable: true,
    createdAt: '2024-01-10T00:00:00Z',
  },
  {
    id: 5,
    slug: 'root-revitalizer',
    name: 'Root Revitalizer',
    tagline: 'Grounded Energy from Earth\'s Roots',
    description:
      'Formula akar bumi — beet, wortel, apel, jahe, dan kunyit — yang memberikan energi tahan lama dan mendukung performa atletik.',
    longDescription:
      'Root Revitalizer menggali kekuatan dari akar bumi. Beet merah meningkatkan stamina dan performa olahraga melalui nitrat alami. Wortel organik kaya beta-karoten untuk kesehatan mata dan kulit. Kunyit segar memberikan efek anti-inflamasi yang mendalam.',
    category: 'Cold Pressed Juices',
    categorySlug: 'juices',
    price: 50000,
    volume: '350ml',
    color: 'from-red-400 to-orange-600',
    ingredients: ['Beet Merah', 'Wortel', 'Apel Merah', 'Jahe', 'Kunyit'],
    benefits: ['Stamina Tinggi', 'Sport Performance', 'Anti-Inflamasi', 'Skin Glow'],
    nutrition: {
      calories: 105,
      protein: 2.3,
      carbs: 22,
      fat: 0.3,
      fiber: 3.0,
      sugar: 17,
      sodium: 55,
    },
    featured: true,
    image:
      'https://images.unsplash.com/photo-1546548970-71785318a17b?w=600&h=600&fit=crop&q=80',
    isAvailable: true,
    createdAt: '2024-02-10T00:00:00Z',
  },
  {
    id: 6,
    slug: 'pure-greens-balance',
    name: 'Pure Greens Balance',
    tagline: 'Serenity in a Bottle',
    description:
      'Seleri, timun, bayam, pir, dan mint — formula hijau ringan yang menyeimbangkan pH tubuh dan menenangkan sistem saraf.',
    longDescription:
      'Pure Greens Balance adalah pilihan sempurna untuk mereka yang baru memulai perjalanan wellness. Rasanya lebih ringan dari Green Detox Supreme namun tetap kaya nutrisi. Seleri mengandung mineral penting, timun menghidrasi, pir memberikan kemanisan alami, dan mint menyegarkan nafas.',
    category: 'Cold Pressed Juices',
    categorySlug: 'juices',
    price: 52000,
    volume: '350ml',
    color: 'from-teal-300 to-emerald-500',
    ingredients: ['Seleri', 'Timun', 'Bayam', 'Pir', 'Mint'],
    benefits: ['pH Balance', 'Hidrasi Optimal', 'Stress Relief', 'Digestive Support'],
    nutrition: {
      calories: 78,
      protein: 2.5,
      carbs: 16,
      fat: 0.3,
      fiber: 2.5,
      sugar: 11,
      sodium: 60,
    },
    featured: true,
    image:
      'https://images.unsplash.com/photo-1554481923-a6918bd997bc?w=600&h=600&fit=crop&q=80',
    isAvailable: true,
    createdAt: '2024-03-01T00:00:00Z',
  },

  /* ── Wellness Shots (60 ml) ──────────────────────────────────────────── */
  {
    id: 7,
    slug: 'ginger-fire-shot',
    name: 'Ginger Fire Shot',
    tagline: 'Ignite Your Metabolism',
    description:
      'Shot jahe murni dengan cayenne dan merica hitam. Satu tegukan untuk mengaktifkan metabolisme dan melawan infeksi.',
    longDescription:
      'Ginger Fire Shot adalah senjata rahasia pagi hari Anda. Konsentrasi jahe segar yang tinggi memberikan efek thermogenic yang mengaktifkan metabolisme dan meningkatkan sirkulasi darah dalam hitungan menit.',
    category: 'Wellness Shots',
    categorySlug: 'shots',
    price: 35000,
    volume: '60ml',
    color: 'from-amber-400 to-yellow-600',
    ingredients: ['Jahe Segar', 'Lemon', 'Merica Hitam', 'Cayenne'],
    benefits: ['Metabolisme Aktif', 'Anti-Nausea', 'Warming', 'Immune Boost'],
    nutrition: {
      calories: 25,
      protein: 0.3,
      carbs: 5,
      fat: 0.1,
      fiber: 0.2,
      sugar: 3,
      sodium: 8,
    },
    featured: false,
    image:
      'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=600&fit=crop&q=80',
    badge: 'Hot',
    isAvailable: true,
    createdAt: '2024-01-25T00:00:00Z',
  },
  {
    id: 8,
    slug: 'immunity-shield-shot',
    name: 'Immunity Shield Shot',
    tagline: 'Daily Armor for Your Body',
    description:
      'Kombinasi jahe, kunyit, elderberry, dan citrus dalam shot 60ml yang memperkuat pertahanan tubuh setiap harinya.',
    longDescription:
      'Immunity Shield Shot mengandung kurkumin dari kunyit, gingerol dari jahe, dan anthocyanin dari elderberry — tiga senyawa bioaktif paling kuat untuk memperkuat sistem imun Anda.',
    category: 'Wellness Shots',
    categorySlug: 'shots',
    price: 38000,
    volume: '60ml',
    color: 'from-orange-400 to-red-500',
    ingredients: ['Jahe', 'Kunyit', 'Elderberry', 'Jeruk', 'Madu'],
    benefits: ['Imunitas Kuat', 'Anti-Viral', 'Anti-Inflamasi', 'Antioxidant'],
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600021763010-3fb80571f714?w=600&h=600&fit=crop&q=80',
    isAvailable: true,
    createdAt: '2024-02-05T00:00:00Z',
  },
  {
    id: 9,
    slug: 'glow-radiance-shot',
    name: 'Glow Radiance Shot',
    tagline: 'Beauty Starts from Within',
    description:
      'Formula kecantikan dari dalam — amla, rose hip, kunyit, dan citrus untuk kulit bercahaya dan rambut sehat.',
    longDescription:
      'Glow Radiance Shot diformulasikan khusus untuk mendukung kesehatan kulit dari dalam. Amla mengandung vitamin C 20x lebih tinggi dari jeruk biasa, rose hip kaya akan antioksidan dan vitamin A, dan kunyit memberikan efek anti-inflamasi untuk kulit yang lebih jernih.',
    category: 'Wellness Shots',
    categorySlug: 'shots',
    price: 40000,
    volume: '60ml',
    color: 'from-pink-400 to-rose-500',
    ingredients: ['Amla', 'Rose Hip', 'Kunyit', 'Jeruk', 'Lidah Buaya'],
    benefits: ['Skin Glow', 'Collagen Boost', 'Anti-Aging', 'Hair Health'],
    featured: false,
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1607451486597-1e5bcc6e3498?w=600&h=600&fit=crop&q=80',
    isAvailable: true,
    createdAt: '2024-03-10T00:00:00Z',
  },
  {
    id: 10,
    slug: 'energy-kickstart-shot',
    name: 'Energy Kickstart Shot',
    tagline: 'Natural Energy Without the Crash',
    description:
      'Matcha grade A, jahe, lemon, dan madu untuk energi alami yang tahan lama tanpa kafein berlebih dan tanpa sugar crash.',
    category: 'Wellness Shots',
    categorySlug: 'shots',
    price: 38000,
    volume: '60ml',
    color: 'from-green-300 to-lime-500',
    ingredients: ['Matcha Grade A', 'Lemon', 'Jahe', 'Madu', 'L-Theanine'],
    benefits: ['Long-lasting Energy', 'Focus & Clarity', 'No Crash', 'Mood Booster'],
    featured: false,
    image:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop&q=80',
    isAvailable: true,
    createdAt: '2024-03-15T00:00:00Z',
  },

  /* ── Coconut Water ───────────────────────────────────────────────────── */
  {
    id: 11,
    slug: 'pure-coconut-water',
    name: 'Pure Coconut Water',
    tagline: 'Nature\'s Perfect Electrolyte',
    description:
      'Air kelapa muda murni tanpa tambahan apapun. Hidrasi sempurna dengan elektrolit alami yang menyeimbangkan cairan tubuh.',
    longDescription:
      'Pure Coconut Water kami bersumber dari kelapa muda pilihan Jawa Tengah yang dipetik pada usia optimal. Tanpa pasteurisasi panas, tanpa pengawet — murni kesegaran alam dalam setiap tegukan.',
    category: 'Coconut Water',
    categorySlug: 'coconut',
    price: 40000,
    volume: '400ml',
    color: 'from-lime-300 to-teal-400',
    ingredients: ['Air Kelapa Muda Murni'],
    benefits: ['Hidrasi Alami', 'Elektrolit Seimbang', 'Post-Workout', 'Low Calorie'],
    nutrition: {
      calories: 45,
      protein: 0.5,
      carbs: 9,
      fat: 0.0,
      fiber: 0.0,
      sugar: 6,
      sodium: 252,
    },
    featured: false,
    image:
      'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=600&fit=crop&q=80',
    isAvailable: true,
    createdAt: '2024-01-08T00:00:00Z',
  },
  {
    id: 12,
    slug: 'coconut-hydrate-blend',
    name: 'Coconut Hydrate Blend',
    tagline: 'Hydration Elevated',
    description:
      'Perpaduan air kelapa muda segar dengan nanas, jeruk nipis, dan mint untuk hydration drink yang menyegarkan dan bernutrisi.',
    category: 'Coconut Water',
    categorySlug: 'coconut',
    price: 45000,
    volume: '400ml',
    color: 'from-cyan-300 to-teal-500',
    ingredients: ['Air Kelapa Muda', 'Nanas', 'Jeruk Nipis', 'Mint'],
    benefits: ['Super Hydration', 'Digestive Aid', 'Refreshing', 'Tropical Taste'],
    featured: false,
    image:
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=600&fit=crop&q=80',
    isAvailable: true,
    createdAt: '2024-02-20T00:00:00Z',
  },
]

/* ─── Helpers ────────────────────────────────────────────────────────────── */
export const featuredProducts = products.filter((p) => p.featured)

export const productsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug)

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug)

export const productCategories = [
  {
    slug: 'juices',
    name: 'Cold Pressed Juices',
    description: 'Diperas dingin untuk menjaga nutrisi penuh di setiap tetes',
    icon: '🥤',
    count: products.filter((p) => p.categorySlug === 'juices').length,
    color: 'from-emerald-400 to-green-600',
    image:
      'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=400&fit=crop&q=80',
  },
  {
    slug: 'shots',
    name: 'Wellness Shots',
    description: 'Konsentrasi nutrisi tinggi dalam satu tegukan kuat',
    icon: '⚡',
    count: products.filter((p) => p.categorySlug === 'shots').length,
    color: 'from-amber-400 to-orange-500',
    image:
      'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&h=400&fit=crop&q=80',
  },
  {
    slug: 'cleanses',
    name: 'Cleanse Programs',
    description: 'Program detoksifikasi terstruktur untuk reset tubuh total',
    icon: '✨',
    count: 3,
    color: 'from-teal-400 to-cyan-600',
    image:
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500&h=400&fit=crop&q=80',
  },
  {
    slug: 'coconut',
    name: 'Coconut Water',
    description: 'Air kelapa muda murni — elektrolit alami terbaik',
    icon: '🥥',
    count: products.filter((p) => p.categorySlug === 'coconut').length,
    color: 'from-lime-300 to-teal-400',
    image:
      'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&h=400&fit=crop&q=80',
  },
]
