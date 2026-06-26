<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StoreLocationResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'           => $this->id,
            'name'         => $this->name,
            'address'      => $this->address,
            'city'         => $this->city,
            'province'     => $this->province,
            'postalCode'   => $this->postal_code,
            'phone'        => $this->phone,
            'email'        => $this->email,
            'coordinates'  => [
                'lat' => (float) $this->coordinates_lat,
                'lng' => (float) $this->coordinates_lng,
            ],
            'openingHours' => $this->opening_hours,
            'image'        => $this->image,
            'isOpen'       => $this->is_open,
            'services'     => $this->services ?? [],
        ];
    }
}
