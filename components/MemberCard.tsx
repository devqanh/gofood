
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
    <div className={`relative w-full aspect-[1.6/1] rounded-[2rem] p-5 sm:p-6 overflow-hidden bg-gradient-to-br ${config.gradient} shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] transition-all duration-1000 ease-in-out`}>
      
      {/* Background Effects */}
      {isElite && (
        <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
      )}
      
      <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 -translate-x-[150%] animate-[shimmer_8s_infinite] pointer-events-none"></div>

      <div className="relative h-full flex flex-col justify-between z-10">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div className="flex items-center h-7 sm:h-8">
            <img 
              src="https://gofood.vn/images/logo.png" 
              alt="Gofood Logo" 
              className={`h-full w-auto object-contain ${isDark ? 'brightness-0 invert' : ''} transition-all duration-700`}
            />
          </div>
          
          <div className={`px-2 py-0.5 rounded-lg border ${glassEffect} backdrop-blur-xl`}>
            <span className={`${textColor} text-[7px] font-black tracking-[0.2em] uppercase`}>
              {config.name}
            </span>
          </div>
        </div>

        {/* Identity Section */}
        <div className="space-y-0.5 mt-auto mb-4">
          <h2 className={`${textColor} text-lg sm:text-xl font-bold tracking-tight leading-tight`}>
            {name}
          </h2>
          <p className={`${subTextColor} font-mono text-[8px] sm:text-[9px] tracking-[0.25em] uppercase`}>
            {phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}
          </p>
        </div>
        
        {/* Footer Section - Optimized Spacing */}
        <div className="flex justify-between items-center border-t border-white/10 pt-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <span className={`${textColor} text-[8px] sm:text-[9px] font-black tracking-[0.1em] uppercase opacity-90`}>
                {config.displayName}
              </span>
              {isUserCurrentTier && (
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-500/20 border border-green-500/10">
                   <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse"></div>
                   <span className="text-green-400 text-[6px] font-black uppercase">Active</span>
                </div>
              )}
            </div>
          </div>
          
          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border ${glassEffect} flex items-center justify-center`}>
              <ShieldCheck className={`${textColor} w-4 h-4 sm:w-4.5 sm:h-4.5 opacity-90`} />
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
