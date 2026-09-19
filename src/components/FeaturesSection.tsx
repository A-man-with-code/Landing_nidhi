import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Calendar, 
  Target, 
  PiggyBank, 
  ArrowUpRight 
} from 'lucide-react';
import { FeatureItem } from '../types';

const FEATURES: FeatureItem[] = [
  {
    id: 'safe-to-spend',
    title: 'Safe to Spend',
    description: 'Understand what you can actually spend after accounting for planned spending, savings goals, and emergency reserves.',
    iconName: 'ShieldCheck',
    badge: 'Core Feature'
  },
  {
    id: 'financial-confidence',
    title: 'Financial Confidence',
    description: 'Get a simple high-level view of your financial planning and progress.',
    iconName: 'Sparkles'
  },
  {
    id: 'smart-spending',
    title: 'Smart Spending Overview',
    description: 'Track transactions and understand where your money is going.',
    iconName: 'TrendingUp'
  },
  {
    id: 'planned-spending',
    title: 'Planned Spending',
    description: 'Keep upcoming spending, budgets, and recurring bills visible before they affect your available money.',
    iconName: 'Calendar'
  },
  {
    id: 'savings-goals',
    title: 'Savings Goals',
    description: 'Create goals and track your progress toward them.',
    iconName: 'Target'
  },
  {
    id: 'emergency-fund',
    title: 'Emergency Fund',
    description: 'Track your emergency fund separately and understand how it affects your available money.',
    iconName: 'PiggyBank'
  }
];

const renderIcon = (name: string) => {
  const iconProps = { className: 'w-5 h-5 text-emerald-400' };
  switch (name) {
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
    case 'Sparkles':
      return <Sparkles {...iconProps} />;
    case 'TrendingUp':
      return <TrendingUp {...iconProps} />;
    case 'Calendar':
      return <Calendar {...iconProps} />;
    case 'Target':
      return <Target {...iconProps} />;
    case 'PiggyBank':
      return <PiggyBank {...iconProps} />;
    default:
      return <ShieldCheck {...iconProps} />;
  }
};

export const FeaturesSection: React.FC = () => {
  return (
    <section 
      id="features" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            id="features-label"
            className="inline-block px-3 py-1 rounded-full liquid-glass border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4"
          >
            WHAT NIDHI DOES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="features-heading"
            className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08]"
          >
            Everything you need to understand your money.
          </motion.h2>
        </div>

        {/* 6 Feature Cards Grid with Liquid Glass styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              id={`feature-card-${feature.id}`}
              className="liquid-glass rounded-2xl p-6 sm:p-7 border border-white/10 bg-neutral-950/40 hover:border-emerald-500/30 hover:bg-neutral-900/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                    {renderIcon(feature.iconName)}
                  </div>
                  {feature.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-sm text-neutral-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                <span className="text-[11px] font-medium tracking-wide">Included in NIDHI v1</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
