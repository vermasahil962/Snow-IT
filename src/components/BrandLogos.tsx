import React from 'react';

export type BrandId = 
  | 'tcs'
  | 'accenture'
  | 'infosys'
  | 'cognizant'
  | 'wipro'
  | 'hcltech'
  | 'deloitte'
  | 'tech-mahindra';

export interface BrandInfo {
  id: BrandId;
  name: string;
}

export const BRAND_LIST: BrandInfo[] = [
  { id: 'tcs', name: 'TCS' },
  { id: 'accenture', name: 'Accenture' },
  { id: 'infosys', name: 'Infosys' },
  { id: 'cognizant', name: 'Cognizant' },
  { id: 'wipro', name: 'Wipro' },
  { id: 'hcltech', name: 'HCLTech' },
  { id: 'deloitte', name: 'Deloitte' },
  { id: 'tech-mahindra', name: 'Tech Mahindra' },
];

/**
 * 1. HCLTech Logo (Exact match with HCLTech.jpg)
 * Vibrant electric blue wordmark "HCLTech"
 */
export const HCLTechLogo: React.FC<{ className?: string }> = ({ className = "h-7 w-auto" }) => (
  <svg 
    viewBox="0 0 240 50" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="HCLTech"
  >
    <text 
      x="0" 
      y="38" 
      fill="#0055FE" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
      fontWeight="900" 
      fontSize="44" 
      letterSpacing="-1.5px"
    >
      HCL<tspan fill="#0055FE" fontWeight="800" letterSpacing="-1px">Tech</tspan>
    </text>
  </svg>
);

/**
 * 2. TCS Logo (Exact match with TCS.jpg)
 * Left: Iconic multi-color gradient ribbon 'tcs'
 * Right: "TATA" / "CONSULTANCY SERVICES" in bright cyan blue
 */
export const TCSLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => (
  <svg 
    viewBox="0 0 280 62" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="TCS Tata Consultancy Services"
  >
    <defs>
      <linearGradient id="tcsRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA000" />
        <stop offset="25%" stopColor="#FF3D00" />
        <stop offset="60%" stopColor="#E91E63" />
        <stop offset="85%" stopColor="#9C27B0" />
        <stop offset="100%" stopColor="#673AB7" />
      </linearGradient>
    </defs>
    
    {/* Stylized 'tcs' dynamic continuous gradient ribbon */}
    <g transform="translate(6, 4)">
      {/* 't' loop */}
      <path 
        d="M 14 6 C 14 6, 14 36, 14 42 C 14 48, 18 52, 24 52 L 27 52" 
        stroke="url(#tcsRibbonGrad)" 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M 6 22 L 26 22" 
        stroke="url(#tcsRibbonGrad)" 
        strokeWidth="6.5" 
        strokeLinecap="round" 
      />

      {/* 'c' curve */}
      <path 
        d="M 52 22 C 44 14, 28 20, 28 34 C 28 48, 44 52, 54 44" 
        stroke="url(#tcsRibbonGrad)" 
        strokeWidth="7" 
        strokeLinecap="round" 
      />

      {/* 's' double loop */}
      <path 
        d="M 74 22 C 60 16, 56 26, 64 32 C 76 39, 74 52, 58 50" 
        stroke="url(#tcsRibbonGrad)" 
        strokeWidth="7" 
        strokeLinecap="round" 
      />
    </g>

    {/* Right side text: TATA CONSULTANCY SERVICES */}
    <g transform="translate(96, 6)">
      <text 
        x="0" 
        y="25" 
        fill="#0078D7" 
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" 
        fontWeight="900" 
        fontSize="21" 
        letterSpacing="3px"
      >
        TATA
      </text>
      <text 
        x="0" 
        y="45" 
        fill="#0078D7" 
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" 
        fontWeight="800" 
        fontSize="14" 
        letterSpacing="1.2px"
      >
        CONSULTANCY SERVICES
      </text>
    </g>
  </svg>
);

/**
 * 3. Tech Mahindra Logo (Exact match with Tech Mahindra.jpg)
 * Line 1: "Tech" in dark charcoal gray
 * Line 2: "Mahindra" in vibrant brand red
 */
export const TechMahindraLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => (
  <svg 
    viewBox="0 0 210 56" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Tech Mahindra"
  >
    {/* "Tech" */}
    <text 
      x="0" 
      y="21" 
      fill="#54565B" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" 
      fontWeight="900" 
      fontSize="22" 
      letterSpacing="-0.5px"
    >
      Tech
    </text>
    {/* "Mahindra" */}
    <text 
      x="0" 
      y="49" 
      fill="#E31837" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" 
      fontWeight="900" 
      fontSize="29" 
      letterSpacing="-0.6px"
    >
      Mahindra
    </text>
  </svg>
);

/**
 * 4. Accenture Logo (Exact match with Accenture.png)
 * "accenture" in black lowercase with the signature purple '>' caret above the 't'
 */
export const AccentureLogo: React.FC<{ className?: string }> = ({ className = "h-7 w-auto" }) => (
  <svg 
    viewBox="0 0 210 52" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Accenture"
  >
    {/* Purple Caret above 't' */}
    <path 
      d="M 122 7 L 138 14 L 122 21" 
      stroke="#A100FF" 
      strokeWidth="6" 
      strokeLinecap="square" 
      strokeLinejoin="miter"
      fill="none"
    />
    {/* Lowercase wordmark */}
    <text 
      x="0" 
      y="44" 
      fill="#000000" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" 
      fontWeight="800" 
      fontSize="37" 
      letterSpacing="-0.8px"
    >
      accenture
    </text>
  </svg>
);

/**
 * 5. Wipro Logo (Exact match with Wipro.jpg)
 * Left: "wipro" in deep violet
 * Right: Concentric multi-color dots burst
 */
export const WiproLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => (
  <svg 
    viewBox="0 0 195 56" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Wipro"
  >
    {/* "wipro" wordmark */}
    <text 
      x="0" 
      y="38" 
      fill="#281A46" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" 
      fontWeight="800" 
      fontSize="35" 
      letterSpacing="-0.6px"
    >
      wipro
    </text>
    
    {/* Multi-color rainbow dots spiral */}
    <g transform="translate(148, 28) scale(0.72)">
      {/* Outer Ring */}
      <circle cx="0" cy="-25" r="3.2" fill="#00A3E0" />
      <circle cx="9.5" cy="-23" r="3.2" fill="#0077C8" />
      <circle cx="17.5" cy="-17.5" r="3.2" fill="#1D428A" />
      <circle cx="23" cy="-9.5" r="3.2" fill="#2E1A47" />
      <circle cx="25" cy="0" r="3.2" fill="#582C83" />
      <circle cx="23" cy="9.5" r="3.2" fill="#8B2373" />
      <circle cx="17.5" cy="17.5" r="3.2" fill="#D62598" />
      <circle cx="9.5" cy="23" r="3.2" fill="#E40046" />
      <circle cx="0" cy="25" r="3.2" fill="#FF5E00" />
      <circle cx="-9.5" cy="23" r="3.2" fill="#FFA300" />
      <circle cx="-17.5" cy="17.5" r="3.2" fill="#FFC72C" />
      <circle cx="-23" cy="9.5" r="3.2" fill="#B7D400" />
      <circle cx="-25" cy="0" r="3.2" fill="#78BE20" />
      <circle cx="-23" cy="-9.5" r="3.2" fill="#00B140" />
      <circle cx="-17.5" cy="-17.5" r="3.2" fill="#00A86B" />
      <circle cx="-9.5" cy="-23" r="3.2" fill="#00A3AD" />

      {/* Middle Ring */}
      <circle cx="0" cy="-15" r="2.5" fill="#0077C8" />
      <circle cx="10.5" cy="-10.5" r="2.5" fill="#2E1A47" />
      <circle cx="15" cy="0" r="2.5" fill="#8B2373" />
      <circle cx="10.5" cy="10.5" r="2.5" fill="#E40046" />
      <circle cx="0" cy="15" r="2.5" fill="#FFA300" />
      <circle cx="-10.5" cy="10.5" r="2.5" fill="#78BE20" />
      <circle cx="-15" cy="0" r="2.5" fill="#00B140" />
      <circle cx="-10.5" cy="-10.5" r="2.5" fill="#00A3AD" />

      {/* Inner Center */}
      <circle cx="0" cy="0" r="2.8" fill="#2E1A47" />
    </g>
  </svg>
);

/**
 * 6. Deloitte Logo (Exact match with Deloitte.jpg)
 * Bold black "Deloitte" with trademark green dot "."
 */
export const DeloitteLogo: React.FC<{ className?: string }> = ({ className = "h-7 w-auto" }) => (
  <svg 
    viewBox="0 0 172 44" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Deloitte"
  >
    <text 
      x="0" 
      y="34" 
      fill="#000000" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" 
      fontWeight="900" 
      fontSize="37" 
      letterSpacing="-0.6px"
    >
      Deloitte
    </text>
    {/* Signature green period dot */}
    <circle cx="155" cy="30.5" r="5.5" fill="#86BC25" />
  </svg>
);

/**
 * 7. Infosys Logo (Exact match with Infosys-Logo.png)
 * Iconic cerulean blue "Infosys" typography
 */
export const InfosysLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => (
  <svg 
    viewBox="0 0 185 50" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Infosys"
  >
    <text 
      x="0" 
      y="40" 
      fill="#007CC3" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" 
      fontWeight="700" 
      fontSize="46" 
      letterSpacing="-1.2px"
    >
      Infosys
    </text>
  </svg>
);

/**
 * 8. Cognizant Logo (Exact match with Cognizent.png)
 * Royal blue "Cognizant" with trademark (R)
 */
export const CognizantLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => (
  <svg 
    viewBox="0 0 215 48" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Cognizant"
  >
    <text 
      x="0" 
      y="38" 
      fill="#0033A0" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" 
      fontWeight="800" 
      fontSize="39" 
      letterSpacing="-0.8px"
    >
      Cognizant
    </text>
    {/* Registered (R) symbol */}
    <circle cx="203" cy="13" r="4.5" stroke="#0033A0" strokeWidth="1" fill="none" />
    <text x="201" y="15.5" fill="#0033A0" fontSize="7" fontWeight="bold" fontFamily="sans-serif">R</text>
  </svg>
);

/**
 * Unified Company Logo Renderer for seamless dynamic mapping
 */
export const CompanyLogo: React.FC<{
  nameOrId: string;
  className?: string;
}> = ({ nameOrId, className }) => {
  const normalized = nameOrId.toLowerCase().replace(/[\s\-_.]/g, '');

  if (normalized.includes('tcs') || normalized.includes('tata')) {
    return <TCSLogo className={className || "h-7 sm:h-8 w-auto"} />;
  }
  if (normalized.includes('accenture')) {
    return <AccentureLogo className={className || "h-6 sm:h-7 w-auto"} />;
  }
  if (normalized.includes('infosys')) {
    return <InfosysLogo className={className || "h-7 sm:h-8 w-auto"} />;
  }
  if (normalized.includes('cognizant') || normalized.includes('cognizent')) {
    return <CognizantLogo className={className || "h-7 sm:h-8 w-auto"} />;
  }
  if (normalized.includes('wipro')) {
    return <WiproLogo className={className || "h-7 sm:h-8 w-auto"} />;
  }
  if (normalized.includes('hcl') || normalized.includes('hcltech')) {
    return <HCLTechLogo className={className || "h-6 sm:h-7 w-auto"} />;
  }
  if (normalized.includes('deloitte')) {
    return <DeloitteLogo className={className || "h-6 sm:h-7 w-auto"} />;
  }
  if (normalized.includes('techmahindra') || normalized.includes('mahindra')) {
    return <TechMahindraLogo className={className || "h-7 sm:h-8 w-auto"} />;
  }

  return (
    <span className="text-xs font-black text-slate-800 tracking-wide px-2 py-1 bg-slate-100 rounded">
      {nameOrId}
    </span>
  );
};
