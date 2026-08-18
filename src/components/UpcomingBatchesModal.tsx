import React from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  AlertCircle, 
  PhoneCall, 
  Users,
  Video
} from 'lucide-react';
import { getFormattedBatchDate, getFormattedWeekendBatchDate } from '../utils/dateUtils';

interface UpcomingBatchesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (trackId?: string) => void;
}

export const UpcomingBatchesModal: React.FC<UpcomingBatchesModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
}) => {
  if (!isOpen) return null;

  const nextMondayDate = getFormattedBatchDate('full');
  const nextWeekendFormatted = getFormattedBatchDate('standard');

  const batches = [
    {
      id: "it-process-manager",
      title: "IT Process Manager (Incident & Change Management)",
      mentor: "Lavi (ITSM Lead)",
      duration: "21 Days Fast-Track",
      startDate: nextMondayDate,
      timing: "8:00 PM – 9:30 PM IST (Evening Slot)",
      days: "Monday to Saturday",
      mode: "Live Google Meet (100% Interactive)",
      seatsLeft: 4,
      coding: "No Coding Required",
      salary: "5–35 LPA",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "servicenow-developer",
      title: "ServiceNow Developer (CSA & CAD Certification Track)",
      mentor: "Disha (Senior ServiceNow Architect)",
      duration: "21 Days Fast-Track",
      startDate: nextMondayDate,
      timing: "7:00 AM – 8:30 AM IST or 8:30 PM – 10:00 PM IST",
      days: "Monday to Saturday",
      mode: "Live Google Meet (70% Live Instance)",
      seatsLeft: 3,
      coding: "JavaScript Scripting Included",
      salary: "6–30+ LPA",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "applied-genai-data-science",
      title: "Applied GenAI & Data Science (Agentic AI & RAG)",
      mentor: "Aashish Sir (Principal AI Engineer)",
      duration: "60 Days Comprehensive",
      startDate: `${nextWeekendFormatted} (Weekend Hybrid Batch)`,
      timing: "Live Weekend Workshops + 55 hrs On-Demand",
      days: "Saturday & Sunday Live",
      mode: "Live Interactive + 55 Hrs Recorded Repo",
      seatsLeft: 6,
      coding: "Python to LLMs / CrewAI",
      salary: "8–40+ LPA",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-900 text-white p-6 sm:p-8 flex items-start justify-between relative">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold">
              <Video className="w-3.5 h-3.5" />
              <span>Live Google Meet Interactive Batches</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Upcoming Batch Timetable & Seat Status
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Batch sizes are strictly capped so mentors can provide individual screen reviews & mock interview drills.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-4"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 max-h-[70vh] overflow-y-auto space-y-4 bg-slate-50">
          {batches.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:border-[#169BA2] hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
            >
              <div className="space-y-2.5 max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-teal-50 text-[#169BA2] border border-teal-200 text-xs font-black rounded-md">
                    {b.duration}
                  </span>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">
                    {b.coding}
                  </span>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold rounded-md flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-amber-600" />
                    <span>Only {b.seatsLeft} Seats Left</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  {b.title}
                </h3>
                <p className="text-xs font-bold text-[#169BA2] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Lead Mentor: {b.mentor}</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{b.startDate} ({b.days})</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{b.timing}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-col gap-2 shrink-0 md:w-52">
                <button
                  onClick={() => {
                    onClose();
                    onOpenEnquiry(b.id);
                  }}
                  className="w-full py-3 bg-[#169BA2] hover:bg-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Reserve Seat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-center text-slate-500 font-medium">
                  Expected Salary: <strong className="text-slate-800 font-bold">{b.salary}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-600 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Need a custom timing or 1-on-1 fast-track? Contact our admissions desk.</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors cursor-pointer"
          >
            Talk to Counsellor
          </button>
        </div>
      </div>
    </div>
  );
};
