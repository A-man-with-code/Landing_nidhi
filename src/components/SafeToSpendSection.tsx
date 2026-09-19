import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, CheckCircle2, TrendingUp, Calendar, AlertCircle } from 'lucide-react';
import { NidhiScreenMockup } from './NidhiScreenMockups';

export const SafeToSpendSection: React.FC = () => {
  return (
    <section 
      id="safe-to-spend" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Subtle radial emerald glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            id="safe-spend-label"
            className="inline-block px-3 py-1 rounded-full liquid-glass border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4"
          >
            THE CORE IDEA
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="safe-spend-heading"
            className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08]"
          >
            Know before you spend.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="safe-spend-copy"
            className="mt-5 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Your balance doesn&apos;t always tell the whole story. NIDHI helps you understand what is actually safe to spend after considering planned spending, savings goals, and your emergency fund.
          </motion.p>
        </div>

        {/* Large liquid-glass product showcase card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          id="safe-spend-showcase-card"
          className="liquid-glass rounded-3xl p-6 sm:p-10 border border-white/10 bg-neutral-950/70 shadow-2xl relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Explanatory Breakdown of the 5 Core Metrics */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-medium border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>The Safe to Spend Formula</span>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-400">1. Available Balance</span>
                    <span className="font-semibold text-white">₹28,500</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Raw checking balance before upcoming obligations.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-colors">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-400">2. Planned Spending</span>
                    <span className="font-semibold text-amber-300">-₹9,250</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Committed rent, essential utility bills, and scheduled subscriptions.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 transition-colors">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-400">3. Savings Goals & Emergency Fund</span>
                    <span className="font-semibold text-teal-300">-₹6,800</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Automatic monthly savings allocations safely ringfenced.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 shadow-inner">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-emerald-300 font-semibold uppercase tracking-wider">Safe to Spend Result</span>
                    <span className="font-bold text-xl font-editorial text-white italic">₹12,450</span>
                  </div>
                  <div className="text-xs text-emerald-200/80 flex items-center justify-between pt-2 border-t border-emerald-500/20">
                    <span>Safe Daily Spend:</span>
                    <span className="font-bold text-emerald-300">₹415/day</span>
                  </div>
                </div>
              </div>

              {/* Explanatory Statement Callout */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-neutral-300 leading-relaxed italic">
                &ldquo;Instead of only showing you what you have, NIDHI helps you understand what you can safely use.&rdquo;
              </div>
            </div>

            {/* Right Col: High-Fidelity Safe to Spend Screen Showcase */}
            <div className="lg:col-span-7">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <NidhiScreenMockup screenId="safe-to-spend" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar at Bottom of Card */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-[11px] text-neutral-400">Safe to Spend</div>
              <div className="text-lg font-bold text-white font-editorial italic mt-0.5">₹12,450</div>
            </div>
            <div>
              <div className="text-[11px] text-neutral-400">Available Balance</div>
              <div className="text-lg font-bold text-neutral-200 mt-0.5">₹28,500</div>
            </div>
            <div>
              <div className="text-[11px] text-neutral-400">Safe Daily Spend</div>
              <div className="text-lg font-bold text-emerald-400 mt-0.5">₹415/day</div>
            </div>
            <div>
              <div className="text-[11px] text-neutral-400">Financial Confidence</div>
              <div className="text-lg font-bold text-teal-300 mt-0.5">78% • High Confidence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
