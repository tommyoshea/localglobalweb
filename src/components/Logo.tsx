'use client'

import React from 'react'
import Image from 'next/image'

const Logo = ({ className = "w-32 h-8", color = "currentColor" }: { className?: string, color?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/logo.svg"
        alt="LocalGlobalWeb Logo"
        width={128}
        height={32}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  )
}

export default Logo
