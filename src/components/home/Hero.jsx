import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Typewriter from '../common/Typewriter'

const Hero = () => {
  const canvasRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let animationFrameId

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = `rgba(0, 245, 255, ${Math.random() * 0.5})`
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }
      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      particles = []
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = (e.clientX - rect.left) / width
    const mouseY = (e.clientY - rect.top) / height
    x.set(mouseX - 0.5)
    y.set(mouseY - 0.5)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05060a]/50 to-[#05060a]" />

      <div className="relative container mx-auto px-6 py-32 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse" />
            <span className="text-sm text-[#00f5ff]">Innovate · Evolve · Lead</span>
          </motion.div>

          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            className="perspective-1000"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent animate-gradient">
                Where Innovation
              </span>
              <br />
              <Typewriter 
                texts={['Meets Execution', 'Comes Alive', 'Creates Magic', 'Changes World']}
                delay={3000}
              />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-[#cbd5e1] mb-12 max-w-2xl mx-auto"
          >
            Join the most forward-thinking student community shaping the future of technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/join"
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] opacity-100 group-hover:opacity-90 transition-opacity" />
              <span className="relative text-white font-semibold">Join Us</span>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(0,245,255,0.8)]" />
            </Link>

            <Link
              to="/events"
              className="group relative px-8 py-4 rounded-full border-2 border-[#00f5ff] overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-[#00f5ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative text-[#00f5ff] group-hover:text-[#05060a] transition-colors duration-300 font-semibold">
                Explore Events
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <div className="w-6 h-10 rounded-full border-2 border-[#00f5ff]/50 flex justify-center">
              <div className="w-1 h-3 bg-[#00f5ff] rounded-full mt-2 animate-scroll" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero