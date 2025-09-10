import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Tallaght | Call Tommy 0892781782 | Professional Website Designers Tallaght',
  description: 'Professional web design Tallaght services. Call Tommy directly at 0892781782 for expert website design in Tallaght. Local web designers creating stunning websites for Tallaght businesses.',
  keywords: 'web design tallaght, website design tallaght, web designers tallaght, website designers tallaght, tallaght web design, tallaght website design, tallaght web designers, tallaght website designers, professional web design tallaght, local web design tallaght, responsive web design tallaght, mobile web design tallaght, affordable web design tallaght, business web design tallaght, call tommy 0892781782',
  authors: [{ name: 'LocalGlobalWeb - Web Design Tallaght' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-tallaght'
  },
  openGraph: {
    title: 'Web Design Tallaght | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Tallaght services. Call Tommy directly at 0892781782 for expert website design in Tallaght. Local web designers creating stunning websites for Tallaght businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Web Design Tallaght',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Tallaght - Call Tommy 0892781782'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Tallaght | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Tallaght services. Call Tommy directly at 0892781782 for expert website design in Tallaght.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Tallaght, Ireland',
    'geo.position': '53.2878;-6.3736',
    'ICBM': '53.2878, -6.3736'
  }
}

export default function WebDesignTallaghtLayout({
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
            "name": "Web Design Tallaght",
            "description": "Professional web design services in Tallaght, Ireland. Call Tommy directly at 0892781782 for expert website design services for Tallaght businesses.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tallaght",
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
              "name": "Tallaght",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tallaght Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Business Website",
                    "description": "Perfect for shops, restaurants, and services in Tallaght"
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
              "name": "Tallaght Business Website",
              "description": "Professional website designed specifically for Tallaght businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Tallaght Business Owners"
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
                "value": "Tallaght businesses"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized for Tallaght"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
