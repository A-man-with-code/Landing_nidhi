import React from 'react';
import { motion } from 'motion/react';
import { StepItem } from '../types';
import { Wallet, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

const STEPS: (StepItem & { icon: React.ElementType })[] = [
  {
    number: '01',
    title: 'Connect with your money',
    description: 'Create your NIDHI account and start organizing your financial picture.',
    icon: Wallet
  },
  {
    number: '02',
    title: 'Plan before you spend',
    description: 'Track spending, goals, planned commitments, and your emergency fund.',
    icon: Calendar
  },
  {
    number: '03',
    title: 'Know what is safe to spend',
    description: "Use NIDHI's Safe to Spend view to make more informed spending decisions.",
    icon: ShieldCheck
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section 
      id="how-it-works" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            id="how-it-works-label"
            className="inline-block px-3 py-1 rounded-full liquid-glass border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4"
          >
            HOW IT WORKS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="how-it-works-heading"
            className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08]"
          >
            Simple by design.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="how-it-works-subtext"
            className="mt-4 text-base text-neutral-400 max-w-xl mx-auto"
          >
            No complex accounting spreadsheets. Just three natural steps to total spending clarity.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                id={`step-card-${step.number}`}
                className="liquid-glass rounded-3xl p-7 sm:p-8 border border-white/10 bg-neutral-950/50 relative group flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300"
              >
                <div>
                  {/* Large Editorial Number */}
                  <div className="flex items-baseline justify-between mb-8">
                    <span className="font-editorial text-5xl sm:text-6xl font-normal text-emerald-400/80 group-hover:text-emerald-300 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-medium text-emerald-400/80 flex items-center space-x-1.5">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
