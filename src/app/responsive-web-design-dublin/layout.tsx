import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Responsive Web Design Dublin | Mobile-First Website Designers | LocalGlobalWeb',
  description: 'Professional responsive web design Dublin services. Expert mobile-first website designers creating stunning websites that work perfectly on all devices - phones, tablets, and desktops.',
  keywords: 'responsive web design dublin, mobile web design dublin, mobile-first web design dublin, responsive website design dublin, mobile website design dublin, tablet web design dublin, mobile responsive design dublin, mobile-friendly web design dublin, responsive web designers dublin, mobile web designers dublin, adaptive web design dublin, fluid web design dublin, cross-device web design dublin, mobile optimized web design dublin',
  authors: [{ name: 'LocalGlobalWeb - Responsive Web Design Dublin' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/responsive-web-design-dublin'
  },
  openGraph: {
    title: 'Responsive Web Design Dublin | Mobile-First Website Designers',
    description: 'Professional responsive web design Dublin services. Expert mobile-first website designers creating stunning websites that work perfectly on all devices.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Responsive Web Design Dublin',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Responsive Web Design Dublin - LocalGlobalWeb'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Responsive Web Design Dublin | Mobile-First Website Designers',
    description: 'Professional responsive web design Dublin services. Expert mobile-first website designers creating stunning websites that work perfectly on all devices.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Dublin, Ireland',
    'geo.position': '53.3498;-6.2603',
    'ICBM': '53.3498, -6.2603'
  }
}

export default function ResponsiveWebDesignDublinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Responsive Web Design Dublin",
            "description": "Professional responsive web design services in Dublin, Ireland. Expert mobile-first website designers creating stunning websites that work perfectly on all devices.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dublin",
                "addressCountry": "IE"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Dublin",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Responsive Web Design",
            "offers": {
              "@type": "Offer",
              "name": "Responsive Web Design Services",
              "description": "Mobile-first responsive web design for all devices",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "89",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      {children}
    </>
  )
}
