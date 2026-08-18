import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenUpcomingBatches?: () => void;
  onOpenComparison: () => void;
  onOpenBlog?: () => void;
  onOpenLegal?: (docType: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenEnquiry, 
  onOpenUpcomingBatches,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <Logo variant="horizontal" size="md" lightText={true} />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              <strong className="text-slate-200">Snow IT Expert Institute</strong> is a premier <strong className="text-teal-400">IT training institute with placement assistance</strong>. We run three fast-track programs led by practitioner mentors — IT Process Manager, ServiceNow Developer, and Applied GenAI & Data Science — built around what employers actually interview for.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Globe className="w-4 h-4 text-teal-400" />
              <span>Official Domain: </span>
              <a href="https://snowitexpertinstitute.com/" className="text-teal-400 hover:underline">
                snowitexpertinstitute.com
              </a>
            </div>
          </div>

          {/* Col 2: Programs & Tracks (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/programs/it-process-manager-course"
                  className="hover:text-teal-300 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>IT Process Manager Course</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/servicenow-developer-course"
                  className="hover:text-teal-300 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>ServiceNow Developer Course</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/genai-data-science-course"
                  className="hover:text-teal-300 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Applied GenAI & Data Science</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/programs"
                  className="text-teal-400 hover:underline font-bold"
                >
                  View All Programs & Comparison →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Placements & Mentors (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-teal-300 transition-colors">About Company</Link></li>
              <li><Link to="/mentors" className="hover:text-teal-300 transition-colors">About Mentors</Link></li>
              <li><Link to="/placements" className="hover:text-teal-300 transition-colors">Placements Overview</Link></li>
              <li><Link to="/placements/success-stories" className="hover:text-teal-300 transition-colors">Success Stories</Link></li>
              <li><Link to="/placements/how-it-works" className="hover:text-teal-300 transition-colors">Placement Process</Link></li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenUpcomingBatches?.()}
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  Upcoming Batches
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Admissions (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              Admissions & Contact
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Admissions: +91 95607 21315</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>contact@snowitexpertinstitute.com</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Live Google Meet Sessions | Pan-India & Global</span>
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-3 block w-full py-2.5 text-center text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors cursor-pointer"
            >
              Enquire For Next Batch
            </Link>
          </div>

        </div>

        {/* Bottom Legal Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Snow IT Expert Institute. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="hover:underline cursor-pointer"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              to="/terms"
              className="hover:underline cursor-pointer"
            >
              Terms & Conditions
            </Link>
            <span>·</span>
            <Link
              to="/refund-policy"
              className="hover:underline cursor-pointer"
            >
              Refund Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
