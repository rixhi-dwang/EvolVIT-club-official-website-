import React from 'react'
import { useParams, Link } from 'react-router-dom'

const EventDetail = () => {
  const { id } = useParams()

  const event = {
    id: 1,
    title: 'TechFusion Hackathon 2025',
    description: '48-hour innovation challenge with industry mentors and exciting prizes.',
    fullDescription: 'Join us for an intense 48-hour coding marathon where you\'ll collaborate with fellow developers, designers, and innovators to solve real-world problems. Industry mentors will guide you throughout the event, and you\'ll have the chance to win exciting prizes and get noticed by top tech companies.',
    date: 'March 15-17, 2026',
    location: 'Main Campus Auditorium',
    participants: '200+ participants',
    icon: '🚀',
    gradient: 'from-[#00f5ff] to-[#a855f7]',
    schedule: [
      { time: 'Day 1 - 9:00 AM', activity: 'Opening Ceremony & Team Formation' },
      { time: 'Day 1 - 11:00 AM', activity: 'Hackathon Begins' },
      { time: 'Day 2 - All Day', activity: 'Coding & Mentorship Sessions' },
      { time: 'Day 3 - 2:00 PM', activity: 'Final Submissions' },
      { time: 'Day 3 - 5:00 PM', activity: 'Presentations & Awards' }
    ],
    speakers: [
      { name: 'Dr. Sarah Johnson', role: 'AI Research Director', company: 'Google' },
      { name: 'Michael Chen', role: 'Senior Developer', company: 'Microsoft' },
      { name: 'Priya Sharma', role: 'Tech Lead', company: 'Amazon' }
    ]
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/events" className="inline-flex items-center gap-2 text-[#00f5ff] hover:text-[#a855f7] transition-colors duration-300 mb-8 group">
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-[#0f1320] rounded-2xl p-8 border border-[#00f5ff]/20">
              <div className="text-6xl mb-6">{event.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] bg-clip-text text-transparent">
                {event.title}
              </h1>
              <p className="text-xl text-[#cbd5e1] mb-6 leading-relaxed">
                {event.fullDescription}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 text-[#94a3b8] p-4 bg-[#05060a] rounded-xl">
                  <svg className="w-5 h-5 text-[#00f5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-[#94a3b8] p-4 bg-[#05060a] rounded-xl">
                  <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-3 text-[#94a3b8] p-4 bg-[#05060a] rounded-xl">
                  <svg className="w-5 h-5 text-[#ff00cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>{event.participants}</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Schedule</h2>
                <div className="space-y-3">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 bg-[#05060a] rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-[#00f5ff] mt-2" />
                      <div>
                        <p className="font-semibold text-white">{item.time}</p>
                        <p className="text-[#94a3b8]">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Speakers</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="p-4 bg-[#05060a] rounded-xl text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#a855f7] mx-auto mb-3 flex items-center justify-center text-2xl">
                        👨‍💻
                      </div>
                      <p className="font-semibold text-white">{speaker.name}</p>
                      <p className="text-sm text-[#94a3b8]">{speaker.role}</p>
                      <p className="text-xs text-[#00f5ff]">{speaker.company}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-r from-[#00f5ff] to-[#a855f7] rounded-2xl p-[1px] sticky top-32">
              <div className="bg-[#0f1320] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Register Now</h3>
                <p className="text-[#cbd5e1] mb-6">Limited spots available! Secure your place today.</p>
                <button className="w-full py-3 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] rounded-xl text-white font-semibold hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300">
                  Register for Event
                </button>
                <p className="text-xs text-[#94a3b8] text-center mt-4">Early bird registration ends soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail