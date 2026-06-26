<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Cache;

class PostController extends Controller
{
    /**
     * GET /api/posts
     * Supports: ?category=slug, ?featured=true, ?tag=wellness, ?per_page=9, ?page=1
     */
    public function index(Request $request): AnonymousResourceCollection|JsonResponse
    {
        $validated = $request->validate([
            'category' => ['nullable', 'string', 'max:80'],
            'featured' => ['nullable', 'boolean'],
            'tag'      => ['nullable', 'string', 'max:80'],
            'per_page' => ['nullable', 'integer', 'min:1', 'max:50'],
            'page'     => ['nullable', 'integer', 'min:1'],
        ]);

        $cacheKey = 'posts:' . md5(json_encode($validated));

        $posts = Cache::remember($cacheKey, now()->addMinutes(15), function () use ($validated) {
            $query = Post::published();

            if (! empty($validated['category'])) {
                $query->byCategory($validated['category']);
            }

            if (! empty($validated['featured'])) {
                $query->featured();
            }

            if (! empty($validated['tag'])) {
                $query->whereJsonContains('tags', $validated['tag']);
            }

            return $query->latest('published_at')->paginate($validated['per_page'] ?? 9);
        });

        return PostResource::collection($posts);
    }

    /**
     * GET /api/posts/{slug}
     */
    public function show(string $slug): PostResource|JsonResponse
    {
        $post = Cache::remember("post:{$slug}", now()->addMinutes(30), function () use ($slug) {
            return Post::published()->where('slug', $slug)->firstOrFail();
        });

        return new PostResource($post);
    }
}
