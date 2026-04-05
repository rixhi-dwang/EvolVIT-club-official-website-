import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const canvasRef = useRef(null)

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05060a]/50 to-[#05060a]" />

      <div className="relative container mx-auto px-6 py-32 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 backdrop-blur-sm mb-8 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse" />
            <span className="text-sm text-[#00f5ff]">Innovate · Evolve · Lead</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent animate-gradient">
              Where Innovation
            </span>
            <br />
            <span className="text-white">Meets Execution</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#cbd5e1] mb-12 max-w-2xl mx-auto">
            Join the most forward-thinking student community shaping the future of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-[#00f5ff]/50 flex justify-center">
              <div className="w-1 h-3 bg-[#00f5ff] rounded-full mt-2 animate-scroll" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero