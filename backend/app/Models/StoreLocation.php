<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StoreLocation extends Model
{
    protected $fillable = [
        'name',
        'address',
        'city',
        'province',
        'postal_code',
        'phone',
        'email',
        'coordinates_lat',
        'coordinates_lng',
        'opening_hours',
        'image',
        'is_open',
        'services',
    ];

    protected $casts = [
        'coordinates_lat' => 'float',
        'coordinates_lng' => 'float',
        'opening_hours'   => 'array',
        'services'        => 'array',
        'is_open'         => 'boolean',
    ];

    /* ── Accessors ───────────────────────────────────────────────────── */
    public function getCoordinatesAttribute(): array
    {
        return [
            'lat' => $this->coordinates_lat,
            'lng' => $this->coordinates_lng,
        ];
    }

    /* ── Scopes ──────────────────────────────────────────────────────── */
    public function scopeByCity($query, string $city)
    {
        return $query->where('city', 'ilike', "%{$city}%");
    }

    public function scopeOpen($query)
    {
        return $query->where('is_open', true);
    }
}
