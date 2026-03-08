/* ============================================================
   APP.JS — TOÀN BỘ LOGIC Ở ĐÂY
   Không cần sửa file này.
   Để thay đổi nội dung → sửa data.js
   Để thay đổi giao diện → sửa style.css
   ============================================================ */


// ============================================================
// PHẦN 1 — CHUỖI NGÔN NGỮ (VI / EN / JA)
// ============================================================
const LANG = {
  vi: {
    heroGreeting: 'Chào mừng bạn 👋',
    heroTitle:    'Mua nhà tại <span>Nhật Bản</span>dễ dàng hơn',
    heroDesc:     'Tư vấn bất động sản vùng Kansai — Osaka, Kyoto, Kobe. Hỗ trợ người nước ngoài từ A đến Z.',
    qL: 'Nhà đang bán',  qLs: 'Xem danh sách',
    qC: 'Tính vay',      qCs: 'Ước tính ngay',
    qK: 'Kiến thức',     qKs: 'Check nhà, pháp lý',
    qA: 'Liên hệ',       qAs: 'Tư vấn miễn phí',
    featTitle:   'TIN TỨC MỚI NHẤT',
    listTitle:   'Nhà đang bán',
    listSub:     'Kansai · Osaka · Kyoto · Kobe',
    knowTitle:   'Kiến thức BĐS Nhật',
    knowSub:     'Kinh nghiệm thực tế · Pháp lý · Thị trường',
    calcTitle:   'Tính vay',
    calcSub:     'Ước tính khoản vay mua nhà Nhật',
    lAmount:     'Số tiền vay',
    lMethod:     'Phương thức trả',
    lRate:       'Lãi suất năm (%)',
    lTerm:       'Thời hạn vay',
    mBtn1:       'Trả đều (gốc+lãi)',
    mBtn2:       'Trả đều gốc',
    btnCalc:     'Tính toán →',
    rL1: 'Hàng tháng', rL2: 'Tổng trả', rL3: 'Tổng lãi',
    tcChart: 'Biểu đồ', tcTable: 'Bảng chi tiết',
    th1: 'Tháng', th2: 'Trả/tháng', th3: 'Gốc', th4: 'Lãi', th5: 'Dư nợ',
    contactTitle: 'LIÊN HỆ NGAY',
    nl1: 'Trang chủ', nl2: 'Nhà bán', nl3: 'Kiến thức', nl4: 'Tính vay', nl5: 'Liên hệ',
    catAll: 'Tất cả',
    sfYear: 'năm', sfMo: 'tháng',
    forSale: 'Đang bán', apt: 'Chung cư', house: 'Nhà riêng',
  },

  en: {
    heroGreeting: 'Welcome 👋',
    heroTitle:    'Buy property in <span>Japan</span><br>made easy',
    heroDesc:     'Real estate consulting in Kansai — Osaka, Kyoto, Kobe. Full support for foreigners.',
    qL: 'Listings',    qLs: 'Browse now',
    qC: 'Loan Calc',   qCs: 'Estimate now',
    qK: 'Knowledge',   qKs: 'Inspection, legal',
    qA: 'Contact',     qAs: 'Free consultation',
    featTitle:   'LATEST NEWS',
    listTitle:   'Properties for Sale',
    listSub:     'Kansai · Osaka · Kyoto · Kobe',
    knowTitle:   'Japan Real Estate Guide',
    knowSub:     'Practical advice · Legal · Market',
    calcTitle:   'Loan Calculator',
    calcSub:     'Estimate your Japan home loan',
    lAmount:     'Loan Amount',
    lMethod:     'Repayment Method',
    lRate:       'Annual Interest (%)',
    lTerm:       'Loan Term',
    mBtn1:       'Equal Payment',
    mBtn2:       'Equal Principal',
    btnCalc:     'Calculate →',
    rL1: 'Monthly', rL2: 'Total', rL3: 'Interest',
    tcChart: 'Chart', tcTable: 'Schedule',
    th1: 'Month', th2: 'Payment', th3: 'Principal', th4: 'Interest', th5: 'Balance',
    contactTitle: 'CONTACT US',
    nl1: 'Home', nl2: 'Listings', nl3: 'Knowledge', nl4: 'Loan Calc', nl5: 'Contact',
    catAll: 'All',
    sfYear: 'yr', sfMo: 'mo',
    forSale: 'For Sale', apt: 'Apartment', house: 'House',
  },

  ja: {
    heroGreeting: 'ようこそ 👋',
    heroTitle:    '<span>日本</span>の不動産購入を<br>もっと身近に',
    heroDesc:     '関西エリア（大阪・京都・神戸）の不動産をサポート。外国人のお客様も安心。',
    qL: '物件一覧',      qLs: '一覧を見る',
    qC: 'ローン計算',    qCs: '今すぐ試算',
    qK: 'お役立ち情報',  qKs: '物件チェック・法律',
    qA: 'お問い合わせ',  qAs: '無料相談',
    featTitle:   '最新ニュース',
    listTitle:   '売り出し中の物件',
    listSub:     '関西 · 大阪 · 京都 · 神戸',
    knowTitle:   '不動産お役立ちガイド',
    knowSub:     '実践的アドバイス · 法律 · 市場動向',
    calcTitle:   'ローン計算',
    calcSub:     '住宅ローンの試算',
    lAmount:     '借入金額',
    lMethod:     '返済方式',
    lRate:       '金利（年利）',
    lTerm:       '返済期間',
    mBtn1:       '元利均等',
    mBtn2:       '元金均等',
    btnCalc:     '計算する →',
    rL1: '月払い', rL2: '総返済額', rL3: '利息合計',
    tcChart: 'グラフ', tcTable: '返済一覧',
    th1: '年月', th2: '返済額', th3: '元金', th4: '利息', th5: '残高',
    contactTitle: 'お問い合わせ',
    nl1: 'ホーム', nl2: '物件', nl3: 'ガイド', nl4: 'ローン', nl5: '相談',
    catAll: 'すべて',
    sfYear: '年', sfMo: 'ヶ月',
    forSale: '売り出し中', apt: 'マンション', house: '一戸建て',
  },
};


// ============================================================
// PHẦN 2 — TRẠNG THÁI ỨNG DỤNG
// ============================================================
let lang        = 'vi';
let calcMethod  = 'ep';
let chartInst   = null;
let listFilter  = 'all';
let knowFilter  = 'all';


// ============================================================
// PHẦN 3 — LẤY DỮ LIỆU
// Ưu tiên localStorage (Admin Panel), fallback về data.js
// ============================================================
function getListings() {
  try { return JSON.parse(localStorage.getItem('listings')) || LISTINGS; }
  catch { return LISTINGS; }
}

function getArticles() {
  try { return JSON.parse(localStorage.getItem('articles')) || ARTICLES; }
  catch { return ARTICLES; }
}

function getCompany() {
  try {
    return JSON.parse(localStorage.getItem('company')) || { ...COMPANY, contacts: CONTACTS };
  }
  catch { return { ...COMPANY, contacts: CONTACTS }; }
}


// ============================================================
// PHẦN 4 — ĐIỀU HƯỚNG
// ============================================================
function goTo(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('screen-' + screen).classList.add('active');
  document.getElementById('nav-' + screen).classList.add('active');
  document.querySelector('.page').scrollTop = 0;
}


// ============================================================
// PHẦN 5 — NGÔN NGỮ
// ============================================================
function setLang(l) {
  lang = l;

  // Cập nhật nút active
  document.querySelectorAll('.lp').forEach((b, i) =>
    b.classList.toggle('active', ['ja', 'en', 'vi'][i] === l)
  );

  // Cập nhật tất cả text trong app
  const S = LANG[l];
  Object.keys(S).forEach(k => {
    const el = document.getElementById(k);
    if (!el) return;
    if (k === 'heroTitle') el.innerHTML = S[k];
    else el.textContent = S[k];
  });

  renderAll();
}


// ============================================================
// PHẦN 6 — RENDER (vẽ nội dung lên màn hình)
// ============================================================
function renderAll() {
  const co = getCompany();
  document.getElementById('brandName').textContent  = co.name;
  document.getElementById('coName').textContent     = co.name;
  document.getElementById('coTagline').textContent  = co.tagline;
  document.getElementById('coBio').textContent      = co.bio;
  renderStats(co);
  renderContacts(co);
  renderHomeNews();
  renderListings();
  renderArticles();
}

// --- Số liệu thống kê ---
function renderStats(co) {
  document.getElementById('statsRow').innerHTML = (co.stats || COMPANY.stats)
    .map(s => `
      <div class="stat-box">
        <div class="stat-num">${s.number}</div>
        <div class="stat-desc">${s.label[lang] || s.label.vi}</div>
      </div>`)
    .join('');
}

// --- Nút liên hệ ---
function renderContacts(co) {
  const contacts = co.contacts || CONTACTS;
  document.getElementById('contactButtons').innerHTML = contacts
    .map(c => `
      <a class="contact-btn" href="${c.url}" target="_blank">
        <span class="contact-btn-icon">${c.icon}</span>
        <span>
          <div class="contact-btn-label">${c.label}</div>
          <div class="contact-btn-sub">${c.sub}</div>
        </span>
      </a>`)
    .join('');
}

// --- Tin tức trang chủ (2 bài mới nhất) ---
function renderHomeNews() {
  const arts = getArticles().slice(0, 2);
  document.getElementById('homeNews').innerHTML = arts
    .map(a => `
      <div class="article-card" onclick="openArticle(${a.id})" style="margin-bottom:12px;">
        <div class="article-icon">${a.emoji}</div>
        <div>
          <div class="article-cat">${a.catLabel}</div>
          <div class="article-title">${lang==='ja' ? a.titleJa : lang==='en' ? a.titleEn : a.title}</div>
          <div class="article-preview">${a.preview}</div>
        </div>
      </div>`)
    .join('');
}

// --- Danh sách nhà ---
function renderListings() {
  const S = LANG[lang];
  const listings = getListings();

  const cats = [
    { key: 'all',       label: S.catAll },
    { key: 'apartment', label: S.apt },
    { key: 'house',     label: S.house },
  ];

  document.getElementById('listCats').innerHTML = cats
    .map(c => `<div class="cat-pill ${listFilter===c.key?'active':''}" onclick="filterListings('${c.key}')">${c.label}</div>`)
    .join('');

  const filtered = listFilter === 'all' ? listings : listings.filter(l => l.type === listFilter);

  document.getElementById('listingsGrid').innerHTML = filtered
    .map(l => `
      <div class="listing-card">
        <div class="listing-img">${l.emoji}</div>
        <div class="listing-body">
          <div class="listing-price">${l.price}</div>
          <div class="listing-name">${lang==='ja' ? l.name : lang==='en' ? l.nameEn : l.nameVi}</div>
          <div class="listing-loc">📍 ${l.area}</div>
          <div class="listing-tags">
            <span class="chip">${l.beds}</span>
            <span class="chip">${l.sqm}</span>
            <span class="chip gold">${S.forSale}</span>
          </div>
        </div>
      </div>`)
    .join('');
}

function filterListings(cat) {
  listFilter = cat;
  renderListings();
}

// --- Bài viết ---
function renderArticles() {
  const S = LANG[lang];
  const articles = getArticles();

  const catMap = {};
  articles.forEach(a => catMap[a.cat] = a.catLabel);
  const cats = ['all', ...Object.keys(catMap)];

  document.getElementById('knowCats').innerHTML = cats
    .map(c => `<div class="cat-pill ${knowFilter===c?'active':''}" onclick="filterArticles('${c}')">${c==='all' ? S.catAll : catMap[c]}</div>`)
    .join('');

  const filtered = knowFilter === 'all' ? articles : articles.filter(a => a.cat === knowFilter);

  document.getElementById('articlesList').innerHTML = filtered
    .map(a => `
      <div class="article-card" onclick="openArticle(${a.id})">
        <div class="article-icon">${a.emoji}</div>
        <div>
          <div class="article-cat">${a.catLabel}</div>
          <div class="article-title">${lang==='ja' ? a.titleJa : lang==='en' ? a.titleEn : a.title}</div>
          <div class="article-preview">${a.preview}</div>
        </div>
      </div>`)
    .join('');
}

function filterArticles(cat) {
  knowFilter = cat;
  renderArticles();
}

// --- Mở bài viết chi tiết ---
function openArticle(id) {
  const a = getArticles().find(x => x.id === id);
  if (!a) return;
  document.getElementById('detailCat').textContent     = a.catLabel;
  document.getElementById('detailContent').innerHTML   = a.content;
  document.getElementById('articleDetail').classList.add('open');
}

function closeArticle() {
  document.getElementById('articleDetail').classList.remove('open');
}


// ============================================================
// PHẦN 7 — TÍNH VAY
// ============================================================
function setCalcMethod(m, btn) {
  calcMethod = m;
  document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function doCalc() {
  const principal = parseFloat(document.getElementById('loanAmt').value) * 10000;
  const rate      = parseFloat(document.getElementById('loanRate').value) / 100 / 12;
  const total     = (parseInt(document.getElementById('loanYrs').value) || 0) * 12
                  + (parseInt(document.getElementById('loanMos').value) || 0);

  if (!principal || !total) return;

  // Tính lịch trả nợ
  const sched = [];
  let balance = principal;
  const basePrin = principal / total;

  for (let i = 0; i < total; i++) {
    const interest = balance * rate;
    let prin, payment;

    if (calcMethod === 'ep') {
      // Trả đều gốc + lãi
      payment = rate === 0
        ? principal / total
        : principal * rate * Math.pow(1+rate, total) / (Math.pow(1+rate, total) - 1);
      prin = payment - interest;
    } else {
      // Trả đều gốc
      prin    = basePrin;
      payment = prin + interest;
    }

    balance -= prin;
    if (balance < 0.01) balance = 0;

    sched.push({
      mo:        i + 1,
      payment:   Math.round(payment),
      principal: Math.round(prin),
      interest:  Math.round(interest),
      balance:   Math.round(balance),
    });
  }

  // Hiển thị kết quả
  const S        = LANG[lang];
  const fmt      = n => Math.round(Math.abs(n)).toLocaleString();
  const totalPay = sched.reduce((s, r) => s + r.payment, 0);
  const totalInt = sched.reduce((s, r) => s + r.interest, 0);

  document.getElementById('rMonthly').textContent = '¥' + fmt(sched[0].payment);
  document.getElementById('rTotal').textContent   = '¥' + fmt(totalPay);
  document.getElementById('rInt').textContent     = '¥' + fmt(totalInt);
  document.getElementById('calcResult').classList.remove('hidden');

  // Vẽ biểu đồ
  const step = Math.max(1, Math.floor(sched.length / 48));
  const sam  = sched.filter((_, i) => i % step === 0);
  const ctx  = document.getElementById('calcChart').getContext('2d');

  if (chartInst) chartInst.destroy();
  chartInst = new Chart(ctx, {
    type: 'line',
    data: {
      labels: sam.map(r => '#' + r.mo),
      datasets: [
        {
          label:           S.th5,
          data:            sam.map(r => Math.round(r.balance / 10000)),
          borderColor:     '#00c896',
          backgroundColor: 'rgba(0,200,150,0.08)',
          fill:            true,
          tension:         0.4,
          pointRadius:     0,
          borderWidth:     2,
        },
        {
          label:       S.th4,
          data:        sam.map(r => Math.round(r.interest / 10000)),
          borderColor: '#ff6b6b',
          fill:        false,
          tension:     0.4,
          pointRadius: 0,
          borderWidth: 1.5,
        },
      ],
    },
    options: {
      responsive:          true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#7a9e98', font: { size: 10 }, boxWidth: 10 } }
      },
      scales: {
        x: { ticks: { color: '#4a7a74', font: { size: 9 }, maxTicksLimit: 6 }, grid: { color: 'rgba(255,255,255,0.03)' } },
        y: { ticks: { color: '#4a7a74', font: { size: 9 }, callback: v => '¥' + v + '万' }, grid: { color: 'rgba(255,255,255,0.03)' } },
      },
    },
  });

  // Vẽ bảng
  document.getElementById('calcTbody').innerHTML = sched
    .map(r => `
      <tr>
        <td>${r.mo}</td>
        <td>¥${fmt(r.payment)}</td>
        <td class="c-prin">¥${fmt(r.principal)}</td>
        <td class="c-int">¥${fmt(r.interest)}</td>
        <td>¥${fmt(r.balance)}</td>
      </tr>`)
    .join('');
}

function showCalcTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('calcChartWrap').classList.toggle('section-hidden', tab !== 'chart');
  document.getElementById('calcTableWrap').classList.toggle('section-hidden', tab !== 'table');
}


// ============================================================
// PHẦN 8 — KHỞI ĐỘNG
// ============================================================

// Đăng ký Service Worker (cho phép dùng offline)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

// Khởi động app với ngôn ngữ mặc định
setLang('vi');
