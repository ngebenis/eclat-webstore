<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\StoreLocationResource;
use App\Models\StoreLocation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Cache;

class StoreLocationController extends Controller
{
    /**
     * GET /api/store-locations
     * Supports: ?city=Jakarta
     */
    public function index(Request $request): AnonymousResourceCollection|JsonResponse
    {
        $city = $request->input('city');

        $cacheKey = 'stores:' . md5($city ?? 'all');

        $stores = Cache::remember($cacheKey, now()->addHours(2), function () use ($city) {
            $query = StoreLocation::query();

            if ($city) {
                $query->byCity($city);
            }

            return $query->orderBy('city')->orderBy('name')->get();
        });

        return StoreLocationResource::collection($stores);
    }

    /**
     * GET /api/store-locations/{id}
     */
    public function show(int $id): StoreLocationResource|JsonResponse
    {
        $store = Cache::remember("store:{$id}", now()->addHours(2), function () use ($id) {
            return StoreLocation::findOrFail($id);
        });

        return new StoreLocationResource($store);
    }
}
