'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Phone, MapPin, Clock, Star, ArrowRight, Shield, Wifi, Battery, Menu, X } from 'lucide-react'
import { useState } from 'react'

const VoltageVisionTemplate = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleTabClick = (tab: string) => {
    setActiveSection(tab)
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Circuit Board Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-blue-900/20">
          {/* Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-2 bg-blue-400"></div>
            <div className="absolute top-20 left-20 w-2 h-32 bg-blue-400"></div>
            <div className="absolute top-20 right-20 w-32 h-2 bg-purple-400"></div>
            <div className="absolute bottom-20 left-20 w-32 h-2 bg-blue-400"></div>
            <div className="absolute bottom-20 right-20 w-2 h-32 bg-purple-400"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-32 bg-blue-400 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black bg-opacity-50 backdrop-blur-sm border-b border-blue-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                />
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  VOLTAGE VISION
                </h1>
                <p className="text-xs text-blue-400">POWER YOUR DREAMS</p>
              </div>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', name: 'Home' },
                { id: 'about', name: 'About' },
                { id: 'services', name: 'Services' },
                { id: 'gallery', name: 'Gallery' },
                { id: 'contact', name: 'Contact' }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`transition-colors duration-300 relative group ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-blue-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: activeSection === item.id ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.button>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Emergency Call
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-blue-300 hover:text-white transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-blue-500/30"
          >
            <div className="px-6 py-4 space-y-3">
              {[
                { id: 'home', name: 'Home' },
                { id: 'about', name: 'About' },
                { id: 'services', name: 'Services' },
                { id: 'gallery', name: 'Gallery' },
                { id: 'contact', name: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full text-left capitalize py-2 px-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-blue-500/20 text-white border border-blue-500/30' 
                      : 'text-blue-300 hover:bg-gray-800/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-4">
                Emergency Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Content Sections */}
      <main className="relative z-10">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="relative min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                {/* Floating Circuit Elements */}
                <motion.div
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-20 left-10 text-blue-400 opacity-60"
                >
                  <Zap className="w-8 h-8" />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-40 right-20 text-purple-400 opacity-60"
                >
                  <Zap className="w-6 h-6" />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 3, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute bottom-40 left-20 text-blue-400 opacity-60"
                >
                  <Wifi className="w-7 h-7" />
                </motion.div>

                <motion.h1 
                  className="text-6xl md:text-8xl font-bold mb-6"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(147, 51, 234, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    POWER YOUR
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    DREAMS
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl text-blue-300 mb-8 max-w-2xl mx-auto"
                >
                  Where innovation meets electricity. We power the future with cutting-edge technology and unwavering reliability.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="relative py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    About Voltage Vision
                  </span>
                </h2>
                <p className="text-xl text-blue-300 max-w-3xl mx-auto">
                  Pioneering the future of electrical solutions with cutting-edge technology and unwavering commitment to excellence.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Zap,
                    title: 'Innovation',
                    description: 'Leading-edge electrical solutions powered by the latest technology.'
                  },
                  {
                    icon: Shield,
                    title: 'Reliability',
                    description: 'Trusted electrical services with proven track record of excellence.'
                  },
                  {
                    icon: Star,
                    title: 'Excellence',
                    description: 'Uncompromising quality in every project we undertake.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-blue-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {activeSection === 'services' && (
          <section className="relative py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Our Services
                  </span>
                </h2>
                <p className="text-xl text-blue-300 max-w-3xl mx-auto">
                  Comprehensive electrical solutions for residential and commercial needs.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Wifi,
                    title: 'Smart Home Integration',
                    description: 'Transform your home with intelligent electrical systems.',
                    price: '€299'
                  },
                  {
                    icon: Shield,
                    title: 'Emergency Repairs',
                    description: 'Emergency electrical repair services.',
                    price: '€199'
                  },
                  {
                    icon: Battery,
                    title: 'Energy Solutions',
                    description: 'Sustainable energy solutions for your property.',
                    price: '€399'
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-blue-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {activeSection === 'gallery' && (
          <section className="relative py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Our Work
                  </span>
                </h2>
                <p className="text-xl text-blue-300 max-w-3xl mx-auto">
                  Showcasing our latest electrical projects and installations.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl overflow-hidden hover:border-blue-400 transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <Zap className="w-16 h-16 text-blue-400" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-white">Project {item}</h3>
                      <p className="text-blue-300">Electrical installation and system integration.</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="relative py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Contact Us
                  </span>
                </h2>
                <p className="text-xl text-blue-300 max-w-3xl mx-auto">
                  Ready to power your dreams? Get in touch with our expert team.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Phone</h3>
                        <p className="text-blue-300">(089) 2781782</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Address</h3>
                        <p className="text-blue-300">Leixlip, Co. Kildare</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Hours</h3>
                        <p className="text-blue-300">Emergency Service</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-black bg-opacity-50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-black bg-opacity-50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:border-blue-500 focus:outline-none"
                    />
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-black bg-opacity-50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:border-blue-500 focus:outline-none resize-none"
                    ></textarea>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative bg-black bg-opacity-50 backdrop-blur-sm border-t border-blue-500/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">VOLTAGE VISION</span>
              </div>
              <p className="text-blue-300">Powering the future with innovative electrical solutions.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-blue-300">
                <li>Smart Home Integration</li>
                <li>Emergency Repairs</li>
                <li>Energy Solutions</li>
                <li>Commercial Electrical</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-2 text-blue-300">
                <p>📞 (089) 2781782</p>
                <p>📧 info@voltagevision.com</p>
                <p>📍 Leixlip, Co. Kildare</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Emergency</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 rounded-lg font-semibold w-full"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Emergency Service
              </motion.button>
            </div>
          </div>
          
          <div className="border-t border-blue-500/30 mt-8 pt-8 text-center text-blue-300">
            <p>&copy; 2024 Voltage Vision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default VoltageVisionTemplate
