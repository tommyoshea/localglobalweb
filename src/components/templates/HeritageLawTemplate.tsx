'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Scale, 
  Building2, 
  BookOpen, 
  Crown, 
  CheckCircle,
  Heart,
  ScrollText,
  MapPin,
  Phone,
  Mail,
  Menu,
  X
} from 'lucide-react'

export default function HeritageLawTemplate() {
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
                  <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    Centuries of Legal Excellence
                  </span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Prestigious legal services built on centuries of tradition and expertise
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Crown,
                    title: 'Royal Legal Counsel',
                    description: 'Exclusive legal services for high-profile clients and royal matters',
                    price: '€1,299',
                    features: ['Royal Protocol', 'Confidentiality', 'Prestigious Network'],
                    color: 'from-amber-500 to-yellow-500'
                  },
                  {
                    icon: Building2,
                    title: 'Heritage Estate Planning',
                    description: 'Multi-generational estate planning for historic family legacies',
                    price: '€899',
                    features: ['Family Trusts', 'Heritage Assets', 'Legacy Protection'],
                    color: 'from-stone-500 to-neutral-500'
                  },
                  {
                    icon: BookOpen,
                    title: 'Classical Legal Research',
                    description: 'In-depth legal research using ancient and modern legal texts',
                    price: '€599',
                    features: ['Historical Precedents', 'Legal Library Access', 'Expert Analysis'],
                    color: 'from-amber-600 to-orange-500'
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-6 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                      <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )

      case 'family':
        return (
          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    Family Legacy Planning
                  </span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Preserving your family's heritage and securing your legacy for generations
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Legacy Services</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">Family Trusts</h4>
                          <p className="text-gray-600">Multi-generational trust structures for family wealth preservation</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">Heritage Assets</h4>
                          <p className="text-gray-600">Protection and management of historic family properties</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                          <ScrollText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">Estate Planning</h4>
                          <p className="text-gray-600">Comprehensive estate planning for family legacies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Schedule Legacy Consultation</h3>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Legacy Type</label>
                        <select className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                          <option>Family Trust</option>
                          <option>Estate Planning</option>
                          <option>Heritage Assets</option>
                          <option>Royal Protocol</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Tell us about your legacy planning needs"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Schedule Royal Consultation
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
                  <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    Royal Consultation
                  </span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Connect with our prestigious legal chambers for your heritage and legacy needs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">Historic Chambers</h4>
                          <p className="text-gray-600">123 Royal Court, Heritage District<br />London, UK SW1A 1AA</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">Royal Hotline</h4>
                          <p className="text-gray-600">+44 (0) 20 7123 4567</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">Royal Correspondence</h4>
                          <p className="text-gray-600">counsel@heritagelaw.co.uk</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Schedule Royal Consultation</h3>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Service Type</label>
                        <select className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                          <option>Royal Legal Counsel</option>
                          <option>Heritage Estate Planning</option>
                          <option>Classical Legal Research</option>
                          <option>Noble Asset Protection</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Tell us about your legal needs"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Schedule Royal Consultation
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
          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    Welcome to Heritage Law Chambers
                  </span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Centuries of legal excellence at your service
                </p>
              </motion.div>
            </div>
          </section>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-gray-800">
      {/* Heritage Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full opacity-10 animate-ping"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-amber-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <Scale className="w-8 h-8 text-amber-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Heritage Law Chambers
                </h1>
                <p className="text-xs text-amber-600">🏛️ Centuries of Legal Excellence</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              {['home', 'services', 'family', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`capitalize transition-all duration-300 hover:text-amber-600 ${
                    activeTab === tab ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600'
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
                className="hidden md:block bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Royal Consultation
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors"
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
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-amber-200"
          >
            <div className="px-6 py-4 space-y-3">
              {['home', 'services', 'family', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`w-full text-left capitalize py-2 px-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-amber-500/20 text-amber-600 border border-amber-500/30' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-4">
                Royal Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-md border-t border-amber-200 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Scale className="w-6 h-6 text-amber-600" />
              <span className="text-lg font-semibold text-gray-800">Heritage Law Chambers</span>
            </div>
            <div className="flex space-x-6 text-gray-600">
              <span>🏛️ Centuries of Legal Excellence</span>
              <span>|</span>
              <span>Est. 1723</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
