import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Dunboyne | Call Tommy 0892781782 | Professional Website Designers Dunboyne',
  description: 'Professional web design Dunboyne services. Call Tommy directly at 0892781782 for expert website design in Dunboyne. Local web designers creating stunning websites for Dunboyne businesses.',
  keywords: 'web design dunboyne, website design dunboyne, web designers dunboyne, website designers dunboyne, dunboyne web design, dunboyne website design, dunboyne web designers, dunboyne website designers, professional web design dunboyne, local web design dunboyne, responsive web design dunboyne, mobile web design dunboyne, affordable web design dunboyne, business web design dunboyne, call tommy 0892781782',
  authors: [{ name: 'LocalGlobalWeb - Web Design Dunboyne' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-dunboyne'
  },
  openGraph: {
    title: 'Web Design Dunboyne | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Dunboyne services. Call Tommy directly at 0892781782 for expert website design in Dunboyne. Local web designers creating stunning websites for Dunboyne businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Web Design Dunboyne',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Dunboyne - Call Tommy 0892781782'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Dunboyne | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Dunboyne services. Call Tommy directly at 0892781782 for expert website design in Dunboyne.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-ME',
    'geo.placename': 'Dunboyne, Ireland',
    'geo.position': '53.4181;-6.4731',
    'ICBM': '53.4181, -6.4731'
  }
}

export default function WebDesignDunboyneLayout({
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
            "name": "Web Design Dunboyne",
            "description": "Professional web design services in Dunboyne, Ireland. Call Tommy directly at 0892781782 for expert website design services for Dunboyne businesses.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dunboyne",
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
              "name": "Dunboyne",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dunboyne Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Business Website",
                    "description": "Perfect for shops, restaurants, and services in Dunboyne"
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
              "name": "Dunboyne Business Website",
              "description": "Professional website designed specifically for Dunboyne businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Dunboyne Business Owners"
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
                "value": "Dunboyne businesses"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized for Dunboyne"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
