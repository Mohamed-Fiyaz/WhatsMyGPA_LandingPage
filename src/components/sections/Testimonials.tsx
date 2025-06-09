import Container from '@/components/ui/Container'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'B.Tech CSE, 3rd Year',
      content: 'This app is a lifesaver! No more manually calculating credits and GPA. Just select my course and enter grades - boom, instant results!',
      rating: 5,
      avatar: '/images/avatars/student1.jpg'
    },
    {
      id: 2,
      name: 'Arjun Patel',
      role: 'B.Tech ECE, 2nd Year',
      content: 'Finally, an app made specifically for SRM students. The preloaded subjects feature saves so much time. Highly recommended!',
      rating: 5,
      avatar: '/images/avatars/student2.jpg'
    },
    {
      id: 3,
      name: 'Sneha Reddy',
      role: 'Integrated M.Tech, 4th Year',
      content: 'Clean interface, accurate calculations, and super fast. This is exactly what every SRM student needs for GPA calculations.',
      rating: 5,
      avatar: '/images/avatars/student3.jpg'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied SRM IST students who trust What's My GPA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover-lift relative"
            >
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <Quote size={16} />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mascot Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-blue-50 rounded-2xl p-6">
            <Image
              src="/images/mascot/mascot-character.png"
              alt="What's My GPA Mascot"
              width={80}
              height={80}
              className="animate-bounce-slow"
            />
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-900">
                Made by Students, for Students
              </p>
              <p className="text-gray-600">
                Our mascot represents the spirit of academic excellence!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials