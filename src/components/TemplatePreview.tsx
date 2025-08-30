'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowLeft, ArrowRight, Check, Eye, Menu } from 'lucide-react'
import { useState } from 'react'
import VoltageVisionTemplate from './templates/VoltageVisionTemplate'
import LiquidGeniusTemplate from './templates/LiquidGeniusTemplate'
import MolecularMagicTemplate from './templates/MolecularMagicTemplate'
import QuantumJusticeTemplate from './templates/QuantumJusticeTemplate'
import HeritageLawTemplate from './templates/HeritageLawTemplate'
import UrbanAdvocacyTemplate from './templates/UrbanAdvocacyTemplate'
import CurrentFlowTemplate from './templates/CurrentFlowTemplate'
import SparkMasterTemplate from './templates/SparkMasterTemplate'
import AquaFusionTemplate from './templates/AquaFusionTemplate'
import SteamPunkTemplate from './templates/SteamPunkTemplate'
import CrystalClearTemplate from './templates/CrystalClearTemplate'
import QuantumPharmacyTemplate from './templates/QuantumPharmacyTemplate'
import CommunityCareTemplate from './templates/CommunityCareTemplate'
import LuxuryApothecaryTemplate from './templates/LuxuryApothecaryTemplate'

interface Template {
  id: string
  name: string
  category: string
  description: string
  image: string
  features: string[]
  price: string
  popular: boolean
}

interface TemplatePreviewProps {
  isOpen: boolean
  onClose: () => void
  template: Template | null
  onSelect: (templateId: string) => void
}

const TemplatePreview = ({ isOpen, onClose, template, onSelect }: TemplatePreviewProps) => {
  const [showLivePreview, setShowLivePreview] = useState(false)

  const handleSelect = () => {
    if (template) {
      onSelect(template.id)
      onClose()
    }
  }

  const handleViewLivePreview = () => {
    console.log('🔥 View Live Preview clicked for:', template?.name)
    console.log('🔥 Setting showLivePreview to true')
    setShowLivePreview(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  const renderLiveTemplate = () => {
    console.log('🔥 Rendering live template for:', template?.id)
    
    // Add error boundary
    try {
      switch (template?.id) {
        case 'voltage-vision':
          console.log('🔥 Rendering VoltageVisionTemplate')
          return <VoltageVisionTemplate />
        case 'spark-master':
          console.log('🔥 Rendering SparkMasterTemplate')
          return <SparkMasterTemplate />
        case 'current-flow':
          console.log('🔥 Rendering CurrentFlowTemplate')
          return <CurrentFlowTemplate />
        case 'aqua-fusion':
          console.log('🔥 Rendering AquaFusionTemplate')
          return <AquaFusionTemplate />
        case 'steam-punk':
          console.log('🔥 Rendering SteamPunkTemplate')
          return <SteamPunkTemplate />
        case 'crystal-clear':
          console.log('🔥 Rendering CrystalClearTemplate')
          return <CrystalClearTemplate />
        case 'liquid-genius':
        case 'pipe-dreams':
        case 'flow-master':
          console.log('🔥 Rendering LiquidGeniusTemplate')
          return <LiquidGeniusTemplate />
        case 'molecular-magic':
          console.log('🔥 Rendering MolecularMagicTemplate')
          return <MolecularMagicTemplate />
        case 'quantum-pharmacy':
          console.log('🔥 Rendering QuantumPharmacyTemplate')
          return <QuantumPharmacyTemplate />
        case 'community-care':
          console.log('🔥 Rendering CommunityCareTemplate')
          return <CommunityCareTemplate />
        case 'luxury-apothecary':
          console.log('🔥 Rendering LuxuryApothecaryTemplate')
          return <LuxuryApothecaryTemplate />
        case 'quantum-justice':
          console.log('🔥 Rendering QuantumJusticeTemplate')
          return <QuantumJusticeTemplate />
        case 'heritage-law':
          console.log('🔥 Rendering HeritageLawTemplate')
          return <HeritageLawTemplate />
        case 'urban-advocacy':
          console.log('🔥 Rendering UrbanAdvocacyTemplate')
          return <UrbanAdvocacyTemplate />
        default:
          console.log('🔥 Rendering default VoltageVisionTemplate')
          return <VoltageVisionTemplate />
      }
    } catch (error) {
      console.error('🔥 Error rendering template:', error)
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-4">
          <div className="text-center text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">⚡ Live Preview</h1>
            <p className="text-lg md:text-xl">Template: {template?.name}</p>
            <p className="text-base md:text-lg">Category: {template?.category}</p>
          </div>
        </div>
      )
    }
  }

  if (!template) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-75"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {showLivePreview ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg sm:rounded-2xl w-full h-full sm:h-auto sm:max-w-7xl sm:max-h-[95vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Live Preview Header */}
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-secondary-200 bg-secondary-50 relative z-10">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <button
                    onClick={() => setShowLivePreview(false)}
                    className="p-1.5 sm:p-2 text-secondary-600 hover:text-secondary-900 transition-colors cursor-pointer"
                    tabIndex={0}
                    aria-label="Back to template details"
                    type="button"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm sm:text-lg font-semibold text-secondary-900 truncate">
                      Live Preview: {template.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-secondary-600 hidden sm:block">
                      Interactive template demonstration
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={handleSelect}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-2 sm:py-3 px-3 sm:px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 flex items-center justify-center shadow-lg text-xs sm:text-sm"
                    tabIndex={0}
                    aria-label={`Choose ${template.name} template`}
                  >
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Choose This Template</span>
                    <span className="sm:hidden">Choose</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="p-1.5 sm:p-2 text-secondary-400 hover:text-secondary-600 transition-colors duration-200 cursor-pointer"
                    tabIndex={0}
                    aria-label="Close preview"
                    type="button"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
              
              {/* Live Template */}
              <div className="h-[calc(100vh-80px)] sm:max-h-[calc(95vh-80px)] overflow-y-auto">
                {renderLiveTemplate()}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg sm:rounded-2xl w-full h-full sm:h-auto sm:max-w-4xl sm:max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-secondary-200 relative z-10">
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-2xl font-bold text-secondary-900 truncate">{template.name}</h2>
                  <p className="text-sm sm:text-base text-secondary-600">{template.category} Template</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 text-secondary-400 hover:text-secondary-600 transition-colors duration-200 cursor-pointer ml-2"
                  tabIndex={0}
                  aria-label="Close preview"
                  type="button"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Live Preview Button - Top of Modal */}
              <div className="p-3 sm:p-4 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-200">
                <button
                  onClick={handleViewLivePreview}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center border-2 sm:border-4 border-red-600 shadow-xl text-sm sm:text-lg"
                  tabIndex={0}
                  aria-label={`View live preview of ${template.name} template`}
                >
                  <Eye className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  <span className="hidden sm:inline">🔥 VIEW LIVE PREVIEW 🔥</span>
                  <span className="sm:hidden">🔥 LIVE PREVIEW 🔥</span>
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto max-h-[calc(100vh-200px)] sm:max-h-[calc(90vh-200px)]">
                {/* Template Image */}
                <div className="relative">
                  <div className="w-full h-32 sm:h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center rounded-lg">
                    <div className="text-center text-white">
                      <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">
                        {template.category === 'electrician' && '⚡'}
                        {template.category === 'plumber' && '💧'}
                        {template.category === 'chemist' && '🧪'}
                        {template.category === 'solicitor' && '⚖️'}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold">{template.name}</h3>
                      <p className="text-xs sm:text-base text-blue-100">{template.category} Template</p>
                    </div>
                  </div>
                  {template.popular && (
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-primary-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="hidden sm:inline">Popular Choice</span>
                      <span className="sm:hidden">Popular</span>
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="text-center bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-3 sm:p-4">
                  <div className="text-2xl sm:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">
                    {template.price}
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-600">One-time payment</p>
                </div>

                {/* Description */}
                <div className="bg-white rounded-lg p-3 sm:p-4 border border-secondary-200">
                  <h3 className="font-semibold text-secondary-900 mb-2 sm:mb-3 text-base sm:text-lg">Description</h3>
                  <p className="text-sm sm:text-base text-secondary-700 leading-relaxed">
                    {template.description}
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white rounded-lg p-3 sm:p-4 border border-secondary-200">
                  <h3 className="font-semibold text-secondary-900 mb-3 sm:mb-4 text-base sm:text-lg">Key Features</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {/* 5 Page Website Highlight */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <h4 className="font-semibold text-blue-800 text-base sm:text-lg">5-Page Website Included</h4>
                      </div>
                      <p className="text-sm sm:text-base text-blue-700 leading-relaxed mb-2 sm:mb-3">
                        Get a complete 5-page website with Home, About, Services, Portfolio, and Contact pages. 
                        Each additional page costs just <span className="font-bold text-blue-800">€50.00</span>.
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">Home</span>
                        <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">About</span>
                        <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">Services</span>
                        <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">Portfolio</span>
                        <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">Contact</span>
                      </div>
                    </div>
                    
                    {/* Editable Features */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-semibold text-secondary-800 text-sm sm:text-base">Fully Editable Website Features:</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {template.features
                          .filter(feature => !feature.toLowerCase().includes('ai') && !feature.toLowerCase().includes('tracker'))
                          .map((feature, index) => (
                            <li key={index} className="flex items-start text-secondary-700">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-600 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Editable Website Highlight */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <h4 className="font-semibold text-green-800 text-base sm:text-lg">Fully Editable Website</h4>
                  </div>
                  <p className="text-sm sm:text-base text-green-700 leading-relaxed mb-2 sm:mb-3">
                    Every element is customizable! Change colors, text, images, and layout to perfectly match your brand. 
                    No coding required - everything is editable through our user-friendly interface.
                  </p>
                  
                  {/* CMS Pricing Highlight */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-3 sm:p-4 mb-3">
                    <div className="flex items-center mb-2">
                      <div className="w-5 h-5 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-2">
                        <span className="text-xs font-bold">€</span>
                      </div>
                      <h5 className="font-bold text-yellow-800 text-sm sm:text-base">Content Management System (CMS)</h5>
                    </div>
                    <p className="text-sm text-yellow-700 leading-relaxed mb-2">
                      <span className="font-bold text-yellow-800">€100 per page</span> to make each page editable through our CMS. 
                      This allows you to update content, images, and text without any coding knowledge.
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">€100/page</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Easy Content Updates</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">No Coding Required</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">User-Friendly Interface</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <span className="bg-green-100 text-green-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">Custom Branding</span>
                    <span className="bg-green-100 text-green-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">Content Management</span>
                    <span className="bg-green-100 text-green-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">SEO Optimized</span>
                    <span className="bg-green-100 text-green-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">Mobile Responsive</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2 sm:space-y-3">
                  <button
                    onClick={handleSelect}
                    className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 flex items-center justify-center text-sm sm:text-base"
                    tabIndex={0}
                    aria-label={`Select ${template.name} template`}
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Choose This Template
                  </button>
                  
                  <button
                    onClick={onClose}
                    className="w-full bg-secondary-200 hover:bg-secondary-300 text-secondary-800 font-semibold py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 text-sm sm:text-base"
                    tabIndex={0}
                    aria-label="Continue browsing templates"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TemplatePreview
