'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Droplet, Anchor, Fish, Send, MessageCircle, Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AquaFusionContactPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Message sent! We\'ll dive into your request soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Emergency Hotline',
      value: '1-800-AQUA-FIX',
      description: '24/7 emergency response'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'dive@aquafusion.com',
      description: 'General inquiries'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Headquarters',
      value: 'Deep Blue District, Ocean City',
      description: 'Main office location'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      value: 'Mon-Fri: 8AM-6PM',
      description: 'Emergency service 24/7'
    }
  ]

  const services = [
    'Pipe Labyrinth Solutions',
    'Water Flow Optimization',
    'Emergency Deep Dive',
    'General Consultation',
    'Other'
  ]

  const waterParticles = Array.from({ length: 8 }, (_, i) => i)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 overflow-hidden relative">
      {/* Animated Water Particles */}
      {waterParticles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-300 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

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
                { name: 'Home', path: '/templates/aqua-fusion' },
                { name: 'Services', path: '/templates/aqua-fusion/services' },
                { name: 'Portfolio', path: '/templates/aqua-fusion/portfolio' },
                { name: 'About', path: '/templates/aqua-fusion/about' },
                { name: 'Contact', path: '/templates/aqua-fusion/contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => router.push(item.path)}
                  className="text-cyan-200 hover:text-white transition-colors duration-300 relative group bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </motion.nav>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Emergency Call
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Coral Reef Contact
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
              Ready to dive into excellence? Let's make waves together! 
              Contact us for a free consultation and quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-300/30 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {info.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                <p className="text-cyan-400 font-medium mb-1">{info.value}</p>
                <p className="text-cyan-200 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-blue-800 to-blue-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyan-200 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-cyan-300/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-400"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-200 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-cyan-300/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyan-200 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-cyan-300/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-400"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-200 mb-2">Service Needed *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-cyan-300/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-blue-900 text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-cyan-200 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/20 border border-cyan-300/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-400 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-300/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Emergency Service</h3>
                    <p className="text-red-200">Available 24/7</p>
                  </div>
                </div>
                <p className="text-cyan-200 mb-4">
                  Don't let plumbing problems sink your day! Our emergency response team is ready to dive in and save the day.
                </p>
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300">
                  Call Emergency: 1-800-AQUA-FIX
                </button>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </button>
                  <button className="w-full bg-white/20 text-cyan-200 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Live Chat
                  </button>
                  <button className="w-full bg-white/20 text-cyan-200 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center">
                    <Fish className="w-5 h-5 mr-2" />
                    Download Brochure
                  </button>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
                <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Monday - Friday</span>
                    <span className="text-white font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Saturday</span>
                    <span className="text-white font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Sunday</span>
                    <span className="text-white font-semibold">Emergency Only</span>
                  </div>
                  <div className="pt-3 border-t border-cyan-300/30">
                    <div className="flex justify-between">
                      <span className="text-cyan-200">Emergency Service</span>
                      <span className="text-red-400 font-semibold">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Find Our Underwater Base
              </span>
            </h2>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
            <div className="h-64 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold mb-2">Deep Blue District</h3>
                <p className="text-cyan-100">Ocean City, Underwater Avenue</p>
                <p className="text-cyan-100">Coordinates: 40°42'51"N 74°00'21"W</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Make Waves?
              </span>
            </h2>
            <p className="text-xl text-cyan-200 mb-8">
              Let's transform your space with our underwater-inspired plumbing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                <Mail className="w-5 h-5 inline mr-2" />
                Email Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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

export default AquaFusionContactPage
