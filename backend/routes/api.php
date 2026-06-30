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
| All routes are prefixed with /api (set in bootstrap/app.php).
| Cache-control headers are added per controller action.
|
| NOTE: kept unversioned to match the frontend's lib/api.ts and the README.
| If/when a v2 is needed, introduce Route::prefix('v2') alongside this
| group rather than duplicating routes under both prefixed and
| unprefixed paths (which previously caused two URLs to serve the same
| controller action with no clear canonical one).
*/

Route::prefix('products')->group(function () {
    Route::get('/',       [ProductController::class, 'index']);
    Route::get('/{slug}', [ProductController::class, 'show']);
});

Route::get('categories',        [CategoryController::class, 'index']);
Route::get('categories/{slug}', [CategoryController::class, 'show']);

Route::prefix('posts')->group(function () {
    Route::get('/',       [PostController::class, 'index']);
    Route::get('/{slug}', [PostController::class, 'show']);
});

Route::prefix('store-locations')->group(function () {
    Route::get('/',     [StoreLocationController::class, 'index']);
    Route::get('/{id}', [StoreLocationController::class, 'show']);
});

Route::post('contact', [ContactController::class, 'store'])
    ->middleware('throttle:10,1');

Route::post('newsletter/subscribe', [NewsletterController::class, 'subscribe'])
    ->middleware('throttle:5,1');
Route::delete('newsletter/unsubscribe', [NewsletterController::class, 'unsubscribe'])
    ->middleware('throttle:5,1');
