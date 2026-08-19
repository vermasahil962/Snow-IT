import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  Briefcase, 
  GraduationCap, 
  Terminal, 
  ShieldCheck 
} from 'lucide-react';
import { MENTORS_DATA } from '../data/content';

interface MentorsPageProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenCounsellor: () => void;
}

export const MentorsPage: React.FC<MentorsPageProps> = ({
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
            <span className="text-slate-300">About Us</span>
            <span>/</span>
            <span className="text-white">About Mentors</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold">
            <Users className="w-3.5 h-3.5" />
            <span>Dedicated Industry Practitioners</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Learn Directly from Industry Practitioners, Not Theory Instructors
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Every Snow IT Expert track is led by a dedicated senior architect who actively works on enterprise production systems. You get real war-room insights, live debugging, and direct interview feedback.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#169BA2] to-teal-500 hover:from-teal-600 hover:to-[#169BA2] text-white font-bold text-sm shadow-lg shadow-teal-500/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Book 1-on-1 Mentor Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Mentor In-Depth Profiles */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Mentor Cards */}
        <div className="space-y-8">
          {MENTORS_DATA.map((mentor, index) => {
            const trackSlug = 
              mentor.id === 'lavi' 
                ? 'it-process-manager-course' 
                : mentor.id === 'disha' 
                  ? 'servicenow-developer-course' 
                  : 'genai-data-science-course';

            return (
              <div 
                key={mentor.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-[#169BA2] transition-all p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Mentor Bio & Info */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-teal-50 text-[#169BA2] border border-teal-200 text-xs font-black rounded-full uppercase tracking-wider">
                      {mentor.track}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">
                      {mentor.experienceYears} Enterprise Experience
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                      {mentor.name}
                    </h2>
                    <p className="text-sm font-bold text-[#169BA2]">
                      {mentor.role}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {mentor.bio}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Signature Teaching Highlights:
                    </div>
                    <ul className="space-y-2">
                      {mentor.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#169BA2] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/programs/${trackSlug}`}
                      className="px-5 py-2.5 bg-teal-50 hover:bg-[#169BA2] text-[#169BA2] hover:text-white font-bold text-xs rounded-xl border border-teal-200 transition-all flex items-center gap-1.5"
                    >
                      <span>View {mentor.name}'s Track Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => onOpenEnquiry(mentor.id === 'lavi' ? 'it-process-manager' : mentor.id === 'disha' ? 'servicenow-developer' : 'applied-genai-data-science')}
                      className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
                    >
                      Enquire with {mentor.name}
                    </button>
                  </div>
                </div>

                {/* Mentor Highlight Badge Card with Indian Mentor Portrait */}
                <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-4 text-center">
                  <div className="w-28 h-28 mx-auto rounded-full p-1 bg-gradient-to-tr from-teal-400 to-cyan-400 shadow-xl">
                    <img
                      src={
                        mentor.id === 'lavi'
                          ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=300&h=300&q=80'
                          : mentor.id === 'disha'
                          ? 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&crop=faces&w=300&h=300&q=80'
                          : 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=300&h=300&q=80'
                      }
                      alt={mentor.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center rounded-full bg-slate-800"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white">{mentor.name}</h3>
                    <p className="text-xs font-bold text-teal-300">{mentor.role}</p>
                  </div>

                  <div className="border-t border-slate-800 pt-3 text-left space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Class Mode:</span>
                      <span className="font-bold text-white">Live Google Meet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Interactive Q&A:</span>
                      <span className="font-bold text-emerald-400">Every Session</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Batch Size:</span>
                      <span className="font-bold text-teal-300">Strictly Limited</span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenCounsellor}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs transition-all cursor-pointer"
                  >
                    Request Profile Evaluation
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Mentor-Led Model Works */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-black text-slate-900">
              The Difference Mentorship Makes in Tech Interviews
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              When an interviewer asks "How do you resolve a P1 ticket deadlock?" or "How do you optimize an async GlideAjax call?", generic knowledge fails. Our mentors train you on the exact answers hiring managers want to hear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-[#169BA2] flex items-center justify-center font-bold text-sm">1</div>
              <h3 className="text-sm font-bold text-slate-900">Screen Sharing & Code Reviews</h3>
              <p className="text-xs text-slate-600">Mentors debug your workflows, business rules, and LangChain agents directly during live sessions.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
              <h3 className="text-sm font-bold text-slate-900">War Room & Escalation Drills</h3>
              <p className="text-xs text-slate-600">Simulate high-pressure enterprise incident bridges and technical architectural rounds before your interview.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">3</div>
              <h3 className="text-sm font-bold text-slate-900">Direct Mock Interview Feedback</h3>
              <p className="text-xs text-slate-600">Get graded on technical articulation, scenario confidence, and answer structure before facing real recruiters.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
