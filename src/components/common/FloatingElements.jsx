import React from 'react'
import { motion } from 'framer-motion'

const FloatingElements = () => {
  const elements = [
    { icon: '🚀', x: '10%', y: '20%', delay: 0, duration: 8 },
    { icon: '💡', x: '85%', y: '15%', delay: 2, duration: 10 },
    { icon: '⚡', x: '15%', y: '70%', delay: 1, duration: 7 },
    { icon: '🎯', x: '90%', y: '60%', delay: 3, duration: 9 },
    { icon: '🌟', x: '50%', y: '90%', delay: 0.5, duration: 6 },
    { icon: '💻', x: '5%', y: '50%', delay: 2.5, duration: 11 },
    { icon: '🤖', x: '95%', y: '40%', delay: 1.5, duration: 8 },
    { icon: '🎨', x: '20%', y: '85%', delay: 3.5, duration: 7 }
  ]

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="fixed text-4xl pointer-events-none z-0 opacity-30"
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: 'easeInOut'
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </>
  )
}

export default FloatingElements