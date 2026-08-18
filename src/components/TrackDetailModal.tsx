import React, { useEffect } from 'react';
import { X, Check, Clock, UserCheck, ShieldCheck, Zap, Download, Calendar, Terminal, Briefcase, Award } from 'lucide-react';
import { TRACKS_DATA } from '../data/content';

interface TrackDetailModalProps {
  trackId: string | null;
  onClose: () => void;
  onOpenEnquiry: (trackId: string) => void;
}

export const TrackDetailModal: React.FC<TrackDetailModalProps> = ({
  trackId,
  onClose,
  onOpenEnquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (trackId) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [trackId, onClose]);

  if (!trackId) return null;

  const track = TRACKS_DATA.find((t) => t.id === trackId) || TRACKS_DATA[0];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 cursor-default"
      >
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 relative">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors z-30 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5 pointer-events-none" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-bold rounded-full">
              Full Program Curriculum
            </span>
            {track.noCodingRequired && (
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold rounded-full">
                No Coding Required
              </span>
            )}
            {track.certificationGuidance && (
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs font-bold rounded-full">
                {track.certificationGuidance}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {track.title}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" />
              Duration: {track.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-teal-400" />
              Mentor: {track.mentorName} ({track.mentorTitle})
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              Salary CTC: {track.salaryRange}
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Program Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {track.fullOverview}
            </p>
          </div>

          {/* Schedule & Batch Specs */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-800">
            <div>
              <span className="font-bold text-slate-500 block mb-0.5">Upcoming Batch:</span>
              <p className="font-bold text-teal-700">{track.batchSchedule.nextBatch}</p>
            </div>
            <div>
              <span className="font-bold text-slate-500 block mb-0.5">Live Class Timing:</span>
              <p className="font-semibold text-slate-900">{track.batchSchedule.timing}</p>
            </div>
            <div>
              <span className="font-bold text-slate-500 block mb-0.5">Schedule & Mode:</span>
              <p className="font-semibold text-slate-900">{track.batchSchedule.days}</p>
            </div>
          </div>

          {/* Module Curriculum Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#169BA2] mb-3">
              Module-By-Module Curriculum
            </h4>
            <div className="space-y-3">
              {track.curriculumModules.map((mod, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                    <span className="text-sm font-black text-slate-900">{mod.title}</span>
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md">
                      {mod.duration}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {mod.topics.map((top, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#169BA2] shrink-0 mt-0.5" />
                        <span>{top}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Covered */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Hands-On Tools Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {track.toolsCovered.map((tool, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-extrabold text-slate-800">
                  🛠️ {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Target Roles */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Target Interview Roles
            </h4>
            <div className="flex flex-wrap gap-2">
              {track.targetRoles.map((role, i) => (
                <span key={i} className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-lg text-xs font-bold text-teal-900">
                  💼 {role}
                </span>
              ))}
            </div>
          </div>

          {/* Suitable For */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Who Should Join This Track
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {track.suitableFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry(track.id);
            }}
            className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-200 border border-slate-300 rounded-xl"
          >
            Download Syllabus PDF
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenEnquiry(track.id);
            }}
            className="w-full sm:w-auto px-8 py-3 text-sm font-black text-white bg-[#169BA2] hover:bg-[#128288] rounded-xl shadow-md transition-all"
          >
            Enquire for {track.shortTitle} Batch →
          </button>
        </div>

      </div>
    </div>
  );
};
