import React, { useState } from 'react'

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    domain: '',
    reason: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ fullName: '', email: '', phone: '', domain: '', reason: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 2000)
  }

  const domains = ['Technical Innovation', 'Events & Management', 'Creative & Media', 'Community & Outreach']

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Ready to{' '}
            <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
              Evolve?
            </span>
          </h1>
          <p className="text-xl text-[#cbd5e1] max-w-2xl mx-auto">
            Become part of our innovative community and start your journey today
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-2xl" />

            <div className="relative bg-[#0f1320] border-2 border-[#00f5ff]/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] rounded-t-3xl" />

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 animate-slide-down">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Application submitted successfully! We'll contact you soon.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#cbd5e1] mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#05060a] border border-[#00f5ff]/30 rounded-xl text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#00f5ff] focus:ring-2 focus:ring-[#00f5ff]/20 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#cbd5e1] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#05060a] border border-[#a855f7]/30 rounded-xl text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#cbd5e1] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#05060a] border border-[#ff00cc]/30 rounded-xl text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#ff00cc] focus:ring-2 focus:ring-[#ff00cc]/20 transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#cbd5e1] mb-2">Preferred Domain</label>
                    <select
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#05060a] border border-[#00f5ff]/30 rounded-xl text-white focus:outline-none focus:border-[#00f5ff] transition-all duration-300"
                    >
                      <option value="">Select a domain</option>
                      {domains.map(domain => (
                        <option key={domain} value={domain}>{domain}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#cbd5e1] mb-2">Why do you want to join EvoVit? *</label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-[#05060a] border border-[#00f5ff]/30 rounded-xl text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#00f5ff] focus:ring-2 focus:ring-[#00f5ff]/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your interests and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full group/btn overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] rounded-xl opacity-100 group-hover/btn:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] rounded-xl blur-md opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300" />
                  
                  <div className="relative px-8 py-4 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-white font-semibold">Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-white font-semibold">Join Our Community</span>
                        <svg className="w-5 h-5 text-white transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </div>
                </button>
              </form>

              <div className="mt-8 flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#a855f7] animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                ))}
              </div>

              <p className="text-center text-sm text-[#94a3b8] mt-6">
                By joining, you agree to our{' '}
                <a href="#" className="text-[#00f5ff] hover:text-[#a855f7] transition-colors duration-300">Terms of Service</a> and{' '}
                <a href="#" className="text-[#00f5ff] hover:text-[#a855f7] transition-colors duration-300">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join