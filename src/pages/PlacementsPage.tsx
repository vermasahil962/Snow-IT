import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Building2, 
  ShieldCheck, 
  FileText, 
  MessageSquare, 
  Award, 
  PhoneCall 
} from 'lucide-react';
import { PLACEMENT_STEPS, SUCCESS_STORIES } from '../data/content';
import { LogoMarquee } from '../components/LogoMarquee';

interface PlacementsPageProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenCounsellor: () => void;
}

export const PlacementsPage: React.FC<PlacementsPageProps> = ({
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
            <span className="text-white">Placements</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Dedicated Placement Assistance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Placement Support That Doesn't Stop Until You Accept an Offer
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            We don't hand you a certificate and wish you luck. From rewriting your resume to pass ATS filters, to conducting rigorous technical mocks, to sharing your profile directly with our recruiter network — we walk with you through every step.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/placements/success-stories"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#169BA2] to-teal-500 hover:from-teal-600 hover:to-[#169BA2] text-white font-bold text-sm shadow-lg shadow-teal-500/20 transition-all flex items-center gap-2"
            >
              <span>Explore Placed Alumni Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/placements/how-it-works"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all"
            >
              View 5-Step Process
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Placement Metrics Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <div className="text-3xl font-black text-[#169BA2] flex items-baseline gap-1">
              <span>5–40+</span>
              <span className="text-sm font-bold text-[#169BA2]">LPA</span>
            </div>
            <div className="text-xs font-bold text-slate-800">Placement Package Range</div>
            <p className="text-[11px] text-slate-500">Across 3 specialized IT career tracks</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <div className="text-3xl font-black text-blue-600">100%</div>
            <div className="text-xs font-bold text-slate-800">Mock Interview Rigor</div>
            <p className="text-[11px] text-slate-500">Mandatory 1-on-1 feedback before client calls</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <div className="text-3xl font-black text-emerald-600">120+</div>
            <div className="text-xs font-bold text-slate-800">Hiring Partner Network</div>
            <p className="text-[11px] text-slate-500">MNCs, System Integrators & Global Hubs</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <div className="text-3xl font-black text-amber-600">Till Placed</div>
            <div className="text-xs font-bold text-slate-800">Continuous Support Duration</div>
            <p className="text-[11px] text-slate-500">No arbitrary cut-off after class completes</p>
          </div>
        </div>

        {/* 5-Step Placement Pipeline Overview */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                How Our Placement Engine Works
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                A structured, disciplined 5-stage transformation designed to maximize your shortlisting rates.
              </p>
            </div>
            <Link
              to="/placements/how-it-works"
              className="text-xs font-bold text-[#169BA2] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Read Detailed Process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PLACEMENT_STEPS.map((step, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-[#169BA2] font-black text-xs flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="text-xs font-bold text-slate-900">{step.title}</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Placed Candidates */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Recent Candidate Placements</h2>
              <p className="text-xs text-slate-500">Real candidates placed with competitive hikes</p>
            </div>
            <Link
              to="/placements/success-stories"
              className="text-xs font-bold text-[#169BA2] hover:underline flex items-center gap-1"
            >
              <span>View All Alumni Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUCCESS_STORIES.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-[#169BA2] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black rounded-lg">
                    {t.ctc} ({t.hike})
                  </span>
                  <span className="text-[11px] text-slate-400 font-bold">{t.batch}</span>
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-900">{t.candidateName}</h3>
                  <p className="text-xs text-slate-500">{t.prevRole} ➔ <strong className="text-teal-700">{t.roleTitle}</strong></p>
                </div>

                <p className="text-xs text-slate-600 italic">"{t.quote}"</p>

                <div className="pt-2 border-t border-slate-100 text-xs font-extrabold text-slate-800">
                  Company: <span className="text-[#169BA2]">{t.companyName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiter Hiring Network */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl font-black text-slate-900">Our Students Are Hired By Industry Leaders</h2>
            <p className="text-xs text-slate-500">From enterprise IT consulting giants to product companies</p>
          </div>

          <LogoMarquee />
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#11696E] via-[#169BA2] to-[#1E70BF] rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Want our placement team to evaluate your current resume?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100">
              Get an honest feedback score and recommendation on which track will get you placed fastest.
            </p>
          </div>
          <button
            onClick={onOpenCounsellor}
            className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer shrink-0"
          >
            Get Free Resume Assessment
          </button>
        </div>

      </div>
    </div>
  );
};
