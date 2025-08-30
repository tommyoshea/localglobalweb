import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Templates Dublin | Professional Web Design Portfolio | LocalGlobalWeb',
  description: 'Browse our professional website templates designed for Dublin businesses. From electricians to solicitors, we have the perfect template for your industry. Professional web design portfolio showcasing our Dublin web design expertise.',
  keywords: 'website templates dublin, dublin web design portfolio, dublin website templates, web design templates dublin, dublin web designers portfolio, professional website templates dublin, dublin web design examples, dublin website design portfolio, dublin web design showcase',
  openGraph: {
    title: 'Website Templates Dublin | Professional Web Design Portfolio | LocalGlobalWeb',
    description: 'Browse our professional website templates designed for Dublin businesses. From electricians to solicitors, we have the perfect template for your industry. Professional web design portfolio showcasing our Dublin web design expertise.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Dublin Web Designers',
    images: [
      {
        url: '/templates-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Templates Dublin - LocalGlobalWeb Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Templates Dublin | Professional Web Design Portfolio | LocalGlobalWeb',
    description: 'Browse our professional website templates designed for Dublin businesses. Professional web design portfolio showcasing our Dublin web design expertise.',
    images: ['/templates-og-image.jpg']
  },
  alternates: {
    canonical: 'https://localglobalweb.com/templates'
  }
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
