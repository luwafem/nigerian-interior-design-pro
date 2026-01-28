// src/pages/Services.jsx
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';

const Services = () => {
  const services = [
    {
      id: "residential",
      title: "Residential Design",
      subtitle: "The Private Sanctuary",
      description: "Transforming domestic spaces into bespoke retreats that harmonize personality with architectural intent.",
      features: ["Space Programming", "Custom Joinery", "Textile Curation", "Lighting Scenarios"],
      process: ["Consultation", "Concept", "Execution", "Styling"]
    },
    {
      id: "commercial",
      title: "Commercial Design",
      subtitle: "The Brand Environment",
      description: "Elevating corporate identity through spatial psychology and functional aesthetics.",
      features: ["Acoustic Design", "Wayfinding", "Ergonomic Planning", "Brand Integration"],
      process: ["Assessment", "Programming", "Development", "Management"]
    }
  ];

  return (
    <>
      <SEO title="Services | adieva's interiors" description="Premium interior design solutions." url="/services" />
      
      <div className="min-h-screen bg-white pt-32 pb-20">
        {/* HERO */}
        <header className="container mx-auto px-6 mb-32">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#888] block mb-6">Expertise</span>
            <h1 className="font-serif text-6xl md:text-8xl italic leading-none mb-10">Capabilities</h1>
            <p className="max-w-xl text-[#666] font-light leading-relaxed text-lg">
              From initial structural analysis to the final placement of art, we offer a comprehensive design journey.
            </p>
          </motion.div>
        </header>

        {/* SERVICE SECTIONS */}
        <section className="container mx-auto px-6">
          {services.map((service, index) => (
            <div key={service.id} className="grid lg:grid-cols-12 gap-12 border-t border-[#EEE] py-24">
              {/* Info */}
              <div className="lg:col-span-5">
                <span className="text-[9px] uppercase tracking-widest text-[#AAA] mb-4 block">0{index + 1} // {service.id}</span>
                <h2 className="font-serif text-4xl mb-6 italic">{service.title}</h2>
                <p className="text-[#555] font-light leading-loose mb-10">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-y-4">
                  {service.features.map(f => (
                    <span key={f} className="text-[10px] uppercase tracking-wider text-[#1A1A1A] flex items-center gap-3">
                      <span className="h-px w-4 bg-black/20" /> {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Process Visualization */}
              <div className="lg:col-start-8 lg:col-span-5 flex flex-col justify-center">
                <div className="relative pl-8 border-l border-black/5 space-y-12">
                  {service.process.map((step, idx) => (
                    <div key={step} className="relative">
                      <div className="absolute -left-[36.5px] top-1 h-4 w-4 rounded-full bg-[#FAF9F6] border border-black/10 flex items-center justify-center">
                        <div className="h-1 w-1 bg-black rounded-full" />
                      </div>
                      <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1">{step}</h4>
                      <p className="text-xs text-[#888] font-light">Precision and detail oriented phase.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* SERVICE PACKAGES (The "Menu") */}
        <section className="bg-white py-32 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl italic mb-4">Service Tiers</h2>
              <div className="h-px w-20 bg-black/10 mx-auto" />
            </div>

            <div className="space-y-12">
              {[
                { name: "Essential", price: "₦500k+", note: "Conceptual Direction" },
                { name: "Premium", price: "₦1.5m+", note: "Complete Management" },
                { name: "Luxury", price: "Custom", note: "Bespoke & Global Sourcing" }
              ].map((tier) => (
                <div key={tier.name} className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-[#F0F0F0] pb-6 group cursor-default">
                  <div className="flex items-baseline gap-6">
                    <h3 className="font-serif text-3xl transition-all group-hover:italic group-hover:translate-x-2 duration-500">{tier.name}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-[#AAA]">{tier.note}</span>
                  </div>
                  <span className="font-light text-xl text-[#333] mt-2 md:mt-0">{tier.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-24 text-center">
              <p className="text-[#888] font-light text-sm mb-10 italic">Looking for a tailored partnership?</p>
              <button className="text-[11px] uppercase tracking-[0.4em] border border-black px-12 py-5 hover:bg-black hover:text-white transition-all duration-500">
                Inquire Project
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;