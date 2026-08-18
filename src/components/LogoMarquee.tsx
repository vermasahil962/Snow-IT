import React from 'react';
import { COMPANY_LOGOS } from '../data/content';
import { CompanyLogo } from './BrandLogos';

interface LogoMarqueeProps {
  speed?: string;
  className?: string;
  showFadeGradients?: boolean;
}

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  className = "",
  showFadeGradients = true,
}) => {
  // Duplicate the logos array to achieve a seamless, continuous infinite loop without blank gaps
  const marqueeItems = [...COMPANY_LOGOS, ...COMPANY_LOGOS];

  return (
    <div className={`relative w-full overflow-hidden select-none py-2 ${className}`}>
      {/* Left and Right Edge Fade Masks */}
      {showFadeGradients && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50/95 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50/95 to-transparent z-10" />
        </>
      )}

      {/* Looping Marquee Track moving Right to Left */}
      <div className="flex w-max animate-marquee space-x-4 sm:space-x-6 items-center">
        {marqueeItems.map((company, index) => (
          <div
            key={`${company}-${index}`}
            className="flex-shrink-0 w-44 sm:w-52 h-18 bg-white rounded-2xl border border-slate-200/90 hover:border-[#169BA2] shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center p-3.5 group cursor-default"
            title={`${company} - Hiring Partner`}
          >
            <div className="w-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <CompanyLogo nameOrId={company} className="h-7 sm:h-8 w-auto max-w-[135px] object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
