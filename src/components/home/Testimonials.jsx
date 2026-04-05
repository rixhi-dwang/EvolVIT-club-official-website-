import React, { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Jessica Liu',
      role: 'Computer Science, Class of 2024',
      quote: 'EvolVit has been a game-changer for my college experience. The hackathons and workshops helped me land my dream internship at a top tech company.',
      image: 'https://via.placeholder.com/100x100/0f1320/00f5ff?text=JL',
      gradient: 'from-[#00f5ff] to-[#a855f7]'
    },
    {
      name: 'Marcus Thompson',
      role: 'Data Science, Class of 2025',
      quote: 'The mentorship and community at EvolVit are unparalleled. I\'ve grown both technically and personally through their amazing programs.',
      image: 'https://via.placeholder.com/100x100/0f1320/a855f7?text=MT',
      gradient: 'from-[#a855f7] to-[#ff00cc]'
    },
    {
      name: 'Priya Sharma',
      role: 'AI Research, Class of 2023',
      quote: 'Being part of EvolVit opened doors I never knew existed. The network and skills I gained here continue to benefit my career.',
      image: 'https://via.placeholder.com/100x100/0f1320/ff00cc?text=PS',
      gradient: 'from-[#ff00cc] to-[#00f5ff]'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-[#0a0d14]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Student{' '}
            <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
              Voices
            </span>
          </h2>
          <p className="text-xl text-[#cbd5e1]">Hear from our members about their experience</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#0f1320] border-2 border-[#00f5ff]/30 rounded-3xl p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00f5ff]/10 to-transparent rounded-full transform translate-x-32 -translate-y-32" />
            
            <svg className="w-16 h-16 text-[#00f5ff]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <blockquote className="text-2xl text-[#cbd5e1] mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex items-center gap-6">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-full blur-md opacity-50`} />
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#00f5ff]/30">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-[#94a3b8]">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-10 bg-gradient-to-r from-[#00f5ff] to-[#a855f7]'
                    : 'bg-[#94a3b8] hover:bg-[#00f5ff]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials