'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MapPin, Clock, Menu, X } from 'lucide-react'

const CurrentFlowTemplate = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [currentTime, setCurrentTime] = useState(new Date())
  const [voltageLevel, setVoltageLevel] = useState(240)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      // Simulate voltage fluctuations
      setVoltageLevel(220 + Math.random() * 40)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
  }

  const handleEmergencyCall = () => {
    window.open('tel:+1234567890', '_self')
  }

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      action()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Power Lines Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Power Line Animations */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '0%',
              width: '100%'
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white bg-opacity-90 backdrop-blur-sm border-b border-blue-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <motion.div
                  className="w-4 h-4 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Current Flow</h1>
                <p className="text-sm text-blue-600">Electrical Excellence</p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'services', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  className={`capitalize font-medium transition-all duration-300 ${
                    activeSection === section
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  tabIndex={0}
                  aria-label={`Navigate to ${section} section`}
                  onKeyDown={(e) => handleKeyDown(e, () => handleSectionChange(section))}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmergencyCall}
                className="hidden md:flex bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg font-semibold items-center space-x-2 hover:shadow-lg transition-all duration-300"
                tabIndex={0}
                aria-label="Emergency call button"
                onKeyDown={(e) => handleKeyDown(e, handleEmergencyCall)}
              >
                <Phone className="w-4 h-4" />
                <span>Emergency</span>
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-blue-200"
          >
            <div className="px-6 py-4 space-y-3">
              {['home', 'services', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  className={`w-full text-left capitalize py-2 px-3 rounded-lg transition-all duration-300 ${
                    activeSection === section 
                      ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' 
                      : 'text-gray-600 hover:bg-gray-100/50'
                  }`}
                >
                  {section}
                </button>
              ))}
              <button 
                onClick={handleEmergencyCall}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-4 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="relative py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-6"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.2)",
                      "0 0 40px rgba(147, 51, 234, 0.2)",
                      "0 0 20px rgba(59, 130, 246, 0.2)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Power Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    Dreams
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-gray-600 mb-8 leading-relaxed"
                >
                  Where electrical expertise meets elegant design. We flow through challenges like current through a circuit - 
                  finding the path of least resistance and maximum efficiency.
                </motion.p>

                {/* Voltage Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 mb-8 border border-blue-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Live Voltage Monitor</h3>
                    <div className="flex items-center space-x-2">
                      <motion.div
                        className={`w-3 h-3 rounded-full ${
                          voltageLevel > 240 ? 'bg-green-500' : 
                          voltageLevel > 220 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm text-gray-600">Status</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>0V</span>
                        <span>240V</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                          style={{ width: `${(voltageLevel / 240) * 100}%` }}
                          animate={{ width: `${(voltageLevel / 240) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{Math.round(voltageLevel)}V</span>
                  </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmergencyCall}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    tabIndex={0}
                    aria-label="Emergency call button"
                    onKeyDown={(e) => handleKeyDown(e, handleEmergencyCall)}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Emergency Call</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange('services')}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                    tabIndex={0}
                    aria-label="View services"
                    onKeyDown={(e) => handleKeyDown(e, () => handleSectionChange('services'))}
                  >
                    Our Services
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Interactive Circuit Visualization */}
                <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-full h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg border border-blue-200 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        animate={{
                          boxShadow: [
                            "0 0 0 rgba(59, 130, 246, 0.4)",
                            "0 0 20px rgba(59, 130, 246, 0.4)",
                            "0 0 0 rgba(59, 130, 246, 0.4)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Current Flow System</h3>
                    <p className="text-gray-600">Real-time electrical monitoring and optimization</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeSection === 'services' && (
        <section className="relative py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive electrical solutions that flow seamlessly from concept to completion
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Residential Wiring',
                  description: 'Complete home electrical systems with smart home integration',
                  icon: '🏠',
                  features: ['New Construction', 'Renovations', 'Smart Home Setup']
                },
                {
                  title: 'Commercial Electrical',
                  description: 'Large-scale commercial electrical installations and maintenance',
                  icon: '🏢',
                  features: ['Office Buildings', 'Retail Spaces', 'Industrial Facilities']
                },
                {
                  title: 'Emergency Repairs',
                  description: 'Emergency electrical repair and troubleshooting services',
                  icon: '⚡',
                  features: ['Power Outages', 'Electrical Faults', 'Safety Inspections']
                },
                {
                  title: 'Energy Efficiency',
                  description: 'Upgrade your electrical system for maximum energy savings',
                  icon: '🌱',
                  features: ['LED Upgrades', 'Solar Integration', 'Energy Audits']
                },
                {
                  title: 'Smart Home Solutions',
                  description: 'Modern smart home automation and control systems',
                  icon: '🤖',
                  features: ['Home Automation', 'Security Systems', 'Voice Control']
                },
                {
                  title: 'Electrical Maintenance',
                  description: 'Preventive maintenance and system optimization',
                  icon: '🔧',
                  features: ['Regular Inspections', 'System Upgrades', 'Performance Optimization']
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="relative py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    About Current Flow
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  We believe that electricity should flow as smoothly as our service. With over 15 years of experience, 
                  we've mastered the art of electrical excellence, ensuring every project flows from concept to completion 
                  with precision and care.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Expert Team</h3>
                      <p className="text-gray-600">Licensed and certified electricians</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Safety First</h3>
                      <p className="text-gray-600">100% safety compliance guarantee</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💎</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quality Work</h3>
                      <p className="text-gray-600">Premium materials and craftsmanship</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Current Flow?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                      <p className="text-gray-600">Cutting-edge technology and modern solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Reliability</h4>
                      <p className="text-gray-600">Dependable service you can count on</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                      <p className="text-gray-600">Uncompromising quality in every project</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="relative py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to power up your project? Let's connect and make your electrical dreams flow into reality.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">(089) 2781782</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">Leixlip, Co. Kildare</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Hours</h4>
                        <p className="text-gray-600">Mon-Fri: 8AM-6PM<br />Emergency: Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative z-10 bg-white bg-opacity-90 backdrop-blur-sm border-t border-blue-200">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 Current Flow Electrical. All rights reserved. | 
              <span className="text-blue-600 font-semibold"> Fully Editable Website</span> - 
              Customize every element to match your brand perfectly!
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CurrentFlowTemplate
