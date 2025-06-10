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
              <p className="text-xl lg:text-2xl max-w-2xl">
                Simply select your course and specialization. The app preloads all subjects and credits, so you only need to enter your grades or SGPA.
              </p>
              <p className="text-xl font-bold">
                No manual work. Just results.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#4580A7] hover:bg-blue-50 flex items-center gap-2 font-nunito-black font-black rounded-full px-6"
              >
               Download the app
              </Button>
            </div>
          </div>
          
          {/* Right Content - iPhone Screenshot */}
          <div className="relative">
            <div className="relative z-10 flex justify-center items-center">
              {/* Main iPhone Screenshot */}
              <div className="relative">
                <Image
                  src="/screenshots/Launchscreen_whatsmygpa_thumb.png"
                  alt="What's My GPA App - iPhone Screenshot"
                  width={320}
                  height={640}
                  className="drop-shadow-2xl"
                />
              </div>
              
              {/* Optional: Add a second phone for depth if you have another screenshot */}
              {/* Uncomment if you want to add a second phone image */}
              
              <div className="absolute -right-8 top-8">
                <Image
                  src="/screenshots/preloaded_SGPA_thumb.png"
                  alt="What's My GPA App - Second Screen"
                  width={300}
                  height={600}
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