<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('store_locations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('address');
            $table->string('city', 100)->index();
            $table->string('province', 100);
            $table->string('postal_code', 10)->nullable();
            $table->string('phone', 25);
            $table->string('email', 255)->nullable();
            $table->decimal('coordinates_lat', 10, 7)->nullable();
            $table->decimal('coordinates_lng', 10, 7)->nullable();
            $table->json('opening_hours')->nullable();
            $table->string('image')->nullable();
            $table->boolean('is_open')->default(true)->index();
            $table->json('services')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('store_locations');
    }
};
