import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Dublin Web Designers | Get Quote | LocalGlobalWeb - Professional Website Design Dublin',
  description: 'Contact LocalGlobalWeb for professional web design services in Dublin. Get a free quote for your website project. Expert Dublin web designers ready to help your business grow online.',
  keywords: 'contact dublin web designers, dublin web design quote, dublin website design contact, web design dublin contact, dublin web designers contact, get quote dublin web design, dublin website designers contact form, dublin web design consultation',
  openGraph: {
    title: 'Contact Dublin Web Designers | Get Quote | LocalGlobalWeb',
    description: 'Contact LocalGlobalWeb for professional web design services in Dublin. Get a free quote for your website project. Expert Dublin web designers ready to help your business grow online.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Dublin Web Designers',
    images: [
      {
        url: '/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact LocalGlobalWeb - Dublin Web Designers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Dublin Web Designers | Get Quote | LocalGlobalWeb',
    description: 'Contact LocalGlobalWeb for professional web design services in Dublin. Get a free quote for your website project.',
    images: ['/contact-og-image.jpg']
  },
  alternates: {
    canonical: 'https://localglobalweb.com/contact'
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
