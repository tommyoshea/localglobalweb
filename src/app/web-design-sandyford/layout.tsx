import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Sandyford | Call Tommy 0892781782 | Professional Website Designers Sandyford',
  description: 'Professional web design Sandyford services. Call Tommy directly at 0892781782 for expert website design in Sandyford. Local web designers creating stunning websites for Sandyford businesses.',
  keywords: 'web design sandyford, website design sandyford, web designers sandyford, website designers sandyford, sandyford web design, sandyford website design, sandyford web designers, sandyford website designers, professional web design sandyford, local web design sandyford, responsive web design sandyford, mobile web design sandyford, affordable web design sandyford, business web design sandyford, call tommy 0892781782',
  authors: [{ name: 'LocalGlobalWeb - Web Design Sandyford' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-sandyford'
  },
  openGraph: {
    title: 'Web Design Sandyford | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Sandyford services. Call Tommy directly at 0892781782 for expert website design in Sandyford. Local web designers creating stunning websites for Sandyford businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Web Design Sandyford',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Sandyford - Call Tommy 0892781782'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Sandyford | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Sandyford services. Call Tommy directly at 0892781782 for expert website design in Sandyford.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Sandyford, Ireland',
    'geo.position': '53.2731;-6.2250',
    'ICBM': '53.2731, -6.2250'
  }
}

export default function WebDesignSandyfordLayout({
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
            "name": "Web Design Sandyford",
            "description": "Professional web design services in Sandyford, Ireland. Call Tommy directly at 0892781782 for expert website design services for Sandyford businesses.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sandyford",
                "addressCountry": "IE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+353-89-278-1782",
                "contactType": "customer service",
                "areaServed": "IE",
                "availableLanguage": "English"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Sandyford",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Sandyford Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Business Website",
                    "description": "Perfect for shops, restaurants, and services in Sandyford"
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Professional Service Website",
                    "description": "Ideal for solicitors, accountants, and consultants"
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Growing Company Website",
                    "description": "Great for startups and expanding businesses"
                  },
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "serviceOutput": {
              "@type": "WebSite",
              "name": "Sandyford Business Website",
              "description": "Professional website designed specifically for Sandyford businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Sandyford Business Owners"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Direct Contact",
                "value": "Call Tommy 0892781782"
              },
              {
                "@type": "PropertyValue",
                "name": "Local Focus",
                "value": "Sandyford businesses"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized for Sandyford"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
