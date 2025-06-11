"use client"

import Image from 'next/image'
import Container from '@/components/ui/Container'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState, useRef, useEffect, useCallback } from 'react'

interface Screenshot {
  src: string
  alt: string
  title: string
  type?: string
}

interface GlassChevronProps {
  direction: 'left' | 'right'
  onClick: () => void
}

interface ScrollIndicatorsProps {
  total: number
  active: number
  className?: string
}

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  title?: string
}

interface PopupCarouselProps {
  screenshots: Screenshot[]
  title: string
  isOpen: boolean
  onClose: () => void
}

const HowItWorks = () => {
  const [desktopSection, setDesktopSection] = useState(0)
  // Track sections that have been animated (one-time animation)
  const [animatedSections, setAnimatedSections] = useState<Set<string>>(new Set())
  
  // Mobile popup states
  const [popupOpen, setPopupOpen] = useState<string | null>(null)
  
  // Fixed ref types - using proper HTMLDivElement type
  const desktopCarouselRef = useRef<HTMLDivElement>(null)
  
  // Refs for scroll animation triggers
  const headerRef = useRef<HTMLDivElement>(null)
  const desktopScreenshotsRef = useRef<HTMLDivElement>(null)
  const mobileCarouselRef = useRef<HTMLDivElement>(null)
  const calculatorSectionsRef = useRef<HTMLDivElement>(null)

  // Intersection Observer with stable settings
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '50px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute('data-section')
        if (sectionId) {
          if (entry.isIntersecting) {
            // Mark section as animated when it becomes visible for the first time
            setAnimatedSections(prevAnimated => {
              const newAnimatedSet = new Set(prevAnimated)
              newAnimatedSet.add(sectionId)
              return newAnimatedSet
            })
          }
        }
      })
    }, observerOptions)

    const sections = [
      headerRef,
      desktopScreenshotsRef,
      mobileCarouselRef,
      calculatorSectionsRef,
    ]

    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (popupOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [popupOpen])

  const mainScreenshots: Screenshot[] = [
    { src: "/screenshots/calculator_options_thumb.png", alt: "Home Screen", title: "Choose Calculator" },
    { src: "/screenshots/preloaded_thumb.png", alt: "Preloaded Calculator", title: "Preloaded Option" },
    { src: "/screenshots/standard_thumb.png", alt: "Standard Calculator", title: "Standard Option" }
  ]

  const preloadedScreenshots: Screenshot[] = [
    { src: "/screenshots/preloaded_SGPA_thumb.png", alt: "SGPA Calculator", title: "SGPA", type: "SGPA" },
    { src: "/screenshots/preloaded_cgpa_thumb.png", alt: "CGPA Calculator", title: "CGPA", type: "CGPA" }
  ]

  const standardScreenshots: Screenshot[] = [
    { src: "/screenshots/standard_sgpa_thumb.png", alt: "Standard SGPA Calculator", title: "SGPA", type: "SGPA" },
    { src: "/screenshots/standard_cgpa_thumb.png", alt: "Standard CGPA Calculator", title: "CGPA", type: "CGPA" }
  ]

  // Fixed scroll function with proper null checking and typing
  const scrollToSlide = useCallback((
    ref: React.RefObject<HTMLDivElement | null>, 
    index: number
  ) => {
    if (!ref.current) return

    const slideWidth = ref.current.offsetWidth
    ref.current.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    })
  }, [])

  // Simplified and optimized scroll handler
  const handleScroll = useCallback((
    ref: React.RefObject<HTMLDivElement>, 
    setSlide: (value: number) => void,
    totalSlides: number
  ) => {
    if (!ref.current) return
    
    const slideWidth = ref.current.offsetWidth
    const scrollLeft = ref.current.scrollLeft
    const currentIndex = Math.round(scrollLeft / slideWidth)
    const clampedIndex = Math.max(0, Math.min(totalSlides - 1, currentIndex))
    
    setSlide(clampedIndex)
  }, [])

  // Throttled scroll handlers to prevent flickering
  const createThrottledHandler = useCallback((
    ref: React.RefObject<HTMLDivElement>,
    setSlide: (value: number) => void,
    totalSlides: number
  ) => {
    let ticking = false
    
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll(ref, setSlide, totalSlides)
          ticking = false
        })
        ticking = true
      }
    }
  }, [handleScroll])

  useEffect(() => {
    const desktopRef = desktopCarouselRef.current

    // Create throttled handler
    const handleDesktopScroll = createThrottledHandler(desktopCarouselRef as React.RefObject<HTMLDivElement>, setDesktopSection, 2)

    // Add event listener with passive flag for better performance
    if (desktopRef) {
      desktopRef.addEventListener('scroll', handleDesktopScroll, { passive: true })
    }

    return () => {
      if (desktopRef) {
        desktopRef.removeEventListener('scroll', handleDesktopScroll)
      }
    }
  }, [createThrottledHandler])

  const getCurrentPopupScreenshots = () => {
    switch (popupOpen) {
      case 'main':
        return mainScreenshots
      case 'preloaded':
        return preloadedScreenshots
      case 'standard':
        return standardScreenshots
      default:
        return []
    }
  }

  const getCurrentPopupTitle = () => {
    switch (popupOpen) {
      case 'main':
        return 'Choose Calculator'
      case 'preloaded':
        return 'Preloaded GPA Calculator'
      case 'standard':
        return 'Standard GPA Calculator'
      default:
        return ''
    }
  }

  const openPopup = (type: string) => {
    setPopupOpen(type)
  }

  const closePopup = () => {
    setPopupOpen(null)
  }

  const GlassChevron: React.FC<GlassChevronProps> = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full 
        backdrop-blur-md bg-white/30 border border-white/50 shadow-lg
        flex items-center justify-center transition-all duration-300
        hover:bg-white/40 hover:shadow-xl hover:scale-105 
        opacity-90 hover:opacity-100
        active:scale-95 touch-manipulation
        ${direction === 'left' ? 'left-4' : 'right-4'}
      `}
      type="button"
      aria-label={`Navigate ${direction}`}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6 text-gray-700 hover:text-[#4580A7] transition-colors duration-300" />
      ) : (
        <ChevronRight className="w-6 h-6 text-gray-700 hover:text-[#4580A7] transition-colors duration-300" />
      )}
    </button>
  )

  const ScrollIndicators: React.FC<ScrollIndicatorsProps> = ({ total, active, className = "" }) => (
    <div className={`flex justify-center space-x-2 ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === active 
              ? 'bg-[#4580A7] scale-125 shadow-lg' 
              : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
          }`}
        />
      ))}
    </div>
  )

  const SectionDivider = () => (
    <div className="flex justify-center my-8 md:my-16">
      <div className="w-32 h-0.5 bg-[#4580A7]"></div>
    </div>
  )

  const AnimatedImage: React.FC<AnimatedImageProps> = ({ 
    src, 
    alt, 
    width, 
    height, 
    className = "", 
    title 
  }) => (
    <div className="group">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-transform duration-300 group-hover:scale-105 ${className}`}
        priority={false}
        loading="lazy"
      />
      {title && (
        <p className="text-center text-gray-700 font-medium mt-3 transition-colors duration-300 group-hover:text-[#4580A7]">
          {title}
        </p>
      )}
    </div>
  )

  const MobileCard = ({ title, description, onClick }: { title: string; description: string; onClick: () => void }) => (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-[#0A529F] text-center mb-3">{title}</h3>
      <p className="text-sm text-gray-600 text-center leading-relaxed">{description}</p>
      <p className="text-xs text-[#4580A7] text-center mt-3 font-medium">Tap to view screenshots</p>

    </div>
  )

  const PopupCarousel: React.FC<PopupCarouselProps> = ({ 
    screenshots, 
    title, 
    isOpen, 
    onClose 
  }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const popupRef = useRef<HTMLDivElement>(null)

    // Reset slide when popup opens
    useEffect(() => {
      if (isOpen) {
        setCurrentSlide(0)
      }
    }, [isOpen])

    // Handle scroll for popup carousel
    useEffect(() => {
      const handlePopupScroll = () => {
        if (!popupRef.current) return
        
        const slideWidth = popupRef.current.offsetWidth
        const scrollLeft = popupRef.current.scrollLeft
        const currentIndex = Math.round(scrollLeft / slideWidth)
        const clampedIndex = Math.max(0, Math.min(screenshots.length - 1, currentIndex))
        
        setCurrentSlide(clampedIndex)
      }

      const popupElement = popupRef.current
      if (popupElement) {
        popupElement.addEventListener('scroll', handlePopupScroll, { passive: true })
        return () => {
          popupElement.removeEventListener('scroll', handlePopupScroll)
        }
      }
    }, [screenshots.length])

    const scrollToSlide = (index: number) => {
      if (!popupRef.current) return
      
      const slideWidth = popupRef.current.offsetWidth
      popupRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      })
    }

    const handlePrevious = () => {
      const newIndex = Math.max(0, currentSlide - 1)
      scrollToSlide(newIndex)
    }

    const handleNext = () => {
      const newIndex = Math.min(screenshots.length - 1, currentSlide + 1)
      scrollToSlide(newIndex)
    }

    if (!isOpen) return null

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div 
              ref={popupRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="flex-shrink-0 w-full flex flex-col items-center snap-center p-4">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={250}
                    height={500}
                    className="drop-shadow-xl transition-transform duration-300"
                    priority={false}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {screenshots.length > 1 && (
              <>
                <GlassChevron 
                  direction="left" 
                  onClick={handlePrevious}
                />
                <GlassChevron 
                  direction="right" 
                  onClick={handleNext}
                />
              </>
            )}
          </div>
          
          {screenshots.length > 1 && (
            <ScrollIndicators 
              total={screenshots.length} 
              active={currentSlide} 
              className="p-4"
            />
          )}
        </div>
      </div>
    )
  }

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-gray-50">
      <Container>
        <div 
          ref={headerRef}
          data-section="header"
          className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${
            animatedSections.has('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Steps To Calculate Your GPA
          </p>
        </div>

        {/* Desktop: Three Phone Mockups Side by Side */}
        <div 
          ref={desktopScreenshotsRef}
          data-section="desktop-screenshots"
          className={`hidden md:flex justify-center items-center gap-8 mb-16 transition-all duration-1000 ${
            animatedSections.has('desktop-screenshots') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {mainScreenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 transition-all duration-1000 ${
                animatedSections.has('desktop-screenshots') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: animatedSections.has('desktop-screenshots') ? `${index * 150}ms` : '0ms' 
              }}
            >
              <AnimatedImage
                src={screenshot.src}
                alt={screenshot.alt}
                width={250}
                height={500}
                className="drop-shadow-xl"
                title={screenshot.title}
              />
            </div>
          ))}
        </div>

        {/* Mobile: Cards instead of carousel */}
        <div 
          ref={mobileCarouselRef}
          data-section="mobile-carousel"
          className={`md:hidden mb-4 md:mb-8 transition-all duration-1000 ${
            animatedSections.has('mobile-carousel') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-4">
            <MobileCard 
              title="Choose Calculator" 
              description="There are two options: Preloaded GPA Calculator or Standard GPA Calculator"
              onClick={() => openPopup('main')}
            />
            <MobileCard 
              title="Preloaded GPA Calculator" 
              description="The list of subjects along with their credits and total number of semesters along with their total credits is preloaded according to the course and specialization selected by the user."
              onClick={() => openPopup('preloaded')}
            />
            <MobileCard 
              title="Standard GPA Calculator" 
              description="The user has to manually enter the number of credits per subject, the overall total credits, the total number of subjects, and the total number of semesters."
              onClick={() => openPopup('standard')}
            />
          </div>
        </div>

        <SectionDivider />

        {/* Desktop: Horizontal Scrollable Sections with Chevrons */}
        <div 
          ref={calculatorSectionsRef}
          data-section="calculator-sections"
          className={`hidden md:block mb-2 transition-all duration-1000 ${
            animatedSections.has('calculator-sections') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                      className={`text-center transition-all duration-1000 ${
                        animatedSections.has('calculator-sections') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ 
                        transitionDelay: animatedSections.has('calculator-sections') ? `${index * 200}ms` : '0ms' 
                      }}
                    >
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{screenshot.type}</h4>
                      <div className="flex justify-center">
                        <AnimatedImage
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={300}
                          height={600}
                          className="drop-shadow-xl mx-auto"
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
                      className={`text-center transition-all duration-1000 ${
                        animatedSections.has('calculator-sections') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ 
                        transitionDelay: animatedSections.has('calculator-sections') ? `${index * 200}ms` : '0ms' 
                      }}
                    >
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{screenshot.type}</h4>
                      <div className="flex justify-center">
                        <AnimatedImage
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={300}
                          height={600}
                          className="drop-shadow-xl mx-auto"
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
      </Container>

      {/* Mobile Popup Carousel */}
      <PopupCarousel
        screenshots={getCurrentPopupScreenshots()}
        title={getCurrentPopupTitle()}
        isOpen={!!popupOpen}
        onClose={closePopup}
      />

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