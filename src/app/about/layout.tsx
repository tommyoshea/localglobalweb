import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Dublin Web Designers | LocalGlobalWeb - Professional Website Design Dublin',
  description: 'Meet LocalGlobalWeb, Dublin\'s trusted web design team. We\'re passionate about helping Dublin businesses succeed online with professional, affordable website design services.',
  keywords: 'dublin web designers, about dublin web design, localglobalweb dublin, dublin website design company, professional web designers dublin, dublin web design team, dublin web design about us, dublin website designers about',
  openGraph: {
    title: 'About Us | Dublin Web Designers | LocalGlobalWeb',
    description: 'Meet LocalGlobalWeb, Dublin\'s trusted web design team. We\'re passionate about helping Dublin businesses succeed online with professional, affordable website design services.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Dublin Web Designers',
    images: [
      {
        url: '/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About LocalGlobalWeb - Dublin Web Designers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Dublin Web Designers | LocalGlobalWeb',
    description: 'Meet LocalGlobalWeb, Dublin\'s trusted web design team. We\'re passionate about helping Dublin businesses succeed online.',
    images: ['/about-og-image.jpg']
  },
  alternates: {
    canonical: 'https://localglobalweb.com/about'
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
