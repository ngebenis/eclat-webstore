<?php

namespace Database\Seeders;

use App\Models\StoreLocation;
use Illuminate\Database\Seeder;

class StoreLocationSeeder extends Seeder
{
    public function run(): void
    {
        $locations = [
            [
                'name'            => 'ÉCLAT SCBD',
                'address'         => 'Jl. Jend. Sudirman Kav. 52-53, Pacific Place Mall Lt. 1',
                'city'            => 'Jakarta Selatan',
                'province'        => 'DKI Jakarta',
                'postal_code'     => '12190',
                'phone'           => '+62 21 5151 8800',
                'email'           => 'scbd@eclat.id',
                'coordinates_lat' => -6.2238,
                'coordinates_lng' => 106.8089,
                'opening_hours'   => ['weekdays'=>'08:00 – 21:00','weekend'=>'09:00 – 22:00','holiday'=>'09:00 – 21:00'],
                'image'           => 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&q=80',
                'is_open'         => true,
                'services'        => ['Dine-in','Take Away','Delivery','Cleanse Konsultasi'],
            ],
            [
                'name'            => 'ÉCLAT Kemang',
                'address'         => 'Jl. Kemang Raya No. 88, Kemang',
                'city'            => 'Jakarta Selatan',
                'province'        => 'DKI Jakarta',
                'postal_code'     => '12730',
                'phone'           => '+62 21 7179 4455',
                'email'           => 'kemang@eclat.id',
                'coordinates_lat' => -6.2603,
                'coordinates_lng' => 106.8139,
                'opening_hours'   => ['weekdays'=>'07:30 – 20:00','weekend'=>'08:00 – 21:00'],
                'image'           => 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop&q=80',
                'is_open'         => true,
                'services'        => ['Dine-in','Take Away','Delivery'],
            ],
            [
                'name'            => 'ÉCLAT Bandung — Dago',
                'address'         => 'Jl. Ir. H. Juanda No. 120, Dago',
                'city'            => 'Bandung',
                'province'        => 'Jawa Barat',
                'postal_code'     => '40135',
                'phone'           => '+62 22 2508 9911',
                'email'           => 'bandung@eclat.id',
                'coordinates_lat' => -6.8876,
                'coordinates_lng' => 107.6107,
                'opening_hours'   => ['weekdays'=>'08:00 – 20:00','weekend'=>'08:00 – 21:00'],
                'image'           => 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop&q=80',
                'is_open'         => true,
                'services'        => ['Dine-in','Take Away','Delivery'],
            ],
            [
                'name'            => 'ÉCLAT Surabaya — Galaxy Mall',
                'address'         => 'Galaxy Mall 3, Jl. Dharmahusada Indah Timur, Lt. 1',
                'city'            => 'Surabaya',
                'province'        => 'Jawa Timur',
                'postal_code'     => '60285',
                'phone'           => '+62 31 5912 7788',
                'email'           => 'surabaya@eclat.id',
                'coordinates_lat' => -7.2796,
                'coordinates_lng' => 112.7731,
                'opening_hours'   => ['weekdays'=>'10:00 – 21:00','weekend'=>'10:00 – 22:00'],
                'image'           => 'https://images.unsplash.com/photo-1536305030769-2be3fb07e12d?w=600&h=400&fit=crop&q=80',
                'is_open'         => true,
                'services'        => ['Dine-in','Take Away','Delivery'],
            ],
            [
                'name'            => 'ÉCLAT Bali — Seminyak',
                'address'         => 'Jl. Petitenget No. 21, Seminyak',
                'city'            => 'Badung',
                'province'        => 'Bali',
                'postal_code'     => '80361',
                'phone'           => '+62 361 8469 9022',
                'email'           => 'bali@eclat.id',
                'coordinates_lat' => -8.6904,
                'coordinates_lng' => 115.1648,
                'opening_hours'   => ['weekdays'=>'07:00 – 21:00','weekend'=>'07:00 – 22:00'],
                'image'           => 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop&q=80',
                'is_open'         => true,
                'services'        => ['Dine-in','Take Away','Delivery','Wellness Retreat Partner'],
            ],
        ];

        foreach ($locations as $data) {
            StoreLocation::updateOrCreate(['name' => $data['name']], $data);
        }

        $this->command->info('✅ Store locations seeded (' . count($locations) . ' locations).');
    }
}
