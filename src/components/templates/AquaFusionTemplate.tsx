'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Droplet, Anchor, Fish, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AquaFusionTemplate = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        const seed = i * 0.18;
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
                { id: 'home', name: 'Home' },
                { id: 'services', name: 'Services' },
                { id: 'portfolio', name: 'Portfolio' },
                { id: 'about', name: 'About' },
                { id: 'contact', name: 'Contact' }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`transition-colors duration-300 relative group ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-cyan-200 hover:text-white'
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: activeSection === item.id ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.button>
              ))}
            </motion.nav>

            <div className="flex items-center space-x-4">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Emergency Call
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
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
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-blue-900 to-cyan-800 z-50 md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-cyan-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="space-y-4">
            {[
              { id: 'home', name: 'Home' },
              { id: 'services', name: 'Services' },
              { id: 'portfolio', name: 'Portfolio' },
              { id: 'about', name: 'About' },
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
                    ? 'bg-cyan-500 text-white' 
                    : 'text-cyan-200 hover:bg-cyan-500/20 hover:text-white'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
          
          <div className="mt-8 pt-6 border-t border-cyan-300/30">
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Emergency Call
            </button>
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      {activeSection === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ocean of Solutions
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto"
            >
              {messages[currentMessage]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <Anchor className="w-5 h-5 inline mr-2" />
                Dive Into Services
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                <Fish className="w-5 h-5 inline mr-2" />
                Explore Portfolio
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Coral Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 left-10 text-6xl opacity-30"
        >
          🌊
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-20 right-10 text-6xl opacity-30"
        >
          🐠
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Deep Blue Services
              </span>
            </h2>
            <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
              From the depths of expertise to the surface of satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔧',
                title: 'Pipe Labyrinth Solutions',
                description: 'Navigate complex plumbing systems with our advanced diagnostic tools'
              },
              {
                icon: '💧',
                title: 'Water Flow Optimization',
                description: 'Optimize your water systems for maximum efficiency and minimal waste'
              },
              {
                icon: '🛠️',
                title: 'Emergency Deep Dive',
                description: 'Emergency response with rapid underwater diagnostics'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-cyan-200">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                Coral Reef Contact
              </span>
            </h2>
            <p className="text-xl text-cyan-200">
              Ready to dive into excellence? Let's make waves together!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Emergency Hotline</h3>
                  <p className="text-cyan-200">1-800-AQUA-FIX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-cyan-200">dive@aquafusion.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-cyan-200">Deep Blue District, Ocean City</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/20 border border-cyan-300/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/20 border border-cyan-300/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-cyan-300/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-400 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

        </>
      )}

      {activeSection === 'services' && (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
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

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🔧',
                  title: 'Pipe Labyrinth Solutions',
                  description: 'Navigate complex plumbing systems with our advanced diagnostic tools',
                  price: 'From €150',
                  duration: '2-4 hours'
                },
                {
                  icon: '💧',
                  title: 'Water Flow Optimization',
                  description: 'Optimize your water systems for maximum efficiency and minimal waste',
                  price: 'From €200',
                  duration: '3-5 hours'
                },
                {
                  icon: '🛠️',
                  title: 'Emergency Deep Dive',
                  description: 'Emergency response with rapid underwater diagnostics',
                  price: 'From €300',
                  duration: '1-3 hours'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-cyan-200 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-cyan-200">Price:</span>
                      <span className="text-white font-semibold">{service.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-200">Duration:</span>
                      <span className="text-white font-semibold">{service.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'about' && (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Deep Story
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
                From the depths of the ocean to the heights of innovation. 
                Discover the team behind Aqua Fusion's underwater revolution.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: 'Captain Marcus Blue',
                  role: 'Founder & CEO',
                  image: '👨‍💼',
                  bio: 'Former marine biologist turned plumbing innovator. 20+ years of experience in underwater systems.'
                },
                {
                  name: 'Dr. Coral Waters',
                  role: 'Chief Technology Officer',
                  image: '👩‍🔬',
                  bio: 'PhD in Ocean Engineering. Expert in underwater robotics and smart plumbing systems.'
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30 text-center"
                >
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                  <p className="text-cyan-200">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Coral Reef Contact
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
                Ready to dive into excellence? Let's make waves together!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Emergency Hotline</h3>
                    <p className="text-cyan-200">1-800-AQUA-FIX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-cyan-200">dive@aquafusion.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-cyan-200">Deep Blue District, Ocean City</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/20 border border-cyan-300/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/20 border border-cyan-300/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-400"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-cyan-300/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-400 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'portfolio' && (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ocean of Projects
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
                Dive into our portfolio of underwater-inspired plumbing transformations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Coral Resort Complex',
                  description: 'Complete underwater-themed plumbing system for luxury resort',
                  image: '🏖️',
                  budget: '€150,000'
                },
                {
                  title: 'Deep Sea Mansion',
                  description: 'Luxury home with state-of-the-art plumbing technology',
                  image: '🏰',
                  budget: '€75,000'
                },
                {
                  title: 'Ocean Office Tower',
                  description: 'Modern office building with sustainable plumbing solutions',
                  image: '🌊',
                  budget: '€300,000'
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-300/30 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <div className="text-6xl">{project.image}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-cyan-200 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-200">Budget:</span>
                      <span className="text-white font-semibold">{project.budget}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

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

export default AquaFusionTemplate
