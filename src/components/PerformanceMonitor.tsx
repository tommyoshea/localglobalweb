'use client'

import { useEffect } from 'react'

// TypeScript interfaces for Performance API
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number
  processingEnd: number
  cancelable: boolean
}

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
  lastInputTime: number
  sources: LayoutShiftAttribution[]
}

interface LayoutShiftAttribution {
  node?: Node
  previousRect: DOMRectReadOnly
  currentRect: DOMRectReadOnly
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
            // Send to analytics if needed
          }
        }
      })
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEventTiming
          if (fidEntry.processingStart) {
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
            // Send to analytics if needed
          }
        }
      })
      
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as LayoutShift
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value
          }
        }
        console.log('CLS:', clsValue)
        // Send to analytics if needed
      })
      
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Cleanup
      return () => {
        observer.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return null
}

export default PerformanceMonitor
