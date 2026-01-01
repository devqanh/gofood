
import React from 'react';
import { X, Gift, Calendar, Percent, Sparkles, Award, Crown } from 'lucide-react';

export interface Benefit {
  id: string;
  icon: 'gift' | 'calendar' | 'percent' | 'sparkles' | 'award' | 'crown';
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  color: string;
}

interface BenefitDetailProps {
  benefit: Benefit;
  onClose: () => void;
}

const BenefitDetail: React.FC<BenefitDetailProps> = ({ benefit, onClose }) => {
  const getIcon = () => {
    const iconClass = "w-7 h-7 sm:w-8 sm:h-8";
    switch (benefit.icon) {
      case 'gift': return <Gift className={iconClass} />;
      case 'calendar': return <Calendar className={iconClass} />;
      case 'percent': return <Percent className={iconClass} />;
      case 'sparkles': return <Sparkles className={iconClass} />;
      case 'award': return <Award className={iconClass} />;
      case 'crown': return <Crown className={iconClass} />;
      default: return <Gift className={iconClass} />;
    }
  };

  const getColorClasses = () => {
    switch (benefit.color) {
      case 'red':
        return {
          bg: 'from-red-600 to-red-700',
          iconBg: 'bg-red-500/20',
          iconText: 'text-red-100',
          badgeBg: 'bg-red-500/20 border-red-400/30',
          badgeText: 'text-red-100'
        };
      case 'purple':
        return {
          bg: 'from-purple-600 to-purple-700',
          iconBg: 'bg-purple-500/20',
          iconText: 'text-purple-100',
          badgeBg: 'bg-purple-500/20 border-purple-400/30',
          badgeText: 'text-purple-100'
        };
      case 'blue':
        return {
          bg: 'from-blue-600 to-blue-700',
          iconBg: 'bg-blue-500/20',
          iconText: 'text-blue-100',
          badgeBg: 'bg-blue-500/20 border-blue-400/30',
          badgeText: 'text-blue-100'
        };
      case 'amber':
        return {
          bg: 'from-amber-600 to-amber-700',
          iconBg: 'bg-amber-500/20',
          iconText: 'text-amber-100',
          badgeBg: 'bg-amber-500/20 border-amber-400/30',
          badgeText: 'text-amber-100'
        };
      default:
        return {
          bg: 'from-slate-600 to-slate-700',
          iconBg: 'bg-slate-500/20',
          iconText: 'text-slate-100',
          badgeBg: 'bg-slate-500/20 border-slate-400/30',
          badgeText: 'text-slate-100'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white z-[200] flex flex-col animate-in slide-in-from-bottom duration-300" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      {/* Header */}
      <header className="px-5 py-4 flex items-center justify-between bg-white border-b border-slate-100">
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center hover:bg-slate-50 rounded-xl transition-colors active:scale-95"
        >
          <X className="w-6 h-6 text-slate-800" />
        </button>
        <div className="bg-red-600 text-white px-3 py-1.5 rounded-full shadow-sm flex items-center justify-center">
          <span className="text-[9px] font-bold uppercase tracking-wide leading-none">Đặc quyền</span>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 py-6 bg-[#FAFAFA]">
        {/* Icon Card */}
        <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-[2rem] bg-gradient-to-br ${colors.bg} flex items-center justify-center text-white shadow-xl`}>
          {getIcon()}
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 tracking-tight">
            {benefit.title}
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {benefit.subtitle}
          </p>
        </div>

        {/* Description Card */}
        <div className="bg-white border border-slate-100 rounded-[1.5rem] p-5 sm:p-6 mb-4 shadow-sm">
          <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-red-600" />
            Mô tả
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {benefit.description}
          </p>
        </div>

        {/* Details List */}
        <div className="bg-white border border-slate-100 rounded-[1.5rem] p-5 sm:p-6 shadow-sm">
          <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-red-600" />
            Chi tiết ưu đãi
          </h3>
          <div className="space-y-3">
            {benefit.details.map((detail, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${colors.bg} text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm`}>
                  <span className="text-xs font-black">{index + 1}</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed flex-1">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-6"></div>
      </div>

      {/* Bottom CTA */}
      <footer
        className="px-5 pb-6 pt-4 bg-white border-t border-slate-100"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 20px)' }}
      >
        <button
          onClick={onClose}
          className="w-full bg-red-600 text-white font-bold h-12 rounded-xl shadow-lg active:scale-[0.98] transition-all"
        >
          <span className="text-sm uppercase tracking-wide">Đã hiểu</span>
        </button>
      </footer>
    </div>
  );
};

export default BenefitDetail;
