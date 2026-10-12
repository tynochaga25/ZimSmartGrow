import React from 'react';
import { Linkedin, Mail, Sparkles, Briefcase, ArrowRight, Users } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/agriData.ts';

// Vacant positions to be filled — derived from Business Plan Sections 12.1 & 12.4
const OPEN_POSITIONS = [
  {
    id: 'junior-developer',
    role: 'Junior Developer',
    department: 'Engineering',
    priority: 'High Priority',
    type: 'Full-time · Harare / Remote',
    summary:
      'Build and deploy the multi-channel delivery layer (USSD/SMS/WhatsApp) and support the AI advisory engine pipeline. You will work directly with the founder on a production codebase serving real farmers.',
    requirements: [
      'Strong JavaScript / TypeScript fundamentals',
      'Familiarity with React, Node.js, or Python',
      'Bonus: experience with REST APIs, PostgreSQL, or TensorFlow',
    ],
  },
  {
    id: 'agronomist',
    role: 'Agronomist',
    department: 'Agricultural Science',
    priority: 'High Priority',
    type: 'Full-time · Mashonaland West',
    summary:
      'Own the agricultural intelligence behind every recommendation — from planting calendars and NPK schedules to pest outbreak thresholds. You translate agronomy into rules the AI engine can learn from.',
    requirements: [
      'BSc in Agronomy, Crop Science, or related field',
      'Field extension experience with smallholder farmers',
      'Fluency in Shona and/or Ndebele preferred',
    ],
  },
  {
    id: 'community-liaison',
    role: 'Community Liaison',
    department: 'Field Operations',
    priority: 'High Priority',
    type: 'Full-time · Mashonaland West',
    summary:
      'Be the bridge between ZimSmart Grow and the farmers we serve. Recruit pilot cohorts, run training sessions, gather feedback, and champion farmer trust in every ward you enter.',
    requirements: [
      'Background in rural development or community mobilisation',
      'Native fluency in local languages (Shona / Ndebele)',
      'Deep familiarity with smallholder farming communities',
    ],
  },
  {
    id: 'data-scientist',
    role: 'Data Scientist',
    department: 'AI & Machine Learning',
    priority: 'Month 6 · Medium',
    type: 'Full-time · Harare / Remote',
    summary:
      'Train, validate, and improve the computer vision models for crop disease diagnosis and the ML models for market price forecasting. Own model accuracy, bias, and field performance.',
    requirements: [
      'Strong Python, PyTorch or TensorFlow experience',
      'Experience with transfer learning and computer vision',
      'Bonus: background in agriculture, GIS, or satellite imagery',
    ],
  },
];

export const TeamSection: React.FC = () => {
  const founder = TEAM_MEMBERS[0];

  // Pre-filled mailto helper — routes all applications to the founder inbox
  const applyMailto = (role: string) =>
    `mailto:tynochagaka@gmail.com?subject=${encodeURIComponent(
      `Application: ${role} — ZimSmart Grow`
    )}&body=${encodeURIComponent(
      `Hello Tinotenda,\n\nI would like to apply for the ${role} role at ZimSmart Grow.\n\nFull name:\nLocation:\nRelevant experience:\nLinkedIn / Portfolio:\n\n[Attach CV below]\n`
    )}`;

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
            Founded and led by Tinotenda Chagaka. We are actively assembling a small, exceptional team across engineering, agronomy, and field operations — the kind of people who want to build infrastructure for the farmers the digital revolution left behind.
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

        {/* Open Positions — We're Hiring */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>We Are Hiring</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Open Positions — Core Leadership & Domain Specialists
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                These seats are open. If you want to build the platform that reshapes Zimbabwean agriculture, we want to hear from you.
              </p>
            </div>
            <div className="shrink-0 inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>{OPEN_POSITIONS.length} roles open</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPEN_POSITIONS.map((position) => (
              <div
                key={position.id}
                className="group relative bg-white rounded-2xl border-2 border-dashed border-neutral-300 hover:border-emerald-500 p-6 flex flex-col justify-between transition-all shadow-2xs hover:shadow-md"
              >
                {/* Vacant badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-200 rounded-full px-2 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Vacant
                  </span>
                </div>

                <div>
                  {/* Header with placeholder avatar */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-neutral-100 border-2 border-dashed border-neutral-300 flex items-center justify-center shrink-0 text-neutral-400 group-hover:text-emerald-600 group-hover:border-emerald-400 transition-colors">
                      <Briefcase className="w-7 h-7" />
                    </div>
                    <div className="pr-16">
                      <h4 className="text-base font-bold text-neutral-900 leading-tight">
                        {position.role}
                      </h4>
                      <div className="text-xs font-semibold text-emerald-800 mt-0.5">
                        {position.department}
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5 leading-tight">
                        {position.type}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                    {position.summary}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {position.requirements.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-2 text-[11px] text-neutral-600 leading-snug"
                      >
                        <span className="mt-1 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with priority + Apply CTA */}
                <div className="mt-5 pt-4 border-t border-neutral-100">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-500">
                      {position.priority}
                    </span>
                    <a
                      href={applyMailto(position.role)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg px-3.5 py-2 transition-colors shadow-xs"
                    >
                      <span>Apply to Join the Team</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General application fallback */}
          <div className="mt-8 bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                Don't see the right role yet?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl">
                We are always looking for exceptional agronomists, engineers, data scientists, and field operators. Send us a general application and tell us how you want to contribute.
              </p>
            </div>
            <a
              href={applyMailto('General Application')}
              className="inline-flex items-center justify-center gap-2 text-sm font-bold text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-100 rounded-lg px-4 py-2.5 transition-colors shrink-0"
            >
              <Mail className="w-4 h-4" />
              <span>Send General Application</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};