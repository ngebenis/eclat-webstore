import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { BlogCard } from '@/components/shared/BlogCard'
import { featuredPosts, posts } from '@/data/posts'

export function BlogPreview() {
  const [featured, ...rest] = featuredPosts
  const secondary           = rest.slice(0, 2)
  /* Fallback if not enough featured posts */
  const restFromAll         = posts.filter((p) => !featuredPosts.includes(p)).slice(0, 2)
  const sideCards           = secondary.length >= 2 ? secondary : restFromAll

  return (
    <section className="section-py bg-eclat-50/40" aria-labelledby="blog-heading">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <AnimatedSection>
            <SectionHeader
              badge="Blog & Artikel"
              title="Tips Wellness &\nPengetahuan Nutrisi"
              subtitle="Dari ahli gizi, wellness coach, dan chef plant-based kami."
              id="blog-heading"
            />
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" className="shrink-0">
            <Link
              href="/blog"
              className="flex items-center gap-2 rounded-full border-2 border-eclat-700 px-5 py-2.5 text-sm font-bold text-eclat-700 transition-all hover:bg-eclat-700 hover:text-white"
            >
              Semua Artikel
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Layout: featured (left) + 2 stacked cards (right) */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {/* Featured article */}
          {featured && (
            <AnimatedSection animation="slide-in-left">
              <BlogCard post={featured} variant="featured" priority className="h-full" />
            </AnimatedSection>
          )}

          {/* Side cards */}
          <div className="flex flex-col gap-6">
            {sideCards.map((post, i) => (
              <AnimatedSection key={post.id} animation="slide-in-right" delay={i * 100}>
                <BlogCard post={post} className="flex-1" />
              </AnimatedSection>
            ))}
          </div>

        </div>

        {/* Category quick links */}
        <AnimatedSection delay={300} className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            { label: 'Sains & Nutrisi', slug: 'science' },
            { label: 'Wellness Guide', slug: 'wellness' },
            { label: 'Gaya Hidup',     slug: 'lifestyle' },
            { label: 'Resep',          slug: 'recipe' },
            { label: 'Tentang ÉCLAT',  slug: 'news' },
          ].map(({ label, slug }) => (
            <Link
              key={slug}
              href={`/blog?category=${slug}`}
              className="rounded-full border border-eclat-200 bg-white px-4 py-2 text-sm font-medium text-eclat-700 transition-all hover:border-eclat-500 hover:bg-eclat-50"
            >
              {label}
            </Link>
          ))}
        </AnimatedSection>

      </div>
    </section>
  )
}
