'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Settings, Cog, Wrench, Zap, Gauge, Hammer, Camera, Search, Shield } from 'lucide-react'

const SteamPunkTemplate = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-full bg-white overflow-hidden relative">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Steam Pro</h1>
                <p className="text-gray-600 text-sm">Professional Drainage Solutions</p>
              </div>
            </motion.div>
            
            <motion.nav
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              {[
                { id: 'home', name: 'Home' },
                { id: 'about', name: 'About Us' },
                { id: 'services', name: 'Services' },
                { id: 'contact', name: 'Contact Us' }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`transition-colors duration-300 font-medium ${
                    activeSection === item.id 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.nav>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Call Us Now
            </motion.button>
          </div>
        </div>
      </header>

      {/* Scrollable Content Container */}
      <div className="overflow-y-auto">
        {/* Content Sections */}
        {activeSection === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
              <div className="container mx-auto px-6 text-center">
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
                    className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
                  >
                    Emergency Sewer
                    <br />
                    <span className="text-blue-600">Clearance</span>
                  </motion.h1>
              
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
                  >
                    We provide fast and reliable service to customers nationwide.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <Phone className="w-5 h-5 inline mr-2" />
                      Call NOW
                    </button>
                    <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                      <Settings className="w-5 h-5 inline mr-2" />
                      Get In Touch
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Emergency Services Grid */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🚨',
                      title: 'Emergency Sewer Clearance',
                      description: 'We provide fast and reliable service to customers nationwide.',
                      action: 'Call NOW'
                    },
                    {
                      icon: '🐀',
                      title: 'Rodent Removal',
                      description: 'We start by identifying the source of the problem, Once identified, we can then provide a range of solutions',
                      action: 'Call Us Now'
                    },
                    {
                      icon: '🔧',
                      title: 'Drain Servicing',
                      description: 'Our advanced tools and expertise enable precision drain cleaning restoring, a fully functioning system.',
                      action: 'Get In Touch'
                    }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
                        {service.action}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Our Services Section */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Our Services
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: '🔧',
                      title: 'Drain Repair',
                      description: 'Its vital to maintian the clearways in the Sewers, Regular checks and maintenance'
                    },
                    {
                      icon: '🚽',
                      title: 'Blocked Toilet',
                      description: 'At Steam Pro we ensure your facilities are cleared of all blockages, Get an instant quote!'
                    },
                    {
                      icon: '🐀',
                      title: 'Rodent Investigation',
                      description: 'Affordable same-day pest control. Highly trained technicians. Get an instant quote!'
                    },
                    {
                      icon: '📹',
                      title: 'CCTV Survey',
                      description: 'CCTV sewer inspections or CCTV pipe inspections, We provide full-color video reporting, Get instant Quote.'
                    }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      <div className="text-3xl mb-4">{service.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                      About Steam Pro
                    </h2>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      <strong>With over 20 years experience in the field, our team of engineers are fully equipped with state of art toolset capable of tackling all drainage issues with precision.</strong>
                    </p>
                    <div className="text-3xl font-bold text-blue-600">
                      <Phone className="w-8 h-8 inline mr-2" />
                      (089) 2781782
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    {[
                      {
                        icon: '⭐',
                        title: 'Our Promise',
                        description: 'At Steam Pro, we are committed to providing exceptional service and customer satisfaction. We take pride in our work and exceed expectations in all project we undertake.'
                      },
                      {
                        icon: '🕐',
                        title: '24 / 7 Callout',
                        description: 'Life can deliver unexpected events at any time, thats why at Steam Pro we\'re available for callout any time of the day or night.'
                      },
                      {
                        icon: '🏢',
                        title: 'Corporate Service',
                        description: 'Ensuring a professional image is crucial, which is why having a maintenance contract in place provides coverage for any unforeseen circumstances.'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-2xl">{item.icon}</div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'about' && (
          <div className="min-h-[80vh] bg-white py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                  About Steam Pro
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  With over 20 years experience in the field, our team of engineers are fully equipped with state of art toolset capable of tackling all drainage issues with precision.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    name: 'John Smith',
                    role: 'Founder & Chief Engineer',
                    image: '👨‍🔧',
                    bio: 'Former Royal Navy engineer with 25+ years of drainage system expertise. Pioneer of modern drainage technology.'
                  },
                  {
                    name: 'Sarah Johnson',
                    role: 'Operations Director',
                    image: '👩‍💼',
                    bio: 'PhD in Civil Engineering. Expert in drainage systems and infrastructure management.'
                  }
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center"
                  >
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'services' && (
          <div className="min-h-[80vh] bg-white py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                  Our Services
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Professional drainage solutions with modern technology
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: '🔧',
                    title: 'Unblock Drains',
                    description: 'Professional drain unblocking with modern technology'
                  },
                  {
                    icon: '🚽',
                    title: 'Unblock Toilets',
                    description: 'Emergency toilet unblocking with instant response'
                  },
                  {
                    icon: '💧',
                    title: 'Drain Cleaning',
                    description: 'Advanced drain cleaning with precision tools'
                  },
                  {
                    icon: '🔨',
                    title: 'Drain Repair',
                    description: 'Expert drain repair and maintenance services'
                  },
                  {
                    icon: '📹',
                    title: 'CCTV Survey',
                    description: 'Full-color video reporting for pipe inspections'
                  },
                  {
                    icon: '👃',
                    title: 'Odour Tracing',
                    description: 'Professional odour detection and elimination'
                  },
                  {
                    icon: '🐀',
                    title: 'Rodent Investigation',
                    description: 'Affordable same-day pest control solutions'
                  },
                  {
                    icon: '🔍',
                    title: 'Drain Tracing',
                    description: 'Advanced drain location and mapping services'
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="min-h-[80vh] bg-white py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                  Contact Us
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Get in touch for professional drainage solutions
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
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold">Call Us Now</h3>
                      <p className="text-gray-600 text-xl font-bold">(089) 2781782</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold">Email</h3>
                      <p className="text-gray-600">info@steampro.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold">Address</h3>
                      <p className="text-gray-600">Leixlip, Co. Kildare</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-gray-800 font-semibold mb-4">Company</h3>
                    <p className="text-gray-600">Steam Pro Solutions Ltd</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gray-50 rounded-lg p-8 border border-gray-200"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 resize-none"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Home</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                  <li>Cookies Policy</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Unblock Drains</li>
                  <li>Unblock Toilets</li>
                  <li>Drain Cleaning</li>
                  <li>Drain Repair</li>
                  <li>CCTV Survey</li>
                  <li>Odour Trace</li>
                  <li>Rodent Investigation</li>
                  <li>Drain Tracing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    (089) 2781782
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Leixlip, Co. Kildare
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Tagline</h4>
                <p className="text-gray-300 italic">
                  <strong>Steam Pro - Clearing the way for a smoother tomorrow</strong>
                </p>
              </div>
            </div>
            <div className="text-center border-t border-gray-700 pt-6">
              <p className="text-gray-300">
                Copyright © 2024 Steam Pro Solutions Ltd. All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default SteamPunkTemplate
