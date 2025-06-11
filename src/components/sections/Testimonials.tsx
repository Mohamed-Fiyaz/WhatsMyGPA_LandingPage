'use client'

import Container from '@/components/ui/Container'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      id: 1,
      name: 'Manish Kumar',
      role: 'B.Tech CSE, 3rd Year',
      content:
        'This app is a lifesaver! No more manually calculating credits and GPA. Just select my course and enter grades - boom, instant results!',
      rating: 5,
      photo: '/testimonials/manish.png'
    },
    {
      id: 2,
      name: 'Gnyaaneshwar',
      role: 'B.Tech CSE with DS, 2nd Year',
      content:
        'Finally, an app made specifically for SRM students. The preloaded subjects feature saves so much time. Highly recommended!',
      rating: 5,
      photo: '/testimonials/gnyaaneshwar.jpg'
    },
    {
      id: 3,
      name: 'Zahith Niyas',
      role: 'B.Tech CSE, 4th Year',
      content:
        'Clean interface, accurate calculations, and super fast. This is exactly what every SRM student needs for GPA calculations.',
      rating: 5,
      photo: '/testimonials/zahith.png'
    },
    {
      id: 4,
      name: 'Balaji',
      role: 'B.Tech ECE, 4th Year',
      content:
        "Love how it automatically calculates everything based on SRM's grading system. Makes planning my final year so much easier!",
      rating: 5,
      photo: '/testimonials/balaji.jpeg'
    },
    // {
    //   id: 5,
    //   name: 'Ananya Singh',
    //   role: 'B.Tech IT, 4th Year',
    //   content:
    //     "User-friendly interface with accurate GPA calculations. Perfect for keeping track of my academic progress throughout the semester.",
    //   rating: 5,
    //   photo: '/testimonials/priya.jpg'
    // }
  ]

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    const card = container.querySelector('div[data-card="true"]') as HTMLDivElement
    if (!card) return

    const scrollAmount = card.offsetWidth + 16
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  const syncIndex = () => {
    const container = scrollContainerRef.current
    if (!container) return
    const scrollLeft = container.scrollLeft
    const card = container.querySelector('div[data-card="true"]') as HTMLDivElement
    if (!card) return
    const cardWidth = card.offsetWidth + 16
    const index = Math.round(scrollLeft / cardWidth)
    setCurrentIndex(index)
  }

  // Check which cards are visible (for mobile hover effect)
  const checkVisibleCards = () => {
    const container = scrollContainerRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const cards = container.querySelectorAll('[data-card="true"]')
    const newVisibleCards = new Set<number>()

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect()
      const cardCenter = cardRect.left + cardRect.width / 2
      
      // Card is considered visible if its center is within the container bounds
      if (cardCenter >= containerRect.left && cardCenter <= containerRect.right) {
        newVisibleCards.add(index)
      }
    })

    setVisibleCards(newVisibleCards)
  }

  // Intersection Observer for section visibility
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting)
    },
    { threshold: 0.1 }
  )

  const currentRef = sectionRef.current
  if (currentRef) {
    observer.observe(currentRef)
  }

  return () => {
    if (currentRef) {
      observer.unobserve(currentRef)
    }
  }
}, [])


  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return
    
    const handleScroll = () => {
      syncIndex()
      checkVisibleCards()
    }
    
    container.addEventListener('scroll', handleScroll)
    
    // Initial check
    checkVisibleCards()
    
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-play functionality removed - manual navigation only

  // Determine if scroll is in 1st or 2nd half based on scroll position
  const container = scrollContainerRef.current
  const isFirstHalf = container
    ? container.scrollLeft < container.scrollWidth / 2 - container.clientWidth / 2
    : true
  const isSecondHalf = container
    ? container.scrollLeft >= container.scrollWidth / 2 - container.clientWidth / 2
    : false

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-12 md:py-20 bg-[#F1F5F9] overflow-hidden"
    >
      <Container>
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4580A7] mb-4">
            What Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from SRM IST students who trust our app to simplify their GPA calculations.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Arrows - positioned at middle sides */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 text-gray-700 hover:text-[#4580A7] bg-white/80 backdrop-blur-md shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 text-gray-700 hover:text-[#4580A7] bg-white/80 backdrop-blur-md shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-8 py-6 md:px-16 scrollbar-hide snap-x snap-mandatory"
          >
            {testimonials.map((t, index) => {
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
              const shouldShowMobileHover = isMobile && visibleCards.has(index)
              
              return (
                <div
                  key={t.id}
                  data-card="true"
                  className={`snap-start group bg-white/70 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl p-8 w-[85vw] sm:w-[380px] flex-shrink-0 flex flex-col justify-between min-h-[280px] border border-white/20 hover:border-blue-200/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden
                    ${isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                    }
                    ${shouldShowMobileHover 
                      ? 'md:transform-none -translate-y-2 shadow-xl border-blue-200/50' 
                      : ''
                    }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* Gradient background overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 transition-opacity duration-300
                    ${shouldShowMobileHover 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-100'
                    }`} 
                  />
                  
                  {/* Quote decoration */}
                  <div className={`absolute top-6 right-6 transition-all duration-300 transform
                    ${shouldShowMobileHover 
                      ? 'opacity-60 rotate-12 scale-110' 
                      : 'opacity-10 group-hover:opacity-60 group-hover:rotate-12 group-hover:scale-110'
                    }`}>
                    <Quote size={40} className="text-[#4580A7]" />
                  </div>

                  {/* User details at the top */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-white/50 transition-all duration-300 group-hover:ring-blue-200/50 group-hover:scale-105">
<Image
  src={t.photo}
  alt={t.name}
  width={96}
  height={96}
  quality={100}
  priority
  className="object-cover w-12 h-12 transition-transform duration-300 group-hover:scale-110 rounded-full"
/>

                    </div>
                    <div className="transform transition-all duration-300 group-hover:translate-x-1">
                      <p className="font-bold text-lg text-gray-900 transition-colors duration-300 group-hover:text-[#4580A7]">
                        {t.name}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <div className="flex-1 flex flex-col justify-between relative z-10">
                    <div>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(t.rating)].map((_, idx) => (
                          <Star 
                            key={idx} 
                            size={18} 
                            className="fill-amber-400 text-amber-400 drop-shadow-sm transition-all duration-300 hover:scale-125" 
                            style={{ 
                              animationDelay: `${(index * 150) + (idx * 100)}ms`,
                              animation: isVisible ? 'starTwinkle 2s ease-in-out infinite' : 'none'
                            }}
                          />
                        ))}
                      </div>
<p className="text-gray-700 leading-relaxed text-base font-medium transition-all duration-300 group-hover:text-gray-800">
  {`"${t.content}"`}
</p>

                    </div>
                  </div>

                  {/* Bottom decorative element */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0D6DF] to-[#4580A7] transition-transform duration-500 origin-left
                    ${shouldShowMobileHover 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                    }`} 
                  />

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-[#4580A7]/30 rounded-full transition-all duration-1000
                          ${shouldShowMobileHover 
                            ? 'opacity-100 animate-float' 
                            : 'opacity-0 group-hover:opacity-100 group-hover:animate-float'
                          }`}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                          animationDelay: `${i * 200}ms`
                        }}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Enhanced scroll indicator for desktop */}
          <div className="hidden md:flex justify-center mt-8 space-x-3">
            <div
              className={`h-2 w-16 rounded-full transition-all duration-500 ${
                isFirstHalf 
                  ? 'bg-[#4580A7] shadow-lg scale-105' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
            <div
              className={`h-2 w-16 rounded-full transition-all duration-500 ${
                isSecondHalf 
                  ? 'bg-[#4580A7] shadow-lg scale-105' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          </div>

          {/* Mobile dotted indicators and glass chevrons */}
          <div className="md:hidden flex items-center justify-center mt-8 space-x-4">
            {/* Left Chevron */}
            <button
              onClick={() => scroll('left')}
              className="rounded-full p-3 text-gray-700 hover:text-[#4580A7] bg-white transition-all duration-300 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dotted indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.abs(currentIndex - index) <= 0 
                      ? 'bg-[#4580A7] scale-125 shadow-lg' 
                      : 'bg-gray-300'
                  }`}
                  style={{
                    boxShadow: Math.abs(currentIndex - index) <= 0 
                      ? '0 0 10px rgba(69, 128, 167, 0.5)' 
                      : 'none'
                  }}
                />
              ))}
            </div>

            {/* Right Chevron */}
            <button
              onClick={() => scroll('right')}
              className="rounded-full p-3 text-gray-700 hover:text-[#4580A7] bg-white transition-all duration-300 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes starTwinkle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
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

export default Testimonials