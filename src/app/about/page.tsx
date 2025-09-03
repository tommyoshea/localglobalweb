'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import { Users, Target, Award, Heart, Sparkles, Rocket, Star, Zap, Globe, Shield, TrendingUp, ArrowRight } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower small businesses with professional, affordable websites that help them compete in the digital marketplace.',
      color: 'from-emerald-400 to-green-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-green-100'
    },
    {
      icon: Heart,
      title: 'Our Passion',
      description: 'We love helping entrepreneurs bring their vision to life through beautiful, functional web design.',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-100'
    },
    {
      icon: Award,
      title: 'Our Quality',
      description: 'Every website we create meets the highest standards of design, functionality, and user experience.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-100'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A dedicated group of designers and developers committed to your success and satisfaction.',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }
  ]

  const stats = [
    { number: '', label: 'Happy Clients', icon: Heart },
    { number: '99%', label: 'Success Rate', icon: Award },
    { number: '< 2s', label: 'Load Time', icon: Zap },
    { number: 'Mon-Fri', label: 'Support', icon: Shield }
  ]

  const process = [
    {
      step: '01',
      title: 'Choose Your Template',
      description: 'Browse our collection of stunning, professional templates designed for your industry.',
      icon: Sparkles,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      step: '02',
      title: 'Customize & Brand',
      description: 'We customize colors, content, and branding to match your unique business identity.',
      icon: Star,
      color: 'from-purple-400 to-pink-500'
    },
    {
      step: '03',
      title: 'Launch & Grow',
      description: 'Your website goes live with SEO optimization and ongoing support to help you succeed.',
      icon: Rocket,
      color: 'from-green-400 to-emerald-500'
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
            // Use consistent seed for server/client hydration
            const seed = i * 0.12;
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
              About LocalGlobalWeb
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-8"
            >
              <Logo className="w-40 h-10" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <span className="text-white">Excellence</span>
            </motion.h1>
            
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-cyan-100 mb-10 leading-relaxed max-w-4xl"
            >
              We believe every business has a unique story worth telling. Our mission is to help you share that story with the world through 
              <span className="text-yellow-300 font-semibold"> beautiful, professional websites</span> that 
              <span className="text-pink-300 font-semibold"> build trust and drive results</span>.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-white/20">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-cyan-200 font-semibold text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
          </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg"
              >
                <Globe className="w-5 h-5 mr-2" />
                Our Story
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  From Vision to
                </span>
                <br />
                <span className="text-gray-900">Reality</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded with a simple mission: to make professional web design accessible to small businesses everywhere. We understand that when you&apos;re running a business, 
                  <span className="text-blue-600 font-semibold"> every penny counts, and every minute matters</span>.
                </p>
                <p>
                  That&apos;s why we&apos;ve created a streamlined process that delivers beautiful, responsive websites at prices that won&apos;t break the bank. We believe that every business deserves a website that looks as professional as the big players, regardless of their budget.
                </p>
                <p>
                  Our team combines years of design and development experience with a deep understanding of what small businesses need to succeed online. 
                  <span className="text-purple-600 font-semibold"> We don&apos;t just build websites – we build digital storefronts that work as hard as you do</span>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl"
            >
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    Why We&apos;re Different
                  </h3>
                  <p className="text-gray-600 text-lg">
                    We focus on what matters most to small businesses
                  </p>
                </div>
                
                <div className="space-y-6">
                  {process.map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg"
          >
              <Star className="w-5 h-5 mr-2" />
              What Drives Us
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Our Core
              </span>
              <br />
              <span className="text-gray-900">Values</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our core values guide everything we do, from design decisions to customer service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`${value.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {value.description}
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
              <TrendingUp className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
              Ready to Start Your Story?
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white max-w-3xl mx-auto leading-relaxed">
              Let&apos;s work together to create a website that tells your story and helps your business grow.
              <span className="text-yellow-300 font-bold"> Your success story starts here.</span>
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="group bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:shadow-white/25 inline-flex items-center"
              tabIndex={0}
              aria-label="Get started with your website"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


