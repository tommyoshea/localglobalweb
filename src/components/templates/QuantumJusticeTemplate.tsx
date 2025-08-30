'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, Brain, Shield, Eye, Cpu, Lock, Globe, Target, CheckCircle, Phone, Mail, MapPin, ArrowRight, Star, Menu, X } from 'lucide-react'

export default function QuantumJusticeTemplate() {
  const [activeTab, setActiveTab] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    setMobileMenuOpen(false)
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'services':
        return (
          <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Quantum Legal Services
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                  Cutting-edge legal solutions powered by AI and quantum technology
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {[
                  {
                    icon: Brain,
                    title: 'AI Case Analysis',
                    description: 'Advanced AI-powered legal research and case prediction',
                    price: '€299',
                    features: ['Predictive Analytics', 'Legal Research AI', 'Case Outcome Analysis'],
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: Shield,
                    title: 'Blockchain Evidence',
                    description: 'Immutable evidence tracking with blockchain technology',
                    price: '€199',
                    features: ['Digital Evidence Vault', 'Chain of Custody', 'Tamper-Proof Records'],
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    icon: Globe,
                    title: 'Virtual Courtroom',
                    description: 'VR-enabled courtroom experience and preparation',
                    price: '€399',
                    features: ['VR Simulation', 'Courtroom Training', 'Evidence Presentation'],
                    color: 'from-purple-500 to-pink-500'
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-4 sm:p-6 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center mb-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )

      case 'technology':
        return (
          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Quantum Technology Hub
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Revolutionary legal technology that redefines the practice of law
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  {[
                    {
                      icon: Brain,
                      title: 'Neural Network Analysis',
                      description: 'AI-powered legal research that learns and adapts to your case patterns',
                      stats: '99.7% Accuracy'
                    },
                    {
                      icon: Shield,
                      title: 'Quantum Encryption',
                      description: 'Unbreakable security protocols using quantum computing principles',
                      stats: 'Zero Breaches'
                    },
                    {
                      icon: Globe,
                      title: 'Virtual Reality Courtrooms',
                      description: 'Immersive courtroom simulations for case preparation and training',
                      stats: '100+ VR Sessions'
                    }
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gray-900/50 backdrop-blur-md border border-blue-500/30 rounded-xl p-6 hover:border-blue-400 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <tech.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                          <p className="text-gray-300 mb-3">{tech.description}</p>
                          <div className="flex items-center">
                            <span className="text-sm font-semibold text-blue-400">{tech.stats}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-gray-900/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Technology Dashboard</h3>
                    <div className="space-y-6">
                      {[
                        { label: 'AI Processing Power', value: '99.9%', color: 'from-green-500 to-emerald-500' },
                        { label: 'Quantum Security', value: '100%', color: 'from-blue-500 to-cyan-500' },
                        { label: 'VR Immersion', value: '95%', color: 'from-purple-500 to-pink-500' }
                      ].map((metric, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-300">{metric.label}</span>
                            <span className="text-white font-semibold">{metric.value}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: metric.value }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              className={`h-2 bg-gradient-to-r ${metric.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )

      case 'consultation':
        return (
          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI-Powered Consultation
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the future of legal consultation with quantum technology
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-gray-900/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Virtual Consultation Hub</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <Eye className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">VR Consultation</h4>
                          <p className="text-gray-300">Immersive virtual reality legal consultation</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">AI Assessment</h4>
                          <p className="text-gray-300">Instant case analysis with AI insights</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Secure Portal</h4>
                          <p className="text-gray-300">Quantum-encrypted client communication</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-gray-900/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Book Your Consultation</h3>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full bg-gray-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full bg-gray-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <textarea
                          rows={4}
                          className="w-full bg-gray-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                          placeholder="Describe your case briefly..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Schedule Consultation
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )

      case 'contact':
        return (
          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Contact Quantum Justice
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to experience the future of legal services? Get in touch with our quantum-powered team
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-gray-900/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Quantum Hotline</h4>
                          <p className="text-gray-300">+1 (555) QUANTUM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">AI Assistant</h4>
                          <p className="text-gray-300">ai@quantumjustice.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Virtual Office</h4>
                          <p className="text-gray-300">Available via VR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-gray-900/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full bg-gray-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full bg-gray-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <textarea
                          rows={6}
                          className="w-full bg-gray-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                          placeholder="Tell us about your legal needs..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )

      default:
        return (
          <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="text-center max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Scale className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-ping"></div>
                  </div>
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Quantum Justice
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
                  The future of legal practice is here. 
                  <br className="hidden sm:block" />
                  <span className="text-blue-400 font-semibold">AI-powered justice in the digital age</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  AI Consultation
                </button>
                <button className="border-2 border-blue-500 text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                  Virtual Courtroom
                </button>
              </motion.div>
            </div>
          </section>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 text-white">
      {/* Quantum Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-5 animate-ping"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gray-900/80 backdrop-blur-md border-b border-blue-500/30 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <Scale className="w-8 h-8 text-blue-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Quantum Justice
                </h1>
                <p className="text-xs text-blue-400">⚖️ AI-Powered Legal Excellence</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              {['home', 'services', 'technology', 'consultation', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                AI Consultation
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
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-blue-500/30"
          >
            <div className="px-6 py-4 space-y-3">
              {['home', 'services', 'technology', 'consultation', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`w-full text-left capitalize py-2 px-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : 'text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-4">
                AI Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/80 backdrop-blur-md border-t border-blue-500/30 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Scale className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-semibold text-white">Quantum Justice</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <span>⚖️ AI-Powered Legal Excellence</span>
              <span>|</span>
              <span>Quantum Technology</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
