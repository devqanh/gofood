
import React, { useState, useEffect } from 'react';
import { X, Copy, ChevronRight, Zap, Wallet, CreditCard, Scan, CheckCircle2 } from 'lucide-react';
import { Voucher } from './VoucherList';
import { MOCK_USER } from '../constants';

interface VoucherDetailProps {
  voucher: Voucher;
  onClose: () => void;
}

const VoucherDetail: React.FC<VoucherDetailProps> = ({ voucher, onClose }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(voucher.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#b91c1c] to-[#7f1d1d] z-[200] flex flex-col animate-in fade-in zoom-in duration-300" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      {/* Header Bar */}
      <header className="px-6 py-4 flex items-center justify-between text-white">
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all active:scale-90">
          <X className="w-6 h-6" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all">
          <Zap className="w-5 h-5" />
        </button>
      </header>

      <div className="flex-1 px-5 py-2 overflow-y-auto hide-scrollbar flex flex-col items-center">
        {/* Main Card Container */}
        <div className="w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-w-[360px] mb-6">
          
          {/* Top Promo Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 px-5 py-3.5 flex items-center gap-3">
             <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center text-white">
               <Wallet className="w-5.5 h-5.5" />
             </div>
             <div className="flex-1">
               <p className="text-[10px] font-black text-white uppercase tracking-tight">Thanh toán Gofood Pay</p>
               <p className="text-[9px] text-white/80 font-medium">Tích 5% điểm thưởng mọi đơn hàng</p>
             </div>
             <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] font-black text-blue-900">
               G
             </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-7 sm:p-8 flex flex-col items-center">
            
            {/* QR Code with Enhanced "Vệt Sáng" Effect */}
            <div className="relative p-6 sm:p-7 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm mb-4 overflow-hidden group">
              {/* Sharp Glass Sweep Layer - Clearly visible sweep */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-[25deg] animate-[glassSweep_3.5s_infinite_ease-in-out]"></div>
              </div>

              <div className="relative z-10 w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${voucher.code}`}
                  alt="QR"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl p-1 shadow-md border border-slate-50">
                      <img src="https://gofood.vn/images/logo.png" alt="logo" className="w-full h-auto" />
                   </div>
                </div>
              </div>
            </div>

            <p className="text-[9px] text-slate-400 font-bold mb-6 tracking-widest uppercase text-center">Tự động cập nhật sau mỗi 2 phút</p>

            {/* Coupon Code Box */}
            <div className="w-full space-y-2 mb-8">
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Mã Coupon</p>
               <div className="flex items-stretch gap-2 bg-slate-50 rounded-2xl p-1.5 border border-slate-100">
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

            {/* Stats Section */}
            <div className="w-full grid grid-cols-2 border-t border-dashed border-slate-100 pt-6">
              <div className="flex items-center gap-3 pr-4 border-r border-slate-50">
                <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 font-black text-[10px]">V</div>
                <div>
                  <p className="text-[9px] font-black text-slate-900">Điểm</p>
                  <p className="text-[10px] text-slate-400 font-medium">{MOCK_USER.points.toLocaleString('vi-VN')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-4">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-900">Ví Pay</p>
                  <p className="text-[10px] text-slate-400 font-medium">152,907đ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Benefit Banner */}
        <div className="px-4 w-full">
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-[1.75rem] border border-white/10 w-full flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-[9px] font-black text-white/50 uppercase tracking-widest">Ưu đãi</p>
              <p className="text-sm font-black text-white">{voucher.title}</p>
            </div>
            <Zap className="w-5 h-5 text-red-100 fill-red-100" />
          </div>
        </div>
      </div>

      {/* Bottom Control Bar - Optimized for Safe Area */}
      <footer 
        className="px-6 pb-6 pt-4 flex items-center justify-around"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 20px)' }}
      >
        <button className="flex flex-col items-center gap-1.5 opacity-60">
           <Scan className="w-6 h-6 text-white" />
           <span className="text-[9px] font-black text-white uppercase">Quét mã</span>
        </button>
        <button className="flex flex-col items-center gap-1.5">
           <CreditCard className="w-6 h-6 text-white" />
           <span className="text-[9px] font-black text-white uppercase">Dùng thẻ</span>
        </button>
        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-2xl border border-white/20 px-8 py-3 rounded-full flex items-center gap-2 shadow-lg">
           <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
           <span className="text-[10px] font-black text-white uppercase tracking-widest">Thanh toán</span>
        </button>
      </footer>
    </div>
  );
};

export default VoucherDetail;
