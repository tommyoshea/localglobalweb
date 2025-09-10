import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Celbridge | Call Tommy 0892781782 | Professional Website Designers Celbridge',
  description: 'Professional web design Celbridge services. Call Tommy directly at 0892781782 for expert website design in Celbridge. Local web designers creating stunning websites for Celbridge businesses.',
  keywords: 'web design celbridge, website design celbridge, web designers celbridge, website designers celbridge, celbridge web design, celbridge website design, celbridge web designers, celbridge website designers, professional web design celbridge, local web design celbridge, responsive web design celbridge, mobile web design celbridge, affordable web design celbridge, business web design celbridge, call tommy 0892781782',
  authors: [{ name: 'LocalGlobalWeb - Web Design Celbridge' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-celbridge'
  },
  openGraph: {
    title: 'Web Design Celbridge | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Celbridge services. Call Tommy directly at 0892781782 for expert website design in Celbridge. Local web designers creating stunning websites for Celbridge businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Web Design Celbridge',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Celbridge - Call Tommy 0892781782'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Celbridge | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Celbridge services. Call Tommy directly at 0892781782 for expert website design in Celbridge.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-KE',
    'geo.placename': 'Celbridge, Ireland',
    'geo.position': '53.3389;-6.5403',
    'ICBM': '53.3389, -6.5403'
  }
}

export default function WebDesignCelbridgeLayout({
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
            "name": "Web Design Celbridge",
            "description": "Professional web design services in Celbridge, Ireland. Call Tommy directly at 0892781782 for expert website design services for Celbridge businesses.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Celbridge",
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
              "name": "Celbridge",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Celbridge Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Business Website",
                    "description": "Perfect for shops, restaurants, and services in Celbridge"
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
              "name": "Celbridge Business Website",
              "description": "Professional website designed specifically for Celbridge businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Celbridge Business Owners"
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
                "value": "Celbridge businesses"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized for Celbridge"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
