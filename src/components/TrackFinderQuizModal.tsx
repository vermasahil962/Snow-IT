import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import { TRACKS_DATA } from '../data/content';

interface TrackFinderQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (trackId: string) => void;
}

export const TrackFinderQuizModal: React.FC<TrackFinderQuizModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
}) => {
  const [step, setStep] = useState<number>(1);
  const [q1Background, setQ1Background] = useState<string>('');
  const [q2CodingPreference, setQ2CodingPreference] = useState<string>('');
  const [q3Timeline, setQ3Timeline] = useState<string>('');

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

  const handleReset = () => {
    setStep(1);
    setQ1Background('');
    setQ2CodingPreference('');
    setQ3Timeline('');
  };

  // Determine recommendation
  let recommendedTrackId = 'it-process-manager';
  if (q2CodingPreference === 'no-coding') {
    recommendedTrackId = 'it-process-manager';
  } else if (q2CodingPreference === 'scripting-ok' || q1Background === 'support') {
    recommendedTrackId = 'servicenow-developer';
  } else if (q2CodingPreference === 'love-coding' || q1Background === 'ai-interested') {
    recommendedTrackId = 'applied-genai-data-science';
  }

  const recommendedTrack = TRACKS_DATA.find((t) => t.id === recommendedTrackId) || TRACKS_DATA[0];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 cursor-default"
      >
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>30-Second Track Recommender</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Find Your Ideal Career Track
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Answer 3 quick questions to discover which program fits your background.
          </p>
        </div>

        {/* Quiz Steps */}
        <div className="p-6">
          
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Question 1 of 3</span>
                <span>Background</span>
              </div>
              <h4 className="text-base font-black text-slate-900">
                What best describes your current education or work background?
              </h4>

              <div className="space-y-2">
                {[
                  { id: 'non-it', label: 'Non-IT background (B.Com, B.A, BBA, BPO, Sales, Ops)' },
                  { id: 'fresher', label: 'Fresher (Graduate or Final Year student)' },
                  { id: 'gap', label: 'Returning to IT/Work after a Career Gap' },
                  { id: 'support', label: 'Tech Support Engineer, QA Tester, or Java/.NET Developer' },
                  { id: 'ai-interested', label: 'Tech Pro wanting to move into AI / Data Science' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setQ1Background(opt.id);
                      setStep(2);
                    }}
                    className="w-full text-left p-3.5 border border-slate-200 hover:border-[#169BA2] hover:bg-teal-50/50 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 transition-all flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#169BA2]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Question 2 of 3</span>
                <span>Coding Comfort</span>
              </div>
              <h4 className="text-base font-black text-slate-900">
                How comfortable are you with programming/coding?
              </h4>

              <div className="space-y-2">
                {[
                  { id: 'no-coding', label: 'Strictly NO CODING — I want a process & management role' },
                  { id: 'scripting-ok', label: 'Open to basic scripting (JavaScript / ServiceNow automation)' },
                  { id: 'love-coding', label: 'Ready to learn Python, Machine Learning & AI Agents' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setQ2CodingPreference(opt.id);
                      setStep(3);
                    }}
                    className="w-full text-left p-3.5 border border-slate-200 hover:border-[#169BA2] hover:bg-teal-50/50 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 transition-all flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#169BA2]" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="text-xs font-bold text-slate-500 hover:text-slate-700 underline pt-2"
              >
                ← Back to Previous Question
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Question 3 of 3</span>
                <span>Timeline</span>
              </div>
              <h4 className="text-base font-black text-slate-900">
                How quickly do you want to complete your training and enter the interview pipeline?
              </h4>

              <div className="space-y-2">
                {[
                  { id: 'fast-21', label: 'Fastest 21-Day Intensive Program' },
                  { id: 'standard-60', label: 'Comprehensive 60-Day Deep Dive' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setQ3Timeline(opt.id);
                      setStep(4); // Show result
                    }}
                    className="w-full text-left p-3.5 border border-slate-200 hover:border-[#169BA2] hover:bg-teal-50/50 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 transition-all flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#169BA2]" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="text-xs font-bold text-slate-500 hover:text-slate-700 underline pt-2"
              >
                ← Back to Previous Question
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-5 text-center py-2">
              <div className="w-12 h-12 bg-teal-100 text-[#169BA2] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Your Recommended Match
                </span>
                <h4 className="text-2xl font-black text-[#169BA2] mt-1">
                  {recommendedTrack.title}
                </h4>
                <p className="text-xs font-bold text-slate-600 mt-1">
                  {recommendedTrack.duration} · Mentor: {recommendedTrack.mentorName} · {recommendedTrack.salaryRange}
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 text-left space-y-2">
                <p><strong>Why this fits you:</strong> {recommendedTrack.description}</p>
                <p><strong>Key Topics:</strong> {recommendedTrack.keyTopics.join(', ')}</p>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenEnquiry(recommendedTrack.id);
                  }}
                  className="w-full py-3.5 text-sm font-black text-white bg-[#169BA2] hover:bg-[#128288] rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Enquire for {recommendedTrack.shortTitle} →</span>
                </button>

                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-slate-500 hover:text-slate-700 underline flex items-center justify-center gap-1 mx-auto pt-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
