"use client"

import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { Download } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true)
  }, [])

  const handleDownloadClick = () => {
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 3000) // Auto close after 3 seconds
  }

  return (
    <section className="hero-bg text-white min-h-screen flex flex-col items-center pt-16 pb-8 px-4 sm:px-0 sm:pt-20 relative overflow-hidden">
      <Container className="flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-6 lg:space-y-8 text-center lg:text-left transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="space-y-3 lg:space-y-4">
              <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-nunito-black leading-tight text-stroke-black transition-all duration-1200 ease-out delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                An App Made for{' '}
                <span className={`font-nunito-black transition-colors duration-1000 ease-out delay-700 ${
                  isVisible ? 'text-[#0A529F]' : 'text-white'
                }`}>
                  SRM IST
                </span>{' '}
                Students.
              </h1>
              <p className={`text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 ease-out delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
                Simply select your course and specialization. The app preloads all subjects and credits, so you only need to enter your grades or SGPA.
              </p>
              <p className={`text-lg sm:text-xl font-bold transition-all duration-1000 ease-out delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
                No manual work. Just results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 ease-out delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <Button
                size="lg"
                onClick={handleDownloadClick}
                className="bg-[#4580A7] hover:bg-[#3a6b8f] flex items-center justify-center gap-2 font-nunito-black font-black rounded-full px-6 py-3 w-full sm:w-auto text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 group"
                style={{ outline: 'none', border: 'none' }}
              >
                 Download the app
              </Button>
            </div>
          </div>

          {/* Right Content - iPhone Screenshots */}
          <div className={`relative mt-8 lg:mt-0 order-first lg:order-last transition-all duration-1200 ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative z-10 flex justify-center items-center">
              
              {/* Mobile: Single Screenshot */}
              <div className="block sm:hidden">
                <div className={`transition-all duration-1200 ease-out delay-600 ${
                  isVisible ? 'translate-y-0 scale-100 rotate-0' : 'translate-y-16 scale-75 rotate-6'
                }`}>
                  <Image
                    src="/screenshots/preloaded_SGPA_thumb.png"
                    alt="What's My GPA App - SGPA Screen"
                    width={260}
                    height={520}
                    className="drop-shadow-2xl w-auto h-auto max-w-[260px] hover:scale-110 hover:-rotate-1 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Tablet: Both Screenshots Side by Side */}
              <div className="hidden sm:flex lg:hidden justify-center items-center gap-4">
                <div className={`relative transition-all duration-1000 ease-out delay-700 ${
                  isVisible ? 'translate-y-0 rotate-0' : 'translate-y-8 -rotate-3'
                }`}>
                  <Image
                    src="/screenshots/Launchscreen_whatsmygpa_thumb.png"
                    alt="What's My GPA App - iPhone Screenshot"
                    width={260}
                    height={520}
                    className="drop-shadow-2xl w-auto h-auto max-w-[260px] hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                <div className={`relative transition-all duration-1000 ease-out delay-900 ${
                  isVisible ? 'translate-y-0 rotate-0' : 'translate-y-8 rotate-3'
                }`}>
                  <Image
                    src="/screenshots/preloaded_SGPA_thumb.png"
                    alt="What's My GPA App - SGPA Screen"
                    width={260}
                    height={520}
                    className="drop-shadow-xl w-auto h-auto max-w-[260px] hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Desktop: Overlapping Screenshots */}
              <div className="hidden lg:flex justify-center items-center">
                {/* Main iPhone Screenshot */}
                <div className={`relative transition-all duration-1200 ease-out delay-700 ${
                  isVisible ? 'translate-y-0 rotate-0' : 'translate-y-12 -rotate-6'
                }`}>
                  <Image
                    src="/screenshots/Launchscreen_whatsmygpa_thumb.png"
                    alt="What's My GPA App - iPhone Screenshot"
                    width={280}
                    height={560}
                    className="drop-shadow-2xl w-auto h-auto max-w-[280px] xl:max-w-[320px] hover:scale-105 hover:-rotate-1 transition-all duration-300"
                    priority
                  />
                </div>

                {/* Second Screenshot - Overlapping */}
                <div className={`absolute -right-4 xl:-right-8 top-4 xl:top-8 transition-all duration-1200 ease-out delay-1000 ${
                  isVisible ? 'translate-y-0 rotate-0' : 'translate-y-12 rotate-6'
                }`}>
                  <Image
                    src="/screenshots/preloaded_SGPA_thumb.png"
                    alt="What's My GPA App - SGPA Screen"
                    width={260}
                    height={520}
                    className="drop-shadow-xl w-auto h-auto max-w-[260px] xl:max-w-[300px] hover:scale-105 hover:rotate-1 transition-all duration-300"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>

      {/* Enhanced Popup Modal with animations */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full mx-4 text-center shadow-2xl animate-in fade-in zoom-in slide-in-from-bottom-4 duration-500">
            <div className="mb-4">
              <div className="w-16 h-16 bg-[#4580A7] rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-700 delay-200">
                <Download className="w-8 h-8 text-white animate-bounce" />
              </div>
              <h3 className="text-xl font-nunito-black text-gray-800 mb-2 animate-in slide-in-from-bottom-2 duration-500 delay-300">
                Coming Soon!
              </h3>
              <p className="text-gray-600 animate-in slide-in-from-bottom-2 duration-500 delay-400">
                The app will be released soon. Stay tuned for updates!
              </p>
            </div>
            <Button
              onClick={() => setShowPopup(false)}
              className="bg-[#4580A7] hover:bg-[#3a6b8f] text-white px-6 py-2 rounded-full font-nunito-black transition-all duration-200 focus:outline-none focus:ring-0 active:outline-none border-0 focus:border-0 active:border-0 hover:scale-105 active:scale-95 animate-in slide-in-from-bottom-2 duration-500 delay-500"
              style={{ outline: 'none', border: 'none' }}
            >
              Got it
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero