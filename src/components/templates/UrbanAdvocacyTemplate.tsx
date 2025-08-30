'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Scale, 
  Building2, 
  Users, 
  Heart, 
  Shield, 
  Globe, 
  ArrowRight,
  Star,
  Clock,
  Award,
  Target,
  CheckCircle,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Briefcase,
  FileText,
  GraduationCap,
  Zap,
  TrendingUp,
  Lightbulb,
  Megaphone,
  Building,
  Car,
  Bus,
  Train,
  Menu,
  X
} from 'lucide-react'

export default function UrbanAdvocacyTemplate() {
  const [activeTab, setActiveTab] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    setMobileMenuOpen(false)
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'services':
        return (
          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Justice for the Modern World
                  </span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Contemporary legal services designed for urban communities and modern challenges
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Building2,
                    title: 'Urban Property Law',
                    description: 'Modern real estate and property law for city living and development',
                    price: '€399',
                    features: ['City Planning', 'Development Rights', 'Urban Zoning'],
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    icon: Users,
                    title: 'Community Advocacy',
                    description: 'Legal representation for community groups and urban initiatives',
                    price: '€299',
                    features: ['Community Rights', 'Local Advocacy', 'Public Interest'],
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: Heart,
                    title: 'Social Justice Law',
                    description: 'Pro bono and affordable legal services for underserved communities',
                    price: '€199',
                    features: ['Pro Bono Work', 'Affordable Rates', 'Community Support'],
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    icon: Shield,
                    title: 'Urban Rights Protection',
                    description: 'Protection of individual rights in urban environments',
                    price: '€349',
                    features: ['Civil Rights', 'Urban Privacy', 'Digital Rights'],
                    color: 'from-red-500 to-orange-500'
                  },
                  {
                    icon: Globe,
                    title: 'Environmental Law',
                    description: 'Legal services for urban environmental protection and sustainability',
                    price: '€449',
                    features: ['Green Building', 'Sustainability', 'Environmental Rights'],
                    color: 'from-teal-500 to-cyan-500'
                  },
                  {
                    icon: Zap,
                    title: 'Tech & Innovation Law',
                    description: 'Legal services for urban tech startups and digital innovation',
                    price: '€499',
                    features: ['Startup Law', 'Digital Rights', 'Innovation Support'],
                    color: 'from-indigo-500 to-purple-500'
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center mb-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )

      case 'community':
        return (
          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Community Legal Hub
                  </span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Empowering communities through accessible legal services and advocacy
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  {[
                    {
                      icon: Users,
                      title: 'Community Workshops',
                      description: 'Free legal education workshops for local communities',
                      impact: '500+ Attendees'
                    },
                    {
                      icon: Heart,
                      title: 'Pro Bono Services',
                      description: 'Free legal services for those who cannot afford representation',
                      impact: '200+ Cases'
                    },
                    {
                      icon: Megaphone,
                      title: 'Local Advocacy',
                      description: 'Representing community interests in local government',
                      impact: '50+ Initiatives'
                    },
                                         {
                       icon: Heart,
                       title: 'Social Justice',
                       description: 'Fighting for justice and equality in urban communities',
                       impact: '100% Commitment'
                     }
                  ].map((community, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-xl p-6 hover:border-purple-300 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <community.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{community.title}</h3>
                          <p className="text-gray-600 mb-3">{community.description}</p>
                          <div className="flex items-center">
                            <span className="text-sm font-semibold text-purple-600">{community.impact}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Community Impact</h3>
                    <div className="space-y-6">
                      {[
                        { label: 'Pro Bono Cases', value: '200+', color: 'from-green-500 to-emerald-500' },
                        { label: 'Community Workshops', value: '50+', color: 'from-blue-500 to-cyan-500' },
                        { label: 'Local Initiatives', value: '25+', color: 'from-purple-500 to-pink-500' },
                        { label: 'Community Satisfaction', value: '98%', color: 'from-yellow-500 to-orange-500' }
                      ].map((impact, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600">{impact.label}</span>
                            <span className="text-gray-800 font-semibold">{impact.value}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              className={`h-2 bg-gradient-to-r ${impact.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
                    <div className="space-y-4">
                      {[
                        { event: 'Legal Rights Workshop', date: 'Next Week', status: 'Open', color: 'text-green-600' },
                        { event: 'Community Advocacy Meeting', date: 'This Month', status: 'Open', color: 'text-green-600' },
                        { event: 'Pro Bono Clinic', date: 'Weekly', status: 'Available', color: 'text-green-600' },
                        { event: 'Youth Legal Education', date: 'Monthly', status: 'Open', color: 'text-green-600' }
                      ].map((event, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <span className="text-gray-800 font-semibold">{event.event}</span>
                            <p className="text-sm text-gray-500">{event.date}</p>
                          </div>
                          <span className={`font-semibold ${event.color}`}>{event.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )

      case 'advocacy':
        return (
          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Justice Warriors
                  </span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Fighting for justice, equality, and community rights in the modern urban landscape
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Advocacy Services</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <Megaphone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">Public Interest Advocacy</h4>
                          <p className="text-gray-600">Representing community interests in public policy matters</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">Civil Rights Protection</h4>
                          <p className="text-gray-600">Protecting individual and community civil rights</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">Social Justice Initiatives</h4>
                          <p className="text-gray-600">Leading initiatives for social justice and equality</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Advocacy Programs</h3>
                    <div className="space-y-4">
                      {[
                                { name: 'Community Defender', price: '€299', duration: 'Monthly', features: ['Legal Advocacy', 'Community Support', 'Policy Work'] },
        { name: 'Justice Warrior', price: '€499', duration: 'Monthly', features: ['Full Advocacy', 'Policy Development', 'Community Leadership'] },
        { name: 'Social Justice Champion', price: '€799', duration: 'Monthly', features: ['Complete Program', 'National Advocacy', 'Leadership Training'] }
                      ].map((program, index) => (
                        <div key={index} className="border border-purple-200 rounded-xl p-4 hover:border-purple-300 transition-all duration-300">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-lg font-semibold text-gray-800">{program.name}</h4>
                            <span className="text-2xl font-bold text-purple-600">{program.price}</span>
                          </div>
                          <p className="text-gray-600 mb-3">{program.duration} program</p>
                          <ul className="space-y-1">
                            {program.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Join the Movement</h3>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-gray-600 mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full bg-gray-50 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-400 focus:outline-none"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-2">Email Address</label>
                        <input
                          type="email"
                          className="w-full bg-gray-50 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-400 focus:outline-none"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-2">Community</label>
                        <input
                          type="text"
                          className="w-full bg-gray-50 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-400 focus:outline-none"
                          placeholder="Your community or neighborhood"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-2">Advocacy Interest</label>
                        <select className="w-full bg-gray-50 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-400 focus:outline-none">
                          <option>Select your interest</option>
                          <option>Civil Rights</option>
                          <option>Environmental Justice</option>
                          <option>Community Development</option>
                          <option>Social Justice</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-2">Message</label>
                        <textarea
                          rows={4}
                          className="w-full bg-gray-50 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-400 focus:outline-none"
                          placeholder="Tell us about your advocacy goals"
                        />
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                        Join Justice Warriors
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )

      case 'contact':
        return (
          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Connect with Urban Advocacy
                  </span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Get in touch with our team of urban justice advocates
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      {[
                        { icon: Phone, label: 'Urban Hotline', value: '+1 (555) URBAN-1', color: 'from-green-500 to-emerald-500' },
                        { icon: Mail, label: 'Digital Mail', value: 'hello@urbanadvocacy.com', color: 'from-blue-500 to-cyan-500' },
                        { icon: MapPin, label: 'Urban Office', value: 'Downtown Legal District', color: 'from-purple-500 to-pink-500' },
                        { icon: Clock, label: 'Community Hours', value: 'Mon-Sat 8:00-20:00', color: 'from-yellow-500 to-orange-500' }
                      ].map((contact, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center`}>
                            <contact.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800">{contact.label}</h4>
                            <p className="text-gray-600">{contact.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Community Support</h3>
                    <p className="text-gray-600 mb-6">
                      Need immediate legal assistance? Our community support team is available for urgent matters.
                    </p>
                    <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      Emergency Support
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Urban Message</h3>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-gray-600 mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full bg-gray-50 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-400 focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full bg-gray-50 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-400 focus:outline-none"
                          placeholder="Your email"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-2">Subject</label>
                        <input
                          type="text"
                          className="w-full bg-gray-50 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-400 focus:outline-none"
                          placeholder="Message subject"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-2">Message</label>
                        <textarea
                          rows={4}
                          className="w-full bg-gray-50 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-400 focus:outline-none"
                          placeholder="Your message"
                        />
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                        Send Urban Message
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )

      default:
        return (
          <>
            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
              <div className="text-center max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Scale className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-ping"></div>
                    </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Urban Advocacy
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                    Justice for the modern world. 
                    <br />
                    <span className="text-purple-600 font-semibold">Empowering communities through accessible legal services</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Community Support
                  </button>
                  <button className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
                    Legal Workshop
                  </button>
                </motion.div>
              </div>
            </section>

            {/* Urban Features */}
            <section className="relative z-10 py-20 px-6">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Modern Legal Services
                    </span>
                  </h2>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Contemporary legal solutions designed for urban communities and modern challenges
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Building2,
                      title: 'Urban Property Law',
                      description: 'Modern real estate and property law for city living and development with contemporary solutions',
                      color: 'from-purple-400 to-pink-500'
                    },
                    {
                      icon: Users,
                      title: 'Community Advocacy',
                      description: 'Legal representation for community groups and urban initiatives with grassroots approach',
                      color: 'from-blue-400 to-cyan-500'
                    },
                    {
                      icon: Heart,
                      title: 'Social Justice Law',
                      description: 'Pro bono and affordable legal services for underserved communities and social causes',
                      color: 'from-green-400 to-emerald-500'
                    },
                    {
                      icon: Shield,
                      title: 'Urban Rights Protection',
                      description: 'Protection of individual rights in urban environments with modern privacy and digital rights',
                      color: 'from-red-400 to-orange-500'
                    },
                    {
                      icon: Globe,
                      title: 'Environmental Law',
                      description: 'Legal services for urban environmental protection and sustainability initiatives',
                      color: 'from-teal-400 to-cyan-500'
                    },
                    {
                      icon: Zap,
                      title: 'Tech & Innovation Law',
                      description: 'Legal services for urban tech startups and digital innovation with cutting-edge expertise',
                      color: 'from-indigo-400 to-purple-500'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Urban Testimonials */}
            <section className="relative z-10 py-20 px-6 bg-purple-50/50">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Community Voices
                    </span>
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: 'Maria Rodriguez',
                      role: 'Community Leader',
                      content: 'Urban Advocacy transformed our neighborhood with accessible legal services and community support.',
                      rating: 5
                    },
                    {
                      name: 'James Chen',
                      role: 'Tech Startup Founder',
                      content: 'Their modern approach to legal services helped our startup navigate urban regulations successfully.',
                      rating: 5
                    },
                    {
                      name: 'Sarah Johnson',
                      role: 'Environmental Activist',
                      content: 'The environmental law team fought for our community\'s right to clean air and green spaces.',
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-purple-200"
                    >
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20 px-6">
              <div className="container mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-200 rounded-3xl p-12"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Join the Urban Justice Movement
                    </span>
                  </h2>
                  <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                    Be part of the change. Accessible legal services for modern communities.
                  </p>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
                    <Heart className="w-5 h-5 mr-2" />
                    Get Community Support
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </motion.div>
              </div>
            </section>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 text-gray-800">
      {/* Urban Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-10 animate-ping"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-purple-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <Scale className="w-8 h-8 text-purple-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Urban Advocacy
                </h1>
                <p className="text-xs text-purple-600">🌆 Justice for the Modern World</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              {['home', 'services', 'community', 'advocacy', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`capitalize transition-all duration-300 hover:text-purple-600 ${
                    activeTab === tab ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Community Support
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-purple-200"
          >
            <div className="px-6 py-4 space-y-3">
              {['home', 'services', 'community', 'advocacy', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`w-full text-left capitalize py-2 px-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-purple-500/20 text-purple-600 border border-purple-500/30' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-4">
                Community Support
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-md border-t border-purple-200 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Scale className="w-6 h-6 text-purple-600" />
              <span className="text-lg font-semibold text-gray-800">Urban Advocacy</span>
            </div>
            <div className="flex space-x-6 text-gray-600">
              <span>🌆 Justice for the Modern World</span>
              <span>|</span>
              <span>Community-Driven</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
