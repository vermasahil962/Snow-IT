import React from 'react';
import { MessageCircle, Send, Phone } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenEnquiry: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 p-3 shadow-2xl flex items-center justify-between gap-3 backdrop-blur-md">
      <a
        href="https://wa.me/919560721315?text=Hi%2C%20I%20want%20to%20enquire%20about%20Snow%20IT%20Expert%20Institute%20programs."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenEnquiry}
        className="flex-1 py-2.5 px-3 bg-gradient-to-r from-teal-400 to-cyan-300 text-slate-900 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-md"
      >
        <Send className="w-4 h-4" />
        <span>Enquire Now</span>
      </button>
    </div>
  );
};
