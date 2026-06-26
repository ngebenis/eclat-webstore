<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'tagline',
        'description',
        'long_description',
        'price',
        'volume',
        'color',
        'ingredients',
        'benefits',
        'nutrition',
        'badge',
        'image',
        'images',
        'is_featured',
        'is_available',
    ];

    protected $casts = [
        'price'        => 'integer',
        'ingredients'  => 'array',
        'benefits'     => 'array',
        'nutrition'    => 'array',
        'images'       => 'array',
        'is_featured'  => 'boolean',
        'is_available' => 'boolean',
    ];

    /* ── Relationships ───────────────────────────────────────────────── */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /* ── Scopes ──────────────────────────────────────────────────────── */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeAvailable($query)
    {
        return $query->where('is_available', true);
    }

    public function scopeByCategory($query, string $slug)
    {
        return $query->whereHas('category', fn ($q) => $q->where('slug', $slug));
    }
}
