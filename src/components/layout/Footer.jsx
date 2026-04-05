import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Domains', path: '/domains' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Join Us', path: '/join' }
  ]

  const socialLinks = [
    { name: 'Instagram', icon: '📱', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'GitHub', icon: '💻', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' }
  ]

  return (
    <footer className="relative bg-[#05060a] border-t border-[#00f5ff]/20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, rgba(0,245,255,0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="group">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
                EvoVit
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] rounded-full mt-2 group-hover:w-full transition-all duration-500" />
            </div>
            <p className="text-[#cbd5e1] leading-relaxed">
              Where innovation meets execution. Join the most forward-thinking student community shaping the future of technology.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative w-10 h-10 rounded-full bg-[#0f1320] border border-[#00f5ff]/30 flex items-center justify-center text-xl hover:border-[#00f5ff] hover:scale-110 transition-all duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#94a3b8] hover:text-[#00f5ff] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#00f5ff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#94a3b8]">
                <svg className="w-5 h-5 text-[#00f5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@evovit.club" className="hover:text-[#00f5ff] transition-colors duration-300">
                  contact@evovit.club
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#94a3b8]">
                <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-[#94a3b8]">
                <svg className="w-5 h-5 text-[#ff00cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>University Campus, Innovation Hub</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-[#94a3b8] mb-4">Subscribe to our newsletter for latest updates</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-[#0f1320] border border-[#00f5ff]/30 rounded-xl text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#00f5ff] transition-all duration-300"
              />
              <button className="w-full px-4 py-3 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] rounded-xl text-white font-semibold hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#00f5ff]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94a3b8] text-sm">
              © 2026 EvoVit. All rights reserved. Built with passion and innovation.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-[#94a3b8] hover:text-[#00f5ff] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-[#94a3b8] hover:text-[#00f5ff] transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer