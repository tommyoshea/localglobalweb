import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Dublin Web Design Services | LocalGlobalWeb',
  description: 'Terms of service for LocalGlobalWeb Dublin web design services. Clear, transparent terms for our professional website design services in Dublin. Read our terms before starting your web design project.',
  keywords: 'terms of service dublin web design, dublin web design terms, website design terms dublin, dublin web designers terms, web design service terms dublin, dublin website design terms, dublin web design agreement',
  openGraph: {
    title: 'Terms of Service | Dublin Web Design Services | LocalGlobalWeb',
    description: 'Terms of service for LocalGlobalWeb Dublin web design services. Clear, transparent terms for our professional website design services in Dublin.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Dublin Web Designers',
    images: [
      {
        url: '/terms-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Terms of Service - LocalGlobalWeb Dublin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Dublin Web Design Services | LocalGlobalWeb',
    description: 'Terms of service for LocalGlobalWeb Dublin web design services. Clear, transparent terms for our professional website design services in Dublin.',
    images: ['/terms-og-image.jpg']
  },
  alternates: {
    canonical: 'https://localglobalweb.com/terms'
  }
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
