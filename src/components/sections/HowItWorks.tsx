"use client"

import Image from 'next/image'
import Container from '@/components/ui/Container'
import { ArrowRight, Smartphone, Calculator, FileText, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const HowItWorks = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [preloadedSlide, setPreloadedSlide] = useState(0)
  const [standardSlide, setStandardSlide] = useState(0)
  
  const mainCarouselRef = useRef<HTMLDivElement>(null)
  const preloadedCarouselRef = useRef<HTMLDivElement>(null)
  const standardCarouselRef = useRef<HTMLDivElement>(null)

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

  const scrollToSlide = (ref: React.RefObject<HTMLDivElement>, index: number) => {
    if (ref.current) {
      const slideWidth = ref.current.offsetWidth
      ref.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = (ref: React.RefObject<HTMLDivElement>, setSlide: (index: number) => void) => {
    if (ref.current) {
      const slideWidth = ref.current.offsetWidth
      const currentIndex = Math.round(ref.current.scrollLeft / slideWidth)
      setSlide(currentIndex)
    }
  }

  useEffect(() => {
    const mainRef = mainCarouselRef.current
    const preloadedRef = preloadedCarouselRef.current
    const standardRef = standardCarouselRef.current

    const handleMainScroll = () => handleScroll(mainCarouselRef, setActiveSlide)
    const handlePreloadedScroll = () => handleScroll(preloadedCarouselRef, setPreloadedSlide)
    const handleStandardScroll = () => handleScroll(standardCarouselRef, setStandardSlide)

    if (mainRef) mainRef.addEventListener('scroll', handleMainScroll)
    if (preloadedRef) preloadedRef.addEventListener('scroll', handlePreloadedScroll)
    if (standardRef) standardRef.addEventListener('scroll', handleStandardScroll)

    return () => {
      if (mainRef) mainRef.removeEventListener('scroll', handleMainScroll)
      if (preloadedRef) preloadedRef.removeEventListener('scroll', handlePreloadedScroll)
      if (standardRef) standardRef.removeEventListener('scroll', handleStandardScroll)
    }
  }, [])

  const CarouselDots = ({ total, active, onDotClick }: { total: number, active: number, onDotClick: (index: number) => void }) => (
    <div className="flex justify-center space-x-2 mt-4 md:hidden">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 rounded-full transition-colors ${
            index === active ? 'bg-[#4580A7]' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  )

  const SectionDivider = () => (
    <div className="flex justify-center my-8">
      <div className="w-32 h-0.5 bg-[#4580A7]"></div>
    </div>
  )

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose Your GPA Calculator
          </p>
        </div>

        {/* Desktop: Three Phone Mockups Side by Side */}
        <div className="hidden md:flex justify-center items-center gap-8 mb-16">
          {mainScreenshots.map((screenshot, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={250}
                height={500}
                className="drop-shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Mobile: Swipeable Carousel */}
        <div className="md:hidden mb-8">
          <div 
            ref={mainCarouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {mainScreenshots.map((screenshot, index) => (
              <div key={index} className="flex-shrink-0 w-full flex flex-col items-center snap-center px-4">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={200}
                  height={400}
                  className="drop-shadow-xl"
                />
                <p className="text-center text-gray-700 font-medium mt-3">
                  {screenshot.title}
                </p>
              </div>
            ))}
          </div>
          <CarouselDots 
            total={mainScreenshots.length} 
            active={activeSlide} 
            onDotClick={(index) => scrollToSlide(mainCarouselRef, index)}
          />
        </div>

        {/* Description Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
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

        {/* Preloaded GPA Calculator Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Preloaded GPA Calculator
          </h3>

          {/* Desktop Layout */}
          <div className="hidden md:grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {preloadedScreenshots.map((screenshot, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{screenshot.type}</h4>
                <div className="flex justify-center">
                  <Image
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

          {/* Mobile Layout */}
          <div className="md:hidden mb-8">
            <div 
              ref={preloadedCarouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {preloadedScreenshots.map((screenshot, index) => (
                <div key={index} className="flex-shrink-0 w-full flex flex-col items-center snap-center px-4">
                  <div className="bg-[#4580A7] text-white px-4 py-2 rounded-full mb-4 font-medium">
                    {screenshot.type}
                  </div>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={280}
                    height={560}
                    className="drop-shadow-xl"
                  />
                </div>
              ))}
            </div>
            <CarouselDots 
              total={preloadedScreenshots.length} 
              active={preloadedSlide} 
              onDotClick={(index) => scrollToSlide(preloadedCarouselRef, index)}
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
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Standard GPA Calculator
          </h3>

          {/* Desktop Layout */}
          <div className="hidden md:grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {standardScreenshots.map((screenshot, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{screenshot.type}</h4>
                <div className="flex justify-center">
                  <Image
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

          {/* Mobile Layout */}
          <div className="md:hidden mb-8">
            <div 
              ref={standardCarouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {standardScreenshots.map((screenshot, index) => (
                <div key={index} className="flex-shrink-0 w-full flex flex-col items-center snap-center px-4">
                  <div className="bg-[#4580A7] text-white px-4 py-2 rounded-full mb-4 font-medium">
                    {screenshot.type}
                  </div>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={280}
                    height={560}
                    className="drop-shadow-xl"
                  />
                </div>
              ))}
            </div>
            <CarouselDots 
              total={standardScreenshots.length} 
              active={standardSlide} 
              onDotClick={(index) => scrollToSlide(standardCarouselRef, index)}
            />
          </div>

          <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
            The user has to manually enter the number of credits per subject, the overall
            total credits, the total number of subjects, and the total number of semesters.
          </p>
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