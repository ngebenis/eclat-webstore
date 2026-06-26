<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('excerpt');
            $table->longText('content');
            $table->string('category');
            $table->string('category_slug', 80)->index();
            $table->string('author_name');
            $table->string('author_avatar')->nullable();
            $table->text('author_bio')->nullable();
            $table->string('author_role', 80)->nullable();
            $table->string('image');
            $table->string('reading_time', 40)->nullable();
            $table->json('tags')->nullable();
            $table->boolean('is_featured')->default(false)->index();
            $table->timestamp('published_at')->nullable()->index();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
