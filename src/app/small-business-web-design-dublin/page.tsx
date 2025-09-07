'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Store, Users, TrendingUp, CheckCircle, Star, Award, Zap, ArrowRight, Rocket, Globe, Heart, Sparkles, Palette, Shield, Search, Smartphone, DollarSign, Target } from 'lucide-react'
import Link from 'next/link'

const SmallBusinessWebDesignDublin = () => {
  const handleGetQuote = () => {
    window.location.href = '/contact'
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleGetQuote()
    }
  }

  const businessTypes = [
    {
      icon: Store,
      name: 'Local Shops',
      description: 'Perfect for retail stores, boutiques, and local shops',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Users,
      name: 'Service Businesses',
      description: 'Ideal for salons, gyms, restaurants, and service providers',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: TrendingUp,
      name: 'Startups',
      description: 'Great for new businesses and growing companies',
      color: 'from-emerald-400 to-teal-500'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Budget-Friendly',
      description: 'Affordable web design solutions that fit small business budgets',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Local Focus',
      description: 'Designed to attract and convert local Dublin customers',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Search,
      title: 'Local SEO',
      description: 'Optimized to appear in local Google searches',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect on phones where most local searches happen',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get online fast with our streamlined process',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Ongoing Support',
      description: 'Dedicated support to help your business grow',
      color: 'from-pink-400 to-rose-500'
    }
  ]

  const testimonials = [
    {
      name: 'Lisa O\'Neill',
      business: 'O\'Neill\'s Hair Salon',
      text: 'Our new website has brought in so many new local customers. Online bookings have made our life so much easier!',
      rating: 5
    },
    {
      name: 'Tommy Walsh',
      business: 'Walsh\'s Butcher Shop',
      text: 'The local SEO has been amazing. We\'re now the first result when people search for butchers in our area.',
      rating: 5
    },
    {
      name: 'Mary O\'Connor',
      business: 'O\'Connor\'s Flower Shop',
      text: 'Our website has helped us compete with the big chains. Local customers love being able to order online.',
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
                <Store className="w-5 h-5 mr-2 animate-pulse" />
                🏪 Small Business Web Design Dublin
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Small Business Web Design
                </span>
                <br />
                <span className="text-white">Dublin</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-cyan-100 mb-10 leading-relaxed">
                Help your Dublin small business compete with the big players. 
                <span className="text-yellow-300 font-bold"> Affordable web design</span> that 
                <span className="text-pink-300 font-semibold"> attracts local customers</span> and 
                <span className="text-green-300 font-semibold"> grows your business</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <button
                  onClick={handleGetQuote}
                  onKeyDown={handleKeyDown}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/25 inline-flex items-center justify-center"
                  tabIndex={0}
                  aria-label="Get your small business web design quote"
                >
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Get Your Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <Link
                  href="/templates"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
                  tabIndex={0}
                  aria-label="Browse our small business web design templates"
                >
                  <Palette className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View Templates
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center text-cyan-200">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">300+ Small Businesses</span>
                </div>
                <div className="flex items-center text-cyan-200">
                  <Target className="w-5 h-5 text-green-400 mr-2" />
                  <span className="font-semibold">Local Focus</span>
                </div>
                <div className="flex items-center text-cyan-200">
                  <Award className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="font-semibold">Budget-Friendly</span>
                </div>
              </div>
            </div>

            {/* Right Content - Business Type Showcase */}
            <div className="grid grid-cols-1 gap-6">
              {businessTypes.map((business, index) => (
                <div
                  key={business.name}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${business.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <business.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{business.name}</h3>
                  <p className="text-cyan-100">{business.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Small Businesses Need Web Design Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <Heart className="w-5 h-5 mr-2 animate-pulse" />
              Why Small Business Web Design Dublin?
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Small Business
              </span>
              <br />
              <span className="text-gray-900">Web Design Solutions</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your Dublin small business deserves a professional online presence. 
              <span className="text-green-600 font-semibold"> Small business web design Dublin</span> helps you compete with larger companies.
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
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <TrendingUp className="w-5 h-5 mr-2 animate-pulse" />
              Small Business Web Design Impact
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Small Business
              </span>
              <br />
              <span className="text-white">Success Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">97%</div>
              <div className="text-cyan-100 text-lg">of customers search online first</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">46%</div>
              <div className="text-cyan-100 text-lg">of searches are local</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">78%</div>
              <div className="text-cyan-100 text-lg">of local searches lead to purchases</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">2x</div>
              <div className="text-cyan-100 text-lg">higher revenue with website</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <Star className="w-5 h-5 mr-2 animate-pulse" />
              Dublin Small Business Success Stories
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                What Dublin Small Businesses
              </span>
              <br />
              <span className="text-gray-900">Say About Us</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what Dublin small businesses say about our 
              <span className="text-green-600 font-semibold"> small business web design services</span>.
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-blue-600/90 to-purple-600/90"></div>
        
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container-max relative z-10 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Store className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Ready for Small Business Web Design Dublin?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful Dublin small businesses who've already taken their business online with 
            <span className="text-yellow-300 font-bold"> small business web design</span>. 
            <span className="text-cyan-300 font-bold"> Your local customers are waiting.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleGetQuote}
              className="group bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-white/25 inline-flex items-center"
              tabIndex={0}
              aria-label="Get your small business web design quote now"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get Your Quote Now
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
              <span className="font-semibold">Budget-Friendly</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="font-semibold">Local Focus</span>
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

export default SmallBusinessWebDesignDublin
