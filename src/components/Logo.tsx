import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  lightText = false,
}) => {
  // Size mapping for the SVG emblem
  const iconSizes = {
    sm: { w: 22, h: 26 },
    md: { w: 32, h: 36 },
    lg: { w: 46, h: 52 },
    xl: { w: 60, h: 68 },
  };

  const { w, h } = iconSizes[size];

  // SVG Emblem matching exact brand logo geometry provided by the user
  const IconMark = (
    <svg
      width={w}
      height={h}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
      aria-label="Snow IT Expert Institute Logo Mark"
    >
      {/* Sunburst Rays (Copper/Gold radial lines originating above cap) */}
      <g stroke="#D49A83" strokeWidth="1.8" strokeLinecap="round">
        <line x1="100" y1="52" x2="100" y2="12" />
        <line x1="88" y1="54" x2="78" y2="18" />
        <line x1="112" y1="54" x2="122" y2="18" />
        <line x1="77" y1="59" x2="58" y2="28" />
        <line x1="123" y1="59" x2="142" y2="28" />
        <line x1="68" y1="66" x2="41" y2="41" />
        <line x1="132" y1="66" x2="159" y2="41" />
        <line x1="61" y1="75" x2="27" y2="56" />
        <line x1="139" y1="75" x2="173" y2="56" />
        <line x1="56" y1="85" x2="17" y2="72" />
        <line x1="144" y1="85" x2="183" y2="72" />
      </g>

      {/* Graduation Cap Top Diamond - Left Facet (Light Teal) */}
      <path
        d="M 100 52 L 10 78 L 100 104 Z"
        fill="#34C5C3"
      />

      {/* Graduation Cap Top Diamond - Right Facet (Darker Teal) */}
      <path
        d="M 100 52 L 190 78 L 100 104 Z"
        fill="#22A7A5"
      />

      {/* Fountain Pen Nib Cutout in Center (White) */}
      <circle cx="100" cy="78" r="4" fill="#FFFFFF" />
      <polygon points="100,76 172,77 172,79 100,80" fill="#FFFFFF" />
      <circle cx="100" cy="78" r="2" fill="#34C5C3" />

      {/* Graduation Cap Skullcap / Base */}
      <path
        d="M 44 88 L 44 102 C 44 116, 156 116, 156 102 L 156 88"
        fill="#22A7A5"
      />

      {/* Tassel on Right Side */}
      <path
        d="M 162 78 Q 165 92 166 106"
        stroke="#34C5C3"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="166" cy="110" r="3.5" fill="#34C5C3" />
      <path
        d="M 166 113 Q 170 125 168 132"
        stroke="#34C5C3"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Wings / Leaf / Wave Layers (3 Pairs in Medium Ocean Blue) */}
      {/* Upper Pair */}
      <path
        d="M 6 108 C 32 110 74 128 96 166 C 70 148 34 136 6 108 Z"
        fill="#3A8ECD"
      />
      <path
        d="M 194 108 C 168 110 126 128 104 166 C 130 148 166 136 194 108 Z"
        fill="#3A8ECD"
      />

      {/* Middle Pair */}
      <path
        d="M 6 134 C 32 136 74 154 96 192 C 70 174 34 162 6 134 Z"
        fill="#3A8ECD"
      />
      <path
        d="M 194 134 C 168 136 126 154 104 192 C 130 174 166 162 194 134 Z"
        fill="#3A8ECD"
      />

      {/* Bottom Pair */}
      <path
        d="M 36 162 C 56 164 78 182 96 216 C 78 196 56 184 36 162 Z"
        fill="#3A8ECD"
      />
      <path
        d="M 164 162 C 144 164 122 182 104 216 C 122 196 144 184 164 162 Z"
        fill="#3A8ECD"
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center ${className}`}>{IconMark}</div>;
  }

  const textColorClass = lightText ? 'text-[#31B9B8]' : 'text-[#2EA8A7]';
  const subLineColor = lightText ? 'bg-[#3A8ECD]' : 'bg-[#1D578B]';

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {IconMark}
        <div className="mt-2 flex flex-col items-center w-full">
          <span className={`font-black tracking-tight text-lg sm:text-2xl uppercase ${textColorClass}`}>
            SNOW IT EXPERT
          </span>
          <div className={`h-[2.5px] w-full my-1 rounded-full ${subLineColor}`} />
          <span className={`font-black tracking-widest text-xl sm:text-3xl uppercase ${textColorClass}`}>
            INSTITUTE
          </span>
        </div>
      </div>
    );
  }

  // Default: Horizontal
  return (
    <div className={`inline-flex items-center gap-2 sm:gap-2.5 ${className}`}>
      {IconMark}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-black tracking-tight text-xs sm:text-sm lg:text-base uppercase font-sans ${textColorClass}`}
          style={{ letterSpacing: '0.02em' }}
        >
          SNOW IT EXPERT
        </span>
        <div className={`h-[1.5px] sm:h-[2px] w-full my-[2px] sm:my-[3px] rounded-full ${subLineColor}`} />
        <span
          className={`font-black tracking-wider text-sm sm:text-base lg:text-lg uppercase font-sans ${textColorClass}`}
          style={{ letterSpacing: '0.12em' }}
        >
          INSTITUTE
        </span>
      </div>
    </div>
  );
};

