import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MessageSquare, Wallet } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <section 
      id="final-cta" 
      className="relative py-28 sm:py-36 px-4 sm:px-6 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Intense subtle emerald central illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* NIDHI Icon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 mx-auto mb-8 shadow-2xl shadow-emerald-500/20"
        >
          <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
            <Wallet className="w-7 h-7 text-emerald-400" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          id="final-cta-heading"
          className="font-editorial text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-white leading-[1.05]"
        >
          Know before you spend.
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          id="final-cta-subtext"
          className="mt-6 text-lg sm:text-2xl text-neutral-300 font-normal leading-relaxed max-w-xl mx-auto"
        >
          Meet NIDHI — a simpler way to understand your money.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          id="final-cta-btn-group"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto px-4"
        >
          <motion.a
            href="https://nidhi-money.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-try-btn"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-nidhi-primary group w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-bold"
          >
            <span>Try NIDHI</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
          </motion.a>

          <motion.a
            href="https://nidhi-money.vercel.app/feedback"
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-feedback-btn"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-nidhi-secondary group w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold"
          >
            <MessageSquare className="w-4 h-4 text-emerald-300 group-hover:text-white transition-colors" />
            <span>Give Feedback</span>
          </motion.a>
        </motion.div>

        {/* Subtle Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          id="final-cta-subtle-line"
          className="mt-8 text-xs text-neutral-400 tracking-wide"
        >
          Built to help you understand your money. Built to keep improving.
        </motion.div>
      </div>
    </section>
  );
};
