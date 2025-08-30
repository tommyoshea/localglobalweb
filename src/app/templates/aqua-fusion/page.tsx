'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Droplet, Anchor, Fish } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AquaFusionHomePage = () => {
  const router = useRouter()
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const messages = [
    "Dive into excellence with our underwater-inspired solutions",
    "Flow like the ocean - smooth, powerful, and endless",
    "Deep blue technology meets crystal clear service"
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const waterParticles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 overflow-hidden relative">
      {/* Animated Water Particles */}
      {waterParticles.map((i) => {
        // Use consistent seed for server/client hydration
        const seed = i * 0.19;
                    const left = Math.round((Math.sin(seed) * 50 + 50) * 100) / 100;
            const top = Math.round((Math.cos(seed) * 50 + 50) * 100) / 100;
        const xOffset = (i % 5 - 2) * 8;
        const duration = 3 + (i % 3) * 0.6;
        const delay = (i % 4) * 0.5;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-300 rounded-full opacity-60"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, xOffset, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
            }}
          />
        );
      })}

      {/* Header */}
      <header className="relative z-10 bg-black bg-opacity-20 backdrop-blur-sm border-b border-cyan-300/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Aqua Fusion</h1>
                <p className="text-cyan-200 text-sm">Deep Blue Technology</p>
              </div>
            </motion.div>
            
            <motion.nav
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              {[
                { name: 'Home', path: '/templates/aqua-fusion' },
                { name: 'Services', path: '/templates/aqua-fusion/services' },
                { name: 'Portfolio', path: '/templates/aqua-fusion/portfolio' },
                { name: 'About', path: '/templates/aqua-fusion/about' },
                { name: 'Contact', path: '/templates/aqua-fusion/contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => router.push(item.path)}
                  className="text-cyan-200 hover:text-white transition-colors duration-300 relative group bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </motion.nav>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Emergency Call
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ocean of Solutions
              </span>
            </h1>
            
            <motion.p
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto"
            >
              {messages[currentMessage]}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => router.push('/templates/aqua-fusion/services')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Droplet className="w-5 h-5 inline mr-2" />
              Explore Services
            </button>
            <button 
              onClick={() => router.push('/templates/aqua-fusion/contact')}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Get Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Why Choose Aqua Fusion?
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplet className="w-8 h-8" />,
                title: 'Deep Blue Technology',
                description: 'Advanced underwater-inspired solutions that flow like the ocean itself'
              },
              {
                icon: <Fish className="w-8 h-8" />,
                title: 'Eco-Friendly Approach',
                description: 'Sustainable plumbing solutions that protect our marine environment'
              },
              {
                icon: <Anchor className="w-8 h-8" />,
                title: 'Reliable Service',
                description: '24/7 emergency response with rapid underwater diagnostics'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-cyan-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-800 to-blue-950">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Dive In?
              </span>
            </h2>
            <p className="text-xl text-cyan-200 mb-8">
              Let's make waves together! Contact us for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => router.push('/templates/aqua-fusion/contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now
              </button>
              <button 
                onClick={() => router.push('/templates/aqua-fusion/portfolio')}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                <Star className="w-5 h-5 inline mr-2" />
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-40 backdrop-blur-sm border-t border-cyan-300/30 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-cyan-200">
            © 2024 Aqua Fusion - Deep Blue Technology. Making waves in plumbing excellence.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default AquaFusionHomePage
