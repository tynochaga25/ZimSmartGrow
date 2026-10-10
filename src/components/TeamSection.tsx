import React from 'react';
import { Linkedin, Mail, ExternalLink, Award, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/agriData.ts';

export const TeamSection: React.FC = () => {
  const founder = TEAM_MEMBERS[0];
  const leadership = TEAM_MEMBERS.slice(1);

  return (
    <section id="team" className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3">
            <span>Leadership & Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            The Team Behind the Mission
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            A potent combination of software engineering, frontline agricultural extension, edge machine learning, and commercial grain commodity trading.
          </p>
        </div>

        {/* Featured Founder Card */}
        <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-sm p-8 sm:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Clean circular profile picture */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-emerald-600 shadow-md">
                  <img
                    src={founder.image || "/src/assets/images/founder_portrait_1791564945782.jpg"}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-1 right-2 w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>
              </div>

              <h3 className="text-2xl font-black text-neutral-900 mt-4">
                {founder.name}
              </h3>
              <div className="text-sm font-bold text-emerald-800">
                {founder.role}
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                {founder.credentials}
              </div>

              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-neutral-100 text-neutral-600 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:tynochagaka@gmail.com"
                  className="p-2 rounded-full bg-neutral-100 text-neutral-600 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                  aria-label="Direct email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 text-xs font-semibold">
                <span>Executive Bio · Section 12.2</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                Building technology anchored in deep lived experience and uncompromising technical rigor.
              </h4>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {founder.bio}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-neutral-100 text-xs">
                <div>
                  <span className="font-bold text-neutral-900">Key Domain Focus:</span>
                  <p className="text-neutral-600 mt-0.5">Edge AI architectures, low-bandwidth USSD telco gateways & rural smallholder engagement.</p>
                </div>
                <div>
                  <span className="font-bold text-neutral-900">Mission Conviction:</span>
                  <p className="text-neutral-600 mt-0.5">Ensuring no Zimbabwean farmer loses a harvest to preventable information gaps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Team Roster (Circular profile cards) */}
        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-6">
            Core Leadership & Domain Specialists
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((member, idx) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between hover:border-emerald-300 transition-colors shadow-2xs"
              >
                <div>
                  {/* Clean circular avatar with role-specific tone */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-900 font-bold text-lg flex items-center justify-center shrink-0 border-2 border-emerald-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-neutral-900 leading-tight">
                        {member.name}
                      </h4>
                      <div className="text-xs font-semibold text-emerald-800 mt-0.5">
                        {member.role}
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5 leading-tight">
                        {member.credentials}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                  <span>Zimbabwe Operations</span>
                  <span className="text-emerald-700 font-semibold">Core Leadership</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
