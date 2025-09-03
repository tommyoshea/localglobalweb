'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Rocket, Star, Shield, Zap, ArrowUp, Heart, Globe, Award } from 'lucide-react'
import Logo from './Logo'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Web Design', href: '/templates' },
      { name: 'Responsive Design', href: '/templates' },
      { name: 'SEO Optimization', href: '/about' },
      { name: 'Custom Branding', href: '/contact' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Process', href: '/process' },
      { name: 'Portfolio', href: '/templates' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'Help Center', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Support', href: '/contact' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ]
  }

  const features = [
    { icon: Zap, text: 'Lightning Fast', color: 'text-yellow-400', bgColor: 'from-yellow-500/20 to-orange-500/20' },
    { icon: Shield, text: 'Secure & Reliable', color: 'text-green-400', bgColor: 'from-green-500/20 to-emerald-500/20' },
    { icon: Star, text: 'Award Winning', color: 'text-purple-400', bgColor: 'from-purple-500/20 to-pink-500/20' },
    { icon: Rocket, text: 'Quick Launch', color: 'text-cyan-400', bgColor: 'from-cyan-500/20 to-blue-500/20' }
  ]

  const stats = [
    { number: '', label: 'Happy Clients', icon: Heart },
    { number: '99%', label: 'Success Rate', icon: Award },
    { number: '< 2s', label: 'Load Time', icon: Zap },
    { number: 'Mon-Fri', label: 'Support', icon: Shield }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          // Use consistent seed for server/client hydration
          const seed = i * 0.15;
                      const left = Math.round((Math.sin(seed) * 50 + 50) * 100) / 100;
            const top = Math.round((Math.cos(seed) * 50 + 50) * 100) / 100;
          const duration = 4 + (i % 4) * 0.75;
          const delay = (i % 5) * 0.6;

  return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.6, 0.2],
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
        {/* Enhanced Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 border border-white/20 shadow-lg`}>
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
              </div>
              <p className="text-white/90 font-bold text-sm">{feature.text}</p>
            </motion.div>
          ))}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link
              href="/"
              className="flex items-center space-x-3 mb-8 group"
              tabIndex={0}
              aria-label="Go to homepage"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <Logo className="w-28 h-7" />
            </Link>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              We craft stunning, lightning-fast websites that turn visitors into customers. 
              <span className="text-cyan-300 font-semibold"> No tech headaches.</span> 
              <span className="text-purple-300 font-semibold"> Just results.</span>
            </p>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <span>hello@localglobalweb.com</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-300 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-blue-400" />
              </div>
                <span>(089) 2781782</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-purple-300 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5 text-purple-400" />
              </div>
                <span>Leixlip, Co. Kildare</span>
              </motion.div>
              </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-8 text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              Services
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-300 transition-all duration-300 font-medium group flex items-center"
                    tabIndex={0}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-8 text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Star className="w-4 h-4 text-white" />
              </div>
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-300 transition-all duration-300 font-medium group flex items-center"
                    tabIndex={0}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-8 text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Shield className="w-4 h-4 text-white" />
              </div>
              Support
            </h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-300 transition-all duration-300 font-medium group flex items-center"
                    tabIndex={0}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} <span className="text-cyan-300 font-semibold">LocalGlobalWeb</span>. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-300 font-medium"
              tabIndex={0}
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-300 font-medium"
              tabIndex={0}
              aria-label="Terms of Service"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:shadow-cyan-500/25 z-50"
          tabIndex={0}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
