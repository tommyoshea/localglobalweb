import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Small Business Web Design Dublin | Local Business Website Designers | LocalGlobalWeb',
  description: 'Small business web design Dublin services for local businesses. Expert website designers creating affordable, local SEO-optimized websites for Dublin small businesses, shops, and service providers.',
  keywords: 'small business web design dublin, local business web design dublin, small business website design dublin, local business website design dublin, small business web designers dublin, local business web designers dublin, small business website designers dublin, local business website designers dublin, dublin small business web design, dublin local business web design, small business web design services dublin, local business web design services dublin, dublin small business website design, dublin local business website design',
  authors: [{ name: 'LocalGlobalWeb - Small Business Web Design Dublin' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/small-business-web-design-dublin'
  },
  openGraph: {
    title: 'Small Business Web Design Dublin | Local Business Website Designers',
    description: 'Small business web design Dublin services for local businesses. Expert website designers creating affordable, local SEO-optimized websites for Dublin small businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Small Business Web Design Dublin',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Small Business Web Design Dublin - LocalGlobalWeb'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Web Design Dublin | Local Business Website Designers',
    description: 'Small business web design Dublin services for local businesses. Expert website designers creating affordable, local SEO-optimized websites for Dublin small businesses.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Dublin, Ireland',
    'geo.position': '53.3498;-6.2603',
    'ICBM': '53.3498, -6.2603'
  }
}

export default function SmallBusinessWebDesignDublinLayout({
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
            "name": "Small Business Web Design Dublin",
            "description": "Small business web design services in Dublin, Ireland. Expert website designers creating affordable, local SEO-optimized websites for Dublin small businesses, shops, and service providers.",
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
            "serviceType": "Small Business Web Design",
            "offers": {
              "@type": "Offer",
              "name": "Small Business Web Design Services",
              "description": "Affordable web design for small businesses and local companies",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "203",
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
