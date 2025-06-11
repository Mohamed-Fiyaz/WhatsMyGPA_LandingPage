'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Image from 'next/image'
import { Download, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false)

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
    }
  }

  const handleDownloadClick = () => {
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 3000) // Auto close after 3 seconds
  }

  return (
    <>
      <footer className="bg-gray-900 text-white">
{/* CTA Section */}
        <div className="hero-bg py-12 sm:py-16 overflow-hidden">
          <Container>
            <div className="text-center px-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
                Ready to Calculate Your GPA?
              </h2>
              <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
Download What&#39;s My GPA today and calculate your results in a snap.
              </p>
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-500">
<Button 
  size="lg" 
  onClick={handleDownloadClick}
  className="bg-[#0A529F] text-white hover:bg-[#084285] flex items-center gap-2 mx-auto hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-2xl text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 group relative overflow-hidden"
>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Download size={18} className="sm:w-5 sm:h-5 group-hover:animate-bounce relative z-10" />
                  <span className="whitespace-nowrap relative z-10">Download Now on the App Store</span>
                </Button>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Footer */}
        <div className="py-8 sm:py-12 border-t border-gray-800">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
              {/* Brand */}
              <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center">
                    <Image
                      src="/images/mascot/pencil_mascot.png"
alt="What&#39;s My GPA Mascot"
                      width={64}
                      height={64}
                      quality={100}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
<span className="ml-2 text-lg sm:text-xl font-nunito-black">What&#39;s My GPA?</span>
                </div>

                <p className="text-gray-400 mb-4 max-w-md mx-auto sm:mx-0 text-sm sm:text-base leading-relaxed">
                  The most trusted GPA calculator for SRM IST students. Calculate your SGPA and CGPA with ease and accuracy.
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-400">
                  <span>Made with</span>
                  <Heart size={14} className="sm:w-4 sm:h-4 text-red-500 fill-current" />
                  <span>by Mohamed Fiyaz</span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-center sm:text-left">
                <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <li>
                    <button 
                      onClick={() => scrollToSection('how-it-works')}
                      className="hover:text-white transition-colors inline-block py-1 cursor-pointer"
                    >
                      How It Works
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('features')}
                      className="hover:text-white transition-colors inline-block py-1 cursor-pointer"
                    >
                      Features
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('testimonials')}
                      className="hover:text-white transition-colors inline-block py-1 cursor-pointer"
                    >
                      Testimonials
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('faq')}
                      className="hover:text-white transition-colors inline-block py-1 cursor-pointer"
                    >
                      FAQs
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Contact */}
              <div className="text-center sm:text-left">
                <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Get in Touch</h3>
                <div className="space-y-3 text-gray-400">
                  <a
                    href="mailto:whatsmygpa.app@gmail.com"
                    className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    <Mail size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="break-all sm:break-normal">whatsmygpa.app@gmail.com</span>
                  </a>
<p className="text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
  We&#39;d love to hear from you! Send us your feedback, suggestions, or questions.
</p>

                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-gray-800">
          <Container>
            <div className="flex flex-col items-center space-y-3 sm:space-y-0 sm:flex-row sm:justify-between px-4">
<p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">© {new Date().getFullYear()} What&#39;s My GPA. All rights reserved.</p>

              <div className="flex items-center gap-4 sm:gap-6">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </Container>
        </div>
      </footer>

      {/* Enhanced Popup Modal with animations */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full mx-4 text-center shadow-2xl animate-in fade-in zoom-in slide-in-from-bottom-4 duration-500">
            <div className="mb-4">
              <div className="w-16 h-16 bg-[#4580A7] rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-700 delay-200">
                <Download className="w-8 h-8 text-white animate-bounce" />
              </div>
              <h3 className="text-xl font-nunito-black text-gray-800 mb-2 animate-in slide-in-from-bottom-2 duration-500 delay-300">
                Coming Soon!
              </h3>
              <p className="text-gray-600 animate-in slide-in-from-bottom-2 duration-500 delay-400">
                The app will be released soon. Stay tuned for updates!
              </p>
            </div>
            <Button
              onClick={() => setShowPopup(false)}
              className="bg-[#4580A7] hover:bg-[#3a6b8f] text-white px-6 py-2 rounded-full font-nunito-black transition-all duration-200 focus:outline-none focus:ring-0 active:outline-none border-0 focus:border-0 active:border-0 hover:scale-105 active:scale-95 animate-in slide-in-from-bottom-2 duration-500 delay-500"
              style={{ outline: 'none', border: 'none' }}
            >
              Got it
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer