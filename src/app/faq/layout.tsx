import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design FAQ Dublin | Common Questions | LocalGlobalWeb',
  description: 'Get answers to common questions about web design services in Dublin. From pricing to timelines, find everything you need to know about our Dublin web design services. Expert answers from Dublin web designers.',
  keywords: 'web design faq dublin, dublin web design faq, website design faq dublin, dublin web designers faq, web design questions dublin, dublin web design help, dublin website design faq, dublin web design common questions',
  openGraph: {
    title: 'Web Design FAQ Dublin | Common Questions | LocalGlobalWeb',
    description: 'Get answers to common questions about web design services in Dublin. From pricing to timelines, find everything you need to know about our Dublin web design services. Expert answers from Dublin web designers.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Dublin Web Designers',
    images: [
      {
        url: '/faq-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Design FAQ Dublin - LocalGlobalWeb'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design FAQ Dublin | Common Questions | LocalGlobalWeb',
    description: 'Get answers to common questions about web design services in Dublin. From pricing to timelines, find everything you need to know about our Dublin web design services.',
    images: ['/faq-og-image.jpg']
  },
  alternates: {
    canonical: 'https://localglobalweb.com/faq'
  }
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
