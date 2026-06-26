<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('tagline');
            $table->text('description');
            $table->text('long_description')->nullable();
            $table->unsignedInteger('price')->comment('IDR, no decimals');
            $table->string('volume', 20)->default('350ml');
            $table->string('color')->nullable()->comment('Tailwind gradient classes');
            $table->json('ingredients')->nullable();
            $table->json('benefits')->nullable();
            $table->json('nutrition')->nullable();
            $table->string('badge', 50)->nullable();
            $table->string('image');
            $table->json('images')->nullable();
            $table->boolean('is_featured')->default(false)->index();
            $table->boolean('is_available')->default(true)->index();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
