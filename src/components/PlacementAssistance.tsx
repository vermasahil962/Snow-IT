import React from 'react';
import { PLACEMENT_STEPS } from '../data/content';
import { FileText, UserCheck, Share2, Calendar, Award, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface PlacementAssistanceProps {
  onOpenEnquiry: () => void;
}

export const PlacementAssistance: React.FC<PlacementAssistanceProps> = ({ onOpenEnquiry }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileText className="w-5 h-5 text-white" />;
      case 1:
        return <UserCheck className="w-5 h-5 text-white" />;
      case 2:
        return <Share2 className="w-5 h-5 text-white" />;
      case 3:
        return <Calendar className="w-5 h-5 text-white" />;
      case 4:
        return <Award className="w-5 h-5 text-white" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="placement" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#169BA2] bg-teal-50 border border-teal-200/80 px-3.5 py-1 rounded-full inline-block">
            Transparent Placement Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How Placement Assistance Actually Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            No empty claims or hidden conditions. A structured, step-by-step pipeline from day 1 to your offer letter.
          </p>
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

        {/* 5-Step Pipeline Layout */}
        <div className="mt-10 space-y-4 max-w-4xl mx-auto">
          {PLACEMENT_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center gap-5 group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#169BA2] to-[#1E70BF] flex items-center justify-center font-black text-lg text-white shadow-md">
                  {getStepIcon(idx)}
                </div>
                <span className="text-2xl font-black text-slate-300 group-hover:text-[#169BA2] transition-colors">
                  Step {step.step}
                </span>
              </div>

              {/* Step Info */}
              <div className="flex-1 space-y-1">
                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#169BA2] transition-colors">
                  {idx + 1}. {step.desc}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.detail}
                </p>
              </div>

              {/* Status Badge */}
              <div className="shrink-0 self-start md:self-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-[#169BA2] border border-teal-200/80">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Included
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Ready to get your profile in front of hiring managers?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Enquire today to discuss your target roles, candidate background, and upcoming batch availability.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#169BA2] to-[#1E70BF] hover:from-[#13888e] hover:to-[#185fa3] rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Start Placement Assistance Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
