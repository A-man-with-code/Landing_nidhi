import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowUpRight, Sparkles, HeartHandshake } from 'lucide-react';

export const BuiltToEvolveSection: React.FC = () => {
  return (
    <section 
      id="built-to-evolve" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          id="evolve-label"
          className="inline-block px-3 py-1 rounded-full liquid-glass border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4"
        >
          VERSION 1
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          id="evolve-heading"
          className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08]"
        >
          NIDHI is not the final version.
        </motion.h2>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          id="evolve-body"
          className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto"
        >
          This is the first public version of NIDHI. The product will continue to evolve through real-world use, feedback, improvements, and new ideas.
        </motion.p>

        {/* Liquid Glass Feedback Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          id="evolve-feedback-card"
          className="mt-12 sm:mt-16 liquid-glass rounded-3xl p-8 sm:p-12 border border-white/10 bg-neutral-950/60 shadow-2xl relative text-left"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
                Your feedback shapes what&apos;s next.
              </h3>

              <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
                Try NIDHI, explore it, and tell us what works, what feels confusing, what should change, and what you want to see in the next version.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <motion.a
                href="https://nidhi-money.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                id="evolve-try-nidhi-btn"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-nidhi-primary group px-6 py-3 text-sm font-bold w-full sm:w-auto"
              >
                <span>Try NIDHI</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
              </motion.a>

              <motion.a
                href="https://nidhi-money.vercel.app/feedback"
                target="_blank"
                rel="noopener noreferrer"
                id="evolve-give-feedback-btn"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-nidhi-secondary group px-6 py-3 text-sm font-semibold w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300 group-hover:text-white transition-colors" />
                <span>Give Feedback</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
