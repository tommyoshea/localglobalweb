'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Droplet, Anchor, Fish, Eye, Heart, Download } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AquaFusionPortfolioPage = () => {
  const router = useRouter()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 'coral-resort',
      category: 'residential',
      title: 'Coral Resort Complex',
      description: 'Complete underwater-themed plumbing system for luxury resort',
      beforeImage: '🏠',
      afterImage: '🏖️',
      features: [
        'Advanced Water Filtration System',
        'Smart Irrigation Network',
        'Eco-Friendly Waste Management',
        'Automated Pool Systems',
        'Emergency Backup Systems'
      ],
      duration: '3 months',
      budget: '€150,000',
      rating: 5
    },
    {
      id: 'deep-sea-mansion',
      category: 'residential',
      title: 'Deep Sea Mansion',
      description: 'Luxury home with state-of-the-art plumbing technology',
      beforeImage: '🏚️',
      afterImage: '🏰',
      features: [
        'Smart Home Integration',
        'Water Conservation Systems',
        'Luxury Spa Installation',
        'Wine Cellar Climate Control',
        'Security System Integration'
      ],
      duration: '2 months',
      budget: '€75,000',
      rating: 5
    },
    {
      id: 'ocean-office',
      category: 'commercial',
      title: 'Ocean Office Tower',
      description: 'Modern office building with sustainable plumbing solutions',
      beforeImage: '🏢',
      afterImage: '🌊',
      features: [
        'Commercial Grade Systems',
        'Water Recycling Plant',
        'Employee Wellness Centers',
        'Green Building Certification',
        '24/7 Monitoring'
      ],
      duration: '6 months',
      budget: '€300,000',
      rating: 5
    },
    {
      id: 'marine-hospital',
      category: 'commercial',
      title: 'Marine Medical Center',
      description: 'Healthcare facility with specialized plumbing requirements',
      beforeImage: '🏥',
      afterImage: '⚕️',
      features: [
        'Sterile Water Systems',
        'Medical Gas Installation',
        'Emergency Backup Power',
        'Infection Control Systems',
        'Compliance Certification'
      ],
      duration: '4 months',
      budget: '€200,000',
      rating: 5
    },
    {
      id: 'tidal-restaurant',
      category: 'hospitality',
      title: 'Tidal Restaurant',
      description: 'Fine dining establishment with underwater ambiance',
      beforeImage: '🍽️',
      afterImage: '🐟',
      features: [
        'Commercial Kitchen Systems',
        'Aquarium Integration',
        'Wine Storage Systems',
        'Outdoor Dining Areas',
        'Entertainment Systems'
      ],
      duration: '2 months',
      budget: '€90,000',
      rating: 5
    },
    {
      id: 'wave-hotel',
      category: 'hospitality',
      title: 'Wave Hotel & Spa',
      description: 'Boutique hotel with luxury spa facilities',
      beforeImage: '🏨',
      afterImage: '💆',
      features: [
        'Luxury Spa Systems',
        'Guest Room Automation',
        'Pool & Jacuzzi Installation',
        'Restaurant Plumbing',
        'Wellness Center'
      ],
      duration: '5 months',
      budget: '€180,000',
      rating: 5
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const waterParticles = Array.from({ length: 12 }, (_, i) => i)

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
                Ocean of Projects
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
              Dive into our portfolio of underwater-inspired plumbing transformations. 
              From coral reefs to deep sea adventures, we've made waves in every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'all', name: 'All Projects', icon: '🌊' },
              { id: 'residential', name: 'Residential', icon: '🏠' },
              { id: 'commercial', name: 'Commercial', icon: '🏢' },
              { id: 'hospitality', name: 'Hospitality', icon: '🏨' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-cyan-200 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-b from-blue-800 to-blue-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-300/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                {/* Project Images */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">{project.beforeImage}</div>
                    <div className="text-sm opacity-80">Before</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-2">{project.afterImage}</div>
                      <div className="text-sm opacity-80">After</div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-cyan-200 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-cyan-200">Duration:</span>
                      <span className="text-white">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-200">Budget:</span>
                      <span className="text-white">{project.budget}</span>
                    </div>
                  </div>

                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-cyan-300/30"
                    >
                      <h4 className="text-white font-semibold mb-3">Features:</h4>
                      <ul className="space-y-2 mb-4">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-cyan-200 text-sm">
                            <CheckCircle className="w-3 h-3 mr-2 text-cyan-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                          <Eye className="w-4 h-4 inline mr-1" />
                          View Details
                        </button>
                        <button className="px-3 py-2 bg-white/20 text-cyan-200 rounded-lg hover:bg-white/30 transition-all duration-300">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Success Numbers
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed', icon: '🏆' },
              { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '24/7', label: 'Emergency Support', icon: '🚨' },
              { number: '15+', label: 'Years Experience', icon: '📅' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-cyan-200">{stat.label}</div>
              </motion.div>
            ))}
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
                Start Your Project
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                <Download className="w-5 h-5 inline mr-2" />
                Download Portfolio
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

export default AquaFusionPortfolioPage
