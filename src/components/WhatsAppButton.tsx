'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '+353892781782'
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=Hi! I'm interested in getting a website for my business. Can you help me?`

  const handleClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="fixed bottom-6 right-6 z-40"
    >
      {/* Main WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-16 h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:shadow-green-500/50 flex items-center justify-center"
        tabIndex={0}
        aria-label="Contact us on WhatsApp"
      >
        {/* Animated ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-green-400"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Icon */}
        <MessageCircle className="w-8 h-8 group-hover:animate-bounce" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm font-semibold px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Chat on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </motion.button>

      {/* Phone number display on hover */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full mb-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        <div className="bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded shadow-lg border border-gray-200 whitespace-nowrap">
          {phoneNumber}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default WhatsAppButton
