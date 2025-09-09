import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dublin Web Design Services | LocalGlobalWeb',
  description: 'Privacy policy for LocalGlobalWeb Dublin web design services. Learn how we protect your data when you use our professional website design services in Dublin. Your privacy is important to us.',
  keywords: 'privacy policy dublin web design, dublin web design privacy, website design privacy dublin, dublin web designers privacy, web design data protection dublin, dublin website design privacy, dublin web design gdpr',
  openGraph: {
    title: 'Privacy Policy | Dublin Web Design Services | LocalGlobalWeb',
    description: 'Privacy policy for LocalGlobalWeb Dublin web design services. Learn how we protect your data when you use our professional website design services in Dublin.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Dublin Web Designers',
    images: [
      {
        url: '/privacy-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - LocalGlobalWeb Dublin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Dublin Web Design Services | LocalGlobalWeb',
    description: 'Privacy policy for LocalGlobalWeb Dublin web design services. Learn how we protect your data when you use our professional website design services in Dublin.',
    images: ['/privacy-og-image.jpg']
  },
  alternates: {
    canonical: 'https://www.localglobalweb.com/privacy'
  }
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
