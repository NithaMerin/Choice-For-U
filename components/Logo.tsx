import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'color';
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'color' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
  const iconColor = variant === 'light' ? '#fff' : 'url(#logo-gradient)';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4f46e5" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="36" height="36" rx="10" fill="white" className="stroke-indigo-100" strokeWidth="1"/>
          <path d="M12 20C12 15.5817 15.5817 12 20 12C22.25 12 24.25 12.9 25.7 14.35" stroke={iconColor} strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M12 20C12 24.4183 15.5817 28 20 28H26" stroke={iconColor} strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M22 20L28 26L34 16" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className={`flex flex-col leading-none select-none ${textColor}`}>
        <span className="font-extrabold text-lg tracking-tight">Choice</span>
        <span className="text-xs font-medium tracking-widest uppercase text-indigo-500">For You</span>
      </div>
    </div>
  );
};