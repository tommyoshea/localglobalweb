'use client'

import { motion } from 'framer-motion'
import { CheckCircle, DollarSign, Clock, Search, Smartphone, Palette, Zap, Shield, Users, TrendingUp, Star, Award, Rocket, ArrowRight } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Affordable Excellence',
      description: 'Premium quality websites that fit your budget perfectly',
      color: 'from-emerald-400 to-green-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-green-100',
      textColor: 'text-emerald-700'
    },
    {
      icon: Smartphone,
      title: 'Responsive Magic',
      description: 'Perfect on every device - from phones to 4K displays',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      textColor: 'text-blue-700'
    },
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Blazing fast websites that keep visitors engaged',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-100',
      textColor: 'text-orange-700'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built to rank high and get found by your customers',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-100',
      textColor: 'text-purple-700'
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Every design tailored to match your unique brand',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-100',
      textColor: 'text-pink-700'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-100',
      textColor: 'text-cyan-700'
    }
  ]

  const stats = [
    { number: '', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Success Rate', icon: Star },
    { number: '< 2s', label: 'Load Time', icon: Zap },
    { number: 'Mon-Fri', label: 'Support', icon: Award }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container-max relative z-10">
        {/* Header */}
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg"
          >
            <Star className="w-5 h-5 mr-2 animate-pulse" />
            Why Choose Us?
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Features That
            </span>
            <br />
            <span className="text-gray-900">Make Us Special</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We don&apos;t just build websites. We create digital experiences that 
            <span className="text-blue-600 font-semibold"> convert visitors into customers</span> and 
            <span className="text-purple-600 font-semibold"> grow your business</span>.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`${feature.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${feature.textColor} mb-4`}>
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10 p-12 md:p-16 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
          viewport={{ once: true }}
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm"
            >
              <TrendingUp className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Ready to Transform Your Business?
          </h3>
            
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful businesses who&apos;ve already taken their brand online with us. 
              <span className="text-yellow-300 font-bold"> Your success story starts here.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
                className="group bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:shadow-white/25 inline-flex items-center"
            tabIndex={0}
            aria-label="Get started with your website"
          >
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Launch Your Website
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/templates'}
                className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center"
                tabIndex={0}
                aria-label="Browse our template gallery"
              >
                <Palette className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Explore Templates
              </motion.button>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-8 mt-12 text-white/80"
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="font-semibold">No Hidden Fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="font-semibold">Quality Assured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="font-semibold">Ongoing Support</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
