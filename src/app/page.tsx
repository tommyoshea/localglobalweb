import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Web Design Dublin | Professional Website Designers Dublin | LocalGlobalWeb',
  description: 'Professional web design Dublin. Expert website designers Dublin creating affordable, responsive websites for small businesses. Get your Dublin business online with our award-winning web design services starting from €199.',
  keywords: 'web design dublin, website designers dublin, web designers dublin, website design dublin, dublin web design, dublin website designers, affordable web design dublin, professional web design dublin, responsive web design dublin, small business web design dublin, ecommerce web design dublin, wordpress web design dublin, seo web design dublin, cheap web design dublin, best web designers dublin',
  openGraph: {
    title: 'Web Design Dublin | Professional Website Designers Dublin',
    description: 'Professional web design Dublin. Expert website designers Dublin creating affordable, responsive websites for small businesses. Get your Dublin business online today.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Dublin Web Designers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dublin Web Design Services - LocalGlobalWeb'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Dublin | Professional Website Designers Dublin',
    description: 'Professional web design Dublin. Expert website designers Dublin creating affordable, responsive websites for small businesses.',
    images: ['/og-image.jpg']
  },
  alternates: {
    canonical: 'https://localglobalweb.com'
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
