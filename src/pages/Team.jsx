import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'President',
      bio: 'Computer Science senior with a passion for AI and leading innovative projects.',
      image: 'https://via.placeholder.com/300x400/0f1320/00f5ff?text=AC',
      linkedin: '#',
      github: '#',
      gradient: 'from-[#00f5ff] to-[#a855f7]'
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      role: 'Vice President',
      bio: 'Experienced in event management and community building, dedicated to creating impactful experiences.',
      image: 'https://via.placeholder.com/300x400/0f1320/a855f7?text=SM',
      linkedin: '#',
      github: '#',
      gradient: 'from-[#a855f7] to-[#ff00cc]'
    },
    {
      id: 3,
      name: 'Raj Patel',
      role: 'Tech Lead',
      bio: 'Full-stack developer and hackathon enthusiast, leading technical workshops and projects.',
      image: 'https://via.placeholder.com/300x400/0f1320/ff00cc?text=RP',
      linkedin: '#',
      github: '#',
      gradient: 'from-[#ff00cc] to-[#00f5ff]'
    },
    {
      id: 4,
      name: 'Emily Wong',
      role: 'Creative Director',
      bio: 'Designer and content creator, bringing creative visions to life through multimedia.',
      image: 'https://via.placeholder.com/300x400/0f1320/00f5ff?text=EW',
      linkedin: '#',
      github: '#',
      gradient: 'from-[#00f5ff] to-[#a855f7]'
    },
    {
      id: 5,
      name: 'Marcus Thompson',
      role: 'Events Manager',
      bio: 'Logistics expert with experience organizing large-scale tech conferences and workshops.',
      image: 'https://via.placeholder.com/300x400/0f1320/a855f7?text=MT',
      linkedin: '#',
      github: '#',
      gradient: 'from-[#a855f7] to-[#ff00cc]'
    },
    {
      id: 6,
      name: 'Priya Sharma',
      role: 'Outreach Lead',
      bio: 'Building partnerships and expanding community reach through strategic initiatives.',
      image: 'https://via.placeholder.com/300x400/0f1320/ff00cc?text=PS',
      linkedin: '#',
      github: '#',
      gradient: 'from-[#ff00cc] to-[#00f5ff]'
    }
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-[#cbd5e1] max-w-3xl mx-auto">
            The passionate individuals driving innovation and excellence at EvoVit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Link to={`/team/${member.id}`} key={member.id} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl`} />

              <div className="relative bg-[#0f1320] border border-[#00f5ff]/20 rounded-2xl overflow-hidden hover:border-[#00f5ff]/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-1 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.name}
                  </h3>
                  <p className="text-[#00f5ff] text-sm mb-3">{member.role}</p>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{member.bio}</p>

                  <div className="flex gap-3 mt-4">
                    <a href={member.linkedin} className="text-[#94a3b8] hover:text-[#00f5ff] transition-colors duration-300">
                      🔗
                    </a>
                    <a href={member.github} className="text-[#94a3b8] hover:text-[#a855f7] transition-colors duration-300">
                      💻
                    </a>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${member.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team