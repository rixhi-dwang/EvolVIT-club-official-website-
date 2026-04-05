import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../common/ScrollReveal'
import GlowingCard from '../common/GlowingCard'

const AchievementsPreview = () => {
  const achievements = [
    { title: 'Best Student Club 2025', icon: '🏆', color: 'from-[#00f5ff] to-[#a855f7]', desc: 'Most innovative student organization' },
    { title: 'National Hackathon Winners', icon: '🥇', color: 'from-[#a855f7] to-[#ff00cc]', desc: 'First place at TechNation Hackathon' },
    { title: 'Community Impact Award', icon: '🌟', color: 'from-[#ff00cc] to-[#00f5ff]', desc: 'Outstanding community contributions' }
  ]

  return (
    <section className="py-20 bg-[#0a0d14]">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Latest{' '}
              <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-[#cbd5e1]">Recognized for excellence and innovation</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                  <p className="text-[#94a3b8] text-sm">{achievement.desc}</p>
                </div>
              </GlowingCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Link to="/achievements" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-[#05060a] transition-all duration-300 group">
            View All Achievements
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AchievementsPreview