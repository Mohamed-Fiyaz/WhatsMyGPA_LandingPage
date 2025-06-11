'use client'

import { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import {
   Zap,
   BookOpen,
   Calculator,
   Smartphone,
   Clock,
   Award
 } from 'lucide-react'

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('features')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Calculate your GPA in seconds with our optimized algorithms and preloaded data.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'SRM IST Specific',
      description: 'Designed specifically for SRM IST curriculum with preloaded subjects and credits.',
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'SGPA & CGPA',
      description: 'Calculate both semester-wise SGPA and cumulative CGPA with ease.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile First',
      description: 'Beautiful, responsive design that works perfectly on all devices.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'No Manual Work',
      description: 'Just select your course and enter grades. No need to input subjects manually.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Accurate Results',
      description: 'Precise calculations following SRM IST grading system and credit structure.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-[#E4F0F8]">
      <Container>
        {/* Header Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose What's My GPA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built by a student, for students. Experience the easiest way to calculate your GPA.
          </p>
        </div>

        {/* Features Grid with Staggered Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
<div
  key={index}
  className={`text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-xl transition-all duration-500 ease-out group cursor-pointer ${
    isVisible 
      ? 'translate-y-0 opacity-100 scale-100' 
      : 'translate-y-12 opacity-0 scale-95'
  }`}
  style={{
    // Delay only for entrance, not for hover
    transitionDelay: isVisible ? `${150}ms` : '0ms',
  }}
>

              {/* Animated Icon Container */}
              <div className="w-16 h-16 bg-[#4580A7] text-white rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content with Slide Animation */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#4580A7] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4580A7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-20 left-10 w-32 h-32 bg-[#4580A7]/5 rounded-full blur-3xl transition-all duration-2000 ease-out ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`} style={{ transitionDelay: '1000ms' }}></div>
          <div className={`absolute bottom-20 right-10 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl transition-all duration-2000 ease-out ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`} style={{ transitionDelay: '1200ms' }}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full blur-2xl transition-all duration-2000 ease-out ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`} style={{ transitionDelay: '1400ms' }}></div>
        </div>
      </Container>
    </section>
  )
}

export default Features