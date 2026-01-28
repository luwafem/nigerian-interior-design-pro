// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import SEO from '../components/seo/SEO';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/galleryData';

const reveal = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.19, 1, 0.22, 1] },
  viewport: { once: true }
};

const Home = () => {
  const featuredGallery = galleryImages.slice(0, 4);

  return (
    <>
      <SEO title={siteData.seo.title} description={siteData.seo.description} url="/" />

      <div className="bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#D4D4D4]">
        
        {/* HERO — Immersive Full-Screen */}
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0"
              alt="Minimalist Interior"
              className="h-full w-full object-cover opacity-80"
            />
            {/* Subtle Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="max-w-3xl text-white"
            >
              <span className="block text-xs uppercase tracking-[0.4em] mb-8 opacity-70">
                Interior Architecture
              </span>
              <h1 className="font-serif text-6xl md:text-9xl leading-none mb-12 italic">
                {siteData.company.name}
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed max-w-md mb-12 opacity-90">
                {siteData.company.tagline}
              </p>
              <Link 
                to="/portfolio" 
                className="group relative inline-flex items-center text-sm uppercase tracking-widest overflow-hidden"
              >
                <span className="relative z-10">View Works</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-white transform scale-x-100 group-hover:scale-x-0 transition-transform duration-500 origin-left" />
              </Link>
            </motion.div>
          </div>

          {/* Minimalist Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 rotate-90 mb-4">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </section>

        {/* CAPABILITIES — Grid Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-xs uppercase tracking-[0.4em] text-[#888]">Capabilities</h2>
              </div>
              <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-20">
                {siteData.services.map((service) => (
                  <motion.div key={service.id} {...reveal}>
                    <h3 className="text-xl mb-4 font-medium">{service.title}</h3>
                    <p className="text-[#666] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY — Asymmetric Layout */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-20">
              <h2 className="text-4xl font-serif italic">Selected Works</h2>
              <Link to="/gallery" className="text-xs uppercase tracking-widest border-b border-black hover:opacity-50 transition">
                All Projects
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredGallery.map((image, i) => (
                <motion.div 
                  key={image.id} 
                  {...reveal} 
                  transition={{ delay: i * 0.1 }}
                  className="overflow-hidden bg-[#F5F5F5]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/5] md:aspect-[3/2] w-full object-cover grayscale hover:grayscale-0 transform hover:scale-105 transition-all duration-[1.5s] ease-out"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-32  text-center bg-white">
          <motion.div {...reveal} className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-serif mb-16 italic text-[#1A1A1A]">Let's begin.</h2>
            <Link
              to="/contact"
              className="inline-block border border-black px-16 py-6 text-xs uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700"
            >
              Inquire
            </Link>
          </motion.div>
        </section>


      </div>
    </>
  );
};

export default Home;