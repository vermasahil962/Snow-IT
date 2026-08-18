import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Code, 
  TrendingUp, 
  Users, 
  Calendar 
} from 'lucide-react';
import { TRACKS_DATA } from '../data/content';

interface ProgramsHubPageProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenComparison: () => void;
  onOpenQuiz: () => void;
}

export const ProgramsHubPage: React.FC<ProgramsHubPageProps> = ({
  onOpenEnquiry,
  onOpenComparison,
  onOpenQuiz,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-950 via-[#0A2540] to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-teal-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Programs</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Fast-Track Career Programs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Three Laser-Focused IT Career Tracks Built for High-Growth Roles
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Each track is designed around real enterprise hiring requirements. Learn directly from industry mentors in live Google Meet sessions with end-to-end placement assistance till you get placed.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenComparison}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-teal-400" />
              <span>Side-by-Side Track Comparison</span>
            </button>
            <button
              onClick={onOpenQuiz}
              className="px-5 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Take 60-Sec Track Finder Quiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* Track Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRACKS_DATA.map((track) => {
            const trackSlug = 
              track.id === 'it-process-manager' 
                ? 'it-process-manager-course' 
                : track.id === 'servicenow-developer' 
                  ? 'servicenow-developer-course' 
                  : 'genai-data-science-course';

            return (
              <div
                key={track.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-[#169BA2] hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-teal-50 text-[#169BA2] border border-teal-200 rounded-full text-xs font-black">
                      {track.duration} Fast-Track
                    </span>
                    {track.noCodingRequired ? (
                      <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md text-[11px] font-bold">
                        No Coding Required
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-md text-[11px] font-bold">
                        Hands-on Coding
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h2 className="text-xl font-black text-slate-900 group-hover:text-[#169BA2] transition-colors">
                      {track.title}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      Mentor: <strong className="text-slate-800">{track.mentorName}</strong> ({track.mentorTitle})
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {track.description}
                  </p>

                  {/* Salary & Modules */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Salary Range:</span>
                      <span className="font-black text-[#169BA2]">{track.salaryRange}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Mode:</span>
                      <span className="font-bold text-slate-800">Live Google Meet</span>
                    </div>
                  </div>

                  {/* Key Topics List */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                      Core Syllabus Modules:
                    </div>
                    <ul className="space-y-1.5">
                      {track.keyTopics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#169BA2] shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <Link
                    to={`/programs/${trackSlug}`}
                    className="w-full py-3 bg-[#169BA2] hover:bg-teal-600 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>View Full Syllabus & Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => onOpenEnquiry(track.id)}
                    className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all cursor-pointer"
                  >
                    Enquire for Next Batch
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why 21-60 Day Fast-Track Works */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-black text-slate-900">
              Why Our Focused Fast-Track Format Outperforms College Diplomas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Traditional training takes 6 to 12 months because 80% is spent on outdated history and slides. We cut straight to the tools, workflows, and interview question banks employers actually test.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 bg-teal-50/60 rounded-2xl border border-teal-100 space-y-2">
              <Clock className="w-6 h-6 text-[#169BA2]" />
              <h3 className="text-sm font-bold text-slate-900">Daily Monday-Saturday Cadence</h3>
              <p className="text-xs text-slate-600">Continuous daily momentum prevents forgetting and builds instinctive muscle memory in tools like ServiceNow and Python.</p>
            </div>
            <div className="p-5 bg-blue-50/60 rounded-2xl border border-blue-100 space-y-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">Immediate Mock Interview Pipeline</h3>
              <p className="text-xs text-slate-600">As soon as your syllabus completes, your resume is rebuilt and mock interviews begin right away without waiting months.</p>
            </div>
            <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-100 space-y-2">
              <ShieldCheck className="w-6 h-6 text-amber-600" />
              <h3 className="text-sm font-bold text-slate-900">Placement Support Till Hired</h3>
              <p className="text-xs text-slate-600">Our recruiter network distribution continues until you clear your final interview round and accept an offer letter.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
