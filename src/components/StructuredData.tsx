'use client'

import { useEffect } from 'react'

const StructuredData = () => {
  useEffect(() => {
    // WebSite Schema
    const websiteScript = document.createElement('script')
    websiteScript.type = 'application/ld+json'
    websiteScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "LocalGlobalWeb - Dublin Web Designers",
      "url": "https://www.localglobalweb.com",
      "description": "Professional web design services in Dublin, Ireland. Expert website designers creating affordable, responsive websites for small businesses.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.localglobalweb.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })
    
    // LocalBusiness Schema
    const businessScript = document.createElement('script')
    businessScript.type = 'application/ld+json'
    businessScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "LocalGlobalWeb - Dublin Web Designers",
      "description": "Professional web design services in Dublin, Ireland. Expert website designers creating affordable, responsive websites for small businesses.",
      "url": "https://www.localglobalweb.com",
      "telephone": "+353892781782",
      "email": "hello@localglobalweb.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Leixlip",
        "addressLocality": "Dublin",
        "addressRegion": "Co. Kildare",
        "addressCountry": "IE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 53.3498,
        "longitude": -6.2603
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "areaServed": {
        "@type": "City",
        "name": "Dublin"
      },
      "serviceArea": {
        "@type": "City",
        "name": "Dublin"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Design Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Web Design Dublin",
              "description": "Custom website design and development for Dublin businesses"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Responsive Web Design Dublin",
              "description": "Mobile-friendly website design that works on all devices"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Web Design Dublin",
              "description": "Online store design and development for Dublin businesses"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
    })
    
    document.head.appendChild(websiteScript)
    document.head.appendChild(businessScript)
    
    // Cleanup function
    return () => {
      if (document.head.contains(websiteScript)) {
        document.head.removeChild(websiteScript)
      }
      if (document.head.contains(businessScript)) {
        document.head.removeChild(businessScript)
      }
    }
  }, [])

  return null
}

export default StructuredData
