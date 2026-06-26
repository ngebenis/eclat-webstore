<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Cache;

class ProductController extends Controller
{
    /**
     * GET /api/products
     * Supports: ?category=slug, ?featured=true, ?per_page=12, ?page=1
     */
    public function index(Request $request): AnonymousResourceCollection|JsonResponse
    {
        $validated = $request->validate([
            'category' => ['nullable', 'string', 'max:80'],
            'featured' => ['nullable', 'boolean'],
            'per_page' => ['nullable', 'integer', 'min:1', 'max:50'],
            'page'     => ['nullable', 'integer', 'min:1'],
        ]);

        $cacheKey = 'products:' . md5(json_encode($validated));

        $products = Cache::remember($cacheKey, now()->addMinutes(30), function () use ($validated) {
            $query = Product::with('category')->available();

            if (! empty($validated['category'])) {
                $query->byCategory($validated['category']);
            }

            if (! empty($validated['featured'])) {
                $query->featured();
            }

            return $query->latest()->paginate($validated['per_page'] ?? 12);
        });

        return ProductResource::collection($products);
    }

    /**
     * GET /api/products/{slug}
     */
    public function show(string $slug): ProductResource|JsonResponse
    {
        $product = Cache::remember("product:{$slug}", now()->addMinutes(60), function () use ($slug) {
            return Product::with('category')
                ->where('slug', $slug)
                ->firstOrFail();
        });

        return new ProductResource($product);
    }
}
