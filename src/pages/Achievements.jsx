import React, { useState, useEffect } from 'react'

const Achievements = () => {
  const [stats, setStats] = useState([
    { value: 500, label: 'Active Members', suffix: '+', icon: '👥', color: 'from-[#00f5ff] to-[#3b82f6]' },
    { value: 50, label: 'Events Organized', suffix: '+', icon: '🎪', color: 'from-[#a855f7] to-[#ff00cc]' },
    { value: 25, label: 'Awards Won', suffix: '+', icon: '🏆', color: 'from-[#ff00cc] to-[#ff4fd8]' },
    { value: 100, label: 'Success Rate', suffix: '%', icon: '📈', color: 'from-[#3b82f6] to-[#00f5ff]' }
  ])

  const [counts, setCounts] = useState([0, 0, 0, 0])

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
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const achievements = [
    { title: 'Best Student Club 2025', description: 'Recognized as the most innovative student organization', icon: '🌟', date: '2025', color: 'from-[#00f5ff] to-[#a855f7]' },
    { title: 'National Hackathon Winners', description: 'First place at TechNation Hackathon', icon: '🥇', date: '2024', color: 'from-[#a855f7] to-[#ff00cc]' },
    { title: 'Community Impact Award', description: 'For outstanding contributions to local tech community', icon: '🌍', date: '2024', color: 'from-[#ff00cc] to-[#00f5ff]' }
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group relative perspective-1000">
              <div className="relative bg-[#0f1320] rounded-2xl p-6 border border-[#00f5ff]/20 hover:border-[#00f5ff]/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl`} />
                
                <div className="relative mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} p-[1px] transform group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-2xl bg-[#0f1320] flex items-center justify-center text-3xl">
                      {stat.icon}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {counts[index]}{stat.suffix}
                    </span>
                  </div>
                  <div className="text-[#94a3b8] text-sm uppercase tracking-wider">{stat.label}</div>
                </div>

                <div className="mt-4 grid grid-cols-7 gap-1 opacity-30">
                  {[...Array(7)].map((_, i) => <div key={i} className="h-1 bg-[#00f5ff]/20 rounded" />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00f5ff] via-[#a855f7] to-[#ff00cc] opacity-30" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}>
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${achievement.color} p-[2px] animate-spin-slow`}>
                      <div className="w-full h-full rounded-full bg-[#0f1320] flex flex-col items-center justify-center">
                        <span className="text-xs text-[#94a3b8]">Year</span>
                        <span className={`text-lg font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="relative bg-[#0f1320] border border-[#00f5ff]/20 rounded-2xl p-6 hover:border-[#00f5ff]/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color} rounded-t-2xl`} />
                    
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                      <div className="text-4xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.title}
                        </h3>
                        <p className="text-[#cbd5e1] text-sm">{achievement.description}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full bg-gradient-to-r ${achievement.color} opacity-${(i + 1) * 20} group-hover:scale-125 transition-transform duration-300`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements