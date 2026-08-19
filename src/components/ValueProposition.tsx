import React from 'react';
import { VALUE_PROPOSITION_CONTENT } from '../data/content';
import { Lightbulb, Terminal, Briefcase, Target, CheckCircle } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-[#169BA2]" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-[#1E70BF]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-amber-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-emerald-600" />;
      default:
        return <CheckCircle className="w-6 h-6 text-[#169BA2]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#169BA2] bg-teal-50 border border-teal-200/80 px-3.5 py-1 rounded-full inline-block">
            Our Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {VALUE_PROPOSITION_CONTENT.h2}
          </h2>
        </div>

        {/* Core Body Paragraph Card with Left Image and Right Content */}
        <div className="mt-10 max-w-6xl mx-auto bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Side: High Quality Interactive Classroom / Mentorship Image */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
                alt="Snow IT Expert Institute Live Mentorship and Practical IT Training"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/30" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md rounded-2xl text-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black text-white">Production-Ready Practical Labs</p>
                    <p className="text-[11px] text-slate-300">Guided live by senior industry practitioners</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Narrative Content & Key Trust Pillars */}
            <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-teal-800 border border-teal-200/80 text-xs font-black uppercase tracking-wider">
                  <span>Accountable Live Mentorship</span>
                </div>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {VALUE_PROPOSITION_CONTENT.bodyParagraph}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold text-slate-700">
                <div className="flex items-start gap-2 text-teal-800">
                  <CheckCircle className="w-4 h-4 text-[#169BA2] shrink-0 mt-0.5" />
                  <span>Named Industry Mentors</span>
                </div>
                <div className="flex items-start gap-2 text-blue-800">
                  <CheckCircle className="w-4 h-4 text-[#1E70BF] shrink-0 mt-0.5" />
                  <span>Live Mon–Sat Batches</span>
                </div>
                <div className="flex items-start gap-2 text-emerald-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Till-You-Get-Placed Support</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Intro Subtext */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg font-bold text-slate-900">
            {VALUE_PROPOSITION_CONTENT.introSubtext}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPOSITION_CONTENT.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 hover:border-[#169BA2]/60 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-teal-50 flex items-center justify-center mb-4 transition-colors">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#169BA2] transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#169BA2]">
                <CheckCircle className="w-4 h-4 text-[#169BA2]" />
                <span>Job-Tested Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
