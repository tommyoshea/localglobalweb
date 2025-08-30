'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MapPin, Clock, Zap, Menu, X } from 'lucide-react'

const SparkMasterTemplate = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [currentTime, setCurrentTime] = useState(new Date())
  const [powerLevel, setPowerLevel] = useState(85)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      // Simulate power level fluctuations
      setPowerLevel(70 + Math.random() * 30)
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Lightning Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Lightning Bolts */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: '0%',
              width: '100%'
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1.5, 0],
              boxShadow: [
                "0 0 0 rgba(59, 130, 246, 0)",
                "0 0 50px rgba(59, 130, 246, 0.8)",
                "0 0 0 rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7
            }}
          />
        ))}
        
        {/* Electric Plasma Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-4 h-4 bg-blue-400 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
              x: [0, 20, 0],
              y: [0, -20, 0]
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
      <nav className="relative z-10 bg-black bg-opacity-50 backdrop-blur-sm border-b border-blue-400">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <motion.div
                  className="w-6 h-6 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Spark Master Pro</h1>
                <p className="text-sm text-blue-300">High-Voltage Excellence</p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'services', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  className={`capitalize font-medium transition-all duration-300 ${
                    activeSection === section
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
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
                <Zap className="w-4 h-4" />
                <span>Emergency</span>
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
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
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-blue-400"
          >
            <div className="px-6 py-4 space-y-3">
              {['home', 'services', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  className={`w-full text-left capitalize py-2 px-3 rounded-lg transition-all duration-300 ${
                    activeSection === section 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : 'text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  {section}
                </button>
              ))}
              <button 
                onClick={handleEmergencyCall}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-4 flex items-center justify-center space-x-2"
              >
                <Zap className="w-4 h-4" />
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
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(147, 51, 234, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    POWER UP
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                    YOUR BUSINESS
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  High-voltage electrical solutions that electrify your expectations. 
                  We bring the power, you bring the vision - together we create electrical excellence.
                </motion.p>

                {/* Power Level Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-blue-400"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Live Power Monitor</h3>
                    <div className="flex items-center space-x-2">
                      <motion.div
                        className={`w-3 h-3 rounded-full ${
                          powerLevel > 90 ? 'bg-green-400' : 
                          powerLevel > 70 ? 'bg-yellow-400' : 'bg-red-400'
                        }`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-sm text-gray-300">Status</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>0%</span>
                        <span>100%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full"
                          style={{ width: `${powerLevel}%` }}
                          animate={{ width: `${powerLevel}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-blue-400">{Math.round(powerLevel)}%</span>
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
                    <Zap className="w-5 h-5" />
                    <span>Emergency Call</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange('services')}
                    className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
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
                {/* Interactive Spark Academy */}
                <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">⚡ Spark Academy ⚡</h3>
                    <p className="text-gray-300">Interactive Safety Training</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: '🔌', label: 'Wiring Safety' },
                      { icon: '⚡', label: 'Power Systems' },
                      { icon: '🛡️', label: 'Safety Protocols' },
                      { icon: '🔧', label: 'Maintenance' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-blue-900 bg-opacity-50 rounded-lg p-4 text-center border border-blue-400"
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
                          delay: i * 0.2
                        }}
                      >
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <div className="text-sm text-gray-300">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Start Safety Quiz
                  </motion.button>
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
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  High-Voltage Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Electrifying solutions that power your success with cutting-edge technology and expert craftsmanship
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
                  className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-blue-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
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
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    About Spark Master Pro
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  We're not just electricians - we're electrical innovators. With over 20 years of experience, 
                  we've mastered the art of high-voltage excellence, ensuring every project sparks with quality 
                  and innovation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center border border-blue-400">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Expert Team</h3>
                      <p className="text-gray-300">Licensed and certified electricians</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center border border-blue-400">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Safety First</h3>
                      <p className="text-gray-300">100% safety compliance guarantee</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center border border-blue-400">
                      <span className="text-2xl">💎</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Quality Work</h3>
                      <p className="text-gray-300">Premium materials and craftsmanship</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Spark Master Pro?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Innovation</h4>
                      <p className="text-gray-300">Cutting-edge technology and modern solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Reliability</h4>
                      <p className="text-gray-300">Dependable service you can count on</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Excellence</h4>
                      <p className="text-gray-300">Uncompromising quality in every project</p>
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
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to power up your project? Let's connect and electrify your electrical dreams.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400">
                  <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center border border-blue-400">
                        <Phone className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Phone</h4>
                        <p className="text-gray-300">(089) 2781782</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center border border-blue-400">
                        <MapPin className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Address</h4>
                        <p className="text-gray-300">Leixlip, Co. Kildare</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center border border-blue-400">
                        <Clock className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Hours</h4>
                        <p className="text-gray-300">Mon-Fri: 8AM-6PM<br />Emergency: Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
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
      <footer className="relative z-10 bg-black bg-opacity-50 backdrop-blur-sm border-t border-blue-400">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-300">
              © 2024 Spark Master Pro Electrical. All rights reserved. | 
              <span className="text-blue-400 font-semibold"> Fully Editable Website</span> - 
              Customize every element to match your brand perfectly!
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SparkMasterTemplate
