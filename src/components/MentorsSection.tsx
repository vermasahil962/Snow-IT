import React from 'react';
import { MENTORS_DATA } from '../data/content';
import { UserCheck, CheckCircle2, ArrowRight, Video, Sparkles, Star } from 'lucide-react';

interface MentorsSectionProps {
  onOpenEnquiry: (trackId?: string) => void;
}

export const MentorsSection: React.FC<MentorsSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="mentors" className="py-16 lg:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* H2 Title & Subhead */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-400 bg-teal-950 border border-teal-800 px-3.5 py-1 rounded-full inline-block">
            Dedicated Track Leads
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Meet the Mentors
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Every track at Snow IT Expert Institute is led by its own practitioner mentor with real enterprise production experience.
          </p>
        </div>

        {/* 3 Mentors Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MENTORS_DATA.map((mentor) => {
            const isLavi = mentor.id === 'lavi';
            const isDisha = mentor.id === 'disha';
            const isAashish = mentor.id === 'aashish';

            return (
              <div
                key={mentor.id}
                className="bg-slate-800/90 border border-slate-700/80 hover:border-teal-500/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Avatar & Name Header */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md border-2 border-teal-500/40 shrink-0">
                      <img
                        src={
                          isLavi
                            ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
                            : isDisha
                            ? 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80'
                            : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
                        }
                        alt={`${mentor.name} - ${mentor.track}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white group-hover:text-teal-300 transition-colors">
                        {mentor.name}
                      </h3>
                      <p className="text-xs font-bold text-teal-400">
                        {mentor.track}
                      </p>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {mentor.role} · {mentor.experienceYears} Exp
                      </p>
                    </div>
                  </div>

                  {/* Core Bio Sentence (Exact Copy Match) */}
                  <div className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-4">
                    <p className="text-sm text-slate-200 leading-relaxed font-normal">
                      {mentor.bio}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Mentorship Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {mentor.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-6 pt-5 border-t border-slate-700/80">
                  <button
                    onClick={() => onOpenEnquiry(mentor.id === 'lavi' ? 'it-process-manager' : mentor.id === 'disha' ? 'servicenow-developer' : 'applied-genai-data-science')}
                    className="w-full py-2.5 text-xs font-extrabold text-teal-300 bg-slate-900 hover:bg-slate-950 border border-teal-500/30 hover:border-teal-500/60 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <span>Train Under {mentor.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link - Mandatory text: Meet the Full Mentor Team → */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-extrabold text-teal-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all shadow-md"
          >
            <span>Meet the Full Mentor Team →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
