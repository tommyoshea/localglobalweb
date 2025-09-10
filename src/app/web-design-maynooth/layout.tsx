import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Maynooth | Call Tommy 0892781782 | Professional Website Designers Maynooth',
  description: 'Professional web design Maynooth services. Call Tommy directly at 0892781782 for expert website design in Maynooth. Local web designers creating stunning websites for Maynooth businesses.',
  keywords: 'web design maynooth, website design maynooth, web designers maynooth, website designers maynooth, maynooth web design, maynooth website design, maynooth web designers, maynooth website designers, professional web design maynooth, local web design maynooth, responsive web design maynooth, mobile web design maynooth, affordable web design maynooth, business web design maynooth, call tommy 0892781782',
  authors: [{ name: 'LocalGlobalWeb - Web Design Maynooth' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-maynooth'
  },
  openGraph: {
    title: 'Web Design Maynooth | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Maynooth services. Call Tommy directly at 0892781782 for expert website design in Maynooth. Local web designers creating stunning websites for Maynooth businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Web Design Maynooth',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Maynooth - Call Tommy 0892781782'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Maynooth | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Maynooth services. Call Tommy directly at 0892781782 for expert website design in Maynooth.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-L',
    'geo.placename': 'Maynooth, Ireland',
    'geo.position': '53.3847;-6.5936',
    'ICBM': '53.3847, -6.5936'
  }
}

export default function WebDesignMaynoothLayout({
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
            "name": "Web Design Maynooth",
            "description": "Professional web design services in Maynooth, Ireland. Call Tommy directly at 0892781782 for expert website design services for Maynooth businesses.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Maynooth",
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
              "name": "Maynooth",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Maynooth Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Business Website",
                    "description": "Perfect for shops, restaurants, and services in Maynooth"
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
              "name": "Maynooth Business Website",
              "description": "Professional website designed specifically for Maynooth businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Maynooth Business Owners"
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
                "value": "Maynooth businesses"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized for Maynooth"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
