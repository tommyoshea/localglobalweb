'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Rocket } from 'lucide-react'
import Logo from './Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggleMenu()
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('button')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Templates', href: '/templates' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 text-2xl font-black group"
            tabIndex={0}
            aria-label="Go to homepage"
          >
                         <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
               <Logo className="w-6 h-6 text-white" />
             </div>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              LocalGlobalWeb
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold relative group"
                tabIndex={0}
                aria-label={`Navigate to ${item.name} page`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center"
              tabIndex={0}
              aria-label="Get started with your website"
            >
              <Rocket className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            className="md:hidden p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 touch-manipulation"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-semibold touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                  tabIndex={0}
                  aria-label={`Navigate to ${item.name} page`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-4 py-3 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-center shadow-lg touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
                aria-label="Get started with your website"
              >
                <Rocket className="w-4 h-4 inline mr-2" />
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
