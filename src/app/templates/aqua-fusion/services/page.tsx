'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Droplet, Anchor, Fish, Wrench, Zap, Shield } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AquaFusionServicesPage = () => {
  const router = useRouter()
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      id: 'pipe-labyrinth',
      icon: '🔧',
      title: 'Pipe Labyrinth Solutions',
      description: 'Navigate complex plumbing systems with our advanced diagnostic tools',
      features: [
        '3D Pipe Mapping Technology',
        'Advanced Leak Detection',
        'Pressure Optimization',
        'Real-time Monitoring',
        'Predictive Maintenance',
        'Emergency Response'
      ],
      price: 'From €150',
      duration: '2-4 hours'
    },
    {
      id: 'water-flow',
      icon: '💧',
      title: 'Water Flow Optimization',
      description: 'Optimize your water systems for maximum efficiency and minimal waste',
      features: [
        'Flow Rate Analysis',
        'Energy Efficiency Audit',
        'Water Conservation Systems',
        'Smart Metering',
        'Automated Controls',
        'Performance Reports'
      ],
      price: 'From €200',
      duration: '3-5 hours'
    },
    {
      id: 'emergency-dive',
      icon: '🛠️',
      title: 'Emergency Deep Dive',
      description: '24/7 emergency response with rapid underwater diagnostics',
      features: [
        '24/7 Emergency Hotline',
        'Rapid Response Team',
        'Underwater Diagnostics',
        'Emergency Repairs',
        'Flood Prevention',
        'Insurance Documentation'
      ],
      price: 'From €300',
      duration: '1-3 hours'
    }
  ]

  const waterParticles = Array.from({ length: 15 }, (_, i) => i)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 overflow-hidden relative">
      {/* Animated Water Particles */}
      {waterParticles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-300 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

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
      <section className="relative py-20">
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
                Deep Blue Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
              From the depths of expertise to the surface of satisfaction. 
              Our underwater-inspired solutions flow like the ocean itself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-cyan-200 mb-6">{service.description}</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-200">Price:</span>
                    <span className="text-white font-semibold">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-200">Duration:</span>
                    <span className="text-white font-semibold">{service.duration}</span>
                  </div>
                </div>

                {selectedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-cyan-300/30"
                  >
                    <h4 className="text-white font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-cyan-200">
                          <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      Book This Service
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-blue-800 to-blue-900">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Lightning Fast',
                description: 'Rapid response times with underwater efficiency'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Deep Protection',
                description: 'Comprehensive warranties and guarantees'
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: 'Expert Craftsmanship',
                description: 'Certified professionals with years of experience'
              },
              {
                icon: <Fish className="w-8 h-8" />,
                title: 'Eco-Friendly',
                description: 'Sustainable solutions for a better environment'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-cyan-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950">
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
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                <Mail className="w-5 h-5 inline mr-2" />
                Get Quote
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

export default AquaFusionServicesPage
