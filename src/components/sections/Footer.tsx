import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Image from 'next/image'
import { Download, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="hero-bg py-12 sm:py-16">
        <Container>
          <div className="text-center px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Ready to Calculate Your GPA?
            </h2>
            <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Download What's My GPA today and calculate your results in a snap.
            </p>
            <Button 
              size="lg" 
              className="bg-[#0A529F] text-white hover:bg-[#084285] flex items-center gap-2 mx-auto hover:scale-105 transform transition-all duration-200 shadow-lg text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">Download Now on the App Store</span>
            </Button>
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
                    alt="What's My GPA Mascot"
                    width={64}
                    height={64}
                    quality={100}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>
                <span className="ml-2 text-lg sm:text-xl font-nunito-black">What's My GPA?</span>
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
                  <a 
                    href="#how-it-works" 
                    className="hover:text-white transition-colors inline-block py-1"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#features" 
                    className="hover:text-white transition-colors inline-block py-1"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="hover:text-white transition-colors inline-block py-1"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq" 
                    className="hover:text-white transition-colors inline-block py-1"
                  >
                    FAQs
                  </a>
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
                  We'd love to hear from you! Send us your feedback, suggestions, or questions.
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
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} What's My GPA. All rights reserved.
            </p>
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
  )
}

export default Footer