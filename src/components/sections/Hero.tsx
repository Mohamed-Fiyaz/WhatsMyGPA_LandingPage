"use client"

import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true)
  }, [])

  const handleDownloadClick = () => {
    // Open the App Store link in a new tab
    window.open('https://apps.apple.com/us/app/whats-my-gpa/id6747209109', '_blank')
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
                <svg
                  className="w-5 h-5 fill-white flex-shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginBottom: '4px' }}
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download the app
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
    </section>
  )
}

export default Hero