'use client'

import { useEffect } from 'react'

export default function ViewportMeta() {
  useEffect(() => {
    // Check if viewport meta tag already exists with correct settings
    const existingViewport = document.querySelector('meta[name="viewport"]')
    
    if (existingViewport) {
      const content = existingViewport.getAttribute('content')
      // Only update if the content doesn't match our desired settings
      if (!content?.includes('user-scalable=no')) {
        existingViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover')
      }
    } else {
      // Create new viewport meta tag only if it doesn't exist
      const viewport = document.createElement('meta')
      viewport.name = 'viewport'
      viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      
      // Add to head
      document.head.appendChild(viewport)
    }
  }, [])

  return null
}
