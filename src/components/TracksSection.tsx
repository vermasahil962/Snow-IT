import React from 'react';
import { TRACKS_DATA } from '../data/content';
import { Clock, UserCheck, Check, ArrowRight, ShieldCheck, Award, Zap, Sparkles } from 'lucide-react';

interface TracksSectionProps {
  onOpenTrackDetail: (trackId: string) => void;
  onOpenEnquiry: (trackId?: string) => void;
}

export const TracksSection: React.FC<TracksSectionProps> = ({
  onOpenTrackDetail,
  onOpenEnquiry,
}) => {
  return (
    <section id="tracks" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* H2 Title & Subhead */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#169BA2] bg-teal-50 border border-teal-200/80 px-3.5 py-1 rounded-full inline-block">
            Specialized Fast-Track Curriculums
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Three Career Tracks, One Institute
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Choose the track that fits your background. Each box below links to the full program page for complete curriculum, batch dates, and fees.
          </p>
        </div>

        {/* 3 Career Track Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TRACKS_DATA.map((track) => {
            const isNoCoding = track.noCodingRequired;
            const isGenAI = track.id === 'applied-genai-data-science';

            return (
              <div
                key={track.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${
                  isNoCoding
                    ? 'border-teal-300 hover:border-teal-500'
                    : isGenAI
                    ? 'border-amber-300 hover:border-amber-500'
                    : 'border-blue-300 hover:border-blue-500'
                }`}
              >
                {/* Top Highlight Banner / Badge */}
                <div
                  className={`px-6 py-2.5 text-xs font-extrabold flex items-center justify-between ${
                    isNoCoding
                      ? 'bg-teal-600 text-white'
                      : isGenAI
                      ? 'bg-amber-600 text-white'
                      : 'bg-[#1E70BF] text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5 uppercase tracking-wide">
                    <Zap className="w-3.5 h-3.5" />
                    {isNoCoding
                      ? 'No Coding Required'
                      : isGenAI
                      ? 'AI & Data Track'
                      : 'Developer Certification Track'}
                  </span>
                  <span className="font-bold opacity-90">{track.duration}</span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-5 flex-1">
                  
                  {/* Track Header & Mentor */}
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#169BA2] transition-colors">
                      {track.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 rounded-md text-slate-800">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        Duration: {track.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-teal-50 text-teal-800 border border-teal-200/60 rounded-md">
                        <img
                          src={
                            track.mentorName.includes('Lavi')
                              ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=120&h=120&q=80'
                              : track.mentorName.includes('Disha')
                              ? 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&crop=faces&w=120&h=120&q=80'
                              : 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=120&h=120&q=80'
                          }
                          alt={track.mentorName}
                          referrerPolicy="no-referrer"
                          className="w-4 h-4 rounded-full object-cover object-center bg-slate-200"
                        />
                        Mentor: {track.mentorName}
                      </span>
                    </div>
                  </div>

                  {/* Highlights / Badges */}
                  <div className="space-y-2 pt-1">
                    {track.noCodingRequired && (
                      <div className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-lg">
                        ✨ No Coding Required — Fast Track to IT
                      </div>
                    )}
                    {track.certificationGuidance && (
                      <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold rounded-lg">
                        📜 Certification Guidance: {track.certificationGuidance}
                      </div>
                    )}
                    {track.format && (
                      <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold rounded-lg">
                        📹 Format: {track.format}
                      </div>
                    )}
                    {track.salaryRange && (
                      <div className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 text-slate-900 text-xs font-bold rounded-lg">
                        💼 Salary Range: {track.salaryRange}
                      </div>
                    )}
                  </div>

                  {/* Key Topics List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Key Topics Covered:
                    </span>
                    <ul className="space-y-2">
                      {track.keyTopics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-[#169BA2] shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-3">
                  <button
                    onClick={() => onOpenTrackDetail(track.id)}
                    className="w-full py-3 px-4 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 hover:border-slate-400 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 group"
                  >
                    <span>View Full Details →</span>
                    <ArrowRight className="w-4 h-4 text-[#169BA2] transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(track.id)}
                    className={`w-full py-3 px-4 text-sm font-extrabold text-white rounded-xl shadow-md transition-all flex items-center justify-center gap-2 ${
                      isNoCoding
                        ? 'bg-[#169BA2] hover:bg-[#128288]'
                        : isGenAI
                        ? 'bg-amber-600 hover:bg-amber-700'
                        : 'bg-[#1E70BF] hover:bg-[#185fa3]'
                    }`}
                  >
                    <span>Enquire for {track.shortTitle}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
