
import React from 'react';
import { ArrowLeft, ShoppingBag, Calendar, ChevronRight, CreditCard, Star } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  total: number;
  points: number;
  items: string;
  status: 'completed' | 'processing' | 'cancelled';
}

const MOCK_ORDERS: Order[] = [
  {
    id: 'GF88921',
    date: '15/05/2024 - 14:30',
    total: 1250000,
    points: 12500,
    items: 'Thịt bò Mỹ Black Angus, Sốt vang đỏ...',
    status: 'completed'
  },
  {
    id: 'GF87102',
    date: '02/05/2024 - 10:15',
    total: 890000,
    points: 8900,
    items: 'Cá hồi Nauy Fillet, Gia vị Steak...',
    status: 'completed'
  },
  {
    id: 'GF86544',
    date: '20/04/2024 - 18:45',
    total: 2150000,
    points: 21500,
    items: 'Sườn cừu Úc, Rượu vang Chile...',
    status: 'completed'
  },
  {
    id: 'GF85201',
    date: '12/04/2024 - 09:00',
    total: 450000,
    points: 4500,
    items: 'Thịt heo Iberico, Sốt tiêu đen...',
    status: 'completed'
  }
];

interface OrderHistoryProps {
  onClose: () => void;
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#F8F9FB] z-[130] flex flex-col animate-in slide-in-from-right duration-300 shadow-2xl">
      {/* Header */}
      <header className="px-6 pt-10 pb-6 flex items-center gap-4 bg-white border-b border-slate-100 sticky top-0 z-10 shadow-sm">
        <button onClick={onClose} className="p-2.5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all active:scale-90">
          <ArrowLeft className="w-5 h-5 text-slate-900" />
        </button>
        <h2 className="text-xl font-black text-slate-900 tracking-tight">Lịch sử đơn hàng</h2>
      </header>

      {/* Summary Stat */}
      <div className="px-6 py-6 bg-white/50 border-b border-slate-50">
        <div className="bg-slate-900 rounded-3xl p-6 flex justify-between items-center shadow-xl shadow-slate-900/10">
          <div className="space-y-1">
            <p className="text-white/40 text-[9px] font-black uppercase tracking-widest">Tổng chi tiêu (T5)</p>
            <p className="text-white text-xl font-black tracking-tight">2.140.000đ</p>
          </div>
          <div className="h-10 w-px bg-white/10"></div>
          <div className="space-y-1 text-right">
            <p className="text-white/40 text-[9px] font-black uppercase tracking-widest">Đơn hàng</p>
            <p className="text-white text-xl font-black tracking-tight">04</p>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 hide-scrollbar">
        {MOCK_ORDERS.map((order) => (
          <div 
            key={order.id}
            className="group bg-white rounded-[2rem] p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-[13px] tracking-tight">Đơn hàng #{order.id}</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-3 h-3 text-slate-300" />
                    <span className="text-[9px] font-bold text-slate-400 uppercase">{order.date}</span>
                  </div>
                </div>
              </div>
              <div className="px-2.5 py-1 bg-green-50 text-green-600 rounded-lg text-[8px] font-black uppercase tracking-wider">
                Hoàn thành
              </div>
            </div>

            <div className="pl-13 space-y-3">
              <p className="text-[11px] text-slate-500 font-medium line-clamp-1 italic">
                {order.items}
              </p>
              
              <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                <div className="space-y-0.5">
                  <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Tổng cộng</p>
                  <p className="text-sm font-black text-slate-900">{order.total.toLocaleString('vi-VN')}đ</p>
                </div>
                <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-xl border border-red-100/50">
                  <Star className="w-3 h-3 text-red-600 fill-red-600" />
                  <span className="text-[10px] font-black text-red-600">+{order.points.toLocaleString('vi-VN')} điểm</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Load more indicator */}
        <div className="py-4 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.25em]">Hết danh sách</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
