import type { Post } from '@/lib/types'

/* ═══════════════════════════════════════════════════════════════════════════
   ÉCLAT — Static blog / article data
═══════════════════════════════════════════════════════════════════════════ */

export const posts: Post[] = [
  {
    id: 1,
    slug: 'mengapa-cold-press-lebih-baik',
    title: '5 Alasan Cold Press Juice Jauh Lebih Unggul dari Jus Biasa',
    excerpt:
      'Proses cold press mempertahankan hingga 70% lebih banyak nutrisi dibanding centrifugal juicing. Pelajari sains di balik perbedaan besar ini.',
    content: `
## Apa Itu Cold Press Juice?

Cold press juice dibuat menggunakan hydraulic press yang memeras buah dan sayuran secara perlahan tanpa menghasilkan panas berlebih. Berbeda dengan juicer sentrifugal konvensional yang berputar dengan kecepatan tinggi dan menghasilkan panas yang merusak enzim.

## 1. Nutrisi Lebih Terjaga

Proses cold press mempertahankan enzim, vitamin, dan mineral dalam kondisi hidup. Penelitian menunjukkan bahwa cold press juice mengandung hingga **70% lebih banyak nutrisi** dibanding jus yang dibuat dengan centrifugal juicer.

## 2. Lebih Banyak Enzim Aktif

Enzim adalah "pekerja" tubuh yang membantu proses pencernaan dan metabolisme. Panas dari juicer konvensional merusak enzim ini, sementara cold press mempertahankannya dalam kondisi aktif.

## 3. Warna Lebih Cerah, Rasa Lebih Segar

Oksidasi minimal berarti warna jus tetap vibrant dan rasa tetap segar. Itulah mengapa cold press juice terlihat jauh lebih menarik dan terasa lebih autentik.

## 4. Umur Simpan Lebih Lama

Karena minim oksidasi, cold press juice dapat bertahan 3–5 hari di kulkas (dengan HPP), dibanding jus sentrifugal yang harus dikonsumsi dalam 30 menit.

## 5. Yield Lebih Tinggi

Cold press mengekstrak lebih banyak cairan dari setiap gram bahan baku, artinya Anda mendapat lebih banyak jus dari jumlah buah/sayur yang sama.

## Kesimpulan

Investasi dalam cold press juice bukan sekadar tren — ini adalah pilihan cerdas untuk kesehatan jangka panjang. Dengan ÉCLAT, Anda mendapatkan cold press juice berkualitas premium dari bahan-bahan lokal terbaik.
    `,
    category: 'Sains & Nutrisi',
    categorySlug: 'science',
    author: {
      name: 'Dr. Sari Putri Andini',
      avatar:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&q=80',
      bio: 'Ahli Gizi & Food Scientist dengan spesialisasi nutrisi fungsional',
      role: 'Nutritionist',
    },
    image:
      'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=450&fit=crop&q=80',
    publishedAt: '2024-11-15T08:00:00Z',
    readingTime: '5 menit baca',
    featured: true,
    tags: ['cold press', 'nutrisi', 'sains', 'kesehatan'],
  },
  {
    id: 2,
    slug: 'panduan-memulai-juice-cleanse',
    title: 'Panduan Lengkap Memulai Juice Cleanse untuk Pemula',
    excerpt:
      'Program cleanse pertama Anda bisa terasa overwhelming. Panduan ini akan membantu Anda mempersiapkan diri, menjalani proses, dan memaksimalkan hasilnya.',
    content: `
## Apa yang Dimaksud dengan Juice Cleanse?

Juice cleanse adalah program di mana Anda mengganti makanan padat dengan cold press juice selama periode tertentu — biasanya 1 hingga 5 hari. Tujuannya adalah memberikan sistem pencernaan waktu istirahat sambil tetap memberi tubuh nutrisi optimal.

## Persiapan Sebelum Cleanse (2-3 Hari Sebelum)

**Mulai mengurangi:**
- Kafein dan alkohol
- Makanan olahan dan fast food
- Daging merah dan produk susu
- Gula tambahan

**Perbanyak konsumsi:**
- Air putih (minimal 2 liter/hari)
- Buah dan sayuran segar
- Whole grains

## Selama Program Cleanse

### Jadwal Konsumsi
1. **06:00** — Juice hijau pertama (Green Detox Supreme)
2. **09:00** — Shot imunitas
3. **12:00** — Juice buah (Tropical Sunrise atau Berry Antioxidant)
4. **15:00** — Nut milk atau coconut water
5. **18:00** — Juice sayuran (Root Revitalizer)
6. **21:00** — Chamomile tea

## Yang Normal Dirasakan

- **Hari 1**: Lapar, sakit kepala ringan (terutama jika biasa konsumsi kafein)
- **Hari 2**: Energi meningkat, fokus lebih tajam
- **Hari 3**: Tubuh terasa lebih ringan, kulit mulai terasa lebih cerah

## Setelah Cleanse

Jangan langsung kembali ke pola makan normal! Perkenalkan makanan padat secara bertahap:
- Hari 1 pasca-cleanse: buah dan sayur segar, smoothie
- Hari 2: tambahkan whole grains dan kacang-kacangan
- Hari 3: kembali ke pola makan sehat secara penuh
    `,
    category: 'Wellness Guide',
    categorySlug: 'wellness',
    author: {
      name: 'Nadira Kusuma',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&q=80',
      bio: 'Wellness Coach & Certified Health Consultant',
      role: 'Wellness Coach',
    },
    image:
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&h=450&fit=crop&q=80',
    publishedAt: '2024-11-28T08:00:00Z',
    readingTime: '7 menit baca',
    featured: true,
    tags: ['cleanse', 'detox', 'panduan', 'pemula', 'wellness'],
  },
  {
    id: 3,
    slug: 'manfaat-morning-wellness-ritual',
    title: 'Morning Wellness Ritual: Mengapa Pagi Hari Menentukan Segalanya',
    excerpt:
      'Penelitian terbaru membuktikan bahwa ritual pagi yang konsisten meningkatkan produktivitas hingga 40%. Mulailah dengan wellness shot dan lihat perbedaannya.',
    content: `
## Kekuatan "Golden Hour" Pagi

Dua jam pertama setelah bangun tidur adalah waktu di mana otak dan tubuh Anda dalam kondisi paling reseptif. Kortisol alami mencapai puncaknya, metabolisme mulai aktif, dan sistem pencernaan siap menerima nutrisi.

## Protokol Morning Wellness ÉCLAT

### Step 1: Hidrasi (7:00 AM)
Segelas air hangat dengan perasan lemon untuk mengaktifkan sistem pencernaan dan menyeimbangkan pH tubuh.

### Step 2: Wellness Shot (7:15 AM)
Satu botol Ginger Fire Shot atau Immunity Shield Shot. Biarkan 15 menit untuk absorpsi optimal sebelum makan.

### Step 3: Movement (7:20 AM)
10-15 menit stretching ringan atau yoga pagi. Gerakan ini meningkatkan sirkulasi dan membantu tubuh menyerap nutrisi dari shot.

### Step 4: Juice Pagi (8:00 AM)
Setelah movement, konsumsi satu botol cold press juice sebagai sarapan bergizi atau pendamping sarapan ringan.

## Mengapa Ini Berhasil?

Ritual yang konsisten melatih tubuh untuk mengharapkan nutrisi pada waktu tertentu, mengoptimalkan ritme sirkadian, dan membantu sistem pencernaan bekerja lebih efisien.
    `,
    category: 'Gaya Hidup',
    categorySlug: 'lifestyle',
    author: {
      name: 'Raditya Pramono',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
      bio: 'Certified Personal Trainer & Holistic Health Coach',
      role: 'Health Coach',
    },
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop&q=80',
    publishedAt: '2024-12-05T08:00:00Z',
    readingTime: '4 menit baca',
    featured: true,
    tags: ['morning routine', 'ritual', 'wellness', 'produktivitas'],
  },
  {
    id: 4,
    slug: 'teknologi-hpp-cold-press',
    title: 'HPP Technology: Rahasia Kesegaran Cold Press Juice ÉCLAT',
    excerpt:
      'High Pressure Processing (HPP) memungkinkan cold press juice tahan hingga 45 hari tanpa mengorbankan nutrisi. Begini cara kerjanya.',
    content: `
## Apa Itu HPP (High Pressure Processing)?

HPP adalah teknologi preservasi pangan yang menggunakan tekanan tinggi (hingga 6,000 bar) untuk menginaktivasi patogen dan bakteri tanpa menggunakan panas. Hasilnya: produk tetap segar, nutrisi terjaga, dan umur simpan diperpanjang secara alami.

## Bagaimana ÉCLAT Menggunakan HPP?

Setelah cold press juice selesai diproduksi dan dikemas, botol-botol tersebut ditempatkan dalam chamber HPP dan diekspos dengan tekanan air ultra-tinggi selama beberapa menit. Proses ini menonaktifkan bakteri berbahaya tanpa merusak enzim, vitamin, atau flavor compounds yang sensitif terhadap panas.

## Manfaat HPP untuk Konsumen

1. **Umur simpan lebih panjang** — hingga 45 hari di refrigerator
2. **Nutrisi terjaga penuh** — tidak ada degradasi vitamin akibat panas
3. **Tanpa pengawet kimia** — 100% clean label
4. **Keamanan terjamin** — patogen dieliminasi secara efektif
5. **Rasa lebih autentik** — flavor compounds tidak rusak
    `,
    category: 'Sains & Nutrisi',
    categorySlug: 'science',
    author: {
      name: 'Dr. Sari Putri Andini',
      avatar:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&q=80',
      bio: 'Ahli Gizi & Food Scientist dengan spesialisasi nutrisi fungsional',
      role: 'Nutritionist',
    },
    image:
      'https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=800&h=450&fit=crop&q=80',
    publishedAt: '2024-12-12T08:00:00Z',
    readingTime: '6 menit baca',
    featured: false,
    tags: ['HPP', 'teknologi', 'food science', 'preservasi'],
  },
  {
    id: 5,
    slug: 'resep-smoothie-bowl-eclat',
    title: 'Resep Smoothie Bowl Spektakuler dengan ÉCLAT Cold Press Juice',
    excerpt:
      'Ubah cold press juice Anda menjadi smoothie bowl yang instagrammable dan penuh nutrisi. Tiga resep eksklusif dari Chef Wellness ÉCLAT.',
    content: `
## Green Goddess Smoothie Bowl

**Bahan dasar:**
- 1 botol ÉCLAT Green Detox Supreme (beku sebagian)
- 1 buah pisang beku
- Segenggam bayam segar

**Topping:**
- Granola oats
- Irisan kiwi dan stroberi
- Biji chia
- Kelapa parut panggang
- Madu sesendok

**Cara:** Blend semua bahan dasar hingga smooth. Tuang ke mangkuk, tata topping secara artistik.

## Tropical Paradise Bowl

**Bahan dasar:**
- 1 botol ÉCLAT Tropical Sunrise (beku sebagian)
- 1/2 buah mangga beku
- 100ml air kelapa

**Topping:**
- Irisan nanas dan mangga segar
- Granola
- Bunga edible
- Sedikit tepung spirulina untuk garnish
    `,
    category: 'Resep',
    categorySlug: 'recipe',
    author: {
      name: 'Chef Amelia Santoso',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
      bio: 'Plant-based Chef & Wellness Food Creator',
      role: 'Chef',
    },
    image:
      'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=450&fit=crop&q=80',
    publishedAt: '2024-12-20T08:00:00Z',
    readingTime: '3 menit baca',
    featured: false,
    tags: ['resep', 'smoothie bowl', 'DIY', 'kreatif'],
  },
  {
    id: 6,
    slug: 'bahan-lokal-unggulan-eclat',
    title: 'Dari Ladang ke Botol: Komitmen ÉCLAT pada Bahan Lokal Terbaik',
    excerpt:
      'Kami bermitra dengan lebih dari 47 petani organik lokal di seluruh Jawa dan Bali. Inilah kisah di balik setiap tetes ÉCLAT Cold Press Juice.',
    content: `
## Filosofi Sourcing ÉCLAT

Kami percaya bahwa kualitas juice dimulai jauh sebelum proses produksi — dimulai dari tanah, dari benih, dari tangan petani yang merawatnya. Itulah mengapa ÉCLAT menjalin kemitraan langsung dengan petani organik lokal.

## Petani Mitra Kami

### Kale & Bayam Organik — Lembang, Jawa Barat
Di ketinggian 1,400 mdpl, Pak Hendra dan keluarganya telah menanam kale organik selama 8 tahun. Tanpa pestisida kimia, tanpa pupuk sintetis — hanya kompos organik dan air gunung yang bersih.

### Nanas Manis — Lampung
Nanas dari Lampung dikenal sebagai yang paling manis di Indonesia. Mitra petani kami memanen nanas pada tingkat kematangan optimal untuk menghasilkan rasa terbaik.

### Jahe & Kunyit — Wonogiri, Jawa Tengah
Jahe gajah dan kunyit organik dari tanah vulkanik Wonogiri memiliki kandungan gingerol dan kurkumin yang jauh lebih tinggi dibanding tanaman konvensional.

## Program Petani Mitra ÉCLAT

Lebih dari sekadar pembelian bahan baku, kami berkomitmen untuk:
- Memberikan harga yang adil (above-market premium)
- Menyediakan pelatihan pertanian organik berkelanjutan
- Mendukung sertifikasi organik petani
- Memberikan advance payment untuk musim tanam berikutnya
    `,
    category: 'Tentang ÉCLAT',
    categorySlug: 'news',
    author: {
      name: 'Tim Redaksi ÉCLAT',
      avatar:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80',
      bio: 'Tim komunikasi ÉCLAT Cold Press Juice',
      role: 'Editorial Team',
    },
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=450&fit=crop&q=80',
    publishedAt: '2025-01-05T08:00:00Z',
    readingTime: '5 menit baca',
    featured: false,
    tags: ['petani lokal', 'organik', 'sustainability', 'brand story'],
  },
]

/* ─── Helpers ────────────────────────────────────────────────────────────── */
export const featuredPosts   = posts.filter((p) => p.featured)
export const getPost         = (slug: string) => posts.find((p) => p.slug === slug)
export const postsByCategory = (slug: string) =>
  posts.filter((p) => p.categorySlug === slug)
