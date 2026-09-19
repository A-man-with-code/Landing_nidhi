import React from 'react';
import { ArrowUpRight, MessageSquare, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { NidhiScreenMockup } from './NidhiScreenMockups';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 overflow-hidden bg-black"
    >
      {/* Cinematic Ambient Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep emerald ambient center glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-emerald-500/10 rounded-full blur-[140px]" />
        
        {/* Subtle teal secondary accent */}
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-teal-500/8 rounded-full blur-[120px]" />

        {/* Minimal grid lines background */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Soft dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          id="hero-eyebrow"
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full liquid-glass border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>PERSONAL FINANCE, SIMPLIFIED</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          id="hero-heading"
          className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[88px] font-normal tracking-tight text-white leading-[1.06] sm:leading-[1.04] max-w-4xl"
        >
          Know what you can{' '}
          <span className="italic font-normal bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-200 bg-clip-text text-transparent underline decoration-emerald-500/40 decoration-1 underline-offset-8">
            safely spend.
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          id="hero-subtext"
          className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl px-2"
        >
          NIDHI helps you understand your money, plan your spending, track your goals, and make more confident spending decisions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          id="hero-cta-group"
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          {/* Primary CTA */}
          <motion.a
            href="https://nidhi-money.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-primary-cta"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-nidhi-primary group w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-bold"
          >
            <span>Try NIDHI</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="https://nidhi-money.vercel.app/feedback"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-secondary-cta"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-nidhi-secondary group w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold"
          >
            <MessageSquare className="w-4 h-4 text-emerald-300 group-hover:text-white transition-colors" />
            <span>Give Feedback</span>
          </motion.a>
        </motion.div>

        {/* Version 1 Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          id="hero-version-note"
          className="mt-4 sm:mt-5 text-xs text-neutral-400 tracking-wide flex items-center justify-center space-x-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
          <span>Version 1 is live — and the next version will be shaped by real user feedback.</span>
        </motion.div>

        {/* Floating Product Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          id="hero-product-preview-card"
          className="mt-12 sm:mt-16 w-full max-w-xl mx-auto"
        >
          <div className="relative group">
            {/* Ambient edge glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-emerald-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            
            <div className="relative liquid-glass rounded-2xl p-1.5 sm:p-2 border border-white/15 shadow-2xl bg-neutral-950/80">
              <NidhiScreenMockup screenId="safe-to-spend" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
