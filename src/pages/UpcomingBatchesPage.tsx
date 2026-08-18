import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Video, 
  AlertCircle, 
  PhoneCall 
} from 'lucide-react';
import { TRACKS_DATA } from '../data/content';
import { getFormattedBatchDate, getFormattedWeekendBatchDate } from '../utils/dateUtils';

interface UpcomingBatchesPageProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenCounsellor: () => void;
}

export const UpcomingBatchesPage: React.FC<UpcomingBatchesPageProps> = ({
  onOpenEnquiry,
  onOpenCounsellor,
}) => {
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
      salary: "5–35 LPA"
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
      salary: "6–30+ LPA"
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
      salary: "8–40+ LPA"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-950 via-[#0A2540] to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-teal-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Upcoming Batches</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Live Interactive Google Meet Batches</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Upcoming Batch Timetable & Live Seat Availability
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            We keep batch sizes strictly capped so mentors can inspect your screens, debug errors real-time, and run personalized mock interview simulations.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Admissions Open for Batch Starting {nextMondayDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Batches List */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="space-y-6">
          {batches.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-[#169BA2] hover:shadow-xl transition-all p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              {/* Batch Info */}
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-teal-50 text-[#169BA2] border border-teal-200 text-xs font-black rounded-full">
                    {b.duration}
                  </span>
                  <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-md">
                    {b.coding}
                  </span>
                  <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold rounded-md flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-amber-600" />
                    <span>Only {b.seatsLeft} Seats Left</span>
                  </span>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {b.title}
                  </h2>
                  <p className="text-xs font-bold text-[#169BA2] mt-0.5">
                    Lead Mentor: {b.mentor}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="text-slate-500 font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>Start Schedule:</span>
                    </div>
                    <div className="font-bold text-slate-900">{b.startDate} ({b.days})</div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="text-slate-500 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span>Timing:</span>
                    </div>
                    <div className="font-bold text-slate-900">{b.timing}</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                  <span>• Mode: <strong className="text-slate-800">{b.mode}</strong></span>
                  <span>• Package Range: <strong className="text-[#169BA2] font-black">{b.salary}</strong></span>
                </div>
              </div>

              {/* Action Box */}
              <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4 text-center">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-500">Live Batch Enrolment</div>
                  <div className="text-lg font-black text-slate-900">Reserve Your Seat</div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => onOpenEnquiry(b.id)}
                    className="w-full py-3 bg-[#169BA2] hover:bg-teal-600 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Reserve Seat for {b.startDate}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onOpenCounsellor}
                    className="w-full py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-teal-600" />
                    <span>Request Callback</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400">
                  Includes full session recordings & LMS access
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Batch Size is Limited */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-black text-slate-900">Why Snow IT Expert Caps Batch Sizes</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Large edtech platforms put 300+ students in one lecture where no one can ask questions. In our Google Meet batches, mentors know every candidate by name, review your individual assignments, and tailor the mock interview simulation to your exact career history.
          </p>
        </div>

      </div>
    </div>
  );
};
