// src/components/ui/ProjectCard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      viewport={{ once: true }}
      className="group w-full"
    >
      <Link to={`/portfolio/${project.slug}`} className="block overflow-hidden">
        {/* Image - Editorial Crop */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5F5F5]">
          <img
            src={project.featuredImage}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Subtle Floating Label (Visible on hover) */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
             <span className="text-[10px] uppercase tracking-[0.3em] text-white bg-black/20 backdrop-blur-sm px-4 py-2">
               View Case Study
             </span>
          </div>
        </div>

        {/* Content - Typographic & Deconstructed */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between items-baseline">
            <h3 className="font-serif text-xl md:text-2xl italic tracking-tight">
              {project.title}
            </h3>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#AAA]">
              {project.year}
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-[#888]">
            <span>{project.category}</span>
            <span className="h-px w-8 bg-[#EEE]" />
            <span className="truncate">{project.location}</span>
          </div>

          {/* Minimal Description - Limited to one line for rhythm */}
          <p className="pt-2 text-sm text-[#666] font-light line-clamp-1 leading-relaxed opacity-0 transform translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;