import React from 'react'
import { useParams, Link } from 'react-router-dom'

const TeamMemberDetail = () => {
  const { id } = useParams()

  const member = {
    id: 1,
    name: 'Alex Chen',
    role: 'President',
    bio: 'Computer Science senior with a passion for AI and leading innovative projects.',
    fullBio: 'Alex is a fourth-year Computer Science student specializing in Artificial Intelligence. He has led multiple hackathon teams to victory and has interned at Google as a software engineer. His vision for EvoVit is to create a community where every student can explore their potential in technology.',
    image: 'https://via.placeholder.com/400x500/0f1320/00f5ff?text=AC',
    linkedin: '#',
    github: '#',
    twitter: '#',
    email: 'alex.chen@evovit.club',
    skills: ['AI/ML', 'Leadership', 'Public Speaking', 'Project Management'],
    achievements: [
      'Led team to win National Hackathon 2024',
      'Organized 10+ successful events',
      'Mentored 50+ students',
      'Featured in TechCrunch for innovation'
    ],
    gradient: 'from-[#00f5ff] to-[#a855f7]'
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/team" className="inline-flex items-center gap-2 text-[#00f5ff] hover:text-[#a855f7] transition-colors duration-300 mb-8 group">
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-30 rounded-2xl blur-2xl`} />
            <div className="relative bg-[#0f1320] rounded-2xl overflow-hidden border border-[#00f5ff]/20">
              <img src={member.image} alt={member.name} className="w-full h-auto" />
            </div>
          </div>

          <div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
              {member.name}
            </h1>
            <p className="text-xl text-[#00f5ff] mb-6">{member.role}</p>
            
            <p className="text-[#cbd5e1] leading-relaxed mb-8">
              {member.fullBio}
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-[#00f5ff]/10 rounded-full text-[#00f5ff] text-sm border border-[#00f5ff]/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Key Achievements</h2>
              <ul className="space-y-3">
                {member.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#cbd5e1]">
                    <svg className="w-5 h-5 text-[#00f5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Connect</h2>
              <div className="flex gap-4">
                <a href={member.linkedin} className="px-6 py-3 bg-[#0f1320] rounded-xl text-[#00f5ff] border border-[#00f5ff]/30 hover:bg-[#00f5ff] hover:text-[#05060a] transition-all duration-300">
                  LinkedIn
                </a>
                <a href={member.github} className="px-6 py-3 bg-[#0f1320] rounded-xl text-[#a855f7] border border-[#a855f7]/30 hover:bg-[#a855f7] hover:text-[#05060a] transition-all duration-300">
                  GitHub
                </a>
                <a href={member.twitter} className="px-6 py-3 bg-[#0f1320] rounded-xl text-[#ff00cc] border border-[#ff00cc]/30 hover:bg-[#ff00cc] hover:text-[#05060a] transition-all duration-300">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberDetail