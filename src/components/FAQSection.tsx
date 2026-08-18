import React, { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { ChevronDown, HelpCircle, Search, MessageSquare, PhoneCall } from 'lucide-react';

interface FAQSectionProps {
  onOpenEnquiry: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEnquiry }) => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#169BA2] bg-teal-50 border border-teal-200/80 px-3.5 py-1 rounded-full inline-block">
            Clear Answers & Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Everything you need to know about eligibility, placement assistance, coding requirements, and class formats.
          </p>
        </div>

        {/* Search Input Filter */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. placement, coding, freshers, schedule)..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#169BA2] shadow-xs"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-8 space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-teal-50 text-[#169BA2]' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal border-t border-slate-100 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Doubt Clearing Prompt */}
        <div className="mt-10 bg-white border border-slate-200/80 rounded-2xl p-6 text-center max-w-xl mx-auto space-y-4 shadow-xs">
          <p className="text-sm font-bold text-slate-800">
            Have a specific doubt about your career gap or degree eligibility?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+919560721315"
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-extrabold text-white bg-[#169BA2] hover:bg-[#13888e] rounded-xl transition-all shadow-xs inline-flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91 95607 21315</span>
            </a>
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask Counsellor Online</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
