import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/common/ScrollToTop'

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
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="domains" element={<Domains />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="team" element={<Team />} />
          <Route path="team/:id" element={<TeamMemberDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="join" element={<Join />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App