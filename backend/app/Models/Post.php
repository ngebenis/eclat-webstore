<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'category',
        'category_slug',
        'author_name',
        'author_avatar',
        'author_bio',
        'author_role',
        'image',
        'reading_time',
        'tags',
        'is_featured',
        'published_at',
    ];

    protected $casts = [
        'tags'         => 'array',
        'is_featured'  => 'boolean',
        'published_at' => 'datetime',
    ];

    /* ── Scopes ──────────────────────────────────────────────────────── */
    public function scopePublished($query)
    {
        return $query->whereNotNull('published_at')
                     ->where('published_at', '<=', now());
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeByCategory($query, string $slug)
    {
        return $query->where('category_slug', $slug);
    }

    /* ── Accessors ───────────────────────────────────────────────────── */
    public function getAuthorAttribute(): array
    {
        return [
            'name'   => $this->author_name,
            'avatar' => $this->author_avatar,
            'bio'    => $this->author_bio,
            'role'   => $this->author_role,
        ];
    }
}
