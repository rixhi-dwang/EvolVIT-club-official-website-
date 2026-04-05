import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/common/ScrollToTop'
import MouseScroller from './components/common/MouseScroller'
import AnimatedBackground from './components/common/AnimatedBackground'
import PageTransition from './components/common/PageTransition'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Domains from './pages/Domains'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import Team from './pages/Team'
import TeamMemberDetail from './pages/TeamMemberDetail'
import Gallery from './pages/Gallery'
import Join from './pages/Join'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatedBackground />
      <MouseScroller />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
            <Route path="domains" element={
              <PageTransition>
                <Domains />
              </PageTransition>
            } />
            <Route path="events" element={
              <PageTransition>
                <Events />
              </PageTransition>
            } />
            <Route path="events/:id" element={
              <PageTransition>
                <EventDetail />
              </PageTransition>
            } />
            <Route path="team" element={
              <PageTransition>
                <Team />
              </PageTransition>
            } />
            <Route path="team/:id" element={
              <PageTransition>
                <TeamMemberDetail />
              </PageTransition>
            } />
            <Route path="gallery" element={
              <PageTransition>
                <Gallery />
              </PageTransition>
            } />
            <Route path="join" element={
              <PageTransition>
                <Join />
              </PageTransition>
            } />
            <Route path="achievements" element={
              <PageTransition>
                <Achievements />
              </PageTransition>
            } />
            <Route path="contact" element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } />
            <Route path="*" element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            } />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App