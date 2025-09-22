import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.localglobalweb.com'),
  title: 'Web Design Dublin | Professional Website Designers Dublin | Call Tommy 0892781782',
  description: 'Professional web design Dublin. Expert website designers Dublin creating stunning, responsive websites for local businesses. Call Tommy 089 278 1782 for free consultation.',
  keywords: 'web design dublin, website designers dublin, web designers dublin, website design dublin, dublin web design, dublin website designers, professional web design dublin, responsive web design dublin, affordable web design dublin, local web designers dublin, dublin web design company, website development dublin, web design services dublin, custom website design dublin, dublin web design agency, mobile web design dublin, ecommerce web design dublin, wordpress web design dublin, seo web design dublin, business website design dublin',
  authors: [{ name: 'LocalGlobalWeb - Dublin Web Designers' }],
  creator: 'LocalGlobalWeb',
  publisher: 'LocalGlobalWeb',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Web Design Dublin | Professional Website Designers Dublin',
    description: 'Professional web design Dublin. Expert website designers Dublin creating stunning, responsive websites for local businesses. Call Tommy 089 278 1782.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'LocalGlobalWeb - Dublin Web Designers',
    url: 'https://www.localglobalweb.com/web-design-dublin',
    images: [
      {
        url: 'https://www.localglobalweb.com/web-design-dublin-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Dublin - Professional Website Designers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Dublin | Professional Website Designers Dublin',
    description: 'Professional web design Dublin. Expert website designers Dublin creating stunning, responsive websites for local businesses. Call Tommy 089 278 1782.',
    images: ['https://www.localglobalweb.com/web-design-dublin-og-image.png']
  },
  alternates: {
    canonical: 'https://www.localglobalweb.com/web-design-dublin'
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code'
  },
  other: {
    'geo.region': 'IE-D',
    'geo.placename': 'Dublin, Ireland',
    'geo.position': '53.3498;-6.2603',
    'ICBM': '53.3498, -6.2603',
    'distribution': 'global',
    'rating': 'general',
    'revisit-after': '7 days',
    'language': 'English',
    'coverage': 'Dublin, Ireland',
    'target': 'dublin businesses',
    'HandheldFriendly': 'true',
    'format-detection': 'telephone=no',
    'theme-color': '#2563eb',
    'msapplication-TileColor': '#2563eb',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Web Design Dublin',
    'application-name': 'Web Design Dublin',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-config': '/browserconfig.xml'
  }
}

export default function WebDesignDublinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LocalGlobalWeb - Web Design Dublin",
    "description": "Professional web design services in Dublin, Ireland. Expert website designers creating stunning, responsive websites for local businesses.",
    "url": "https://www.localglobalweb.com/web-design-dublin",
    "telephone": "+353-89-278-1782",
    "email": "info@localglobalweb.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dublin City Centre",
      "addressLocality": "Dublin",
      "addressRegion": "Dublin",
      "postalCode": "Dublin",
      "addressCountry": "IE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.3498",
      "longitude": "-6.2603"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dublin",
        "containedInPlace": {
          "@type": "Country",
          "name": "Ireland"
        }
      },
      {
        "@type": "City",
        "name": "Temple Bar",
        "containedInPlace": {
          "@type": "City",
          "name": "Dublin"
        }
      },
      {
        "@type": "City",
        "name": "Grafton Street",
        "containedInPlace": {
          "@type": "City",
          "name": "Dublin"
        }
      },
      {
        "@type": "City",
        "name": "Phoenix Park",
        "containedInPlace": {
          "@type": "City",
          "name": "Dublin"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "53.3498",
        "longitude": "-6.2603"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services Dublin",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Starter Web Design Package",
            "description": "Perfect for small Dublin businesses getting started online"
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
            "description": "Ideal for growing Dublin businesses with more content needs"
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
            "description": "Complete solution for established Dublin businesses"
          },
          "price": "999",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01"
        }
      ]
    },
    "serviceType": "Web Design",
    "category": "Web Development",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Service Areas",
        "value": "Dublin, Temple Bar, Grafton Street, Phoenix Park, O'Connell Street, Trinity College, Dublin Castle"
      },
      {
        "@type": "PropertyValue",
        "name": "Specializations",
        "value": "Responsive Web Design, SEO Optimization, E-commerce, WordPress Development"
      },
      {
        "@type": "PropertyValue",
        "name": "Experience",
        "value": "500+ Websites Built"
      },
      {
        "@type": "PropertyValue",
        "name": "Response Time",
        "value": "24 Hours"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/localglobalweb",
      "https://www.linkedin.com/company/localglobalweb",
      "https://www.twitter.com/localglobalweb"
    ],
    "award": [
      "Best Web Design Dublin 2024",
      "Top Rated Dublin Web Designer",
      "5-Star Google Reviews"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+353-89-278-1782",
      "contactType": "customer service",
      "areaServed": "IE",
      "availableLanguage": "English",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€299-€999",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "EUR"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}
