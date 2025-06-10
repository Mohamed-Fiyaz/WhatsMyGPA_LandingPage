'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-xl' 
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
<div 
  onClick={() => scrollToSection('hero')}
  className="flex items-center space-x-4 cursor-pointer"
>
  <Image
    src="/images/mascot/logo.png"
    alt="What's My GPA Mascot"
    width={60}
    height={60}
    className="w-[52px] h-[52px] md:w-[60px] md:h-[60px]"
  />
  <span
    className={cn(
      "text-2xl font-black font-nunito transition-colors duration-300",
      isScrolled ? "text-gray-800" : "text-white"
    )}
  >
    What's My GPA?
  </span>
</div>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className={cn(
                "transition-colors font-inter font-medium",
                isScrolled 
                  ? "text-gray-800 hover:text-[#0A529F]" 
                  : "text-white hover:text-[#0A529F]"
              )}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className={cn(
                "transition-colors font-inter font-medium",
                isScrolled 
                  ? "text-gray-800 hover:text-[#0A529F]" 
                  : "text-white hover:text-[#0A529F]"
              )}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={cn(
                "transition-colors font-inter font-medium",
                isScrolled 
                  ? "text-gray-800 hover:text-[#0A529F]" 
                  : "text-white hover:text-[#0A529F]"
              )}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={cn(
                "transition-colors font-inter font-medium",
                isScrolled 
                  ? "text-gray-800 hover:text-[#0A529F]" 
                  : "text-white hover:text-[#0A529F]"
              )}
            >
              FAQs
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button size="md" className="bg-[#0A529F] hover:bg-[#084285] text-white rounded-full">Download Now</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-gray-800" : "text-white"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={cn(
            "lg:hidden border-t transition-all duration-300",
            isScrolled 
              ? "bg-white/10 backdrop-blur-lg border-white/20" 
              : "bg-white/20 backdrop-blur-md border-white/30"
          )}>
            <div className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className={cn(
                  "block w-full text-left px-4 py-2 transition-colors font-inter",
                  isScrolled 
                    ? "text-gray-800 hover:text-[#0A529F]" 
                    : "text-white hover:text-[#0A529F]"
                )}
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className={cn(
                  "block w-full text-left px-4 py-2 transition-colors font-inter",
                  isScrolled 
                    ? "text-gray-800 hover:text-[#0A529F]" 
                    : "text-white hover:text-[#0A529F]"
                )}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={cn(
                  "block w-full text-left px-4 py-2 transition-colors font-inter",
                  isScrolled 
                    ? "text-gray-800 hover:text-[#0A529F]" 
                    : "text-white hover:text-[#0A529F]"
                )}
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={cn(
                  "block w-full text-left px-4 py-2 transition-colors font-inter",
                  isScrolled 
                    ? "text-gray-800 hover:text-[#0A529F]" 
                    : "text-white hover:text-[#0A529F]"
                )}
              >
                FAQs
              </button>
              <div className="px-4">
                <Button className="w-full bg-[#0A529F] hover:bg-[#084285] text-white rounded-full">Download Now</Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header