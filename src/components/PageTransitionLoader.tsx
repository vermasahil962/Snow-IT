import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const PageTransitionLoader: React.FC = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start page transition loader on route change
    setLoading(true);
    setProgress(25);

    const timer1 = setTimeout(() => {
      setProgress(65);
    }, 60);

    const timer2 = setTimeout(() => {
      setProgress(100);
    }, 160);

    const timer3 = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 320);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Top Gradient Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-[#169BA2] via-[#22d3ee] to-[#1E70BF] transition-all duration-200 ease-out shadow-[0_0_8px_rgba(22,155,162,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
