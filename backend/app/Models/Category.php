<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'icon',
        'order',
    ];

    protected $casts = [
        'order' => 'integer',
    ];

    /* ── Relationships ───────────────────────────────────────────────── */
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    /* ── Scopes ──────────────────────────────────────────────────────── */
    public function scopeOrdered($query)
    {
        return $query->orderBy('order');
    }
}
