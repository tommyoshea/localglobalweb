import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieNotification from '@/components/CookieNotification'
import WhatsAppButton from '@/components/WhatsAppButton'
import StructuredData from '@/components/StructuredData'
import ViewportMeta from '@/components/ViewportMeta'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: 'Web Design Dublin | Professional Website Designers Dublin | LocalGlobalWeb',
  description: 'Professional web design Dublin. Expert website designers Dublin creating affordable, responsive websites for small businesses. Get your Dublin business online with our award-winning web design services.',
  keywords: 'web design dublin, website designers dublin, web designers dublin, website design dublin, dublin web design, dublin website designers, affordable web design dublin, professional web design dublin, responsive web design dublin, small business web design dublin, ecommerce web design dublin, wordpress web design dublin, seo web design dublin',
  authors: [{ name: 'LocalGlobalWeb - Dublin Web Designers' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Web Design Dublin | Professional Website Designers Dublin',
    description: 'Professional web design Dublin. Expert website designers Dublin creating affordable, responsive websites for small businesses. Get your Dublin business online today.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Dublin Web Designers',
    images: [
      {
        url: '/localglobalweb-image.png',
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
    images: ['/localglobalweb-image.png']
  },
  alternates: {
    canonical: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code'
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Dublin, Ireland',
    'geo.position': '53.3498;-6.2603',
    'ICBM': '53.3498, -6.2603',
    'distribution': 'global',
    'rating': 'general',
    'revisit-after': '7 days',
    'language': 'English',
    'coverage': 'Worldwide',
    'target': 'all',
    'HandheldFriendly': 'true',
    'format-detection': 'telephone=no',
    'theme-color': '#4f46e5',
    'msapplication-TileColor': '#4f46e5',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'LocalGlobalWeb Dublin',
    'application-name': 'LocalGlobalWeb Dublin',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-config': '/browserconfig.xml'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ViewportMeta />
        <StructuredData />
        {children}
        <CookieNotification />
        <WhatsAppButton />
      </body>
    </html>
  )
}
