import React from 'react'
import Hero from '../components/home/Hero'
import AboutPreview from '../components/home/AboutPreview'
import Stats from '../components/home/Stats'
import DomainsPreview from '../components/home/DomainsPreview'
import FeaturedEvents from '../components/home/FeaturedEvents'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Stats />
      <DomainsPreview />
      <FeaturedEvents />
      <Testimonials />
    </>
  )
}

export default Home