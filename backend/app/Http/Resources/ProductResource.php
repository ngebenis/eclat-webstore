<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'              => $this->id,
            'slug'            => $this->slug,
            'name'            => $this->name,
            'tagline'         => $this->tagline,
            'description'     => $this->description,
            'longDescription' => $this->long_description,
            'category'        => $this->category?->name,
            'categorySlug'    => $this->category?->slug,
            'price'           => $this->price,
            'volume'          => $this->volume,
            'color'           => $this->color,
            'ingredients'     => $this->ingredients ?? [],
            'benefits'        => $this->benefits ?? [],
            'nutrition'       => $this->nutrition,
            'badge'           => $this->badge,
            'image'           => $this->image,
            'images'          => $this->images ?? [],
            'featured'        => $this->is_featured,
            'isAvailable'     => $this->is_available,
            'createdAt'       => $this->created_at?->toIso8601String(),
        ];
    }
}
