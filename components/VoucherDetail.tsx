
import React, { useState, useEffect } from 'react';
import { X, Copy, ChevronRight, Zap, Wallet, CheckCircle2 } from 'lucide-react';
import { Voucher } from './VoucherList';
import { MOCK_USER } from '../constants';

interface VoucherDetailProps {
  voucher: Voucher;
  onClose: () => void;
}

const VoucherDetail: React.FC<VoucherDetailProps> = ({ voucher, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [qrLoaded, setQrLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

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
                {/* Loading Skeleton */}
                {!qrLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-50 rounded-xl">
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 animate-pulse rounded-xl flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-slate-200 border-t-slate-400 rounded-full animate-spin"></div>
                    </div>
                  </div>
                )}

                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${voucher.code}&margin=1`}
                  alt="QR"
                  className={`w-full h-full transition-opacity duration-500 ${qrLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setQrLoaded(true)}
                />

                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${qrLoaded ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl p-2 shadow-lg border-2 border-slate-100 flex items-center justify-center">
                      {!logoLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 rounded-2xl">
                          <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-500 rounded-full animate-spin"></div>
                        </div>
                      )}
                      <img
                        src="https://gofood.vn/images/logo.png"
                        alt="logo"
                        className={`w-full h-full object-contain transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setLogoLoaded(true)}
                      />
                   </div>
                </div>
              </div>
            </div>
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

      {/* Bottom Info Section - Optimized for Safe Area */}
      <footer
        className="px-5 sm:px-6 pb-6 pt-4"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 20px)' }}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 sm:px-5 py-4 sm:py-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-white font-black text-[10px] sm:text-[11px] uppercase tracking-wider">Lưu ý</h3>
              <p className="text-white/90 text-[9px] sm:text-[10px] leading-relaxed font-medium">
                Thông tin mã này áp dụng được qua các đơn hàng online và tại cửa hàng. Vui lòng gửi mã này cho nhân viên khi thanh toán.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VoucherDetail;
