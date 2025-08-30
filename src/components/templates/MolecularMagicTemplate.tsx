'use client'

import { motion } from 'framer-motion'
import { FlaskConical } from 'lucide-react'
import { Beaker } from 'lucide-react'
import { Pill } from 'lucide-react'
import { Heart } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Clock } from 'lucide-react'
import { Star } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { Shield } from 'lucide-react'
import { Zap } from 'lucide-react'
import { Microscope } from 'lucide-react'
import { useState } from 'react'

const MolecularMagicTemplate = () => {
  const [activeSection, setActiveSection] = useState('home')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-emerald-900 overflow-hidden">
      {/* Animated Scientific Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-200/20 via-teal-200/15 to-cyan-200/20">
          {/* Molecular Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-4 h-4 bg-emerald-400 rounded-full"></div>
            <div className="absolute top-40 right-40 w-3 h-3 bg-teal-400 rounded-full"></div>
            <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-cyan-400 rounded-full"></div>
            <div className="absolute top-1/2 right-20 w-2 h-2 bg-emerald-500 rounded-full"></div>
            <div className="absolute bottom-40 left-20 w-4 h-4 bg-teal-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-md border-b border-emerald-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center relative overflow-hidden">
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
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                />
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  MOLECULAR MAGIC
                </h1>
                <p className="text-xs text-emerald-500">CHEMISTRY OF CARE</p>
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
                      ? 'text-emerald-900' 
                      : 'text-emerald-700 hover:text-emerald-900'
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                    initial={{ width: 0 }}
                    animate={{ width: activeSection === item.id ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.button>
              ))}
            </nav>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
            >
              Consultation
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
            {/* Floating Scientific Elements */}
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
              className="absolute top-20 left-10 text-emerald-400 opacity-60"
            >
              <Beaker className="w-8 h-8" />
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
              className="absolute top-40 right-20 text-teal-400 opacity-60"
            >
              <Pill className="w-6 h-6" />
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
              className="absolute bottom-40 left-20 text-cyan-400 opacity-60"
            >
              <Microscope className="w-7 h-7" />
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(16, 185, 129, 0.3)",
                  "0 0 40px rgba(20, 184, 166, 0.3)",
                  "0 0 20px rgba(16, 185, 129, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                CHEMISTRY OF
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                CARE
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-emerald-700 mb-8 max-w-2xl mx-auto"
            >
              Where science meets compassion - innovative pharmaceutical solutions with a human touch
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)" }}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 rounded-full font-semibold text-lg text-white hover:shadow-xl transition-all duration-300"
              >
                <Heart className="w-5 h-5 inline mr-2" />
                Health Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)" }}
                className="bg-gradient-to-r from-red-500 to-pink-500 px-8 py-4 rounded-full font-semibold text-lg text-white hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Emergency Care
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
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    ABOUT MOLECULAR MAGIC
                  </span>
                </h2>
                <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
                  We're not just pharmacists - we're molecular magicians, health alchemists, and wellness wizards
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-emerald-900">Our Story</h3>
                    <p className="text-emerald-700 leading-relaxed">
                      Born from a fusion of scientific precision and compassionate care, Molecular Magic 
                      emerged from the alchemy of traditional pharmacy wisdom and cutting-edge molecular science. 
                      We don't just dispense medications - we craft wellness solutions.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-emerald-900">Our Mission</h3>
                    <p className="text-emerald-700 leading-relaxed">
                      To transform every interaction into a magical moment of healing, where science 
                      dances with compassion and every prescription becomes a potion of wellness.
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
                    { number: "1000+", label: "Prescriptions Filled", color: "from-emerald-500 to-emerald-600" },
                    { number: "24/7", label: "Emergency Service", color: "from-teal-500 to-teal-600" },
                    { number: "25+", label: "Years Experience", color: "from-green-500 to-green-600" },
                    { number: "100%", label: "Accuracy Rate", color: "from-cyan-500 to-cyan-600" }
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                OUR SERVICES
              </span>
            </h2>
            <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
              Comprehensive pharmaceutical care with cutting-edge technology and personalized attention
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Health Consultation",
                description: "Personalized health consultations with expert pharmacists",
                features: ["Medication Reviews", "Health Assessments", "Lifestyle Advice"],
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: Pill,
                title: "Prescription Management",
                description: "Advanced prescription tracking and medication management",
                features: ["Auto Refills", "Interaction Checks", "Dosage Reminders"],
                color: "from-teal-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Emergency Care",
                description: "24/7 emergency pharmaceutical services and support",
                features: ["Urgent Medications", "Poison Control", "First Aid"],
                color: "from-red-500 to-pink-500"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-8 hover:border-emerald-300/70 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 relative overflow-hidden`}>
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  />
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-900">{service.title}</h3>
                <p className="text-emerald-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-emerald-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3"></div>
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
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    INTERACTIVE PERIODIC TABLE
                  </span>
                </h2>
                <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
                  Explore the elements that make up our world and your medications
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-8 shadow-xl"
              >
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { symbol: "H", name: "Hydrogen", value: "1.008", color: "from-emerald-400 to-emerald-600" },
                    { symbol: "O", name: "Oxygen", value: "15.999", color: "from-teal-400 to-teal-600" },
                    { symbol: "C", name: "Carbon", value: "12.011", color: "from-cyan-400 to-cyan-600" },
                    { symbol: "N", name: "Nitrogen", value: "14.007", color: "from-blue-400 to-blue-600" }
                  ].map((element, index) => (
                    <motion.div
                      key={element.symbol}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center cursor-pointer"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-r ${element.color} rounded-full flex flex-col items-center justify-center mx-auto mb-4 relative overflow-hidden`}>
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
                          className="absolute inset-0 bg-white/20 rounded-full"
                        />
                        <span className="text-2xl font-bold text-white">{element.symbol}</span>
                        <span className="text-xs text-white opacity-80">{element.value}</span>
                      </div>
                      <p className="text-emerald-700 font-semibold">{element.name}</p>
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
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    GET IN TOUCH
                  </span>
                </h2>
                <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
                  Ready to experience the magic of molecular medicine?
                </p>
              </motion.div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-emerald-900">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-emerald-900 font-semibold">Emergency Hotline</p>
                          <p className="text-emerald-700">(089) 2781782</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-emerald-900 font-semibold">Pharmacy Location</p>
                          <p className="text-emerald-700">Leixlip, Co. Kildare</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-emerald-900 font-semibold">Service Hours</p>
                          <p className="text-emerald-700">24/7 Emergency Service</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 text-emerald-900">Send Us a Message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-lg text-emerald-900 placeholder-emerald-600 focus:border-emerald-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-lg text-emerald-900 placeholder-emerald-600 focus:border-emerald-500 focus:outline-none"
                    />
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-lg text-emerald-900 placeholder-emerald-600 focus:border-emerald-500 focus:outline-none resize-none"
                    ></textarea>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
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
      <footer className="relative bg-white/90 backdrop-blur-md border-t border-emerald-200/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-emerald-900">MOLECULAR MAGIC</span>
              </div>
              <p className="text-emerald-700">Where science meets compassion in pharmaceutical care.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Services</h3>
              <ul className="space-y-2 text-emerald-700">
                <li>Health Consultation</li>
                <li>Prescription Management</li>
                <li>Emergency Care</li>
                <li>Health Education</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Contact</h3>
              <div className="space-y-2 text-emerald-700">
                <p>📞 (089) 2781782</p>
                <p>📧 info@molecularmagic.com</p>
                <p>📍 Leixlip, Co. Kildare</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Emergency</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 rounded-full font-semibold text-white w-full"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                24/7 Emergency
              </motion.button>
            </div>
          </div>
          
          <div className="border-t border-emerald-200/50 mt-8 pt-8 text-center text-emerald-700">
            <p>&copy; 2024 Molecular Magic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MolecularMagicTemplate
