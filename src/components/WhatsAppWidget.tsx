import React, { useState } from 'react';
import { X, Send, Sparkles, Clock, CheckCheck, MessageSquare } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState(
    'Hi Snow IT Expert Institute, I would like to enquire about your IT training programs with placement assistance.'
  );

  const whatsappNumber = '919560721315';

  const quickPrompts = [
    'I want to enquire about IT Process Manager (No Coding)',
    'Tell me about ServiceNow Developer (CSA/CAD)',
    'Enquire for Applied GenAI & Data Science (60 Days)',
    'I want to speak with a Career Counsellor',
  ];

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || userMessage;
    const encoded = encodeURIComponent(finalMsg);
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 font-sans">
      {/* Popover Chat Box */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 relative flex items-center gap-3">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1.5 text-slate-200 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Avatar / Brand Icon */}
            <div className="relative shrink-0">
              <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-lg">
                ❄️
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full" />
            </div>

            {/* Info */}
            <div>
              <h4 className="text-sm font-black text-white leading-tight">
                Snow IT Expert Institute
              </h4>
              <p className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5 font-medium">
                <Clock className="w-3 h-3 text-emerald-300" />
                Replies typically within 5 minutes
              </p>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#E5DDD5]/40 space-y-3 max-h-[340px] overflow-y-auto">
            
            {/* Institute Greeting Bubble */}
            <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-xs border border-slate-200/80 max-w-[88%] text-xs text-slate-800 space-y-1">
              <div className="flex items-center justify-between font-bold text-[11px] text-[#075E54]">
                <span>Admissions Team</span>
                <span className="text-[10px] text-slate-400">Just now</span>
              </div>
              <p className="leading-relaxed">
                Hello! 👋 Welcome to <strong>Snow IT Expert Institute</strong>.
              </p>
              <p className="text-slate-600">
                How can we help you accelerate your IT career today? Select an option or type your question below.
              </p>
            </div>

            {/* Quick Option Pills */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Quick Enquiries:
              </p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setUserMessage(prompt);
                    handleSend(prompt);
                  }}
                  className="w-full text-left p-2.5 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl text-xs font-semibold text-slate-700 hover:text-emerald-900 transition-all flex items-center justify-between group shadow-2xs"
                >
                  <span className="line-clamp-1">{prompt}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-1.5" />
                </button>
              ))}
            </div>

            {/* Editable Custom Message Input */}
            <div className="pt-2">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Custom Pre-filled Message:
              </label>
              <div className="relative">
                <textarea
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  rows={2}
                  className="w-full p-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#25D366] focus:border-transparent outline-none resize-none text-slate-800 font-medium"
                  placeholder="Type your message..."
                />
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="p-3 bg-white border-t border-slate-200">
            <button
              onClick={() => handleSend()}
              className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-black rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Start WhatsApp Chat (+91 95607 21315)</span>
            </button>
            <p className="text-[10px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
              <CheckCheck className="w-3 h-3 text-emerald-600" />
              Official Admissions WhatsApp Hotline
            </p>
          </div>

        </div>
      )}

      {/* Main Trigger Button - Clean Circular WhatsApp Icon Only */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer z-50 border-2 border-white/20"
        aria-label="Open WhatsApp Chat Widget"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Icon Only */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current shrink-0 relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Notification badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 text-slate-900 border-2 border-white text-[10px] font-black rounded-full flex items-center justify-center animate-bounce z-20">
          1
        </span>
      </button>
    </div>
  );
};
