# ─── Base ──────────────────────────────────────────────────────────────────
FROM php:8.3-fpm-alpine AS base

WORKDIR /var/www/html

# System dependencies
RUN apk add --no-cache \
    bash curl git unzip libpng-dev libjpeg-turbo-dev freetype-dev \
    libzip-dev oniguruma-dev icu-dev postgresql-dev

# PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
 && docker-php-ext-install \
    pdo pdo_pgsql pgsql \
    gd zip bcmath mbstring intl opcache \
    pcntl

# Redis extension via PECL
RUN pecl install redis && docker-php-ext-enable redis

# Composer
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

# PHP config
COPY docker/php/php.ini /usr/local/etc/php/conf.d/app.ini

# ─── Development ───────────────────────────────────────────────────────────
FROM base AS development

ENV APP_ENV=local
ENV APP_DEBUG=true

COPY . .

RUN composer install --no-interaction --optimize-autoloader

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]

# ─── Production ────────────────────────────────────────────────────────────
FROM base AS production

ENV APP_ENV=production
ENV APP_DEBUG=false

COPY . .

RUN composer install --no-dev --no-interaction --optimize-autoloader \
 && php artisan config:cache \
 && php artisan route:cache \
 && php artisan view:cache

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
