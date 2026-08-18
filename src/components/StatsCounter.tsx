import React, { useEffect, useState, useRef } from 'react';
import { Users, Building2, GraduationCap, Award, TrendingUp } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  targetValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  decimals?: number;
}

const StatCounterCard: React.FC<StatItemProps> = ({
  icon,
  targetValue,
  prefix = '',
  suffix = '',
  label,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.floor(easedProgress * targetValue);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, targetValue, duration]);

  return (
    <div
      ref={cardRef}
      className="relative group bg-white/95 backdrop-blur-md border border-white/50 hover:border-teal-200 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative subtle glow background */}
      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#169BA2]/10 rounded-full blur-xl group-hover:bg-[#169BA2]/20 transition-all duration-500 pointer-events-none" />

      <div className="flex items-center justify-between mb-2">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-[#169BA2] group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
        <span className="flex items-center gap-1 text-[10px] font-bold text-[#169BA2] bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
          <TrendingUp className="w-3 h-3 text-[#169BA2]" /> Live Verified
        </span>
      </div>

      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-baseline gap-0.5">
          <span>{prefix}</span>
          <span>{hasAnimated ? count : 0}</span>
          {suffix === '+' ? (
            <span className="text-xl sm:text-2xl font-bold text-[#169BA2]">{suffix}</span>
          ) : suffix ? (
            <span className="text-sm sm:text-base font-bold text-[#169BA2] ml-1">
              {suffix.trim()}
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-xs font-bold text-slate-600 tracking-wide">
          {label}
        </p>
      </div>
    </div>
  );
};

export const StatsCounter: React.FC = () => {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-gradient-to-r from-[#11696E] via-[#169BA2] to-[#1E70BF] rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-teal-900/25 border border-teal-300/30 overflow-hidden">
        {/* Background ambient lighting effects */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          
          {/* Candidates Placed */}
          <StatCounterCard
            icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
            targetValue={178}
            suffix="+"
            label="Candidates Placed"
          />

          {/* Hiring Partners */}
          <StatCounterCard
            icon={<Building2 className="w-5 h-5 sm:w-6 sm:h-6" />}
            targetValue={30}
            suffix="+"
            label="Hiring Partners"
          />

          {/* Batches Completed */}
          <StatCounterCard
            icon={<GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />}
            targetValue={28}
            suffix="+"
            label="Batches Completed"
          />

          {/* Highest Package Offered */}
          <StatCounterCard
            icon={<Award className="w-5 h-5 sm:w-6 sm:h-6" />}
            targetValue={26}
            prefix="₹"
            suffix=" LPA"
            label="Highest Package Offered"
          />

        </div>
      </div>
    </section>
  );
};
