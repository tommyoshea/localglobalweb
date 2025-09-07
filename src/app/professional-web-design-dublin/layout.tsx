import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Web Design Dublin | Award-Winning Website Designers | LocalGlobalWeb',
  description: 'Professional web design Dublin services by award-winning designers. Expert website designers creating stunning, business-focused websites that build trust and drive results for Dublin businesses.',
  keywords: 'professional web design dublin, award winning web design dublin, business web design dublin, corporate web design dublin, professional website designers dublin, business website design dublin, corporate website design dublin, professional web designers dublin, business web designers dublin, corporate web designers dublin, professional website design dublin, business website designers dublin, corporate website designers dublin, professional web design services dublin',
  authors: [{ name: 'LocalGlobalWeb - Professional Web Design Dublin' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/professional-web-design-dublin'
  },
  openGraph: {
    title: 'Professional Web Design Dublin | Award-Winning Website Designers',
    description: 'Professional web design Dublin services by award-winning designers. Expert website designers creating stunning, business-focused websites that build trust and drive results.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Professional Web Design Dublin',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Professional Web Design Dublin - LocalGlobalWeb'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Design Dublin | Award-Winning Website Designers',
    description: 'Professional web design Dublin services by award-winning designers. Expert website designers creating stunning, business-focused websites that build trust and drive results.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Dublin, Ireland',
    'geo.position': '53.3498;-6.2603',
    'ICBM': '53.3498, -6.2603'
  }
}

export default function ProfessionalWebDesignDublinLayout({
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
            "name": "Professional Web Design Dublin",
            "description": "Professional web design services in Dublin, Ireland. Award-winning website designers creating stunning, business-focused websites that build trust and drive results.",
            "provider": {
              "@type": "Organization",
              "name": "LocalGlobalWeb",
              "url": "https://www.localglobalweb.com",
              "logo": "https://www.localglobalweb.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dublin",
                "addressCountry": "IE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+353-1-XXX-XXXX",
                "contactType": "customer service",
                "areaServed": "IE",
                "availableLanguage": "English"
              },
              "award": "Award-Winning Web Design Agency"
            },
            "areaServed": {
              "@type": "City",
              "name": "Dublin",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Professional Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Professional Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Website Design",
                    "description": "Professional corporate websites that build credibility"
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Portal Development",
                    "description": "Advanced business portals with enterprise features"
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Brand Identity Design",
                    "description": "Complete brand identity and professional web presence"
                  },
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "serviceOutput": {
              "@type": "WebSite",
              "name": "Professional Business Website",
              "description": "Award-winning professional website that builds trust and credibility"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Professional Businesses"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Design Quality",
                "value": "Award-Winning"
              },
              {
                "@type": "PropertyValue",
                "name": "Business Focus",
                "value": "100%"
              },
              {
                "@type": "PropertyValue",
                "name": "Trust Building",
                "value": "Enhanced"
              },
              {
                "@type": "PropertyValue",
                "name": "Security Level",
                "value": "Enterprise-Grade"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
