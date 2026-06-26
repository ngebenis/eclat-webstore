<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the ÉCLAT database.
     * Run: php artisan db:seed
     */
    public function run(): void
    {
        $this->command->info('🌿 Seeding ÉCLAT database...');

        $this->call([
            CategorySeeder::class,
            ProductSeeder::class,
            StoreLocationSeeder::class,
        ]);

        $this->command->info('✅ All seeders completed successfully!');
    }
}
