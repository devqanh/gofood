
import React, { useState, useEffect } from 'react';
import { ChevronRight, History, Bell, Sparkles, MapPin, Gift, Zap } from 'lucide-react';
import { MOCK_USER, TIER_CONFIG } from './constants';
import { TierType } from './types';
import MemberCard from './components/MemberCard';
import TierSelector from './components/TierSelector';
import StoreList from './components/StoreList';
import VoucherList from './components/VoucherList';
import NotificationList from './components/NotificationList';
import OrderHistory from './components/OrderHistory';

const App: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<TierType>(MOCK_USER.currentTier);
  const [activeTab, setActiveTab] = useState<'benefits' | 'maintain'>('benefits');
  const [showStoreList, setShowStoreList] = useState(false);
  const [showVoucherList, setShowVoucherList] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [barWidth, setBarWidth] = useState(0);

  const progressPercentage = (MOCK_USER.spending / (MOCK_USER.spending + MOCK_USER.remainingToNextTier)) * 100;

  const tierBenefitsRef = React.useRef<HTMLElement>(null);

  const scrollToTierBenefits = () => {
    tierBenefitsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setBarWidth(progressPercentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [progressPercentage]);

  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#F8F9FB] flex flex-col relative shadow-2xl overflow-x-hidden">
      {/* Modals & Pages */}
      {showStoreList && <StoreList onClose={() => setShowStoreList(false)} />}
      {showVoucherList && <VoucherList onClose={() => setShowVoucherList(false)} />}
      {showNotifications && <NotificationList onClose={() => setShowNotifications(false)} />}
      {showOrderHistory && <OrderHistory onClose={() => setShowOrderHistory(false)} />}

      {/* Header - Optimized for iOS Notch */}
      <header className="px-6 pb-3 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-xl z-50 border-b border-slate-100/60" style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 12px)' }}>
        <div className="flex items-center h-8">
          <img 
            src="https://gofood.vn/images/logo.png" 
            alt="Gofood Logo" 
            className="h-full w-auto object-contain" 
          />
        </div>
        <div className="flex gap-2">
          <button onClick={() => setShowStoreList(true)} className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 text-slate-900 hover:bg-slate-50 active:scale-95 transition-all">
            <MapPin className="w-4.5 h-4.5" />
          </button>
          <button onClick={() => setShowNotifications(true)} className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-md border border-red-100 text-red-600 relative hover:shadow-lg hover:scale-105 active:scale-95 transition-all">
            <Bell className="w-4.5 h-4.5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border-2 border-white animate-pulse shadow-lg"></span>
          </button>
        </div>
      </header>

      <main className="px-5 flex-1 space-y-6 pt-4 pb-32">
        <section>
          <MemberCard 
            name={MOCK_USER.name} 
            phone={MOCK_USER.phone} 
            tier={selectedTier} 
            isUserCurrentTier={selectedTier === MOCK_USER.currentTier}
          />
        </section>

        {/* User Info Section */}
        <section className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 shadow-sm border border-slate-50 space-y-4 sm:space-y-6">
          <div className="flex justify-between items-start gap-2">
            <div className="space-y-0.5 sm:space-y-1 min-w-0 flex-1">
              <h3 className="text-slate-900 font-extrabold text-base sm:text-lg tracking-tight">{MOCK_USER.name}</h3>

            </div>
            <button
              onClick={() => setShowOrderHistory(true)}
              className="flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-[9px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl shrink-0"
            >
              Lịch sử <History className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 border-y border-slate-50 py-3 sm:py-2">
            <div className="space-y-0.5 sm:space-y-1">
              <p className="text-slate-400 text-[7px] sm:text-[8px] font-black uppercase tracking-widest">Tích lũy</p>
              <div className="flex items-baseline gap-0.5 sm:gap-1">
                <span className="text-lg sm:text-xl font-black text-slate-900 leading-none">{MOCK_USER.points.toLocaleString('vi-VN')}</span>
                <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase">điểm</span>
              </div>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <p className="text-slate-400 text-[7px] sm:text-[8px] font-black uppercase tracking-widest">Chi tiêu</p>
              <div className="flex items-baseline gap-0.5 sm:gap-1">
                <span className="text-lg sm:text-xl font-black text-slate-900 leading-none">{(MOCK_USER.spending / 1000000).toFixed(1)}M</span>
                <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase">VND</span>
              </div>
            </div>
          </div>

          <div className="space-y-1 sm:space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-red-600 text-[8px] sm:text-[9px] font-black uppercase tracking-widest">Mục tiêu {MOCK_USER.nextTier}</span>
              <span className="text-red-600 font-black text-[9px] sm:text-[10px] bg-red-50 px-1.5 sm:px-2 py-0.5 rounded-md">{progressPercentage.toFixed(1)}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-red-600 transition-all duration-1000 ease-out"
                style={{ width: `${barWidth}%` }}
              ></div>
            </div>
            <p className="text-center text-[8px] sm:text-[9px] text-slate-400 font-medium">
              Thiếu <span className="text-slate-900 font-black">{MOCK_USER.remainingToNextTier.toLocaleString('vi-VN')} VND</span> để thăng hạng
            </p>
          </div>
        </section>

        {/* Tier Benefits */}
        <section ref={tierBenefitsRef} className="space-y-6">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Đặc quyền hội viên</h4>
            <div className="flex bg-slate-100 p-0.5 rounded-lg">
              <button onClick={() => { setActiveTab('benefits'); scrollToTierBenefits(); }} className={`px-3 py-1 text-[9px] font-black rounded-md ${activeTab === 'benefits' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'}`}>Ưu đãi hạng thẻ</button>
              <button onClick={() => { setActiveTab('maintain'); scrollToTierBenefits(); }} className={`px-3 py-1 text-[9px] font-black rounded-md ${activeTab === 'maintain' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'}`}>Duy trì hạng thẻ</button>
            </div>
          </div>

          <TierSelector activeTier={selectedTier} onSelect={setSelectedTier} />

          <div className="space-y-3">
            {TIER_CONFIG[selectedTier].benefits.map((benefit) => (
              <div key={benefit.id} className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-50 shadow-sm">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-red-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 text-sm">{benefit.title}</h4>
                  <p className="text-[10px] text-slate-400 font-medium">{benefit.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Fixed Bottom Action - Optimized for Home Indicator */}
      <div 
        className="fixed bottom-0 left-0 right-0 max-w-md mx-auto px-6 pb-4 pt-4 bg-gradient-to-t from-[#F8F9FB] via-[#F8F9FB]/95 to-transparent z-40"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 24px)' }}
      >
        <button 
          onClick={() => setShowVoucherList(true)}
          className="w-full bg-red-600 text-white font-black h-12 rounded-xl shadow-xl shadow-red-600/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <Gift className="w-4.5 h-4.5" />
          <span className="text-[11px] uppercase tracking-widest">Khám phá Voucher</span>
        </button>
      </div>
    </div>
  );
};

export default App;
