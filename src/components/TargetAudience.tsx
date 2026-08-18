import React from 'react';
import { TARGET_AUDIENCE } from '../data/content';
import { GraduationCap, ArrowRightLeft, RotateCcw, TrendingUp, Cpu, CheckCircle2 } from 'lucide-react';

interface TargetAudienceProps {
  onOpenEnquiry: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenEnquiry }) => {
  const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#169BA2]" />;
      case 'ArrowRightLeft':
        return <ArrowRightLeft className="w-6 h-6 text-blue-600" />;
      case 'RotateCcw':
        return <RotateCcw className="w-6 h-6 text-amber-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#169BA2]" />;
    }
  };

  return (
    <section id="audience" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-400 bg-teal-950 border border-teal-800 px-3.5 py-1 rounded-full inline-block">
            Tailored Path For Every Candidate
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Who Trains Here
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Our programs are specifically structured around candidates with diverse backgrounds and non-traditional IT journeys.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_AUDIENCE.map((aud, index) => (
            <div
              key={index}
              className="bg-slate-800/90 border border-slate-700/80 hover:border-teal-500/60 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700">
                    {getAudienceIcon(aud.icon)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 bg-slate-900 text-teal-300 border border-slate-700 rounded-md">
                    {aud.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white group-hover:text-teal-300 transition-colors mb-2">
                  {aud.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {aud.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  Targeted Mentorship Included
                </span>
                <button
                  onClick={onOpenEnquiry}
                  className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 group-hover:underline"
                >
                  <span>Get Started</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Consultation CTA Tile */}
          <div className="bg-gradient-to-br from-teal-900/90 via-slate-800 to-slate-900 border border-teal-500/40 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-teal-300 bg-teal-950 px-2.5 py-1 rounded-md border border-teal-800">
                1-on-1 Guidance
              </span>
              <h3 className="text-xl font-black text-white mt-3 mb-2">
                Not sure which track fits your background?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Talk directly with our career counsellors. We review your resume, education background, and salary expectations to suggest the exact track.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919560721315"
                className="flex-1 py-3 px-4 text-xs font-black uppercase tracking-wider text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Call +91 95607 21315</span>
              </a>
              <button
                onClick={onOpenEnquiry}
                className="py-3 px-4 text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-700"
              >
                Request Callback
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
