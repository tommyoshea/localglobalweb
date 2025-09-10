import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Leixlip | Call Tommy 0892781782 | Professional Website Designers Leixlip',
  description: 'Professional web design Leixlip services. Call Tommy directly at 0892781782 for expert website design in Leixlip. Local web designers creating stunning websites for Leixlip businesses.',
  keywords: 'web design leixlip, website design leixlip, web designers leixlip, website designers leixlip, leixlip web design, leixlip website design, leixlip web designers, leixlip website designers, professional web design leixlip, local web design leixlip, responsive web design leixlip, mobile web design leixlip, affordable web design leixlip, business web design leixlip, call tommy 0892781782',
  authors: [{ name: 'LocalGlobalWeb - Web Design Leixlip' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-leixlip'
  },
  openGraph: {
    title: 'Web Design Leixlip | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Leixlip services. Call Tommy directly at 0892781782 for expert website design in Leixlip. Local web designers creating stunning websites for Leixlip businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Web Design Leixlip',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Leixlip - Call Tommy 0892781782'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Leixlip | Call Tommy 0892781782 | Professional Website Designers',
    description: 'Professional web design Leixlip services. Call Tommy directly at 0892781782 for expert website design in Leixlip.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-L',
    'geo.placename': 'Leixlip, Ireland',
    'geo.position': '53.3658;-6.4886',
    'ICBM': '53.3658, -6.4886'
  }
}

export default function WebDesignLeixlipLayout({
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
            "name": "Web Design Leixlip",
            "description": "Professional web design services in Leixlip, Ireland. Call Tommy directly at 0892781782 for expert website design services for Leixlip businesses.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Leixlip",
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
              "name": "Leixlip",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Leixlip Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Business Website",
                    "description": "Perfect for shops, restaurants, and services in Leixlip"
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
              "name": "Leixlip Business Website",
              "description": "Professional website designed specifically for Leixlip businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Leixlip Business Owners"
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
                "value": "Leixlip businesses"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized for Leixlip"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
