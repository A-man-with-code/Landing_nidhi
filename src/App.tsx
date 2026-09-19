/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SafeToSpendSection } from './components/SafeToSpendSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ProductExperienceSection } from './components/ProductExperienceSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BuiltToEvolveSection } from './components/BuiltToEvolveSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-neutral-100 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden font-sans">
      {/* Liquid-glass fixed top navigation */}
      <Navigation />

      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: The Core Idea - Safe to Spend */}
        <SafeToSpendSection />

        {/* Section 3: Feature Highlights */}
        <FeaturesSection />

        {/* Section 4: Product Experience Gallery */}
        <ProductExperienceSection />

        {/* Section 5: How It Works */}
        <HowItWorksSection />

        {/* Section 6: Built to Evolve (Version 1 & Feedback) */}
        <BuiltToEvolveSection />

        {/* Section 7: Final CTA */}
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
