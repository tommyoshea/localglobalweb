'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  HelpCircle, 
  Rocket, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Clock,
  Globe,
  Shield,
  Zap,
  Star,
  MessageSquare
} from 'lucide-react'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Our standard websites are completed in 3-4 weeks from start to finish. This includes design, development, testing, and going live. Rush projects can be completed faster if needed."
    },
    {
      question: "How much does a website cost?",
      answer: "Our website packages start from €199. The final cost depends on your chosen template, number of CMS pages (€100 per editable page), and any custom features. We provide transparent pricing with no hidden fees."
    },
    {
      question: "Do I need to know how to code?",
      answer: "No coding knowledge required! We handle all the technical work. If you choose CMS pages, you'll get a user-friendly interface to update content, images, and text yourself."
    },
    {
      question: "Can I edit my website after it's live?",
      answer: "Yes! Each CMS page costs €100 and gives you full editing capabilities. You can update text, images, and content through our easy-to-use interface without any technical knowledge."
    },
    {
      question: "Do you provide hosting and domain?",
      answer: "No, hosting costs €194.49 per annum and domain name typically costs €4.00. These are NOT included in any template price. We can help you set these up, but they are separate costs."
    },
    {
      question: "What if I don't like the design?",
      answer: "We work closely with you throughout the process. You'll see the design before it goes live and we make unlimited revisions until you're 100% satisfied."
    },
    {
      question: "Is my website mobile-friendly?",
      answer: "Absolutely! All our websites are fully responsive and work perfectly on phones, tablets, and desktop computers. Mobile optimization is included in every package."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide ongoing support and maintenance. We're here to help with updates, changes, and any questions you have after your website goes live."
    },
    {
      question: "Can I change my template later?",
      answer: "Yes, but an additional one-off cost will apply. While it's best to choose the right template from the start, we can redesign your website later if needed. We'll work with you to find the perfect solution."
    },
    {
      question: "What makes your websites different?",
      answer: "We focus on quality, speed, and customer service. Our websites are fast-loading, SEO-optimized, and designed to help your business grow. Plus, we're here for you every step of the way."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const quickStats = [
    { icon: Clock, label: '3-4 Weeks', description: 'Average build time' },
    { icon: null, label: 'From €199', description: 'Starting price', customIcon: '€' },
    { icon: Globe, label: 'Mobile Ready', description: 'All devices' },
    { icon: Shield, label: 'Quality Assured', description: '100% satisfaction' }
  ]

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
            const seed = i * 0.18;
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
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )
          })}
        </div>

        <div className="container-max relative z-10 flex items-center justify-center min-h-screen text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm"
            >
              <HelpCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-semibold text-cyan-300 mb-4 tracking-wider uppercase"
            >
              Frequently Asked Questions
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8">
              Got
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Questions?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Everything you need to know about our website development process.
              <span className="text-cyan-300 font-bold"> Simple answers to common questions.</span>
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="group bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:shadow-white/25 inline-flex items-center"
              tabIndex={0}
              aria-label="Get started with your website"
            >
              <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Still Have Questions?
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {stat.customIcon ? (
                    <span className="text-white font-bold text-2xl">{stat.customIcon}</span>
                  ) : (
                    <stat.icon className="w-8 h-8 text-white" />
                  )}
                </div>
                <div className="text-2xl font-black text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <HelpCircle className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase"
            >
              Common Questions
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Everything You
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Need to Know
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Quick answers to the most frequently asked questions about our website development services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                    id={`faq-answer-${index}`}
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm"
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white max-w-3xl mx-auto leading-relaxed">
              Still have questions? Contact us directly and we'll be happy to help.
              <span className="text-yellow-300 font-bold"> Let's build your perfect website together.</span>
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="group bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:shadow-white/25 inline-flex items-center"
              tabIndex={0}
              aria-label="Contact us for more information"
            >
              <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
