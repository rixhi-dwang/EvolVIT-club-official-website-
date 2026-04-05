import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedEvents = () => {
  const events = [
    {
      id: 1,
      title: 'TechFusion Hackathon 2025',
      description: '48-hour innovation challenge with industry mentors and exciting prizes.',
      date: 'March 15-17, 2026',
      icon: '🚀',
      gradient: 'from-[#00f5ff] to-[#a855f7]'
    },
    {
      id: 2,
      title: 'RIVML Workshop Series',
      description: 'Hands-on workshop covering machine learning fundamentals.',
      date: 'March 25, 2026',
      icon: '🤖',
      gradient: 'from-[#a855f7] to-[#ff00cc]'
    }
  ]

  return (
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
          {events.map((event) => (
            <Link to={`/events/${event.id}`} key={event.id} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl`} />
              
              <div className="relative bg-[#0f1320] border border-[#00f5ff]/20 rounded-2xl p-8 hover:border-[#00f5ff]/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <div className="text-5xl transform group-hover:scale-110 transition-transform duration-500">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                      {event.title}
                    </h3>
                    <p className="text-[#cbd5e1] mb-4">{event.description}</p>
                    <div className="flex items-center gap-2 text-[#94a3b8]">
                      <svg className="w-5 h-5 text-[#00f5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${event.gradient} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </Link>
          ))}
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
  )
}

export default FeaturedEvents