import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design CityWest | Call Tommy 0892781782 | Professional Website Designers CityWest',
  description: 'Professional web design CityWest services. Call Tommy directly at 0892781782 for expert website design in CityWest. Local web designers creating stunning websites for CityWest businesses.',
  keywords: 'web design citywest, website design citywest, web designers citywest, website designers citywest, citywest web design, citywest website design, citywest web designers, citywest website designers, professional web design citywest, local web design citywest, responsive web design citywest, mobile web design citywest, affordable web design citywest, business web design citywest, call tommy 0892781782',
  authors: [{ name: 'LocalGlobalWeb - Web Design CityWest' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-citywest'
  },
  openGraph: {
    title: 'Web Design CityWest | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design CityWest services. Call Tommy directly at 0892781782 for expert website design in CityWest. Local web designers creating stunning websites for CityWest businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Web Design CityWest',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design CityWest - Call Tommy 0892781782'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design CityWest | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design CityWest services. Call Tommy directly at 0892781782 for expert website design in CityWest.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'CityWest, Ireland',
    'geo.position': '53.2800;-6.4500',
    'ICBM': '53.2800, -6.4500'
  }
}

export default function WebDesignCityWestLayout({
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
            "name": "Web Design CityWest",
            "description": "Professional web design services in CityWest, Ireland. Call Tommy directly at 0892781782 for expert website design services for CityWest businesses.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "CityWest",
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
              "name": "CityWest",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "CityWest Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Business Website",
                    "description": "Perfect for shops, restaurants, and services in CityWest"
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
              "name": "CityWest Business Website",
              "description": "Professional website designed specifically for CityWest businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "CityWest Business Owners"
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
                "value": "CityWest businesses"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized for CityWest"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
