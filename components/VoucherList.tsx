
import React, { useState } from 'react';
import { ArrowLeft, Ticket, Clock, CheckCircle2, ChevronRight, Gift } from 'lucide-react';
import VoucherDetail from './VoucherDetail';

export interface Voucher {
  id: string;
  title: string;
  code: string;
  expiry: string;
  description: string;
  type: 'discount' | 'gift';
  status: 'available' | 'used' | 'expired';
}

const MOCK_VOUCHERS: Voucher[] = [
  { id: '1', title: 'Giảm 50k cho hóa đơn từ 500k', code: 'GOFOOD50', expiry: '31/12/2024', description: 'Áp dụng cho mọi loại Steak tại cửa hàng.', type: 'discount', status: 'available' },
  { id: '2', title: 'Tặng 1 chai rượu vang cao cấp', code: 'WINEGIFT', expiry: '15/10/2024', description: 'Dành riêng cho hạng Bạch Kim & Kim Cương.', type: 'gift', status: 'available' },
  { id: '3', title: 'Giảm 10% tổng hóa đơn sơ chế', code: 'READY2COOK', expiry: '20/09/2024', description: 'Ưu đãi cho hàng Ready-to-cook.', type: 'discount', status: 'available' },
  { id: '4', title: 'Miễn phí giao hàng nội thành', code: 'FREESHIP', expiry: '01/01/2025', description: 'Không giới hạn giá trị đơn hàng.', type: 'discount', status: 'used' },
];

interface VoucherListProps {
  onClose: () => void;
}

const VoucherList: React.FC<VoucherListProps> = ({ onClose }) => {
  const [activeFilter, setActiveFilter] = useState<'available' | 'used' | 'expired'>('available');
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);

  const filteredVouchers = MOCK_VOUCHERS.filter(v => v.status === activeFilter);

  return (
    <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#F8F9FB] z-[110] flex flex-col animate-in slide-in-from-right duration-300">
      {/* Detail View Overlay */}
      {selectedVoucher && (
        <VoucherDetail 
          voucher={selectedVoucher} 
          onClose={() => setSelectedVoucher(null)} 
        />
      )}

      {/* Header */}
      <header className="px-6 py-4 flex items-center gap-4 bg-white border-b border-slate-100 sticky top-0 z-10 shadow-sm">
        <button onClick={onClose} className="p-2.5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all active:scale-90">
          <ArrowLeft className="w-5 h-5 text-slate-900" />
        </button>
        <h2 className="text-xl font-black text-slate-900 tracking-tight">Voucher của bạn</h2>
      </header>

      {/* Tabs */}
      <div className="px-6 pt-6 bg-white/50 backdrop-blur-md">
        <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200/50">
          {(['available', 'used', 'expired'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`flex-1 py-3 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all ${
                activeFilter === tab 
                  ? 'bg-white text-red-600 shadow-md ring-1 ring-black/5' 
                  : 'text-slate-400'
              }`}
            >
              {tab === 'available' ? 'Sẵn dùng' : tab === 'used' ? 'Đã dùng' : 'Hết hạn'}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-5 hide-scrollbar">
        {filteredVouchers.length > 0 ? (
          filteredVouchers.map((voucher) => (
            <div 
              key={voucher.id} 
              className={`group relative flex bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${voucher.status !== 'available' ? 'opacity-70 grayscale' : ''}`}
            >
              {/* Left Side (Icon) */}
              <div className={`w-24 shrink-0 flex flex-col items-center justify-center border-r border-dashed border-slate-100 relative ${voucher.type === 'gift' ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-900'}`}>
                {voucher.type === 'gift' ? <Gift className="w-8 h-8" /> : <Ticket className="w-8 h-8" />}
                <span className="text-[8px] font-black mt-2 uppercase tracking-tighter">{voucher.type === 'gift' ? 'Quà tặng' : 'Giảm giá'}</span>
                
                {/* Punch holes */}
                <div className="absolute -top-3 left-full -translate-x-1/2 w-6 h-6 bg-[#F8F9FB] rounded-full border border-slate-100"></div>
                <div className="absolute -bottom-3 left-full -translate-x-1/2 w-6 h-6 bg-[#F8F9FB] rounded-full border border-slate-100"></div>
              </div>

              {/* Right Side (Content) */}
              <div className="flex-1 p-6 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-black text-slate-900 text-sm leading-tight pr-2 line-clamp-2">
                    {voucher.title}
                  </h3>
                  {voucher.status === 'available' && (
                    <span className="text-red-600 font-black text-[9px] bg-red-50 px-2 py-1 rounded-md">Mới</span>
                  )}
                </div>
                
                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
                  {voucher.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400">
                    <Clock className="w-3 h-3" />
                    HSD: {voucher.expiry}
                  </div>
                  {voucher.status === 'available' ? (
                    <button 
                      onClick={() => setSelectedVoucher(voucher)}
                      className="text-red-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Dùng ngay <ChevronRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <div className="flex items-center gap-1 text-[9px] font-black uppercase text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {voucher.status === 'used' ? 'Đã sử dụng' : 'Đã hết hạn'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="h-64 flex flex-col items-center justify-center text-slate-300 space-y-4">
            <Ticket className="w-16 h-16 opacity-20" />
            <p className="text-sm font-bold tracking-tight">Bạn chưa có voucher nào ở mục này</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="p-8 text-center">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
          Sử dụng điểm thưởng để đổi thêm nhiều voucher hấp dẫn khác tại Gofood.vn
        </p>
      </div>
    </div>
  );
};

export default VoucherList;
