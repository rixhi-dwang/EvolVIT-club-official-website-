import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Confetti = ({ active }) => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (active) {
      const newParticles = []
      for (let i = 0; i < 100; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -50,
          rotation: Math.random() * 360,
          color: `hsl(${Math.random() * 60 + 180}, 100%, 50%)`,
          duration: Math.random() * 3 + 2
        })
      }
      setParticles(newParticles)
      setTimeout(() => setParticles([]), 3000)
    }
  }, [active])

  if (!active) return null

  return (
    <>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x,
            y: particle.y,
            rotate: particle.rotation,
            opacity: 1
          }}
          animate={{
            y: window.innerHeight + 50,
            rotate: particle.rotation + 360,
            opacity: 0
          }}
          transition={{
            duration: particle.duration,
            ease: 'linear'
          }}
          className="fixed pointer-events-none z-50"
          style={{
            width: 8,
            height: 8,
            backgroundColor: particle.color,
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'
          }}
        />
      ))}
    </>
  )
}

export default Confetti