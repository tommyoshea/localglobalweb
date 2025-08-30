'use client'

import React from 'react'

const Logo = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Main sparkle star */}
      <path 
        d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
        className="animate-pulse"
      />
      
      {/* Corner sparkles with different animation delays */}
      <path 
        d="M5 3v4" 
        className="animate-ping"
        style={{ animationDelay: '0.5s', animationDuration: '2s' }}
      />
      <path 
        d="M19 17v4" 
        className="animate-ping"
        style={{ animationDelay: '1s', animationDuration: '2s' }}
      />
      <path 
        d="M3 5h4" 
        className="animate-ping"
        style={{ animationDelay: '1.5s', animationDuration: '2s' }}
      />
      <path 
        d="M17 19h4" 
        className="animate-ping"
        style={{ animationDelay: '2s', animationDuration: '2s' }}
      />
    </svg>
  )
}

export default Logo
