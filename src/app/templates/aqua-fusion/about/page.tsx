'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Droplet, Anchor, Fish, Users, Award, Target, Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AquaFusionAboutPage = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('story')

  const team = [
    {
      name: 'Captain Marcus Blue',
      role: 'Founder & CEO',
      image: '👨‍💼',
      bio: 'Former marine biologist turned plumbing innovator. 20+ years of experience in underwater systems.',
      specialties: ['Deep Sea Systems', 'Marine Biology', 'Innovation']
    },
    {
      name: 'Dr. Coral Waters',
      role: 'Chief Technology Officer',
      image: '👩‍🔬',
      bio: 'PhD in Ocean Engineering. Expert in underwater robotics and smart plumbing systems.',
      specialties: ['Robotics', 'AI Integration', 'Research']
    },
    {
      name: 'Commander Reef',
      role: 'Operations Director',
      image: '👨‍🔧',
      bio: 'Former Navy diver with 15 years of commercial diving experience. Leads all underwater operations.',
      specialties: ['Diving Operations', 'Safety Protocols', 'Team Leadership']
    },
    {
      name: 'Siren Silva',
      role: 'Customer Experience Manager',
      image: '👩‍💻',
      bio: 'Marine conservation advocate. Ensures every project respects ocean ecosystems.',
      specialties: ['Customer Relations', 'Sustainability', 'Eco-Friendly Solutions']
    }
  ]

  const milestones = [
    {
      year: '2009',
      title: 'Deep Blue Beginnings',
      description: 'Founded with a vision to revolutionize plumbing through underwater technology'
    },
    {
      year: '2012',
      title: 'First Coral Project',
      description: 'Completed our first underwater-themed residential complex'
    },
    {
      year: '2015',
      title: 'Ocean Innovation Award',
      description: 'Recognized for breakthrough in sustainable plumbing systems'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Opened offices in 5 coastal cities worldwide'
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Launched smart underwater monitoring systems'
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Leading the industry in eco-friendly plumbing solutions'
    }
  ]

  const waterParticles = Array.from({ length: 10 }, (_, i) => i)

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
                Our Deep Story
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
              From the depths of the ocean to the heights of innovation. 
              Discover the team behind Aqua Fusion's underwater revolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'story', name: 'Our Story', icon: '📖' },
              { id: 'team', name: 'The Team', icon: '👥' },
              { id: 'mission', name: 'Mission', icon: '🎯' },
              { id: 'values', name: 'Values', icon: '💎' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-cyan-200 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gradient-to-b from-blue-800 to-blue-900">
        <div className="container mx-auto px-6">
          {activeTab === 'story' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  The Aqua Fusion Story
                </span>
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
                  <h3 className="text-2xl font-semibold text-white mb-4">🌊 How It All Began</h3>
                  <p className="text-cyan-200 leading-relaxed">
                    In 2009, Captain Marcus Blue, a former marine biologist, had a vision that would change the plumbing industry forever. 
                    After years of studying ocean ecosystems, he realized that the same principles that make the ocean so efficient could 
                    be applied to modern plumbing systems.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
                  <h3 className="text-2xl font-semibold text-white mb-4">🐠 The Underwater Revolution</h3>
                  <p className="text-cyan-200 leading-relaxed">
                    What started as a small team of ocean enthusiasts has grown into a global force in sustainable plumbing. 
                    Our underwater-inspired approach combines cutting-edge technology with nature's most efficient systems, 
                    creating solutions that are both beautiful and functional.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
                  <h3 className="text-2xl font-semibold text-white mb-4">🏆 Awards & Recognition</h3>
                  <p className="text-cyan-200 leading-relaxed">
                    Over the years, Aqua Fusion has been recognized with numerous awards for innovation, sustainability, 
                    and excellence in the plumbing industry. Our commitment to eco-friendly solutions has earned us 
                    the trust of clients worldwide.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Journey</h3>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-300/30">
                        <div className="text-cyan-400 font-bold text-lg">{milestone.year}</div>
                        <div className="text-white font-semibold text-xl mb-2">{milestone.title}</div>
                        <div className="text-cyan-200">{milestone.description}</div>
                      </div>
                      <div className="w-4 h-4 bg-cyan-400 rounded-full mx-4"></div>
                      <div className="w-32"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'team' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-12 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Meet Our Deep Sea Crew
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{member.image}</div>
                      <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                      <p className="text-cyan-400 font-medium">{member.role}</p>
                    </div>
                    
                    <p className="text-cyan-200 mb-6 leading-relaxed">{member.bio}</p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'mission' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-12 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Our Mission & Vision
                </span>
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                  </div>
                  <p className="text-cyan-200 leading-relaxed">
                    To revolutionize the plumbing industry by creating sustainable, efficient, and beautiful systems 
                    inspired by the ocean's natural processes. We strive to protect our planet while delivering 
                    exceptional service to our clients.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
                  </div>
                  <p className="text-cyan-200 leading-relaxed">
                    To be the global leader in sustainable plumbing solutions, setting new standards for innovation, 
                    environmental responsibility, and customer satisfaction. We envision a world where every building 
                    flows as efficiently as the ocean itself.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
                  <div className="flex items-center mb-4">
                    <Heart className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-semibold text-white">Our Promise</h3>
                  </div>
                  <p className="text-cyan-200 leading-relaxed">
                    We promise to deliver innovative, sustainable, and reliable plumbing solutions that exceed expectations. 
                    Every project we undertake is an opportunity to make a positive impact on our environment and our community.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'values' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-12 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Our Core Values
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: '🌊',
                    title: 'Innovation',
                    description: 'Constantly pushing boundaries with cutting-edge technology and creative solutions'
                  },
                  {
                    icon: '🐠',
                    title: 'Sustainability',
                    description: 'Committed to protecting our oceans and environment in everything we do'
                  },
                  {
                    icon: '🤝',
                    title: 'Integrity',
                    description: 'Building trust through honest, transparent, and ethical business practices'
                  },
                  {
                    icon: '⭐',
                    title: 'Excellence',
                    description: 'Delivering the highest quality work and exceptional customer service'
                  },
                  {
                    icon: '👥',
                    title: 'Teamwork',
                    description: 'Collaborating like a school of fish - stronger together than apart'
                  },
                  {
                    icon: '🎯',
                    title: 'Results',
                    description: 'Focused on achieving measurable outcomes that exceed expectations'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30 text-center hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-cyan-200">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Join Our Ocean Adventure
              </span>
            </h2>
            <p className="text-xl text-cyan-200 mb-8">
              Ready to experience the future of plumbing? Let's dive into your next project together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 inline mr-2" />
                Get Started
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                <Users className="w-5 h-5 inline mr-2" />
                Join Our Team
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

export default AquaFusionAboutPage
