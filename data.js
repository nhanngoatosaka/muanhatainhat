// ============================================================
//  DATA.JS — TOÀN BỘ NỘI DUNG APP Ở ĐÂY
//  Sửa file này để cập nhật app.
//  Sau khi sửa xong → Commit trên GitHub → App tự cập nhật.
// ============================================================


// ------------------------------------------------------------
// 1. THÔNG TIN CÔNG TY
//    Sửa tên, tagline, giới thiệu, số liệu thống kê
// ------------------------------------------------------------
const COMPANY = {
  name:    "Kansai Property Japan",   // Tên hiển thị trong app
  tagline: "Chuyên gia BĐS vùng Kansai cho người nước ngoài",
  bio:     "Chúng tôi chuyên hỗ trợ người Việt Nam và người nước ngoài mua bán nhà đất tại vùng Kansai — Osaka, Kyoto, Kobe. Với kinh nghiệm thực tế và am hiểu pháp luật Nhật Bản, chúng tôi đồng hành từ bước tìm kiếm đến ký hợp đồng.",

  // Số liệu hiển thị trên trang Liên hệ
  stats: [
    { number: "120+", label: { vi: "Giao dịch thành công", en: "Transactions",      ja: "取引実績" } },
    { number: "5★",   label: { vi: "Đánh giá khách hàng", en: "Customer rating",    ja: "顧客評価" } },
    { number: "3",    label: { vi: "Ngôn ngữ hỗ trợ",     en: "Languages",          ja: "対応言語" } },
  ],
};


// ------------------------------------------------------------
// 2. NÚT LIÊN HỆ
//    Thêm/xoá/sửa các nút liên hệ trên trang About
//    icon: emoji  |  label: tên hiển thị  |  url: đường link
// ------------------------------------------------------------
const CONTACTS = [
  {
    icon:  "💬",
    label: "LINE",
    sub:   "@kansaiproperty",          // ← Sửa ID Line của bạn
    url:   "https://line.me/ti/p/@kansaiproperty",
  },
  {
    icon:  "📱",
    label: "Zalo",
    sub:   "+81-90-0000-0000",         // ← Sửa số Zalo của bạn
    url:   "https://zalo.me/0900000000",
  },
  {
    icon:  "💚",
    label: "WhatsApp",
    sub:   "+81-90-0000-0000",         // ← Sửa số WhatsApp của bạn
    url:   "https://wa.me/819000000000",
  },
  {
    icon:  "📞",
    label: "電話 / Gọi điện",
    sub:   "+81-90-0000-0000",         // ← Sửa số điện thoại của bạn
    url:   "tel:+819000000000",
  },
];


// ------------------------------------------------------------
// 3. DANH SÁCH NHÀ ĐANG BÁN
//
//    Để THÊM nhà mới: copy 1 block từ { ... }, đến },
//    dán xuống dưới, rồi sửa thông tin.
//
//    type: "apartment" = chung cư | "house" = nhà riêng
// ------------------------------------------------------------
const LISTINGS = [

  {
    id:      1,
    emoji:   "🏢",
    nameVi:  "Căn hộ Umeda",           // Tên tiếng Việt
    nameEn:  "Umeda Apartment",         // Tên tiếng Anh
    name:    "マンション梅田",           // Tên tiếng Nhật
    area:    "Osaka · 梅田",
    price:   "¥2,800万",
    beds:    "2LDK",
    sqm:     "65m²",
    type:    "apartment",
    desc:    "JR大阪駅徒歩5分。築10年。眺望良好。外国人ローン対応。",
  },

  {
    id:      2,
    emoji:   "🏠",
    nameVi:  "Nhà Nishinomiya",
    nameEn:  "Nishinomiya House",
    name:    "一戸建て西宮",
    area:    "Kobe · 西宮",
    price:   "¥4,200万",
    beds:    "4LDK",
    sqm:     "120m²",
    type:    "house",
    desc:    "阪急神戸線徒歩8分。庭付き。築5年の新築同様物件。",
  },

  {
    id:      3,
    emoji:   "🏯",
    nameVi:  "Nhà truyền thống Kyoto",
    nameEn:  "Kyoto Machiya Reno",
    name:    "京都町家リノベ",
    area:    "Kyoto · 東山",
    price:   "¥3,500万",
    beds:    "3LDK",
    sqm:     "95m²",
    type:    "house",
    desc:    "築100年の京町家をフルリノベーション。外国人投資家に人気。",
  },

  {
    id:      4,
    emoji:   "🏙",
    nameVi:  "Studio Dojima",
    nameEn:  "Dojima Studio",
    name:    "堂島ワンルーム",
    area:    "Osaka · 堂島",
    price:   "¥1,200万",
    beds:    "1R",
    sqm:     "28m²",
    type:    "apartment",
    desc:    "ビジネス街中心。投資用物件として最適。利回り約5.2%。",
  },

  // ↓ Thêm nhà mới vào đây (copy block ở trên, dán xuống, sửa)

];


// ------------------------------------------------------------
// 4. BÀI VIẾT & KIẾN THỨC
//
//    Để THÊM bài mới: copy 1 block, dán xuống, sửa.
//
//    cat (danh mục):
//      "check"    = Kiểm tra nhà cũ
//      "legal"    = Pháp lý
//      "boundary" = Mốc lộ giới
//      "market"   = Thị trường
//      "tips"     = Mẹo & Kinh nghiệm
//
//    content: viết HTML đơn giản
//      <h2>Tiêu đề mục</h2>
//      <p>Đoạn văn</p>
//      <ul><li>Điểm 1</li><li>Điểm 2</li></ul>
// ------------------------------------------------------------
const ARTICLES = [

  {
    id:       1,
    emoji:    "🔍",
    cat:      "check",
    catLabel: "Check nhà cũ",

    title:   "10 điểm PHẢI kiểm tra khi mua nhà cũ ở Nhật",
    titleEn: "10 Must-Check Points When Buying Used Property in Japan",
    titleJa: "中古物件を買う前に確認すべき10のポイント",

    preview: "Nhà cũ ở Nhật rẻ hơn nhà mới 30-50% nhưng ẩn chứa nhiều rủi ro nếu không kiểm tra kỹ...",

    content: `
      <h1>10 điểm PHẢI kiểm tra khi mua nhà cũ ở Nhật</h1>

      <p>Nhà cũ (中古物件) ở Nhật có giá rẻ hơn nhà mới 30–50%, nhưng nếu không kiểm tra kỹ, bạn có thể gánh chi phí sửa chữa rất lớn sau khi mua.</p>

      <h2>1. Năm xây dựng — Tiêu chuẩn chống động đất</h2>
      <p>Nhật Bản có 2 tiêu chuẩn chính:</p>
      <ul>
        <li><strong>Trước 1981</strong>: tiêu chuẩn cũ, rủi ro cao hơn</li>
        <li><strong>Sau 1981</strong>: tiêu chuẩn mới, an toàn hơn nhiều</li>
      </ul>

      <div class="tip-box">
        <strong>💡 Mẹo:</strong> Nếu nhà xây trước 1981, hãy yêu cầu báo cáo kiểm tra chống động đất (耐震診断) trước khi quyết định.
      </div>

      <h2>2. Kiểm tra nước — Rò rỉ & áp lực</h2>
      <p>Mở tất cả vòi nước, kiểm tra áp lực, màu nước, và kiểm tra dưới sàn nhà bếp/nhà tắm xem có vết ẩm không.</p>

      <h2>3. Mái nhà & tường ngoài</h2>
      <p>Vết nứt trên tường ngoài có thể là dấu hiệu lún nền hoặc động đất nhẹ trước đó.</p>

      <h2>4. Kiểm tra mối (白蟻)</h2>
      <p>Nhà gỗ ở Nhật rất dễ bị mối. Chi phí xử lý có thể lên đến 50万円.</p>

      <div class="tip-box">
        <strong>⚠️ Quan trọng:</strong> Luôn thuê インスペクター (home inspector) chuyên nghiệp. Chi phí khoảng 5万円 nhưng có thể giúp tiết kiệm hàng trăm triệu đồng.
      </div>

      <p>Liên hệ chúng tôi để được tư vấn chi tiết miễn phí về các bước kiểm tra còn lại.</p>
    `,
  },

  {
    id:       2,
    emoji:    "📋",
    cat:      "legal",
    catLabel: "Pháp lý",

    title:   "Người nước ngoài mua nhà ở Nhật: Quy trình từ A-Z",
    titleEn: "Foreigners Buying Property in Japan: A to Z Guide",
    titleJa: "外国人が日本で家を買う手順と法律",

    preview: "Người nước ngoài được phép mua nhà ở Nhật không hạn chế, nhưng quy trình có một số điểm cần lưu ý...",

    content: `
      <h1>Người nước ngoài mua nhà ở Nhật: Quy trình từ A-Z</h1>

      <p>Tin vui: Nhật Bản <strong>không hạn chế người nước ngoài mua bất động sản</strong>. Không cần visa đặc biệt.</p>

      <h2>Giấy tờ cần thiết</h2>
      <ul>
        <li>Hộ chiếu (パスポート)</li>
        <li>Thẻ cư trú (在留カード) — nếu đang ở Nhật</li>
        <li>Con dấu cá nhân (印鑑) hoặc ký tên</li>
        <li>Tài khoản ngân hàng Nhật</li>
      </ul>

      <h2>Quy trình 5 bước</h2>
      <ul>
        <li><strong>Bước 1:</strong> Tìm kiếm & xem nhà</li>
        <li><strong>Bước 2:</strong> Đặt cọc (手付金) — thường 5–10% giá nhà</li>
        <li><strong>Bước 3:</strong> Ký hợp đồng mua bán (売買契約)</li>
        <li><strong>Bước 4:</strong> Vay ngân hàng (nếu cần)</li>
        <li><strong>Bước 5:</strong> Thanh toán & đăng ký sở hữu (所有権移転登記)</li>
      </ul>

      <div class="tip-box">
        <strong>💡 Chi phí phụ thêm:</strong> Ngoài giá nhà, cần chuẩn bị thêm 6–10% cho thuế, phí công chứng, phí môi giới (3% + 6万円 + thuế).
      </div>
    `,
  },

  {
    id:       3,
    emoji:    "📐",
    cat:      "boundary",
    catLabel: "Mốc lộ giới",

    title:   "Mốc lộ giới & Setback Rules tại Nhật — Điều cần biết",
    titleEn: "Property Boundaries & Setback Rules in Japan",
    titleJa: "日本の境界線・セットバックについて",

    preview: "Một trong những vấn đề phức tạp nhất khi mua đất ở Nhật là quy định về lộ giới và setback...",

    content: `
      <h1>Mốc lộ giới & Setback Rules tại Nhật</h1>

      <p>Đây là vấn đề quan trọng nhất khi mua đất tại Nhật mà người nước ngoài thường bỏ qua.</p>

      <h2>Lộ giới (境界線) là gì?</h2>
      <p>Là đường ranh giới chính thức giữa đất của bạn và đất hàng xóm. Được đánh dấu bằng cọc kim loại chôn dưới đất.</p>

      <div class="tip-box">
        <strong>⚠️ Cảnh báo:</strong> Nếu lộ giới chưa xác nhận chính thức (境界未確定), có thể xảy ra tranh chấp sau này. Luôn yêu cầu bản đồ lộ giới (境界確認書) trước khi mua.
      </div>

      <h2>Setback (セットバック) là gì?</h2>
      <p>Nếu đất tiếp giáp đường dưới 4m, theo Luật Xây dựng Nhật, bạn phải lùi tường nhà vào để đường đạt 4m khi xây mới.</p>

      <h2>Ảnh hưởng thực tế</h2>
      <ul>
        <li>Phần đất setback không được xây dựng</li>
        <li>Không tính vào diện tích sử dụng</li>
        <li>Nhưng vẫn phải nộp thuế đất</li>
      </ul>
    `,
  },

  {
    id:       4,
    emoji:    "📈",
    cat:      "market",
    catLabel: "Thị trường",

    title:   "Thị trường BĐS Osaka 2024-2025: Xu hướng & Cơ hội",
    titleEn: "Osaka Property Market 2024-2025: Trends & Opportunities",
    titleJa: "大阪不動産市場2024-2025：トレンドと機会",

    preview: "Osaka đang trải qua giai đoạn tăng trưởng mạnh nhờ EXPO 2025 và chính sách thu hút đầu tư nước ngoài...",

    content: `
      <h1>Thị trường BĐS Osaka 2024-2025</h1>

      <p>Osaka đang là điểm nóng đầu tư BĐS tại Nhật Bản với nhiều yếu tố tích cực hội tụ.</p>

      <h2>Động lực tăng trưởng chính</h2>
      <ul>
        <li><strong>EXPO 2025</strong> tại Yumeshima — hạ tầng được đầu tư mạnh</li>
        <li><strong>IR Casino Resort</strong> dự kiến mở 2029</li>
        <li><strong>Đồng Yen yếu</strong> — giá nhà tính bằng USD/VND rất hấp dẫn</li>
        <li><strong>Du lịch phục hồi</strong> — Airbnb và cho thuê ngắn hạn sinh lời cao</li>
      </ul>

      <div class="tip-box">
        <strong>📊 Số liệu:</strong> Giá chung cư tại trung tâm Osaka tăng trung bình 8-12%/năm giai đoạn 2022-2024. Tỷ suất cho thuê (利回り) dao động 4-7%.
      </div>

      <h2>Khu vực tiềm năng nhất</h2>
      <ul>
        <li><strong>Namba / Shinsaibashi</strong>: trung tâm, cho thuê ngắn hạn sinh lời cao</li>
        <li><strong>Umeda / Fukushima</strong>: hạ tầng mới, giá tăng nhanh</li>
        <li><strong>Tenjinbashisuji</strong>: giá còn hợp lý, gần trung tâm</li>
      </ul>
    `,
  },

  // ↓ Thêm bài viết mới vào đây (copy block ở trên, dán xuống, sửa)

];
