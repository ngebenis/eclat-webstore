<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
| This is an API-only backend (consumed by the Next.js frontend), so the
| web group is intentionally minimal — just a friendly root response.
*/

Route::get('/', function () {
    return response()->json([
        'name'    => config('app.name'),
        'status'  => 'ok',
        'message' => 'ÉCLAT API — see /api for available endpoints.',
    ]);
});
