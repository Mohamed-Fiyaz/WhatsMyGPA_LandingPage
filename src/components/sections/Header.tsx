'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

// Animated Hamburger Menu Icon Component
const HamburgerIcon = ({ isOpen, isScrolled }: { isOpen: boolean; isScrolled: boolean }) => {
  return (
    <div className="relative w-6 h-6 flex flex-col justify-center items-center">
      <span
        className={cn(
          "block h-0.5 w-6 transform transition-all duration-300 ease-in-out",
          isScrolled ? "bg-gray-800" : "bg-white",
          isOpen ? "rotate-45 translate-y-1.5" : "rotate-0 translate-y-0"
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-6 transform transition-all duration-300 ease-in-out mt-1",
          isScrolled ? "bg-gray-800" : "bg-white",
          isOpen ? "opacity-0" : "opacity-100"
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-6 transform transition-all duration-300 ease-in-out mt-1",
          isScrolled ? "bg-gray-800" : "bg-white",
          isOpen ? "-rotate-45 -translate-y-1.5" : "rotate-0 translate-y-0"
        )}
      />
    </div>
  )
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Set mounted to true
    setMounted(true)
    
    // Check initial scroll position after mount
    const checkInitialScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    // Small delay to ensure proper initialization
    setTimeout(checkInitialScroll, 50)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate header height - accounting for different screen sizes
      const headerHeight = window.innerWidth >= 1024 ? 80 : 64 // lg:h-20 = 80px, h-16 = 64px
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setIsMobileMenuOpen(false)
  }

  // Render loading state with proper colors
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] bg-white/20 rounded-full animate-pulse" />
                <div className="ml-1 h-8 w-48 bg-white/20 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </Container>
      </header>
    )
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
          {/* Logo and Brand - Left aligned but with better spacing */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div 
              onClick={scrollToHero}
              className="flex items-center cursor-pointer group"
            >
              <Image
                src="/images/mascot/pencil_mascot.png"
                alt="What's My GPA Mascot"
                width={60}
                height={60}
                className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] transition-transform duration-200 group-hover:scale-105"
              />
              <span
                className={cn(
                  "ml-1 text-xl md:text-2xl font-black font-nunito transition-all duration-300 whitespace-nowrap group-hover:scale-105",
                  isScrolled ? "text-gray-800" : "text-white"
                )}
              >
                What's My GPA?
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className={cn(
                "transition-all duration-200 font-inter font-medium hover:scale-105 transform",
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
                "transition-all duration-200 font-inter font-medium hover:scale-105 transform",
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
                "transition-all duration-200 font-inter font-medium hover:scale-105 transform",
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
                "transition-all duration-200 font-inter font-medium hover:scale-105 transform",
                isScrolled 
                  ? "text-gray-800 hover:text-[#0A529F]" 
                  : "text-white hover:text-[#0A529F]"
              )}
            >
              FAQs
            </button>
          </nav>

          {/* CTA Button - Right aligned */}
          <div className="hidden lg:block flex-shrink-0">
            <Button 
              size="md" 
              className="bg-[#0A529F] hover:bg-[#084285] text-white rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Download Now
            </Button>
          </div>

          {/* Mobile menu button with animated hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:scale-110 transform transition-all duration-200 flex-shrink-0"
            aria-label="Toggle mobile menu"
          >
            <HamburgerIcon isOpen={isMobileMenuOpen} isScrolled={isScrolled} />
          </button>
        </div>

        {/* Mobile Navigation with improved animations */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className={cn(
            "border-t transition-all duration-300",
            isScrolled 
              ? "bg-white/10 backdrop-blur-lg border-white/20" 
              : "bg-white/20 backdrop-blur-md border-white/30"
          )}>
            <div className="py-4 space-y-2">
              {[
                { id: 'how-it-works', label: 'How It Works' },
                { id: 'features', label: 'Features' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'faq', label: 'FAQs' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "block w-full text-left px-4 py-3 transition-all duration-200 font-inter hover:bg-white/10 rounded-lg mx-2",
                    "transform hover:translate-x-2",
                    isScrolled 
                      ? "text-gray-800 hover:text-[#0A529F]" 
                      : "text-white hover:text-[#0A529F]"
                  )}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-[#0A529F] hover:bg-[#084285] text-white rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg">
                  Download Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header