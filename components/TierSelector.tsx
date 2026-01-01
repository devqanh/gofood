
import React from 'react';
import { TierType } from '../types';
import { TIER_CONFIG } from '../constants';

interface TierSelectorProps {
  activeTier: TierType;
  onSelect: (tier: TierType) => void;
}

const TierSelector: React.FC<TierSelectorProps> = ({ activeTier, onSelect }) => {
  const tiers = Object.values(TierType);

  return (
    <div className="grid grid-cols-5 gap-3 py-6 px-1">
      {tiers.map((tier) => {
        const isActive = activeTier === tier;
        const config = (TIER_CONFIG as any)[tier];
        
        return (
          <button
            key={tier}
            onClick={() => onSelect(tier)}
            className={`group flex flex-col items-center gap-3 transition-all duration-500 ${
              isActive ? 'scale-110 -translate-y-2' : 'hover:scale-105 active:scale-95'
            }`}
          >
            {/* High-End Medal Container - Sharp & Bold */}
            <div 
              className={`w-full aspect-square max-w-[60px] rounded-[1.25rem] flex items-center justify-center transition-all duration-500 relative border-2 ${
                isActive 
                  ? `bg-white shadow-[0_20px_40px_-10px_rgba(228,33,40,0.35)] border-red-500/20 ring-4 ring-red-50` 
                  : 'bg-white border-slate-100 shadow-sm opacity-60 grayscale-[0.2] hover:opacity-100 hover:grayscale-0'
              }`}
            >
              {/* Inner Glow for active state */}
              {isActive && (
                <div className="absolute inset-0 rounded-[1.25rem] bg-red-600/5 animate-pulse"></div>
              )}

              <div className={`transition-all duration-500 ${
                isActive ? 'text-red-600 scale-110' : 'text-slate-500'
              }`}>
                {/* Clone icon with stronger stroke for ultra-sharpness */}
                {React.cloneElement(config.icon, { 
                  strokeWidth: isActive ? 2.5 : 2,
                  className: `w-6 h-6 ${isActive ? 'drop-shadow-[0_0_8px_rgba(228,33,40,0.3)]' : ''}`
                })}
              </div>
              
              {/* Active Indicator Underneath */}
              {isActive && (
                <div className="absolute -bottom-2 w-5 h-1 bg-red-600 rounded-full shadow-[0_2px_10px_rgba(228,33,40,0.5)]"></div>
              )}
            </div>
            
            <span className={`text-[8.5px] font-black text-center whitespace-nowrap tracking-wider uppercase transition-all duration-300 ${
              isActive ? 'text-slate-900' : 'text-slate-400'
            }`}>
              {config.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default TierSelector;
