import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Blanchardstown | Call Tommy 0892781782 | Professional Website Designers Blanchardstown',
  description: 'Professional web design Blanchardstown services. Call Tommy directly at 0892781782 for expert website design in Blanchardstown. Local web designers creating stunning websites for Blanchardstown businesses.',
  keywords: 'web design blanchardstown, website design blanchardstown, web designers blanchardstown, website designers blanchardstown, blanchardstown web design, blanchardstown website design, blanchardstown web designers, blanchardstown website designers, professional web design blanchardstown, local web design blanchardstown, responsive web design blanchardstown, mobile web design blanchardstown, affordable web design blanchardstown, business web design blanchardstown, call tommy 0892781782',
  authors: [{ name: 'LocalGlobalWeb - Web Design Blanchardstown' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-blanchardstown'
  },
  openGraph: {
    title: 'Web Design Blanchardstown | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Blanchardstown services. Call Tommy directly at 0892781782 for expert website design in Blanchardstown. Local web designers creating stunning websites for Blanchardstown businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Web Design Blanchardstown',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Blanchardstown - Call Tommy 0892781782'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Blanchardstown | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Blanchardstown services. Call Tommy directly at 0892781782 for expert website design in Blanchardstown.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Blanchardstown, Ireland',
    'geo.position': '53.3881;-6.3778',
    'ICBM': '53.3881, -6.3778'
  }
}

export default function WebDesignBlanchardstownLayout({
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
            "name": "Web Design Blanchardstown",
            "description": "Professional web design services in Blanchardstown, Ireland. Call Tommy directly at 0892781782 for expert website design services for Blanchardstown businesses.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Blanchardstown",
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
              "name": "Blanchardstown",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Blanchardstown Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Business Website",
                    "description": "Perfect for shops, restaurants, and services in Blanchardstown"
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
              "name": "Blanchardstown Business Website",
              "description": "Professional website designed specifically for Blanchardstown businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Blanchardstown Business Owners"
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
                "value": "Blanchardstown businesses"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized for Blanchardstown"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
