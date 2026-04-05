import React, { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [category, setCategory] = useState('all')

  const categories = ['all', 'events', 'workshops', 'team', 'hackathons']

  const galleryImages = [
    {
      id: 1,
      src: 'https://via.placeholder.com/600x400/0f1320/00f5ff?text=Tech+Summit+2025',
      title: 'Tech Summit 2025',
      category: 'events',
      date: 'Dec 2025',
      icon: '🌟'
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/600x400/0f1320/a855f7?text=ML+Workshop',
      title: 'Machine Learning Workshop',
      category: 'workshops',
      date: 'Nov 2025',
      icon: '🤖'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/600x400/0f1320/ff00cc?text=Team+Building',
      title: 'Team Building Day',
      category: 'team',
      date: 'Oct 2025',
      icon: '👥'
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/600x400/0f1320/00f5ff?text=Hackathon+2025',
      title: 'Hackathon 2025',
      category: 'hackathons',
      date: 'Sep 2025',
      icon: '💻'
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/600x400/0f1320/a855f7?text=Robotics+Fair',
      title: 'Robotics Innovation Fair',
      category: 'events',
      date: 'Aug 2025',
      icon: '⚡'
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/600x400/0f1320/ff00cc?text=Creative+Session',
      title: 'Creative Design Session',
      category: 'workshops',
      date: 'Jul 2025',
      icon: '🎨'
    }
  ]

  const filteredImages = category === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === category)

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff00cc] bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-[#cbd5e1]">
            Capturing moments of innovation, collaboration, and success
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`group relative px-6 py-3 rounded-full transition-all duration-300 ${
                category === cat 
                  ? 'text-white' 
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#a855f7] transition-all duration-300 ${
                category === cat ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
              }`} />
              <span className="relative capitalize font-semibold">{cat}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-xl" />

              <div className="relative h-full bg-[#0f1320] rounded-2xl overflow-hidden border border-[#00f5ff]/20 group-hover:border-[#00f5ff]/40 transition-all duration-500">
                <div className="relative h-full min-h-[300px] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-[#0f1320]/90 backdrop-blur-sm rounded-xl p-4 border border-[#00f5ff]/30">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{image.icon}</span>
                        <h3 className="text-xl font-bold text-white">{image.title}</h3>
                      </div>
                      <p className="text-[#94a3b8] text-sm">{image.date}</p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#0f1320]/80 backdrop-blur-sm rounded-full border border-[#00f5ff]/30 text-xs text-[#00f5ff] capitalize">
                    {image.category}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05060a]/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full animate-scale-up" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#00f5ff] transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative rounded-2xl overflow-hidden border-2 border-[#00f5ff]/30">
                <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#05060a] to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-[#cbd5e1]">{selectedImage.date}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery