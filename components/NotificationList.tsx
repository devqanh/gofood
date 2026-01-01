
import React from 'react';
import { ArrowLeft, Bell, Package, Tag, Info, CheckCircle2, Clock } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  content: string;
  time: string;
  type: 'promo' | 'order' | 'system';
  isRead: boolean;
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Ưu đãi đặc quyền cho Hạng Bạc',
    content: 'Bạn vừa nhận được voucher giảm 10% cho dòng sản phẩm Thịt bò Mỹ Black Angus.',
    time: '2 giờ trước',
    type: 'promo',
    isRead: false
  },
  {
    id: '2',
    title: 'Đơn hàng #GF12345 đã hoàn tất',
    content: 'Đơn hàng của bạn đã được giao thành công. Đừng quên đánh giá để nhận thêm 100 điểm thưởng!',
    time: '5 giờ trước',
    type: 'order',
    isRead: true
  },
  {
    id: '3',
    title: 'Cập nhật chính sách tích điểm',
    content: 'Gofood vừa cập nhật cơ chế tích điểm mới cho khách hàng thân thiết. Khám phá ngay!',
    time: '1 ngày trước',
    type: 'system',
    isRead: true
  },
  {
    id: '4',
    title: 'Flash Sale: Cá hồi Nauy giảm 20%',
    content: 'Duy nhất hôm nay, ưu đãi cực hời dành cho thực khách yêu thích cá hồi.',
    time: '2 ngày trước',
    type: 'promo',
    isRead: true
  }
];

interface NotificationListProps {
  onClose: () => void;
}

const NotificationList: React.FC<NotificationListProps> = ({ onClose }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'promo': return <Tag className="w-5 h-5" />;
      case 'order': return <Package className="w-5 h-5" />;
      default: return <Info className="w-5 h-5" />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'promo': return 'bg-orange-50 text-orange-600';
      case 'order': return 'bg-green-50 text-green-600';
      default: return 'bg-blue-50 text-blue-600';
    }
  };

  return (
    <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#F8F9FB] z-[120] flex flex-col animate-in slide-in-from-right duration-300 shadow-2xl">
      {/* Header */}
      <header className="px-6 pt-10 pb-6 flex items-center justify-between bg-white border-b border-slate-100 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="p-2.5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all active:scale-90">
            <ArrowLeft className="w-5 h-5 text-slate-900" />
          </button>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Thông báo</h2>
        </div>
        <button className="text-[10px] font-black text-red-600 uppercase tracking-widest hover:opacity-70 transition-opacity">
          Đánh dấu đã đọc
        </button>
      </header>

      {/* List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar divide-y divide-slate-50">
        {MOCK_NOTIFICATIONS.map((noti) => (
          <div 
            key={noti.id} 
            className={`p-6 transition-all active:bg-slate-50 relative group ${!noti.isRead ? 'bg-white' : 'bg-transparent'}`}
          >
            {/* Unread dot */}
            {!noti.isRead && (
              <div className="absolute top-7 right-6 w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(228,33,40,0.5)]"></div>
            )}

            <div className="flex gap-4">
              <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${getIconColor(noti.type)} shadow-sm`}>
                {getIcon(noti.type)}
              </div>
              <div className="flex-1 space-y-1.5">
                <h3 className={`text-sm font-bold tracking-tight pr-4 ${!noti.isRead ? 'text-slate-900' : 'text-slate-600'}`}>
                  {noti.title}
                </h3>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  {noti.content}
                </p>
                <div className="flex items-center gap-1.5 pt-1">
                  <Clock className="w-3 h-3 text-slate-300" />
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider">{noti.time}</span>
                </div>
              </div>
            </div>
            
            {/* Quick Action Overlay (Mobile feel) */}
            <div className="absolute inset-0 bg-red-600 opacity-0 group-active:opacity-5 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Bottom Tip */}
      <div className="p-8 bg-white/50 backdrop-blur-sm border-t border-slate-100">
        <div className="bg-slate-900 rounded-2xl p-4 flex items-center gap-4 shadow-lg shadow-slate-900/10">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white text-[10px] font-black uppercase tracking-wider">Mẹo nhỏ</p>
            <p className="text-white/60 text-[9px] font-medium leading-tight">
              Bật thông báo đẩy để không bỏ lỡ các ưu đãi Flash Sale đặc quyền từ Gofood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
