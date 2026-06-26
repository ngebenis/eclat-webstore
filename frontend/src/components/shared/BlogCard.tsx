import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn, formatDate } from '@/lib/utils'
import type { Post } from '@/lib/types'

interface BlogCardProps {
  post:       Post
  className?: string
  variant?:   'default' | 'horizontal' | 'featured'
  priority?:  boolean
}

export function BlogCard({
  post,
  className,
  variant  = 'default',
  priority = false,
}: BlogCardProps) {
  if (variant === 'horizontal') {
    return (
      <article className={cn(
        'group flex gap-5 rounded-2xl border border-border bg-white p-4',
        'hover:shadow-md hover:-translate-y-0.5 transition-all duration-300',
        className,
      )}>
        {/* Thumbnail */}
        <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="112px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={priority}
          />
        </div>

        {/* Text */}
        <div className="flex min-w-0 flex-col">
          <Badge variant="secondary" className="mb-1.5 w-fit text-[10px]">
            {post.category}
          </Badge>
          <h3 className="line-clamp-2 text-sm font-bold leading-snug text-eclat-950 group-hover:text-eclat-700 transition-colors">
            {post.title}
          </h3>
          <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </article>
    )
  }

  /* ── Default / Featured card ──────────────────────────────────────────── */
  return (
    <article className={cn(
      'group flex flex-col overflow-hidden rounded-2xl border border-border bg-white',
      'hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
      variant === 'featured' && 'lg:flex-row',
      className,
    )}>
      {/* Image */}
      <div className={cn(
        'relative overflow-hidden',
        variant === 'featured'
          ? 'h-56 lg:h-auto lg:w-1/2 lg:flex-shrink-0'
          : 'h-52',
      )}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes={variant === 'featured'
            ? '(max-width: 1024px) 100vw, 50vw'
            : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          }
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />
        {/* Category overlay */}
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-eclat-800 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta */}
        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <h3 className={cn(
          'font-serif font-bold leading-snug text-eclat-950 group-hover:text-eclat-700 transition-colors',
          variant === 'featured' ? 'text-2xl' : 'text-lg',
        )}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={cn(
          'mt-2.5 leading-relaxed text-muted-foreground',
          variant === 'featured' ? 'text-sm line-clamp-4' : 'text-sm line-clamp-3',
        )}>
          {post.excerpt}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Author + Read more */}
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-2.5">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <div className="leading-none">
              <p className="text-xs font-semibold text-eclat-900">{post.author.name}</p>
              <p className="text-[10px] text-muted-foreground">{post.author.role}</p>
            </div>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1.5 text-xs font-bold text-eclat-700 transition-all hover:gap-2.5 hover:text-eclat-900 group/link"
            aria-label={`Baca artikel: ${post.title}`}
          >
            Baca
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
