'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, MapPin, Users, TrendingUp, CheckCircle, Star, Award, Zap, ArrowRight, Rocket, Globe, Heart, Sparkles, Palette, Shield, Search, Smartphone, DollarSign, Target, Building } from 'lucide-react'
import Link from 'next/link'

const WebDesignTallaght = () => {
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
      description: 'Perfect for shops, restaurants, and services in Tallaght',
      color: 'from-slate-400 to-gray-500'
    },
    {
      icon: Users,
      name: 'Professional Services',
      description: 'Ideal for solicitors, accountants, and consultants',
      color: 'from-zinc-400 to-slate-500'
    },
    {
      icon: TrendingUp,
      name: 'Growing Companies',
      description: 'Great for startups and expanding businesses',
      color: 'from-stone-400 to-gray-500'
    }
  ]

  const benefits = [
    {
      icon: MapPin,
      title: 'Local Tallaght Focus',
      description: 'Designed specifically for Tallaght businesses and local customers',
      color: 'from-slate-400 to-gray-500'
    },
    {
      icon: Phone,
      title: 'Direct Contact',
      description: 'Call Tommy directly at 0892781782 for immediate assistance',
      color: 'from-zinc-400 to-slate-500'
    },
    {
      icon: Search,
      title: 'Local SEO',
      description: 'Optimized to appear in Tallaght Google searches',
      color: 'from-stone-400 to-gray-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect on phones where most local searches happen',
      color: 'from-neutral-400 to-gray-500'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get online fast with our streamlined process',
      color: 'from-gray-400 to-slate-500'
    },
    {
      icon: Shield,
      title: 'Ongoing Support',
      description: 'Dedicated support to help your Tallaght business grow',
      color: 'from-slate-400 to-zinc-500'
    }
  ]

  const testimonials = [
    {
      name: 'Patricia O\'Sullivan',
      business: 'O\'Sullivan\'s Pharmacy, Tallaght',
      text: 'Tommy created an amazing website for our pharmacy. The local SEO has brought in so many new customers from Tallaght and surrounding areas!',
      rating: 5
    },
    {
      name: 'David Murphy',
      business: 'Murphy\'s Electrical, Tallaght',
      text: 'Professional service and our new website has helped us compete with bigger companies. Tommy was great to work with throughout the process!',
      rating: 5
    },
    {
      name: 'Catherine Walsh',
      business: 'Walsh\'s Beauty Salon, Tallaght',
      text: 'Our website has made it so easy for customers to find us and book appointments online. Highly recommend Tommy\'s services!',
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-zinc-400 to-slate-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-stone-400 to-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-400 to-gray-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
                <MapPin className="w-5 h-5 mr-2 animate-pulse" />
                📍 Web Design Tallaght
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-slate-400 via-gray-500 to-zinc-600 bg-clip-text text-transparent">
                  Web Design Tallaght
                </span>
                <br />
                <span className="text-white">Call Tommy 0892781782</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-100 mb-10 leading-relaxed">
                Get your Tallaght business online with 
                <span className="text-yellow-300 font-bold"> professional web design</span>. 
                <span className="text-pink-300 font-semibold"> Call Tommy directly</span> at 
                <span className="text-green-300 font-semibold"> 0892781782</span> for immediate assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <button
                  onClick={handleCallTommy}
                  onKeyDown={handleKeyDown}
                  className="group bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-slate-500/25 inline-flex items-center justify-center"
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
                <div className="flex items-center text-slate-200">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">Local Tallaght Expert</span>
                </div>
                <div className="flex items-center text-slate-200">
                  <Target className="w-5 h-5 text-green-400 mr-2" />
                  <span className="font-semibold">Direct Contact</span>
                </div>
                <div className="flex items-center text-slate-200">
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
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-slate-500/25 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${business.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <business.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{business.name}</h3>
                  <p className="text-slate-100">{business.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Tommy for Tallaght Web Design Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-slate-200 to-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-zinc-200 to-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <Heart className="w-5 h-5 mr-2 animate-pulse" />
              Why Choose Tommy for Tallaght Web Design?
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
                Local Tallaght
              </span>
              <br />
              <span className="text-gray-900">Web Design Expert</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your Tallaght business deserves a professional online presence. 
              <span className="text-slate-600 font-semibold"> Call Tommy at 0892781782</span> for expert web design services.
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
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-zinc-400 to-slate-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-400 to-gray-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <TrendingUp className="w-5 h-5 mr-2 animate-pulse" />
              Tallaght Web Design Impact
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white">
              <span className="bg-gradient-to-r from-slate-400 via-gray-500 to-zinc-600 bg-clip-text text-transparent">
                Tallaght Business
              </span>
              <br />
              <span className="text-white">Success Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">97%</div>
              <div className="text-slate-100 text-lg">of customers search online first</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">46%</div>
              <div className="text-slate-100 text-lg">of searches are local</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">78%</div>
              <div className="text-slate-100 text-lg">of local searches lead to purchases</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">2x</div>
              <div className="text-slate-100 text-lg">higher revenue with website</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-slate-200 to-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-zinc-200 to-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <Star className="w-5 h-5 mr-2 animate-pulse" />
              Tallaght Business Success Stories
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
                What Tallaght Businesses
              </span>
              <br />
              <span className="text-gray-900">Say About Tommy</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what Tallaght businesses say about 
              <span className="text-slate-600 font-semibold"> Tommy's web design services</span>.
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/90 via-gray-600/90 to-zinc-600/90"></div>
        
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container-max relative z-10 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Phone className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Ready for Web Design Tallaght?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join successful Tallaght businesses who've already taken their business online with 
            <span className="text-yellow-300 font-bold"> Tommy's web design services</span>. 
            <span className="text-cyan-300 font-bold"> Call 0892781782 now!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleCallTommy}
              className="group bg-white text-slate-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-white/25 inline-flex items-center"
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

export default WebDesignTallaght
