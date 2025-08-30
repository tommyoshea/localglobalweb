'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Sparkles, Rocket, Star, Zap, Globe, Shield } from 'lucide-react'

function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    template: searchParams.get('template') || '',
    cmsPages: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const templates = [
    // Electrician Templates
    { id: 'voltage-vision', name: 'Voltage Vision - Electrician' },
    { id: 'spark-master', name: 'Spark Master Pro - Electrician' },
    { id: 'current-flow', name: 'Current Flow - Electrician' },
    
    // Plumber Templates
    { id: 'aqua-fusion', name: 'Aqua Fusion - Plumber' },
    { id: 'steam-punk', name: 'Steam Punk Pro - Plumber' },
    { id: 'crystal-clear', name: 'Crystal Clear - Plumber' },
    
    // Chemist Templates
    { id: 'quantum-pharmacy', name: 'Quantum Pharmacy - Chemist' },
    { id: 'community-care', name: 'Community Care Pharmacy - Chemist' },
    { id: 'luxury-apothecary', name: 'Luxury Apothecary - Chemist' },
    
    // Solicitor Templates
    { id: 'quantum-justice', name: 'Quantum Justice - Solicitor' },
    { id: 'heritage-law', name: 'Heritage Law Chambers - Solicitor' },
    { id: 'urban-advocacy', name: 'Urban Advocacy - Solicitor' },
    
    // Custom option
    { id: 'custom', name: 'Custom Design' }
  ]

  const budgets = [
            { value: 'under-500', label: 'Under €500' },
        { value: '500-1000', label: '€500 - €1,000' },
        { value: '1000-2000', label: '€1,000 - €2,000' },
        { value: '2000+', label: '€2,000+' }
  ]

  const timelines = [
    { value: 'asap', label: 'As soon as possible' },
    { value: '1-2-weeks', label: '1-2 weeks' },
    { value: '1-month', label: '1 month' },
    { value: 'flexible', label: 'Flexible' }
  ]

  const cmsPagesOptions = [
    { value: '0', label: 'No CMS - Static pages only (€0)' },
    { value: '1', label: '1 page editable (€100)' },
    { value: '2', label: '2 pages editable (€200)' },
    { value: '3', label: '3 pages editable (€300)' },
    { value: '4', label: '4 pages editable (€400)' },
    { value: '5', label: '5 pages editable (€500)' },
    { value: '6', label: '6 pages editable (€600)' },
    { value: '7', label: '7 pages editable (€700)' },
    { value: '8', label: '8 pages editable (€800)' },
    { value: '9', label: '9 pages editable (€900)' },
    { value: '10', label: '10 pages editable (€1,000)' },
    { value: 'custom', label: 'Custom number of pages' }
  ]

  const features = [
    { icon: Zap, text: 'Lightning Fast', color: 'text-yellow-400' },
    { icon: Shield, text: 'Secure & Reliable', color: 'text-green-400' },
    { icon: Star, text: 'Award Winning', color: 'text-purple-400' },
    { icon: Rocket, text: 'Quick Launch', color: 'text-cyan-400' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          template: '',
          cmsPages: '',
          budget: '',
          timeline: '',
          message: ''
        })
      } else {
        throw new Error(result.error || 'Something went wrong')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit(e as any)
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => {
            // Use consistent seed for server/client hydration
            const seed = i * 0.13;
            const left = Math.round((Math.sin(seed) * 50 + 50) * 100) / 100;
            const top = Math.round((Math.cos(seed) * 50 + 50) * 100) / 100;
            const duration = 3 + (i % 3) * 0.6;
            const delay = (i % 4) * 0.5;
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                }}
              />
            );
          })}
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg"
          >
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              🚀 Let's Build Something Amazing
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="text-white">Your Business?</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-cyan-100 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              Tell us about your vision and we&apos;ll make it a reality. 
              <span className="text-yellow-300 font-semibold"> No tech headaches.</span> 
              <span className="text-pink-300 font-semibold"> Just results.</span>
            </motion.p>

            {/* Features Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-white/20">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <p className="text-white/90 font-bold text-sm">{feature.text}</p>
                </motion.div>
              ))}
          </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Get in Touch
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Let's Start
                  </span>
                  <br />
                  <span className="text-gray-900">Your Project</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We&apos;re here to help bring your digital vision to life. 
                  Whether you have a specific idea or need guidance, 
                                      we&apos;re ready to collaborate.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@localglobalweb.com</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">(089) 2781782</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/30 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">Leixlip, Co. Kildare</p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  Why Choose Us?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-semibold">Fast turnaround</span> (5-7 business days)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-semibold">Mobile-responsive design</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-semibold">SEO-optimized structure</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-semibold">Unlimited revisions</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl p-8"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:shadow-xl inline-flex items-center"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="(089) 2781782"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-sm font-bold text-gray-700 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="Your Business Name"
                      />
                    </div>
                  </div>

                  <div>
                    {/* Template Selection Indicator */}
                    {formData.template && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-cyan-800">
                              Template Selected: {templates.find(t => t.id === formData.template)?.name}
                            </p>
                            <p className="text-xs text-cyan-600">
                              Great choice! This template will be used as the foundation for your website.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    <label htmlFor="template" className="block text-sm font-bold text-gray-700 mb-2">
                      Preferred Template
                    </label>
                    <select
                      id="template"
                      name="template"
                      value={formData.template}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                        formData.template ? 'border-cyan-300 bg-cyan-50' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a template (optional)</option>
                      {templates.map((template) => (
                        <option key={template.id} value={template.id}>
                          {template.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cmsPages" className="block text-sm font-bold text-gray-700 mb-2">
                      Content Management System (CMS)
                    </label>
                    <select
                      id="cmsPages"
                      name="cmsPages"
                      value={formData.cmsPages}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    >
                      <option value="">Select how many pages you want editable</option>
                      {cmsPagesOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-sm text-gray-500 mt-2">
                      Choose how many pages you want to be able to edit yourself. Each editable page costs €100.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-bold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget) => (
                          <option key={budget.value} value={budget.value}>
                            {budget.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-bold text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline.value} value={timeline.value}>
                            {timeline.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      onKeyDown={handleKeyDown}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none bg-white/50 backdrop-blur-sm"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Press Ctrl+Enter to submit
                    </p>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  )
}
