'use client'

import { useEffect } from 'react'

export default function ViewportMeta() {
  useEffect(() => {
    // Remove any existing viewport meta tag
    const existingViewport = document.querySelector('meta[name="viewport"]')
    if (existingViewport) {
      existingViewport.remove()
    }

    // Create new viewport meta tag
    const viewport = document.createElement('meta')
    viewport.name = 'viewport'
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
    
    // Add to head
    document.head.appendChild(viewport)
  }, [])

  return null
}
