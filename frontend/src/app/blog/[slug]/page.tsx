import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link  from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { BlogCard }        from '@/components/shared/BlogCard'
import { Newsletter }      from '@/components/home/Newsletter'
import { posts, getPost }  from '@/data/posts'
import { formatDate }      from '@/lib/utils'

/* ─── Static params ──────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post     = getPost(slug)
  if (!post) return {}
  return {
    title:       `${post.title} — ÉCLAT Blog`,
    description: post.excerpt,
    openGraph: {
      title:   post.title,
      description: post.excerpt,
      images:  [{ url: post.image }],
      type:    'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    alternates: { canonical: `https://eclat.id/blog/${slug}` },
  }
}

/* ─── Simple markdown renderer ───────────────────────────────────────────── */
function RichContent({ content }: { content: string }) {
  const blocks = content.trim().split(/\n{2,}/)

  return (
    <div className="prose-eclat">
      {blocks.map((block, i) => {
        const trimmed = block.trim()
        if (!trimmed) return null

        // H2
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={i} className="mt-8 mb-4 font-serif text-2xl font-bold text-eclat-950">
              {trimmed.replace('## ', '')}
            </h2>
          )
        }
        // H3
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={i} className="mt-6 mb-3 font-serif text-xl font-bold text-eclat-900">
              {trimmed.replace('### ', '')}
            </h3>
          )
        }
        // Unordered list
        if (trimmed.split('\n').every((l) => l.trim().startsWith('- '))) {
          const items = trimmed.split('\n').map((l) => l.replace(/^- /, '').trim())
          return (
            <ul key={i} className="my-4 space-y-2 pl-5">
              {items.map((item, j) => (
                <li key={j} className="list-disc text-eclat-800">
                  <RawLine text={item} />
                </li>
              ))}
            </ul>
          )
        }
        // Numbered list
        if (trimmed.split('\n').every((l) => /^\d+\.\s/.test(l.trim()))) {
          const items = trimmed.split('\n').map((l) => l.replace(/^\d+\.\s/, '').trim())
          return (
            <ol key={i} className="my-4 space-y-2 pl-5">
              {items.map((item, j) => (
                <li key={j} className="list-decimal text-eclat-800">
                  <RawLine text={item} />
                </li>
              ))}
            </ol>
          )
        }
        // Default paragraph
        return (
          <p key={i} className="my-4 leading-relaxed text-eclat-800">
            <RawLine text={trimmed} />
          </p>
        )
      })}
    </div>
  )
}

function RawLine({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="font-bold text-eclat-950">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post     = getPost(slug)
  if (!post) notFound()

  const related = posts
    .filter((p) => p.categorySlug === post.categorySlug && p.id !== post.id)
    .slice(0, 3)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden bg-eclat-950">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-eclat-950 via-eclat-950/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 container mx-auto pb-10">
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-white/70 line-clamp-1">{post.title}</span>
          </nav>

          <span className="mb-3 inline-flex rounded-full bg-eclat-700 px-3 py-1 text-xs font-bold text-white">
            {post.category}
          </span>
          <h1 className="max-w-3xl font-serif text-3xl font-black text-white sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={28}
                height={28}
                className="rounded-full"
              />
              {post.author.name}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article body ─────────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_280px]">

            {/* Main content */}
            <AnimatedSection>
              <article>
                {/* Lead / excerpt */}
                <p className="mb-8 text-xl font-medium leading-relaxed text-eclat-800 border-l-4 border-eclat-400 pl-5 italic">
                  {post.excerpt}
                </p>

                <RichContent content={post.content} />

                {/* Tags */}
                <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-eclat-50 px-3 py-1.5 text-xs font-medium text-eclat-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Share */}
                <div className="mt-6 flex items-center gap-3">
                  <Share2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Bagikan artikel ini:</span>
                  {[
                    { label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(post.title + ' | ÉCLAT Blog')}` },
                    { label: 'Twitter',  href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://eclat.id/blog/' + post.slug)}` },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-eclat-50 px-3 py-1.5 text-xs font-semibold text-eclat-700 hover:bg-eclat-100 transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </article>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection animation="slide-in-right" className="space-y-6">
              {/* Author card */}
              <div className="rounded-2xl border border-border p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Tentang Penulis
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={52}
                    height={52}
                    className="rounded-full object-cover ring-2 ring-eclat-100"
                  />
                  <div>
                    <p className="font-bold text-eclat-950">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">{post.author.role}</p>
                  </div>
                </div>
                {post.author.bio && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {post.author.bio}
                  </p>
                )}
              </div>

              {/* Back to blog */}
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm font-semibold text-eclat-700 hover:text-eclat-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Blog
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Related articles ─────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="section-py-sm bg-eclat-50/40">
          <div className="container mx-auto">
            <AnimatedSection>
              <h2 className="mb-8 font-serif text-2xl font-bold text-eclat-950">
                Artikel Terkait
              </h2>
            </AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 80}>
                  <BlogCard post={p} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </>
  )
}
