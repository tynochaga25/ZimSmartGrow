import React from 'react';
import { CloudRain, UserX, ShoppingBag, AlertTriangle } from 'lucide-react';
import { PROBLEM_STATS } from '../data/agriData.ts';

export const TheProblem: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    climate: <CloudRain className="w-6 h-6 text-amber-600" />,
    info: <UserX className="w-6 h-6 text-red-600" />,
    market: <ShoppingBag className="w-6 h-6 text-blue-600" />,
  };

  return (
    <section id="the-problem" className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest mb-3">
            <span>The Reality On The Ground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            The Cycle of Vulnerability
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Despite producing 70% of Zimbabwe's domestic food supply, smallholder farming families are trapped by compounding systemic obstacles that keep yields low and risks devastatingly high.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1: Emotional Image of farmer facing drought */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-300/80 bg-neutral-900 aspect-4/3 lg:aspect-auto lg:h-[480px]">
              <img
                src="/src/assets/images/drought_climate_challenge_1791564934765.jpg"
                alt="Smallholder farming family facing cracked dry soil during severe drought in rural Zimbabwe"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Field Note: Southern Africa El Niño Shocks</span>
                </div>
                <p className="text-sm text-neutral-200 italic leading-snug">
                  "Traditional planting calendars passed down through generations no longer predict when the rains will start or cease. Without data, each planting is an existential gamble."
                </p>
                <div className="mt-3 text-xs text-neutral-400">
                  Documented across Mashonaland, Masvingo & Matabeleland provinces
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Problem Points with clear icons & unboxed numbers */}
          <div className="lg:col-span-7 space-y-6">
            {PROBLEM_STATS.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-white border border-neutral-200/90 shadow-xs hover:border-emerald-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0">
                    {iconMap[item.id]}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-2xl font-black text-neutral-900 font-display tabular-nums">
                        {item.stat}
                      </span>
                      <h3 className="text-lg font-bold text-neutral-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="mt-2 text-xs font-medium text-neutral-500 italic">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Concluding Statement Box */}
            <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wide">
                    The Cost of Inaction
                  </h4>
                  <p className="mt-1 text-sm text-amber-900 font-medium">
                    Continued food insecurity, widening rural-urban inequality, and billions in lost economic potential across Zimbabwe's agricultural belt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
