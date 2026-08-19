import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Award, 
  GraduationCap, 
  ArrowRight, 
  ShieldCheck, 
  Video, 
  Briefcase, 
  PhoneCall 
} from 'lucide-react';
import { VALUE_PROPOSITION_CONTENT } from '../data/content';
import { LogoMarquee } from '../components/LogoMarquee';

interface AboutCompanyPageProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenCounsellor: () => void;
}

export const AboutCompanyPage: React.FC<AboutCompanyPageProps> = ({
  onOpenEnquiry,
  onOpenCounsellor,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Breadcrumbs & Hero Header */}
      <div className="bg-gradient-to-br from-slate-950 via-[#0A2540] to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-teal-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">About Us</span>
            <span>/</span>
            <span className="text-white">About Company</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Snow IT Expert Institute</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Bridging the Gap Between Generic Education and Real IT Hiring
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Snow IT Expert Institute was founded with a singular purpose: to eliminate theory-heavy fluff and provide laser-focused, mentor-led IT fast-track programs that prepare candidates for what employers actually test during interviews.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#169BA2] to-teal-500 hover:from-teal-600 hover:to-[#169BA2] text-white font-bold text-sm shadow-lg shadow-teal-500/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Enquire for Next Batch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+919560721315"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all cursor-pointer flex items-center gap-2"
              title="Call Career Counsellor at +91 95607 21315"
            >
              <PhoneCall className="w-4 h-4 text-teal-400" />
              <span>Call Counsellor: +91 95607 21315</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Origin & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#169BA2]">
              <Target className="w-4 h-4" />
              <span>Our Core Mission</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              Why We Rejected the "Generic 6-Month Video Course" Model
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Most online IT platforms sell pre-recorded video playlists with hundreds of hours of generic slide-reading. Students end up confused, unable to answer real scenario questions, and stranded without interview calls.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At <strong>Snow IT Expert Institute</strong>, we do the complete opposite. Every program runs in small, interactive batches over <strong>Google Meet</strong> directly with industry practitioners. We focus 70% on live tool instances and real-world enterprise war rooms (e.g. Major Incident bridges, live ServiceNow workflows, custom GenAI pipelines).
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-1">
                <div className="text-2xl font-black text-[#169BA2]">100%</div>
                <div className="text-xs font-bold text-slate-800">Live Interactive Google Meet</div>
                <p className="text-[11px] text-slate-500">Ask doubts live, share screens, solve issues real-time.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-1">
                <div className="text-2xl font-black text-blue-600 flex items-baseline gap-1">
                  <span>5–40+</span>
                  <span className="text-xs font-semibold text-blue-500">LPA</span>
                </div>
                <div className="text-xs font-bold text-slate-800">Verified Placement Range</div>
                <p className="text-[11px] text-slate-500">Structured salary growth tailored to role & track.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Indian Mentorship Live Classroom Visual */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-xl bg-slate-900 aspect-[16/10] group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Live Interactive Mentorship at Snow IT Expert Institute"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute top-3 left-3 px-3 py-1 bg-slate-900/90 backdrop-blur-md rounded-full border border-teal-500/40 text-teal-300 text-[11px] font-black flex items-center gap-1.5 shadow-md">
                <Video className="w-3.5 h-3.5 text-emerald-400" />
                <span>Google Meet Live Batches</span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-xs font-bold text-teal-300">Live Mentorship in Action</p>
                <p className="text-[11px] text-slate-300">Small interactive groups led directly by Indian IT practitioners</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-7 rounded-3xl text-white shadow-xl space-y-5 border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">The Snow IT Commitment</h3>
                  <p className="text-xs text-slate-400">Our promise to every enrolled candidate</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Theory Fluff:</strong> Every module directly answers recurring enterprise interview questions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Dedicated Track Mentors:</strong> Consistent industry practitioners (Lavi, Disha, Aashish Sir).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Support Till You Get Placed:</strong> 1-on-1 mock interviews, ATS resume overhaul & recruiter referrals.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Our Methodology */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {VALUE_PROPOSITION_CONTENT.h2}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {VALUE_PROPOSITION_CONTENT.introSubtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUE_PROPOSITION_CONTENT.pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#169BA2] transition-colors space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#169BA2] font-black text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Partners / Placement Network */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-black text-slate-900">Alumni Working at Leading Enterprise Giants</h3>
              <p className="text-xs text-slate-500">Direct recruitment sharing and referrals across Fortune 500 tech companies</p>
            </div>
            <Link
              to="/placements/success-stories"
              className="text-xs font-bold text-[#169BA2] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View Placed Candidates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <LogoMarquee />
        </div>

        {/* Next Steps CTA */}
        <div className="bg-gradient-to-r from-[#11696E] via-[#169BA2] to-[#1E70BF] rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to fast-track your IT career transition?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100">
              Join the next live Google Meet batch or speak with our senior counsellor to review your profile.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              Book Free Demo Session
            </button>
            <Link
              to="/programs"
              className="px-5 py-3 bg-teal-900/40 hover:bg-teal-900/60 text-white border border-teal-300/30 font-bold text-xs sm:text-sm rounded-xl transition-all"
            >
              Explore 3 Tracks
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
