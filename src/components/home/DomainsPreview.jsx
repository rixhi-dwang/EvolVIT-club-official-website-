import React from 'react'
import { Link } from 'react-router-dom'

const DomainsPreview = () => {
  const domains = [
    { title: 'Technical Innovation', icon: '💻', description: 'Cutting-edge tech and hackathons', gradient: 'from-[#00f5ff] to-[#3b82f6]' },
    { title: 'Events & Management', icon: '🎪', description: 'World-class event organization', gradient: 'from-[#a855f7] to-[#ff00cc]' },
    { title: 'Creative & Media', icon: '🎨', description: 'Design and content creation', gradient: 'from-[#ff00cc] to-[#ff4fd8]' },
    { title: 'Community & Outreach', icon: '🤝', description: 'Strategic partnerships', gradient: 'from-[#3b82f6] to-[#00f5ff]' }
  ]

  return (
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
            <Link to="/domains" key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{ background: `linear-gradient(135deg, ${domain.gradient.replace('from-', '').replace('to-', '')})` }}
              />
              <div className="relative bg-[#0f1320] border border-[#00f5ff]/20 rounded-2xl p-6 text-center hover:border-[#00f5ff]/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {domain.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent`}>
                  {domain.title}
                </h3>
                <p className="text-[#94a3b8] text-sm">{domain.description}</p>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${domain.gradient} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </Link>
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
  )
}

export default DomainsPreview