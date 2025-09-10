'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, MapPin, Users, TrendingUp, CheckCircle, Star, Award, Zap, ArrowRight, Rocket, Globe, Heart, Sparkles, Palette, Shield, Search, Smartphone, DollarSign, Target, Building } from 'lucide-react'
import Link from 'next/link'

const WebDesignClonskeagh = () => {
  const handleCallTommy = () => {
    window.location.href = 'tel:0892781782'
  }

  const handleGetQuote = () => {
    window.location.href = '/contact'
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleCallTommy()
    }
  }

  const businessTypes = [
    {
      icon: Building,
      name: 'Local Businesses',
      description: 'Perfect for shops, restaurants, and services in Clonskeagh',
      color: 'from-sky-400 to-blue-500'
    },
    {
      icon: Users,
      name: 'Professional Services',
      description: 'Ideal for solicitors, accountants, and consultants',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: TrendingUp,
      name: 'Growing Companies',
      description: 'Great for startups and expanding businesses',
      color: 'from-indigo-400 to-purple-500'
    }
  ]

  const benefits = [
    {
      icon: MapPin,
      title: 'Local Clonskeagh Focus',
      description: 'Designed specifically for Clonskeagh businesses and local customers',
      color: 'from-sky-400 to-blue-500'
    },
    {
      icon: Phone,
      title: 'Direct Contact',
      description: 'Call Tommy directly at 0892781782 for immediate assistance',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Search,
      title: 'Local SEO',
      description: 'Optimized to appear in Clonskeagh Google searches',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect on phones where most local searches happen',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get online fast with our streamlined process',
      color: 'from-blue-400 to-sky-500'
    },
    {
      icon: Shield,
      title: 'Ongoing Support',
      description: 'Dedicated support to help your Clonskeagh business grow',
      color: 'from-indigo-400 to-blue-500'
    }
  ]

  const testimonials = [
    {
      name: 'Patricia O\'Sullivan',
      business: 'O\'Sullivan\'s Pharmacy, Clonskeagh',
      text: 'Tommy created an amazing website for our pharmacy. The local SEO has brought in so many new customers from Clonskeagh and surrounding areas!',
      rating: 5
    },
    {
      name: 'David Murphy',
      business: 'Murphy\'s Consulting, Clonskeagh',
      text: 'Professional service and our new website has helped us compete with bigger companies. Tommy was great to work with throughout the process!',
      rating: 5
    },
    {
      name: 'Catherine Walsh',
      business: 'Walsh\'s Hair Salon, Clonskeagh',
      text: 'Our website has made it so easy for customers to find us and book appointments online. Highly recommend Tommy\'s services!',
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
                <MapPin className="w-5 h-5 mr-2 animate-pulse" />
                📍 Web Design Clonskeagh
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Web Design Clonskeagh
                </span>
                <br />
                <span className="text-white">Call Tommy 0892781782</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-sky-100 mb-10 leading-relaxed">
                Get your Clonskeagh business online with 
                <span className="text-yellow-300 font-bold"> professional web design</span>. 
                <span className="text-pink-300 font-semibold"> Call Tommy directly</span> at 
                <span className="text-green-300 font-semibold"> 0892781782</span> for immediate assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <button
                  onClick={handleCallTommy}
                  onKeyDown={handleKeyDown}
                  className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-sky-500/25 inline-flex items-center justify-center"
                  tabIndex={0}
                  aria-label="Call Tommy at 0892781782"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Call Tommy 0892781782
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={handleGetQuote}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
                  tabIndex={0}
                  aria-label="Get your web design quote"
                >
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Get Your Quote
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center text-sky-200">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">Local Clonskeagh Expert</span>
                </div>
                <div className="flex items-center text-sky-200">
                  <Target className="w-5 h-5 text-green-400 mr-2" />
                  <span className="font-semibold">Direct Contact</span>
                </div>
                <div className="flex items-center text-sky-200">
                  <Award className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="font-semibold">Professional Service</span>
                </div>
              </div>
            </div>

            {/* Right Content - Business Type Showcase */}
            <div className="grid grid-cols-1 gap-6">
              {businessTypes.map((business, index) => (
                <div
                  key={business.name}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-sky-500/25 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${business.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <business.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{business.name}</h3>
                  <p className="text-sky-100">{business.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Tommy for Clonskeagh Web Design Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-sky-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <Heart className="w-5 h-5 mr-2 animate-pulse" />
              Why Choose Tommy for Clonskeagh Web Design?
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Local Clonskeagh
              </span>
              <br />
              <span className="text-gray-900">Web Design Expert</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your Clonskeagh business deserves a professional online presence. 
              <span className="text-sky-600 font-semibold"> Call Tommy at 0892781782</span> for expert web design services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-sky-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <TrendingUp className="w-5 h-5 mr-2 animate-pulse" />
              Clonskeagh Web Design Impact
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white">
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Clonskeagh Business
              </span>
              <br />
              <span className="text-white">Success Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">97%</div>
              <div className="text-sky-100 text-lg">of customers search online first</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">46%</div>
              <div className="text-sky-100 text-lg">of searches are local</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">78%</div>
              <div className="text-sky-100 text-lg">of local searches lead to purchases</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">2x</div>
              <div className="text-sky-100 text-lg">higher revenue with website</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-sky-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <Star className="w-5 h-5 mr-2 animate-pulse" />
              Clonskeagh Business Success Stories
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                What Clonskeagh Businesses
              </span>
              <br />
              <span className="text-gray-900">Say About Tommy</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what Clonskeagh businesses say about 
              <span className="text-sky-600 font-semibold"> Tommy's web design services</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/90 via-blue-600/90 to-indigo-600/90"></div>
        
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container-max relative z-10 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Phone className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Ready for Web Design Clonskeagh?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join successful Clonskeagh businesses who've already taken their business online with 
            <span className="text-yellow-300 font-bold"> Tommy's web design services</span>. 
            <span className="text-cyan-300 font-bold"> Call 0892781782 now!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleCallTommy}
              className="group bg-white text-sky-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-white/25 inline-flex items-center"
              tabIndex={0}
              aria-label="Call Tommy at 0892781782 now"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Call Tommy 0892781782
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <Link
              href="/contact"
              className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center"
              tabIndex={0}
              aria-label="Contact us for more information"
            >
              <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Contact Us
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-white/80">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="font-semibold">Direct Contact</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="font-semibold">Local Expert</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="font-semibold">Quick Setup</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default WebDesignClonskeagh
