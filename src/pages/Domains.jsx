import React from 'react'

const Domains = () => {
  const domains = [
    {
      title: 'Technical Innovation',
      description: 'Dive into cutting-edge technologies, hackathons, and development projects that push boundaries.',
      icon: '💻',
      gradient: 'from-[#00f5ff] to-[#3b82f6]',
      features: ['AI/ML', 'Web Development', 'Blockchain', 'Cloud Computing']
    },
    {
      title: 'Events & Management',
      description: 'Organize and execute world-class events, workshops, and conferences that inspire thousands.',
      icon: '🎪',
      gradient: 'from-[#a855f7] to-[#ff00cc]',
      features: ['Event Planning', 'Logistics', 'Sponsorship', 'Volunteer Management']
    },
    {
      title: 'Creative & Media',
      description: 'Unleash creativity through design, content creation, and multimedia storytelling.',
      icon: '🎨',
      gradient: 'from-[#ff00cc] to-[#ff4fd8]',
      features: ['Graphic Design', 'Video Production', 'Social Media', 'Content Writing']
    },
    {
      title: 'Community & Outreach',
      description: 'Build meaningful connections and expand our impact through strategic partnerships and engagement.',
      icon: '🤝',
      gradient: 'from-[#3b82f6] to-[#00f5ff]',
      features: ['Partnerships', 'Mentorship', 'Workshops', 'Networking']
    }
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            What{' '}
            <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
              We Do
            </span>
          </h1>
          <p className="text-xl text-[#cbd5e1] max-w-3xl mx-auto">
            Explore our diverse domains and find where your passion meets purpose
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {domains.map((domain, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{ background: `linear-gradient(135deg, ${domain.gradient.replace('from-', '').replace('to-', '')})` }}
              />
              <div className="relative bg-[#0f1320] border border-[#00f5ff]/10 rounded-2xl p-8 backdrop-blur-sm hover:border-[#00f5ff]/30 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <div className={`text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {domain.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent`}>
                      {domain.title}
                    </h3>
                    <p className="text-[#cbd5e1] leading-relaxed mb-4">
                      {domain.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {domain.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs rounded-full bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/20">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${domain.gradient} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Domains