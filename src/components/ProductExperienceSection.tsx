import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Receipt, 
  Target, 
  Sliders, 
  Lock, 
  ShieldCheck, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { NidhiScreenMockup } from './NidhiScreenMockups';

type ScreenKey = 'dashboard' | 'safe-to-spend' | 'transactions' | 'savings-goals' | 'settings' | 'login';

interface ScreenTab {
  id: ScreenKey;
  label: string;
  icon: React.ElementType;
  tag: string;
  caption: string;
}

const SCREENS: ScreenTab[] = [
  {
    id: 'safe-to-spend',
    label: 'Safe to Spend',
    icon: ShieldCheck,
    tag: 'Core Differentiator',
    caption: 'Dynamic calculations after factoring planned commitments, monthly goals, and emergency cushion.'
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    tag: 'At-a-Glance',
    caption: 'High-level financial confidence gauge, cycle pacing, net worth tracking, and recent activity.'
  },
  {
    id: 'transactions',
    label: 'Transactions',
    icon: Receipt,
    tag: 'Smart Spending',
    caption: 'Automatic categorization distinguishing essential commitments from everyday discretionary expenses.'
  },
  {
    id: 'savings-goals',
    label: 'Savings Goals',
    icon: Target,
    tag: 'Goal Safeguard',
    caption: 'Set multi-month ambitions and watch NIDHI shield those funds from unintentional spending.'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Sliders,
    tag: 'Custom Controls',
    caption: 'Align cycles with your payday schedule and configure your preferred safety margins.'
  },
  {
    id: 'login',
    label: 'Login',
    icon: Lock,
    tag: 'Private & Secure',
    caption: 'Direct, distraction-free access secured with modern client protection.'
  }
];

export const ProductExperienceSection: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>('safe-to-spend');
  const activeData = SCREENS.find((s) => s.id === activeScreen) || SCREENS[0];

  const handlePrev = () => {
    const currentIndex = SCREENS.findIndex((s) => s.id === activeScreen);
    const nextIndex = (currentIndex - 1 + SCREENS.length) % SCREENS.length;
    setActiveScreen(SCREENS[nextIndex].id);
  };

  const handleNext = () => {
    const currentIndex = SCREENS.findIndex((s) => s.id === activeScreen);
    const nextIndex = (currentIndex + 1) % SCREENS.length;
    setActiveScreen(SCREENS[nextIndex].id);
  };

  return (
    <section 
      id="product-gallery" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Soft emerald backdrop illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            id="product-exp-label"
            className="inline-block px-3 py-1 rounded-full liquid-glass border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4"
          >
            PRODUCT EXPERIENCE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="product-exp-heading"
            className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08]"
          >
            Built around your financial picture.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="product-exp-desc"
            className="mt-4 text-base text-neutral-400 max-w-xl mx-auto"
          >
            Explore the core views designed to give you clarity and confidence over every rupee.
          </motion.p>
        </div>

        {/* Desktop Screen Switcher Tabs */}
        <div className="hidden md:flex items-center justify-center flex-wrap gap-2 mb-10">
          {SCREENS.map((screen) => {
            const Icon = screen.icon;
            const isActive = activeScreen === screen.id;
            return (
              <button
                key={screen.id}
                type="button"
                id={`tab-screen-${screen.id}`}
                onClick={() => setActiveScreen(screen.id)}
                className={`liquid-glass relative flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-500/25 text-white font-semibold border border-emerald-400/50 shadow-lg shadow-emerald-500/20'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10 border border-white/15'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-300' : 'text-neutral-400'}`} />
                <span>{screen.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-emerald-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Spotlight Card */}
        <div className="relative max-w-3xl mx-auto">
          {/* Controls on desktop */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center space-x-2 text-xs">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium text-[11px]">
                {activeData.tag}
              </span>
              <span className="text-neutral-400 font-medium">{activeData.label}</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handlePrev}
                id="gallery-prev-btn"
                aria-label="Previous screen"
                className="w-8 h-8 rounded-full liquid-glass border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                id="gallery-next-btn"
                aria-label="Next screen"
                className="w-8 h-8 rounded-full liquid-glass border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Liquid Glass Showcase Container */}
          <div className="liquid-glass rounded-3xl p-3 sm:p-5 border border-white/15 shadow-2xl bg-neutral-950/80 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <NidhiScreenMockup screenId={activeScreen} />
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <p className="line-clamp-1">{activeData.caption}</p>
              <span className="text-[11px] text-emerald-400 font-medium shrink-0 ml-4">
                View in NIDHI App →
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Swipeable Gallery Cards */}
        <div className="mt-12 md:hidden">
          <div className="text-xs font-semibold text-neutral-400 tracking-wider uppercase mb-3 px-1">
            All 6 Core Interfaces (Swipe to browse)
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory hide-scrollbar">
            {SCREENS.map((s) => (
              <div 
                key={s.id} 
                className="w-[85vw] max-w-[320px] shrink-0 snap-center liquid-glass rounded-2xl p-3 border border-white/10 bg-neutral-950/80"
              >
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-white">{s.label}</span>
                  <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {s.tag}
                  </span>
                </div>
                <div className="overflow-hidden rounded-xl border border-white/5 text-[10px]">
                  <NidhiScreenMockup screenId={s.id} />
                </div>
                <p className="text-[11px] text-neutral-400 mt-2.5 leading-snug">
                  {s.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Collage Grid for Large Screens */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/5">
          <div 
            onClick={() => setActiveScreen('dashboard')} 
            className="cursor-pointer group liquid-glass rounded-2xl p-4 border border-white/5 hover:border-emerald-500/30 transition-all"
          >
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
              <span className="font-medium text-white group-hover:text-emerald-300 transition-colors">1. Main Dashboard</span>
              <span className="text-[10px] text-neutral-500">Overview</span>
            </div>
            <div className="scale-[0.85] origin-top-left -mr-[17%] -mb-[15%] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <NidhiScreenMockup screenId="dashboard" />
            </div>
          </div>

          <div 
            onClick={() => setActiveScreen('transactions')} 
            className="cursor-pointer group liquid-glass rounded-2xl p-4 border border-white/5 hover:border-emerald-500/30 transition-all"
          >
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
              <span className="font-medium text-white group-hover:text-emerald-300 transition-colors">2. Spending Log</span>
              <span className="text-[10px] text-neutral-500">Tracking</span>
            </div>
            <div className="scale-[0.85] origin-top-left -mr-[17%] -mb-[15%] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <NidhiScreenMockup screenId="transactions" />
            </div>
          </div>

          <div 
            onClick={() => setActiveScreen('savings-goals')} 
            className="cursor-pointer group liquid-glass rounded-2xl p-4 border border-white/5 hover:border-emerald-500/30 transition-all"
          >
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
              <span className="font-medium text-white group-hover:text-emerald-300 transition-colors">3. Savings Goals</span>
              <span className="text-[10px] text-neutral-500">Protection</span>
            </div>
            <div className="scale-[0.85] origin-top-left -mr-[17%] -mb-[15%] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <NidhiScreenMockup screenId="savings-goals" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
