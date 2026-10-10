import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800">
          {/* Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-700 flex items-center justify-center text-white shadow-xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 2.5 1 4.78 2.64 6.47L12 12V2z" fill="#4ADE80" />
                  <path d="M12 12l7.36 6.47C21 16.78 22 14.5 22 12c0-5.52-4.48-10-10-10v10z" fill="#FBBF24" />
                  <circle cx="12" cy="12" r="3" fill="#1E40AF" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                ZimSmart <span className="text-emerald-400">Grow</span>
              </span>
            </div>

            <p className="text-base font-medium text-neutral-200 italic leading-relaxed max-w-sm">
              "Turning data into food on the table, and food into hope for the future."
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Empowering smallholder farmers in Zimbabwe through artificial intelligence, accessible multi-channel delivery, and transparent market linkages.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Platform Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#the-problem" className="text-neutral-400 hover:text-white transition-colors">
                  The Problem (Cycle of Vulnerability)
                </a>
              </li>
              <li>
                <a href="#our-solution" className="text-neutral-400 hover:text-white transition-colors">
                  Our Solution (3-Tier Ecosystem)
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-neutral-400 hover:text-white transition-colors">
                  How It Works (Farmer Journey)
                </a>
              </li>
              <li>
                <a href="#market" className="text-neutral-400 hover:text-white transition-colors">
                  Market Opportunity ($15.8B TAM)
                </a>
              </li>
              <li>
                <a href="#advantage" className="text-neutral-400 hover:text-white transition-colors">
                  Unfair Advantage & Founder Moat
                </a>
              </li>
              <li>
                <a href="#impact" className="text-neutral-400 hover:text-white transition-colors">
                  SDG Impact & Quantified KPIs
                </a>
              </li>
              <li>
                <a href="#team" className="text-neutral-400 hover:text-white transition-colors">
                  Leadership Team & Agronomists
                </a>
              </li>
              <li>
                <a href="#the-ask" className="text-neutral-400 hover:text-white transition-colors">
                  The Ask ($112k Launch Round)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Presence
            </div>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:tynochagaka@gmail.com" className="hover:text-white transition-colors">
                  tynochagaka@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+263 77 000 0000 (Harare, Zimbabwe)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Harare & Goromonzi Agronomy Hub, Zimbabwe</span>
              </div>
            </div>

            <div className="pt-3">
              <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Connect
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 ZimSmart Grow. All Rights Reserved. Empowering smallholder agriculture in Zimbabwe.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
