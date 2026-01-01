import { Benefit } from './components/BenefitDetail';

export const BENEFIT_DETAILS: Record<string, Benefit> = {
  'member-1': {
    id: 'member-1',
    icon: 'percent',
    title: 'Tích điểm 1%',
    subtitle: 'Tích lũy điểm cho mỗi hóa đơn',
    description: 'Nhận 1% giá trị hóa đơn quy đổi thành điểm thưởng. Điểm tích lũy có thể sử dụng để đổi voucher, giảm giá hoặc nhận quà tặng từ Gofood.',
    details: [
      'Tích 1 điểm cho mỗi 1.000đ chi tiêu tại Gofood',
      'Điểm tích lũy không có thời hạn sử dụng',
      'Áp dụng cho tất cả sản phẩm tại cửa hàng và đơn hàng online',
      'Điểm được cập nhật ngay sau khi thanh toán thành công',
      'Có thể kiểm tra điểm tích lũy qua app hoặc tại quầy'
    ],
    color: 'red'
  },
  'member-2': {
    id: 'member-2',
    icon: 'gift',
    title: 'Ưu đãi sinh nhật',
    subtitle: 'Quà tặng bất ngờ vào ngày sinh nhật',
    description: 'Nhận voucher giảm giá đặc biệt và quà tặng từ Gofood trong tháng sinh nhật của bạn. Món quà tri ân dành riêng cho thành viên.',
    details: [
      'Voucher giảm 15% cho hóa đơn từ 500.000đ',
      'Có hiệu lực trong suốt tháng sinh nhật',
      'Tặng kèm 1 món tráng miệng miễn phí khi dùng bữa tại cửa hàng',
      'Nhận thông báo qua app và SMS trước 7 ngày',
      'Áp dụng kết hợp với các ưu đãi khác'
    ],
    color: 'purple'
  },
  'silver-1': {
    id: 'silver-1',
    icon: 'percent',
    title: 'Tích điểm 2%',
    subtitle: 'Tăng mức tích lũy điểm',
    description: 'Tỷ lệ tích điểm được nâng cấp lên 2% cho mỗi giao dịch. Tích lũy nhanh hơn, đổi quà sớm hơn với hạng Silver.',
    details: [
      'Tích 2 điểm cho mỗi 1.000đ chi tiêu (gấp đôi hạng Member)',
      'Áp dụng tự động cho mọi giao dịch',
      'Điểm thưởng x2 vào các ngày lễ, tết',
      'Ưu tiên đổi voucher cao cấp trước',
      'Được tặng thêm 500 điểm khi lên hạng Silver'
    ],
    color: 'blue'
  },
  'silver-2': {
    id: 'silver-2',
    icon: 'sparkles',
    title: 'Giảm 5% thực phẩm sơ chế',
    subtitle: 'Ưu đãi riêng cho hàng Ready-to-cook',
    description: 'Giảm giá 5% cho tất cả sản phẩm thực phẩm sơ chế, ready-to-cook. Tiết kiệm chi phí cho bữa ăn gia đình hàng ngày.',
    details: [
      'Giảm 5% tất cả sản phẩm Ready-to-cook',
      'Áp dụng cho cả mua tại cửa hàng và online',
      'Không giới hạn số lần sử dụng',
      'Kết hợp được với voucher tích điểm',
      'Ưu đãi đặc biệt cho combo gia đình'
    ],
    color: 'amber'
  },
  'gold-1': {
    id: 'gold-1',
    icon: 'percent',
    title: 'Tích điểm 3%',
    subtitle: 'Mức tích lũy cao cấp',
    description: 'Tỷ lệ tích điểm 3% - mức ưu đãi cao cấp dành cho thành viên Gold. Tích lũy điểm nhanh gấp 3 lần hạng Member.',
    details: [
      'Tích 3 điểm cho mỗi 1.000đ chi tiêu',
      'Điểm thưởng x3 vào thứ 6, thứ 7, Chủ nhật',
      'Tặng 1.000 điểm khi lên hạng Gold',
      'Ưu tiên đổi voucher VIP trước 24h',
      'Nhận điểm thưởng khi giới thiệu bạn bè'
    ],
    color: 'amber'
  },
  'gold-2': {
    id: 'gold-2',
    icon: 'gift',
    title: 'Miễn phí giao hàng',
    subtitle: 'Cho hóa đơn từ 500k',
    description: 'Miễn phí vận chuyển cho mọi đơn hàng từ 500.000đ. Tiết kiệm chi phí, nhận hàng nhanh chóng tại nhà.',
    details: [
      'Freeship cho đơn từ 500.000đ trong bán kính 5km',
      'Ưu tiên giao hàng trong 60 phút',
      'Áp dụng cho cả giờ cao điểm',
      'Được đóng gói cẩn thận, đảm bảo chất lượng',
      'Hỗ trợ đổi trả miễn phí nếu có vấn đề'
    ],
    color: 'amber'
  },
  'platinum-1': {
    id: 'platinum-1',
    icon: 'percent',
    title: 'Tích điểm 5%',
    subtitle: 'Đặc quyền tích lũy tối đa',
    description: 'Tỷ lệ tích điểm cao nhất 5% - đặc quyền dành riêng cho thành viên Platinum. Tích lũy nhanh gấp 5 lần hạng Member.',
    details: [
      'Tích 5 điểm cho mỗi 1.000đ chi tiêu',
      'Điểm thưởng x5 vào các dịp đặc biệt',
      'Tặng 2.000 điểm khi lên hạng Platinum',
      'Quy đổi điểm thành tiền mặt (1 điểm = 1đ)',
      'Không giới hạn số điểm tích lũy'
    ],
    color: 'blue'
  },
  'platinum-2': {
    id: 'platinum-2',
    icon: 'gift',
    title: 'Quà tặng lễ tết',
    subtitle: 'Set quà cao cấp từ Gofood',
    description: 'Nhận set quà tết cao cấp vào các dịp lễ lớn trong năm. Món quà tri ân đặc biệt từ Gofood dành cho khách hàng thân thiết.',
    details: [
      'Set quà Tết Nguyên Đán trị giá 2.000.000đ',
      'Quà tặng 20/10, 8/3 cho khách hàng nữ',
      'Voucher 500.000đ vào ngày Quốc khánh',
      'Ưu tiên đặt hàng trước dịp lễ tết',
      'Giao quà tận nhà miễn phí'
    ],
    color: 'purple'
  },
  'diamond-1': {
    id: 'diamond-1',
    icon: 'crown',
    title: 'Private Dining',
    subtitle: 'Ưu tiên đặt bàn và phục vụ riêng',
    description: 'Dịch vụ đặt bàn VIP với không gian riêng tư và đội ngũ phục vụ chuyên nghiệp. Trải nghiệm ẩm thực đẳng cấp 5 sao.',
    details: [
      'Phòng VIP riêng biệt cho 4-8 người',
      'Đội ngũ chef riêng phục vụ tận bàn',
      'Menu đặc biệt theo yêu cầu',
      'Sommelier tư vấn rượu vang cao cấp',
      'Ưu tiên đặt bàn trước 48h, kể cả cuối tuần'
    ],
    color: 'purple'
  },
  'diamond-2': {
    id: 'diamond-2',
    icon: 'award',
    title: 'Sự kiện độc quyền',
    subtitle: 'Thư mời các buổi tasting rượu vang & steak',
    description: 'Tham gia các sự kiện ẩm thực cao cấp dành riêng cho thành viên Diamond. Gặp gỡ đầu bếp nổi tiếng và trải nghiệm món ăn đặc biệt.',
    details: [
      'Wine Tasting hàng quý với sommeliers quốc tế',
      'Wagyu & Premium Steak Night mỗi tháng',
      'Gặp gỡ và học nấu ăn với Chef Michelin',
      'Tour tham quan trang trại Gofood',
      'Ưu đãi mua sản phẩm premium giá đặc biệt'
    ],
    color: 'amber'
  }
};
