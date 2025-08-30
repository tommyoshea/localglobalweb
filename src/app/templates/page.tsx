'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TemplatePreview from '@/components/TemplatePreview'
import { Eye, ArrowRight, Star, Palette, Sparkles, Zap, Droplet, FlaskConical, Scale } from 'lucide-react'

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [previewTemplate, setPreviewTemplate] = useState<any>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  
  const categories = [
    { id: 'all', name: 'All Templates', icon: Palette },
    { id: 'electrician', name: 'Electricians', icon: Zap },
    { id: 'plumber', name: 'Plumbers', icon: Droplet },
    { id: 'chemist', name: 'Chemists', icon: FlaskConical },
    { id: 'solicitor', name: 'Solicitors', icon: Scale }
  ]

  const templates = [
    // ELECTRICIAN TEMPLATES
    {
      id: 'voltage-vision',
      name: 'Voltage Vision',
      category: 'electrician',
      description: '⚡ A cyberpunk-inspired electrician website with holographic circuit board animations, neon lightning effects, and AI-powered energy flow visualizations. Features a futuristic "Power Matrix" dashboard with real-time voltage monitoring and quantum-inspired emergency response system. Every element pulses with electric energy, creating an immersive experience that showcases cutting-edge electrical expertise.',
      image: '/api/placeholder/600/400',
      features: [
        'Holographic Circuit Board Hero with 3D Animations',
        'AI-Powered Energy Consumption Matrix',
        'Quantum Emergency Call Lightning Portal',
        'Interactive Power Grid Neural Network Map',
        'Customer Testimonials with Electric Plasma Effects',
        'Cyberpunk Emergency Response System',
        'Before/After Gallery with Voltage Holograms',
        'Mobile App with AR Circuit Visualization',
        'Fully Editable Content Management System',
        'Custom Branding & Color Scheme Options',
        'SEO-Optimized for Local Electrician Search',
        'Social Media Integration with Electric Effects'
      ],
      price: '€299',
      popular: true
    },
    {
      id: 'spark-master',
      name: 'Spark Master Pro',
      category: 'electrician',
      description: '⚡ A high-voltage, adrenaline-pumping electrician website with thunderous lightning bolt animations, electric blue plasma effects, and a "Power Up Your Business" theme that electrifies visitors. Features an interactive "Spark Academy" safety training system with gamified electrical knowledge quizzes, live chat with electric crackle sound effects, and a dynamic "Power Meter" service calculator that visualizes energy consumption in real-time.',
      image: '/api/placeholder/600/400',
      features: [
        'Thunderous Lightning Bolt Navigation with Plasma Effects',
        'Interactive Spark Academy Safety Training Game',
        'Live Chat with Electric Crackle Sound Effects',
        'Dynamic Power Meter Service Calculator',
        'Customer Portal with Real-time Energy Reports',
        'Lightning-Fast Emergency Dispatch System',
        'Video Gallery with Electric Thunder Transitions',
        'Social Media Integration with Spark Effects',
        'Fully Editable Content Management System',
        'Custom Branding & Color Scheme Options',
        'SEO-Optimized for Local Electrician Search',
        'Mobile-Responsive with Touch Lightning Effects'
      ],
      price: '€249',
      popular: false
    },
    {
      id: 'current-flow',
      name: 'Current Flow',
      category: 'electrician',
      description: '⚡ A sophisticated, minimalist electrician website inspired by the elegant flow of electrical current. Features mesmerizing animated power line backgrounds that pulse with energy, intelligent voltage indicators that respond to user interaction, and a unique "Power Your Dreams" messaging system that adapts to each visitor. The design flows like electricity itself - smooth, powerful, and always moving forward.',
      image: '/api/placeholder/600/400',
      features: [
        'Mesmerizing Animated Power Line Backgrounds',
        'Intelligent Real-time Availability Tracker',
        'Adaptive "Power Your Dreams" Messaging System',
        'Interactive Service Map with Current Flow Visualization',
        'Dynamic Customer Rewards Program with Energy Points',
        'Smart Home Integration Guide with IoT Compatibility',
        'Advanced Energy Efficiency Calculator with AI Insights',
        'Professional Certification Display with Digital Badges',
        'Fully Editable Content Management System',
        'Custom Branding & Color Scheme Options',
        'SEO-Optimized for Local Electrician Search',
        'Progressive Web App with Offline Capabilities'
      ],
      price: '€199',
      popular: false
    },

    // PLUMBER TEMPLATES
    {
      id: 'aqua-fusion',
      name: 'Aqua Fusion',
      category: 'plumber',
      description: '💧 A futuristic underwater paradise with holographic water particles, 3D pipe labyrinths, and a "Deep Blue Technology" theme. Features an interactive "Ocean of Solutions" with real-time water flow simulations, virtual dive-through pipe inspections, and a "Coral Reef" customer portal where each client gets their own underwater workspace. The design flows like the ocean itself - deep, mysterious, and full of life.',
      image: '/api/placeholder/600/400',
      features: [
        'Holographic Water Particle System with 3D Animations',
        'Interactive Ocean of Solutions Dashboard',
        'Virtual Dive-Through Pipe Inspection Tool',
        'Coral Reef Customer Portal with Underwater Workspaces',
        'Real-time Water Flow Simulation Engine',
        'Deep Blue Technology Emergency Response',
        'Marine Life-Inspired Service Categories',
        'Underwater Before/After Gallery with Coral Effects',
        'Fully Editable Content Management System',
        'Custom Branding & Color Scheme Options',
        'SEO-Optimized for Local Plumber Search',
        'Mobile App with AR Underwater Visualization'
      ],
      price: '€299',
      popular: true
    },
    {
      id: 'steam-punk',
      name: 'Steam Punk Pro',
      category: 'plumber',
      description: '🔧 A Victorian-era mechanical marvel with brass pipe animations, steam-powered effects, and a "Industrial Revolution" aesthetic. Features a "Steam Engine" service calculator with cogwheel animations, a "Copper Workshop" DIY guide with vintage illustrations, and a "Gear & Valve" customer loyalty system where clients earn brass tokens for referrals. Every element has that authentic steam-powered feel.',
      image: '/api/placeholder/600/400',
      features: [
        'Brass Pipe Network with Steam-Powered Animations',
        'Steam Engine Service Calculator with Cogwheel Effects',
        'Copper Workshop DIY Guide with Vintage Illustrations',
        'Gear & Valve Customer Loyalty System',
        'Industrial Revolution Emergency Dispatch',
        'Victorian-Era Service Tracking with Brass Tokens',
        'Steam-Powered Quote Generator with Mechanical Sounds',
        'Antique Tool Gallery with Historical Context',
        'Fully Editable Content Management System',
        'Custom Branding & Color Scheme Options',
        'SEO-Optimized for Local Plumber Search',
        'Mobile-Responsive with Steam Effects'
      ],
      price: '€249',
      popular: false
    },
    {
      id: 'crystal-clear',
      name: 'Crystal Clear',
      category: 'plumber',
      description: '💎 A minimalist zen-inspired design with crystal-clear water effects, geometric pipe patterns, and a "Pure Flow" philosophy. Features a "Crystal Matrix" service selector with prism effects, a "Still Waters" meditation-inspired booking system, and a "Diamond Clarity" guarantee that promises transparency in all dealings. The design is as pure and clear as the water it represents.',
      image: '/api/placeholder/600/400',
      features: [
        'Crystal-Clear Water Effects with Geometric Patterns',
        'Crystal Matrix Service Selector with Prism Animations',
        'Still Waters Meditation-Inspired Booking System',
        'Diamond Clarity Transparency Guarantee',
        'Zen Garden Customer Portal with Peaceful Interface',
        'Pure Flow Service Tracking with Minimalist Design',
        'Crystal-Clear Pricing with No Hidden Costs',
        'Geometric Pipe Art Gallery with Modern Aesthetics',
        'Fully Editable Content Management System',
        'Custom Branding & Color Scheme Options',
        'SEO-Optimized for Local Plumber Search',
        'Progressive Web App with Offline Capabilities'
      ],
      price: '€199',
      popular: false
    },

    // CHEMIST TEMPLATES
    {
      id: 'quantum-pharmacy',
      name: 'Quantum Pharmacy',
      category: 'chemist',
      description: '🔬 A futuristic quantum-inspired pharmacy website with particle physics animations, holographic medication displays, and a "Quantum Care" philosophy. Features a "Molecular Teleporter" prescription delivery system, quantum-entangled health monitoring, and AI-powered "Quantum Pharmacist" that provides instant medication analysis. The design represents the cutting edge of pharmaceutical technology with a sci-fi aesthetic.',
      image: '/api/placeholder/600/400',
      features: [
        'Quantum Particle Physics Background Animations',
        'Holographic 3D Medication Display System',
        'AI Quantum Pharmacist with Instant Analysis',
        'Molecular Teleporter Prescription Delivery',
        'Quantum-Entangled Health Monitoring Network',
        'Virtual Reality Pharmacy Consultation Rooms',
        'DNA Sequencing Integration for Personalized Medicine',
        'Quantum Encryption for Patient Data Security',
        'Smart Glasses AR Medication Identification',
        'Quantum Computing Drug Interaction Analysis',
        'Teleportation-Style Prescription Transfer',
        'Quantum Blockchain for Prescription Tracking'
      ],
      price: '€399',
      popular: true
    },
    {
      id: 'community-care',
      name: 'Community Care Pharmacy',
      category: 'chemist',
      description: '🏥 A warm, community-focused pharmacy website with heartwarming animations, local health events, and a "Neighborhood Health Hub" concept. Features a "Community Health Calendar" with local wellness events, "Family Care Packages" for multi-generational health, and a "Local Heroes" section showcasing community health workers. Perfect for family-owned pharmacies serving tight-knit communities.',
      image: '/api/placeholder/600/400',
      features: [
        'Warm Community-Focused Design with Local Imagery',
        'Community Health Calendar with Local Wellness Events',
        'Family Care Packages for Multi-Generational Health',
        'Local Heroes Section Showcasing Community Health Workers',
        'Neighborhood Health Hub with Local Partnerships',
        'Senior Care Specialized Services & Home Delivery',
        'Children\'s Health Corner with Educational Games',
        'Community Wellness Workshops & Health Seminars',
        'Local Business Health Partnership Network',
        'Family Prescription Management System',
        'Community Health Blog with Local Expert Articles',
        'Mobile App with Community Health Alerts & Updates'
      ],
      price: '€279',
      popular: false
    },
    {
      id: 'luxury-apothecary',
      name: 'Luxury Apothecary',
      category: 'chemist',
      description: '✨ A premium luxury pharmacy website with gold-plated animations, exclusive wellness products, and a "Bespoke Health Experience" philosophy. Features a "Concierge Health Service" with personal health advisors, "Luxury Wellness Packages" with premium supplements, and a "VIP Health Lounge" for exclusive consultations. Designed for high-end pharmacies serving affluent clients with premium health and wellness needs.',
      image: '/api/placeholder/600/400',
      features: [
        'Luxury Gold-Plated Design with Premium Animations',
        'Concierge Health Service with Personal Health Advisors',
        'Luxury Wellness Packages with Premium Supplements',
        'VIP Health Lounge for Exclusive Consultations',
        'Bespoke Health Experience Customization',
        'Premium Beauty & Wellness Product Showcase',
        'Private Health Consultation Booking System',
        'Luxury Gift & Wellness Hamper Creator',
        'Exclusive Health & Beauty Events Calendar',
        'Premium Supplement & Vitamin Consultation',
        'Luxury Health Blog with Expert Wellness Articles',
        'Mobile App with VIP Health Concierge Services'
      ],
      price: '€459',
      popular: false
    },

    // SOLICITOR TEMPLATES
    {
      id: 'quantum-justice',
      name: 'Quantum Justice',
      category: 'solicitor',
      description: '⚖️ A futuristic legal website with quantum computing aesthetics, holographic courtroom animations, and a "Justice in the Digital Age" theme. Features AI-powered case analysis, blockchain evidence tracking, and virtual reality courtroom experiences. The design represents the cutting edge of legal technology with neural network patterns, quantum encryption for client data, and a "Digital Scales of Justice" that adapts to each case type.',
      image: '/api/placeholder/600/400',
      features: [
        'Quantum Computing Aesthetics with Neural Network Patterns',
        'Holographic Courtroom Animations with 3D Evidence Display',
        'AI-Powered Case Analysis with Predictive Legal Insights',
        'Blockchain Evidence Tracking with Immutable Records',
        'Virtual Reality Courtroom Experience Simulator',
        'Digital Scales of Justice with Adaptive Case Weighting',
        'Quantum Encryption for Client Data Security',
        'Smart Contract Integration for Legal Agreements',
        'Real-time Legal Research AI Assistant',
        'Digital Evidence Vault with Blockchain Verification',
        'Virtual Legal Consultation Rooms with AR Technology',
        'Quantum Legal Analytics Dashboard with Case Predictions'
      ],
      price: '€499',
      popular: true
    },
    {
      id: 'heritage-law',
      name: 'Heritage Law Chambers',
      category: 'solicitor',
      description: '🏛️ A prestigious heritage-inspired legal website with classical architecture animations, gilded scroll effects, and a "Centuries of Legal Excellence" theme. Features a "Great Hall of Justice" virtual tour, interactive legal timeline spanning centuries, and a "Family Legacy" client portal that tracks multi-generational legal relationships. The design evokes the grandeur of historic law chambers with marble textures, classical columns, and timeless legal wisdom.',
      image: '/api/placeholder/600/400',
      features: [
        'Classical Architecture Animations with Marble Textures',
        'Great Hall of Justice Virtual Tour with Interactive Elements',
        'Centuries of Legal Excellence Timeline with Historical Cases',
        'Family Legacy Client Portal for Multi-Generational Relationships',
        'Gilded Scroll Effects with Classical Typography',
        'Interactive Legal Library with Ancient to Modern Texts',
        'Prestigious Case Gallery with Historical Context',
        'Classical Column Navigation with Architectural Elements',
        'Heritage Legal Blog with Centuries of Wisdom',
        'Family Trust & Estate Planning Showcase',
        'Classical Music Integration for Professional Atmosphere',
        'Mobile App with Heritage Legal Resources & History'
      ],
      price: '€429',
      popular: false
    },
    {
      id: 'urban-advocacy',
      name: 'Urban Advocacy',
      category: 'solicitor',
      description: '🌆 A modern, dynamic legal website with cityscape animations, street art-inspired graphics, and a "Justice for the Modern World" approach. Features a "Community Legal Hub" with local law resources, "Street Smart" legal guides for everyday people, and a "Justice Warriors" section highlighting pro bono work and community advocacy. The design reflects contemporary urban life with bold typography, vibrant colors, and accessible legal information.',
      image: '/api/placeholder/600/400',
      features: [
        'Dynamic Cityscape Animations with Urban Energy',
        'Community Legal Hub with Local Law Resources',
        'Street Smart Legal Guides for Everyday People',
        'Justice Warriors Pro Bono & Community Advocacy Section',
        'Urban Art-Inspired Graphics with Bold Typography',
        'Interactive Legal Map with Local Court Locations',
        'Community Legal Education Workshops & Seminars',
        'Modern Case Management with Social Media Integration',
        'Accessible Legal Information for All Communities',
        'Urban Legal Blog with Contemporary Issues',
        'Mobile-First Design with Street-Level Accessibility',
        'Social Justice Initiatives & Community Partnerships'
      ],
      price: '€349',
      popular: false
    }
  ]

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory)

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    // Navigate to contact page with template selection
    window.location.href = `/contact?template=${templateId}`
  }

  const handlePreviewTemplate = (template: any) => {
    setPreviewTemplate(template)
    setIsPreviewOpen(true)
  }

  const handleClosePreview = () => {
    setIsPreviewOpen(false)
    setPreviewTemplate(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent, templateId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleTemplateSelect(templateId)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
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
            const seed = i * 0.14;
            const left = Math.round((Math.sin(seed) * 50 + 50) * 100) / 100;
            const top = Math.round((Math.cos(seed) * 50 + 50) * 100) / 100;
            const duration = 3 + (i % 3) * 0.6;
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

        <div className="container mx-auto section-padding relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg"
            >
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              🎨 Template Gallery
            </motion.div>
            
          <motion.h1 
              initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Choose Your
              </span>
              <br />
              <span className="text-white">Perfect Template</span>
          </motion.h1>
            
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-cyan-100 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
              Discover our creative, professional templates designed specifically for 
              <span className="text-yellow-300 font-semibold"> electricians, plumbers, chemists, and solicitors</span>
          </motion.p>
            
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                  <motion.button
                  key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-full font-bold transition-all duration-300 transform ${
                    selectedCategory === category.id
                        ? 'bg-white text-blue-600 shadow-2xl'
                        : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.name}
                  </motion.button>
              )
            })}
          </motion.div>
          </div>
        </div>
      </section>

      {/* Hosting & Domain Notice */}
      <section className="py-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg border-2 border-yellow-200 p-6 md:p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">€</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  Important Pricing Information
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 md:p-6 mb-4">
                <p className="text-lg md:text-xl text-gray-800 font-semibold mb-3">
                  ⚠️ Hosting and Domain are <span className="text-red-600 font-bold">NOT</span> included in template prices
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">€</span>
                      </div>
                      <span className="font-bold text-gray-900">Hosting Cost</span>
                    </div>
                    <p className="text-2xl font-black text-blue-600">€194.49</p>
                    <p className="text-sm text-gray-600">per annum</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">€</span>
                      </div>
                      <span className="text-gray-900 font-bold">Domain Name</span>
                    </div>
                    <p className="text-2xl font-black text-green-600">€4.00</p>
                    <p className="text-sm text-gray-600">typically per year</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">Template prices shown below are for design and development only.</span> 
                We can help you set up hosting and domain, but these are separate costs that you'll need to pay annually.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Electricians Special Highlight */}
      {selectedCategory === 'electrician' && (
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2 animate-pulse" />
                ⚡ Electrifying Templates ⚡
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Power Up Your Online Presence
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover our cutting-edge electrician website templates featuring advanced animations, 
                interactive elements, and professional designs that will power up your online presence.
                <br />
                <span className="font-bold text-blue-600 mt-2 block">
                  Every template is fully editable - customize colors, content, and branding to match your business perfectly!
                </span>
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Templates Grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Template Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        {template.category === 'electrician' && <Zap className="w-10 h-10 text-white" />}
                        {template.category === 'plumber' && <Droplet className="w-10 h-10 text-white" />}
                        {template.category === 'chemist' && <FlaskConical className="w-10 h-10 text-white" />}
                        {template.category === 'solicitor' && <Scale className="w-10 h-10 text-white" />}
                      </div>
                      <p className="text-gray-700 font-bold text-lg">{template.name}</p>
                    </div>
                  </div>
                  {template.popular && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handlePreviewTemplate(template)}
                      className="opacity-0 hover:opacity-100 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
                      tabIndex={0}
                      aria-label={`Preview ${template.name} template`}
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Preview & Select
                    </button>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-cyan-600 uppercase tracking-wide bg-cyan-50 px-3 py-1 rounded-full">
                      {template.category}
                    </span>
                    <span className="text-3xl font-black text-gray-900">
                      {template.price}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    {template.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {template.description}
                  </p>

                  {/* Features Preview */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                    <ul className="space-y-3">
                      {template.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {template.features.length > 3 && (
                        <li className="text-sm text-cyan-600 font-bold">
                          +{template.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePreviewTemplate(template)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-xl flex items-center justify-center group"
                    tabIndex={0}
                    aria-label={`Preview ${template.name} template`}
                  >
                    <Eye className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Preview & Select
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Template Preview Modal */}
      <TemplatePreview
        isOpen={isPreviewOpen}
        onClose={handleClosePreview}
        template={previewTemplate}
        onSelect={handleTemplateSelect}
      />
    </main>
  )
}
