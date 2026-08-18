import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, RefreshCw, Check } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'refund' | null;

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  docType,
  onClose,
  onOpenEnquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (docType) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [docType, onClose]);

  if (!docType) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 cursor-default"
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Policy & Legal Compliance</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {docType === 'privacy' && 'Privacy Policy (/privacy-policy)'}
            {docType === 'terms' && 'Terms & Conditions (/terms)'}
            {docType === 'refund' && 'Refund & Admission Policy (/refund-policy)'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Snow IT Expert Institute · Official Candidate Agreement & Guidelines
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-5 text-slate-700 text-xs sm:text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
          {docType === 'privacy' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900">1. Information We Collect</h4>
              <p>
                When you enquire or register with Snow IT Expert Institute (snowitexpertinstitute.com/), we collect your name, phone number, email address, educational background, and track preferences to coordinate your live Google Meet batch access and placement assistance.
              </p>

              <h4 className="text-sm font-bold text-slate-900">2. How We Use Your Data</h4>
              <p>
                Your data is strictly used for admissions counseling, batch scheduling, sending study resources, and sharing your updated profile with partner recruiters for IT placement drives. We never sell or distribute your personal information to third-party marketers.
              </p>

              <h4 className="text-sm font-bold text-slate-900">3. Data Security & Storage</h4>
              <p>
                All student records and resume submissions are stored securely using encrypted cloud channels with strict access control restricted to authorized mentors and placement coordinators.
              </p>
            </div>
          )}

          {docType === 'terms' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900">1. Program Attendance & Live Classes</h4>
              <p>
                Candidates enrolled in any of our 3 career tracks (IT Process Manager, ServiceNow Developer, or Applied GenAI & Data Science) are expected to attend live Google Meet sessions regularly and complete assigned scenario mock interviews.
              </p>

              <h4 className="text-sm font-bold text-slate-900">2. Placement Assistance Scope</h4>
              <p>
                Placement assistance includes ATS resume rebuilding, 1-on-1 mock interviews, recruiter referral drives, and pre-interview briefings. Candidate active participation in mock clearing is mandatory to receive candidate referral slots.
              </p>

              <h4 className="text-sm font-bold text-slate-900">3. Intellectual Property</h4>
              <p>
                All course curriculum materials, scenario templates, interview question banks, and recording archives remain the exclusive property of Snow IT Expert Institute.
              </p>
            </div>
          )}

          {docType === 'refund' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900">1. Batch Transfer & Rescheduling</h4>
              <p>
                If a candidate is unable to continue in their current batch due to medical or personal emergencies, they can request a free batch transfer to any upcoming batch within 6 months.
              </p>

              <h4 className="text-sm font-bold text-slate-900">2. Admission Cancellation Window</h4>
              <p>
                Refund requests submitted prior to 48 hours before batch launch will be processed with minimal administrative deduction. Detailed guidelines are provided in the admission letter.
              </p>

              <h4 className="text-sm font-bold text-slate-900">3. Support Hotline</h4>
              <p>
                For all policy queries or batch shift assistance, reach out directly to our Admissions Desk at <strong>+91 95607 21315</strong> or email <strong>admissions@snowitexpertinstitute.com</strong>.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 border border-slate-300 rounded-xl"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
            className="px-6 py-2 text-xs font-black text-white bg-[#169BA2] hover:bg-[#128288] rounded-xl shadow-xs"
          >
            Have Questions? Enquire Now →
          </button>
        </div>
      </div>
    </div>
  );
};
