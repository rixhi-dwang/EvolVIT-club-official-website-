import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Domains', path: '/domains' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Join', path: '/join' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-[#05060a]/90 backdrop-blur-xl border-b border-[#00f5ff]/20' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="relative group">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
            EvoVit
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-[#cbd5e1] hover:text-white transition-colors duration-300 group ${
                  isActive ? 'text-white' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <motion.span 
                    className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#00f5ff] ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <motion.div 
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-[#05060a]/95 backdrop-blur-xl border-b border-[#00f5ff]/20"
      >
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-[#cbd5e1] hover:text-white transition-colors duration-300 py-2 ${
                  isActive ? 'text-white' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar