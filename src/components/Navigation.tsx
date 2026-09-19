import React, { useState, useEffect } from 'react';
import { Wallet, ArrowUpRight, MessageSquare, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pb-2 transition-all duration-300">
      <div 
        id="navbar-container"
        className={`max-w-6xl mx-auto rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between border border-white/10 ${
          isScrolled ? 'bg-black/60 shadow-xl shadow-black/50' : 'bg-black/30'
        }`}
      >
        {/* Left: NIDHI Logo & Mark */}
        <a 
          href="#" 
          id="nav-logo"
          className="flex items-center space-x-2.5 group cursor-pointer select-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
              <Wallet className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex items-baseline space-x-1.5">
            <span className="font-bold tracking-widest text-lg text-white">NIDHI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium text-neutral-300">
          <a 
            href="#safe-to-spend" 
            id="nav-link-safe-spend"
            className="hover:text-emerald-300 transition-colors tracking-wide"
          >
            Safe to Spend
          </a>
          <a 
            href="#features" 
            id="nav-link-features"
            className="hover:text-emerald-300 transition-colors tracking-wide"
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            id="nav-link-how-it-works"
            className="hover:text-emerald-300 transition-colors tracking-wide"
          >
            How It Works
          </a>
          <a 
            href="#product-gallery" 
            id="nav-link-preview"
            className="hover:text-emerald-300 transition-colors tracking-wide"
          >
            Product Tour
          </a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          <a
            href="https://nidhi-money.vercel.app/feedback"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-feedback-link"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-500/30 transition-all duration-200"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Feedback</span>
          </a>

          <a
            href="https://nidhi-money.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-try-nidhi-btn"
            className="btn-nidhi-primary btn-nidhi-nav-primary group"
          >
            <span>Try NIDHI</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu-drawer"
            className="md:hidden max-w-sm mx-auto mt-2 rounded-2xl liquid-glass bg-black/90 p-4 border border-white/10 shadow-2xl space-y-3 text-sm"
          >
            <a
              href="#safe-to-spend"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-white/5 text-neutral-300 hover:text-white"
            >
              Safe to Spend
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-white/5 text-neutral-300 hover:text-white"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-white/5 text-neutral-300 hover:text-white"
            >
              How It Works
            </a>
            <a
              href="#product-gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-white/5 text-neutral-300 hover:text-white"
            >
              Product Experience
            </a>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="https://nidhi-money.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-nav-try-btn"
                className="btn-nidhi-primary w-full py-2.5 text-xs font-bold"
              >
                <span>Try NIDHI</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
              <a
                href="https://nidhi-money.vercel.app/feedback"
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-nav-feedback-btn"
                className="btn-nidhi-secondary w-full py-2.5 text-xs font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Give Feedback</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
