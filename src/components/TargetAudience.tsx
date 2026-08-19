import React from 'react';
import { TARGET_AUDIENCE } from '../data/content';
import { GraduationCap, ArrowRightLeft, RotateCcw, TrendingUp, Cpu, CheckCircle2, ArrowRight, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';

interface TargetAudienceProps {
  onOpenEnquiry: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenEnquiry }) => {
  const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-teal-300" />;
      case 'ArrowRightLeft':
        return <ArrowRightLeft className="w-6 h-6 text-blue-300" />;
      case 'RotateCcw':
        return <RotateCcw className="w-6 h-6 text-amber-300" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-300" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-300" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-teal-300" />;
    }
  };

  const getBadgeColors = (index: number) => {
    switch (index) {
      case 0:
        return {
          iconBg: 'bg-teal-500/15 border-teal-500/30 text-teal-300',
          badgeBg: 'bg-teal-950/80 border-teal-800 text-teal-300',
          hoverBorder: 'hover:border-teal-500/60',
        };
      case 1:
        return {
          iconBg: 'bg-blue-500/15 border-blue-500/30 text-blue-300',
          badgeBg: 'bg-blue-950/80 border-blue-800 text-blue-300',
          hoverBorder: 'hover:border-blue-500/60',
        };
      case 2:
        return {
          iconBg: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
          badgeBg: 'bg-amber-950/80 border-amber-800 text-amber-300',
          hoverBorder: 'hover:border-amber-500/60',
        };
      case 3:
        return {
          iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
          badgeBg: 'bg-emerald-950/80 border-emerald-800 text-emerald-300',
          hoverBorder: 'hover:border-emerald-500/60',
        };
      case 4:
        return {
          iconBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
          badgeBg: 'bg-cyan-950/80 border-cyan-800 text-cyan-300',
          hoverBorder: 'hover:border-cyan-500/60',
        };
      default:
        return {
          iconBg: 'bg-teal-500/15 border-teal-500/30 text-teal-300',
          badgeBg: 'bg-teal-950/80 border-teal-800 text-teal-300',
          hoverBorder: 'hover:border-teal-500/60',
        };
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

        {/* Audience Cards Grid - Pure Iconographic & Typographic Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_AUDIENCE.map((aud, index) => {
            const colors = getBadgeColors(index);

            return (
              <div
                key={index}
                className={`bg-slate-800/80 border border-slate-700/80 ${colors.hoverBorder} rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group`}
              >
                <div className="space-y-5">
                  
                  {/* Top Header: Vector Icon & Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className={`w-12 h-12 rounded-2xl border ${colors.iconBg} flex items-center justify-center shadow-xs transition-transform group-hover:scale-105`}>
                      {getAudienceIcon(aud.icon)}
                    </div>
                    <span className={`px-3 py-1 rounded-full border text-[11px] font-bold ${colors.badgeBg}`}>
                      {aud.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5 text-left">
                    <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-teal-300 transition-colors">
                      {aud.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {aud.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between text-left">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    Dedicated Mentorship
                  </span>
                  <button
                    onClick={onOpenEnquiry}
                    className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 group-hover:underline cursor-pointer"
                  >
                    <span>Check Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick Profile Consultation Card */}
          <div className="bg-gradient-to-br from-teal-950 via-slate-800 to-slate-900 border border-teal-500/40 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between text-left">
            <div className="space-y-4">
              
              {/* Header with Vector Icon */}
              <div className="flex items-center justify-between gap-3">
                <div className="w-12 h-12 rounded-2xl border border-teal-500/40 bg-teal-500/20 text-teal-300 flex items-center justify-center shadow-xs">
                  <UserCheck className="w-6 h-6 text-teal-300" />
                </div>
                <span className="text-[11px] font-bold uppercase text-teal-300 bg-teal-950 px-2.5 py-1 rounded-full border border-teal-800">
                  1-on-1 Evaluation
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Not sure which track matches your background?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Talk directly with our career counsellors. We review your resume, past academic background, and target CTC to recommend the exact track.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-3.5 bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-teal-300 hover:to-cyan-200 text-slate-900 font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-900" />
                <span>Request Free Profile Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
