import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { Download, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="hero-bg text-white min-h-screen flex items-center pt-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-nunito-black leading-tight text-stroke-black">
                An App Made for{' '}
                <span className="text-[#0A529F] font-nunito-black">SRM IST</span>{' '}
                Students.
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl">
                Simply select your course and specialization. The app preloads all subjects and credits, so you only need to enter your grades or SGPA.
              </p>
              <p className="text-lg text-blue-200 font-medium">
                No manual work. Just results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2"
              >
                <Download size={20} />
                Download the app
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-blue-100">
                Loved by 1000+ SRM students
              </span>
            </div>
          </div>

          {/* Right Content - App Mockups */}
          <div className="relative">
            <div className="relative z-10 flex justify-center items-center">
              {/* Main Phone */}
              <div className="relative">
                <Image
                  src="/images/mockups/iphone-mockup-1.png"
                  alt="What's My GPA App - Main Screen"
                  width={300}
                  height={600}
                  className="drop-shadow-2xl"
                />
              </div>
              
              {/* Secondary Phone - Slightly hidden behind */}
              <div className="absolute -right-8 top-8 opacity-80">
                <Image
                  src="/images/mockups/iphone-mockup-2.png"
                  alt="What's My GPA App - Calculator Screen"
                  width={280}
                  height={560}
                  className="drop-shadow-xl"
                />
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-0 w-16 h-16 bg-purple-400/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
