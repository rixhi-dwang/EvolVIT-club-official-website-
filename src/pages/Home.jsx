import React from 'react'
import Hero from '../components/home/Hero'
import ScrollReveal from '../components/common/ScrollReveal'
import GlowingCard from '../components/common/GlowingCard'
import ParallaxSection from '../components/common/ParallaxSection'
import AchievementsPreview from '../components/home/AchievementsPreview'
import { Link } from 'react-router-dom'

const Home = () => {
  const domains = [
    { title: 'Technical Innovation', icon: '💻', desc: 'Cutting-edge tech and hackathons', gradient: 'from-[#00f5ff] to-[#3b82f6]' },
    { title: 'Events & Management', icon: '🎪', desc: 'World-class event organization', gradient: 'from-[#a855f7] to-[#ff00cc]' },
    { title: 'Creative & Media', icon: '🎨', desc: 'Design and content creation', gradient: 'from-[#ff00cc] to-[#ff4fd8]' },
    { title: 'Community & Outreach', icon: '🤝', desc: 'Strategic partnerships', gradient: 'from-[#3b82f6] to-[#00f5ff]' }
  ]

  const stats = [
    { value: '500+', label: 'Active Members' },
    { value: '50+', label: 'Events Organized' },
    { value: '25+', label: 'Awards Won' },
    { value: '100%', label: 'Success Rate' }
  ]

  return (
    <>
      <Hero />
      
      {/* About Section */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-[#0a0d14]">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  About{' '}
                  <span className="bg-gradient-to-r from-[#00f5ff] to-[#a855f7] bg-clip-text text-transparent">
                    EvolVit
                  </span>
                </h2>
                <p className="text-[#cbd5e1] mb-6 leading-relaxed">
                  We are a community of passionate students dedicated to innovation, collaboration, and excellence in technology and beyond.
                </p>
                <p className="text-[#cbd5e1] mb-8 leading-relaxed">
                  Our mission is to empower students with cutting-edge skills and opportunities that bridge the gap between academic learning and real-world innovation.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-[#00f5ff] hover:text-[#a855f7] transition-colors duration-300 group">
                  Learn More About Us
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] rounded-2xl blur-3xl opacity-20" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-[#0f1320] p-6 rounded-2xl border border-[#00f5ff]/20">
                      <div className="text-3xl mb-2">🎯</div>
                      <h3 className="font-bold text-white">Mission Driven</h3>
                      <p className="text-sm text-[#94a3b8]">Empowering innovation</p>
                    </div>
                    <div className="bg-[#0f1320] p-6 rounded-2xl border border-[#a855f7]/20">
                      <div className="text-3xl mb-2">👥</div>
                      <h3 className="font-bold text-white">500+ Members</h3>
                      <p className="text-sm text-[#94a3b8]">Growing community</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-[#0f1320] p-6 rounded-2xl border border-[#ff00cc]/20">
                      <div className="text-3xl mb-2">🏆</div>
                      <h3 className="font-bold text-white">25+ Awards</h3>
                      <p className="text-sm text-[#94a3b8]">Recognized excellence</p>
                    </div>
                    <div className="bg-[#0f1320] p-6 rounded-2xl border border-[#00f5ff]/20">
                      <div className="text-3xl mb-2">🚀</div>
                      <h3 className="font-bold text-white">50+ Events</h3>
                      <p className="text-sm text-[#94a3b8]">Memorable experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Section with Parallax */}
      <ParallaxSection speed={0.3}>
        <section className="py-20 bg-[#05060a]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <div className="text-center group">
                    <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[#94a3b8] text-sm uppercase tracking-wider">{stat.label}</div>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] mx-auto mt-3 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Domains Section */}
      <ScrollReveal direction="left">
        <section className="py-20 bg-[#0a0d14]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Explore Our{' '}
                <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
                  Domains
                </span>
              </h2>
              <p className="text-xl text-[#cbd5e1]">Find where your passion meets purpose</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {domains.map((domain, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <GlowingCard gradient={domain.gradient}>
                    <Link to="/domains" className="block p-6 text-center">
                      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                        {domain.icon}
                      </div>
                      <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent`}>
                        {domain.title}
                      </h3>
                      <p className="text-[#94a3b8] text-sm">{domain.desc}</p>
                    </Link>
                  </GlowingCard>
                </ScrollReveal>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/domains" className="inline-flex items-center gap-2 text-[#00f5ff] hover:text-[#a855f7] transition-colors duration-300 group">
                View All Domains
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Events */}
      <ScrollReveal direction="right">
        <section className="py-20 bg-[#05060a]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured{' '}
                <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
                  Events
                </span>
              </h2>
              <p className="text-xl text-[#cbd5e1]">Don't miss out on our upcoming events</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <GlowingCard gradient="from-[#00f5ff] to-[#a855f7]">
                <Link to="/events/1" className="block p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">🚀</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] bg-clip-text text-transparent">
                        TechFusion Hackathon 2025
                      </h3>
                      <p className="text-[#cbd5e1] mb-4">48-hour innovation challenge with industry mentors.</p>
                      <div className="flex items-center gap-2 text-[#94a3b8]">
                        <svg className="w-5 h-5 text-[#00f5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>March 15-17, 2026</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </GlowingCard>

              <GlowingCard gradient="from-[#a855f7] to-[#ff00cc]">
                <Link to="/events/2" className="block p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">🤖</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
                        RIVML Workshop Series
                      </h3>
                      <p className="text-[#cbd5e1] mb-4">Hands-on ML workshop with real-world applications.</p>
                      <div className="flex items-center gap-2 text-[#94a3b8]">
                        <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>March 25, 2026</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </GlowingCard>
            </div>

            <div className="text-center mt-12">
              <Link to="/events" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-[#05060a] transition-all duration-300 group">
                View All Events
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ACHIEVEMENTS PREVIEW SECTION - ADDED HERE */}
      <AchievementsPreview />

    </>
  )
}

export default Home