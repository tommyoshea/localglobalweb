import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Clonsilla | Call Tommy 0892781782 | Professional Website Designers Clonsilla',
  description: 'Professional web design Clonsilla services. Call Tommy directly at 0892781782 for expert website design in Clonsilla. Local web designers creating stunning websites for Clonsilla businesses.',
  keywords: 'web design clonsilla, website design clonsilla, web designers clonsilla, website designers clonsilla, clonsilla web design, clonsilla website design, clonsilla web designers, clonsilla website designers, professional web design clonsilla, local web design clonsilla, responsive web design clonsilla, mobile web design clonsilla, affordable web design clonsilla, business web design clonsilla, call tommy 0892781782',
  authors: [{ name: 'LocalGlobalWeb - Web Design Clonsilla' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-clonsilla'
  },
  openGraph: {
    title: 'Web Design Clonsilla | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Clonsilla services. Call Tommy directly at 0892781782 for expert website design in Clonsilla. Local web designers creating stunning websites for Clonsilla businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Web Design Clonsilla',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Clonsilla - Call Tommy 0892781782'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Clonsilla | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Clonsilla services. Call Tommy directly at 0892781782 for expert website design in Clonsilla.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Clonsilla, Ireland',
    'geo.position': '53.3831;-6.4208',
    'ICBM': '53.3831, -6.4208'
  }
}

export default function WebDesignClonsillaLayout({
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
            "name": "Web Design Clonsilla",
            "description": "Professional web design services in Clonsilla, Ireland. Call Tommy directly at 0892781782 for expert website design services for Clonsilla businesses.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Clonsilla",
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
              "name": "Clonsilla",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Clonsilla Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Business Website",
                    "description": "Perfect for shops, restaurants, and services in Clonsilla"
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
              "name": "Clonsilla Business Website",
              "description": "Professional website designed specifically for Clonsilla businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Clonsilla Business Owners"
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
                "value": "Clonsilla businesses"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized for Clonsilla"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
