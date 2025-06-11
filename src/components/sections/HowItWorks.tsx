"use client"

import Image from 'next/image'
import Container from '@/components/ui/Container'
import { ArrowRight, Smartphone, Calculator, FileText, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const HowItWorks = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [preloadedSlide, setPreloadedSlide] = useState(0)
  const [standardSlide, setStandardSlide] = useState(0)
  const [desktopSection, setDesktopSection] = useState(0) // 0 = preloaded, 1 = standard
  const [visibleSections, setVisibleSections] = useState(new Set())
  
  const mainCarouselRef = useRef(null)
  const preloadedCarouselRef = useRef(null)
  const standardCarouselRef = useRef(null)
  const desktopCarouselRef = useRef(null)
  
  // Refs for scroll animation triggers
  const headerRef = useRef(null)
  const desktopScreenshotsRef = useRef(null)
  const mobileCarouselRef = useRef(null)
  const descriptionRef = useRef(null)
  const calculatorSectionsRef = useRef(null)
  const mobilePreloadedRef = useRef(null)
  const mobileStandardRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section')
          if (sectionId) {
            setVisibleSections(prev => new Set([...prev, sectionId]))
          }
        }
      })
    }, observerOptions)

    const sections = [headerRef, desktopScreenshotsRef, mobileCarouselRef, descriptionRef, calculatorSectionsRef, mobilePreloadedRef, mobileStandardRef]
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      id: 1,
      title: 'Choose Your Calculator',
      description: 'Select between Preloaded GPA Calculator (for B.Tech and Integrated M.Tech students) or Standard GPA Calculator (for all programs).',
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'Enter Your Details',
      description: 'For preloaded calculator, just select your course and specialization. For standard calculator, manually enter subjects and credits.',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'Get Your Results',
      description: 'Enter your grades and instantly calculate your SGPA and CGPA. No manual calculations needed!',
      icon: <Calculator className="w-8 h-8" />,
    },
  ]

  const mainScreenshots = [
    { src: "/screenshots/calculator_options_thumb.png", alt: "Home Screen", title: "Choose Calculator" },
    { src: "/screenshots/preloaded_thumb.png", alt: "Preloaded Calculator", title: "Preloaded Option" },
    { src: "/screenshots/standard_thumb.png", alt: "Standard Calculator", title: "Standard Option" }
  ]

  const preloadedScreenshots = [
    { src: "/screenshots/preloaded_sgpa_thumb.png", alt: "SGPA Calculator", title: "SGPA", type: "SGPA" },
    { src: "/screenshots/preloaded_cgpa_thumb.png", alt: "CGPA Calculator", title: "CGPA", type: "CGPA" }
  ]

  const standardScreenshots = [
    { src: "/screenshots/standard_sgpa_thumb.png", alt: "Standard SGPA Calculator", title: "SGPA", type: "SGPA" },
    { src: "/screenshots/standard_cgpa_thumb.png", alt: "Standard CGPA Calculator", title: "CGPA", type: "CGPA" }
  ]

  const scrollToSlide = (ref, index) => {
    if (ref.current) {
      const slideWidth = ref.current.offsetWidth
      ref.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = (ref, setSlide) => {
    if (ref.current) {
      const slideWidth = ref.current.offsetWidth
      const currentIndex = Math.round(ref.current.scrollLeft / slideWidth)
      setSlide(currentIndex)
    }
  }

  const handleDesktopScroll = () => {
    if (desktopCarouselRef.current) {
      const slideWidth = desktopCarouselRef.current.offsetWidth
      const currentIndex = Math.round(desktopCarouselRef.current.scrollLeft / slideWidth)
      setDesktopSection(currentIndex)
    }
  }

  useEffect(() => {
    const mainRef = mainCarouselRef.current
    const preloadedRef = preloadedCarouselRef.current
    const standardRef = standardCarouselRef.current
    const desktopRef = desktopCarouselRef.current

    const handleMainScroll = () => handleScroll(mainCarouselRef, setActiveSlide)
    const handlePreloadedScroll = () => handleScroll(preloadedCarouselRef, setPreloadedSlide)
    const handleStandardScroll = () => handleScroll(standardCarouselRef, setStandardSlide)

    if (mainRef) mainRef.addEventListener('scroll', handleMainScroll)
    if (preloadedRef) preloadedRef.addEventListener('scroll', handlePreloadedScroll)
    if (standardRef) standardRef.addEventListener('scroll', handleStandardScroll)
    if (desktopRef) desktopRef.addEventListener('scroll', handleDesktopScroll)

    return () => {
      if (mainRef) mainRef.removeEventListener('scroll', handleMainScroll)
      if (preloadedRef) preloadedRef.removeEventListener('scroll', handlePreloadedScroll)
      if (standardRef) standardRef.removeEventListener('scroll', handleStandardScroll)
      if (desktopRef) desktopRef.removeEventListener('scroll', handleDesktopScroll)
    }
  }, [])

  const GlassChevron = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full 
        backdrop-blur-md bg-white/30 border border-white/50 shadow-lg
        flex items-center justify-center transition-all duration-300
        md:hover:bg-white/40 md:hover:shadow-xl md:hover:scale-105 
        opacity-90 md:hover:opacity-100
        active:scale-95 transform-gpu touch-manipulation
        ${direction === 'left' ? 'left-4' : 'right-4'}
      `}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6 text-gray-700 md:hover:text-[#4580A7] transition-colors duration-300" />
      ) : (
        <ChevronRight className="w-6 h-6 text-gray-700 md:hover:text-[#4580A7] transition-colors duration-300" />
      )}
    </button>
  )

  const ScrollIndicators = ({ total, active, className = "" }) => (
    <div className={`flex justify-center space-x-2 ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-500 transform-gpu ${
            index === active 
              ? 'bg-[#4580A7] scale-125 shadow-lg' 
              : 'bg-gray-300 md:hover:bg-gray-400 md:hover:scale-110'
          }`}
        />
      ))}
    </div>
  )

  const CarouselDots = ({ total, active, onDotClick }) => (
    <div className="flex justify-center space-x-2 mt-4 md:hidden">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 transform-gpu touch-manipulation ${
            index === active ? 'bg-[#4580A7] scale-110' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  )

  const SectionDivider = () => (
    <div className="flex justify-center my-16">
      <div className="w-32 h-0.5 bg-[#4580A7] animate-pulse"></div>
    </div>
  )

  const DesktopNavigationButtons = () => (
    <div className="hidden md:flex justify-center items-center gap-4 mb-8">
      <button
        onClick={() => scrollToSlide(desktopCarouselRef, 0)}
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform-gpu 
        md:hover:scale-105 active:scale-95 touch-manipulation ${
          desktopSection === 0 
            ? 'bg-[#4580A7] text-white shadow-lg md:hover:shadow-xl' 
            : 'bg-white text-[#4580A7] border-2 border-[#4580A7] md:hover:bg-[#4580A7] md:hover:text-white md:hover:shadow-lg'
        }`}
      >
        Preloaded GPA Calculator
      </button>
      <button
        onClick={() => scrollToSlide(desktopCarouselRef, 1)}
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform-gpu 
        md:hover:scale-105 active:scale-95 touch-manipulation ${
          desktopSection === 1 
            ? 'bg-[#4580A7] text-white shadow-lg md:hover:shadow-xl' 
            : 'bg-white text-[#4580A7] border-2 border-[#4580A7] md:hover:bg-[#4580A7] md:hover:text-white md:hover:shadow-lg'
        }`}
      >
        Standard GPA Calculator
      </button>
    </div>
  )

  const AnimatedImage = ({ src, alt, width, height, className = "", title }) => (
    <div className="group">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-all duration-300 transform-gpu md:group-hover:scale-105 ${className}`}
      />
      {title && (
        <p className="text-center text-gray-700 font-medium mt-3 transition-colors duration-300 md:group-hover:text-[#4580A7]">
          {title}
        </p>
      )}
    </div>
  )

  const AnimatedBadge = ({ type }) => (
    <div className="bg-[#4580A7] text-white px-4 py-2 rounded-full mb-4 font-medium transition-all duration-300 transform-gpu md:hover:scale-105 md:hover:shadow-lg md:hover:bg-[#3a6b8a]">
      {type}
    </div>
  )

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <Container>
        <div 
          ref={headerRef}
          data-section="header"
          className={`text-center mb-16 transition-all duration-1000 transform ${
            visibleSections.has('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose Your GPA Calculator
          </p>
        </div>

        {/* Desktop: Three Phone Mockups Side by Side */}
        <div 
          ref={desktopScreenshotsRef}
          data-section="desktop-screenshots"
          className={`hidden md:flex justify-center items-center gap-8 mb-16 transition-all duration-1000 transform ${
            visibleSections.has('desktop-screenshots') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {mainScreenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 transition-all duration-1000 transform ${
                visibleSections.has('desktop-screenshots') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: visibleSections.has('desktop-screenshots') ? `${index * 150}ms` : '0ms' }}
            >
              <AnimatedImage
                src={screenshot.src}
                alt={screenshot.alt}
                width={250}
                height={500}
                className="drop-shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Mobile: Swipeable Carousel with Chevrons */}
        <div 
          ref={mobileCarouselRef}
          data-section="mobile-carousel"
          className={`md:hidden mb-8 transition-all duration-1000 transform ${
            visibleSections.has('mobile-carousel') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div 
              ref={mainCarouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {mainScreenshots.map((screenshot, index) => (
                <div key={index} className="flex-shrink-0 w-full flex flex-col items-center snap-center px-4">
                  <AnimatedImage
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={200}
                    height={400}
                    className="drop-shadow-xl"
                    title={screenshot.title}
                  />
                </div>
              ))}
            </div>
            
            <GlassChevron 
              direction="left" 
              onClick={() => scrollToSlide(mainCarouselRef, Math.max(0, activeSlide - 1))}
            />
            <GlassChevron 
              direction="right" 
              onClick={() => scrollToSlide(mainCarouselRef, Math.min(mainScreenshots.length - 1, activeSlide + 1))}
            />
          </div>
          
          <ScrollIndicators 
            total={mainScreenshots.length} 
            active={activeSlide} 
            className="mt-4"
          />
        </div>

        {/* Description Text */}
        <div 
          ref={descriptionRef}
          data-section="description"
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 transform ${
            visibleSections.has('description') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg text-gray-700 mb-6">
            <strong>The Preloaded GPA Calculator</strong> is designed for B.Tech and
            Integrated M.Tech students of SRM IST under the 21 Regulation and newer.
            It automatically fills in subjects and credits for you.
          </p>
          <p className="text-lg text-gray-700">
            If you are not from this group or prefer to enter your details manually,
            you can use the <strong>Standard GPA Calculator</strong> which supports
            all degree programs.
          </p>
        </div>

        <SectionDivider />

        {/* Desktop: Horizontal Scrollable Sections with Chevrons */}
        <div 
          ref={calculatorSectionsRef}
          data-section="calculator-sections"
          className={`hidden md:block mb-2 transition-all duration-1000 transform ${
            visibleSections.has('calculator-sections') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div 
              ref={desktopCarouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Preloaded GPA Calculator Section */}
              <div className="flex-shrink-0 w-full snap-center">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  Preloaded GPA Calculator
                </h3>
                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                  {preloadedScreenshots.map((screenshot, index) => (
                    <div 
                      key={index} 
                      className={`text-center transition-all duration-1000 transform ${
                        visibleSections.has('calculator-sections') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: visibleSections.has('calculator-sections') ? `${index * 200}ms` : '0ms' }}
                    >
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{screenshot.type}</h4>
                      <div className="flex justify-center">
                        <AnimatedImage
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={300}
                          height={600}
                          className="drop-shadow-xl"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-gray-600 max-w-3xl mx-auto">
                  The list of subjects along with their credits and total number of semesters
                  along with their total credits is preloaded according to the course and
                  specialization selected by the user.
                </p>
              </div>

              {/* Standard GPA Calculator Section */}
              <div className="flex-shrink-0 w-full snap-center">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  Standard GPA Calculator
                </h3>
                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                  {standardScreenshots.map((screenshot, index) => (
                    <div 
                      key={index} 
                      className={`text-center transition-all duration-1000 transform ${
                        visibleSections.has('calculator-sections') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: visibleSections.has('calculator-sections') ? `${index * 200}ms` : '0ms' }}
                    >
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{screenshot.type}</h4>
                      <div className="flex justify-center">
                        <AnimatedImage
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={300}
                          height={600}
                          className="drop-shadow-xl"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-gray-600 max-w-3xl mx-auto">
                  The user has to manually enter the number of credits per subject, the overall
                  total credits, the total number of subjects, and the total number of semesters.
                </p>
              </div>
            </div>

            <GlassChevron 
              direction="left" 
              onClick={() => scrollToSlide(desktopCarouselRef, 0)}
            />
            <GlassChevron 
              direction="right" 
              onClick={() => scrollToSlide(desktopCarouselRef, 1)}
            />
          </div>
          
          <ScrollIndicators 
            total={2} 
            active={desktopSection} 
            className="mt-8"
          />
        </div>

        {/* Mobile: Original Vertical Layout with Enhanced Carousels and Animations */}
        <div className="md:hidden">
          {/* Preloaded GPA Calculator Section */}
          <div 
            ref={mobilePreloadedRef}
            data-section="mobile-preloaded"
            className={`mb-16 transition-all duration-1000 transform ${
              visibleSections.has('mobile-preloaded') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Preloaded GPA Calculator
            </h3>

            <div className="mb-8">
              <div className="relative">
                <div 
                  ref={preloadedCarouselRef}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {preloadedScreenshots.map((screenshot, index) => (
                    <div key={index} className="flex-shrink-0 w-full flex flex-col items-center snap-center px-4">
                      <AnimatedBadge type={screenshot.type} />
                      <AnimatedImage
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={280}
                        height={560}
                        className="drop-shadow-xl"
                      />
                    </div>
                  ))}
                </div>
                
                <GlassChevron 
                  direction="left" 
                  onClick={() => scrollToSlide(preloadedCarouselRef, Math.max(0, preloadedSlide - 1))}
                />
                <GlassChevron 
                  direction="right" 
                  onClick={() => scrollToSlide(preloadedCarouselRef, Math.min(preloadedScreenshots.length - 1, preloadedSlide + 1))}
                />
              </div>
              
              <ScrollIndicators 
                total={preloadedScreenshots.length} 
                active={preloadedSlide} 
                className="mt-4"
              />
            </div>

            <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
              The list of subjects along with their credits and total number of semesters
              along with their total credits is preloaded according to the course and
              specialization selected by the user.
            </p>
          </div>

          <SectionDivider />

          {/* Standard GPA Calculator Section */}
          <div 
            ref={mobileStandardRef}
            data-section="mobile-standard"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('mobile-standard') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Standard GPA Calculator
            </h3>

            <div className="mb-8">
              <div className="relative">
                <div 
                  ref={standardCarouselRef}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {standardScreenshots.map((screenshot, index) => (
                    <div key={index} className="flex-shrink-0 w-full flex flex-col items-center snap-center px-4">
                      <AnimatedBadge type={screenshot.type} />
                      <AnimatedImage
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={280}
                        height={560}
                        className="drop-shadow-xl"
                      />
                    </div>
                  ))}
                </div>
                
                <GlassChevron 
                  direction="left" 
                  onClick={() => scrollToSlide(standardCarouselRef, Math.max(0, standardSlide - 1))}
                />
                <GlassChevron 
                  direction="right" 
                  onClick={() => scrollToSlide(standardCarouselRef, Math.min(standardScreenshots.length - 1, standardSlide + 1))}
                />
              </div>
              
              <ScrollIndicators 
                total={standardScreenshots.length} 
                active={standardSlide} 
                className="mt-4"
              />
            </div>

            <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
              The user has to manually enter the number of credits per subject, the overall
              total credits, the total number of subjects, and the total number of semesters.
            </p>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default HowItWorks