import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MouseScroller = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [clickEffect, setClickEffect] = useState(false)
  const [surpriseMessage, setSurpriseMessage] = useState('')
  const [showSurprise, setShowSurprise] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const handleClick = (e) => {
      setClickEffect(true)
      // Create particles on click
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 5 + 2
      }
      setParticles(prev => [...prev, newParticle])
      setTimeout(() => setClickEffect(false), 300)
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id))
      }, 1000)

      // Random surprises on click
      const surprises = [
        '✨ BOOM! ✨',
        '🚀 Whoosh! 🚀',
        '💥 POW! 💥',
        '⚡ ZAP! ⚡',
        '🎉 Surprise! 🎉',
        '🌟 Magic! 🌟',
        '💫 Woosh! 💫',
        '🔥 FIRE! 🔥'
      ]
      setSurpriseMessage(surprises[Math.floor(Math.random() * surprises.length)])
      setShowSurprise(true)
      setTimeout(() => setShowSurprise(false), 1000)
    }

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    const handleHoverElements = () => {
      const hoverables = document.querySelectorAll('a, button, input, textarea, .card-hover, [role="button"]')
      
      const handleMouseEnter = () => setCursorVariant('hover')
      const handleMouseLeave = () => setCursorVariant('default')

      hoverables.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })

      return () => {
        hoverables.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter)
          el.removeEventListener('mouseleave', handleMouseLeave)
        })
      }
    }

    handleHoverElements()
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(0, 245, 255, 0.3)',
      border: '2px solid rgba(0, 245, 255, 0.8)',
      transition: {
        type: 'spring',
        mass: 0.6,
        stiffness: 150,
        damping: 15
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: 'rgba(168, 85, 247, 0.4)',
      border: '2px solid rgba(168, 85, 247, 0.9)',
      scale: 1.5,
      transition: {
        type: 'spring',
        mass: 0.4,
        stiffness: 200,
        damping: 10
      }
    }
  }

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden lg:block"
        variants={variants}
        animate={cursorVariant}
        style={{
          background: 'radial-gradient(circle, rgba(0,245,255,0.2), rgba(168,85,247,0.2))',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 0 20px rgba(0,245,255,0.5)'
        }}
      >
        <div className="absolute inset-0 rounded-full animate-ping opacity-50" />
      </motion.div>

      {/* Click Effect */}
      <AnimatePresence>
        {clickEffect && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed rounded-full bg-gradient-to-r from-[#00f5ff] to-[#a855f7] pointer-events-none z-[9998]"
            style={{
              left: mousePosition.x - 30,
              top: mousePosition.y - 30,
              width: 60,
              height: 60
            }}
          />
        )}
      </AnimatePresence>

      {/* Surprise Messages */}
      <AnimatePresence>
        {showSurprise && (
          <motion.div
            initial={{ y: 0, opacity: 0, scale: 0 }}
            animate={{ y: -100, opacity: 1, scale: 1.5 }}
            exit={{ y: -150, opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed pointer-events-none z-[9998] text-2xl font-bold"
            style={{
              left: mousePosition.x - 30,
              top: mousePosition.y - 30,
              background: 'linear-gradient(135deg, #00f5ff, #a855f7, #ff00cc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {surpriseMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x,
            y: particle.y,
            scale: 1,
            opacity: 1
          }}
          animate={{
            x: particle.x + Math.cos(particle.angle) * particle.speed * 20,
            y: particle.y + Math.sin(particle.angle) * particle.speed * 20,
            scale: 0,
            opacity: 0
          }}
          transition={{ duration: 0.8 }}
          className="fixed w-2 h-2 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#a855f7] pointer-events-none z-[9997]"
        />
      ))}
    </>
  )
}

export default MouseScroller