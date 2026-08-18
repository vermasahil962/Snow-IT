import React, { useEffect } from 'react';
import { X, Check, BookOpen, Clock, Zap, ShieldCheck } from 'lucide-react';
import { TRACKS_DATA } from '../data/content';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (trackId: string) => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 cursor-default"
      >
        
        {/* Header */}
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

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-bold rounded-full mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Program Side-By-Side Matrix</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Compare All Three Programs
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Review duration, mentor, coding requirement, salary expectations, and course format at a glance.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="p-4 sm:p-8 overflow-x-auto max-h-[70vh]">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-4 px-3 text-xs font-black uppercase text-slate-500 w-1/4">
                  Feature / Track
                </th>
                <th className="py-4 px-3 text-sm font-black text-slate-900 w-1/4 bg-teal-50/60 rounded-t-xl">
                  IT Process Manager
                </th>
                <th className="py-4 px-3 text-sm font-black text-slate-900 w-1/4">
                  ServiceNow Developer
                </th>
                <th className="py-4 px-3 text-sm font-black text-slate-900 w-1/4">
                  Applied GenAI & Data Science
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm font-medium text-slate-800">
              {/* Duration */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-500">Duration</td>
                <td className="py-3 px-3 bg-teal-50/30 font-black text-teal-800">21 Days</td>
                <td className="py-3 px-3 font-bold text-slate-900">21 Days</td>
                <td className="py-3 px-3 font-bold text-slate-900">60 Days</td>
              </tr>

              {/* Mentor */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-500">Dedicated Mentor</td>
                <td className="py-3 px-3 bg-teal-50/30 font-bold text-slate-900">Lavi</td>
                <td className="py-3 px-3 font-bold text-slate-900">Disha</td>
                <td className="py-3 px-3 font-bold text-slate-900">Aashish Sir</td>
              </tr>

              {/* Coding Needed */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-500">Coding Required?</td>
                <td className="py-3 px-3 bg-teal-50/30 font-black text-emerald-700">
                  ❌ No Coding (0%)
                </td>
                <td className="py-3 px-3 font-semibold text-slate-800">
                  ⚙️ Basic JS Scripting
                </td>
                <td className="py-3 px-3 font-semibold text-slate-800">
                  🐍 Python & AI Code
                </td>
              </tr>

              {/* Salary Range */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-500">Salary Range (CTC)</td>
                <td className="py-3 px-3 bg-teal-50/30 font-bold text-slate-900">5 – 35 LPA</td>
                <td className="py-3 px-3 font-bold text-slate-900">6 – 30+ LPA</td>
                <td className="py-3 px-3 font-bold text-slate-900">8 – 40+ LPA</td>
              </tr>

              {/* Class Format */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-500">Class Format</td>
                <td className="py-3 px-3 bg-teal-50/30 text-slate-800">Live Google Meet (Mon–Sat)</td>
                <td className="py-3 px-3 text-slate-800">Live Google Meet (Mon–Sat)</td>
                <td className="py-3 px-3 text-slate-800">Live + 55 Hrs Recorded</td>
              </tr>

              {/* Key Practical Tools */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-500">Primary Tools</td>
                <td className="py-3 px-3 bg-teal-50/30 text-slate-800">ITIL v4, ServiceNow Ticketing</td>
                <td className="py-3 px-3 text-slate-800">ServiceNow Admin, Flow Designer, REST API</td>
                <td className="py-3 px-3 text-slate-800">Python, RAG, LangChain, CrewAI Agents</td>
              </tr>

              {/* Certification Guidance */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-500">Certifications</td>
                <td className="py-3 px-3 bg-teal-50/30 text-slate-800">ITIL v4 Foundation</td>
                <td className="py-3 px-3 font-bold text-blue-700">CSA, CAD, CIS-ITSM</td>
                <td className="py-3 px-3 text-slate-800">GenAI & Data Science Certificate</td>
              </tr>

              {/* Best Suited For */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-500">Best Suited For</td>
                <td className="py-3 px-3 bg-teal-50/30 text-slate-800">Non-IT Switchers, BPO, Freshers</td>
                <td className="py-3 px-3 text-slate-800">Support Engg, Testers, Java/Devs</td>
                <td className="py-3 px-3 text-slate-800">Graduates & Switchers seeking AI</td>
              </tr>

              {/* Action Buttons */}
              <tr>
                <td className="py-4 px-3 font-bold text-slate-500">Enquire Now</td>
                <td className="py-4 px-3 bg-teal-50/30">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenEnquiry('it-process-manager');
                    }}
                    className="w-full py-2 px-3 text-xs font-bold text-white bg-[#169BA2] rounded-lg shadow-xs"
                  >
                    Select Track →
                  </button>
                </td>
                <td className="py-4 px-3">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenEnquiry('servicenow-developer');
                    }}
                    className="w-full py-2 px-3 text-xs font-bold text-white bg-[#1E70BF] rounded-lg shadow-xs"
                  >
                    Select Track →
                  </button>
                </td>
                <td className="py-4 px-3">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenEnquiry('applied-genai-data-science');
                    }}
                    className="w-full py-2 px-3 text-xs font-bold text-white bg-amber-600 rounded-lg shadow-xs"
                  >
                    Select Track →
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 border border-slate-300 rounded-xl"
          >
            Close Comparison
          </button>
        </div>

      </div>
    </div>
  );
};
