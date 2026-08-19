import React from 'react';
import { TARGET_AUDIENCE } from '../data/content';
import { GraduationCap, ArrowRightLeft, RotateCcw, TrendingUp, Cpu, CheckCircle2, ArrowRight, Sparkles, UserCheck } from 'lucide-react';

interface TargetAudienceProps {
  onOpenEnquiry: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenEnquiry }) => {
  const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-teal-400" />;
      case 'ArrowRightLeft':
        return <ArrowRightLeft className="w-4 h-4 text-blue-400" />;
      case 'RotateCcw':
        return <RotateCcw className="w-4 h-4 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-teal-400" />;
    }
  };

  // Verified authentic Indian candidate portraits with centered face crop so no image is cut off
  const audienceProfiles: Record<number, { img: string; alt: string; tag: string; candidateName: string }> = {
    0: {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=250&h=250&q=80',
      alt: 'Indian Non-IT Candidate Transitioning to IT',
      tag: 'Zero Coding Prior Background',
      candidateName: 'Pooja V. (B.Com to ITSM)',
    },
    1: {
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=faces&w=250&h=250&q=80',
      alt: 'Indian College Graduate Entering Tech Industry',
      tag: 'Freshers & Final Year Students',
      candidateName: 'Rahul M. (Fresher to ServiceNow)',
    },
    2: {
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&crop=faces&w=250&h=250&q=80',
      alt: 'Indian Woman Professional Restarting Tech Career after Gap',
      tag: '3–6 Years Career Gap',
      candidateName: 'Ananya S. (Gap Returner)',
    },
    3: {
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=250&h=250&q=80',
      alt: 'Indian Working Professional Upskilling for Salary Hike',
      tag: 'Working Tech Professionals',
      candidateName: 'Karthik N. (Upskilling in GenAI)',
    },
    4: {
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces&w=250&h=250&q=80',
      alt: 'Indian Support & QA Engineer Switching to Developer',
      tag: 'Tech Support to Dev Switch',
      candidateName: 'Deepak R. (Support to ServiceNow)',
    },
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

        {/* Audience Cards Grid with Perfectly Centered Indian Candidate Portraits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_AUDIENCE.map((aud, index) => {
            const profile = audienceProfiles[index];

            return (
              <div
                key={index}
                className="bg-slate-800/90 border border-slate-700/80 hover:border-teal-500/60 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  
                  {/* Top Profile Header: Perfectly Framed Round Portrait + Persona Badges */}
                  <div className="flex items-center gap-4">
                    {profile && (
                      <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full p-0.5 bg-gradient-to-tr from-teal-400 to-cyan-400 shadow-md shrink-0">
                        <img
                          src={profile.img}
                          alt={profile.alt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center rounded-full bg-slate-800"
                        />
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full" />
                      </div>
                    )}

                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-950 border border-teal-800 text-teal-300 text-[11px] font-bold w-fit">
                        {getAudienceIcon(aud.icon)}
                        <span>{aud.badge}</span>
                      </div>
                      {profile && (
                        <p className="text-[11px] font-semibold text-amber-300 truncate">
                          {profile.tag}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-teal-300 transition-colors">
                      {aud.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {aud.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    Live Mentor Track
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

          {/* Quick Consultation CTA Tile */}
          <div className="bg-gradient-to-br from-teal-950 via-slate-800 to-slate-900 border border-teal-500/40 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              {/* Indian Counsellor Avatar header */}
              <div className="flex items-center gap-3.5">
                <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 to-teal-400 shadow-md shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=200&h=200&q=80"
                    alt="Senior Indian Career Counsellor"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center rounded-full bg-slate-800"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-teal-300 bg-teal-950 px-2.5 py-0.5 rounded-md border border-teal-800">
                    1-on-1 Evaluation
                  </span>
                  <h4 className="text-sm font-black text-white mt-1">Free Career Assessment</h4>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white">
                Not sure which track matches your background?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Talk directly with our career counsellors in India. We review your resume, past academic background, and target CTC to recommend the exact track.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-3 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-900 font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
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
