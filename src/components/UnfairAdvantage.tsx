import React from 'react';
import { Check, X, HelpCircle, Award, Quote } from 'lucide-react';
import { ADVANTAGE_COMPARISON } from '../data/agriData.ts';

export const UnfairAdvantage: React.FC = () => {
  return (
    <section id="advantage" className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3">
            <span>Defensibility & USPs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Why ZimSmart Grow Wins
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Most agricultural tech projects in developing nations collapse because they are designed in silicon towers for users with high-speed internet and high-end smartphones. We engineered from the soil up.
          </p>
        </div>

        {/* Feature Comparison Matrix Table */}
        <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-100 text-neutral-800 font-bold border-b border-neutral-200 text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6 min-w-[260px]">Strategic Dimension</th>
                  <th className="py-4 px-6 bg-emerald-50/80 text-emerald-950 font-black min-w-[220px]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                      <span>ZimSmart Grow</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-neutral-600 min-w-[220px]">Conventional Agri Apps</th>
                  <th className="py-4 px-6 text-neutral-600 min-w-[220px]">Status Quo (Middlemen & Agritex)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 font-normal">
                {ADVANTAGE_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-neutral-900">{row.feature}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{row.details}</div>
                    </td>
                    <td className="py-4 px-6 bg-emerald-50/40">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                        <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>Native & Integrated</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-red-700 text-xs">
                        <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span>Requires 4G & Smartphone</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-amber-700 text-xs">
                        <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                          <HelpCircle className="w-3.5 h-3.5" />
                        </div>
                        <span>1:5,000 ratio or unvetted traders</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Founder's Lived Experience Spotlight */}
        <div className="rounded-2xl bg-white border border-neutral-200/90 shadow-sm p-8 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Founder Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-600/30">
                  <img
                    src="/src/assets/images/founder_portrait_1791564945782.jpg"
                    alt="Tyno Chagaka - Founder & CEO of ZimSmart Grow"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-emerald-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Founder Led</span>
                </div>
              </div>
            </div>

            {/* Founder narrative */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800">
                <span>Our Unfair Advantage #1</span>
                <span className="text-neutral-300">·</span>
                <span className="text-amber-700">Lived Experience</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                "We aren't building for abstract users. We are building for our families and communities."
              </h3>

              <div className="relative">
                <Quote className="w-8 h-8 text-neutral-200 absolute -top-3 -left-3 -z-0" />
                <p className="relative z-10 text-sm sm:text-base text-neutral-700 leading-relaxed italic">
                  "Growing up in Zimbabwe, I watched my family and neighbors pour their life savings and labor into the soil, only to lose entire seasons because rainfall arrived two weeks late or an unknown pest wiped out the harvest before anyone could tell us what it was. Technology has solved this for corporate mega-farms abroad. ZimSmart Grow brings that same elite intelligence to the farmer with half a hectare and a basic 2G phone."
                </p>
              </div>

              <div className="pt-2">
                <div className="text-base font-bold text-neutral-900">
                  Tyno Chagaka
                </div>
                <div className="text-xs text-neutral-500">
                  Founder & CEO · Software Engineer & Agritech Innovator
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
