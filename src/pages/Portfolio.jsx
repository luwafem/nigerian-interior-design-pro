// src/pages/Portfolio.jsx
import { useState, useMemo } from 'react';
import { portfolioItems } from '../data/portfolioData';
import ProjectCard from '../components/ui/ProjectCard'; // Ensure this matches the new aesthetic
import SEO from '../components/seo/SEO';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredProjects = useMemo(() => {
    return portfolioItems.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <SEO title="Archive | Selected Projects" description="A curation of interior spaces." url="/portfolio" />
      
      <div className="min-h-screen bg-white pt-32 pb-20 px-6">
        {/* Header — Minimalist & Centered */}
        <header className="container mx-auto max-w-4xl text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-[10px] uppercase tracking-[0.5em] text-[#888] mb-6 block"
          >
            Project Archive
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl italic leading-tight"
          >
            Selected Works
          </motion.h1>
        </header>

        {/* Filter Bar — Typographic & Borderless */}
        <div className="container mx-auto mb-16 border-b border-[#EEE] pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-[10px] uppercase tracking-[0.2em] transition-all hover:opacity-100 ${
                    selectedCategory === category ? 'opacity-100 font-bold' : 'opacity-40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>

            {/* Inline Search — Subtle Underline */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border-b border-[#DDD] py-2 text-sm focus:border-black outline-none transition-colors font-light placeholder:text-[#BBB]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Projects Grid — Breathable Spacing */}
        <div className="container mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div 
                layout
                className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="py-40 text-center"
              >
                <p className="font-serif italic text-2xl text-[#888]">No works found in this curation.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Portfolio;