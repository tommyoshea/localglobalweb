'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Droplet, Sparkles, Heart, Leaf, Menu, X } from 'lucide-react'

const CrystalClearTemplate = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const quotes = [
    "Pure water, pure service, pure excellence",
    "Clarity in every drop, perfection in every pipe",
    "Still waters run deep, crystal clear runs perfect"
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const crystalParticles = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 overflow-hidden relative">
      {/* Animated Crystal Particles */}
      {crystalParticles.map((i) => {
        // Use consistent seed for server/client hydration
        const seed = i * 0.17;
                    const left = Math.round((Math.sin(seed) * 50 + 50) * 100) / 100;
            const top = Math.round((Math.cos(seed) * 50 + 50) * 100) / 100;
        const xOffset = (i % 3 - 1) * 6;
        const duration = 4 + (i % 3) * 0.6;
        const delay = (i % 4) * 0.5;
        
        return (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-300 rounded-full opacity-40"
          style={{
              left: `${left}%`,
              top: `${top}%`,
          }}
          animate={{
            y: [0, -50, 0],
              x: [0, xOffset, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.5, 1],
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
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Crystal Clear</h1>
                <p className="text-slate-600 text-sm">Pure Flow Philosophy</p>
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
                      ? 'text-cyan-600' 
                      : 'text-slate-600 hover:text-cyan-600'
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
                className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Emergency Call
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
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
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-50 to-cyan-100 z-50 md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-slate-800">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-600 hover:text-cyan-600 transition-colors"
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
                    : 'text-slate-600 hover:bg-cyan-500/20 hover:text-cyan-600'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
          
          <div className="mt-8 pt-6 border-t border-slate-200">
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-slate-50"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold text-slate-800 mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 bg-clip-text text-transparent">
                Crystal
              </span>
              <br />
              <span className="text-4xl md:text-6xl text-slate-600">Clear</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto"
            >
              {quotes[currentQuote]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Sparkles className="w-5 h-5 inline mr-2" />
                Explore Services
              </button>
              <button className="border-2 border-cyan-400 text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                <Heart className="w-5 h-5 inline mr-2" />
                View Portfolio
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Crystal Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 left-10 text-6xl opacity-20"
        >
          💎
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-20 right-10 text-6xl opacity-20"
        >
          ✨
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Pure Flow
              </span>
              <br />
              <span className="text-3xl text-slate-600">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Transparent pricing, crystal clear communication, pure excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💎',
                title: 'Crystal Matrix Selector',
                description: 'Choose your services with our transparent, prism-inspired interface'
              },
              {
                icon: '🧘',
                title: 'Still Waters Booking',
                description: 'Peaceful, meditation-inspired booking system for stress-free scheduling'
              },
              {
                icon: '✨',
                title: 'Diamond Clarity Guarantee',
                description: 'Complete transparency in all dealings with no hidden costs'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-4xl mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zen Garden Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-200 shadow-xl"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Zen Garden Portal</h3>
              <p className="text-slate-600 text-lg">
                Experience peace and clarity in our customer portal
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Pure Flow Tracking</h4>
                    <p className="text-slate-600 text-sm">Minimalist design for maximum clarity</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Crystal Clear Pricing</h4>
                    <p className="text-slate-600 text-sm">No hidden costs, complete transparency</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Peaceful Interface</h4>
                    <p className="text-slate-600 text-sm">Designed for stress-free interaction</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
                <h4 className="font-semibold text-slate-800 mb-4">Current Status</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">System Status</span>
                    <span className="text-green-600 font-semibold">● Operational</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Response Time</span>
                    <span className="text-cyan-600 font-semibold">Under 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Customer Satisfaction</span>
                    <span className="text-blue-600 font-semibold">99.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Diamond Clarity
              </span>
              <br />
              <span className="text-3xl text-slate-600">Contact</span>
            </h2>
            <p className="text-xl text-slate-600">
              Ready to experience crystal clear service? Let's connect with transparency.
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
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-slate-800 font-semibold">Crystal Hotline</h3>
                  <p className="text-slate-600">1-800-CRYSTAL</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-slate-800 font-semibold">Email</h3>
                  <p className="text-slate-600">clarity@crystalclear.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-slate-800 font-semibold">Location</h3>
                  <p className="text-slate-600">Pure District, Crystal City</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 border border-slate-200 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send us a message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Pure Flow Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Crystal clear solutions with zen-inspired precision. 
                Every service flows with the purity of mountain streams.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '✨',
                  title: 'Crystal Clear Diagnostics',
                  description: 'Transparent assessment with no hidden issues, pure clarity in every diagnosis',
                  price: 'From €120',
                  duration: '1-2 hours'
                },
                {
                  icon: '💧',
                  title: 'Zen Flow Optimization',
                  description: 'Minimalist solutions that harmonize with your space and lifestyle',
                  price: 'From €180',
                  duration: '2-4 hours'
                },
                {
                  icon: '🧘',
                  title: 'Serene Emergency Response',
                  description: 'Calm, efficient emergency service with minimal disruption to your peace',
                  price: 'From €250',
                  duration: '1-3 hours'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Price:</span>
                      <span className="text-slate-800 font-semibold">{service.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Duration:</span>
                      <span className="text-slate-800 font-semibold">{service.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'about' && (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Zen Garden Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Meet the mindful masters behind Crystal Clear's pure flow philosophy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: 'Master Zen Flow',
                  role: 'Founder & Flow Master',
                  image: '🧘‍♂️',
                  bio: 'Former meditation teacher turned plumbing innovator. 15+ years of zen-inspired service philosophy.'
                },
                {
                  name: 'Dr. Crystal Waters',
                  role: 'Chief Clarity Officer',
                  image: '💎',
                  bio: 'PhD in Environmental Engineering. Expert in pure water systems and sustainable solutions.'
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg text-center"
                >
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-cyan-600 font-medium mb-4">{member.role}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Diamond Clarity Contact
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Ready to experience crystal clear service? Let's connect with transparency.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-semibold">Crystal Hotline</h3>
                    <p className="text-slate-600">1-800-CRYSTAL</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-semibold">Email</h3>
                    <p className="text-slate-600">clarity@crystalclear.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-semibold">Location</h3>
                    <p className="text-slate-600">Pure District, Crystal City</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 border border-slate-200 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Pure Flow Portfolio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Discover our portfolio of crystal clear transformations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Zen Garden Villa',
                  description: 'Minimalist plumbing system for meditation retreat center',
                  image: '🏡',
                  budget: '€120,000'
                },
                {
                  title: 'Crystal Office Tower',
                  description: 'Transparent water systems for modern corporate headquarters',
                  image: '🏢',
                  budget: '€300,000'
                },
                {
                  title: 'Pure Flow Spa',
                  description: 'Serene water features for luxury wellness center',
                  image: '💆',
                  budget: '€180,000'
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <div className="text-6xl">{project.image}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Budget:</span>
                      <span className="text-slate-800 font-semibold">{project.budget}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-300">
            © 2024 Crystal Clear - Pure Flow Philosophy. Clarity in every drop, perfection in every pipe.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default CrystalClearTemplate
