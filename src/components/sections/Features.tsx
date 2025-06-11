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
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose What's My GPA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built by a student, for students. Experience the easiest way to calculate your GPA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 hover-lift"
            >
              <div className="w-16 h-16 bg-[#4580A7] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Features