
import React from 'react';
import { Shield, Star, Crown, Diamond, User, Gift, Percent } from 'lucide-react';
import { TierType } from './types';

export const BRAND_COLOR = '#e42128';

export interface Store {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance: number;
}

export const STORES: Store[] = [
  { id: '1', name: 'Gofood Thụy Khuê', address: '413 Thụy Khuê, Phường Tây Hồ, Hà Nội', phone: '0898 583 838', distance: 1.2 },
  { id: '2', name: 'Gofood Trung Kính', address: '161 Trung Kính, Phường Yên Hòa, Hà Nội', phone: '0898 582 828', distance: 2.5 },
  { id: '3', name: 'Gofood Nguyễn Văn Lộc', address: '96 Nguyễn Văn Lộc, Phường Hà Đông, Hà Nội', phone: '0889 307 308', distance: 3.8 },
  { id: '4', name: 'Gofood Yên Lãng', address: '23 Yên Lãng, Phường Đống Đa, Hà Nội', phone: '0896 467 799', distance: 4.2 },
  { id: '5', name: 'Gofood Lê Đại Hành', address: '48 Lê Đại Hành, Phường Hai Bà Trưng, Hà Nội', phone: '0899 466 966', distance: 5.0 },
  { id: '6', name: 'Gofood Ngọc Lâm', address: '205A Ngọc Lâm, Phường Bồ Đề, Hà Nội', phone: '0898 597 966', distance: 5.5 },
  { id: '7', name: 'Gofood Hàm Nghi', address: 'CT1A-ĐN2, Hàm Nghi, Phường Từ Liêm, Hà Nội', phone: '0898 572 788', distance: 6.3 },
  { id: '8', name: 'Gofood Đội Cấn', address: '221 Đội Cấn, Phường Ngọc Hà, Hà Nội', phone: '0899 592 889', distance: 7.1 },
  { id: '9', name: 'Gofood Lò Đúc', address: '124 Lò Đúc, Phường Hai Bà Trưng, Hà Nội', phone: '0899 583 699', distance: 7.8 },
  { id: '10', name: 'Gofood Nguyễn Cảnh Dị', address: 'Số 10, dãy B1, Phố Nguyễn Cảnh Dị, Phường Định Công, Hà Nội', phone: '0898 592 699', distance: 8.5 },
  { id: '11', name: 'Gofood Nguyễn Tuân', address: '123 Nguyễn Tuân, Phường Thanh Xuân, Hà Nội', phone: '0355 128 456', distance: 9.2 },
  { id: '12', name: 'Gofood Sài Đồng', address: '101 Sài Đồng, Phường Phúc Lợi, Hà Nội', phone: '0961 684 696', distance: 10.5 },
  { id: '13', name: 'Gofood Vinhomes Smart City', address: 'CH18 - Tòa I1, Imperia Smart City, Phường Tây Mỗ, Hà Nội', phone: '0867 945 099', distance: 12.0 },
  { id: '14', name: 'Gofood Nguyễn Thế Rục', address: 'Chân cầu vượt Nguyễn Thế Rục - Hồng Tiến', phone: '0898 597 966', distance: 14.5 }
];

export const TIER_CONFIG = {
  [TierType.MEMBER]: {
    name: 'MEMBER',
    displayName: 'HẠNG THÀNH VIÊN',
    gradient: 'from-[#0f172a] via-[#1e293b] to-[#020617]',
    accent: '#94a3b8',
    icon: <User />,
    benefits: [
      { id: '1', title: 'Tích điểm 1%', description: 'Tích lũy điểm cho mỗi hóa đơn', icon: 'Percent' },
      { id: '2', title: 'Ưu đãi sinh nhật', description: 'Quà tặng bất ngờ vào ngày sinh nhật', icon: 'Gift' }
    ]
  },
  [TierType.SILVER]: {
    name: 'SILVER',
    displayName: 'HẠNG BẠC',
    gradient: 'from-[#94a3b8] via-[#cbd5e1] to-[#475569]',
    accent: '#475569',
    icon: <Shield />,
    benefits: [
      { id: '1', title: 'Tích điểm 2%', description: 'Tăng mức tích lũy điểm', icon: 'Percent' },
      { id: '2', title: 'Giảm 5% thực phẩm sơ chế', description: 'Ưu đãi riêng cho hàng Ready-to-cook', icon: 'Star' }
    ]
  },
  [TierType.GOLD]: {
    name: 'GOLD',
    displayName: 'HẠNG VÀNG',
    gradient: 'from-[#78350f] via-[#fbbf24] via-[#fde68a] via-[#fbbf24] to-[#78350f]',
    accent: '#451a03',
    icon: <Star />,
    benefits: [
      { id: '1', title: 'Tích điểm 3%', description: 'Mức tích lũy cao cấp', icon: 'Percent' },
      { id: '2', title: 'Miễn phí giao hàng', description: 'Cho hóa đơn từ 500k', icon: 'Gift' }
    ]
  },
  [TierType.PLATINUM]: {
    name: 'PLATINUM',
    displayName: 'HẠNG BẠCH KIM',
    gradient: 'from-[#0f172a] via-[#334155] via-[#64748b] via-[#334155] to-[#0f172a]',
    accent: '#ffffff',
    icon: <Crown />,
    benefits: [
      { id: '1', title: 'Tích điểm 5%', description: 'Đặc quyền tích lũy tối đa', icon: 'Percent' },
      { id: '2', title: 'Quà tặng lễ tết', description: 'Set quà cao cấp từ Gofood', icon: 'Gift' }
    ]
  },
  [TierType.DIAMOND]: {
    name: 'DIAMOND',
    displayName: 'HẠNG KIM CƯƠNG',
    gradient: 'from-[#000000] via-[#09090b] via-[#1e1b4b] via-[#09090b] to-[#000000]',
    accent: '#ffffff',
    icon: <Diamond />,
    benefits: [
      { id: '1', title: 'Private Dining', description: 'Ưu tiên đặt bàn và phục vụ riêng', icon: 'Star' },
      { id: '2', title: 'Sự kiện độc quyền', description: 'Thư mời các buổi tasting rượu vang & steak', icon: 'Crown' }
    ]
  }
};

export const MOCK_USER = {
  name: 'Võ Quyền Anh',
  phone: '0327239691',
  points: 163562,
  spending: 3767565,
  currentTier: TierType.MEMBER,
  nextTier: TierType.SILVER,
  remainingToNextTier: 46232435
};
