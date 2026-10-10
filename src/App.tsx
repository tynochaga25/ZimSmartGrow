/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { StatsBanner } from './components/StatsBanner.tsx';
import { TheProblem } from './components/TheProblem.tsx';
import { OurSolution } from './components/OurSolution.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { FarmerSimulator } from './components/FarmerSimulator.tsx';
import { MarketOpportunity } from './components/MarketOpportunity.tsx';
import { UnfairAdvantage } from './components/UnfairAdvantage.tsx';
import { ImpactSDGs } from './components/ImpactSDGs.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { TheAskSection } from './components/TheAskSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [simulatorModalOpen, setSimulatorModalOpen] = useState(false);
  const [contactInitialInterest, setContactInitialInterest] = useState('Investment');

  const handleOpenContact = (interest: string = 'Investment') => {
    setContactInitialInterest(interest);
    const element = document.getElementById('contact-form-block');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      const askSection = document.getElementById('the-ask');
      askSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinMission = () => {
    handleOpenContact('Investment');
  };

  const handleExploreDemo = () => {
    const demoSection = document.getElementById('interactive-prototype-anchor');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSimulatorModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top sticky navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onJoinMission={handleJoinMission}
          onExploreDemo={handleExploreDemo}
        />

        {/* Key Metrics Banner directly below hero */}
        <StatsBanner />

        {/* 2. The Problem Section */}
        <TheProblem />

        {/* 3. Our Solution Section */}
        <OurSolution />

        {/* 4. How It Works Section */}
        <HowItWorks onOpenSimulator={() => setSimulatorModalOpen(true)} />

        {/* Interactive Prototype Section (Inline Sandbox for Investors & Judges) */}
        <section id="interactive-prototype-anchor" className="py-16 bg-neutral-100/70 border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
                <span>Interactive Product Sandbox</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                Experience the Core Platform Right Now
              </h3>
              <p className="text-sm text-neutral-600 mt-2">
                Try the offline USSD interface for feature phones, test the WhatsApp AI Crop Doctor, or view real-time grain off-take matching.
              </p>
            </div>

            <FarmerSimulator isOpen={true} isInline={true} />
          </div>
        </section>

        {/* 5. The Opportunity / Market Section */}
        <MarketOpportunity />

        {/* 6. Our Unfair Advantage Section */}
        <UnfairAdvantage />

        {/* 7. Impact & SDGs Section */}
        <ImpactSDGs />

        {/* 8. Team Section */}
        <TeamSection />

        {/* 9. The Ask / Get Involved Section */}
        <TheAskSection initialInterest={contactInitialInterest} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Optional Modal Prototype (when triggered from other buttons) */}
      <FarmerSimulator
        isOpen={simulatorModalOpen}
        onClose={() => setSimulatorModalOpen(false)}
        isInline={false}
      />
    </div>
  );
}
