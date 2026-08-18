import React from 'react';
import { ArrowRight, BookOpen, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenEnquiry: () => void;
  onOpenComparison: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenEnquiry,
  onOpenComparison,
}) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#169BA2]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E70BF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-semibold">
          <Sparkles className="w-4 h-4 text-teal-400" />
          <span>Next Live Batches Enrolling Now</span>
        </div>

        {/* H2 Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Ready to Start?
        </h2>

        {/* Sub-text (Exact Copy Match) */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Talk to our career counselling team about which program fits your background, or compare the full curriculum for each track before deciding.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* CTA 1 — Primary: Enquire Now */}
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-8 py-4 text-base font-extrabold text-slate-900 bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-300 hover:from-teal-300 hover:to-cyan-200 rounded-xl shadow-xl shadow-teal-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-5 h-5 text-slate-900 transition-transform group-hover:translate-x-1" />
          </button>

          {/* CTA 2 — Secondary: Compare All Three Programs */}
          <button
            onClick={onOpenComparison}
            className="w-full sm:w-auto px-6 py-4 text-base font-bold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm"
          >
            <BookOpen className="w-4 h-4 text-teal-400" />
            <span>Compare All Three Programs</span>
          </button>
        </div>

        {/* Direct Contact Info */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            No prior coding needed for IT Process Manager
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            Live Google Meet Interactive Classes
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            Dedicated Mentors: Lavi, Disha, Aashish Sir
          </span>
        </div>

      </div>
    </section>
  );
};
