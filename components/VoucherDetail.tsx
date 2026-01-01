
import React, { useState, useEffect } from 'react';
import { X, Copy, Share2, Info, ChevronRight, Zap, Wallet, CreditCard, Scan, CheckCircle2 } from 'lucide-react';
import { Voucher } from './VoucherList';
import { MOCK_USER } from '../constants';

interface VoucherDetailProps {
  voucher: Voucher;
  onClose: () => void;
}

const VoucherDetail: React.FC<VoucherDetailProps> = ({ voucher, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(voucher.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#b91c1c] to-[#7f1d1d] z-[200] flex flex-col animate-in fade-in zoom-in duration-300">
      {/* Header Bar */}
      <header className="px-6 pt-12 pb-4 flex items-center justify-between text-white">
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all active:scale-90">
          <X className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
           <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all">
            <Zap className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex-1 px-5 py-2 overflow-y-auto hide-scrollbar flex flex-col items-center">
        {/* Main Card Container */}
        <div className="w-full bg-white rounded-[1.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col max-w-[360px]">
          
          {/* Top Promo Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 px-4 py-3 flex items-center gap-3">
             <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center text-white">
               <Wallet className="w-5.5 h-5.5" />
             </div>
             <div className="flex-1">
               <p className="text-[10px] font-black text-white uppercase tracking-tight">Thanh toán Gofood Pay</p>
               <p className="text-[9px] text-white/80 font-medium">Tích 5% điểm thưởng mọi đơn hàng</p>
             </div>
             <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] font-black text-blue-900 shadow-sm">
               G
             </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-8 flex flex-col items-center">
            
            {/* QR Code with Enhanced "Vệt Sáng" Effect */}
            <div className="relative p-7 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] mb-4 overflow-hidden">
              {/* Sharp Glass Sweep Layer */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/90 to-transparent -skew-x-[25deg] animate-[glassSweep_3s_infinite_ease-in-out]"></div>
              </div>

              <div className="relative z-10 w-48 h-48 flex items-center justify-center">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${voucher.code}`}
                  alt="QR"
                  className="w-full h-full"
                />
                {/* Logo in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-11 h-11 bg-white rounded-xl p-1.5 shadow-md border border-slate-50 flex items-center justify-center">
                      <img src="https://gofood.vn/images/logo.png" alt="logo" className="w-full h-auto" />
                   </div>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 font-bold mb-6 tracking-wide uppercase">Tự động cập nhật sau mỗi 2 phút</p>

            {/* NEW: Explicit Coupon Code Box for Copying */}
            <div className="w-full space-y-2 mb-8">
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Mã Coupon ưu đãi</p>
               <div className="flex items-stretch gap-2 bg-slate-50 rounded-2xl p-2 border border-slate-100">
                  <div className="flex-1 flex items-center justify-center bg-white border border-dashed border-slate-200 rounded-xl px-4 py-3">
                    <span className="text-lg font-black text-slate-900 tracking-[0.15em]">{voucher.code}</span>
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className={`px-4 rounded-xl flex items-center justify-center transition-all active:scale-95 ${copied ? 'bg-green-500 text-white' : 'bg-slate-900 text-white'}`}
                  >
                    {copied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
               </div>
            </div>

            {/* Promo Code Shortcut */}
            <div className="w-full bg-yellow-50 rounded-full px-5 py-3 flex items-center justify-between border border-yellow-100 mb-8 cursor-pointer active:scale-[0.98] transition-all">
               <div className="flex items-center gap-2.5">
                 <div className="w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center text-white">
                   <Zap className="w-4 h-4 fill-white" />
                 </div>
                 <span className="text-[11px] font-black text-blue-900 tracking-tight">Nhập mã giảm giá khác</span>
               </div>
               <ChevronRight className="w-4.5 h-4.5 text-slate-400" />
            </div>

            {/* Stats Section */}
            <div className="w-full grid grid-cols-2 border-t border-dashed border-slate-100 pt-8">
              <div className="flex items-center gap-3 pr-4 border-r border-slate-50">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 font-black text-[11px]">V</div>
                <div>
                  <p className="text-[10px] font-black text-slate-900">Điểm tích lũy</p>
                  <p className="text-[11px] text-slate-400 font-medium">{MOCK_USER.points.toLocaleString('vi-VN')} điểm</p>
                </div>
              </div>
              <div className="flex items-center justify-between pl-6 group active:opacity-60 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                    <Wallet className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-900">Ví Gofood Pay</p>
                    <p className="text-[11px] text-slate-400 font-medium">152,907đ</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Current Benefit Banner */}
        <div className="mt-8 px-4 w-full">
          <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-[2rem] border border-white/10 w-full flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-[9px] font-black text-white/50 uppercase tracking-widest">Đang áp dụng</p>
              <p className="text-[15px] font-black text-white tracking-tight">{voucher.title}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-100">
              <Zap className="w-5 h-5 fill-red-100" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Control Bar */}
      <footer className="px-6 pb-12 pt-4 flex items-center justify-around">
        <button className="flex flex-col items-center gap-2 opacity-60 active:opacity-100 transition-opacity">
           <Scan className="w-6.5 h-6.5 text-white" />
           <span className="text-[10px] font-black text-white uppercase tracking-tighter">Quét mã</span>
        </button>
        <button className="flex flex-col items-center gap-2">
           <CreditCard className="w-6.5 h-6.5 text-white" />
           <span className="text-[10px] font-black text-white uppercase tracking-tighter">Dùng thẻ</span>
        </button>
        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-2xl border border-white/20 px-10 py-3.5 rounded-full flex items-center gap-2.5 transition-all active:scale-95 shadow-lg">
           <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.6)]"></div>
           <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Thanh toán</span>
        </button>
      </footer>

      <style>{`
        @keyframes glassSweep {
          0% { left: -100%; opacity: 0; }
          10% { opacity: 1; }
          40% { left: 150%; opacity: 1; }
          41% { opacity: 0; }
          100% { left: 150%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default VoucherDetail;
