import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Phone, PhoneCall, User, Mail, Briefcase, Calendar, Sparkles, MessageSquare } from 'lucide-react';
import { EnquiryFormData } from '../types';
import { getFormattedBatchDate } from '../utils/dateUtils';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrackId?: string;
  isCounsellorMode?: boolean;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialTrackId = 'it-process-manager',
  isCounsellorMode = false,
}) => {
  const nextMondayBatchLabel = `Upcoming Batch (${getFormattedBatchDate('dayMonth')})`;

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    selectedTrack: initialTrackId,
    candidateType: 'Fresher',
    experienceYears: '0 Years (Fresher)',
    preferredBatch: nextMondayBatchLabel,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 cursor-default"
      >
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white p-6 relative">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-full transition-colors z-30 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 pointer-events-none" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isCounsellorMode ? '1-on-1 Career Counselling' : 'Direct Batch Admissions'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            {isCounsellorMode
              ? 'Talk to a Career Counsellor'
              : 'Enquire for Snow IT Expert Institute'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Fill in your details to receive full syllabus PDF, fee structure, and live batch calendar.
          </p>
        </div>

        {/* Form Body or Success State */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-teal-100 text-[#169BA2] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-slate-900">
              Enquiry Submitted Successfully!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our career counselling team will reach out to you shortly on <strong className="text-slate-900">{formData.phone}</strong> with batch timings and course details.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
              <p><strong>Selected Track:</strong> {formData.selectedTrack.toUpperCase().replace(/-/g, ' ')}</p>
              <p><strong>Candidate Profile:</strong> {formData.candidateType}</p>
              <p><strong>Class Format:</strong> Live Google Meet Sessions (Mon–Sat)</p>
            </div>
            <button
              onClick={resetForm}
              className="w-full py-3 text-sm font-bold text-white bg-[#169BA2] hover:bg-[#128288] rounded-xl transition-all shadow-md mt-4"
            >
              Done & Return to Homepage
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-4 text-left">
            {/* Quick Call & Desktop Callback Banner */}
            <div className="p-4 bg-gradient-to-r from-teal-50 via-cyan-50 to-slate-50 border border-teal-200/90 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#169BA2] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-black text-slate-900">
                    Using a desktop? Simply request a callback!
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                    Just drop your number below and our career counsellor will call you back within 15 minutes.
                  </p>
                </div>
              </div>
              <a
                href="tel:+919560721315"
                className="w-full sm:w-auto px-4 py-2 bg-[#169BA2] hover:bg-[#128288] text-white text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs shrink-0"
                title="Direct Phone Call"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 95607 21315</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Drop Your Details Below</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#169BA2]"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#169BA2]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#169BA2]"
                  />
                </div>
              </div>
            </div>

            {/* Program Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Select Preferred Program Track *
              </label>
              <select
                value={formData.selectedTrack}
                onChange={(e) => setFormData({ ...formData, selectedTrack: e.target.value })}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#169BA2]"
              >
                <option value="it-process-manager">IT Process Manager</option>
                <option value="servicenow-developer">ServiceNow Developer</option>
                <option value="applied-genai-data-science">Applied GenAI & Data Science</option>
                <option value="undecided">Not sure yet — Need Counsellor Recommendation</option>
              </select>
            </div>

            {/* Candidate Background Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Current Background *
                </label>
                <select
                  value={formData.candidateType}
                  onChange={(e) => setFormData({ ...formData, candidateType: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#169BA2]"
                >
                  <option value="Fresher">Fresher (Graduate / Final Year)</option>
                  <option value="Non-IT Switcher">Career Switcher (Non-IT field)</option>
                  <option value="Career Gap">Candidate returning after Career Gap</option>
                  <option value="Working Pro">Working Pro (Upskilling)</option>
                  <option value="Support/Tester">Support Engineer / Tester / Dev</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Batch Timing
                </label>
                <select
                  value={formData.preferredBatch}
                  onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#169BA2]"
                >
                  <option value={nextMondayBatchLabel}>{nextMondayBatchLabel}</option>
                  <option value="Morning Batch">Morning (7:00 AM – 8:30 AM)</option>
                  <option value="Evening Batch">Evening (8:00 PM – 9:30 PM)</option>
                  <option value="Weekend Special">Weekend Special Batch</option>
                </select>
              </div>
            </div>

            {/* Additional Message Optional */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Any specific question for mentor / counsellor? (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ask about syllabus, career gap handling, fee installment options..."
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#169BA2]"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3.5 text-sm font-black text-white bg-gradient-to-r from-[#169BA2] to-[#1E70BF] hover:from-[#13888e] hover:to-[#185fa3] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Enquiry & Request Callback</span>
            </button>

            <p className="text-[11px] text-slate-500 text-center">
              🔒 Your privacy is 100% protected. No spam or unsolicited calling.
            </p>
          </form>
          </div>
        )}

      </div>
    </div>
  );
};
