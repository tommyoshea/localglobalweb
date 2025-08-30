'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Crown, 
  Sparkles, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  User,
  Shield,
  Clock,
  Gift,
  Award,
  Heart,
  Diamond,
  Gem,
  Zap,
  Sparkle,
  Menu,
  X
} from 'lucide-react'

export default function LuxuryApothecaryTemplate() {
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
                    Luxury Wellness Services
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Exclusive wellness packages and premium pharmaceutical services for discerning clients
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: User,
                    title: 'Concierge Health Service',
                    description: 'Personal health advisors providing bespoke wellness consultations',
                    price: '€599',
                    features: ['Personal Advisor', 'Custom Care Plans', 'Priority Access']
                  },
                  {
                    icon: Gift,
                    title: 'Luxury Wellness Packages',
                    description: 'Premium supplement and wellness packages tailored to your lifestyle',
                    price: '€899',
                    features: ['Custom Formulations', 'Luxury Packaging', 'Monthly Refills']
                  },
                  {
                    icon: Crown,
                    title: 'VIP Health Lounge',
                    description: 'Exclusive consultation spaces for private health sessions',
                    price: '€299',
                    features: ['Private Consultation Room', 'Refreshment Service', 'Luxury Amenities']
                  },
                  {
                    icon: Sparkles,
                    title: 'Bespoke Experience',
                    description: 'Customized health experiences designed around your unique needs',
                    price: '€1,299',
                    features: ['Personalized Programs', 'Luxury Accommodations', 'Exclusive Access']
                  },
                  {
                    icon: Diamond,
                    title: 'Premium Products',
                    description: 'Curated selection of luxury beauty and wellness products',
                    price: '€199',
                    features: ['Exclusive Brands', 'Limited Editions', 'Personal Styling']
                  },
                  {
                    icon: Award,
                    title: 'Expert Consultation',
                    description: 'Access to world-class health professionals and wellness experts',
                    price: '€399',
                    features: ['Celebrity Experts', 'Private Sessions', 'Follow-up Care']
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-6 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-amber-600 mb-4">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
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

      case 'wellness':
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
                    Luxury Wellness Programs
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Exclusive wellness programs designed for the discerning client
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-amber-600">VIP Wellness Retreats</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-800">Luxury Spa Experience</div>
                          <div className="text-sm text-gray-600">Full-service wellness retreat</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-amber-600 font-semibold">€2,999</div>
                          <div className="text-xs text-gray-500">3-Day Package</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-800">Executive Wellness</div>
                          <div className="text-sm text-gray-600">High-performance optimization</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-amber-600 font-semibold">€1,999</div>
                          <div className="text-xs text-gray-500">Weekend Program</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-800">Celebrity Wellness</div>
                          <div className="text-sm text-gray-600">Exclusive celebrity treatment</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-amber-600 font-semibold">€4,999</div>
                          <div className="text-xs text-gray-500">Luxury Package</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md border border-yellow-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-amber-600">Premium Partnerships</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
                        <span className="text-gray-700">Luxury Spa Resorts</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                        <span className="text-gray-700">Celebrity Trainers</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
                        <span className="text-gray-700">Michelin-Star Chefs</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                        <span className="text-gray-700">Luxury Hotels</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-amber-600">Luxury Impact</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-amber-50 rounded-lg p-4">
                        <div className="text-3xl font-bold text-amber-600">100%</div>
                        <div className="text-sm text-gray-600">Satisfaction Rate</div>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <div className="text-3xl font-bold text-amber-600">Mon-Fri</div>
                        <div className="text-sm text-gray-600">Concierge Service</div>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <div className="text-3xl font-bold text-amber-600">500+</div>
                        <div className="text-sm text-gray-600">VIP Clients</div>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <div className="text-3xl font-bold text-amber-600">5★</div>
                        <div className="text-sm text-gray-600">Luxury Rating</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md border border-yellow-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-amber-600">Join VIP Program</h3>
                    <p className="text-gray-600 mb-4">Experience the pinnacle of luxury wellness.</p>
                    <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      VIP Access
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )

      case 'concierge':
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
                    VIP Concierge Service
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Personalized luxury concierge services for our exclusive clientele
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-amber-600">Personal Concierge</h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                        <User className="w-8 h-8 text-amber-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">Dedicated Advisor</div>
                          <div className="text-sm text-gray-600">Your personal wellness consultant</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                        <Clock className="w-8 h-8 text-yellow-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">Business Hours</div>
                          <div className="text-sm text-gray-600">Round-the-clock support</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                        <Gift className="w-8 h-8 text-amber-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">Luxury Gifting</div>
                          <div className="text-sm text-gray-600">Premium wellness packages</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md border border-yellow-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-amber-600">Exclusive Services</h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                        <Crown className="w-8 h-8 text-yellow-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">VIP Lounge Access</div>
                          <div className="text-sm text-gray-600">Exclusive consultation spaces</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                        <Diamond className="w-8 h-8 text-amber-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">Premium Products</div>
                          <div className="text-sm text-gray-600">Exclusive luxury brands</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                        <Award className="w-8 h-8 text-yellow-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">Expert Access</div>
                          <div className="text-sm text-gray-600">World-class professionals</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-6"
                >
                  <h3 className="text-2xl font-bold mb-6 text-amber-600">VIP Concierge Booking</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                      <select className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2 focus:border-amber-400 focus:outline-none">
                        <option>Personal Concierge</option>
                        <option>VIP Lounge Access</option>
                        <option>Luxury Wellness Package</option>
                        <option>Exclusive Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <input type="date" className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2 focus:border-amber-400 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                      <textarea rows={3} className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2 focus:border-amber-400 focus:outline-none" placeholder="Any special requests or requirements..."></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      Book VIP Concierge
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
                  <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    VIP Contact
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Connect with our luxury wellness team
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-amber-600">VIP Communication Hub</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="w-6 h-6 text-amber-600 mr-3" />
                        <div>
                          <div className="text-gray-800 font-semibold">VIP Hotline</div>
                          <div className="text-gray-600">+1 (555) VIP-LUXURY</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-6 h-6 text-yellow-600 mr-3" />
                        <div>
                          <div className="text-gray-800 font-semibold">VIP Email</div>
                          <div className="text-gray-600">vip@luxuryapothecary.com</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-6 h-6 text-amber-600 mr-3" />
                        <div>
                          <div className="text-gray-800 font-semibold">Luxury Headquarters</div>
                          <div className="text-gray-600">Leixlip, Co. Kildare</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md border border-yellow-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-amber-600">Emergency VIP Support</h3>
                    <p className="text-gray-600 mb-4">Emergency support for our VIP clients.</p>
                    <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      Emergency VIP Contact
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-6"
                >
                  <h3 className="text-2xl font-bold mb-6 text-amber-600">Send VIP Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input type="text" className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2 focus:border-amber-400 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input type="email" className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2 focus:border-amber-400 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">VIP Status</label>
                      <select className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2 focus:border-amber-400 focus:outline-none">
                        <option>New VIP Client</option>
                        <option>Existing VIP Client</option>
                        <option>Celebrity Client</option>
                        <option>Executive Client</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea rows={4} className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2 focus:border-amber-400 focus:outline-none"></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      Send VIP Message
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
                      <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <Diamond className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-20 animate-ping"></div>
                      <div className="absolute -top-2 -right-2">
                        <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                      Luxury Wellness
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                    Experience the pinnacle of pharmaceutical excellence with our bespoke health services. 
                    <br />
                    <span className="text-amber-600 font-semibold">Where luxury meets wellness</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <Crown className="w-5 h-5 mr-2" />
                    VIP Concierge
                  </button>
                  <button className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-500 hover:text-white transition-all duration-300">
                    Luxury Services
                  </button>
                </motion.div>
              </div>
            </section>

            {/* Luxury Features */}
            <section className="relative z-10 py-20 px-6">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                      Bespoke Health Services
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Exclusive wellness packages and premium pharmaceutical services for discerning clients
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: User,
                      title: 'Concierge Health Service',
                      description: 'Personal health advisors providing bespoke wellness consultations and care plans',
                      color: 'from-amber-400 to-yellow-500'
                    },
                    {
                      icon: Gift,
                      title: 'Luxury Wellness Packages',
                      description: 'Premium supplement and wellness packages tailored to your lifestyle',
                      color: 'from-yellow-400 to-orange-500'
                    },
                    {
                      icon: Crown,
                      title: 'VIP Health Lounge',
                      description: 'Exclusive consultation spaces for private health and wellness sessions',
                      color: 'from-orange-400 to-red-500'
                    },
                    {
                      icon: Sparkles,
                      title: 'Bespoke Experience',
                      description: 'Customized health experiences designed around your unique needs',
                      color: 'from-red-400 to-pink-500'
                    },
                    {
                      icon: Diamond,
                      title: 'Premium Products',
                      description: 'Curated selection of luxury beauty and wellness products',
                      color: 'from-pink-400 to-purple-500'
                    },
                    {
                      icon: Award,
                      title: 'Expert Consultation',
                      description: 'Access to world-class health professionals and wellness experts',
                      color: 'from-purple-400 to-indigo-500'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl p-6 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group"
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

            {/* Luxury Testimonials */}
            <section className="relative z-10 py-20 px-6 bg-white/70">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                      Client Testimonials
                    </span>
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: 'Victoria Sterling',
                      role: 'Luxury Lifestyle Client',
                      content: 'The concierge health service is absolutely exceptional. They truly understand luxury wellness.',
                      rating: 5
                    },
                    {
                      name: 'Alexander Blackwood',
                      role: 'Executive',
                      content: 'The VIP health lounge provides the privacy and exclusivity I expect from premium services.',
                      rating: 5
                    },
                    {
                      name: 'Isabella Rose',
                      role: 'Wellness Enthusiast',
                      content: 'Their bespoke wellness packages have transformed my approach to health and luxury living.',
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100"
                    >
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center mr-3">
                          <Crown className="w-5 h-5 text-white" />
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
                  className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-md border border-amber-200 rounded-3xl p-12"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                      Experience Luxury Wellness
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join our exclusive clientele and discover the pinnacle of pharmaceutical excellence.
                  </p>
                  <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
                    <Crown className="w-5 h-5 mr-2" />
                    VIP Access
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-gray-800">
      {/* Luxury Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-md border-b border-amber-200 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <Crown className="w-8 h-8 text-amber-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Luxury Apothecary
                </h1>
                <p className="text-xs text-amber-600">✨ Bespoke Health Experience</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              {['home', 'services', 'wellness', 'concierge', 'contact'].map((tab) => (
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
                VIP Access
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
              {['home', 'services', 'wellness', 'concierge', 'contact'].map((tab) => (
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
                VIP Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="relative z-10 bg-white/90 backdrop-blur-md border-t border-amber-200 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Crown className="w-6 h-6 text-amber-600" />
              <span className="text-lg font-semibold text-gray-800">Luxury Apothecary</span>
            </div>
            <div className="flex space-x-6 text-gray-600">
              <span>✨ Bespoke Health Experience</span>
              <span>|</span>
              <span>VIP Wellness</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
