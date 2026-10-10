import React, { useState } from 'react';
import { Cpu, Smartphone, Handshake, Check, ChevronRight } from 'lucide-react';
import { SOLUTION_TIERS } from '../data/agriData.ts';

export const OurSolution: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number>(0);

  const icons = [
    <Cpu className="w-7 h-7 text-emerald-700" key="tier1" />,
    <Smartphone className="w-7 h-7 text-amber-600" key="tier2" />,
    <Handshake className="w-7 h-7 text-blue-700" key="tier3" />
  ];

  return (
    <section id="our-solution" className="py-20 lg:py-28 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">
            <span>Our Proprietary Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            An Integrated Ecosystem for Agricultural Success
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Unlike fragmented apps that fail in rural connectivity deserts, ZimSmart Grow merges artificial intelligence with universal telecommunication rails and guaranteed off-taker contracts.
          </p>
        </div>

        {/* 3-Column Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTION_TIERS.map((tier, idx) => {
            const isSelected = activeTier === idx;
            return (
              <div
                key={tier.tier}
                onClick={() => setActiveTier(idx)}
                className={`relative flex flex-col rounded-2xl p-7 transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-neutral-50/70 border-emerald-600 shadow-md ring-1 ring-emerald-600/20'
                    : 'bg-white border-neutral-200/90 hover:border-neutral-300 hover:shadow-xs'
                }`}
              >
                {/* Header of card */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-white shadow-xs' : 'bg-neutral-100'
                  }`}>
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    {tier.tier}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-1">
                  {tier.name}
                </h3>
                <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-4">
                  {tier.subtitle}
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Highlight banner */}
                <div className="py-2 px-3 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold mb-6 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{tier.highlight}</span>
                </div>

                {/* Interactive expandable details */}
                <div className="mt-auto pt-4 border-t border-neutral-200/60">
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                    Core Capabilities
                  </div>
                  <ul className="space-y-2.5">
                    {tier.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Synergy Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Closed-Loop AgriTech Value Chain
            </div>
            <h4 className="text-xl font-bold text-white">
              Why an integrated ecosystem creates enduring economic moat
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              When farmers receive better planting intelligence, their yields surge. When yields surge, our market linkage delivers immediate off-takers. Each harvest generates verified agronomy data that further optimizes the AI advisory engine.
            </p>
          </div>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-100 transition-colors shrink-0"
          >
            <span>See The 5-Step Journey</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
