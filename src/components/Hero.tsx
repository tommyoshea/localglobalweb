'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Smartphone, Star, Rocket, Target, Award, Palette } from 'lucide-react'
import Logo from './Logo' // Added import for Logo

const Hero = () => {
  const handleGetStarted = () => {
    window.location.href = '/contact'
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleGetStarted()
    }
  }

  return (
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
          const seed = i * 0.1;
          const left = Math.round((Math.sin(seed) * 50 + 50) * 100) / 100;
          const top = Math.round((Math.cos(seed) * 50 + 50) * 100) / 100;
          const duration = 3 + (i % 3) * 0.5;
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
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg"
            >
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              🚀 Transform Your Business Online
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <Logo className="w-40 h-10" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Digital Dreams
              </span>
              <br />
              <span className="text-white">Come True</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-cyan-100 mb-10 leading-relaxed"
            >
              We craft stunning, lightning-fast websites that turn visitors into customers. 
              <span className="text-yellow-300 font-semibold"> No tech headaches.</span> 
              <span className="text-pink-300 font-semibold"> Just results.</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                onKeyDown={handleKeyDown}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:shadow-cyan-500/25 inline-flex items-center justify-center"
                tabIndex={0}
                aria-label="Choose your template and get started"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Launch Your Website
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Link
                href="/templates"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
                tabIndex={0}
                aria-label="Browse our template gallery"
              >
                  <Palette className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Explore Templates
              </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12"
            >
              <div className="flex items-center text-cyan-200">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="font-semibold">Happy Clients</span>
              </div>
              <div className="flex items-center text-cyan-200">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                <span className="font-semibold">99% Success Rate</span>
              </div>
              <div className="flex items-center text-cyan-200">
                <Award className="w-5 h-5 text-purple-400 mr-2" />
                <span className="font-semibold">Award Winning</span>
            </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Lightning Fast
              </h3>
              <p className="text-cyan-100">
                Blazing fast websites that load in milliseconds
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Mobile Perfect
              </h3>
              <p className="text-cyan-100">
                Stunning on every device, every screen size
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-yellow-500/25 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Stunning Design
              </h3>
              <p className="text-cyan-100">
                Beautiful templates that make your brand shine
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-green-500/25 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Quick Launch
              </h3>
              <p className="text-cyan-100">
                Your website live in days, not months
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
