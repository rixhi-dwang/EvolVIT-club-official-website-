import React from 'react'

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
              EvoVit
            </span>
          </h1>
          <p className="text-xl text-[#cbd5e1] max-w-3xl mx-auto">
            We are a community of passionate students dedicated to innovation, collaboration, and excellence in technology and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff]/20 to-[#a855f7]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-[#0f1320] border border-[#00f5ff]/20 rounded-2xl p-8 backdrop-blur-sm hover:border-[#00f5ff]/40 transition-all duration-500 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#a855f7] flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
              <p className="text-[#cbd5e1] leading-relaxed">
                To empower students with cutting-edge skills and opportunities that bridge the gap between academic learning and real-world innovation.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/20 to-[#ff00cc]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-[#0f1320] border border-[#a855f7]/20 rounded-2xl p-8 backdrop-blur-sm hover:border-[#a855f7]/40 transition-all duration-500 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#a855f7] to-[#ff00cc] flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
              <p className="text-[#cbd5e1] leading-relaxed">
                Building a thriving ecosystem where creativity, technology, and leadership converge to shape the future of tomorrow.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#a855f7] to-[#ff00cc] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00cc]/20 to-[#00f5ff]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-[#0f1320] border border-[#ff00cc]/20 rounded-2xl p-8 backdrop-blur-sm hover:border-[#ff00cc]/40 transition-all duration-500 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ff00cc] to-[#00f5ff] flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Impact</h3>
              <p className="text-[#cbd5e1] leading-relaxed">
                Creating meaningful experiences through workshops, hackathons, and community-driven projects that inspire and transform.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff00cc] to-[#00f5ff] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About