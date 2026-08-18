import React, { useState, useEffect } from 'react';
import { SUCCESS_STORIES } from '../data/content';
import { Award, Building2, TrendingUp, ArrowRight, Quote, CheckCircle, ChevronLeft, ChevronRight, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { LogoMarquee } from './LogoMarquee';

interface SuccessStoriesProps {
  onOpenEnquiry: (trackId?: string) => void;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenEnquiry }) => {
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filteredStories = selectedTrack === 'all'
    ? SUCCESS_STORIES
    : SUCCESS_STORIES.filter(s => s.trackId === selectedTrack);

  // Reset index if filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedTrack]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredStories.length - 1 ? 0 : prev + 1));
  };

  // Indian candidate portraits mapped by ID / index
  const candidateAvatars: Record<string, string> = {
    '1': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', // Priya Sharma
    '2': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', // Rohan Kulkarni
    '3': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80', // Ananya Roy
    '4': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', // Vikas Verma
    '5': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80', // Siddharth Nair
    '6': 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=300&q=80', // Megha Patel
  };

  const currentStory = filteredStories[currentIndex] || filteredStories[0];
  const avatarSrc = candidateAvatars[currentStory?.id] || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80';

  return (
    <section id="success-stories" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#169BA2] bg-teal-50 border border-teal-200/80 px-3.5 py-1 rounded-full inline-block">
            Verified Career Transitions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Success Stories
          </h2>
          <p className="text-sm text-slate-500 italic">
            [Dummy data — candidate placement figures & alumni highlights]
          </p>
        </div>

        {/* Total Placements Stat Bar */}
        <div className="mt-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-teal-400">
              850+
            </span>
            <p className="text-lg font-extrabold text-white">
              candidates placed since 2021
            </p>
            <p className="text-xs text-slate-400">
              Across IT Process Management, ServiceNow & GenAI tracks
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <div className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-center">
              <span className="text-lg font-black text-amber-400">120%</span>
              <p className="text-[11px] text-slate-300 font-medium">Avg Salary Hike</p>
            </div>
            <div className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-center">
              <span className="text-lg font-black text-teal-300">21-60 Days</span>
              <p className="text-[11px] text-slate-300 font-medium">Fast-Track Duration</p>
            </div>
            <div className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-center">
              <span className="text-lg font-black text-blue-400">
                5–40+ <span className="text-xs font-bold text-blue-400">LPA</span>
              </span>
              <p className="text-[11px] text-slate-300 font-medium">Salary Range</p>
            </div>
          </div>
        </div>

        {/* Company Logo Hiring Partners Marquee */}
        <div className="mt-12 py-8 px-2 sm:px-6 bg-slate-50/90 rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="text-center mb-6 px-4">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#169BA2] bg-teal-50 px-3 py-1 rounded-full border border-teal-100/60">
              Trusted Enterprise Hiring Network
            </span>
            <h3 className="text-sm sm:text-base font-black text-slate-900 mt-2">
              Alumni Placed At Top Enterprises & Tech Majors
            </h3>
          </div>
          <LogoMarquee />
        </div>

        {/* ========================================================================= */}
        {/* NEW PLACEMENT SECTION: HEADING + SINGLE COLUMN WITH LEFT & RIGHT BUTTONS */}
        {/* ========================================================================= */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          
          {/* Main Requested Heading */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full inline-block">
              Candidate Spotlight
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Recent Candidate Placements & Career Transitions
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Browse individual verified placement stories from our live Google Meet batches.
            </p>
          </div>

          {/* Track Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedTrack('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                selectedTrack === 'all'
                  ? 'bg-[#169BA2] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Tracks ({SUCCESS_STORIES.length})
            </button>
            <button
              onClick={() => setSelectedTrack('it-process-manager')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                selectedTrack === 'it-process-manager'
                  ? 'bg-[#169BA2] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              IT Process Manager
            </button>
            <button
              onClick={() => setSelectedTrack('servicenow-developer')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                selectedTrack === 'servicenow-developer'
                  ? 'bg-[#169BA2] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              ServiceNow Developer
            </button>
            <button
              onClick={() => setSelectedTrack('applied-genai-data-science')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                selectedTrack === 'applied-genai-data-science'
                  ? 'bg-[#169BA2] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Applied GenAI & Data Science
            </button>
          </div>

          {/* Single Column Placement Card Container with Left & Right Buttons */}
          <div className="max-w-3xl mx-auto relative px-2 sm:px-12">
            
            {/* Left Button (Desktop Floating / Accessible) */}
            <button
              onClick={handlePrev}
              aria-label="Previous Placement"
              className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#169BA2] text-slate-700 hover:text-white border-2 border-slate-200 hover:border-[#169BA2] shadow-xl flex items-center justify-center transition-all cursor-pointer group"
              title="Previous Candidate Placement"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Right Button (Desktop Floating / Accessible) */}
            <button
              onClick={handleNext}
              aria-label="Next Placement"
              className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#169BA2] text-slate-700 hover:text-white border-2 border-slate-200 hover:border-[#169BA2] shadow-xl flex items-center justify-center transition-all cursor-pointer group"
              title="Next Candidate Placement"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* The Single Column Placement Showcase Card */}
            {currentStory && (
              <div className="bg-gradient-to-b from-white to-slate-50 border-2 border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-lg relative overflow-hidden transition-all duration-300">
                
                {/* Top Badge Strip & Counter */}
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300/80 flex items-center gap-1.5 shadow-2xs">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Verified Offer Letter
                    </span>
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200/60">
                      {currentStory.batch}
                    </span>
                  </div>

                  <div className="text-xs font-extrabold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                    Candidate <span className="text-[#169BA2] font-black">{currentIndex + 1}</span> of <span className="text-slate-800">{filteredStories.length}</span>
                  </div>
                </div>

                {/* Candidate Info Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#169BA2] shadow-md shrink-0 bg-slate-100">
                      <img
                        src={avatarSrc}
                        alt={currentStory.candidateName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
                    </div>

                    <div>
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                        {currentStory.candidateName}
                      </h4>
                      <p className="text-xs font-bold text-teal-700 mt-0.5">
                        {currentStory.batch}
                      </p>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>Placed at: <strong className="text-slate-900 font-extrabold">{currentStory.companyName}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* CTC and Hike Highlight Box */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 text-right self-stretch sm:self-auto shadow-xs">
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Secured Package
                    </span>
                    <span className="block text-2xl font-black text-slate-900">
                      {currentStory.ctc}
                    </span>
                    <span className="inline-block mt-1 px-2.5 py-0.5 bg-emerald-500 text-white font-black text-xs rounded-md shadow-2xs">
                      {currentStory.hike}
                    </span>
                  </div>
                </div>

                {/* Transition Flow Banner */}
                <div className="mt-6 p-4 bg-teal-50/80 border border-teal-200/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Previous Background</span>
                    <p className="text-slate-800 font-bold text-sm">
                      {currentStory.prevRole || 'Fresher / Non-IT Background'}
                    </p>
                  </div>

                  <div className="hidden sm:block text-[#169BA2] font-black text-lg">➔</div>

                  <div className="space-y-0.5 sm:text-right">
                    <span className="text-teal-700 font-bold uppercase tracking-wider text-[10px]">New Placed Role</span>
                    <p className="text-[#1E70BF] font-black text-sm">
                      {currentStory.roleTitle} @ {currentStory.companyName}
                    </p>
                  </div>
                </div>

                {/* Candidate Testimonial Quote */}
                <div className="mt-6 bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 relative shadow-2xs">
                  <Quote className="w-7 h-7 text-teal-400/40 absolute top-3 right-3" />
                  <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed relative z-10 font-medium">
                    "{currentStory.quote}"
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Verified by Snow IT Placement Cell
                  </span>

                  <button
                    onClick={() => onOpenEnquiry(currentStory.trackId)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#169BA2] to-[#1E70BF] hover:from-[#13888e] hover:to-[#185fa3] text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Enrol in Same Career Track</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

            {/* Bottom Controls: Explicit Left and Right Buttons + Dots */}
            <div className="mt-8 flex items-center justify-between max-w-lg mx-auto">
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-[#169BA2] hover:bg-teal-50 text-xs font-black text-slate-800 hover:text-[#169BA2] transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {filteredStories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to candidate ${i + 1}`}
                    className={`transition-all rounded-full cursor-pointer ${
                      currentIndex === i
                        ? 'w-6 h-2.5 bg-[#169BA2]'
                        : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-[#169BA2] hover:bg-teal-50 text-xs font-black text-slate-800 hover:text-[#169BA2] transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Link - Mandatory text: Read All Placement Stories → */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-extrabold text-[#169BA2] hover:text-white bg-teal-50 hover:bg-[#169BA2] border border-teal-200/80 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <span>Read All Placement Stories →</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
