import React, { useState, useEffect } from 'react';
import { X, BookOpen, Search, ArrowRight, Sparkles, Tag, Clock } from 'lucide-react';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (trackId?: string) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'servicenow' | 'itsm' | 'genai'>('all');

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

  const articles = [
    {
      id: 'servicenow-csa-cad-guide',
      category: 'servicenow',
      categoryLabel: 'ServiceNow Dev',
      title: 'How to Crack ServiceNow CSA & CAD Certification in 21 Days',
      snippet: 'A step-by-step roadmap for non-coders and IT professionals to master Incident Management, Workflow Editors, Business Rules, and Scripting.',
      readTime: '6 min read',
      trackId: 'servicenow-developer',
    },
    {
      id: 'it-process-manager-no-coding',
      category: 'itsm',
      categoryLabel: 'IT Process Manager',
      title: 'ITIL 4 & ITSM Incident Management Interview Questions Top 25 (2026)',
      snippet: 'Real scenario questions asked by MNCs like Wipro, Infosys, and Accenture for Incident, Change, and Major Incident Manager roles.',
      readTime: '8 min read',
      trackId: 'it-process-manager',
    },
    {
      id: 'genai-data-science-roadmap',
      category: 'genai',
      categoryLabel: 'GenAI & Data Science',
      title: 'Building Enterprise RAG Pipelines & LangChain Apps in 60 Days',
      snippet: 'Learn how vector databases, LLM fine-tuning, and Python AI agents are opening ₹12–₹26 LPA opportunities for tech graduates.',
      readTime: '10 min read',
      trackId: 'applied-genai-data-science',
    },
  ];

  const filtered = activeTab === 'all' 
    ? articles 
    : articles.filter(a => a.category === activeTab);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 cursor-default"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 relative">
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

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold rounded-full mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SEO Content Engine & Career Guides (/blog)</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Snow IT Expert Resources & Interview Guides
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Free high-converting industry articles, salary trends, and interview prep scenario banks.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-5">
            {[
              { id: 'all', label: 'All Articles' },
              { id: 'itsm', label: 'IT Process Manager' },
              { id: 'servicenow', label: 'ServiceNow Developer' },
              { id: 'genai', label: 'GenAI & Data Science' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#169BA2] text-white shadow-md'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-5 max-h-[60vh] overflow-y-auto bg-slate-50">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#169BA2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-bold">
                  <span className="px-2 py-0.5 bg-teal-50 text-[#169BA2] rounded-md border border-teal-100">
                    {item.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {item.readTime}
                  </span>
                </div>
                <h4 className="text-sm font-black text-slate-900 leading-snug hover:text-[#169BA2] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.snippet}
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry(item.trackId);
                }}
                className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#169BA2] hover:text-[#128288] flex items-center justify-between group"
              >
                <span>Read Full Guide & Syllabus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500 hidden sm:block">
            Want 1-on-1 career guidance for your profile?
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-black text-white bg-[#169BA2] hover:bg-[#128288] rounded-xl shadow-xs"
          >
            Enquire For Free Career Session →
          </button>
        </div>
      </div>
    </div>
  );
};
