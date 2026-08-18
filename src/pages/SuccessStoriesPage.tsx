import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  Briefcase 
} from 'lucide-react';
import { SUCCESS_STORIES } from '../data/content';

interface SuccessStoriesPageProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenCounsellor: () => void;
}

export const SuccessStoriesPage: React.FC<SuccessStoriesPageProps> = ({
  onOpenEnquiry,
  onOpenCounsellor,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredStories = SUCCESS_STORIES.filter((story) => {
    const matchesTrack = selectedTrack === 'all' || story.trackId === selectedTrack;
    const matchesSearch = 
      searchQuery === '' ||
      story.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.roleTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.prevRole.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTrack && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-950 via-[#0A2540] to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-teal-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/placements" className="hover:text-white transition-colors">Placements</Link>
            <span>/</span>
            <span className="text-white">Success Stories</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold">
            <Users className="w-3.5 h-3.5" />
            <span>Alumni Career Transitions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Real Candidates. Real Career Transformations.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Discover how freshers, career-gap candidates, and non-IT professionals successfully transitioned into high-growth IT roles with industry packages.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Track Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedTrack('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedTrack === 'all'
                  ? 'bg-[#169BA2] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Tracks ({SUCCESS_STORIES.length})
            </button>
            <button
              onClick={() => setSelectedTrack('it-process-manager')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedTrack === 'it-process-manager'
                  ? 'bg-[#169BA2] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              IT Process Manager
            </button>
            <button
              onClick={() => setSelectedTrack('servicenow-developer')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedTrack === 'servicenow-developer'
                  ? 'bg-[#169BA2] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              ServiceNow Developer
            </button>
            <button
              onClick={() => setSelectedTrack('applied-genai-data-science')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedTrack === 'applied-genai-data-science'
                  ? 'bg-[#169BA2] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              GenAI & Data Science
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search candidate, company, role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#169BA2] focus:bg-white"
            />
          </div>

        </div>

        {/* Stories Grid */}
        {filteredStories.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
            <p className="text-slate-500 text-sm">No success stories match your filter criteria.</p>
            <button
              onClick={() => { setSelectedTrack('all'); setSearchQuery(''); }}
              className="text-xs font-bold text-[#169BA2] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-[#169BA2] hover:shadow-xl transition-all p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* Top CTC & Hike */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-black">
                      {story.ctc} ({story.hike})
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      {story.batch}
                    </span>
                  </div>

                  {/* Candidate Info */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {story.candidateName}
                    </h3>
                    <div className="text-xs text-slate-500 mt-1 flex flex-col gap-0.5">
                      <span>Previous: <strong className="text-slate-700">{story.prevRole}</strong></span>
                      <span>Placed as: <strong className="text-teal-700 font-extrabold">{story.roleTitle}</strong></span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700 italic leading-relaxed">
                    "{story.quote}"
                  </div>
                </div>

                {/* Company & Placement Badge */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-500">
                    Placed at: <strong className="text-slate-900 text-sm font-black">{story.companyName}</strong>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry(story.trackId)}
                    className="text-xs font-bold text-[#169BA2] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>View Track</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-[#11696E] via-[#169BA2] to-[#1E70BF] rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Be our next success story in 21 to 60 days
            </h3>
            <p className="text-xs sm:text-sm text-teal-100">
              No matter if you're a non-IT graduate or restarting after a gap, our structured mentor tracks are tailored for your background.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry()}
            className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer shrink-0"
          >
            Apply for Next Batch
          </button>
        </div>

      </div>
    </div>
  );
};
