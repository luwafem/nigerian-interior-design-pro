// src/pages/Gallery.jsx
import { useState, useMemo } from 'react';
import SEO from '../components/seo/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, galleryCategories } from '../data/galleryData';
import GalleryCard from '../components/ui/GalleryCard';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') return galleryImages;
    return galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <SEO title="Visual Archive | adieva's interiors" description="Immersive gallery of luxury interiors." url="/gallery" />
      
      <div className="min-h-screen bg-white">
        {/* HERO — Quiet Entrance */}
        <header className="pt-40 pb-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#888] block mb-6">Inspiration Archive</span>
              <h1 className="font-serif text-5xl md:text-8xl italic mb-8">Atmosphere</h1>
              <p className="max-w-xl text-[#666] font-light leading-relaxed">
                A visual study of light, texture, and form within the Nigerian architectural landscape.
              </p>
            </motion.div>
          </div>
        </header>

        {/* FILTERS — Editorial Nav */}
        <div className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-md border-y border-[#EEE] py-6 px-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {['All', ...galleryCategories].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-[10px] uppercase tracking-[0.3em] transition-all ${
                    selectedCategory === category ? 'text-black font-bold' : 'text-[#999] hover:text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GALLERY GRID — Masonry-style Flow */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div 
              layout
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <GalleryCard 
                    key={image.id} 
                    image={image} 
                    index={index} 
                    onClick={setSelectedImage} 
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* MODAL — Immersive Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-white/95 backdrop-blur-sm p-4 md:p-12"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-8 top-8 z-[210] text-black text-xs uppercase tracking-widest hover:line-through"
              >
                Close (Esc)
              </button>
              
              <div className="grid lg:grid-cols-12 gap-12 w-full max-w-7xl items-center">
                {/* Large Image View */}
                <div className="lg:col-span-8 h-[60vh] lg:h-[80vh]">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
                
                {/* Meta Information */}
                <div className="lg:col-span-4 space-y-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#AAA] block mb-4">
                      {selectedImage.category}
                    </span>
                    <h2 className="font-serif text-4xl italic mb-6">
                      {selectedImage.project}
                    </h2>
                    <p className="text-[#555] font-light leading-loose text-sm">
                      {selectedImage.description}
                    </p>
                  </div>
                  
                  <div className="pt-8 border-t border-[#EEE]">
                    <div className="flex flex-wrap gap-3">
                      {selectedImage.tags.map(tag => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest text-[#999]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
};

export default Gallery;