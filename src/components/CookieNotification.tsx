'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, X, CheckCircle, Cookie } from 'lucide-react'

const CookieNotification = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted')
    if (!hasAccepted) {
      // Show notification after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-max">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 md:p-8 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
              
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        We Use Cookies
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                      By continuing to use our site, you consent to our use of cookies.
                      <span className="text-blue-600 font-semibold"> Learn more in our Privacy Policy.</span>
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Essential functionality</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Performance analytics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Personalized experience</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleAccept}
                      className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:shadow-blue-500/25 inline-flex items-center justify-center"
                      tabIndex={0}
                      aria-label="Accept cookies"
                    >
                      <CheckCircle className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      Accept All
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDecline}
                      className="group bg-white text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-full border border-gray-300 shadow-lg transition-all duration-300 transform hover:shadow-gray-500/25 inline-flex items-center justify-center"
                      tabIndex={0}
                      aria-label="Decline cookies"
                    >
                      Decline
                    </motion.button>
                  </div>

                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDecline}
                    className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                    tabIndex={0}
                    aria-label="Close cookie notification"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieNotification
