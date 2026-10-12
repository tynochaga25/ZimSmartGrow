import React, { useState } from 'react';
import { DollarSign, Cpu, Sparkles, Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { THE_ASK_DATA } from '../data/agriData.ts';

interface TheAskSectionProps {
  initialInterest?: string;
}

export const TheAskSection: React.FC<TheAskSectionProps> = ({ initialInterest = 'Investment' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: initialInterest,
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const pillarIcons: Record<string, React.ReactNode> = {
    Coins: <DollarSign className="w-6 h-6 text-emerald-700" />,
    Cpu: <Cpu className="w-6 h-6 text-blue-700" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-600" />
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and a message.');
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate instant responsive submission feedback
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <section id="the-ask" className="py-20 lg:py-28 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3">
            <span>Investment & Strategic Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Help Us Grow a Better Future
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            We are raising catalytic capital and securing ecosystem partners to complete our 7-month launch, finalize telco integrations, and onboard our first 25,000 smallholders.
          </p>
        </div>

        {/* The Core Ask Highlight Box */}
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950 border border-emerald-600/40 text-emerald-300 text-xs font-semibold">
                <span>Phase 1 Seed & Grant Ask</span>
              </div>
              <div className="text-5xl sm:text-6xl font-black text-white font-display tabular-nums tracking-tight">
                {THE_ASK_DATA.amount}
              </div>
              <div className="text-base font-semibold text-emerald-400">
                {THE_ASK_DATA.timeline}
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2">
                {THE_ASK_DATA.purpose}
              </p>
            </div>

            {/* Budget Allocation Breakdown */}
            <div className="lg:col-span-7 bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 backdrop-blur-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
                Use of Funds Allocation
              </div>
              <div className="space-y-4">
                {THE_ASK_DATA.breakdown.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-200 font-medium">{item.category}</span>
                      <span className="text-emerald-400 font-bold tabular-nums">
                        {item.pct} ({item.amount})
                      </span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: item.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Partnership Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {THE_ASK_DATA.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between hover:border-emerald-300 transition-colors shadow-2xs"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-5 shadow-2xs">
                  {pillarIcons[pillar.icon]}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1">
                  {pillar.title}
                </h3>
                <div className="text-xs font-semibold text-emerald-800 mb-3">
                  {pillar.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/70">
                <button
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      interest: pillar.title.includes('Funding') ? 'Investment' : pillar.title.includes('Technical') ? 'Partnership' : 'Mentorship'
                    }));
                    const el = document.getElementById('contact-form-block');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors uppercase tracking-wider cursor-pointer"
                >
                  Join as {pillar.title.split(' ')[0]} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Inbound Submission Form */}
        <div id="contact-form-block" className="rounded-3xl border border-neutral-200/90 bg-white p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left instructions & direct info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  Get In Touch Directly
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Let's Discuss Synergies
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Whether you are an impact investor, foundation grant officer, agronomist, or distribution partner, we want to hear from you.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-neutral-100 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-neutral-500 block">Founder Email</span>
                    <a
                      href="mailto:tynochagaka@gmail.com"
                      className="font-semibold text-neutral-900 hover:text-emerald-700 transition-colors"
                    >
                      tynochagaka@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-neutral-500 block">Phone / WhatsApp</span>
                    <span className="font-semibold text-neutral-900">
                      +263780660853 / Direct Inquiries
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-neutral-500 block">Headquarters</span>
                    <span className="font-semibold text-neutral-900">
                      Harare, Zimbabwe
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7">
              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">
                    Thank You for Reaching Out
                  </h4>
                  <p className="text-sm text-emerald-900 max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong className="font-semibold">{formData.interest}</strong> has been received. Founder Tyno Chagaka will respond directly to {formData.email} within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        interest: 'Investment',
                        message: ''
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-lg bg-emerald-800 text-white font-semibold text-xs hover:bg-emerald-900 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.org"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Organization / Fund
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. MassChallenge / Acumen"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Interest Track *
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 bg-white"
                      >
                        <option value="Investment">Impact Investment ($112k Launch)</option>
                        <option value="Grant">Grant / Challenge Award</option>
                        <option value="Partnership">Technical / Telco / Off-Take Partner</option>
                        <option value="Mentorship">Advisory / Mentorship</option>
                        <option value="Media">Media / Research</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Message / Partnership Proposal *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your background, collaboration ideas, or grant timeline..."
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-emerald-800 text-white font-semibold text-sm hover:bg-emerald-900 active:bg-emerald-950 transition-colors shadow-xs cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
