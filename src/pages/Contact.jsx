// src/pages/Contact.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/seo/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', projectType: 'Residential', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactDetails = [
    { label: "Studio", value: "Lagos Design District, VI" },
    { label: "General", value: "hello@adievasinteriors.com" },
    { label: "Phone", value: "+234 800 ADIEVA" }
  ];

  return (
    <>
      <SEO title="Inquiry | adieva's interiors" description="Start your project with adieva's interiors." />
      
      <div className="min-h-screen bg-white pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            
            {/* LEFT: Information & Social */}
            <div className="lg:col-span-4 space-y-16">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#888] block mb-6">Connect</span>
                <h1 className="font-serif text-5xl italic leading-none mb-10 text-[#1a1a1a]">Start a <br /> Conversation</h1>
                <p className="text-[#666] font-light leading-relaxed">
                  Every project begins with a simple dialogue. Tell us about your vision, and let’s define the space together.
                </p>
              </motion.div>

              <div className="space-y-8">
                {contactDetails.map((item) => (
                  <div key={item.label} className="group cursor-default">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#AAA] mb-1">{item.label}</p>
                    <p className="font-light text-lg text-[#333] group-hover:italic transition-all duration-300">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-black/5">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#AAA] mb-6">Follow the Process</p>
                <div className="flex gap-8 text-[11px] uppercase tracking-widest font-medium">
                  <a href="#" className="hover:italic transition-all">Instagram</a>
                  <a href="#" className="hover:italic transition-all">Pinterest</a>
                  <a href="#" className="hover:italic transition-all">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* RIGHT: The Inquiry Form */}
            <div className="lg:col-span-8 bg-white p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)]">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-12"
                  >
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="relative group">
                        <input 
                          type="text" required placeholder="Name"
                          className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-black transition-colors placeholder:text-transparent peer"
                        />
                        <label className="absolute left-0 top-4 text-[10px] uppercase tracking-widest text-[#AAA] pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-black">Full Name</label>
                      </div>

                      <div className="relative group">
                        <input 
                          type="email" required placeholder="Email"
                          className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-black transition-colors placeholder:text-transparent peer"
                        />
                        <label className="absolute left-0 top-4 text-[10px] uppercase tracking-widest text-[#AAA] pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-black">Email Address</label>
                      </div>
                    </div>

                    <div className="relative group">
                      <select className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-black transition-colors appearance-none">
                        <option>Residential Project</option>
                        <option>Commercial Project</option>
                        <option>Hospitality Project</option>
                        <option>Other</option>
                      </select>
                      <label className="absolute -top-4 left-0 text-[10px] uppercase tracking-widest text-black">Project Type</label>
                    </div>

                    <div className="relative group">
                      <textarea 
                        rows="4" required placeholder="Message"
                        className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-black transition-colors placeholder:text-transparent peer resize-none"
                      />
                      <label className="absolute left-0 top-4 text-[10px] uppercase tracking-widest text-[#AAA] pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-black">Project Details</label>
                    </div>

                    <button className="text-[11px] uppercase tracking-[0.4em] bg-black text-white px-12 py-5 hover:bg-[#333] transition-all duration-500 w-full md:w-auto">
                      Submit Inquiry
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col justify-center items-center text-center py-20"
                  >
                    <h2 className="font-serif text-3xl italic mb-4">Received with thanks.</h2>
                    <p className="text-[#666] font-light max-w-xs">Our studio director will review your inquiry and reach out within 48 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* MINIMALIST FAQ */}
      <section className="bg-white py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl italic mb-16 text-center">Inquiry FAQ</h2>
          <div className="space-y-0">
            {[
              { q: "Typical project duration?", a: "Residential transformations usually span 12-16 weeks." },
              { q: "Do you design internationally?", a: "Yes, we handle remote consultations and global project management." },
              { q: "Design fees?", a: "Custom quoted based on scope; typically a fixed management fee." }
            ].map((faq, i) => (
              <details key={i} className="group border-t border-black/5 last:border-b">
                <summary className="list-none py-8 flex justify-between items-center cursor-pointer group-hover:bg-white/50 transition-colors px-4">
                  <span className="text-xs font-bold uppercase tracking-widest">{faq.q}</span>
                  <span className="text-xl font-light group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-4 pb-8 text-[#666] font-light leading-loose text-sm italic">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;