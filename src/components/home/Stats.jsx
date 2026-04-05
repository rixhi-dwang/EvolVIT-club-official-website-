import React, { useState, useEffect } from 'react'

const Stats = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  
  const stats = [
    { value: 500, label: 'Active Members', suffix: '+' },
    { value: 50, label: 'Events Organized', suffix: '+' },
    { value: 25, label: 'Awards Won', suffix: '+' },
    { value: 100, label: 'Success Rate', suffix: '%' }
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
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-[#05060a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] bg-clip-text text-transparent">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-[#94a3b8] text-sm uppercase tracking-wider">{stat.label}</div>
              <div className="w-12 h-1 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] mx-auto mt-3 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats