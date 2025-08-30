'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  FlaskConical, 
  Zap, 
  Shield, 
  Users, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Dna,
  Atom,
  TestTube,
  Pill,
  Microscope,
  Rocket,
  Menu,
  X
} from 'lucide-react'

export default function QuantumPharmacyTemplate() {
  const [activeTab, setActiveTab] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Quantum Services
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Revolutionary pharmaceutical services powered by quantum technology
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Brain,
                    title: 'AI Quantum Consultation',
                    description: 'Advanced AI-powered health consultations with instant analysis',
                    price: '€299',
                    features: ['Instant Diagnosis', 'Personalized Treatment', 'Business Hours']
                  },
                  {
                    icon: Dna,
                    title: 'Genetic Profiling',
                    description: 'Complete DNA analysis for personalized medicine',
                    price: '€599',
                    features: ['Full Genome Scan', 'Health Risk Assessment', 'Treatment Optimization']
                  },
                  {
                    icon: TestTube,
                    title: 'Molecular Teleportation',
                    description: 'Instant prescription delivery via quantum teleportation',
                    price: '€199',
                    features: ['Zero Delivery Time', 'Secure Transmission', 'Global Coverage']
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-black bg-opacity-30 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )
      
      case 'technology':
        return (
          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Quantum Technology Lab
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our cutting-edge quantum computing and AI technology
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-black bg-opacity-30 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">Quantum Computing</h3>
                    <p className="text-gray-300 mb-4">Our quantum computers process pharmaceutical data at speeds unimaginable with classical computing.</p>
                    <div className="flex space-x-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400">1000x</div>
                        <div className="text-sm text-gray-400">Faster Processing</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">99.9%</div>
                        <div className="text-sm text-gray-400">Accuracy</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black bg-opacity-30 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Neural Networks</h3>
                    <p className="text-gray-300 mb-4">Advanced AI systems that learn and adapt to provide personalized healthcare solutions.</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Learning Rate</span>
                        <span className="text-purple-400">Adaptive</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Data Points</span>
                        <span className="text-purple-400">∞</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-black bg-opacity-30 backdrop-blur-md border border-green-500/20 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-green-400">Holographic Displays</h3>
                    <p className="text-gray-300 mb-4">3D holographic interfaces for immersive healthcare consultations and medication visualization.</p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-400">4K</div>
                        <div className="text-sm text-gray-400">Resolution</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">360°</div>
                        <div className="text-sm text-gray-400">View</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black bg-opacity-30 backdrop-blur-md border border-blue-500/20 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Quantum Encryption</h3>
                    <p className="text-gray-300 mb-4">Unbreakable security protocols using quantum entanglement for patient data protection.</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Security Level</span>
                        <span className="text-blue-400">Quantum</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Encryption</span>
                        <span className="text-blue-400">Unbreakable</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )

      case 'consultation':
        return (
          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Quantum Consultation
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Book your consultation with our AI-powered quantum pharmacist
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-black bg-opacity-30 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">Virtual Reality Consultation</h3>
                    <p className="text-gray-300 mb-4">Experience immersive healthcare consultations in our virtual reality environment.</p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        <span className="text-gray-300">Full Body Scan</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        <span className="text-gray-300">3D Medication Visualization</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        <span className="text-gray-300">Real-time Health Monitoring</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black bg-opacity-30 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Health Assessment</h3>
                    <p className="text-gray-300 mb-4">Comprehensive health evaluation using advanced AI algorithms.</p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                        <span className="text-gray-300">Symptom Analysis</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                        <span className="text-gray-300">Treatment Recommendations</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                        <span className="text-gray-300">Preventive Care Planning</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-black bg-opacity-30 backdrop-blur-md border border-green-500/20 rounded-2xl p-6"
                >
                  <h3 className="text-2xl font-bold mb-6 text-green-400">Book Your Consultation</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input type="text" className="w-full bg-black bg-opacity-50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input type="email" className="w-full bg-black bg-opacity-50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Consultation Type</label>
                      <select className="w-full bg-black bg-opacity-50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none">
                        <option>AI Health Assessment</option>
                        <option>VR Consultation</option>
                        <option>Genetic Profiling</option>
                        <option>Quantum Therapy</option>
                      </select>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      Book Quantum Consultation
                    </button>
                  </form>
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
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Quantum Contact
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect with our quantum healthcare team
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-black bg-opacity-30 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">Quantum Communication Hub</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="w-6 h-6 text-cyan-400 mr-3" />
                        <div>
                          <div className="text-white font-semibold">Quantum Hotline</div>
                          <div className="text-gray-300">+1 (555) QUANTUM</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-6 h-6 text-purple-400 mr-3" />
                        <div>
                          <div className="text-white font-semibold">Quantum Email</div>
                          <div className="text-gray-300">contact@quantumpharmacy.com</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-6 h-6 text-green-400 mr-3" />
                        <div>
                          <div className="text-white font-semibold">Quantum Headquarters</div>
                          <div className="text-gray-300">Leixlip, Co. Kildare</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black bg-opacity-30 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">Emergency Quantum Portal</h3>
                    <p className="text-gray-300 mb-4">Emergency access to our quantum healthcare system.</p>
                    <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      Activate Emergency Portal
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-black bg-opacity-30 backdrop-blur-md border border-green-500/20 rounded-2xl p-6"
                >
                  <h3 className="text-2xl font-bold mb-6 text-green-400">Send Quantum Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input type="text" className="w-full bg-black bg-opacity-50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input type="email" className="w-full bg-black bg-opacity-50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea rows={4} className="w-full bg-black bg-opacity-50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      Send Quantum Message
                    </button>
                  </form>
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
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                        <Brain className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-20 animate-ping"></div>
                    </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Quantum Care
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                    Experience the future of pharmaceutical care with our AI-powered quantum technology. 
                    <br />
                    <span className="text-cyan-400 font-semibold">Where science meets innovation</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                    <Rocket className="w-5 h-5 mr-2" />
                    Launch Quantum Portal
                  </button>
                  <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                    Explore Technology
                  </button>
                </motion.div>
              </div>
            </section>

            {/* Quantum Features */}
            <section className="relative z-10 py-20 px-6">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Quantum Technology
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Revolutionary pharmaceutical technology powered by quantum computing and AI
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Brain,
                      title: 'AI Quantum Pharmacist',
                      description: 'Advanced AI system providing instant medication analysis and personalized recommendations',
                      color: 'from-cyan-400 to-blue-500'
                    },
                    {
                      icon: Dna,
                      title: 'DNA Sequencing',
                      description: 'Personalized medicine based on genetic profiling and DNA analysis',
                      color: 'from-purple-400 to-pink-500'
                    },
                    {
                      icon: TestTube,
                      title: 'Molecular Teleporter',
                      description: 'Instant prescription delivery system using quantum teleportation technology',
                      color: 'from-green-400 to-emerald-500'
                    },
                    {
                      icon: Microscope,
                      title: 'Holographic Display',
                      description: '3D holographic medication visualization and interaction system',
                      color: 'from-orange-400 to-red-500'
                    },
                    {
                      icon: Shield,
                      title: 'Quantum Encryption',
                      description: 'Unbreakable security for patient data using quantum encryption',
                      color: 'from-indigo-400 to-purple-500'
                    },
                    {
                      icon: Zap,
                      title: 'VR Consultation',
                      description: 'Virtual reality consultation rooms for immersive healthcare experience',
                      color: 'from-yellow-400 to-orange-500'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-black bg-opacity-30 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
                  className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-12"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Ready for the Future?
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Experience quantum healthcare technology today. Book your consultation with our AI-powered quantum pharmacist.
                  </p>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center mx-auto">
                    <Rocket className="w-5 h-5 mr-2" />
                    Launch Quantum Experience
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Quantum Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black bg-opacity-20 backdrop-blur-md border-b border-cyan-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <Atom className="w-8 h-8 text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Quantum Pharmacy
                </h1>
                <p className="text-xs text-cyan-300">🔬 Future of Healthcare</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              {['home', 'services', 'technology', 'consultation', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeTab === tab ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-300'
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
                className="hidden md:block bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Quantum Portal
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
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
            className="md:hidden bg-black bg-opacity-95 backdrop-blur-md border-b border-cyan-500/30"
          >
            <div className="px-6 py-4 space-y-3">
              {['home', 'services', 'technology', 'consultation', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`w-full text-left capitalize py-2 px-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                      : 'text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-4">
                Quantum Portal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="relative z-10 bg-black bg-opacity-40 backdrop-blur-md border-t border-cyan-500/30 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Atom className="w-6 h-6 text-cyan-400" />
              <span className="text-lg font-semibold text-white">Quantum Pharmacy</span>
            </div>
            <div className="flex space-x-6 text-gray-300">
              <span>🔬 Future of Healthcare</span>
              <span>|</span>
              <span>Quantum Technology</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
