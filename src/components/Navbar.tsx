import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Sparkles, 
  BookOpen,
  Briefcase, 
  Users, 
  Calendar, 
  Building2, 
  CheckCircle2
} from 'lucide-react';
import { LegalDocType } from './LegalModal';
import { getFormattedBatchDate } from '../utils/dateUtils';

interface NavbarProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenUpcomingBatches?: () => void;
  onOpenComparison: () => void;
  onOpenQuiz: () => void;
  onOpenTrackDetail: (trackId: string) => void;
  onOpenBlog?: () => void;
  onOpenLegal: (docType: LegalDocType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiry,
  onOpenUpcomingBatches,
  onOpenComparison,
  onOpenQuiz,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'about' | 'programs' | 'placements' | null>(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobilePlacementsOpen, setMobilePlacementsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <>
      {/* Top Notification / Batch Status Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenUpcomingBatches?.()}
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Meet Batches Active
            </button>
            <button
              onClick={() => onOpenUpcomingBatches?.()}
              className="hidden md:inline text-slate-300 hover:text-teal-300 transition-colors text-xs text-left cursor-pointer"
            >
              Next Live Batch Starting {getFormattedBatchDate('dayMonth')} | Limited Seats per Mentor →
            </button>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="tel:+919560721315"
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-teal-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>+91 95607 21315</span>
            </a>
            <a
              href="https://wa.me/919560721315?text=Hi%2C%20I%20want%20to%20enquire%20about%20Snow%20IT%20Expert%20Institute%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={onOpenQuiz}
              className="hidden lg:flex items-center gap-1 text-amber-300 hover:underline font-semibold cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Which Track Fits Me?</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-white ${
          isScrolled
            ? 'shadow-md border-b border-slate-100 py-2.5'
            : 'border-b border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center focus:outline-none"
          >
            <Logo variant="horizontal" size="md" />
          </Link>

          {/* Desktop Navigation Structure */}
          <nav className="hidden xl:flex items-center space-x-5 text-xs lg:text-sm font-bold text-slate-700">
            
            {/* 1. Home */}
            <Link
              to="/"
              className={`hover:text-[#169BA2] transition-colors py-1 relative group ${
                location.pathname === '/' ? 'text-[#169BA2]' : ''
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#169BA2] transition-all duration-300 ${
                location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>

            {/* 2. About Us Dropdown */}
            <div
              className="relative group py-1"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => navigate('/about')}
                className={`flex items-center gap-1 hover:text-[#169BA2] transition-colors focus:outline-none py-1 cursor-pointer ${
                  location.pathname.startsWith('/about') || location.pathname === '/mentors' ? 'text-[#169BA2]' : ''
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#169BA2] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 my-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    About Snow IT Expert
                  </div>

                  <Link
                    to="/about"
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-teal-50/80 text-xs font-bold text-slate-900 hover:text-[#169BA2] transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-[#169BA2]" />
                    <span>About Company</span>
                  </Link>

                  <Link
                    to="/mentors"
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-teal-50/80 text-xs font-bold text-slate-900 hover:text-[#169BA2] transition-colors"
                  >
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>About Mentors</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Programs Dropdown */}
            <div
              className="relative group py-1"
              onMouseEnter={() => setOpenDropdown('programs')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => navigate('/programs')}
                className={`flex items-center gap-1 hover:text-[#169BA2] transition-colors focus:outline-none py-1 cursor-pointer ${
                  location.pathname.startsWith('/programs') ? 'text-[#169BA2]' : ''
                }`}
              >
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#169BA2] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'programs' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 my-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Career Fast-Track Programs
                    </span>
                    <Link
                      to="/programs"
                      onClick={() => setOpenDropdown(null)}
                      className="text-[11px] font-bold text-[#169BA2] hover:underline"
                    >
                      View All Tracks →
                    </Link>
                  </div>

                  <Link
                    to="/programs/it-process-manager-course"
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-teal-50/80 transition-colors group/item"
                  >
                    <div className="p-2 bg-emerald-100/60 rounded-lg text-emerald-600 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 group-hover/item:text-emerald-700">
                        IT Process Manager Course
                      </div>
                      <p className="text-[11px] text-slate-500 leading-tight">
                        21 Days · No Coding · Incident & ITSM
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/programs/servicenow-developer-course"
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-teal-50/80 transition-colors group/item"
                  >
                    <div className="p-2 bg-blue-100/60 rounded-lg text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 group-hover/item:text-blue-700">
                        ServiceNow Developer Course
                      </div>
                      <p className="text-[11px] text-slate-500 leading-tight">
                        21 Days · CSA & CAD Exam Ready
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/programs/genai-data-science-course"
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-teal-50/80 transition-colors group/item"
                  >
                    <div className="p-2 bg-amber-100/60 rounded-lg text-amber-600 group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 group-hover/item:text-amber-700">
                        Applied GenAI & Data Science
                      </div>
                      <p className="text-[11px] text-slate-500 leading-tight">
                        60 Days · LangChain, RAG & LLM Agents
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Placements Dropdown */}
            <div
              className="relative group py-1"
              onMouseEnter={() => setOpenDropdown('placements')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => navigate('/placements')}
                className={`flex items-center gap-1 hover:text-[#169BA2] transition-colors focus:outline-none py-1 cursor-pointer ${
                  location.pathname.startsWith('/placements') || location.pathname.startsWith('/success-stories') ? 'text-[#169BA2]' : ''
                }`}
              >
                <span>Placements</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#169BA2] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'placements' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 my-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Placement Support
                  </div>

                  <Link
                    to="/placements"
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-teal-50/80 text-xs font-bold text-slate-900 hover:text-[#169BA2] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Placement Overview</span>
                  </Link>

                  <Link
                    to="/placements/success-stories"
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-teal-50/80 text-xs font-bold text-slate-900 hover:text-[#169BA2] transition-colors"
                  >
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>Success Stories</span>
                  </Link>

                  <Link
                    to="/placements/how-it-works"
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-teal-50/80 text-xs font-bold text-slate-900 hover:text-[#169BA2] transition-colors"
                  >
                    <Briefcase className="w-4 h-4 text-amber-500" />
                    <span>Placement Process</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 5. Upcoming Batches (Trigger Popup Modal directly) */}
            <button
              type="button"
              onClick={() => onOpenUpcomingBatches?.()}
              className="hover:text-[#169BA2] transition-colors py-1 relative group flex items-center gap-1 text-slate-700 font-bold cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-500" />
              <span>Upcoming Batches</span>
            </button>

            {/* 6. Contact / Enquiry */}
            <Link
              to="/contact"
              className={`hover:text-[#169BA2] transition-colors py-1 relative group ${
                location.pathname === '/contact' ? 'text-[#169BA2]' : ''
              }`}
            >
              Contact
            </Link>

          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenComparison}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#169BA2] border border-slate-300 hover:border-[#169BA2] rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#169BA2]" />
              Compare Programs
            </button>
            <button
              onClick={() => onOpenEnquiry()}
              className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#169BA2] to-[#1E70BF] hover:from-[#13888e] hover:to-[#185fa3] rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Enquire Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#169BA2] rounded-md shadow-xs cursor-pointer"
            >
              Enquire
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMobileMenuOpen((prev) => !prev);
              }}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer relative z-20"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 pointer-events-none" />
              ) : (
                <Menu className="w-6 h-6 pointer-events-none" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Accordion Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="divide-y divide-slate-100">
              
              {/* Home */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-2 text-sm font-bold text-slate-800 hover:text-[#169BA2] flex items-center justify-between"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* About Us Accordion */}
              <div className="py-2">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full py-1 px-2 text-sm font-bold text-slate-800 flex items-center justify-between text-left cursor-pointer"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobileAboutOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 pr-2 pt-2 space-y-2 bg-slate-50/80 rounded-xl my-1 p-2">
                    <Link
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-800 hover:text-[#169BA2]"
                    >
                      • About Company
                    </Link>
                    <Link
                      to="/mentors"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-800 hover:text-blue-700"
                    >
                      • About Mentors
                    </Link>
                  </div>
                )}
              </div>

              {/* Programs Accordion */}
              <div className="py-2">
                <button
                  onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                  className="w-full py-1 px-2 text-sm font-bold text-slate-800 flex items-center justify-between text-left cursor-pointer"
                >
                  <span>Programs</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobileProgramsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileProgramsOpen && (
                  <div className="pl-4 pr-2 pt-2 space-y-2 bg-slate-50/80 rounded-xl my-1 p-2">
                    <Link
                      to="/programs"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-bold text-[#169BA2] hover:underline pb-1 border-b border-slate-200"
                    >
                      • All Programs Overview
                    </Link>
                    <Link
                      to="/programs/it-process-manager-course"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-700 hover:text-emerald-700"
                    >
                      • IT Process Manager Course
                    </Link>
                    <Link
                      to="/programs/servicenow-developer-course"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-700 hover:text-blue-700"
                    >
                      • ServiceNow Developer Course
                    </Link>
                    <Link
                      to="/programs/genai-data-science-course"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-700 hover:text-amber-700"
                    >
                      • Applied GenAI & Data Science
                    </Link>
                  </div>
                )}
              </div>

              {/* Placements Accordion */}
              <div className="py-2">
                <button
                  onClick={() => setMobilePlacementsOpen(!mobilePlacementsOpen)}
                  className="w-full py-1 px-2 text-sm font-bold text-slate-800 flex items-center justify-between text-left cursor-pointer"
                >
                  <span>Placements</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobilePlacementsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobilePlacementsOpen && (
                  <div className="pl-4 pr-2 pt-2 space-y-2 bg-slate-50/80 rounded-xl my-1 p-2">
                    <Link
                      to="/placements"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-bold text-slate-900 hover:text-[#169BA2]"
                    >
                      • Placement Overview
                    </Link>
                    <Link
                      to="/placements/success-stories"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-700 hover:text-[#169BA2]"
                    >
                      • Success Stories
                    </Link>
                    <Link
                      to="/placements/how-it-works"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-700 hover:text-[#169BA2]"
                    >
                      • Placement Process
                    </Link>
                  </div>
                )}
              </div>

              {/* Upcoming Batches Popup Trigger on Mobile */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenUpcomingBatches?.();
                }}
                className="w-full py-2.5 px-2 text-sm font-bold text-teal-700 flex items-center justify-between text-left cursor-pointer"
              >
                <span>Upcoming Batches</span>
                <Calendar className="w-4 h-4 text-teal-600" />
              </button>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-2 text-sm font-bold text-slate-800 hover:text-[#169BA2] flex items-center justify-between"
              >
                <span>Contact / Enquiry</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

            </div>

            {/* Mobile Legal Quick Links */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-1 text-[11px] text-slate-500 font-medium text-center">
              <Link
                to="/privacy-policy"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:underline py-1"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:underline py-1"
              >
                Terms
              </Link>
              <Link
                to="/refund-policy"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:underline py-1"
              >
                Refund Policy
              </Link>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="w-full py-2.5 text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#169BA2]" />
                <span>Track Recommender Quiz</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 text-sm font-bold text-white bg-[#169BA2] hover:bg-[#128288] rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}
      </header>
    </>
  );
};
