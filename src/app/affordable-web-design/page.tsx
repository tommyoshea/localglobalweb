'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { DollarSign, Clock, CheckCircle, Star, Users, Award, Zap, Smartphone, Search, Palette, Shield, ArrowRight, Rocket, TrendingUp, Target, Globe, Heart, Sparkles } from 'lucide-react'
import Link from 'next/link'

const AffordableWebDesign = () => {
  const handleGetQuote = () => {
    window.location.href = '/contact'
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleGetQuote()
    }
  }

  const pricingPlans = [
    {
      name: 'Starter',
      price: '€299',
      period: 'one-time',
      description: 'Perfect for small businesses getting started online',
      features: [
        'Up to 5 pages',
        'Mobile responsive design',
        'Contact form',
        'Basic SEO optimization',
        'Social media integration',
        '1 month free support',
        'SSL certificate included'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '€599',
      period: 'one-time',
      description: 'Ideal for growing businesses with more content needs',
      features: [
        'Up to 10 pages',
        'Advanced responsive design',
        'Custom contact forms',
        'Advanced SEO optimization',
        'Google Analytics setup',
        '3 months free support',
        'SSL certificate included',
        'Content management system'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Premium',
      price: '€999',
      period: 'one-time',
      description: 'Complete solution for established businesses',
      features: [
        'Unlimited pages',
        'Premium responsive design',
        'Advanced contact forms',
        'Full SEO optimization',
        'Google Analytics & Search Console',
        '6 months free support',
        'SSL certificate included',
        'Advanced CMS',
        'E-commerce integration',
        'Custom animations'
      ],
      popular: false,
      color: 'from-emerald-500 to-teal-500'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Unbeatable Value',
      description: 'Get professional web design at a fraction of the cost of traditional agencies',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Your website ready in 7-14 days, not months like other agencies',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Every website meets our high standards with 99% client satisfaction',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with sub-2 second load times guaranteed',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Perfect',
      description: 'Responsive design that looks stunning on all devices',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Search,
      title: 'SEO Ready',
      description: 'Built-in SEO optimization to help you rank on Google',
      color: 'from-pink-400 to-rose-500'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah O\'Brien',
      business: 'Dublin Coffee Co.',
      text: 'LocalGlobalWeb delivered an amazing website for our coffee shop at an incredible price. We\'re getting more customers than ever!',
      rating: 5
    },
    {
      name: 'Michael Murphy',
      business: 'Murphy\'s Plumbing',
      text: 'Professional service, fair pricing, and our new website has brought in so many new customers. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emma Walsh',
      business: 'Walsh Beauty Studio',
      text: 'The team understood exactly what we needed and delivered beyond our expectations. Our online bookings have tripled!',
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
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
                <DollarSign className="w-5 h-5 mr-2 animate-pulse" />
                💰 Affordable Web Design Dublin
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Affordable Web Design
                </span>
                <br />
                <span className="text-white">That Works</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-cyan-100 mb-10 leading-relaxed">
                Get a professional website for your Dublin business starting from just 
                <span className="text-yellow-300 font-bold"> €299</span>. 
                <span className="text-pink-300 font-semibold"> No hidden fees.</span> 
                <span className="text-green-300 font-semibold"> No monthly costs.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <button
                  onClick={handleGetQuote}
                  onKeyDown={handleKeyDown}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/25 inline-flex items-center justify-center"
                  tabIndex={0}
                  aria-label="Get your affordable web design quote"
                >
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Get Your Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <Link
                  href="/templates"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
                  tabIndex={0}
                  aria-label="Browse our affordable web design templates"
                >
                  <Palette className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View Templates
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center text-cyan-200">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">500+ Happy Clients</span>
                </div>
                <div className="flex items-center text-cyan-200">
                  <Target className="w-5 h-5 text-green-400 mr-2" />
                  <span className="font-semibold">99% Success Rate</span>
                </div>
                <div className="flex items-center text-cyan-200">
                  <Award className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="font-semibold">Award Winning</span>
                </div>
              </div>
            </div>

            {/* Right Content - Pricing Preview */}
            <div className="grid grid-cols-1 gap-6">
              {pricingPlans.slice(0, 2).map((plan, index) => (
                <div
                  key={plan.name}
                  className={`group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    {plan.popular && (
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="text-4xl font-black text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-cyan-200">/{plan.period}</span>
                  </div>
                  <p className="text-cyan-100 mb-4">{plan.description}</p>
                  <ul className="space-y-2">
                    {plan.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-cyan-100">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Affordable Web Design Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <Heart className="w-5 h-5 mr-2 animate-pulse" />
              Why Choose Our Affordable Web Design?
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Quality Web Design
              </span>
              <br />
              <span className="text-gray-900">At Unbeatable Prices</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe every Dublin business deserves a professional online presence. 
              <span className="text-blue-600 font-semibold"> That's why we offer affordable web design</span> without compromising on quality.
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

      {/* Pricing Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <DollarSign className="w-5 h-5 mr-2 animate-pulse" />
              Transparent Pricing
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Affordable Web Design
              </span>
              <br />
              <span className="text-white">Packages</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect affordable web design package for your Dublin business. 
              <span className="text-yellow-300 font-semibold"> All packages include free support and updates.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="text-center mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-5xl font-black text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-cyan-200">/{plan.period}</span>
                  </div>
                  <p className="text-cyan-100">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={handleGetQuote}
                  className={`w-full py-4 px-6 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <Star className="w-5 h-5 mr-2 animate-pulse" />
              Client Success Stories
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                What Our Clients
              </span>
              <br />
              <span className="text-gray-900">Say About Us</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what Dublin businesses say about our 
              <span className="text-green-600 font-semibold"> affordable web design services</span>.
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

      {/* FAQ Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              Frequently Asked Questions
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Affordable Web Design
              </span>
              <br />
              <span className="text-white">Questions & Answers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">What's included in your affordable web design packages?</h3>
              <p className="text-cyan-100 leading-relaxed">
                All our packages include responsive design, SEO optimization, contact forms, SSL certificate, and free support. Higher packages include more pages, advanced features, and longer support periods.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">How long does it take to complete my website?</h3>
              <p className="text-cyan-100 leading-relaxed">
                Most websites are completed within 7-14 days. Complex projects may take up to 21 days. We'll provide you with a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Do you offer ongoing support after launch?</h3>
              <p className="text-cyan-100 leading-relaxed">
                Yes! All packages include free support periods (1-6 months depending on package). After that, we offer affordable maintenance plans starting from €50/month.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Can I make changes to my website after it's live?</h3>
              <p className="text-cyan-100 leading-relaxed">
                Absolutely! During your free support period, we'll make any necessary changes. After that, we offer affordable update packages or you can choose our maintenance plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
        
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container-max relative z-10 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Ready to Get Your Affordable Web Design?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful Dublin businesses who've already taken their brand online with our 
            <span className="text-yellow-300 font-bold"> affordable web design services</span>. 
            <span className="text-cyan-300 font-bold"> Your success story starts here.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleGetQuote}
              className="group bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-white/25 inline-flex items-center"
              tabIndex={0}
              aria-label="Get your affordable web design quote now"
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
              <span className="font-semibold">No Hidden Fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="font-semibold">Quality Assured</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="font-semibold">Ongoing Support</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AffordableWebDesign
