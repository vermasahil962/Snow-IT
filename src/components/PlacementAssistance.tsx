import React from 'react';
import { PLACEMENT_STEPS } from '../data/content';
import { FileText, UserCheck, Share2, Calendar, Award, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface PlacementAssistanceProps {
  onOpenEnquiry: () => void;
}

export const PlacementAssistance: React.FC<PlacementAssistanceProps> = ({ onOpenEnquiry }) => {
  const getStepIcon = (index: number, className = "w-5 h-5") => {
    switch (index) {
      case 0:
        return <FileText className={className} />;
      case 1:
        return <UserCheck className={className} />;
      case 2:
        return <Share2 className={className} />;
      case 3:
        return <Calendar className={className} />;
      case 4:
        return <Award className={className} />;
      default:
        return <CheckCircle2 className={className} />;
    }
  };

  return (
    <section id="placement" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#169BA2] bg-teal-50 border border-teal-200/80 px-3.5 py-1 rounded-full inline-block">
            Transparent Placement Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How Placement Assistance Actually Works
          </h2>
        </div>

        {/* Visual Feature Split Banner: Indian Placement & Mock Interview Cell */}
        <div className="mt-12 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm max-w-5xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Indian Mock Interview / Corporate Placement Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[16/10] bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="1-on-1 Technical Mock Interview & Placement Session"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-slate-900/90 backdrop-blur-md rounded-full border border-emerald-500/40 text-emerald-400 text-[11px] font-black flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>1-on-1 Mock Interview Drills</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-xs font-bold text-teal-300">Dedicated Placement Cell</p>
                  <p className="text-[11px] text-slate-300">ATS Profile Overhaul + Direct Recruiter Referrals</p>
                </div>
              </div>
            </div>

            {/* Core Placement Values */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-teal-800 border border-teal-200/80 text-xs font-black uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#169BA2]" />
                <span>Accountable Till-You-Get-Placed Support</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Direct Mentorship Through Every Technical & HR Round
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before speaking with any corporate recruiter, every candidate goes through mandatory 1-on-1 mock interviews covering scenario questions, real production problem-solving, and salary negotiation strategies.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-0.5">
                  <span className="text-base font-black text-[#169BA2]">90%+</span>
                  <p className="text-xs font-bold text-slate-800">ATS Keyword Match</p>
                  <p className="text-[10px] text-slate-500">Naukri & LinkedIn profile optimization</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-0.5">
                  <span className="text-base font-black text-[#1E70BF]">100%</span>
                  <p className="text-xs font-bold text-slate-800">Mock Interview Clearance</p>
                  <p className="text-[10px] text-slate-500">Direct feedback before recruiter rounds</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5-Step Connected Pipeline Roadmap */}
        <div className="mt-14 max-w-6xl mx-auto">
          
          {/* Header for Pipeline */}
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#169BA2] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80">
              5-Stage Career Acceleration Pipeline
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              From Enrollment to Offer Letter Signing
            </h3>
          </div>

          {/* Desktop Connected Step Progress Track */}
          <div className="hidden lg:grid grid-cols-5 gap-3 relative mb-6">
            {/* Connecting Track Line */}
            <div className="absolute top-7 left-12 right-12 h-1 bg-gradient-to-r from-[#169BA2] via-teal-400 to-[#1E70BF] rounded-full z-0 opacity-40"></div>

            {PLACEMENT_STEPS.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#169BA2] to-[#1E70BF] text-white flex items-center justify-center font-black text-lg shadow-md border-4 border-slate-50 transition-transform hover:scale-110">
                  {getStepIcon(idx, "w-6 h-6 text-white")}
                </div>
                <span className="mt-3 text-xs font-black text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200/70">
                  Stage {step.step}
                </span>
                <p className="mt-1 text-xs font-extrabold text-slate-800 line-clamp-1">
                  {step.title || `Stage ${idx + 1}`}
                </p>
              </div>
            ))}
          </div>

          {/* 5-Stage Modern Card Grid / Roadmap Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {PLACEMENT_STEPS.map((step, idx) => {
              const highlights = [
                ["ATS Score > 90%", "Naukri & LinkedIn Fix", "Keyword Match"],
                ["1-on-1 Deep Drills", "Scenario Questions", "Direct Fixes"],
                ["Recruiter Network", "Top Hiring Partners", "Fast Turnaround"],
                ["Company Questions", "Pre-Call Briefing", "Doubt Clearing"],
                ["CTC Negotiation", "Offer Verification", "Doc Support"]
              ][idx] || ["Step Verified", "Included in Program"];

              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-slate-200/90 hover:border-[#169BA2] rounded-2xl p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Subtle Accent Stripe */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#169BA2] to-[#1E70BF] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div>
                    {/* Header with Icon and Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 group-hover:bg-[#169BA2] flex items-center justify-center transition-colors shadow-2xs">
                        {getStepIcon(idx, "w-5 h-5 text-[#169BA2] group-hover:text-white transition-colors")}
                      </div>
                      <span className="text-xs font-black text-slate-400 group-hover:text-[#169BA2] tracking-wider transition-colors">
                        STEP {step.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h4 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#169BA2] transition-colors leading-snug">
                      {step.title || step.desc}
                    </h4>

                    {/* Step Description */}
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                      {step.detail || step.desc}
                    </p>
                  </div>

                  {/* Highlights Deliverable Badges */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* End of 5-Step Connected Pipeline Roadmap */}
      </div>
    </section>
  );
};
