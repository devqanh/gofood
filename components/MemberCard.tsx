
import React from 'react';
import { TIER_CONFIG } from '../constants';
import { TierType } from '../types';
import { ShieldCheck } from 'lucide-react';

interface MemberCardProps {
  name: string;
  phone: string;
  tier: TierType;
  isUserCurrentTier?: boolean;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, phone, tier, isUserCurrentTier }) => {
  const config = (TIER_CONFIG as any)[tier];
  
  const isDark = tier === TierType.PLATINUM || tier === TierType.DIAMOND || tier === TierType.MEMBER;
  const isElite = tier === TierType.DIAMOND || tier === TierType.PLATINUM || tier === TierType.GOLD;
  
  const textColor = isDark ? 'text-white' : 'text-slate-900';
  const subTextColor = isDark ? 'text-white/60' : 'text-slate-500';
  const glassEffect = isDark ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10';

  return (
    <div className={`relative w-full aspect-[1.6/1] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-gradient-to-br ${config.gradient} shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] transition-all duration-1000 ease-in-out`}>

      {/* Background Effects */}
      {isElite && (
        <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
      )}

      <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 -translate-x-[150%] animate-[shimmer_8s_infinite] pointer-events-none"></div>

      <div className="relative h-full flex flex-col z-10 p-3.5 sm:p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center gap-2 flex-shrink-0">
          <div className="flex items-center h-5 sm:h-7 shrink-0">
            <img
              src="https://gofood.vn/images/logo.png"
              alt="Gofood Logo"
              className={`h-full w-auto object-contain ${isDark ? 'brightness-0 invert' : ''} transition-all duration-700`}
            />
          </div>

          <div className={`h-[20px] sm:h-[24px] px-2 sm:px-3 rounded-lg border ${glassEffect} backdrop-blur-xl shrink-0 flex items-center justify-center`}>
            <span className={`${textColor} text-[7px] sm:text-[9px] font-black tracking-[0.12em] sm:tracking-[0.2em] uppercase leading-[1]`}>
              {config.name}
            </span>
          </div>
        </div>

        {/* Identity Section */}
        <div className="flex-1 flex flex-col justify-end">
          <div className="space-y-0.5 pb-1 sm:pb-2">
            <h2 className={`${textColor} text-sm sm:text-lg md:text-xl font-bold tracking-tight leading-tight`}>
              {name}
            </h2>
            <p className={`${subTextColor} font-mono text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] uppercase`}>
              {phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}
            </p>
          </div>
        </div>

        {/* Footer Section - Optimized for iPhone */}
        <div className="flex items-center justify-between border-t border-white/10 pt-1.5 sm:pt-2.5 gap-2 flex-shrink-0">
          <div className="flex flex-col gap-0.5">
            <span className={`${textColor} text-[8px] sm:text-[10px] font-black tracking-[0.06em] sm:tracking-[0.1em] uppercase opacity-90 leading-[1.3]`}>
              {config.displayName}
            </span>
            {isUserCurrentTier && (
              <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-green-500/20 border border-green-500/10 w-fit">
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-green-400 text-[5px] sm:text-[8px] font-black uppercase leading-[1.3]">Hạng hiện tại</span>
              </div>
            )}
          </div>

          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg border ${glassEffect} flex items-center justify-center shrink-0`}>
            <ShieldCheck className={`${textColor} w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-90`} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) rotate(-45deg); }
          25% { transform: translateX(150%) rotate(-45deg); }
          100% { transform: translateX(150%) rotate(-45deg); }
        }
      `}</style>
    </div>
  );
};

export default MemberCard;
