import React from 'react';
import { Target, HeartHandshake, ShieldCheck, TrendingUp, Globe2, Leaf } from 'lucide-react';
import { IMPACT_KPIS, SDG_GOALS } from '../data/agriData.ts';

export const ImpactSDGs: React.FC = () => {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3">
            <span>Measurable Impact Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            More Than a Platform. A Movement for Change.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Every line of code and every USSD query translates into kilograms of harvested food, stable household incomes for rural women and youth, and resilient African ecosystems.
          </p>
        </div>

        {/* Quantified Impact KPIs Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-18">
          {IMPACT_KPIS.map((kpi, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-800 font-display tabular-nums tracking-tight">
                {kpi.value}
              </div>
              <div className="mt-2 text-base font-bold text-neutral-900">
                {kpi.label}
              </div>
              <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
                {kpi.detail}
              </p>
            </div>
          ))}
        </div>

        {/* UN Sustainable Development Goals (Section 14.2) */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Direct Alignment with UN Sustainable Development Goals
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Audited impact metrics aligned with international development standards
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SDG_GOALS.map((sdg) => (
              <div
                key={sdg.id}
                className="p-6 rounded-2xl border border-neutral-200/90 bg-white hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md text-white font-mono"
                      style={{ backgroundColor: sdg.color }}
                    >
                      SDG {sdg.id}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      United Nations 2030
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">
                    {sdg.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {sdg.target}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                  <span>Tracked via Platform Telemetry</span>
                  <span className="text-emerald-700 font-semibold">Active Objective</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gender & Youth Inclusion Sub-card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Inclusion Priority · Section 14.3
            </div>
            <h4 className="text-lg font-bold text-emerald-950">
              Women & Youth Smallholder Empowerment
            </h4>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
              Over 60% of rural farm laborers in Zimbabwe are women, yet they face the highest barriers to physical extension services. ZimSmart Grow is specifically designed to dismantle these informational barriers, targeting 50%+ female user enrollment in year one.
            </p>
          </div>
          <div className="shrink-0 text-center px-6 py-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
            <div className="text-2xl font-black text-emerald-800 font-display tabular-nums">50%+</div>
            <div className="text-xs font-semibold text-neutral-700">Target Female Smallholders</div>
          </div>
        </div>
      </div>
    </section>
  );
};
