import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Image from 'next/image'
import { Download, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="hero-bg py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Calculate Your GPA?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of SRM IST students who trust What's My GPA for accurate, fast calculations.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2 mx-auto"
            >
              <Download size={20} />
              Download Now - It's Free!
            </Button>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="py-12 border-t border-gray-800">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/mascot/mascot-character.png"
                    alt="What's My GPA Mascot"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-xl font-bold">What's My GPA?</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The most trusted GPA calculator for SRM IST students. Calculate your SGPA and CGPA with ease and accuracy.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Made with</span>
                <Heart size={16} className="text-red-500 fill-current" />
                <span>for SRM IST students</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>support@whatsmygpa.app</span>
                </div>
                <p className="text-sm">
                  We'd love to hear from you! Send us your feedback, suggestions, or questions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-gray-800">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 What's My GPA. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
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