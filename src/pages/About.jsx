// src/pages/About.jsx
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';

const About = () => {
  const team = [
    {
      name: "Amina Okafor",
      role: "Principal Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Chike Nwosu",
      role: "Project Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Fatima Adebayo",
      role: "Lead Architect",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      <SEO title="Our Ethos | matches luxury" description="The story of matches luxury." url="/about" />
      
      <div className="min-h-screen bg-white">
        {/* EDITORIAL HERO */}
        <header className="pt-40 pb-24 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <motion.span 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-[10px] uppercase tracking-[0.5em] text-[#888] block mb-8"
                >
                  Our Ethos
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="font-serif text-6xl md:text-9xl italic leading-none"
                >
                  Authentic <br /> Form
                </motion.h1>
              </div>
              <div className="lg:col-span-5">
                <p className="text-lg text-[#555] font-light leading-relaxed border-l border-black/10 pl-8">
                  Founded in 2010, matches luxury was born from a desire to reconcile the rich textures of West African heritage with the precision of global modernism.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* IMAGE BREAK */}
        <section className="px-6 mb-32">
          <div className="container mx-auto h-[70vh] overflow-hidden bg-[#EEE]">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2070&q=80"
              className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </section>

        {/* MISSION & VALUES — The Manifesto */}
        <section className="container mx-auto px-6 py-24 border-t border-black/5">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black mb-8">Philosophy</h2>
              <p className="font-serif text-2xl italic leading-snug">
                "We do not just design rooms; we curate the atmosphere of your life."
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-12">
              {[
                { t: "Cultural Integrity", d: "A respectful dialogue between Nigerian craft and modern structure." },
                { t: "Sustainable Form", d: "Prioritizing local materials that age with grace and longevity." },
                { t: "Human Centric", d: "Spaces engineered for the choreography of daily movement." },
                { t: "Meticulous Craft", d: "Uncompromising attention to the hidden joinery and silent details." }
              ].map((v) => (
                <div key={v.t} className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest">{v.t}</h3>
                  <p className="text-sm text-[#666] font-light leading-loose">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM — Editorial Portraits */}
        <section className="bg-white py-32 px-6">
          <div className="container mx-auto">
            <div className="mb-20">
              <h2 className="font-serif text-4xl italic">The Studio</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-1">
              {team.map((member) => (
                <div key={member.name} className="group relative aspect-[3/4] overflow-hidden bg-[#F5F5F5]">
                  <img 
                    src={member.image} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <h3 className="text-white font-serif text-2xl italic mb-1">{member.name}</h3>
                    <p className="text-white/70 text-[10px] uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS — Minimalist Counters */}
        <section className="py-32 px-6">
          <div className="container mx-auto border-y border-black/5 py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { n: "100+", l: "Projects" },
                { n: "12", l: "Years" },
                { n: "15", l: "Awards" },
                { n: "03", l: "Cities" }
              ].map(s => (
                <div key={s.l} className="text-center lg:text-left">
                  <span className="block font-serif text-5xl italic mb-2">{s.n}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#AAA]">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;