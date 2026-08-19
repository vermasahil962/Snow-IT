import React, { useState, useEffect } from 'react';
import { SUCCESS_STORIES } from '../data/content';
import { Award, Building2, TrendingUp, ArrowRight, Quote, CheckCircle, ChevronLeft, ChevronRight, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoMarquee } from './LogoMarquee';

interface SuccessStoriesProps {
  onOpenEnquiry: (trackId?: string) => void;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenEnquiry }) => {
  const [[currentIndex, direction], setPage] = useState<[number, number]>([0, 0]);

  const filteredStories = SUCCESS_STORIES;

  const paginate = (newDirection: number) => {
    if (filteredStories.length <= 1) return;
    const nextIdx = (currentIndex + newDirection + filteredStories.length) % filteredStories.length;
    setPage([nextIdx, newDirection]);
  };

  const handlePrev = () => paginate(-1);
  const handleNext = () => paginate(1);

  // Verified Indian candidate portraits with face-centered crop
  const candidateAvatars: Record<string, string> = {
    '1': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=300&h=300&q=80', // Priya Sharma
    '2': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=300&h=300&q=80', // Rohan Kulkarni
    '3': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&crop=faces&w=300&h=300&q=80', // Ananya Roy
    '4': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces&w=300&h=300&q=80', // Vikas Verma
    '5': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&crop=faces&w=300&h=300&q=80', // Siddharth Nair
    '6': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=faces&w=300&h=300&q=80', // Megha Patel
  };

  const currentStory = filteredStories[currentIndex] || filteredStories[0];
  const avatarSrc = candidateAvatars[currentStory?.id] || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=300&h=300&q=80';

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 140 : -140,
      opacity: 0,
      scale: 0.94,
    }),
    center: {
      zIndex: 20,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      zIndex: 10,
      x: dir < 0 ? 140 : -140,
      opacity: 0,
      scale: 0.94,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="success-stories" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#169BA2] bg-teal-50 border border-teal-200/80 px-3.5 py-1 rounded-full inline-block">
            Verified Career Transitions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Placement Stories
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* RECENT PLACEMENT SECTION: CANDIDATE SPOTLIGHT CAROUSEL (TESTIMONIALS)     */}
        {/* ========================================================================= */}
        <div>
          {/* 3-Card Carousel Stage: [Previous Card] | [Sharp Center Card] | [Next Card] */}
          <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 py-4">
            
            {/* Left Chevron Navigation Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Placement"
              className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-[#169BA2] text-slate-800 hover:text-white border-2 border-slate-200 hover:border-[#169BA2] shadow-2xl flex items-center justify-center transition-all cursor-pointer group"
              title="Previous Candidate"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Right Chevron Navigation Button */}
            <button
              onClick={handleNext}
              aria-label="Next Placement"
              className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-[#169BA2] text-slate-800 hover:text-white border-2 border-slate-200 hover:border-[#169BA2] shadow-2xl flex items-center justify-center transition-all cursor-pointer group"
              title="Next Candidate"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Carousel Cards Flex Container */}
            <div className="flex items-center justify-center gap-4 lg:gap-6 overflow-hidden py-4">
              
              {/* 1. PREVIOUS CARD (Crisp Preview & Scaled Down, Slides smoothly) */}
              {filteredStories.length > 1 && (() => {
                const prevIdx = currentIndex === 0 ? filteredStories.length - 1 : currentIndex - 1;
                const prevStory = filteredStories[prevIdx];
                const prevAvatar = candidateAvatars[prevStory.id] || avatarSrc;

                return (
                  <motion.div
                    key={`prev-${prevStory.id}`}
                    initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                    animate={{ opacity: 0.65, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    onClick={handlePrev}
                    className="hidden xl:block w-[300px] shrink-0 hover:opacity-100 scale-90 hover:scale-95 transition-all duration-300 cursor-pointer select-none bg-white border border-slate-200 hover:border-teal-300 rounded-3xl p-5 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                      <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        Offer Verified
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">
                        {prevIdx + 1} of {filteredStories.length}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src={prevAvatar}
                        alt={prevStory.candidateName}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full object-cover border-2 border-slate-200 shrink-0 shadow-2xs"
                      />
                      <div className="min-w-0">
                        <h5 className="text-sm font-black text-slate-900 truncate">
                          {prevStory.candidateName}
                        </h5>
                        <p className="text-xs text-slate-500 font-medium truncate">
                          {prevStory.companyName}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 p-2.5 bg-slate-50 rounded-xl text-center">
                      <span className="text-sm font-black text-slate-900">{prevStory.ctc}</span>
                      <span className="ml-2 text-xs font-bold text-emerald-600">({prevStory.hike})</span>
                    </div>
                  </motion.div>
                );
              })()}

              {/* 2. CURRENT ACTIVE CARD (Sliding smoothly from left or right with AnimatePresence) */}
              <div className="w-full max-w-3xl shrink-0 relative overflow-hidden">
                <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                  {currentStory && (
                    <motion.div
                      key={currentStory.id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                          paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                          paginate(-1);
                        }
                      }}
                      className="w-full cursor-grab active:cursor-grabbing"
                    >
                      <div className="bg-gradient-to-b from-white to-slate-50 border-2 border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-xl relative overflow-hidden">
                        
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
                            <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-teal-400 to-cyan-400 shadow-md shrink-0">
                              <img
                                src={avatarSrc}
                                alt={currentStory.candidateName}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover object-center rounded-full bg-slate-100"
                              />
                              <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. NEXT CARD (Crisp Preview & Scaled Down, Slides smoothly) */}
              {filteredStories.length > 1 && (() => {
                const nextIdx = currentIndex === filteredStories.length - 1 ? 0 : currentIndex + 1;
                const nextStory = filteredStories[nextIdx];
                const nextAvatar = candidateAvatars[nextStory.id] || avatarSrc;

                return (
                  <motion.div
                    key={`next-${nextStory.id}`}
                    initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                    animate={{ opacity: 0.65, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    onClick={handleNext}
                    className="hidden xl:block w-[300px] shrink-0 hover:opacity-100 scale-90 hover:scale-95 transition-all duration-300 cursor-pointer select-none bg-white border border-slate-200 hover:border-teal-300 rounded-3xl p-5 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                      <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        Offer Verified
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">
                        {nextIdx + 1} of {filteredStories.length}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src={nextAvatar}
                        alt={nextStory.candidateName}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full object-cover border-2 border-slate-200 shrink-0 shadow-2xs"
                      />
                      <div className="min-w-0">
                        <h5 className="text-sm font-black text-slate-900 truncate">
                          {nextStory.candidateName}
                        </h5>
                        <p className="text-xs text-slate-500 font-medium truncate">
                          {nextStory.companyName}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 p-2.5 bg-slate-50 rounded-xl text-center">
                      <span className="text-sm font-black text-slate-900">{nextStory.ctc}</span>
                      <span className="ml-2 text-xs font-bold text-emerald-600">({nextStory.hike})</span>
                    </div>
                  </motion.div>
                );
              })()}

            </div>

          </div>

          {/* Link - Read All Placement Stories */}
          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-extrabold text-[#169BA2] hover:text-white bg-teal-50 hover:bg-[#169BA2] border border-teal-200/80 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <span>Read All Placement Stories →</span>
            </button>
          </div>
        </div>

        {/* Total Placements Stat Bar (Positioned Below Testimonials) */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
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

        {/* Company Logo Hiring Partners Marquee (Positioned Below Testimonials) */}
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

      </div>
    </section>
  );
};
