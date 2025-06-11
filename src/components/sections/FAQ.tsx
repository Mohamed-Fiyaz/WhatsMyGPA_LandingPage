'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      id: 1,
      question: 'Is this app only for SRM IST students?',
      answer: 'Yes, the app is specifically designed for SRM IST students.'
    },
    {
      id: 2,
      question: 'How accurate are the GPA calculations?',
      answer: 'Our calculations are 100% accurate and follow the official SRM IST grading system and credit structure. The app has been tested extensively to ensure precision.'
    },
    {
      id: 3,
      question: 'Do I need to enter all subjects manually?',
      answer: 'Not if you\'re a B.Tech or Integrated M.Tech student under the 21 Regulation! The Preloaded GPA Calculator automatically fills in all subjects and credits based on your course selection.'
    },
    {
      id: 4,
      question: 'Can I calculate both SGPA and CGPA?',
      answer: 'Yes! The app supports both SGPA (Semester Grade Point Average) and CGPA (Cumulative Grade Point Average) calculations with separate dedicated screens.'
    },
    {
      id: 5,
      question: 'Why are subjects like UHV II not included?',
      answer: 'As per the curriculum and syllabus provided by SRM IST, the grade points earned in that course are not considered for SGPA/CGPA calculation.'
    },
    {
      id: 6,
      question: 'Does the app work offline?',
      answer: 'Yes, once downloaded, the app works completely offline. No internet connection required for GPA calculations.'
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
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about What's My GPA.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(faq.id) ? (
                  <ChevronUp size={24} className="text-[#4580A7] flex-shrink-0" />
                ) : (
                  <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(faq.id) && (
                <div className="pb-6 pr-8">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQ