<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $categories = Category::pluck('id', 'slug');

        $products = [
            /* ── Cold Pressed Juices ─────────────────────────────────── */
            [
                'category_id'    => $categories['juices'],
                'name'           => 'Green Detox Supreme',
                'slug'           => 'green-detox-supreme',
                'tagline'        => 'The Ultimate Cleansing Experience',
                'description'    => 'Ramuan hijau sempurna yang menggabungkan sayuran berdaun segar dengan buah-buahan alkaline.',
                'price'          => 55000,
                'volume'         => '350ml',
                'color'          => 'from-emerald-400 to-green-600',
                'ingredients'    => ['Kale', 'Bayam', 'Timun', 'Apel Hijau', 'Jahe', 'Lemon'],
                'benefits'       => ['Detoksifikasi', 'Boost Energi', 'Kaya Antioksidan', 'Alkalizing'],
                'nutrition'      => ['calories'=>95,'protein'=>3.2,'carbs'=>18,'fat'=>0.5,'fiber'=>2.8,'sugar'=>12,'sodium'=>42],
                'badge'          => 'Best Seller',
                'image'          => 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=600&fit=crop&q=80',
                'is_featured'    => true,
                'is_available'   => true,
            ],
            [
                'category_id'    => $categories['juices'],
                'name'           => 'Tropical Sunrise',
                'slug'           => 'tropical-sunrise',
                'tagline'        => 'Taste of Paradise in Every Sip',
                'description'    => 'Perpaduan buah-buahan tropis segar dengan sentuhan kunyit anti-inflamasi.',
                'price'          => 48000,
                'volume'         => '350ml',
                'color'          => 'from-amber-300 to-orange-500',
                'ingredients'    => ['Nanas', 'Mangga', 'Kunyit', 'Jeruk', 'Wortel'],
                'benefits'       => ['Vitamin C Tinggi', 'Anti-Inflamasi', 'Boost Imunitas'],
                'nutrition'      => ['calories'=>120,'protein'=>1.5,'carbs'=>28,'fat'=>0.3,'fiber'=>2.1,'sugar'=>22,'sodium'=>25],
                'badge'          => 'New',
                'image'          => 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=600&fit=crop&q=80',
                'is_featured'    => true,
                'is_available'   => true,
            ],
            [
                'category_id'    => $categories['juices'],
                'name'           => 'Berry Antioxidant',
                'slug'           => 'berry-antioxidant',
                'tagline'        => "Nature's Most Powerful Antioxidants",
                'description'    => 'Ledakan antioksidan dari campuran beri segar dengan beet yang kaya nitrat.',
                'price'          => 52000,
                'volume'         => '350ml',
                'color'          => 'from-purple-400 to-pink-600',
                'ingredients'    => ['Blueberry', 'Stroberi', 'Beet Merah', 'Anggur Hitam', 'Lemon'],
                'benefits'       => ['Antioksidan Tinggi', 'Kesehatan Jantung', 'Brain Boost'],
                'nutrition'      => ['calories'=>110,'protein'=>2.0,'carbs'=>24,'fat'=>0.4,'fiber'=>3.5,'sugar'=>18,'sodium'=>30],
                'badge'          => 'Best Seller',
                'image'          => 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=600&fit=crop&q=80',
                'is_featured'    => true,
                'is_available'   => true,
            ],
            [
                'category_id'    => $categories['juices'],
                'name'           => 'Citrus Immunity',
                'slug'           => 'citrus-immunity',
                'tagline'        => 'Your Daily Immunity Shield',
                'description'    => 'Triple-citrus blend dengan jahe segar dan cayenne yang menghangatkan.',
                'price'          => 45000,
                'volume'         => '350ml',
                'color'          => 'from-yellow-300 to-orange-400',
                'ingredients'    => ['Jeruk', 'Lemon', 'Grapefruit', 'Jahe', 'Cayenne'],
                'benefits'       => ['Imunitas Optimal', 'Vitamin C Tinggi', 'Anti-Bacterial'],
                'nutrition'      => ['calories'=>88,'protein'=>1.8,'carbs'=>20,'fat'=>0.2,'fiber'=>1.5,'sugar'=>16,'sodium'=>15],
                'badge'          => null,
                'image'          => 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop&q=80',
                'is_featured'    => true,
                'is_available'   => true,
            ],
            [
                'category_id'    => $categories['juices'],
                'name'           => 'Root Revitalizer',
                'slug'           => 'root-revitalizer',
                'tagline'        => "Grounded Energy from Earth's Roots",
                'description'    => 'Formula akar bumi — beet, wortel, apel, jahe, dan kunyit.',
                'price'          => 50000,
                'volume'         => '350ml',
                'color'          => 'from-red-400 to-orange-600',
                'ingredients'    => ['Beet Merah', 'Wortel', 'Apel Merah', 'Jahe', 'Kunyit'],
                'benefits'       => ['Stamina Tinggi', 'Sport Performance', 'Anti-Inflamasi'],
                'nutrition'      => ['calories'=>105,'protein'=>2.3,'carbs'=>22,'fat'=>0.3,'fiber'=>3.0,'sugar'=>17,'sodium'=>55],
                'badge'          => null,
                'image'          => 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=600&h=600&fit=crop&q=80',
                'is_featured'    => true,
                'is_available'   => true,
            ],
            [
                'category_id'    => $categories['juices'],
                'name'           => 'Pure Greens Balance',
                'slug'           => 'pure-greens-balance',
                'tagline'        => 'Serenity in a Bottle',
                'description'    => 'Seleri, timun, bayam, pir, dan mint — formula hijau ringan.',
                'price'          => 52000,
                'volume'         => '350ml',
                'color'          => 'from-teal-300 to-emerald-500',
                'ingredients'    => ['Seleri', 'Timun', 'Bayam', 'Pir', 'Mint'],
                'benefits'       => ['pH Balance', 'Hidrasi Optimal', 'Stress Relief'],
                'nutrition'      => ['calories'=>78,'protein'=>2.5,'carbs'=>16,'fat'=>0.3,'fiber'=>2.5,'sugar'=>11,'sodium'=>60],
                'badge'          => null,
                'image'          => 'https://images.unsplash.com/photo-1554481923-a6918bd997bc?w=600&h=600&fit=crop&q=80',
                'is_featured'    => true,
                'is_available'   => true,
            ],
            /* ── Wellness Shots ──────────────────────────────────────── */
            [
                'category_id'    => $categories['shots'],
                'name'           => 'Ginger Fire Shot',
                'slug'           => 'ginger-fire-shot',
                'tagline'        => 'Ignite Your Metabolism',
                'description'    => 'Shot jahe murni dengan cayenne dan merica hitam.',
                'price'          => 35000,
                'volume'         => '60ml',
                'color'          => 'from-amber-400 to-yellow-600',
                'ingredients'    => ['Jahe Segar', 'Lemon', 'Merica Hitam', 'Cayenne'],
                'benefits'       => ['Metabolisme Aktif', 'Anti-Nausea', 'Warming'],
                'nutrition'      => ['calories'=>25,'protein'=>0.3,'carbs'=>5,'fat'=>0.1,'fiber'=>0.2,'sugar'=>3,'sodium'=>8],
                'badge'          => 'Hot',
                'image'          => 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=600&fit=crop&q=80',
                'is_featured'    => false,
                'is_available'   => true,
            ],
            [
                'category_id'    => $categories['shots'],
                'name'           => 'Immunity Shield Shot',
                'slug'           => 'immunity-shield-shot',
                'tagline'        => 'Daily Armor for Your Body',
                'description'    => 'Kombinasi jahe, kunyit, elderberry, dan citrus dalam 60ml.',
                'price'          => 38000,
                'volume'         => '60ml',
                'color'          => 'from-orange-400 to-red-500',
                'ingredients'    => ['Jahe', 'Kunyit', 'Elderberry', 'Jeruk', 'Madu'],
                'benefits'       => ['Imunitas Kuat', 'Anti-Viral', 'Anti-Inflamasi'],
                'nutrition'      => null,
                'badge'          => null,
                'image'          => 'https://images.unsplash.com/photo-1600021763010-3fb80571f714?w=600&h=600&fit=crop&q=80',
                'is_featured'    => false,
                'is_available'   => true,
            ],
            /* ── Coconut Water ───────────────────────────────────────── */
            [
                'category_id'    => $categories['coconut'],
                'name'           => 'Pure Coconut Water',
                'slug'           => 'pure-coconut-water',
                'tagline'        => "Nature's Perfect Electrolyte",
                'description'    => 'Air kelapa muda murni tanpa tambahan apapun.',
                'price'          => 40000,
                'volume'         => '400ml',
                'color'          => 'from-lime-300 to-teal-400',
                'ingredients'    => ['Air Kelapa Muda Murni'],
                'benefits'       => ['Hidrasi Alami', 'Elektrolit Seimbang', 'Post-Workout'],
                'nutrition'      => ['calories'=>45,'protein'=>0.5,'carbs'=>9,'fat'=>0.0,'fiber'=>0.0,'sugar'=>6,'sodium'=>252],
                'badge'          => null,
                'image'          => 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=600&fit=crop&q=80',
                'is_featured'    => false,
                'is_available'   => true,
            ],
        ];

        foreach ($products as $data) {
            Product::updateOrCreate(['slug' => $data['slug']], $data);
        }

        $this->command->info('✅ Products seeded (' . count($products) . ' items).');
    }
}
