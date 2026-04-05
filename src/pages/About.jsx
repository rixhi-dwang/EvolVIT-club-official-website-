import React from 'react'
import ScrollReveal from '../components/common/ScrollReveal'
import GlowingCard from '../components/common/GlowingCard'
import ParallaxSection from '../components/common/ParallaxSection'

const About = () => {
  const values = [
    { title: 'Innovation', icon: '💡', desc: 'Pushing boundaries with creative solutions', gradient: 'from-[#00f5ff] to-[#3b82f6]' },
    { title: 'Collaboration', icon: '🤝', desc: 'Working together to achieve greatness', gradient: 'from-[#a855f7] to-[#ff00cc]' },
    { title: 'Excellence', icon: '⭐', desc: 'Striving for the highest standards', gradient: 'from-[#ff00cc] to-[#ff4fd8]' },
    { title: 'Impact', icon: '🌍', desc: 'Creating meaningful change', gradient: 'from-[#3b82f6] to-[#00f5ff]' }
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <ScrollReveal direction="up">
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
        </ScrollReveal>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <ScrollReveal direction="left">
            <GlowingCard gradient="from-[#00f5ff] to-[#a855f7]">
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#a855f7] flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-[#cbd5e1] leading-relaxed">
                  To empower students with cutting-edge skills and opportunities that bridge the gap between academic learning and real-world innovation.
                </p>
              </div>
            </GlowingCard>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <GlowingCard gradient="from-[#a855f7] to-[#ff00cc]">
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#a855f7] to-[#ff00cc] flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-[#cbd5e1] leading-relaxed">
                  Building a thriving ecosystem where creativity, technology, and leadership converge to shape the future of tomorrow.
                </p>
              </div>
            </GlowingCard>
          </ScrollReveal>
        </div>

        {/* Core Values with Parallax */}
        <ParallaxSection speed={0.3}>
          <div className="mb-20">
            <ScrollReveal direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our Core{' '}
                <span className="bg-gradient-to-r from-[#00f5ff] to-[#a855f7] bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <GlowingCard gradient={value.gradient}>
                    <div className="p-6 text-center">
                      <div className="text-5xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-[#94a3b8] text-sm">{value.desc}</p>
                    </div>
                  </GlowingCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* History Timeline */}
        <ScrollReveal direction="up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our{' '}
              <span className="bg-gradient-to-r from-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00f5ff] via-[#a855f7] to-[#ff00cc] opacity-30" />
              
              {[
                { year: '2022', title: 'The Beginning', desc: 'EvoVit was founded by a group of passionate students' },
                { year: '2023', title: 'First Hackathon', desc: 'Organized our first successful hackathon with 100+ participants' },
                { year: '2024', title: 'Expansion', desc: 'Grew to 500+ members and won Best Student Club award' },
                { year: '2025', title: 'National Recognition', desc: 'Recognized as most innovative student organization' }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#a855f7] flex items-center justify-center text-white font-bold z-10">
                    {item.year.slice(-2)}
                  </div>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-[#0f1320] p-6 rounded-2xl border border-[#00f5ff]/20">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-[#94a3b8]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default About