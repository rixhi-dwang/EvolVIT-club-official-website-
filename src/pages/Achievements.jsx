import React, { useState, useEffect } from 'react'
import ScrollReveal from '../components/common/ScrollReveal'
import GlowingCard from '../components/common/GlowingCard'
import Confetti from '../components/common/Confetti'

const Achievements = () => {
  const [showConfetti, setShowConfetti] = useState(true)
  const [counts, setCounts] = useState([0, 0, 0, 0])

  const stats = [
    { value: 500, label: 'Active Members', suffix: '+', icon: '👥', color: 'from-[#00f5ff] to-[#3b82f6]' },
    { value: 50, label: 'Events Organized', suffix: '+', icon: '🎪', color: 'from-[#a855f7] to-[#ff00cc]' },
    { value: 25, label: 'Awards Won', suffix: '+', icon: '🏆', color: 'from-[#ff00cc] to-[#ff4fd8]' },
    { value: 100, label: 'Success Rate', suffix: '%', icon: '📈', color: 'from-[#3b82f6] to-[#00f5ff]' }
  ]

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = stats.map(stat => stat.value / steps)
    let currentStep = 0

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCounts(prev => prev.map((count, i) => Math.min(Math.ceil(count + increment[i]), stats[i].value)))
        currentStep++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowConfetti(false), 3000)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const achievements = [
    { title: 'Best Student Club 2025', description: 'Recognized as the most innovative student organization', icon: '🌟', date: '2025', color: 'from-[#00f5ff] to-[#a855f7]' },
    { title: 'National Hackathon Winners', description: 'First place at TechNation Hackathon', icon: '🥇', date: '2024', color: 'from-[#a855f7] to-[#ff00cc]' },
    { title: 'Community Impact Award', description: 'For outstanding contributions to local tech community', icon: '🌍', date: '2024', color: 'from-[#ff00cc] to-[#00f5ff]' },
    { title: 'Innovation Excellence', description: 'Recognized for cutting-edge projects and solutions', icon: '💡', date: '2024', color: 'from-[#00f5ff] to-[#3b82f6]' },
    { title: 'Leadership Award', description: 'For exceptional leadership and mentorship', icon: '👑', date: '2023', color: 'from-[#a855f7] to-[#ff00cc]' },
    { title: 'Community Choice', description: 'Voted best student organization by peers', icon: '⭐', date: '2023', color: 'from-[#ff00cc] to-[#00f5ff]' }
  ]

  return (
    <div className="pt-32 pb-20">
      <Confetti active={showConfetti} />
      
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
                Achievements
              </span>
            </h1>
            <p className="text-xl text-[#cbd5e1] max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and innovation
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <GlowingCard gradient={stat.color}>
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {counts[index]}{stat.suffix}
                    </span>
                  </div>
                  <div className="text-[#94a3b8] text-sm uppercase tracking-wider">{stat.label}</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] mx-auto mt-3 rounded-full" />
                </div>
              </GlowingCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Awards & Recognition Section */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Awards &{' '}
              <span className="bg-gradient-to-r from-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
                Recognition
              </span>
            </h2>
            <p className="text-[#cbd5e1]">Celebrating our journey of excellence</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <GlowingCard gradient={achievement.color}>
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.title}
                  </h3>
                  <p className="text-[#cbd5e1] text-sm mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00f5ff]/10 rounded-full">
                    <span className="text-[#00f5ff] text-xs font-semibold">{achievement.date}</span>
                  </div>
                </div>
              </GlowingCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Milestone Timeline */}
        <ScrollReveal direction="up">
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our{' '}
              <span className="bg-gradient-to-r from-[#00f5ff] to-[#a855f7] bg-clip-text text-transparent">
                Milestone
              </span>
              {' '}Journey
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00f5ff] via-[#a855f7] to-[#ff00cc] opacity-30" />
              
              {[
                { year: '2022', title: 'Foundation', desc: 'EvoVit was founded with 20 passionate students', icon: '🌱' },
                { year: '2023', title: 'First Milestone', desc: 'Organized first hackathon with 100+ participants', icon: '🚀' },
                { year: '2024', title: 'Recognition', desc: 'Won Best Student Club award and grew to 300+ members', icon: '🏆' },
                { year: '2025', title: 'Excellence', desc: 'National recognition and 500+ active members', icon: '⭐' }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#a855f7] flex items-center justify-center text-2xl shadow-lg animate-pulse-glow">
                      {item.icon}
                    </div>
                  </div>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-[#0f1320] p-6 rounded-2xl border border-[#00f5ff]/20 hover:border-[#00f5ff]/40 transition-all duration-300">
                      <div className="text-[#00f5ff] font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-[#94a3b8] text-sm">{item.desc}</p>
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

export default Achievements