
export enum TierType {
  MEMBER = 'Thành Viên',
  SILVER = 'Bạc',
  GOLD = 'Vàng',
  PLATINUM = 'Bạch Kim',
  DIAMOND = 'Kim Cương'
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface UserInfo {
  name: string;
  phone: string;
  points: number;
  spending: number;
  currentTier: TierType;
  nextTier: TierType;
  remainingToNextTier: number;
}
