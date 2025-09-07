import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affordable Web Design Dublin | Budget-Friendly Website Designers | LocalGlobalWeb',
  description: 'Get professional affordable web design Dublin services starting from €299. Expert website designers creating stunning, responsive websites for small businesses. Quality web design that fits your budget.',
  keywords: 'affordable web design dublin, cheap website design dublin, budget web design dublin, low cost website design dublin, affordable website designers dublin, cheap web designers dublin, budget website design dublin, affordable web design ireland, cheap website design ireland, budget web design ireland, low cost web design dublin, affordable responsive web design dublin, cheap mobile website design dublin, budget ecommerce web design dublin, affordable seo web design dublin',
  authors: [{ name: 'LocalGlobalWeb - Affordable Web Design Dublin' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.localglobalweb.com/affordable-web-design'
  },
  openGraph: {
    title: 'Affordable Web Design Dublin | Budget-Friendly Website Designers',
    description: 'Get professional affordable web design Dublin services starting from €299. Expert website designers creating stunning, responsive websites for small businesses.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Affordable Web Design Dublin',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Affordable Web Design Dublin - LocalGlobalWeb'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Web Design Dublin | Budget-Friendly Website Designers',
    description: 'Get professional affordable web design Dublin services starting from €299. Expert website designers creating stunning, responsive websites for small businesses.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Dublin, Ireland',
    'geo.position': '53.3498;-6.2603',
    'ICBM': '53.3498, -6.2603'
  }
}

export default function AffordableWebDesignLayout({
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
            "name": "Affordable Web Design Dublin",
            "description": "Professional affordable web design services in Dublin, Ireland. Expert website designers creating stunning, responsive websites for small businesses starting from €299.",
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
              "sameAs": [
                "https://www.facebook.com/localglobalweb",
                "https://www.linkedin.com/company/localglobalweb",
                "https://www.twitter.com/localglobalweb"
              ]
            },
            "areaServed": {
              "@type": "City",
              "name": "Dublin",
              "containedInPlace": {
                "@type": "Country",
                "name": "Ireland"
              }
            },
            "serviceType": "Web Design",
            "category": "Web Development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Affordable Web Design Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Starter Web Design Package",
                    "description": "Perfect for small businesses getting started online"
                  },
                  "price": "299",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-01"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Professional Web Design Package",
                    "description": "Ideal for growing businesses with more content needs"
                  },
                  "price": "599",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-01"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Premium Web Design Package",
                    "description": "Complete solution for established businesses"
                  },
                  "price": "999",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-01"
                }
              ]
            },
            "serviceOutput": {
              "@type": "WebSite",
              "name": "Custom Business Website",
              "description": "Responsive, SEO-optimized website for Dublin businesses"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Small Business Owners"
            }
          })
        }}
      />
      {children}
    </>
  )
}
