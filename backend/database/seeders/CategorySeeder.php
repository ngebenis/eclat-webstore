<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name'        => 'Cold Pressed Juices',
                'slug'        => 'juices',
                'description' => 'Diperas dingin untuk menjaga nutrisi penuh di setiap tetes',
                'icon'        => '🥤',
                'image'       => 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=400&fit=crop&q=80',
                'order'       => 1,
            ],
            [
                'name'        => 'Wellness Shots',
                'slug'        => 'shots',
                'description' => 'Konsentrasi nutrisi tinggi dalam satu tegukan kuat',
                'icon'        => '⚡',
                'image'       => 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&h=400&fit=crop&q=80',
                'order'       => 2,
            ],
            [
                'name'        => 'Cleanse Programs',
                'slug'        => 'cleanses',
                'description' => 'Program detoksifikasi terstruktur untuk reset tubuh total',
                'icon'        => '✨',
                'image'       => 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500&h=400&fit=crop&q=80',
                'order'       => 3,
            ],
            [
                'name'        => 'Coconut Water',
                'slug'        => 'coconut',
                'description' => 'Air kelapa muda murni — elektrolit alami terbaik',
                'icon'        => '🥥',
                'image'       => 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&h=400&fit=crop&q=80',
                'order'       => 4,
            ],
        ];

        foreach ($categories as $data) {
            Category::updateOrCreate(['slug' => $data['slug']], $data);
        }

        $this->command->info('✅ Categories seeded.');
    }
}
