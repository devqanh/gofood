
import React from 'react';
import { X, MapPin, Phone, Navigation, ArrowLeft } from 'lucide-react';
import { STORES } from '../constants';

interface StoreListProps {
  onClose: () => void;
}

const StoreList: React.FC<StoreListProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#FAFAFA] z-[100] flex flex-col animate-in slide-in-from-bottom duration-300">
      {/* Header */}
      <header className="px-5 sm:px-6 pt-5 sm:pt-6 pb-4 flex items-center justify-between sticky top-0 bg-white/98 backdrop-blur-sm border-b border-slate-100/80 z-10">
        <div className="flex items-center gap-2.5">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-slate-50 rounded-xl transition-colors active:scale-95"
          >
            <ArrowLeft className="w-5.5 h-5.5 text-slate-800" strokeWidth={2.5} />
          </button>
          <h2 className="text-[17px] sm:text-[19px] font-bold text-slate-900 tracking-[-0.02em]">
            Hệ thống cửa hàng
          </h2>
        </div>
        <div className="bg-red-600 text-white px-3 py-1.5 rounded-full shadow-sm flex items-center justify-center">
          <span className="text-[10px] font-bold tracking-wide leading-none">{STORES.length} CỬA HÀNG</span>
        </div>
      </header>

      {/* List Container */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-5 space-y-3 pb-12 hide-scrollbar">
        <div className="flex items-center gap-1.5 mb-3 px-1">
          <MapPin className="w-4 h-4 text-red-600" strokeWidth={2.5} />
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Gần bạn nhất</span>
        </div>

        {STORES.map((store, index) => (
          <div
            key={store.id}
            className="group relative bg-white rounded-[20px] p-5 border border-slate-100/60 hover:border-slate-200 transition-all duration-200 hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]"
          >
            {/* Distance Badge */}
            <div className="absolute top-5 right-5 flex items-center gap-1 bg-slate-50/80 backdrop-blur-sm px-2.5 py-1.5 rounded-lg">
              <Navigation className="w-3.5 h-3.5 text-slate-400" strokeWidth={2} />
              <span className="text-[11px] font-bold text-slate-600">{store.distance} km</span>
            </div>

            <div className="space-y-4">
              <div className="pr-20">
                <h3 className="font-bold text-[16px] sm:text-[17px] text-slate-900 tracking-[-0.01em] leading-snug mb-1.5">
                  {store.name}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-slate-500 font-normal leading-relaxed">
                  {store.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={`tel:${store.phone.replace(/\s/g, '')}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1E293B] text-white h-[48px] rounded-[14px] hover:bg-[#0F172A] active:scale-[0.98] transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  <span className="text-[12px] font-bold tracking-wide">ĐẶT HÀNG QUA HOTLINE</span>
                </a>
                <button
                  className="w-[48px] h-[48px] flex items-center justify-center bg-red-600 text-white rounded-[14px] hover:bg-red-700 active:scale-[0.98] transition-all shadow-sm"
                >
                  <Navigation className="w-5 h-5" strokeWidth={2.5} fill="white" />
                </button>
              </div>
            </div>

            {/* Premium Indicator for first 3 stores */}
            {index < 3 && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-16 bg-red-600 rounded-r-md"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
