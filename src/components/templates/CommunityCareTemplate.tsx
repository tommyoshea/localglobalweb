'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Heart, 
  Users, 
  Home, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  Baby,
  UserCheck,
  Shield,
  Clock,
  Truck,
  BookOpen,
  Users2,
  Award,
  Smile,
  Menu,
  X
} from 'lucide-react'

export default function CommunityCareTemplate() {
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
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Community Health Services
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive healthcare services designed for families and our local community
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Calendar,
                    title: 'Health Consultations',
                    description: 'Personalized health consultations with our experienced pharmacists',
                    price: '€45',
                    features: ['30-minute sessions', 'Medication reviews', 'Health advice']
                  },
                  {
                    icon: Truck,
                    title: 'Home Delivery',
                    description: 'Convenient prescription delivery to your doorstep',
                    price: '€15',
                    features: ['Same-day delivery', 'Free for seniors', 'Secure packaging']
                  },
                  {
                    icon: Baby,
                    title: 'Family Care Packages',
                    description: 'Multi-generational health services for the whole family',
                    price: '€89',
                    features: ['Health assessments', 'Medication management', 'Wellness planning']
                  },
                  {
                    icon: Home,
                    title: 'Senior Care Services',
                    description: 'Specialized services for elderly community members',
                    price: '€35',
                    features: ['Medication reviews', 'Home visits', 'Care coordination']
                  },
                  {
                    icon: BookOpen,
                    title: 'Health Education',
                    description: 'Educational workshops and health seminars',
                    price: 'Free',
                    features: ['Monthly workshops', 'Expert speakers', 'Community topics']
                  },
                  {
                    icon: UserCheck,
                    title: 'Wellness Programs',
                    description: 'Community wellness and prevention programs',
                    price: '€25',
                    features: ['Fitness classes', 'Nutrition guidance', 'Mental health support']
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-md border border-orange-200 rounded-2xl p-6 hover:border-red-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-red-600 mb-4">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
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
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Our Community Hub
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Building stronger, healthier communities together
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white/80 backdrop-blur-md border border-orange-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Community Events</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-800">Health Fair</div>
                          <div className="text-sm text-gray-600">Monthly community health screenings</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-red-600 font-semibold">Free</div>
                          <div className="text-xs text-gray-500">Every 1st Sat</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-800">Wellness Workshop</div>
                          <div className="text-sm text-gray-600">Nutrition and fitness classes</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-red-600 font-semibold">€10</div>
                          <div className="text-xs text-gray-500">Every Wed</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-800">Senior Social</div>
                          <div className="text-sm text-gray-600">Social activities for seniors</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-red-600 font-semibold">Free</div>
                          <div className="text-xs text-gray-500">Every Fri</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-md border border-red-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Local Partnerships</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                        <span className="text-gray-700">Local Medical Center</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                        <span className="text-gray-700">Community Fitness Center</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                        <span className="text-gray-700">Senior Living Communities</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                        <span className="text-gray-700">Local Schools</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white/80 backdrop-blur-md border border-orange-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Community Impact</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-orange-50 rounded-lg p-4">
                        <div className="text-3xl font-bold text-red-600">500+</div>
                        <div className="text-sm text-gray-600">Families Served</div>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4">
                        <div className="text-3xl font-bold text-red-600">50+</div>
                        <div className="text-sm text-gray-600">Events Hosted</div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <div className="text-3xl font-bold text-red-600">1000+</div>
                        <div className="text-sm text-gray-600">Health Consultations</div>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4">
                        <div className="text-3xl font-bold text-red-600">Mon-Fri</div>
                        <div className="text-sm text-gray-600">Emergency Support</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-md border border-red-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Join Our Community</h3>
                    <p className="text-gray-600 mb-4">Become part of our growing community health network.</p>
                    <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      Join Community
                    </button>
                  </div>
                </motion.div>
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
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Family Care Center
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive healthcare solutions for every member of your family
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white/80 backdrop-blur-md border border-orange-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Children's Health Corner</h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                        <Baby className="w-8 h-8 text-red-500 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">Pediatric Consultations</div>
                          <div className="text-sm text-gray-600">Specialized care for children</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-red-50 rounded-lg">
                        <BookOpen className="w-8 h-8 text-orange-500 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">Educational Games</div>
                          <div className="text-sm text-gray-600">Fun health learning activities</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                        <Shield className="w-8 h-8 text-red-500 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">Immunization Tracking</div>
                          <div className="text-sm text-gray-600">Vaccine schedules and reminders</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-md border border-red-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Senior Care Services</h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-red-50 rounded-lg">
                        <Home className="w-8 h-8 text-orange-500 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">Home Visits</div>
                          <div className="text-sm text-gray-600">Personalized care at home</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                        <Clock className="w-8 h-8 text-red-500 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">Medication Management</div>
                          <div className="text-sm text-gray-600">Organized pill dispensers</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-red-50 rounded-lg">
                        <Truck className="w-8 h-8 text-orange-500 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-800">Free Delivery</div>
                          <div className="text-sm text-gray-600">Prescriptions to your door</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/80 backdrop-blur-md border border-orange-200 rounded-2xl p-6"
                >
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Family Health Assessment</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Family Size</label>
                      <select className="w-full bg-white border border-orange-200 rounded-lg px-4 py-2 focus:border-red-400 focus:outline-none">
                        <option>2-3 members</option>
                        <option>4-5 members</option>
                        <option>6+ members</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
                      <select className="w-full bg-white border border-orange-200 rounded-lg px-4 py-2 focus:border-red-400 focus:outline-none">
                        <option>Young children (0-12)</option>
                        <option>Teenagers (13-18)</option>
                        <option>Adults (19-64)</option>
                        <option>Seniors (65+)</option>
                        <option>Mixed ages</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Health Concerns</label>
                      <textarea rows={3} className="w-full bg-white border border-orange-200 rounded-lg px-4 py-2 focus:border-red-400 focus:outline-none" placeholder="Describe any specific health concerns..."></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      Get Family Care Plan
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
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Contact Our Community
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get in touch with our community health team
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white/80 backdrop-blur-md border border-orange-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Community Contact Hub</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="w-6 h-6 text-red-500 mr-3" />
                        <div>
                          <div className="text-gray-800 font-semibold">Community Hotline</div>
                          <div className="text-gray-600">+1 (555) COMMUNITY</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-6 h-6 text-orange-500 mr-3" />
                        <div>
                          <div className="text-gray-800 font-semibold">Community Email</div>
                          <div className="text-gray-600">hello@communitycare.com</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-6 h-6 text-red-500 mr-3" />
                        <div>
                          <div className="text-gray-800 font-semibold">Community Center</div>
                          <div className="text-gray-600">Leixlip, Co. Kildare</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-md border border-red-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Emergency Support</h3>
                    <p className="text-gray-600 mb-4">Emergency support for our community members.</p>
                    <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      Emergency Contact
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/80 backdrop-blur-md border border-orange-200 rounded-2xl p-6"
                >
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Send Community Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input type="text" className="w-full bg-white border border-orange-200 rounded-lg px-4 py-2 focus:border-red-400 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input type="email" className="w-full bg-white border border-orange-200 rounded-lg px-4 py-2 focus:border-red-400 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select className="w-full bg-white border border-orange-200 rounded-lg px-4 py-2 focus:border-red-400 focus:outline-none">
                        <option>General Inquiry</option>
                        <option>Health Consultation</option>
                        <option>Community Event</option>
                        <option>Family Care</option>
                        <option>Emergency Support</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea rows={4} className="w-full bg-white border border-orange-200 rounded-lg px-4 py-2 focus:border-red-400 focus:outline-none"></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      Send Community Message
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
                      <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Users2 className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-20 animate-ping"></div>
                    </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      Caring for Our Community
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                    Your trusted neighborhood pharmacy where families come first. 
                    <br />
                    <span className="text-red-600 font-semibold">Building healthier communities, one family at a time</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Join Our Family
                  </button>
                  <button className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                    Community Events
                  </button>
                </motion.div>
              </div>
            </section>

            {/* Community Features */}
            <section className="relative z-10 py-20 px-6">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      Community Health Hub
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive healthcare services designed for families and our local community
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Calendar,
                      title: 'Community Health Calendar',
                      description: 'Local wellness events, health seminars, and community workshops',
                      color: 'from-red-400 to-pink-500'
                    },
                    {
                      icon: Baby,
                      title: 'Family Care Packages',
                      description: 'Multi-generational health services for the whole family',
                      color: 'from-orange-400 to-yellow-500'
                    },
                    {
                      icon: UserCheck,
                      title: 'Local Heroes Section',
                      description: 'Showcasing community health workers and local partnerships',
                      color: 'from-green-400 to-emerald-500'
                    },
                    {
                      icon: Home,
                      title: 'Senior Care Services',
                      description: 'Specialized services and home delivery for elderly community members',
                      color: 'from-blue-400 to-indigo-500'
                    },
                    {
                      icon: BookOpen,
                      title: 'Children\'s Health Corner',
                      description: 'Educational games and health resources for kids',
                      color: 'from-purple-400 to-pink-500'
                    },
                    {
                      icon: Truck,
                      title: 'Home Delivery',
                      description: 'Convenient prescription delivery to your doorstep',
                      color: 'from-teal-400 to-cyan-500'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/80 backdrop-blur-md border border-orange-200 rounded-2xl p-6 hover:border-red-300 hover:shadow-lg transition-all duration-300 group"
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

            {/* Community Testimonials */}
            <section className="relative z-10 py-20 px-6 bg-white/50">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      What Our Community Says
                    </span>
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: 'Sarah Johnson',
                      role: 'Local Mother',
                      content: 'The family care packages have been a lifesaver for our household. They really understand our community needs.',
                      rating: 5
                    },
                    {
                      name: 'Robert Chen',
                      role: 'Senior Resident',
                      content: 'The home delivery service and senior care programs make me feel truly cared for in my neighborhood.',
                      rating: 5
                    },
                    {
                      name: 'Maria Rodriguez',
                      role: 'Community Leader',
                      content: 'Their community health events have brought our neighborhood closer together. Truly a health hub for all.',
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100"
                    >
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center mr-3">
                          <Smile className="w-5 h-5 text-white" />
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
                  className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-md border border-red-200 rounded-3xl p-12"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      Join Our Community Family
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Become part of our neighborhood health hub. We're here to care for you and your family.
                  </p>
                  <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
                    <Heart className="w-5 h-5 mr-2" />
                    Join Our Community
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 text-gray-800">
      {/* Warm Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,146,60,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-orange-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <Heart className="w-8 h-8 text-red-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Community Care Pharmacy
                </h1>
                <p className="text-xs text-orange-600">🏥 Your Neighborhood Health Hub</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              {['home', 'services', 'community', 'family', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`capitalize transition-all duration-300 hover:text-red-500 ${
                    activeTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600'
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
                className="hidden md:block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Join Our Community
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-red-500 transition-colors"
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
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-orange-200"
          >
            <div className="px-6 py-4 space-y-3">
              {['home', 'services', 'community', 'family', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`w-full text-left capitalize py-2 px-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-red-500/20 text-red-500 border border-red-500/30' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-4">
                Join Our Community
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-md border-t border-orange-200 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-lg font-semibold text-gray-800">Community Care Pharmacy</span>
            </div>
            <div className="flex space-x-6 text-gray-600">
              <span>🏥 Your Neighborhood Health Hub</span>
              <span>|</span>
              <span>Caring for Families</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
