import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingElements from '../common/FloatingElements'

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#05060a] relative">
      <FloatingElements />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
