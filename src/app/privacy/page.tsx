'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  ArrowRight, 
  Eye, 
  Database, 
  Users, 
  Globe, 
  Clock,
  MessageSquare
} from 'lucide-react'

export default function Privacy() {
  const privacySections = [
    {
      title: "Information We Collect",
      icon: Database,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
      content: [
        "Contact information (name, email, phone number) when you fill out our form.",
        "Business information you provide for website development.",
        "Website usage data to improve our services.",
        "Communication records when you contact us for support."
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      content: [
        "To provide website design and development services.",
        "To communicate with you about your project.",
        "To send important updates about your website.",
        "To improve our services and customer experience."
      ]
    },
    {
      title: "Data Protection",
      icon: Lock,
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
      content: [
        "We use industry-standard security measures to protect your data.",
        "Your information is stored securely and accessed only by authorized personnel.",
        "We never sell or rent your personal information to third parties.",
        "We regularly review and update our security practices."
      ]
    },
    {
      title: "Data Sharing",
      icon: Globe,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-100",
      content: [
        "We only share your data with trusted service providers (hosting, domain).",
        "We may share information if required by law or to protect our rights.",
        "We never share your data for marketing purposes without permission.",
        "Any third-party services we use have their own privacy policies."
      ]
    },
    {
      title: "Your Rights",
      icon: Eye,
      color: "from-red-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-100",
      content: [
        "You can request access to your personal information.",
        "You can ask us to correct or update your data.",
        "You can request deletion of your information (with limitations).",
        "You can opt out of marketing communications at any time."
      ]
    }
  ]

  const keyPoints = [
    {
      icon: Shield,
      title: "Secure & Protected",
      description: "Your data is safe with us"
    },
    {
      icon: Lock,
      title: "Never Sold",
      description: "We don't sell your information"
    },
    {
      icon: Users,
      title: "Limited Access",
      description: "Only authorized personnel"
    },
    {
      icon: Clock,
      title: "Regular Updates",
      description: "We keep security current"
    }
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
            const seed = i * 0.17;
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
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-semibold text-cyan-300 mb-4 tracking-wider uppercase"
            >
              Privacy Policy
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8">
              Your Privacy
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Matters
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              We protect your personal information with the highest standards.
              <span className="text-cyan-300 font-bold"> Simple, clear, and secure.</span>
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
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">{point.title}</div>
                <div className="text-sm text-gray-600">{point.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
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
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase"
            >
              Our Privacy Commitment
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              How We Protect
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Data
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Clear, simple privacy practices that protect your information.
            </p>
          </motion.div>

          <div className="space-y-8">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${section.bgColor} p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm`}
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg`}>
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900">{section.title}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Questions About
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Privacy?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              We're committed to transparency about how we handle your data.
              <span className="text-blue-600 font-bold"> Contact us with any questions.</span>
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:shadow-blue-500/25 inline-flex items-center"
              tabIndex={0}
              aria-label="Contact us about privacy"
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
