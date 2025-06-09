import Image from 'next/image'
import Container from '@/components/ui/Container'
import { ArrowRight, Smartphone, Calculator, FileText } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose Your Calculator',
      description: 'Select between Preloaded GPA Calculator (for B.Tech and Integrated M.Tech students) or Standard GPA Calculator (for all programs).',
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'Enter Your Details',
      description: 'For preloaded calculator, just select your course and specialization. For standard calculator, manually enter subjects and credits.',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'Get Your Results',
      description: 'Enter your grades and instantly calculate your SGPA and CGPA. No manual calculations needed!',
      icon: <Calculator className="w-8 h-8" />,
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose Your GPA Calculator
          </p>
        </div>

        {/* Calculator Types */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Preloaded Calculator */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Preloaded GPA Calculator
              </h3>
              <p className="text-gray-600 mb-6">
                Designed for B.Tech and Integrated M.Tech students of SRM IST under the 21 Regulation and newer. It automatically fills in subjects and credits for you.
              </p>
              <p className="text-gray-600 mb-6">
                If you are not from this group or prefer to enter your details manually, you can use the <strong>Standard GPA Calculator</strong> which supports all degree programs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center">
                <Image
                  src="/images/screenshots/sgpa-screen.png"
                  alt="SGPA Calculator"
                  width={200}
                  height={400}
                  className="mx-auto mb-4 rounded-lg shadow-md"
                />
                <h4 className="font-semibold text-gray-900">SGPA</h4>
              </div>
              <div className="text-center">
                <Image
                  src="/images/screenshots/cgpa-screen.png"
                  alt="CGPA Calculator"
                  width={200}
                  height={400}
                  className="mx-auto mb-4 rounded-lg shadow-md"
                />
                <h4 className="font-semibold text-gray-900">CGPA</h4>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              The list of subjects along with their credits and total number of semesters along with their total credits is preloaded according to the course and specialization selected by the user.
            </p>
          </div>

          {/* Standard Calculator */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Standard GPA Calculator
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <Image
                    src="/images/screenshots/standard-sgpa.png"
                    alt="Standard SGPA Calculator"
                    width={200}
                    height={400}
                    className="mx-auto mb-4 rounded-lg shadow-md"
                  />
                  <h4 className="font-semibold text-gray-900">SGPA</h4>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/screenshots/standard-cgpa.png"
                    alt="Standard CGPA Calculator"
                    width={200}
                    height={400}
                    className="mx-auto mb-4 rounded-lg shadow-md"
                  />
                  <h4 className="font-semibold text-gray-900">CGPA</h4>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500">
              The user has to manually enter the number of credits per subject, the overall total credits, the total number of subjects, and the total number of semesters.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center relative">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 text-blue-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
