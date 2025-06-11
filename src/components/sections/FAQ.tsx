'use client'

import { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([])
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

    const section = document.getElementById('faq')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      id: 1,
      question: 'Is this app only for SRM IST students?',
      answer: "Yes, the app is specifically designed for SRM IST students."
    },
    {
      id: 2,
      question: 'How accurate are the GPA calculations?',
      answer: "Our calculations are 100% accurate and follow the official SRM IST grading system and credit structure. The app has been tested extensively to ensure precision."
    },
    {
      id: 3,
      question: 'Do I need to enter all subjects manually?',
      answer: "Not if you're a B.Tech or Integrated M.Tech student under the 21 Regulation! The Preloaded GPA Calculator automatically fills in all subjects and credits based on your course selection."
    },
    {
      id: 4,
      question: 'Can I calculate both SGPA and CGPA?',
      answer: "Yes! The app supports both SGPA (Semester Grade Point Average) and CGPA (Cumulative Grade Point Average) calculations with separate dedicated screens."
    },
    {
      id: 5,
      question: 'Why are subjects like UHV II not included?',
      answer: "As per the curriculum and syllabus provided by SRM IST, the grade points earned in that course are not considered for SGPA/CGPA calculation."
    },
    {
      id: 6,
      question: 'Does the app work offline?',
      answer: "Yes, once downloaded, the app works completely offline. No internet connection required for GPA calculations."
    }
  ]

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <Container>
        {/* Header Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about What's My GPA.
          </p>
        </div>

        {/* FAQ Items with Staggered Animation */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`border-b border-gray-200 last:border-b-0 transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-6 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' 
              }}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 rounded-lg px-4 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-[#4580A7] transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transition-all duration-300 ease-out ${
                  openItems.includes(faq.id) ? 'rotate-180' : 'rotate-0'
                }`}>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp size={24} className="text-[#4580A7]" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 group-hover:text-[#4580A7] transition-colors duration-300" />
                  )}
                </div>
              </button>
              
              {/* Animated Answer */}
              <div className={`overflow-hidden transition-all duration-500 ease-out ${
                openItems.includes(faq.id) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className={`pb-6 pr-8 pl-4 transition-all duration-300 ease-out ${
                  openItems.includes(faq.id)
                    ? 'translate-y-0'
                    : '-translate-y-2'
                }`}>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQ