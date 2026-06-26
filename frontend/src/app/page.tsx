import type { Metadata } from 'next'
import { HeroBanner }        from '@/components/home/HeroBanner'
import { MarqueeBanner }     from '@/components/home/MarqueeBanner'
import { ProductCategories } from '@/components/home/ProductCategories'
import { FeaturedProducts }  from '@/components/home/FeaturedProducts'
import { WhyEclat }          from '@/components/home/WhyEclat'
import { CleansePrograms }   from '@/components/home/CleansePrograms'
import { OurStory }          from '@/components/home/OurStory'
import { Testimonials }      from '@/components/home/Testimonials'
import { BlogPreview }       from '@/components/home/BlogPreview'
import { Newsletter }        from '@/components/home/Newsletter'

export const metadata: Metadata = {
  title:       'ÉCLAT Cold Press Juice — Pure. Natural. Radiant.',
  description: 'Premium cold-pressed juices, wellness shots, dan cleanse programs dari bahan lokal organik terbaik Indonesia. HPP Technology. BPOM Certified.',
  alternates:  { canonical: 'https://eclat.id' },
}

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <MarqueeBanner />
      <ProductCategories />
      <FeaturedProducts />
      <WhyEclat />
      <CleansePrograms />
      <OurStory />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
    </>
  )
}
