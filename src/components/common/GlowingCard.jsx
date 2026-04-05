import React, { useState } from 'react'
import { motion } from 'framer-motion'

const GlowingCard = ({ children, className = '', gradient = 'from-[#00f5ff] to-[#a855f7]' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Glow effect that follows mouse */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, rgba(0,245,255,0.3), rgba(168,85,247,0.1))`,
            borderRadius: '50%',
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            filter: 'blur(20px)'
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
      
      {/* Border gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {children}
    </motion.div>
  )
}

export default GlowingCard