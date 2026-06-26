<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class CategoryController extends Controller
{
    /**
     * GET /api/categories
     */
    public function index(): JsonResponse
    {
        $categories = Cache::remember('categories:all', now()->addHours(6), function () {
            return Category::ordered()
                ->withCount('products')
                ->get()
                ->map(fn ($c) => [
                    'id'          => $c->id,
                    'name'        => $c->name,
                    'slug'        => $c->slug,
                    'description' => $c->description,
                    'image'       => $c->image,
                    'icon'        => $c->icon,
                    'count'       => $c->products_count,
                ]);
        });

        return response()->json([
            'data'    => $categories,
            'message' => 'Categories retrieved successfully.',
            'status'  => 200,
        ]);
    }

    /**
     * GET /api/categories/{slug}
     */
    public function show(string $slug): JsonResponse
    {
        $category = Cache::remember("category:{$slug}", now()->addHours(6), function () use ($slug) {
            return Category::where('slug', $slug)->withCount('products')->firstOrFail();
        });

        return response()->json([
            'data'    => $category,
            'message' => 'Category retrieved successfully.',
            'status'  => 200,
        ]);
    }
}
