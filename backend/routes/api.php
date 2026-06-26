<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\StoreLocationController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\NewsletterController;

/*
|--------------------------------------------------------------------------
| ÉCLAT API Routes
|--------------------------------------------------------------------------
| All routes are prefixed with /api (set in bootstrap/app.php)
| Cache-control headers are added per controller action.
*/

Route::prefix('v1')->group(function () {

    /* ── Products ────────────────────────────────────────────────────── */
    Route::prefix('products')->group(function () {
        Route::get('/',           [ProductController::class, 'index']);
        Route::get('/{slug}',     [ProductController::class, 'show']);
    });

    /* ── Categories ──────────────────────────────────────────────────── */
    Route::get('categories',      [CategoryController::class, 'index']);
    Route::get('categories/{slug}', [CategoryController::class, 'show']);

    /* ── Posts / Blog ────────────────────────────────────────────────── */
    Route::prefix('posts')->group(function () {
        Route::get('/',           [PostController::class, 'index']);
        Route::get('/{slug}',     [PostController::class, 'show']);
    });

    /* ── Store Locations ─────────────────────────────────────────────── */
    Route::prefix('store-locations')->group(function () {
        Route::get('/',           [StoreLocationController::class, 'index']);
        Route::get('/{id}',       [StoreLocationController::class, 'show']);
    });

    /* ── Contact (rate-limited) ──────────────────────────────────────── */
    Route::post('contact',        [ContactController::class, 'store'])
        ->middleware('throttle:10,1');

    /* ── Newsletter ──────────────────────────────────────────────────── */
    Route::post('newsletter/subscribe',   [NewsletterController::class, 'subscribe'])
        ->middleware('throttle:5,1');
    Route::delete('newsletter/unsubscribe', [NewsletterController::class, 'unsubscribe'])
        ->middleware('throttle:5,1');

});

/* Alias without version prefix for convenience */
Route::get('products',               [ProductController::class, 'index']);
Route::get('products/{slug}',        [ProductController::class, 'show']);
Route::get('categories',             [CategoryController::class, 'index']);
Route::get('posts',                  [PostController::class, 'index']);
Route::get('posts/{slug}',           [PostController::class, 'show']);
Route::get('store-locations',        [StoreLocationController::class, 'index']);
Route::get('store-locations/{id}',   [StoreLocationController::class, 'show']);
Route::post('contact',               [ContactController::class, 'store'])->middleware('throttle:10,1');
Route::post('newsletter/subscribe',  [NewsletterController::class, 'subscribe'])->middleware('throttle:5,1');
