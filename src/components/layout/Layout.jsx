// src/components/layout/Layout.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../../data/siteData';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF9F6] text-[#1A1A1A]">
      
      {/* HEADER */}
      <header 
        className={`fixed top-0 z-[120] w-full transition-all duration-700 ${
          isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/5' : 'bg-transparent py-10'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="relative z-[130]" onClick={() => setIsMenuOpen(false)}>
            <span className={`font-serif text-2xl tracking-tighter transition-colors duration-500 ${
              !isScrolled && !isMenuOpen && location.pathname === '/' ? 'text-white' : 'text-black'
            }`}>
              {siteData.company.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-12 md:flex">
            {siteData.navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-[10px] uppercase tracking-[0.3em] transition-opacity hover:opacity-50 ${
                  !isScrolled && location.pathname === '/' ? 'text-white' : 'text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* MOBILE TOGGLE (X MORPH) */}
          <button
            aria-label="Toggle Menu"
            className="relative z-[130] h-8 w-8 flex flex-col items-center justify-center md:hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`h-[1px] w-full bg-current transition-all duration-500 transform ${
                isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
              } ${!isScrolled && !isMenuOpen && location.pathname === '/' ? 'text-white' : 'text-black'}`} />
              
              <span className={`h-[1px] w-full bg-current transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              } ${!isScrolled && !isMenuOpen && location.pathname === '/' ? 'text-white' : 'text-black'}`} />
              
              <span className={`h-[1px] w-full bg-current transition-all duration-500 transform ${
                isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''
              } ${!isScrolled && !isMenuOpen && location.pathname === '/' ? 'text-white' : 'text-black'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-white flex flex-col px-6 pt-32"
          >
            <nav className="flex flex-col space-y-6">
              {siteData.navigation.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}>
                  <Link to={item.href} className="font-serif text-5xl italic tracking-tighter hover:text-gray-400 transition-colors">
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pb-12">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4">Inquiries</p>
              <a href={`mailto:${siteData.company.email}`} className="text-lg font-light underline underline-offset-4">{siteData.company.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">{children}</main>

      {/* FOOTER — Editorial Restored */}
      <footer className="bg-white border-t border-black/5 pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            
            {/* Branding Column */}
            <div className="md:col-span-5">
              <h3 className="font-serif text-4xl italic mb-8">{siteData.company.name}</h3>
              <p className="max-w-sm text-[#666] font-light leading-relaxed text-sm">
                {siteData.company.description}
              </p>
            </div>

            {/* Nav Column */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#999] mb-8">Studio</h4>
              <ul className="space-y-4">
                {siteData.navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-xs uppercase tracking-widest hover:opacity-50 transition">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-3">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#999] mb-8">Contact</h4>
              <address className="not-italic text-sm text-[#666] leading-loose font-light">
                {siteData.company.email}<br />
                {siteData.company.phone}<br />
                <span className="mt-4 block opacity-60 italic">{siteData.company.address}</span>
              </address>
            </div>

            {/* Social Column */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#999] mb-8">Follow</h4>
              <div className="flex flex-col space-y-4">
                {Object.entries(siteData.company.social).map(([platform, url]) => (
                  <a key={platform} href={url} className="text-xs uppercase tracking-widest hover:opacity-50 transition">
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/[0.03]">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#AAA] mb-4 md:mb-0">
              © {new Date().getFullYear()} {siteData.company.name}. All Rights Reserved.
            </p>
            <div className="flex space-x-12">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#AAA]">Lagos, Nigeria</span>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[9px] uppercase tracking-[0.3em] text-black hover:opacity-50 transition cursor-pointer">
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;