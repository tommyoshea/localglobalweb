'use client'

import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noindex?: boolean
  nofollow?: boolean
}

const SEOHead = ({
  title = 'Web Design Dublin | Professional Website Designers Dublin | LocalGlobalWeb',
  description = 'Professional web design Dublin. Expert website designers Dublin creating affordable, responsive websites for small businesses.',
  keywords = 'web design dublin, website designers dublin, web designers dublin',
  canonical = 'https://www.localglobalweb.com',
  ogImage = 'https://www.localglobalweb.com/localglobalweb-image.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false
}: SEOHeadProps) => {
  const robotsContent = noindex || nofollow 
    ? `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="LocalGlobalWeb" />
      <meta property="og:locale" content="en_IE" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="LocalGlobalWeb - Dublin Web Designers" />
      <meta name="publisher" content="LocalGlobalWeb" />
      <meta name="copyright" content="LocalGlobalWeb" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IE-D" />
      <meta name="geo.placename" content="Dublin, Ireland" />
      <meta name="geo.position" content="53.3498;-6.2603" />
      <meta name="ICBM" content="53.3498, -6.2603" />
      
      {/* Performance and Mobile */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
    </Head>
  )
}

export default SEOHead
