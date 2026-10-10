import React, { useState } from 'react';
import { PhoneCall, MapPin, Calendar, Camera, TrendingUp, CheckCircle, Smartphone, Sparkles } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/agriData.ts';

interface HowItWorksProps {
  onOpenSimulator: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenSimulator }) => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <PhoneCall className="w-5 h-5" key="1" />,
    <MapPin className="w-5 h-5" key="2" />,
    <Calendar className="w-5 h-5" key="3" />,
    <Camera className="w-5 h-5" key="4" />,
    <TrendingUp className="w-5 h-5" key="5" />,
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-18 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">
              <span>The End-To-End Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              From Planting to Profit: The Farmer's Journey
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Designed from first principles for simplicity. A frictionless path that turns every smallholder's cellular phone into an on-demand agronomist and digital trading post.
            </p>
          </div>
          <button
            onClick={onOpenSimulator}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-800 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-xs shrink-0 cursor-pointer"
          >
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span>Launch Live Prototype Simulator</span>
          </button>
        </div>

        {/* 5-Step Horizontal Timeline */}
        <div className="relative">
          {/* Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-neutral-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {JOURNEY_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col p-6 rounded-2xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                      : 'bg-white/80 border-neutral-200 hover:border-neutral-300 hover:bg-white shadow-2xs'
                  }`}
                >
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest text-emerald-800 font-display">
                      STEP {step.step}
                    </span>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-emerald-800 text-white' : 'bg-neutral-100 text-neutral-700'
                    }`}>
                      {stepIcons[idx]}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-700 mb-3">
                    {step.action}
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  <div className="mt-auto pt-3 border-t border-neutral-100 flex items-center text-xs font-medium text-emerald-800">
                    <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                    <span>Validated in field trials</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real Farmer In-Context Story Card */}
        <div className="mt-12 rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="relative rounded-xl overflow-hidden aspect-4/3 shadow-xs">
                <img
                  src="/src/assets/images/farmer_mobile_tech_1791564911595.jpg"
                  alt="Farmer Tendai using mobile phone for agronomy alerts in rural Zimbabwe"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-xs text-[11px] font-medium text-white">
                  Goromonzi District, Mashonaland East
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Field Case Profile · Mr. Tendai Chifamba</span>
              </div>
              <blockquote className="text-base sm:text-lg font-medium text-neutral-900 italic leading-snug">
                "In previous seasons, when the armyworm invaded my 2 hectares of maize, I had to walk 14km to town or wait weeks for an extension officer. With ZimSmart Grow, I received an SMS alert before the outbreak peaked and used the WhatsApp camera diagnosis to identify the exact organic spray. My yield was up 35%."
              </blockquote>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-neutral-500 border-t border-neutral-100">
                <div>
                  <span className="font-semibold text-neutral-800">Crop:</span> White Maize (SC 719)
                </div>
                <div>
                  <span className="font-semibold text-neutral-800">Plot Size:</span> 2 Hectares
                </div>
                <div>
                  <span className="font-semibold text-neutral-800">Access Channel:</span> USSD (*384*55#) + WhatsApp
                </div>
                <div>
                  <span className="font-semibold text-emerald-700">Outcome:</span> +US$380 net household surplus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
