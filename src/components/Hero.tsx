import React from 'react';
import { ArrowRight, Sparkles, Smartphone, ChevronDown, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onJoinMission: () => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinMission, onExploreDemo }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-neutral-900 text-white">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_zimbabwe_farm_1791564899572.jpg"
          alt="Lush agricultural farmland in rural Zimbabwe at golden sunrise"
          className="w-full h-full object-cover object-center filter brightness-[0.78]"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim to guarantee 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/92 via-neutral-950/75 to-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Subtle contextual badge (quiet text) */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 text-xs font-semibold mb-6 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>AgriTech & Climate Adaptation · Zimbabwe & SADC</span>
          </div>

          {/* Headline - strictly contained and balanced */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance mb-6">
            AI-Powered Farming Intelligence for Every Smallholder Farmer in Zimbabwe
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed font-normal mb-8 max-w-2xl">
            ZimSmart Grow uses AI to deliver hyper-local planting advice, disease diagnosis, and market access directly to farmers via the mobile phones they already own.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onJoinMission}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
            >
              <span>Join Our Mission</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreDemo}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-neutral-100 bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/20 rounded-lg transition-all backdrop-blur-xs cursor-pointer whitespace-nowrap"
            >
              <Smartphone className="w-5 h-5 text-amber-400" />
              <span>Experience Interactive Demo</span>
            </button>
          </div>

          {/* Value highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Works on 2G feature phones (USSD)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Shona & Ndebele language native</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>No internet required for core guidance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom scroll hint */}
      <div className="relative z-10 flex justify-center mt-8">
        <a
          href="#the-problem"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          aria-label="Scroll to learn more"
        >
          <span>Explore the Vision</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
