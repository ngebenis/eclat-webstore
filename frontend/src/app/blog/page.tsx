import type { Metadata } from 'next'
import Link           from 'next/link'
import { SectionHeader }   from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { BlogCard }        from '@/components/shared/BlogCard'
import { Newsletter }      from '@/components/home/Newsletter'
import { posts } from '@/data/posts'
import { cn }    from '@/lib/utils'

export const metadata: Metadata = {
  title:       'Blog & Artikel Wellness — ÉCLAT',
  description: 'Tips wellness, panduan cleanse, resep sehat, dan pengetahuan nutrisi dari tim ahli ÉCLAT Cold Press Juice.',
  alternates:  { canonical: 'https://eclat.id/blog' },
}

const CATEGORIES = [
  { slug: 'all',       label: 'Semua' },
  { slug: 'science',   label: 'Sains & Nutrisi' },
  { slug: 'wellness',  label: 'Wellness Guide' },
  { slug: 'lifestyle', label: 'Gaya Hidup' },
  { slug: 'recipe',    label: 'Resep' },
  { slug: 'news',      label: 'Tentang ÉCLAT' },
]

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams

  const filtered = (!category || category === 'all')
    ? posts
    : posts.filter((p) => p.categorySlug === category)

  const [featured, ...rest] = filtered

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-eclat-950 to-eclat-900 py-20 md:py-28">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <SectionHeader
              badge="Blog & Artikel"
              title="Pengetahuan untuk\nPerjalanan Wellness Anda"
              subtitle="Dari ahli gizi, wellness coach, dan chef plant-based kami — konten terpercaya setiap minggu."
              centered
              light
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Category filter ──────────────────────────────────────────── */}
      <div className="sticky top-16 z-30 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="container mx-auto">
          <nav
            className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar"
            aria-label="Filter kategori artikel"
          >
            {CATEGORIES.map(({ slug, label }) => (
              <Link
                key={slug}
                href={slug === 'all' ? '/blog' : `/blog?category=${slug}`}
                className={cn(
                  'shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all',
                  (slug === 'all' && !category) || category === slug
                    ? 'bg-eclat-800 text-white'
                    : 'text-muted-foreground hover:text-eclat-800 hover:bg-eclat-50',
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Articles ─────────────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container mx-auto">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-4xl">📝</p>
              <p className="mt-4 font-serif text-xl font-bold">Artikel tidak ditemukan</p>
              <Link href="/blog" className="mt-6 inline-flex rounded-full bg-eclat-800 px-6 py-3 text-sm font-bold text-white">
                Lihat Semua Artikel
              </Link>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Featured article */}
              {featured && (
                <AnimatedSection>
                  <BlogCard post={featured} variant="featured" priority />
                </AnimatedSection>
              )}

              {/* Rest in grid */}
              {rest.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post, i) => (
                    <AnimatedSection key={post.id} delay={i * 80}>
                      <BlogCard post={post} />
                    </AnimatedSection>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Newsletter />
    </>
  )
}
