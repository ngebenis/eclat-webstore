<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'           => $this->id,
            'slug'         => $this->slug,
            'title'        => $this->title,
            'excerpt'      => $this->excerpt,
            'content'      => $this->when(
                $request->routeIs('*.posts.show'),
                fn () => $this->content,
            ),
            'category'     => $this->category,
            'categorySlug' => $this->category_slug,
            'author'       => [
                'name'   => $this->author_name,
                'avatar' => $this->author_avatar,
                'bio'    => $this->author_bio,
                'role'   => $this->author_role,
            ],
            'image'        => $this->image,
            'readingTime'  => $this->reading_time,
            'tags'         => $this->tags ?? [],
            'featured'     => $this->is_featured,
            'publishedAt'  => $this->published_at?->toIso8601String(),
        ];
    }
}
