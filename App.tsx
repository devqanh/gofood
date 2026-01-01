
import React, { useState, useEffect } from 'react';
import { ChevronRight, History, Info, Bell, Sparkles, MapPin, Gift, Star, Zap } from 'lucide-react';
import { MOCK_USER, TIER_CONFIG, BRAND_COLOR } from './constants';
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setBarWidth(progressPercentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [progressPercentage]);

  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#F8F9FB] flex flex-col pb-24 relative shadow-2xl overflow-x-hidden">
      {/* Modals & Pages */}
      {showStoreList && <StoreList onClose={() => setShowStoreList(false)} />}
      {showVoucherList && <VoucherList onClose={() => setShowVoucherList(false)} />}
      {showNotifications && <NotificationList onClose={() => setShowNotifications(false)} />}
      {showOrderHistory && <OrderHistory onClose={() => setShowOrderHistory(false)} />}

      {/* Header - Refined & Clear */}
      <header className="px-6 py-3 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-xl z-50 border-b border-slate-100/60">
        <div className="flex items-center h-9">
          <img 
            src="https://gofood.vn/images/logo.png" 
            alt="Gofood Logo" 
            className="h-full w-auto object-contain" 
          />
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowStoreList(true)}
            className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 text-slate-900 hover:text-red-600 transition-all active:scale-90 group"
          >
            <MapPin className="w-4.5 h-4.5" />
          </button>
          <button 
            onClick={() => setShowNotifications(true)}
            className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 text-slate-400 relative active:scale-90"
          >
            <Bell className="w-4.5 h-4.5" />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-600 rounded-full border border-white"></span>
          </button>
        </div>
      </header>

      <main className="px-5 flex-1 space-y-6">
        <section className="mt-4">
          <MemberCard 
            name={MOCK_USER.name} 
            phone={MOCK_USER.phone} 
            tier={selectedTier} 
            isUserCurrentTier={selectedTier === MOCK_USER.currentTier}
          />
        </section>

        {/* User Info Section */}
        <section className="bg-white rounded-[2.25rem] p-7 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] border border-white space-y-7">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-slate-900 font-extrabold text-xl tracking-tight">{MOCK_USER.name}</h3>
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 bg-red-50 rounded-md border border-red-100">
                  <span className="text-red-600 text-[9px] font-black uppercase tracking-wider">HẠNG THÀNH VIÊN</span>
                </div>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">ID: 163562</span>
              </div>
            </div>
            <button 
              onClick={() => setShowOrderHistory(true)}
              className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl hover:bg-slate-100 transition-all active:scale-95"
            >
              Lịch sử <History className="w-3.5 h-3.5 text-red-500" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 border-y border-slate-50 py-6">
            <div className="space-y-1">
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">Tích lũy</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-900 leading-none">{MOCK_USER.points.toLocaleString('vi-VN')}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">điểm</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">Chi tiêu</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-900 leading-none">{(MOCK_USER.spending / 1000000).toFixed(1)}M</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">VND</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-red-600 text-[10px] font-black uppercase tracking-widest">Mục tiêu hạng {MOCK_USER.nextTier}</span>
              <span className="text-red-600 font-black text-[11px] bg-red-50 px-2 py-0.5 rounded-md">{progressPercentage.toFixed(1)}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full bg-red-600 shadow-[0_0_8px_rgba(228,33,40,0.2)] transition-all duration-1000 ease-out"
                style={{ width: `${barWidth}%` }}
              ></div>
            </div>
            <p className="text-center text-[10px] text-slate-400 font-medium tracking-wide">
              Thiếu <span className="text-slate-900 font-black">{MOCK_USER.remainingToNextTier.toLocaleString('vi-VN')} VND</span> để thăng hạng
            </p>
          </div>
        </section>

        {/* Tier Benefits */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] pl-1">Đặc quyền hội viên</h4>
            <div className="flex bg-slate-100 p-0.5 rounded-lg">
              <button 
                onClick={() => setActiveTab('benefits')}
                className={`px-3 py-1.5 text-[9px] font-black rounded-md transition-all ${
                  activeTab === 'benefits' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400'
                }`}
              >
                Ưu đãi
              </button>
              <button 
                onClick={() => setActiveTab('maintain')}
                className={`px-3 py-1.5 text-[9px] font-black rounded-md transition-all ${
                  activeTab === 'maintain' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400'
                }`}
              >
                Duy trì
              </button>
            </div>
          </div>

          <TierSelector activeTier={selectedTier} onSelect={setSelectedTier} />

          <div className="space-y-3 pb-12">
            {TIER_CONFIG[selectedTier].benefits.map((benefit) => (
              <div 
                key={benefit.id} 
                className="group flex items-center gap-4 p-5 bg-white rounded-[1.75rem] border border-slate-50 shadow-sm hover:shadow-md transition-all active:scale-[0.99]"
              >
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-red-600 group-hover:bg-red-50 transition-colors">
                  <Sparkles className="w-5.5 h-5.5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 text-[14px]">{benefit.title}</h4>
                  <p className="text-[11px] text-slate-400 font-medium">{benefit.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-red-600" />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Fixed Bottom Action - Slimmer & More Elegant */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto px-6 pb-6 pt-4 bg-gradient-to-t from-[#F8F9FB] via-[#F8F9FB]/90 to-transparent z-40">
        <button 
          onClick={() => setShowVoucherList(true)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-black h-12 rounded-xl shadow-lg shadow-red-600/10 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
        >
          <Gift className="w-4.5 h-4.5" />
          <span className="text-[11px] uppercase tracking-[0.15em]">Khám phá Voucher</span>
        </button>
      </div>
    </div>
  );
};

export default App;
