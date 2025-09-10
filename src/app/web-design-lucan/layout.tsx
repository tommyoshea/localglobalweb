import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Lucan | Call Tommy 0892781782 | Professional Website Designers Lucan',
  description: 'Professional web design Lucan services. Call Tommy directly at 0892781782 for expert website design in Lucan. Local web designers creating stunning websites for Lucan businesses.',
  keywords: 'web design lucan, website design lucan, web designers lucan, website designers lucan, lucan web design, lucan website design, lucan web designers, lucan website designers, professional web design lucan, local web design lucan, responsive web design lucan, mobile web design lucan, affordable web design lucan, business web design lucan, call tommy 0892781782',
  authors: [{ name: 'LocalGlobalWeb - Web Design Lucan' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-lucan'
  },
  openGraph: {
    title: 'Web Design Lucan | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Lucan services. Call Tommy directly at 0892781782 for expert website design in Lucan. Local web designers creating stunning websites for Lucan businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Web Design Lucan',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Lucan - Call Tommy 0892781782'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Lucan | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Lucan services. Call Tommy directly at 0892781782 for expert website design in Lucan.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Lucan, Ireland',
    'geo.position': '53.3578;-6.4486',
    'ICBM': '53.3578, -6.4486'
  }
}

export default function WebDesignLucanLayout({
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
            "name": "Web Design Lucan",
            "description": "Professional web design services in Lucan, Ireland. Call Tommy directly at 0892781782 for expert website design services for Lucan businesses.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lucan",
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
              "name": "Lucan",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Lucan Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Business Website",
                    "description": "Perfect for shops, restaurants, and services in Lucan"
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
              "name": "Lucan Business Website",
              "description": "Professional website designed specifically for Lucan businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Lucan Business Owners"
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
                "value": "Lucan businesses"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized for Lucan"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
