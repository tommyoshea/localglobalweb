import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Clonskeagh | Call Tommy 0892781782 | Professional Website Designers Clonskeagh',
  description: 'Professional web design Clonskeagh services. Call Tommy directly at 0892781782 for expert website design in Clonskeagh. Local web designers creating stunning websites for Clonskeagh businesses.',
  keywords: 'web design clonskeagh, website design clonskeagh, web designers clonskeagh, website designers clonskeagh, clonskeagh web design, clonskeagh website design, clonskeagh web designers, clonskeagh website designers, professional web design clonskeagh, local web design clonskeagh, responsive web design clonskeagh, mobile web design clonskeagh, affordable web design clonskeagh, business web design clonskeagh, call tommy 0892781782',
  authors: [{ name: 'LocalGlobalWeb - Web Design Clonskeagh' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-clonskeagh'
  },
  openGraph: {
    title: 'Web Design Clonskeagh | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Clonskeagh services. Call Tommy directly at 0892781782 for expert website design in Clonskeagh. Local web designers creating stunning websites for Clonskeagh businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Web Design Clonskeagh',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Clonskeagh - Call Tommy 0892781782'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Clonskeagh | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Clonskeagh services. Call Tommy directly at 0892781782 for expert website design in Clonskeagh.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Clonskeagh, Ireland',
    'geo.position': '53.2950;-6.2350',
    'ICBM': '53.2950, -6.2350'
  }
}

export default function WebDesignClonskeaghLayout({
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
            "name": "Web Design Clonskeagh",
            "description": "Professional web design services in Clonskeagh, Ireland. Call Tommy directly at 0892781782 for expert website design services for Clonskeagh businesses.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Clonskeagh",
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
              "name": "Clonskeagh",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Clonskeagh Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Business Website",
                    "description": "Perfect for shops, restaurants, and services in Clonskeagh"
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
              "name": "Clonskeagh Business Website",
              "description": "Professional website designed specifically for Clonskeagh businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Clonskeagh Business Owners"
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
                "value": "Clonskeagh businesses"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized for Clonskeagh"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
