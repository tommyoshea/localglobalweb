'use client'

import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'
import { Gavel } from 'lucide-react'
import { BookOpen } from 'lucide-react'
import { Shield } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Clock } from 'lucide-react'
import { Star } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { Zap } from 'lucide-react'
import { Users } from 'lucide-react'
import { useState } from 'react'
import { FileText } from 'lucide-react'

const JusticeJourneyTemplate = () => {
  const [activeSection, setActiveSection] = useState('home')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 text-slate-900 overflow-hidden">
      {/* Animated Legal Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-200/20 via-gray-200/15 to-stone-200/20">
          {/* Architectural Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-slate-400 rounded-lg"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border-2 border-gray-400 rounded-lg"></div>
            <div className="absolute bottom-20 left-1/3 w-28 h-28 border-2 border-stone-400 rounded-lg"></div>
            <div className="absolute top-1/2 right-10 w-20 h-20 border-2 border-slate-500 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden">
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
                  className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"
                />
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">
                  JUSTICE JOURNEY
                </h1>
                <p className="text-xs text-slate-500">PATH TO JUSTICE</p>
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
                      ? 'text-slate-900' 
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-slate-600 to-gray-700"
                    initial={{ width: 0 }}
                    animate={{ width: activeSection === item.id ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.button>
              ))}
            </nav>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-slate-600 to-gray-700 px-6 py-2 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-slate-500/50 transition-all duration-300"
            >
              Free Consultation
            </motion.button>
          </div>
        </div>
      </header>

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
            {/* Floating Legal Elements */}
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
              className="absolute top-20 left-10 text-slate-400 opacity-60"
            >
              <Gavel className="w-8 h-8" />
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
              className="absolute top-40 right-20 text-gray-400 opacity-60"
            >
              <BookOpen className="w-6 h-6" />
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
              className="absolute bottom-40 left-20 text-stone-400 opacity-60"
            >
              <Shield className="w-7 h-7" />
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(71, 85, 105, 0.3)",
                  "0 0 40px rgba(55, 65, 81, 0.3)",
                  "0 0 20px rgba(71, 85, 105, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-slate-700 via-gray-700 to-slate-700 bg-clip-text text-transparent">
                PATH TO
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-700 via-slate-700 to-gray-700 bg-clip-text text-transparent">
                JUSTICE
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-slate-700 mb-8 max-w-2xl mx-auto"
            >
              Experienced legal professionals guiding you through every step of your legal journey with integrity and excellence
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(71, 85, 105, 0.3)" }}
                className="bg-gradient-to-r from-slate-600 to-gray-700 px-8 py-4 rounded-lg font-semibold text-lg text-white hover:shadow-xl transition-all duration-300"
              >
                <Shield className="w-5 h-5 inline mr-2" />
                Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)" }}
                className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 rounded-lg font-semibold text-lg text-white hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Emergency Legal
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
                  <span className="bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">
                    ABOUT JUSTICE JOURNEY
                  </span>
                </h2>
                <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                  We're not just lawyers - we're justice warriors, legal architects, and truth seekers
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Story</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Born from a passion for justice and a commitment to truth, Justice Journey 
                      emerged from the hallowed halls of legal excellence. We don't just practice law - 
                      we champion justice, defend rights, and build legacies of integrity.
                    </p>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
                    <p className="text-slate-700 leading-relaxed">
                      To guide every client on their journey to justice with unwavering integrity, 
                      strategic brilliance, and compassionate advocacy.
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
                    { number: "500+", label: "Cases Won", color: "from-slate-500 to-slate-600" },
                    { number: "24/7", label: "Legal Support", color: "from-gray-500 to-gray-600" },
                    { number: "30+", label: "Years Experience", color: "from-green-500 to-green-600" },
                    { number: "98%", label: "Success Rate", color: "from-blue-500 to-blue-600" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`bg-gradient-to-r ${stat.color} rounded-xl p-6 text-center text-white`}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">
                OUR SERVICES
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Comprehensive legal services with decades of combined experience and proven results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Civil Litigation",
                description: "Expert representation in civil disputes and legal proceedings",
                features: ["Contract Disputes", "Personal Injury", "Property Law"],
                color: "from-slate-600 to-gray-700"
              },
              {
                icon: Users,
                title: "Family Law",
                description: "Compassionate guidance through family legal matters",
                features: ["Divorce Proceedings", "Child Custody", "Family Mediation"],
                color: "from-gray-600 to-slate-700"
              },
              {
                icon: FileText,
                title: "Corporate Law",
                description: "Strategic legal counsel for businesses and corporations",
                features: ["Business Formation", "Contract Review", "Compliance"],
                color: "from-stone-600 to-gray-700"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-xl p-8 hover:border-slate-300/70 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 relative overflow-hidden`}>
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
                    className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"
                  />
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full mr-3"></div>
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
                  <span className="bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">
                    CASE TRACKING SYSTEM
                  </span>
                </h2>
                <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                  Transparent tracking of your legal proceedings and case management
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-xl p-8 shadow-xl"
              >
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { label: "Active Cases", value: "127", color: "from-slate-400 to-slate-600", status: "In Progress" },
                    { label: "Success Rate", value: "94%", color: "from-green-400 to-green-600", status: "Excellent" },
                    { label: "Client Satisfaction", value: "98%", color: "from-blue-400 to-blue-600", status: "Outstanding" },
                    { label: "Years Experience", value: "25+", color: "from-purple-400 to-purple-600", status: "Expert" }
                  ].map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center mx-auto mb-4 relative overflow-hidden`}>
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-white/20 rounded-lg"
                        />
                        <span className="text-2xl font-bold text-white">{metric.value}</span>
                      </div>
                      <p className="text-slate-700 font-semibold">{metric.label}</p>
                      <p className="text-green-600 text-sm">{metric.status}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
                  <span className="bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">
                    GET IN TOUCH
                  </span>
                </h2>
                <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                  Ready to begin your journey to justice?
                </p>
              </motion.div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div className="bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-slate-900">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-semibold">Legal Hotline</p>
                          <p className="text-slate-700">(089) 2781782</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-slate-700 rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-semibold">Law Office</p>
                          <p className="text-slate-700">Leixlip, Co. Kildare</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-semibold">Office Hours</p>
                          <p className="text-slate-700">24/7 Emergency Legal Support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">Send Us a Message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-600 focus:border-slate-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-600 focus:border-slate-500 focus:outline-none"
                    />
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-600 focus:border-slate-500 focus:outline-none resize-none"
                    ></textarea>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full bg-gradient-to-r from-slate-600 to-gray-700 px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-slate-500/50 transition-all duration-300"
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
      <footer className="relative bg-white/95 backdrop-blur-md border-t border-slate-200/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">JUSTICE JOURNEY</span>
              </div>
              <p className="text-slate-700">Guiding you on your path to justice with integrity and excellence.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Services</h3>
              <ul className="space-y-2 text-slate-700">
                <li>Civil Litigation</li>
                <li>Family Law</li>
                <li>Corporate Law</li>
                <li>Criminal Defense</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact</h3>
              <div className="space-y-2 text-slate-700">
                <p>📞 (089) 2781782</p>
                <p>📧 info@justicejourney.com</p>
                <p>📍 Leixlip, Co. Kildare</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Emergency</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-lg font-semibold text-white w-full"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                24/7 Emergency
              </motion.button>
            </div>
          </div>
          
          <div className="border-t border-slate-200/50 mt-8 pt-8 text-center text-slate-700">
            <p>&copy; 2024 Justice Journey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default JusticeJourneyTemplate
