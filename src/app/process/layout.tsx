import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Process Dublin | How We Build Websites | LocalGlobalWeb',
  description: 'Discover our proven web design process in Dublin. From consultation to launch, we guide you through every step of creating your professional website. Transparent, efficient web design process for Dublin businesses.',
  keywords: 'web design process dublin, dublin web design process, website design process dublin, dublin web designers process, how we build websites dublin, dublin web design workflow, dublin website design process, dublin web design steps',
  openGraph: {
    title: 'Web Design Process Dublin | How We Build Websites | LocalGlobalWeb',
    description: 'Discover our proven web design process in Dublin. From consultation to launch, we guide you through every step of creating your professional website. Transparent, efficient web design process for Dublin businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Dublin Web Designers',
    images: [
      {
        url: '/process-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Design Process Dublin - LocalGlobalWeb'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Process Dublin | How We Build Websites | LocalGlobalWeb',
    description: 'Discover our proven web design process in Dublin. From consultation to launch, we guide you through every step of creating your professional website.',
    images: ['/process-og-image.jpg']
  },
  alternates: {
    canonical: 'https://localglobalweb.com/process'
  }
}

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
