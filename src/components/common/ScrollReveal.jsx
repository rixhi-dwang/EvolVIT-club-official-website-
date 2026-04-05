import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const ScrollReveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
    scale: { scale: 0.8, y: 0, x: 0 }
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { 
          opacity: 0, 
          ...directions[direction],
          transition: { duration: 0.5, delay }
        },
        visible: { 
          opacity: 1, 
          y: 0, 
          x: 0, 
          scale: 1,
          transition: { 
            duration: 0.6, 
            delay,
            type: 'spring',
            stiffness: 100
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
