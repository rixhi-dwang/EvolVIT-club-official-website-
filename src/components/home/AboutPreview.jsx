import React from 'react'
import { Link } from 'react-router-dom'

const AboutPreview = () => {
  return (
    <section className="py-20 bg-[#0a0d14]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-[#00f5ff] to-[#a855f7] bg-clip-text text-transparent">
                EvolVit
              </span>
            </h2>
            <p className="text-[#cbd5e1] mb-6 leading-relaxed">
              We are a community of passionate students dedicated to innovation, collaboration, and excellence in technology and beyond.
            </p>
            <p className="text-[#cbd5e1] mb-8 leading-relaxed">
              Our mission is to empower students with cutting-edge skills and opportunities that bridge the gap between academic learning and real-world innovation.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[#00f5ff] hover:text-[#a855f7] transition-colors duration-300 group">
              Learn More About Us
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] rounded-2xl blur-3xl opacity-20" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#0f1320] p-6 rounded-2xl border border-[#00f5ff]/20">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-bold text-white">Mission Driven</h3>
                  <p className="text-sm text-[#94a3b8]">Empowering innovation</p>
                </div>
                <div className="bg-[#0f1320] p-6 rounded-2xl border border-[#a855f7]/20">
                  <div className="text-3xl mb-2">👥</div>
                  <h3 className="font-bold text-white">500+ Members</h3>
                  <p className="text-sm text-[#94a3b8]">Growing community</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-[#0f1320] p-6 rounded-2xl border border-[#ff00cc]/20">
                  <div className="text-3xl mb-2">🏆</div>
                  <h3 className="font-bold text-white">25+ Awards</h3>
                  <p className="text-sm text-[#94a3b8]">Recognized excellence</p>
                </div>
                <div className="bg-[#0f1320] p-6 rounded-2xl border border-[#00f5ff]/20">
                  <div className="text-3xl mb-2">🚀</div>
                  <h3 className="font-bold text-white">50+ Events</h3>
                  <p className="text-sm text-[#94a3b8]">Memorable experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview