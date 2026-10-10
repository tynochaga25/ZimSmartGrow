import React from 'react';
import { HERO_METRICS } from '../data/agriData.ts';

export const StatsBanner: React.FC = () => {
  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-xl border border-neutral-200/80 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-neutral-100">
          {HERO_METRICS.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index > 0 ? 'pt-5 lg:pt-0 lg:pl-8' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-800 tracking-tight font-display tabular-nums">
                {metric.value}
              </div>
              <div className="text-sm sm:text-base font-semibold text-neutral-900 mt-1.5">
                {metric.label}
              </div>
              <p className="text-xs text-neutral-500 mt-1 leading-normal">
                {metric.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
