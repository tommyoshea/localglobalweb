'use client'

import { motion } from 'framer-motion'
import { Droplet } from 'lucide-react'
import { Waves } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Clock } from 'lucide-react'
import { Star } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { Shield } from 'lucide-react'
import { Wrench } from 'lucide-react'
import { Zap } from 'lucide-react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const LiquidGeniusTemplate = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 text-blue-900 overflow-hidden">
      {/* Animated Water Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 via-cyan-200/20 to-blue-300/30">
          {/* Flowing Water Animation */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-400/20 to-transparent"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cyan-400/20 to-transparent"
          />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-blue-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"
                />
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  LIQUID GENIUS
                </h1>
                <p className="text-xs text-blue-500">FLOW LIKE WATER</p>
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
                  onClick={() => setActiveSection(item.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`transition-colors duration-300 relative group ${
                    activeSection === item.id 
                      ? 'text-blue-900' 
                      : 'text-blue-700 hover:text-blue-900'
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
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
                className="hidden md:block bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Emergency Call
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? '0%' : '100%'
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-blue-500 to-cyan-500 z-50 md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-blue-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="space-y-4">
            {[
              { id: 'home', name: 'Home' },
              { id: 'about', name: 'About' },
              { id: 'services', name: 'Services' },
              { id: 'gallery', name: 'Gallery' },
              { id: 'contact', name: 'Contact' }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-white text-blue-600' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
          
          <div className="mt-8 pt-6 border-t border-white/30">
            <button className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold">
              Emergency Call
            </button>
          </div>
        </div>
      </motion.div>

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
                {/* Floating Water Droplets */}
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
                  <Droplet className="w-8 h-8" />
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
                  className="absolute top-40 right-20 text-cyan-400 opacity-60"
                >
                  <Waves className="w-6 h-6" />
                </motion.div>

                <motion.h1 
                  className="text-6xl md:text-8xl font-bold mb-6"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(6, 182, 212, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    FLOW LIKE
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    WATER
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl text-blue-700 mb-8 max-w-2xl mx-auto"
                >
                  Master plumbers with a philosophy as fluid as water - adaptable, reliable, and always finding the right path
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-full font-semibold text-lg text-white hover:shadow-xl transition-all duration-300"
                  >
                    <Wrench className="w-5 h-5 inline mr-2" />
                    Get Free Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)" }}
                    className="bg-gradient-to-r from-red-500 to-pink-500 px-8 py-4 rounded-full font-semibold text-lg text-white hover:shadow-xl transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 inline mr-2" />
                    Emergency Call
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="relative py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    ABOUT LIQUID GENIUS
                  </span>
                </h2>
                <p className="text-xl text-blue-700 max-w-2xl mx-auto">
                  We flow through challenges like water - finding the path of least resistance and maximum efficiency
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Philosophy</h3>
                    <p className="text-blue-700 leading-relaxed">
                      Like water, we adapt to any situation. We flow around obstacles, find hidden paths, 
                      and always reach our destination. Our approach is fluid, our solutions are clear, 
                      and our results are pure.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-cyan-200/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Promise</h3>
                    <p className="text-blue-700 leading-relaxed">
                      We promise to flow through your plumbing problems with the grace of water, 
                      the precision of a master craftsman, and the reliability of a trusted friend.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {[
                    { number: "1000+", label: "Leaks Fixed", color: "from-blue-500 to-blue-600" },
                    { number: "24/7", label: "Emergency Service", color: "from-cyan-500 to-cyan-600" },
                    { number: "20+", label: "Years Experience", color: "from-green-500 to-green-600" },
                    { number: "99%", label: "Success Rate", color: "from-purple-500 to-purple-600" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-center text-white`}
                    >
                      <div className="text-3xl font-bold mb-2">{stat.number}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </motion.div>
                  ))}
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
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    OUR SERVICES
                  </span>
                </h2>
                <p className="text-xl text-blue-700 max-w-2xl mx-auto">
                  Comprehensive plumbing solutions that flow seamlessly into your life
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Wrench,
                    title: "Emergency Repairs",
                    description: "24/7 emergency plumbing services with rapid response times",
                    features: ["1-Hour Response", "Licensed Technicians", "Warranty Included"],
                    color: "from-red-500 to-pink-500"
                  },
                  {
                    icon: Droplet,
                    title: "Water Systems",
                    description: "Complete water system installation and maintenance",
                    features: ["Pipe Installation", "Leak Detection", "Water Quality"],
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Shield,
                    title: "Preventive Maintenance",
                    description: "Keep your plumbing flowing smoothly with regular maintenance",
                    features: ["Annual Inspections", "Cleaning Services", "System Upgrades"],
                    color: "from-green-500 to-emerald-500"
                  }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 hover:border-blue-300/70 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 relative overflow-hidden`}>
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"
                      />
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">{service.title}</h3>
                    <p className="text-blue-700 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-blue-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
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

        {/* Gallery Section */}
        {activeSection === 'gallery' && (
          <section className="relative py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    PROJECT GALLERY
                  </span>
                </h2>
                <p className="text-xl text-blue-700 max-w-2xl mx-auto">
                  See the flow of our work through these stunning transformations
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Kitchen Remodel", category: "Residential", color: "from-blue-500 to-cyan-500" },
                  { title: "Bathroom Upgrade", category: "Residential", color: "from-cyan-500 to-blue-500" },
                  { title: "Commercial Plumbing", category: "Commercial", color: "from-green-500 to-teal-500" },
                  { title: "Emergency Repair", category: "Emergency", color: "from-red-500 to-pink-500" },
                  { title: "Water Heater Install", category: "Installation", color: "from-purple-500 to-indigo-500" },
                  { title: "Pipe Replacement", category: "Maintenance", color: "from-orange-500 to-red-500" }
                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-r ${project.color} rounded-2xl p-8 text-center text-white relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-white/10"
                    />
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.category}</p>
                    </div>
                  </motion.div>
                ))}
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
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    GET IN TOUCH
                  </span>
                </h2>
                <p className="text-xl text-blue-700 max-w-2xl mx-auto">
                  Ready to let us flow through your plumbing needs?
                </p>
              </motion.div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-blue-900">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-blue-900 font-semibold">Emergency Hotline</p>
                          <p className="text-blue-700">(089) 2781782</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-blue-900 font-semibold">Office Location</p>
                          <p className="text-blue-700">Leixlip, Co. Kildare</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-blue-900 font-semibold">Service Hours</p>
                          <p className="text-blue-700">24/7 Emergency Service</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 text-blue-900">Send Us a Message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/50 border border-blue-200 rounded-lg text-blue-900 placeholder-blue-600 focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/50 border border-blue-200 rounded-lg text-blue-900 placeholder-blue-600 focus:border-blue-500 focus:outline-none"
                    />
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-white/50 border border-blue-200 rounded-lg text-blue-900 placeholder-blue-600 focus:border-blue-500 focus:outline-none resize-none"
                    ></textarea>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
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
      <footer className="relative bg-white/80 backdrop-blur-md border-t border-blue-200/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Droplet className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-blue-900">LIQUID GENIUS</span>
              </div>
              <p className="text-blue-700">Flowing solutions for all your plumbing needs.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Services</h3>
              <ul className="space-y-2 text-blue-700">
                <li>Emergency Repairs</li>
                <li>Water Systems</li>
                <li>Preventive Maintenance</li>
                <li>Commercial Plumbing</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Contact</h3>
              <div className="space-y-2 text-blue-700">
                <p>📞 (089) 2781782</p>
                <p>📧 info@liquidgenius.com</p>
                <p>📍 Leixlip, Co. Kildare</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Emergency</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 rounded-full font-semibold text-white w-full"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                24/7 Emergency
              </motion.button>
            </div>
          </div>
          
          <div className="border-t border-blue-200/50 mt-8 pt-8 text-center text-blue-700">
            <p>&copy; 2024 Liquid Genius. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LiquidGeniusTemplate
