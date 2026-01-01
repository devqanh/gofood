
import React from 'react';
import { X, MapPin, Phone, Navigation, ArrowLeft } from 'lucide-react';
import { STORES } from '../constants';

interface StoreListProps {
  onClose: () => void;
}

const StoreList: React.FC<StoreListProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white z-[100] flex flex-col animate-in slide-in-from-bottom duration-300 shadow-2xl">
      {/* Header */}
      <header className="px-6 pt-8 pb-4 flex items-center justify-between sticky top-0 bg-white border-b border-slate-50 z-10">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors active:scale-90">
            <ArrowLeft className="w-6 h-6 text-slate-900" />
          </button>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Hệ thống cửa hàng</h2>
        </div>
        <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
          {STORES.length} cửa hàng
        </div>
      </header>

      {/* List Container */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 pb-12 hide-scrollbar">
        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
          <MapPin className="w-3.5 h-3.5 text-red-600" />
          Gần bạn nhất
        </div>

        {STORES.map((store, index) => (
          <div 
            key={store.id} 
            className="group relative bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500"
          >
            {/* Distance Badge */}
            <div className="absolute top-6 right-6 flex items-center gap-1 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full shadow-sm">
              <span className="text-[10px] font-black text-slate-900">{store.distance} km</span>
            </div>

            <div className="space-y-4">
              <div className="pr-12">
                <h3 className="font-black text-slate-900 text-lg tracking-tight group-hover:text-red-600 transition-colors">
                  {store.name}
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed mt-1">
                  {store.address}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a 
                  href={`tel:${store.phone.replace(/\s/g, '')}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-wider active:scale-95 transition-all hover:bg-slate-800"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Đặt hàng qua hotline
                </a>
                <button 
                  className="w-12 h-12 flex items-center justify-center bg-red-50 text-red-600 rounded-2xl hover:bg-red-600 hover:text-white transition-all active:scale-95"
                >
                  <Navigation className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Premium Indicator for first 3 stores */}
            {index < 3 && (
              <div className="absolute -left-px top-1/2 -translate-y-1/2 w-1.5 h-10 bg-red-600 rounded-r-full shadow-[2px_0_8px_rgba(220,38,38,0.3)]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
