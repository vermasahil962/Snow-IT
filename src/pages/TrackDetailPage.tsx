import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  Clock, 
  Calendar, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  User, 
  Briefcase, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Terminal, 
  PhoneCall 
} from 'lucide-react';
import { TRACKS_DATA, SUCCESS_STORIES } from '../data/content';

interface TrackDetailPageProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenCounsellor: () => void;
  onOpenComparison: () => void;
}

export const TrackDetailPage: React.FC<TrackDetailPageProps> = ({
  onOpenEnquiry,
  onOpenCounsellor,
  onOpenComparison,
}) => {
  const { trackId } = useParams<{ trackId: string }>();
  const navigate = useNavigate();
  const [expandedModuleIndex, setExpandedModuleIndex] = useState<number | null>(0);

  // Normalize trackId aliases
  let normalizedId = 'it-process-manager';
  if (trackId) {
    if (trackId.includes('process') || trackId.includes('it-process-manager')) {
      normalizedId = 'it-process-manager';
    } else if (trackId.includes('servicenow') || trackId.includes('servicenow-developer')) {
      normalizedId = 'servicenow-developer';
    } else if (trackId.includes('genai') || trackId.includes('data-science') || trackId.includes('ai')) {
      normalizedId = 'applied-genai-data-science';
    }
  }

  const track = TRACKS_DATA.find((t) => t.id === normalizedId) || TRACKS_DATA[0];
  const trackTestimonials = SUCCESS_STORIES.filter((s) => s.trackId === track.id);

  const toggleModule = (index: number) => {
    setExpandedModuleIndex(expandedModuleIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-950 via-[#0A2540] to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-xs font-semibold text-teal-400 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/programs" className="hover:text-white transition-colors">Programs</Link>
            <span>/</span>
            <span className="text-white">{track.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-black">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{track.duration} Live Program</span>
                </span>
                {track.noCodingRequired ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Zero Coding Required</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Instance & Coding Practical</span>
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{track.salaryRange} Expected Package</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-4xl leading-tight">
                {track.title} Certification & Career Fast-Track
              </h1>

              <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                {track.fullOverview}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300 pt-2 border-t border-slate-800">
                <div>Mentor: <strong className="text-teal-300">{track.mentorName}</strong> ({track.mentorTitle})</div>
                <div>•</div>
                <div>Schedule: <strong className="text-white">{track.batchSchedule.timing}</strong></div>
                <div>•</div>
                <div>Mode: <strong className="text-emerald-400">{track.batchSchedule.mode}</strong></div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry(track.id)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#169BA2] to-teal-500 hover:from-teal-600 hover:to-[#169BA2] text-white font-bold text-sm shadow-lg shadow-teal-500/20 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Enrol in Next Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenEnquiry(track.id)}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-teal-400" />
                  <span>Download Detailed Syllabus</span>
                </button>
                <a
                  href="tel:+919560721315"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-all cursor-pointer flex items-center gap-2"
                  title="Call Career Counsellor at +91 95607 21315"
                >
                  <PhoneCall className="w-4 h-4 text-teal-400" />
                  <span>Call +91 95607 21315</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
                <img
                  src={
                    track.id === 'it-process-manager'
                      ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
                      : track.id === 'servicenow-developer'
                      ? 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80'
                      : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
                  }
                  alt={`Lead Mentor: ${track.mentorName}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider">Live Mentor: {track.mentorName}</span>
                  <p className="text-sm font-extrabold text-white">{track.batchSchedule.nextBatch}</p>
                  <p className="text-xs text-slate-300">{track.salaryRange} Expected Package</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Syllabus & Sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Full Curriculum & Details */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Curriculum Accordion */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Day-by-Day Comprehensive Syllabus
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Step-by-step modular progression focused on practical production tools and interview scenarios
                  </p>
                </div>
                <span className="text-xs font-bold text-[#169BA2] bg-teal-50 px-2.5 py-1 rounded-lg">
                  {track.curriculumModules.length} Modules
                </span>
              </div>

              <div className="space-y-3">
                {track.curriculumModules.map((module, idx) => {
                  const isExpanded = expandedModuleIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleModule(idx)}
                        className="w-full p-4 bg-slate-50/70 hover:bg-teal-50/50 flex items-center justify-between text-left cursor-pointer transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="text-[11px] font-black uppercase tracking-wider text-[#169BA2]">
                            {module.duration}
                          </div>
                          <div className="text-sm font-bold text-slate-900">
                            {module.title}
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="p-4 bg-white border-t border-slate-100 space-y-2.5">
                          <div className="text-xs font-semibold text-slate-500">Topics & Exercises:</div>
                          <ul className="space-y-2">
                            {module.topics.map((t, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#169BA2] shrink-0 mt-0.5" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Target Job Roles & Salary Projections */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-black text-slate-900">
                Target Job Roles & Career Trajectory
              </h2>
              <div className="flex flex-wrap gap-2">
                {track.targetRoles.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold border border-slate-200"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-100 space-y-1">
                  <div className="text-xs font-bold text-slate-600">Starting CTC Range</div>
                  <div className="text-xl font-black text-[#169BA2]">{track.salaryRange}</div>
                  <p className="text-[11px] text-slate-500">Based on prior background, interview drill score & role.</p>
                </div>
                <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100 space-y-1">
                  <div className="text-xs font-bold text-slate-600">Placement Support</div>
                  <div className="text-xl font-black text-blue-700">100% Dedicated</div>
                  <p className="text-[11px] text-slate-500">Resume rewrite + mock interviews till offer letter.</p>
                </div>
              </div>
            </div>

            {/* Who is this track suitable for */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-black text-slate-900">
                Who Is This Program Best Suited For?
              </h2>
              <ul className="space-y-3">
                {track.suitableFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonials for this track */}
            {trackTestimonials.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-black text-slate-900">
                  Alumni Success from {track.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {trackTestimonials.map((t) => (
                    <div key={t.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-black text-slate-900">{t.candidateName}</div>
                          <div className="text-xs text-slate-500">{t.prevRole} ➔ <strong className="text-teal-700">{t.roleTitle}</strong></div>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black rounded-md">
                          {t.ctc} ({t.hike})
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 italic">"{t.quote}"</p>
                      <div className="text-[11px] font-bold text-slate-400">Placed at: <span className="text-slate-800 font-extrabold">{t.companyName}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Quick Enrolment Card */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="sticky top-24 bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
                  Upcoming Batch
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  Join Next Live Batch
                </h3>
                <p className="text-xs text-slate-500">
                  Limited seats for {track.mentorName}'s live Google Meet batch.
                </p>
              </div>

              <div className="space-y-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Upcoming Batch:</span>
                  <span className="font-bold text-teal-700">{track.batchSchedule.nextBatch}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-bold text-slate-900">{track.duration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Mentor:</span>
                  <span className="font-bold text-[#169BA2]">{track.mentorName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Mode:</span>
                  <span className="font-bold text-slate-900">100% Live Google Meet</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Placement:</span>
                  <span className="font-bold text-emerald-600">End-to-End Support</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Expected Salary:</span>
                  <span className="font-black text-slate-900">{track.salaryRange}</span>
                </div>
              </div>

              {/* Tools Covered */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700">Tools Covered:</div>
                <div className="flex flex-wrap gap-1.5">
                  {track.toolsCovered.map((tool, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-800 text-[11px] font-semibold rounded-lg">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onOpenEnquiry(track.id)}
                  className="w-full py-3.5 bg-[#169BA2] hover:bg-teal-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-teal-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Enrol / Request Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenCounsellor}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-teal-600" />
                  <span>Speak with Counsellor</span>
                </button>
              </div>

              <div className="text-center">
                <Link
                  to="/programs"
                  className="text-xs font-bold text-[#169BA2] hover:underline"
                >
                  ← Compare with other 2 tracks
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
