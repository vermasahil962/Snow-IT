import React from 'react';
import { HERO_CONTENT } from '../data/content';
import { ShieldCheck, Video, Users, ArrowRight, PhoneCall, Sparkles, CheckCircle2, Award } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenCounsellorModal: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiry,
  onOpenCounsellorModal,
  onOpenQuiz,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Gradient Mesh & Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#169BA2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#1E70BF]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Main CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* H1 Heading - Mandatory exact match */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              {HERO_CONTENT.h1}
            </h1>

            {/* Subhead - Mandatory exact match */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              {HERO_CONTENT.subhead}
            </p>

            {/* CTAs Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* CTA 1 - Primary: Enquire Now */}
              <button
                onClick={() => onOpenEnquiry()}
                className="px-8 py-4 text-base font-extrabold text-slate-900 bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-300 hover:from-teal-300 hover:to-cyan-200 rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 group"
              >
                <span>{HERO_CONTENT.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 text-slate-900 transition-transform group-hover:translate-x-1" />
              </button>

              {/* CTA 2 - Secondary: Talk to a Career Counsellor */}
              <a
                href="tel:+919560721315"
                className="px-6 py-3.5 text-base font-bold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-teal-400/60 rounded-xl transition-all flex items-center justify-center gap-3 backdrop-blur-sm group shadow-md"
                title="Call Career Counsellor at +91 95607 21315"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center group-hover:bg-teal-400 group-hover:text-slate-900 transition-colors shrink-0">
                  <PhoneCall className="w-4 h-4 animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider leading-tight">Talk to a Career Counsellor</span>
                  <span className="block text-sm sm:text-base font-black text-teal-300 group-hover:text-teal-200">Call +91 95607 21315</span>
                </div>
              </a>
            </div>

            {/* Interactive Track Quiz Teaser */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <span>Unsure which track fits your background?</span>
              <button
                onClick={onOpenQuiz}
                className="text-teal-400 hover:text-teal-300 font-bold underline underline-offset-2 flex items-center gap-1"
              >
                <span>Take 30-sec Track Recommender Quiz</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {HERO_CONTENT.trustHighlights.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium leading-tight">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Quick Card / Feature Preview */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden">
              
              {/* Header inside Card with Indian Mentor Avatars */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                      Live Programs
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Google Meet Live
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    3 Tracks · Dedicated Mentors
                  </h2>
                </div>

                {/* Overlapping Indian Mentor Avatars */}
                <div className="flex items-center -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Mentor Lavi - ITSM"
                    title="Mentor Lavi - IT Process Manager"
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full border-2 border-slate-800 object-cover object-top"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80"
                    alt="Mentor Disha - ServiceNow"
                    title="Mentor Disha - ServiceNow Developer"
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full border-2 border-slate-800 object-cover object-top"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Mentor Aashish Sir - GenAI"
                    title="Mentor Aashish Sir - GenAI & Data Science"
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full border-2 border-slate-800 object-cover object-top"
                  />
                </div>
              </div>

              {/* 3 Tracks Preview Cards */}
              <div className="space-y-3">
                {/* Track 1 */}
                <div
                  onClick={() => onOpenEnquiry('it-process-manager')}
                  className="group bg-slate-900/80 hover:bg-slate-900 border border-slate-700 hover:border-teal-500/60 rounded-xl p-3.5 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                        IT Process Manager
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-teal-950 text-teal-300 border border-teal-800 rounded-md">
                        No Coding
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      21 Days · Mentor: Lavi · 5–35 LPA
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-transform group-hover:translate-x-1 shrink-0" />
                </div>

                {/* Track 2 */}
                <div
                  onClick={() => onOpenEnquiry('servicenow-developer')}
                  className="group bg-slate-900/80 hover:bg-slate-900 border border-slate-700 hover:border-blue-500/60 rounded-xl p-3.5 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                        ServiceNow Developer
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-950 text-blue-300 border border-blue-800 rounded-md">
                        CSA / CAD
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      21 Days · Mentor: Disha · 70% Practical
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-transform group-hover:translate-x-1 shrink-0" />
                </div>

                {/* Track 3 */}
                <div
                  onClick={() => onOpenEnquiry('applied-genai-data-science')}
                  className="group bg-slate-900/80 hover:bg-slate-900 border border-slate-700 hover:border-amber-500/60 rounded-xl p-3.5 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        Applied GenAI & Data Science
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-950 text-amber-300 border border-amber-800 rounded-md">
                        Agentic AI
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      60 Days · Mentor: Aashish Sir · 8–40+ LPA
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-1 shrink-0" />
                </div>
              </div>

              {/* Bottom Quick Callout in Card */}
              <div className="mt-5 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Video className="w-4 h-4 text-emerald-400" />
                  Mon–Sat Live Batches
                </span>
                <button
                  onClick={() => onOpenEnquiry()}
                  className="text-teal-400 hover:text-teal-300 font-bold hover:underline"
                >
                  Apply for Next Batch →
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
