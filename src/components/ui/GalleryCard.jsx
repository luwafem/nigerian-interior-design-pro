// src/components/ui/GalleryCard.jsx
import { motion } from 'framer-motion';

const GalleryCard = ({ image, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.05, 
        ease: [0.19, 1, 0.22, 1] 
      }}
      className="group relative cursor-crosshair overflow-hidden bg-[#F5F5F5]"
      onClick={() => onClick(image)}
    >
      {/* Image Container */}
      <div className="aspect-[4/5] md:aspect-square overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Minimalist Overlay — Only visible on hover */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#1A1A1A] mb-2 block font-medium">
            {image.category}
          </span>
          <h3 className="font-serif italic text-lg text-black leading-tight border-b border-black/10 pb-2">
            {image.project}
          </h3>
          <p className="mt-2 text-[11px] text-[#444] font-light tracking-wide uppercase">
            View Image
          </p>
        </div>
      </div>

      {/* Subtle Corner Detail instead of 🔍 */}
      <div className="absolute top-4 right-4 overflow-hidden h-4 w-4">
        <div className="w-full h-px bg-black/20 absolute top-1/2 -translate-y-1/2 transform translate-x-4 transition-transform duration-500 group-hover:translate-x-0" />
        <div className="h-full w-px bg-black/20 absolute left-1/2 -translate-x-1/2 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0" />
      </div>
    </motion.div>
  );
};

export default GalleryCard;