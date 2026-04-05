import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Events = () => {
  const [filter, setFilter] = useState('upcoming')

  const upcomingEvents = [
    {
      id: 1,
      title: 'TechFusion Hackathon 2025',
      description: '48-hour innovation challenge with industry mentors and exciting prizes.',
      date: 'March 15-17, 2026',
      location: 'Main Campus Auditorium',
      participants: '200+ participants',
      icon: '🚀',
      gradient: 'from-[#00f5ff] to-[#a855f7]',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'RIVML Workshop Series',
      description: 'Hands-on workshop covering machine learning fundamentals and real-world applications.',
      date: 'March 25, 2026',
      location: 'Innovation Lab',
      participants: '100 students',
      icon: '🤖',
      gradient: 'from-[#a855f7] to-[#ff00cc]',
      status: 'upcoming'
    }
  ]

  const pastEvents = [
    {
      id: 3,
      title: 'Annual Tech Summit 2025',
      description: 'A day-long conference featuring industry leaders and innovative tech showcases.',
      date: 'December 10, 2025',
      icon: '🌟',
      gradient: 'from-[#00f5ff] to-[#a855f7]',
      status: 'past'
    },
    {
      id: 4,
      title: 'Robotics Innovation Fair',
      description: 'Showcase of cutting-edge robotics projects and live demonstrations.',
      date: 'November 5, 2025',
      icon: '⚡',
      gradient: 'from-[#a855f7] to-[#ff00cc]',
      status: 'past'
    }
  ]

  const events = filter === 'upcoming' ? upcomingEvents : pastEvents

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Events &{' '}
            <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
              Workshops
            </span>
          </h1>
          <p className="text-xl text-[#cbd5e1] max-w-3xl mx-auto">
            Experience innovation through our curated events, workshops, and hackathons
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
              filter === 'upcoming'
                ? 'bg-gradient-to-r from-[#00f5ff] to-[#a855f7] text-white shadow-lg'
                : 'bg-[#0f1320] text-[#cbd5e1] border border-[#00f5ff]/30 hover:border-[#00f5ff]'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
              filter === 'past'
                ? 'bg-gradient-to-r from-[#a855f7] to-[#ff00cc] text-white shadow-lg'
                : 'bg-[#0f1320] text-[#cbd5e1] border border-[#a855f7]/30 hover:border-[#a855f7]'
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <Link to={`/events/${event.id}`} key={event.id} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl`} />
              
              <div className="relative bg-[#0f1320] border border-[#00f5ff]/20 rounded-2xl p-8 backdrop-blur-sm hover:border-[#00f5ff]/40 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00f5ff]/5 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {event.icon}
                  </div>

                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                    {event.title}
                  </h3>

                  <p className="text-[#cbd5e1] mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[#94a3b8]">
                      <svg className="w-5 h-5 text-[#00f5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-3 text-[#94a3b8]">
                        <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    )}
                    {event.participants && (
                      <div className="flex items-center gap-3 text-[#94a3b8]">
                        <svg className="w-5 h-5 text-[#ff00cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span>{event.participants}</span>
                      </div>
                    )}
                  </div>

                  {event.status === 'upcoming' && (
                    <button className="mt-8 w-full py-3 px-6 rounded-lg border border-[#00f5ff]/30 text-[#00f5ff] hover:bg-[#00f5ff] hover:text-[#05060a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] font-semibold">
                      Register Now →
                    </button>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events