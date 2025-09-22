'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Globe,
  Smartphone,
  Search,
  Zap,
  Shield,
  Heart,
  ArrowRight,
  Quote,
  Building2,
  Briefcase,
  Target,
  TrendingUp,
  Palette,
  Code,
  Smartphone as Mobile,
  Monitor,
  Laptop,
  Tablet
} from 'lucide-react'

export default function WebDesignDublinPage() {
  useEffect(() => {
    // Track page view for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Web Design Dublin | Professional Website Designers Dublin',
        page_location: window.location.href,
      })
    }
  }, [])

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'Call Tommy 0892781782',
      })
    }
    window.location.href = 'tel:+353892781782'
  }

  const handleEmailClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'engagement',
        event_label: 'Contact Email',
      })
    }
    window.location.href = 'mailto:info@localglobalweb.com'
  }

  const dublinAreas = [
    'Dublin City Centre', 'Temple Bar', 'Grafton Street', 'O\'Connell Street',
    'Phoenix Park', 'Dublin Castle', 'Trinity College', 'Guinness Storehouse',
    'St. Stephen\'s Green', 'Grafton Street', 'Henry Street', 'Capel Street',
    'Dame Street', 'College Green', 'Merrion Square', 'Fitzwilliam Square'
  ]

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Responsive Web Design',
      description: 'Mobile-first designs that work perfectly on all devices - smartphones, tablets, and desktops.'
    },
    {
      icon: <Search className="w-8 h-8 text-green-600" />,
      title: 'SEO Optimization',
      description: 'Built-in SEO features to help your Dublin business rank higher in Google search results.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Fast Loading Speed',
      description: 'Lightning-fast websites that load in under 2 seconds for better user experience and SEO.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: 'Secure & Reliable',
      description: 'SSL certificates, regular backups, and 99.9% uptime guarantee for your business.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Murphy',
      business: 'Murphy\'s Restaurant, Temple Bar',
      content: 'Tommy created an amazing website for our restaurant. We\'re getting 3x more online bookings since launch!',
      rating: 5
    },
    {
      name: 'Michael O\'Connor',
      business: 'O\'Connor Law, Dublin 2',
      content: 'Professional, responsive, and exactly what we needed. Our new website has brought in so many new clients.',
      rating: 5
    },
    {
      name: 'Emma Kelly',
      business: 'Kelly Hair Salon, Grafton Street',
      content: 'Beautiful design and easy to manage. Tommy was fantastic to work with and delivered on time.',
      rating: 5
    }
  ]

  const packages = [
    {
      name: 'Starter Package',
      price: '€299',
      description: 'Perfect for small Dublin businesses getting started online',
      features: [
        'Up to 5 pages',
        'Mobile responsive design',
        'Basic SEO optimization',
        'Contact form',
        'Social media integration',
        '1 month support'
      ],
      popular: false
    },
    {
      name: 'Professional Package',
      price: '€599',
      description: 'Ideal for growing Dublin businesses with more content needs',
      features: [
        'Up to 10 pages',
        'Advanced responsive design',
        'Premium SEO optimization',
        'Online booking system',
        'Google Analytics setup',
        '3 months support',
        'Content management system'
      ],
      popular: true
    },
    {
      name: 'Premium Package',
      price: '€999',
      description: 'Complete solution for established Dublin businesses',
      features: [
        'Unlimited pages',
        'Custom design & branding',
        'Advanced SEO & marketing',
        'E-commerce functionality',
        'Multi-language support',
        '6 months support',
        'Priority support'
      ],
      popular: false
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Web Design Dublin
              <span className="block text-yellow-300">Professional Website Designers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Expert Dublin web designers creating stunning, responsive websites that drive results for local businesses. 
              <span className="block mt-2 font-semibold">Call Tommy: 089 278 1782</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handlePhoneClick}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                tabIndex={0}
                aria-label="Call Tommy for web design consultation"
              >
                <Phone className="w-5 h-5" />
                Call Tommy: 089 278 1782
              </button>
              <button
                onClick={handleEmailClick}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 border border-white/30 flex items-center gap-2"
                tabIndex={0}
                aria-label="Email for web design quote"
              >
                <Mail className="w-5 h-5" />
                Get Free Quote
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-blue-100">Websites Built</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300">98%</div>
                <div className="text-sm text-blue-100">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300">24h</div>
                <div className="text-sm text-blue-100">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300">5★</div>
                <div className="text-sm text-blue-100">Average Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dublin Areas Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Web Design Services Across Dublin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving businesses in every corner of Dublin with professional web design solutions. 
              From Temple Bar to Phoenix Park, we help Dublin businesses succeed online.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {dublinAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300"
              >
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Our Dublin Web Design Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local Dublin expertise with cutting-edge web design technology to create websites that work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Web Design Packages for Dublin Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect web design package for your Dublin business. All packages include responsive design and SEO optimization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.popular ? 'ring-4 ring-blue-500 ring-opacity-50 relative' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => window.location.href = '/contact'}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                  tabIndex={0}
                  aria-label={`Get ${pkg.name} for ${pkg.price} - Go to contact form`}
                >
                  Get Started - {pkg.price}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Dublin Businesses Say About Us
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied Dublin business owners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-300 mb-4" />
                <p className="text-blue-100 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-200 text-sm">{testimonial.business}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Grow Your Dublin Business Online?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of successful Dublin businesses who trust us with their online presence. 
              Get your professional website designed and launched in just 2 weeks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handlePhoneClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                tabIndex={0}
                aria-label="Call Tommy for immediate consultation"
              >
                <Phone className="w-5 h-5" />
                Call Tommy: 089 278 1782
              </button>
              <button
                onClick={handleEmailClick}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 border border-white/30 flex items-center gap-2"
                tabIndex={0}
                aria-label="Email for free consultation"
              >
                <Mail className="w-5 h-5" />
                Free Consultation
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Clock className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
                <p className="text-gray-400">Your website ready in 2 weeks</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Money-Back Guarantee</h3>
                <p className="text-gray-400">100% satisfaction or full refund</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Award-Winning Design</h3>
                <p className="text-gray-400">Professional, modern websites</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
