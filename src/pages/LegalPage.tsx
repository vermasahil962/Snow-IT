import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, FileText, RefreshCw, Lock } from 'lucide-react';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  let docType: 'privacy' | 'terms' | 'refund' = 'privacy';
  if (path.includes('terms')) docType = 'terms';
  if (path.includes('refund')) docType = 'refund';

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation Breadcrumb & Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-teal-600">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-500">Legal Documentation</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-bold">
            <Link
              to="/privacy-policy"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                docType === 'privacy' ? 'bg-[#169BA2] text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                docType === 'terms' ? 'bg-[#169BA2] text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Terms of Service
            </Link>
            <Link
              to="/refund-policy"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                docType === 'refund' ? 'bg-[#169BA2] text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Refund Policy
            </Link>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          
          {docType === 'privacy' && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#169BA2] flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-2xl font-black text-slate-900">Privacy Policy</h1>
                  <p className="text-xs text-slate-500">Last updated: August 2026</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  At <strong>Snow IT Expert Institute</strong> (snowitexpertinstitute.com), we prioritize the privacy and data confidentiality of our students, prospective candidates, and website visitors.
                </p>
                <h3 className="text-sm font-bold text-slate-900">1. Information We Collect</h3>
                <p>
                  When you submit an enquiry form or register for counselling, we collect your name, phone/WhatsApp number, email address, current work experience, and course preferences. This data is strictly used for admissions counselling and batch scheduling.
                </p>
                <h3 className="text-sm font-bold text-slate-900">2. Usage of Data</h3>
                <p>
                  Your information is never sold, rented, or shared with third-party advertisers. It is exclusively used by our internal counsellors, mentors, and placement coordinators to facilitate mock interviews and recruiter referrals.
                </p>
                <h3 className="text-sm font-bold text-slate-900">3. Contact for Privacy Inquiries</h3>
                <p>
                  For any questions regarding personal data or to request data removal, contact us at <strong>contact@snowitexpertinstitute.com</strong>.
                </p>
              </div>
            </div>
          )}

          {docType === 'terms' && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-2xl font-black text-slate-900">Terms of Service</h1>
                  <p className="text-xs text-slate-500">Last updated: August 2026</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  By enrolling in any program at Snow IT Expert Institute, you agree to abide by these terms and our classroom conduct guidelines.
                </p>
                <h3 className="text-sm font-bold text-slate-900">1. Live Batch Attendance & Decorum</h3>
                <p>
                  All programs are conducted live over Google Meet. Students are expected to maintain professional decorum, attend scheduled sessions punctually, and complete hands-on assignments.
                </p>
                <h3 className="text-sm font-bold text-slate-900">2. Intellectual Property</h3>
                <p>
                  Course materials, session recordings, question dumps, and proprietary war-room scripts are for enrolled students only. Unauthorized distribution is strictly prohibited.
                </p>
                <h3 className="text-sm font-bold text-slate-900">3. Placement Assistance Protocol</h3>
                <p>
                  Placement support entails resume optimization, mock interviews, and recruiter sharing. Final hiring decisions rest with partner enterprises based on candidate interview performance.
                </p>
              </div>
            </div>
          )}

          {docType === 'refund' && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-2xl font-black text-slate-900">Refund & Cancellation Policy</h1>
                  <p className="text-xs text-slate-500">Last updated: August 2026</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h3 className="text-sm font-bold text-slate-900">1. Demo Class & Evaluation</h3>
                <p>
                  We encourage all candidates to attend a free counselling/demo session before confirming enrolment to ensure the track matches their career goals.
                </p>
                <h3 className="text-sm font-bold text-slate-900">2. Batch Transfer Flexibility</h3>
                <p>
                  If an enrolled student faces personal or professional scheduling conflicts, they are entitled to transfer their seat to an upcoming batch at no additional cost.
                </p>
                <h3 className="text-sm font-bold text-slate-900">3. Refund Requests</h3>
                <p>
                  Enrolment fee refund requests must be submitted in writing to <strong>contact@snowitexpertinstitute.com</strong> prior to the commencement of the second scheduled live class.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
