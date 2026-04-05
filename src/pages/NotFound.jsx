import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="relative inline-block">
          <div className="text-9xl md:text-9xl font-bold bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent animate-gradient">
            404
          </div>
          <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] -z-10" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-8 mb-4">Page Not Found</h2>
        <p className="text-xl text-[#cbd5e1] mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] rounded-xl text-white font-semibold hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300 group">
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound