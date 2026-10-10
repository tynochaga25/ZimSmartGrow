import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (interest?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Problem', href: '#the-problem' },
    { label: 'Our Solution', href: '#our-solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Market', href: '#market' },
    { label: 'Advantage', href: '#advantage' },
    { label: 'Impact', href: '#impact' },
    { label: 'Team', href: '#team' },
    { label: 'The Ask', href: '#the-ask' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-xs border-b border-neutral-200/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with clean Leaf & Data Node Icon */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-neutral-900 group whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-800 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-700 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12c0 2.5 1 4.78 2.64 6.47L12 12V2z"
                  fill="#4ADE80"
                />
                <path
                  d="M12 12l7.36 6.47C21 16.78 22 14.5 22 12c0-5.52-4.48-10-10-10v10z"
                  fill="#FBBF24"
                />
                <circle cx="12" cy="12" r="3" fill="#1E40AF" />
                <circle cx="18" cy="7" r="1.5" fill="#FFFFFF" />
                <path d="M12 12l6-5" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-900 font-display">
              ZimSmart <span className="text-emerald-700">Grow</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (single line, subtle hover) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenContact('Investment')}
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 active:bg-emerald-950 transition-all shadow-xs hover:shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Invest in Our Vision</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-2 mt-2 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-neutral-800 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('Investment');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors shadow-xs"
            >
              <span>Invest in Our Vision</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
