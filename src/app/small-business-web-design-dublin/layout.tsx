import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Small Business Web Design Dublin | Local Business Website Designers | LocalGlobalWeb',
  description: 'Small business web design Dublin services for local businesses. Expert website designers creating affordable, local SEO-optimized websites for Dublin small businesses, shops, and service providers.',
  keywords: 'small business web design dublin, local business web design dublin, small business website design dublin, local business website design dublin, small business web designers dublin, local business web designers dublin, small business website designers dublin, local business website designers dublin, dublin small business web design, dublin local business web design, small business web design services dublin, local business web design services dublin, dublin small business website design, dublin local business website design',
  authors: [{ name: 'LocalGlobalWeb - Small Business Web Design Dublin' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/small-business-web-design-dublin'
  },
  openGraph: {
    title: 'Small Business Web Design Dublin | Local Business Website Designers',
    description: 'Small business web design Dublin services for local businesses. Expert website designers creating affordable, local SEO-optimized websites for Dublin small businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Small Business Web Design Dublin',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Small Business Web Design Dublin - LocalGlobalWeb'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Web Design Dublin | Local Business Website Designers',
    description: 'Small business web design Dublin services for local businesses. Expert website designers creating affordable, local SEO-optimized websites for Dublin small businesses.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Dublin, Ireland',
    'geo.position': '53.3498;-6.2603',
    'ICBM': '53.3498, -6.2603'
  }
}

export default function SmallBusinessWebDesignDublinLayout({
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
            "name": "Small Business Web Design Dublin",
            "description": "Small business web design services in Dublin, Ireland. Expert website designers creating affordable, local SEO-optimized websites for Dublin small businesses, shops, and service providers.",
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
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Dublin",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Small Business Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Small Business Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Shop Website",
                    "description": "Perfect for retail stores, boutiques, and local shops"
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Service Business Website",
                    "description": "Ideal for salons, gyms, restaurants, and service providers"
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Startup Website",
                    "description": "Great for new businesses and growing companies"
                  },
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "serviceOutput": {
              "@type": "WebSite",
              "name": "Small Business Website",
              "description": "Affordable, local SEO-optimized website for Dublin small businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Small Business Owners"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Local SEO",
                "value": "Optimized"
              },
              {
                "@type": "PropertyValue",
                "name": "Budget-Friendly",
                "value": "Yes"
              },
              {
                "@type": "PropertyValue",
                "name": "Quick Setup",
                "value": "7-14 days"
              },
              {
                "@type": "PropertyValue",
                "name": "Local Focus",
                "value": "Dublin businesses"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
