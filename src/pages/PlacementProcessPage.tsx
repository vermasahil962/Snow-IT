import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  MessageSquare, 
  Users, 
  Calendar, 
  Award, 
  ShieldCheck, 
  PhoneCall 
} from 'lucide-react';
import { PLACEMENT_STEPS } from '../data/content';

interface PlacementProcessPageProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenCounsellor: () => void;
}

export const PlacementProcessPage: React.FC<PlacementProcessPageProps> = ({
  onOpenEnquiry,
  onOpenCounsellor,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-950 via-[#0A2540] to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-teal-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/placements" className="hover:text-white transition-colors">Placements</Link>
            <span>/</span>
            <span className="text-white">Placement Process</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>The 5-Stage Transition Engine</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            How Placement Assistance Actually Works at Snow IT Expert
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Most institutes promise placements with no defined process. Here is the exact 5-step roadmap every enrolled candidate follows from day one to their signed offer letter.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#169BA2] to-teal-500 hover:from-teal-600 hover:to-[#169BA2] text-white font-bold text-sm shadow-lg shadow-teal-500/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Enrol for Next Batch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenCounsellor}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-teal-400" />
              <span>Talk to Placement Lead</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Process Timeline */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        <div className="space-y-6">
          {PLACEMENT_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#169BA2] transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-2 flex flex-col items-center justify-center p-4 bg-teal-50 rounded-2xl border border-teal-100 text-center">
                <span className="text-xs font-black text-[#169BA2] uppercase tracking-wider">Stage</span>
                <span className="text-3xl font-black text-slate-900">{step.step}</span>
              </div>

              <div className="md:col-span-7 space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">
                  {step.desc}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="md:col-span-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs space-y-1.5">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Mandatory Deliverable</span>
                </div>
                <p className="text-slate-500 text-[11px]">
                  {idx === 0 && "Custom ATS Score > 85% on Naukri/LinkedIn"}
                  {idx === 1 && "Technical Scorecard & Mentor Feedback"}
                  {idx === 2 && "Direct submission to 15+ hiring partners"}
                  {idx === 3 && "Pre-round question dump & doubt clearance"}
                  {idx === 4 && "CTC negotiation guidance & document verification"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs on Placement */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-black text-slate-900">
            Frequently Asked Questions About Placement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <h3 className="text-xs font-bold text-slate-900">How long does placement support last?</h3>
              <p className="text-xs text-slate-600">Our placement support is continuous till you get placed. There is no arbitrary 30-day cut-off after your course concludes.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <h3 className="text-xs font-bold text-slate-900">Can candidates with a 3-5 year career gap get placed?</h3>
              <p className="text-xs text-slate-600">Yes! We actively train career-gap candidates, frame your prior experience, and position your technical skills through rigorous hands-on projects.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <h3 className="text-xs font-bold text-slate-900">Do you help with salary negotiation?</h3>
              <p className="text-xs text-slate-600">Yes. Once an offer comes in, our mentors evaluate the CTC structure, variable components, and provide exact counter-offer guidance.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <h3 className="text-xs font-bold text-slate-900">What if I fail my first interview?</h3>
              <p className="text-xs text-slate-600">We conduct an immediate post-interview review, identify which question caused hesitation, practice the solution in a war-room session, and line up the next recruiter call.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#11696E] via-[#169BA2] to-[#1E70BF] rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to begin your structured career transition?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100">
              Speak with a counsellor today to map out your 21 to 60-day placement plan.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry()}
            className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer shrink-0"
          >
            Start Your Transition
          </button>
        </div>

      </div>
    </div>
  );
};
