'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  FileText, 
  Palette, 
  Code, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Zap, 
  Globe, 
  Shield,
  Clock,
  MessageSquare,
  Settings,
  Eye,
  TrendingUp
} from 'lucide-react'

export default function Process() {
  const processSteps = [
    {
      step: '01',
      title: 'Fill Out Our Form',
      description: 'Tell us about your business, choose your template, and specify your requirements. It only takes 2 minutes!',
      icon: FileText,
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-100',
      details: [
        'Business information',
        'Template selection',
        'CMS pages needed',
        'Budget & timeline'
      ]
    },
    {
      step: '02',
      title: 'We Review & Plan',
      description: 'Our team reviews your requirements and creates a custom plan tailored to your business needs.',
      icon: Settings,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-100',
      details: [
        'Requirements analysis',
        'Custom strategy',
        'Timeline planning',
        'Resource allocation'
      ]
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'We customize your chosen template with your branding, content, and specific features.',
      icon: Code,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-100',
      details: [
        'Custom branding',
        'Content integration',
        'Feature development',
        'Mobile optimization'
      ]
    },
    {
      step: '04',
      title: 'Review & Refine',
      description: 'You review the website and we make any adjustments to ensure it perfectly matches your vision.',
      icon: Eye,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-100',
      details: [
        'Design review',
        'Content approval',
        'Functionality testing',
        'Final adjustments'
      ]
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Your website goes live with SEO optimization, and we provide ongoing support and maintenance.',
      icon: Rocket,
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-red-50 to-pink-100',
      details: [
        'Domain setup',
        'SEO optimization',
        'Performance monitoring',
        'Ongoing support'
      ]
    }
  ]

  const timeline = [
    { phase: 'Day 1-2', activity: 'Form Review & Planning', duration: '1-2 days' },
    { phase: 'Day 3-7', activity: 'Design & Development', duration: '3-5 days' },
    { phase: 'Day 8-9', activity: 'Review & Refinements', duration: '1-2 days' },
    { phase: 'Day 10', activity: 'Launch & Go Live', duration: 'Same day' }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Your website ready in 3-4 weeks',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Regular updates throughout the process',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Thorough testing before launch',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'SEO optimized for better rankings',
      color: 'from-yellow-400 to-orange-500'
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
            const seed = i * 0.15;
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
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-semibold text-cyan-300 mb-4 tracking-wider uppercase"
            >
              Our Process
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8">
              From Form to
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Going Live
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              A simple, transparent process that gets your website online in just 3-4 weeks.
              <span className="text-cyan-300 font-bold"> No surprises, no delays.</span>
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="group bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:shadow-white/25 inline-flex items-center"
              tabIndex={0}
              aria-label="Start your website project"
            >
              <FileText className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-white">
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
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase"
            >
              Simple Steps
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Your Journey to
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Online Success
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We've streamlined our process to make getting your website online as simple and stress-free as possible.
            </p>
          </motion.div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${step.bgColor} p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-600 mb-1">Step {step.step}</div>
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl`}>
                      <span className="text-4xl font-black text-white">{step.step}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Timeline
              </span>
              <br />
              <span className="text-gray-900">Overview</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From initial contact to going live, here's what to expect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-sm font-bold text-blue-600 mb-2">{item.phase}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.activity}</h3>
                <div className="text-lg font-semibold text-gray-600">{item.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Why Choose
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We've designed our process to be efficient, transparent, and focused on your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {benefit.description}
                </p>
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
              Ready to Start?
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white max-w-3xl mx-auto leading-relaxed">
              Begin your journey to online success today. Fill out our form and we'll get started right away.
              <span className="text-yellow-300 font-bold"> Your website is just 3-4 weeks away.</span>
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="group bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:shadow-white/25 inline-flex items-center"
              tabIndex={0}
              aria-label="Start your website project"
            >
              <FileText className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
