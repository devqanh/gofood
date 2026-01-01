
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
  const isDiamond = tier === TierType.DIAMOND;
  const isPlatinum = tier === TierType.PLATINUM;
  const isGold = tier === TierType.GOLD;
  const isElite = isDiamond || isPlatinum || isGold;
  
  const textColor = isDark ? 'text-white' : 'text-slate-900';
  const subTextColor = isDark ? 'text-white/60' : 'text-slate-500';
  const glassEffect = isDark ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10';

  return (
    <div className={`relative w-full aspect-[1.65/1] rounded-[2.25rem] p-6 overflow-hidden bg-gradient-to-br ${config.gradient} shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-1000 ease-in-out`}>
      
      {/* Background Effects */}
      {isElite && (
        <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>
      )}
      <div className={`absolute inset-0 pointer-events-none mix-blend-soft-light transition-opacity duration-1000 ${
        isDiamond 
          ? 'opacity-[0.15] bg-[url("https://www.transparenttextures.com/patterns/carbon-fibre.png")]' 
          : 'opacity-[0.08] bg-[url("https://www.transparenttextures.com/patterns/brushed-alum.png")]'
      }`}></div>
      
      <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 -translate-x-[150%] animate-[shimmer_8s_infinite] pointer-events-none"></div>

      <div className="relative h-full flex flex-col justify-between z-10">
        {/* Header Section - Unclipped Logo */}
        <div className="flex justify-between items-start">
          <div className="flex items-center h-8">
            <img 
              src="https://gofood.vn/images/logo.png" 
              alt="Gofood Logo" 
              className={`h-full w-auto object-contain ${isDark ? 'brightness-0 invert' : ''} transition-all duration-700 drop-shadow-sm`}
            />
          </div>
          
          <div className={`px-2.5 py-0.5 rounded-lg border ${glassEffect} backdrop-blur-xl shadow-lg`}>
            <span className={`${textColor} text-[7px] font-black tracking-[0.2em] uppercase`}>
              {config.name}
            </span>
          </div>
        </div>

        {/* Identity Section */}
        <div className="space-y-0.5">
          <h2 className={`${textColor} text-xl font-bold tracking-tight transition-all duration-700 drop-shadow-lg leading-none`}>
            {name}
          </h2>
          <p className={`${subTextColor} font-mono text-[8.5px] tracking-[0.3em] transition-all duration-700 opacity-80 uppercase`}>
            {phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}
          </p>
        </div>
        
        {/* Footer Section */}
        <div className="flex justify-between items-end border-t border-white/10 pt-3.5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className={`${textColor} text-[8.5px] font-black tracking-[0.15em] uppercase opacity-90`}>
                {config.displayName}
              </span>
              {isUserCurrentTier && (
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/20 backdrop-blur-md">
                   <div className="w-1 h-1 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.7)] animate-pulse"></div>
                   <span className="text-green-400 text-[6px] font-black uppercase tracking-tight">Active</span>
                </div>
              )}
            </div>
          </div>
          
          <div className={`relative w-8 h-8 rounded-lg border ${glassEffect} flex items-center justify-center shadow-lg transition-all duration-700`}>
              <ShieldCheck className={`${textColor} w-4.5 h-4.5 opacity-90`} />
              <div className={`absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l ${isDark ? 'border-white/30' : 'border-black/20'}`}></div>
              <div className={`absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r ${isDark ? 'border-white/30' : 'border-black/20'}`}></div>
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
