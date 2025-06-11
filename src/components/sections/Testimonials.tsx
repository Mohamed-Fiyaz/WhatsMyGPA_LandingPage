'use client'

import Container from '@/components/ui/Container'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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
      name: 'Arjun Patel',
      role: 'B.Tech ECE, 2nd Year',
      content:
        'Finally, an app made specifically for SRM students. The preloaded subjects feature saves so much time. Highly recommended!',
      rating: 5,
      photo: '/testimonials/priya.jpg'

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
      name: 'Rajesh Kumar',
      role: 'B.Tech ME, 1st Year',
      content:
        'User-friendly interface with accurate GPA calculations. Perfect for keeping track of my academic progress throughout the semester.',
      rating: 5,
      photo: '/testimonials/priya.jpg'

    },
    {
      id: 5,
      name: 'Ananya Singh',
      role: 'B.Tech IT, 4th Year',
      content:
        "Love how it automatically calculates everything based on SRM's grading system. Makes planning my final year so much easier!",
      rating: 5,
      photo: '/testimonials/priya.jpg'

    }
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

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return
    container.addEventListener('scroll', syncIndex)
    return () => container.removeEventListener('scroll', syncIndex)
  }, [])

  // Determine if scroll is in 1st or 2nd half based on scroll position
  const container = scrollContainerRef.current
  const isFirstHalf = container
    ? container.scrollLeft < container.scrollWidth / 2 - container.clientWidth / 2
    : true
  const isSecondHalf = container
    ? container.scrollLeft >= container.scrollWidth / 2 - container.clientWidth / 2
    : false

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-[#F1F5F9]">
      <Container>
        <div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 leading-tight">
  What Students Say
</h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
  Hear from SRM IST students who trust our app to simplify their GPA calculations.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 text-gray-700 hover:text-blue-600 bg-white/80 backdrop-blur-md shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 text-gray-700 hover:text-blue-600 bg-white/80 backdrop-blur-md shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-200 hover:scale-105"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-8 py-6 md:px-16 scrollbar-hide snap-x snap-mandatory"
          >
            {testimonials.map((t, index) => (
<div
  key={t.id}
  data-card="true"
  className="snap-start group bg-white/70 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl p-8 w-[85vw] sm:w-[380px] flex-shrink-0 flex flex-col justify-between min-h-[280px] border border-white/20 hover:border-blue-200/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
>

                {/* Gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-60 transition-opacity duration-300">
                  <Quote size={40} className="text-[#4580A7]" />
                </div>

                {/* User details at the top */}
<div className="flex items-center gap-4 mb-6 relative z-10">
  <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
    <Image
      src={t.photo}
      alt={t.name}
      width={48}
      height={48}
      className="object-cover w-12 h-12"
    />
  </div>
  <div>
    <p className="font-bold text-lg text-gray-900">{t.name}</p>
    <p className="text-sm text-gray-600 font-medium">{t.role}</p>
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
                          className="fill-amber-400 text-amber-400 drop-shadow-sm" 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base font-medium">
                      "{t.content}"
                    </p>
                  </div>
                </div>

                {/* Bottom decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0D6DF] to-[#4580A7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>

          {/* Enhanced scroll indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            <div
              className={`h-2 w-16 rounded-full transition-all duration-300 ${
                isFirstHalf ? 'bg-[#4580A7] shadow-lg' : 'bg-gray-300'
              }`}
            />
            <div
              className={`h-2 w-16 rounded-full transition-all duration-300 ${
                isSecondHalf ? 'bg-[#4580A7] shadow-lg' : 'bg-gray-300'
              }`}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials