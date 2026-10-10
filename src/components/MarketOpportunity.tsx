import React from 'react';
import { Smartphone, ShieldCheck, Wallet, Flame, ArrowUpRight } from 'lucide-react';
import { MARKET_DATA } from '../data/agriData.ts';

export const MarketOpportunity: React.FC = () => {
  const driverIcons = [
    <Smartphone className="w-5 h-5 text-emerald-700" key="1" />,
    <ShieldCheck className="w-5 h-5 text-blue-700" key="2" />,
    <Wallet className="w-5 h-5 text-amber-600" key="3" />,
    <Flame className="w-5 h-5 text-red-600" key="4" />
  ];

  return (
    <section id="market" className="py-20 lg:py-28 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3">
            <span>Market Sizing & Scalability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            A US$15.8 Billion Opportunity by 2030
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Smallholder agriculture across Sub-Saharan Africa is transitioning from subsistence neglect into a massive digitizing economic engine. Zimbabwe is our high-conviction proving ground.
          </p>
        </div>

        {/* TAM SAM SOM Infographic */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* TAM */}
          <div className="p-8 rounded-2xl bg-neutral-900 text-white flex flex-col justify-between border border-neutral-800 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl" />
            <div>
              <div className="flex items-center justify-between text-xs font-bold tracking-widest text-emerald-400 uppercase mb-4">
                <span>Total Addressable Market</span>
                <span>Sub-Saharan Africa</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-display tabular-nums tracking-tight">
                {MARKET_DATA.tam.figure}
              </div>
              <div className="text-base font-semibold text-neutral-200 mt-2">
                Sub-Saharan African AgriTech Economy
              </div>
            </div>
            <p className="mt-6 pt-6 border-t border-neutral-800 text-xs text-neutral-400 leading-relaxed">
              {MARKET_DATA.tam.sub}
            </p>
          </div>

          {/* SAM */}
          <div className="p-8 rounded-2xl bg-emerald-900 text-white flex flex-col justify-between border border-emerald-800 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
            <div>
              <div className="flex items-center justify-between text-xs font-bold tracking-widest text-amber-300 uppercase mb-4">
                <span>Serviceable Addressable</span>
                <span>SADC Region</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-display tabular-nums tracking-tight">
                {MARKET_DATA.sam.figure}
              </div>
              <div className="text-base font-semibold text-neutral-200 mt-2">
                SADC Smallholder Ecosystems
              </div>
            </div>
            <p className="mt-6 pt-6 border-t border-emerald-800 text-xs text-emerald-200 leading-relaxed">
              {MARKET_DATA.sam.sub}
            </p>
          </div>

          {/* SOM */}
          <div className="p-8 rounded-2xl bg-white text-neutral-900 flex flex-col justify-between border-2 border-emerald-700 shadow-md relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between text-xs font-bold tracking-widest text-emerald-800 uppercase mb-4">
                <span>Serviceable Obtainable</span>
                <span>Immediate 5-Year Target</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-emerald-800 font-display tabular-nums tracking-tight">
                {MARKET_DATA.som.figure}
              </div>
              <div className="text-base font-semibold text-neutral-900 mt-2">
                Zimbabwe Nationwide Footprint
              </div>
            </div>
            <p className="mt-6 pt-6 border-t border-neutral-200 text-xs text-neutral-600 leading-relaxed">
              {MARKET_DATA.som.sub}
            </p>
          </div>
        </div>

        {/* Market Drivers Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-neutral-900">
              Structural Drivers Accelerating Adoption
            </h3>
            <span className="text-xs font-semibold text-neutral-500">
              Macro Trends · Section 6.4
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MARKET_DATA.drivers.map((driver, idx) => (
              <div
                key={driver.title}
                className="p-6 rounded-xl bg-neutral-50 border border-neutral-200/90 hover:border-emerald-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shadow-2xs mb-4">
                  {driverIcons[idx]}
                </div>
                <h4 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                  {driver.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {driver.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expansion Roadmap Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-neutral-100 border border-neutral-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white font-bold flex items-center justify-center font-display shrink-0">
              ZIM
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">
                Phase 1 Zimbabwe → Phase 2 SADC Expansion
              </div>
              <p className="text-xs text-neutral-600">
                Playbook engineered for rapid localization into Zambia, Mozambique, and Malawi with shared agro-ecological zones.
              </p>
            </div>
          </div>
          <a
            href="#advantage"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors uppercase tracking-wider shrink-0"
          >
            <span>Explore Competitive Moat</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
