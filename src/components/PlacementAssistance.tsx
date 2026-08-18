import React from 'react';
import { PLACEMENT_STEPS } from '../data/content';
import { FileText, UserCheck, Share2, Calendar, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

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

        {/* 5-Step Pipeline Layout */}
        <div className="mt-12 space-y-4 max-w-4xl mx-auto">
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
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#169BA2] transition-colors">
                  {idx + 1}. {step.desc}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
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
          <p className="text-sm sm:text-base text-slate-600">
            Enquire today to discuss your target roles, candidate background, and upcoming batch availability.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-[#169BA2] to-[#1E70BF] hover:from-[#13888e] hover:to-[#185fa3] rounded-xl shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Start Placement Assistance Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
