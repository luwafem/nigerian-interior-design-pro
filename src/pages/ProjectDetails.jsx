// src/pages/ProjectDetails.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';
import SEO from '../components/seo/SEO';
import SocialShare from '../components/seo/SocialShare';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = portfolioItems.find(p => p.slug === slug);
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return <div className="h-screen flex items-center justify-center font-serif italic text-2xl">Project not found</div>;

  const tabs = [
    { id: 'overview', label: 'The Narrative' },
    { id: 'specifications', label: 'Details' },
    { id: 'materials', label: 'Materials' },
    { id: 'gallery', label: 'Visuals' }
  ].filter(t => t.id !== 'specifications' || project.specifications);

  return (
    <>
      <SEO title={`${project.title} | matches luxury`} description={project.description} image={project.featuredImage} />

      <article className="bg-white text-[#1A1A1A]">
        {/* EDITORIAL HERO */}
        <section className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <img src={project.featuredImage} alt={project.title} className="h-full w-full object-cover grayscale-[0.2]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
          </motion.div>

          <div className="container relative z-10 mx-auto px-6 pb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/70 mb-4 block">
                {project.category} — {project.location}
              </span>
              <h1 className="font-serif text-6xl md:text-[8rem] leading-[0.85] text-white italic mb-8 max-w-5xl">
                {project.title}
              </h1>
              <div className="flex items-center gap-12 text-white/50 text-[10px] uppercase tracking-widest">
                <div>Year: <span className="text-white ml-2">{project.year}</span></div>
                <div>Status: <span className="text-white ml-2">Completed</span></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTENT NAVIGATION */}
        <nav className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-black/5">
          <div className="container mx-auto px-6">
            <div className="flex gap-8 md:gap-16">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative py-8 text-[10px] uppercase tracking-[0.3em] transition-opacity ${
                    activeTab === tab.id ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-px bg-black" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* MAIN BODY */}
        <main className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-20">
            
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  {activeTab === 'overview' && (
                    <div className="max-w-2xl">
                      <h2 className="text-xs uppercase tracking-[0.4em] text-[#888] mb-12">The Brief</h2>
                      <p className="font-serif text-3xl md:text-4xl italic leading-snug mb-12">
                        "{project.fullDescription || project.description}"
                      </p>
                      {project.features && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-black/5">
                          {project.features.map((f, i) => (
                            <div key={i} className="flex gap-4">
                              <span className="text-[10px] text-[#AAA]">0{i+1}</span>
                              <span className="text-sm font-light leading-relaxed">{f}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'specifications' && project.specifications && (
                    <div className="space-y-16">
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                          <div>
                            <span className="block text-[10px] uppercase tracking-widest text-[#AAA] mb-2">Area</span>
                            <span className="text-2xl font-serif italic">{project.specifications.totalArea}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] uppercase tracking-widest text-[#AAA] mb-2">Level</span>
                            <span className="text-2xl font-serif italic">{project.specifications.floorCount}</span>
                          </div>
                       </div>
                       {/* Table-less Room Breakdown */}
                       <div className="space-y-8">
                          {project.specifications.rooms?.map((room, i) => (
                            <div key={i} className="group border-b border-black/5 pb-8">
                              <div className="flex justify-between items-end mb-4">
                                <h3 className="text-2xl font-serif italic">{room.name}</h3>
                                <span className="text-[10px] text-[#888]">{room.area}</span>
                              </div>
                              <div className="flex flex-wrap gap-x-8 gap-y-2">
                                {room.items.map((item, ii) => (
                                  <span key={ii} className="text-[11px] uppercase tracking-tighter text-[#666]">
                                    {item.name} <span className="text-[#CCC] ml-1">/</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                       </div>
                    </div>
                  )}

                  {activeTab === 'gallery' && (
                    <div className="grid grid-cols-1 gap-12">
                      {project.gallery?.map((img, i) => (
                        <div key={i} className="group overflow-hidden">
                          <img src={img.url} alt={img.alt} className="w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                          <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#AAA]">{img.room || 'Interior View'}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* MINIMALIST SIDEBAR */}
            <aside className="lg:col-span-4 space-y-20">
              <div className="pt-20 lg:sticky lg:top-40">
                <div className="space-y-12">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#AAA] mb-6">Social</h4>
                    <SocialShare url={window.location.href} title={project.title} />
                  </div>
                  
                  <div className="bg-white p-8 border border-black/5">
                    <p className="text-sm font-light mb-8 italic">Interested in achieving a similar aesthetic for your space?</p>
                    <Link to="/contact" className="block text-center border border-black py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">
                      Start Consultation
                    </Link>
                  </div>

                  {project.relatedProjects && (
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#AAA] mb-6">Related Works</h4>
                      <div className="space-y-6">
                        {portfolioItems.filter(p => project.relatedProjects.includes(p.slug)).map(rel => (
                          <Link key={rel.id} to={`/portfolio/${rel.slug}`} className="group flex items-center gap-4">
                            <div className="w-16 h-16 overflow-hidden">
                              <img src={rel.featuredImage} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                            </div>
                            <span className="text-[11px] uppercase tracking-widest border-b border-transparent group-hover:border-black transition-all">{rel.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </main>

        {/* BOTTOM NAVIGATION */}
        <section className="py-32 border-t border-black/5">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Link to="/portfolio" className="text-[10px] uppercase tracking-[0.4em] text-[#888] hover:text-black">
              ← Back to Portfolio
            </Link>
            <div className="h-px w-24 bg-black/10 hidden md:block" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#AAA]">matches luxury © 2026</span>
          </div>
        </section>
      </article>
    </>
  );
};

export default ProjectDetails;