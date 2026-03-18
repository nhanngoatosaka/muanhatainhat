/* ============================================================
   APP.JS — LOGIC ỨNG DỤNG
   Không cần sửa file này.
   Nội dung → data.js  |  Giao diện → style.css
   ============================================================ */


// ============================================================
// 1 — CHUỖI NGÔN NGỮ
// ============================================================
const LANG = {
  vi: {
    heroLabel: '🧮 Công cụ tính toán',
    heroTitle: 'Tính khoản vay\nmua nhà Nhật',
    hDetailTxt: 'Xem biểu đồ & bảng chi tiết →',
    qL:'Nhà đang bán', qLs:'Xem danh sách',
    qR:'Tính tiền thuê', qRs:'Ước tính chi phí',
    qK:'Kiến thức',    qKs:'Check nhà, pháp lý',
    qA:'Liên hệ',      qAs:'Tư vấn miễn phí',
    featTitle:'BÀI VIẾT MỚI NHẤT',
    listTitle:'Nhà đang bán',  listSub:'Kansai · Osaka · Kyoto · Kobe',
    knowTitle:'Kiến thức BĐS', knowSub:'Kinh nghiệm · Pháp lý · Thị trường',
    calcTitle:'Tính vay chi tiết', calcSub:'Biểu đồ & bảng dư nợ hàng tháng',
    lAmount:'Số tiền vay',  lAmountH:'Số tiền vay',
    lMethod:'Phương thức',  lMethodH:'Phương thức',
    lRate:'Lãi suất / năm', lRateH:'Lãi suất / năm',
    lTerm:'Thời hạn',       lTermH:'Thời hạn (năm)',
    mBtn1:'Trả đều gốc+lãi', mBtn2:'Trả đều gốc',
    hMBtn1:'Trả đều gốc+lãi', hMBtn2:'Trả đều gốc',
    btnCalc:'Tính toán →', hBtnCalc:'Tính toán →',
    rL1:'Hàng tháng', rL2:'Tổng trả', rL3:'Tổng lãi',
    hRL1:'Hàng tháng', hRL2:'Tổng trả', hRL3:'Tổng lãi',
    tcChart:'Biểu đồ', tcTable:'Bảng chi tiết',
    th1:'Tháng', th2:'Trả/tháng', th3:'Gốc', th4:'Lãi', th5:'Dư nợ',
    contactTitle:'LIÊN HỆ NGAY',
    nl1:'Trang chủ', nl3:'Kiến thức', nl4:'Vay mua nhà', nl5:'Liên hệ', nl6:'Thuê nhà',
    rentalTitle:'Tính tiền thuê nhà', rentalSub:'Ước tính tổng chi phí trong thời gian thuê',
    rentalSoon:'Tính năng đang phát triển', rentalSoonSub:'Sắp ra mắt! Bạn sẽ tính được tổng chi phí thuê nhà theo từng giai đoạn.',
    /* nl2 ẩn tạm: nl2:'Nhà bán', */
    catAll:'Tất cả', sfYear:'năm', sfMo:'tháng', hSfYear:'năm',
    forSale:'Đang bán', apt:'Chung cư', house:'Nhà riêng',
  },
  en: {
    heroLabel: '🧮 Loan Calculator',
    heroTitle: 'Estimate your\nJapan home loan',
    hDetailTxt: 'View chart & full schedule →',
    qL:'Listings',   qLs:'Browse now',
    qR:'Rent Calc',   qRs:'Estimate costs',
    qK:'Knowledge',  qKs:'Inspection, legal',
    qA:'Contact',    qAs:'Free consultation',
    featTitle:'LATEST ARTICLES',
    listTitle:'Properties for Sale', listSub:'Kansai · Osaka · Kyoto · Kobe',
    knowTitle:'Japan RE Guide',      knowSub:'Practical · Legal · Market',
    calcTitle:'Detailed Calculator', calcSub:'Chart & monthly schedule',
    lAmount:'Loan Amount',  lAmountH:'Loan Amount',
    lMethod:'Method',       lMethodH:'Method',
    lRate:'Annual Rate',    lRateH:'Annual Rate',
    lTerm:'Term',           lTermH:'Term (years)',
    mBtn1:'Equal Payment', mBtn2:'Equal Principal',
    hMBtn1:'Equal Payment', hMBtn2:'Equal Principal',
    btnCalc:'Calculate →', hBtnCalc:'Calculate →',
    rL1:'Monthly', rL2:'Total', rL3:'Interest',
    hRL1:'Monthly', hRL2:'Total', hRL3:'Interest',
    tcChart:'Chart', tcTable:'Schedule',
    th1:'Month', th2:'Payment', th3:'Principal', th4:'Interest', th5:'Balance',
    contactTitle:'CONTACT US',
    nl1:'Home', nl3:'Knowledge', nl4:'Loan Calc', nl5:'Contact', nl6:'Rent Calc',
    rentalTitle:'Rental Cost Calculator', rentalSub:'Estimate your total rental costs',
    rentalSoon:'Coming Soon', rentalSoonSub:'Calculate total rental costs by phase — move-in, renewal, and move-out.',
    /* nl2:'Listings', */
    catAll:'All', sfYear:'yr', sfMo:'mo', hSfYear:'yr',
    forSale:'For Sale', apt:'Apartment', house:'House',
  },
  ja: {
    heroLabel: '🧮 ローン計算ツール',
    heroTitle: '住宅ローンを\n今すぐ試算',
    hDetailTxt: 'グラフ・返済表を見る →',
    qL:'物件一覧',     qLs:'一覧を見る',
    qR:'家賃計算',     qRs:'費用を試算する',
    qK:'お役立ち情報', qKs:'物件チェック・法律',
    qA:'お問い合わせ', qAs:'無料相談',
    featTitle:'最新記事',
    listTitle:'売り出し中の物件', listSub:'関西 · 大阪 · 京都 · 神戸',
    knowTitle:'不動産ガイド',     knowSub:'実践 · 法律 · 市場動向',
    calcTitle:'詳細ローン計算',   calcSub:'グラフ・返済スケジュール',
    lAmount:'借入金額',  lAmountH:'借入金額',
    lMethod:'返済方式',  lMethodH:'返済方式',
    lRate:'金利（年利）', lRateH:'金利（年利）',
    lTerm:'返済期間',    lTermH:'返済期間（年）',
    mBtn1:'元利均等', mBtn2:'元金均等',
    hMBtn1:'元利均等', hMBtn2:'元金均等',
    btnCalc:'計算する →', hBtnCalc:'計算する →',
    rL1:'月払い', rL2:'総返済額', rL3:'利息合計',
    hRL1:'月払い', hRL2:'総返済額', hRL3:'利息合計',
    tcChart:'グラフ', tcTable:'返済一覧',
    th1:'年月', th2:'返済額', th3:'元金', th4:'利息', th5:'残高',
    contactTitle:'お問い合わせ',
    nl1:'ホーム', nl3:'ガイド', nl4:'住宅ローン', nl5:'相談', nl6:'家賃計算',
    rentalTitle:'家賃計算', rentalSub:'賃貸にかかる総費用を試算',
    rentalSoon:'準備中', rentalSoonSub:'入居・更新・退去にかかる費用をまとめて計算できます。',
    /* nl2:'物件', */
    catAll:'すべて', sfYear:'年', sfMo:'ヶ月', hSfYear:'年',
    forSale:'売り出し中', apt:'マンション', house:'一戸建て',
  },
};


// ============================================================
// 2 — STATE
// ============================================================
let lang         = 'vi';
let calcMethodD  = 'ep';   // detail tab
let calcMethodH  = 'ep';   // home hero
let chartInst    = null;
let listFilter   = 'all';
let knowFilter   = 'all';


// ============================================================
// 3 — LẤY DỮ LIỆU (localStorage → data.js fallback)
// ============================================================
function getListings() {
  try { return JSON.parse(localStorage.getItem('listings')) || LISTINGS; } catch { return LISTINGS; }
}
function getArticles() {
  try { return JSON.parse(localStorage.getItem('articles')) || ARTICLES; } catch { return ARTICLES; }
}
function getCompany() {
  try { return JSON.parse(localStorage.getItem('company')) || { ...COMPANY, contacts: CONTACTS }; }
  catch { return { ...COMPANY, contacts: CONTACTS }; }
}


// ============================================================
// 4 — ĐIỀU HƯỚNG
// ============================================================
function goTo(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('screen-' + screen).classList.add('active');
  document.getElementById('nav-' + screen).classList.add('active');
  document.querySelector('.page').scrollTop = 0;
}


// ============================================================
// 5 — NGÔN NGỮ
// ============================================================
function setLang(l) {
  lang = l;
  document.querySelectorAll('.lp').forEach((b, i) =>
    b.classList.toggle('active', ['ja','en','vi'][i] === l)
  );
  const S = LANG[l];
  Object.keys(S).forEach(k => {
    const el = document.getElementById(k);
    if (!el) return;
    if (k === 'heroTitle') el.innerHTML = S[k].replace('\n','<br>');
    else el.textContent = S[k];
  });
  renderAll();
}


// ============================================================
// 6 — RENDER
// ============================================================
function renderAll() {
  const co = getCompany();
  document.getElementById('brandName').textContent = co.name;
  document.getElementById('coName').textContent    = co.name;
  document.getElementById('coTagline').textContent = co.tagline;
  document.getElementById('coBio').textContent     = co.bio;
  renderStats(co);
  renderContacts(co);
  renderHomeNews();
  renderListings();
  renderArticles();
}

function renderStats(co) {
  document.getElementById('statsRow').innerHTML = (co.stats || COMPANY.stats).map(s => `
    <div class="stat-box">
      <div class="stat-num">${s.number}</div>
      <div class="stat-desc">${s.label[lang] || s.label.vi}</div>
    </div>`).join('');
}

function renderContacts(co) {
  document.getElementById('contactButtons').innerHTML = (co.contacts || CONTACTS).map(c => `
    <a class="contact-btn" href="${c.url}" target="_blank">
      <span class="contact-btn-icon">${c.icon}</span>
      <span>
        <div class="contact-btn-label">${c.label}</div>
        <div class="contact-btn-sub">${c.sub}</div>
      </span>
    </a>`).join('');
}

function renderHomeNews() {
  document.getElementById('homeNews').innerHTML = getArticles().slice(0,2).map(a => `
    <div class="article-card" onclick="openArticle(${a.id})" style="margin-bottom:12px;">
      <div class="article-icon">${a.emoji}</div>
      <div>
        <div class="article-cat">${a.catLabel}</div>
        <div class="article-title">${lang==='ja'?a.titleJa:lang==='en'?a.titleEn:a.title}</div>
        <div class="article-preview">${a.preview}</div>
      </div>
    </div>`).join('');
}

function renderListings() {
  const S = LANG[lang];
  const listings = getListings();
  const cats = [
    { key:'all',       label:S.catAll },
    { key:'apartment', label:S.apt },
    { key:'house',     label:S.house },
  ];
  document.getElementById('listCats').innerHTML = cats.map(c =>
    `<div class="cat-pill ${listFilter===c.key?'active':''}" onclick="filterListings('${c.key}')">${c.label}</div>`
  ).join('');
  const filtered = listFilter==='all' ? listings : listings.filter(l => l.type===listFilter);
  document.getElementById('listingsGrid').innerHTML = filtered.map(l => `
    <div class="listing-card">
      <div class="listing-img">${l.emoji}</div>
      <div class="listing-body">
        <div class="listing-price">${l.price}</div>
        <div class="listing-name">${lang==='ja'?l.name:lang==='en'?l.nameEn:l.nameVi}</div>
        <div class="listing-loc">📍 ${l.area}</div>
        <div class="listing-tags">
          <span class="chip">${l.beds}</span>
          <span class="chip">${l.sqm}</span>
          <span class="chip peach">${S.forSale}</span>
        </div>
      </div>
    </div>`).join('');
}

function filterListings(cat) { listFilter=cat; renderListings(); }

function renderArticles() {
  const S = LANG[lang];
  const articles = getArticles();
  const catMap = {};
  articles.forEach(a => catMap[a.cat] = a.catLabel);
  const cats = ['all', ...Object.keys(catMap)];
  document.getElementById('knowCats').innerHTML = cats.map(c =>
    `<div class="cat-pill ${knowFilter===c?'active':''}" onclick="filterArticles('${c}')">${c==='all'?S.catAll:catMap[c]}</div>`
  ).join('');
  const filtered = knowFilter==='all' ? articles : articles.filter(a => a.cat===knowFilter);
  document.getElementById('articlesList').innerHTML = filtered.map(a => `
    <div class="article-card" onclick="openArticle(${a.id})">
      <div class="article-icon">${a.emoji}</div>
      <div>
        <div class="article-cat">${a.catLabel}</div>
        <div class="article-title">${lang==='ja'?a.titleJa:lang==='en'?a.titleEn:a.title}</div>
        <div class="article-preview">${a.preview}</div>
      </div>
    </div>`).join('');
}

function filterArticles(cat) { knowFilter=cat; renderArticles(); }

function openArticle(id) {
  const a = getArticles().find(x => x.id===id);
  if (!a) return;
  document.getElementById('detailCat').textContent   = a.catLabel;
  document.getElementById('detailContent').innerHTML = a.content;
  document.getElementById('articleDetail').classList.add('open');
}
function closeArticle() {
  document.getElementById('articleDetail').classList.remove('open');
}


// ============================================================
// 7 — TÍNH VAY
// ============================================================

// Đổi phương thức — dùng chung cho cả 2 form (h=home, d=detail)
function setCalcMethod(m, btn, form) {
  if (form === 'h') {
    calcMethodH = m;
    btn.parentElement.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
  } else {
    calcMethodD = m;
    btn.parentElement.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
  }
  btn.classList.add('active');
}

// Hàm tính lõi — trả về mảng schedule
function calcSchedule(principal, rateYear, totalMonths, method) {
  const rate = rateYear / 100 / 12;
  const sched = [];
  let balance = principal;
  const basePrin = principal / totalMonths;
  for (let i = 0; i < totalMonths; i++) {
    const interest = balance * rate;
    let prin, payment;
    if (method === 'ep') {
      payment = rate === 0
        ? principal / totalMonths
        : principal * rate * Math.pow(1+rate,totalMonths) / (Math.pow(1+rate,totalMonths)-1);
      prin = payment - interest;
    } else {
      prin = basePrin; payment = prin + interest;
    }
    balance -= prin;
    if (balance < 0.01) balance = 0;
    sched.push({
      mo: i+1,
      payment:   Math.round(payment),
      principal: Math.round(prin),
      interest:  Math.round(interest),
      balance:   Math.round(balance),
    });
  }
  return sched;
}

// Form trên homepage (quick calc)
function doCalcHome() {
  const principal = parseFloat(document.getElementById('hLoanAmt').value) * 10000;
  const rate      = parseFloat(document.getElementById('hLoanRate').value);
  const years     = parseInt(document.getElementById('hLoanYrs').value) || 0;
  if (!principal || !years) return;

  const sched    = calcSchedule(principal, rate, years*12, calcMethodH);
  const S        = LANG[lang];
  const fmt      = n => Math.round(Math.abs(n)).toLocaleString();
  const totalPay = sched.reduce((s,r) => s+r.payment, 0);
  const totalInt = sched.reduce((s,r) => s+r.interest, 0);

  document.getElementById('hMonthly').textContent = '¥' + fmt(sched[0].payment);
  document.getElementById('hTotal').textContent   = '¥' + fmt(totalPay);
  document.getElementById('hInt').textContent     = '¥' + fmt(totalInt);
  document.getElementById('hCalcResult').classList.remove('hidden');
  document.getElementById('hDetailLink').classList.remove('hidden');

  // Sync sang form detail
  document.getElementById('loanAmt').value  = document.getElementById('hLoanAmt').value;
  document.getElementById('loanRate').value = document.getElementById('hLoanRate').value;
  document.getElementById('loanYrs').value  = document.getElementById('hLoanYrs').value;
  document.getElementById('loanMos').value  = 0;
}

// Form trang Tính vay chi tiết (có biểu đồ + bảng)
function doCalc() {
  const principal = parseFloat(document.getElementById('loanAmt').value) * 10000;
  const rate      = parseFloat(document.getElementById('loanRate').value);
  const total     = (parseInt(document.getElementById('loanYrs').value)||0)*12
                  + (parseInt(document.getElementById('loanMos').value)||0);
  if (!principal || !total) return;

  const sched    = calcSchedule(principal, rate, total, calcMethodD);
  const S        = LANG[lang];
  const fmt      = n => Math.round(Math.abs(n)).toLocaleString();
  const totalPay = sched.reduce((s,r) => s+r.payment, 0);
  const totalInt = sched.reduce((s,r) => s+r.interest, 0);

  document.getElementById('rMonthly').textContent = '¥' + fmt(sched[0].payment);
  document.getElementById('rTotal').textContent   = '¥' + fmt(totalPay);
  document.getElementById('rInt').textContent     = '¥' + fmt(totalInt);
  document.getElementById('calcResult').classList.remove('hidden');

  // Biểu đồ
  const step = Math.max(1, Math.floor(sched.length/48));
  const sam  = sched.filter((_,i) => i%step===0);
  const ctx  = document.getElementById('calcChart').getContext('2d');
  if (chartInst) chartInst.destroy();
  chartInst = new Chart(ctx, {
    type: 'line',
    data: {
      labels: sam.map(r => '#'+r.mo),
      datasets: [
        { label:S.th5, data:sam.map(r=>Math.round(r.balance/10000)),  borderColor:'#FD7B41', backgroundColor:'rgba(253,123,65,0.08)', fill:true,  tension:0.4, pointRadius:0, borderWidth:2 },
        { label:S.th4, data:sam.map(r=>Math.round(r.interest/10000)), borderColor:'#e05555', fill:false, tension:0.4, pointRadius:0, borderWidth:1.5 },
      ],
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins: { legend:{ labels:{ color:'#8a8a85', font:{size:10}, boxWidth:10 } } },
      scales: {
        x: { ticks:{ color:'#8a8a85', font:{size:9}, maxTicksLimit:6 }, grid:{ color:'rgba(60,64,68,0.06)' } },
        y: { ticks:{ color:'#8a8a85', font:{size:9}, callback:v=>'¥'+v+'万' }, grid:{ color:'rgba(60,64,68,0.06)' } },
      },
    },
  });

  // Bảng
  document.getElementById('calcTbody').innerHTML = sched.map(r =>
    `<tr>
      <td>${r.mo}</td>
      <td>¥${fmt(r.payment)}</td>
      <td class="c-prin">¥${fmt(r.principal)}</td>
      <td class="c-int">¥${fmt(r.interest)}</td>
      <td>¥${fmt(r.balance)}</td>
    </tr>`
  ).join('');
}

function showCalcTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('calcChartWrap').classList.toggle('section-hidden', tab!=='chart');
  document.getElementById('calcTableWrap').classList.toggle('section-hidden', tab!=='table');
}


// ============================================================
// 8 — KHỞI ĐỘNG
// ============================================================
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');

setLang('vi');


// ============================================================
// PHẦN 9 — LANG STRINGS MỚI (Thuê nhà & Chi phí mua nhà)
// ============================================================

const LANG_EXTRA = {
  vi: {
    // Buy cost section
    buySectionLabel: 'Chi phí mua nhà',
    buyCardA: 'A · Chi phí 1 lần khi mua',
    buyCardB: 'B · Chi phí định kỳ',
    buyCardC: 'C · Phí chung cư hàng tháng',
    buyCardD: 'D · Bảo trì nhà riêng',
    btnApt:   '🏢 Chung cư',
    btnHouse: '🏠 Nhà riêng',
    buyLabelStamp:      'Thuế tem hợp đồng',
    buyLabelAgent:      'Phí môi giới',
    buyLabelReg1:       'Đăng ký sở hữu',
    buyLabelReg2:       'Đăng ký thế chấp',
    buyLabelTax:        'Thuế đất & nhà · mỗi năm',
    buyLabelFire:       'Bảo hiểm hỏa hoạn · mỗi 5 năm',
    buyLabelMgmt:       'Phí quản lý + quỹ sửa chữa',
    buyLabelParking:    'Bãi xe',
    buyLabelRepair:     'Chi phí tu sửa mỗi lần',
    buyLabelRepairEvery:'Mỗi bao nhiêu năm?',
    buyRepairUnit:      'năm',
    buyAddOnetime:      'Thêm khoản khác',
    btnBuyCost:         'Tính chi phí mua nhà →',
    buyResOnetimeLabel: '💴 Bỏ ra 1 lần khi mua nhà',
    buyResMonthlyLabel: '📅 Thực tế mỗi tháng phải trả',
    buyResNote:         '💡 Số liệu là ước tính. Chi phí thực tế tùy hợp đồng và địa phương.\n👉 Liên hệ chúng tôi để được tư vấn miễn phí.',

    // Rental
    rentalTitle:       'Tính tiền thuê nhà',
    rentalSub:         'Ước tính tổng chi phí trong thời gian thuê',
    rentalCycleLabel:  'Chu kỳ hợp đồng',
    rCycle1: '1 năm', rCycle2: '2 năm',
    rCard1: '① Đóng hàng tháng',
    rCard2: '② Đầu vào lần đầu',
    rCard3: '③ Gia hạn hợp đồng',
    rCard4: '④ Khi ra nhà',
    rCard5: 'Số năm dự định thuê',
    rLabelRent:        'Tiền nhà',
    rLabelParking:     'Tiền bãi xe',
    rLabelIns:         'Bảo hiểm hỏa hoạn',
    rLabelGuarantee:   'Phí bảo lãnh lần đầu',
    rLabelKey:         'Thay chìa khóa',
    rLabelBroker:      'Phí môi giới',
    rLabelSanitation:  'Khử khuẩn / xử lý',
    rLabelRenewal:     'Phí gia hạn',
    rLabelRenewalGuar: 'Phí bảo lãnh gia hạn',
    rLabelClean:       'Phí dọn vệ sinh',
    rLabelEarlyExit:   'Phí phá hợp đồng sớm',
    rAddMonthly:       'Thêm phí hàng tháng',
    rAddMoveIn:        'Thêm khoản khác',
    rAddRenewal:       'Thêm khoản khác',
    rAddMoveOut:       'Thêm khoản khác',
    rYearsUnit:        'năm',
    btnRentalCalc:     'Tính tổng chi phí →',
    rResOnetimeLabel:  '💴 Bỏ ra 1 lần khi vào ở',
    rResMonthlyLabel:  '📅 Hàng tháng phải đóng',

    // Shared row labels
    rowLoan:    'Trả ngân hàng',
    rowTax:     'Thuế đất (÷12)',
    rowFire:    'Bảo hiểm (÷60)',
    rowMgmt:    'Quản lý + bãi xe',
    rowRepair:  'Bảo trì nhà',
    rowMonthly: 'Tiền nhà + bãi xe + phí khác',
    rowMoveIn:  'Chi phí đầu vào',
    rowRenewal: 'Gia hạn',
    rowMoveOut: 'Ra nhà',
  },
  en: {
    buySectionLabel: 'Purchase Costs',
    buyCardA: 'A · One-time Purchase Costs',
    buyCardB: 'B · Recurring Costs',
    buyCardC: 'C · Apartment Monthly Fees',
    buyCardD: 'D · House Maintenance',
    btnApt: '🏢 Apartment', btnHouse: '🏠 House',
    buyLabelStamp: 'Contract stamp tax', buyLabelAgent: 'Agent fee',
    buyLabelReg1: 'Ownership registration', buyLabelReg2: 'Mortgage registration',
    buyLabelTax: 'Property tax · per year', buyLabelFire: 'Fire insurance · per 5 years',
    buyLabelMgmt: 'Management + repair fund', buyLabelParking: 'Parking',
    buyLabelRepair: 'Renovation cost per time', buyLabelRepairEvery: 'Every how many years?',
    buyRepairUnit: 'yr', buyAddOnetime: 'Add another item',
    btnBuyCost: 'Calculate purchase costs →',
    buyResOnetimeLabel: '💴 One-time costs when buying',
    buyResMonthlyLabel: '📅 Actual monthly total',
    buyResNote: '💡 Estimates only. Actual costs vary by contract and region.\n👉 Contact us for free consultation.',
    rentalTitle: 'Rental Cost Calculator', rentalSub: 'Estimate total rental costs',
    rentalCycleLabel: 'Contract period',
    rCycle1: '1 year', rCycle2: '2 years',
    rCard1:'① Monthly costs', rCard2:'② Move-in costs', rCard3:'③ Renewal', rCard4:'④ Move-out', rCard5:'How many years?',
    rLabelRent:'Rent', rLabelParking:'Parking', rLabelIns:'Fire insurance',
    rLabelGuarantee:'Guarantor fee', rLabelKey:'Key replacement', rLabelBroker:'Agent fee',
    rLabelSanitation:'Sanitation fee', rLabelRenewal:'Renewal fee', rLabelRenewalGuar:'Guarantor renewal',
    rLabelClean:'Cleaning fee', rLabelEarlyExit:'Early termination fee',
    rAddMonthly:'Add monthly cost', rAddMoveIn:'Add item', rAddRenewal:'Add item', rAddMoveOut:'Add item',
    rYearsUnit:'yr', btnRentalCalc:'Calculate total →',
    rResOnetimeLabel:'💴 One-time move-in costs', rResMonthlyLabel:'📅 Monthly payment',
    rowLoan:'Bank repayment', rowTax:'Property tax (÷12)', rowFire:'Insurance (÷60)',
    rowMgmt:'Mgmt + parking', rowRepair:'Maintenance', rowMonthly:'Rent + parking + fees',
    rowMoveIn:'Move-in costs', rowRenewal:'Renewal', rowMoveOut:'Move-out',
  },
  ja: {
    buySectionLabel: '購入費用',
    buyCardA: 'A · 購入時一回限りの費用',
    buyCardB: 'B · 定期的な費用',
    buyCardC: 'C · マンション月額費用',
    buyCardD: 'D · 一戸建てメンテナンス',
    btnApt: '🏢 マンション', btnHouse: '🏠 一戸建て',
    buyLabelStamp: '印紙代', buyLabelAgent: '仲介手数料',
    buyLabelReg1: '所有権移転登記', buyLabelReg2: '抵当権設定登記',
    buyLabelTax: '固定資産税・都市計画税（年額）', buyLabelFire: '火災保険料（5年ごと）',
    buyLabelMgmt: '管理費・積立金', buyLabelParking: '駐車場代',
    buyLabelRepair: '修繕費用（1回あたり）', buyLabelRepairEvery: '何年ごと？',
    buyRepairUnit: '年', buyAddOnetime: '他の費用を追加',
    btnBuyCost: '購入費用を計算する →',
    buyResOnetimeLabel: '💴 購入時に一度払う費用',
    buyResMonthlyLabel: '📅 毎月の実質支払い',
    buyResNote: '💡 概算です。実際の費用は契約・地域により異なります。\n👉 無料相談はお気軽にどうぞ。',
    rentalTitle: '賃貸費用計算', rentalSub: '入居中にかかる総費用を試算',
    rentalCycleLabel: '契約期間',
    rCycle1: '1年', rCycle2: '2年',
    rCard1:'① 毎月の費用', rCard2:'② 入居時費用', rCard3:'③ 更新時費用', rCard4:'④ 退去時費用', rCard5:'入居予定年数',
    rLabelRent:'家賃', rLabelParking:'駐車場代', rLabelIns:'火災保険料',
    rLabelGuarantee:'保証会社初回料', rLabelKey:'鍵交換代', rLabelBroker:'仲介手数料',
    rLabelSanitation:'除菌・光触媒', rLabelRenewal:'更新料', rLabelRenewalGuar:'更新時保証料',
    rLabelClean:'ハウスクリーニング', rLabelEarlyExit:'早期解約違約金',
    rAddMonthly:'月額費用を追加', rAddMoveIn:'費用を追加', rAddRenewal:'費用を追加', rAddMoveOut:'費用を追加',
    rYearsUnit:'年', btnRentalCalc:'総費用を計算する →',
    rResOnetimeLabel:'💴 入居時に払う費用', rResMonthlyLabel:'📅 毎月の支払い',
    rowLoan:'銀行返済', rowTax:'固定資産税（÷12）', rowFire:'保険料（÷60）',
    rowMgmt:'管理費+駐車場', rowRepair:'修繕積立', rowMonthly:'家賃+駐車場+諸費用',
    rowMoveIn:'入居時費用', rowRenewal:'更新費用', rowMoveOut:'退去費用',
  },
};

// Merge LANG_EXTRA vào LANG
['vi','en','ja'].forEach(l => Object.assign(LANG[l], LANG_EXTRA[l]));


// ============================================================
// PHẦN 10 — TRẠNG THÁI MỚI
// ============================================================
let houseType    = 'apartment';  // 'apartment' | 'house'
let rentalCycle  = 2;            // 1 hoặc 2 năm

// Danh sách khoản tự thêm
const extraLists = {
  buyOnetimeExtraList: [],
  rMonthlyExtraList:   [],
  rMoveInExtraList:    [],
  rRenewalExtraList:   [],
  rMoveOutExtraList:   [],
};


// ============================================================
// PHẦN 11 — HELPERS
// ============================================================
const fmt  = n => Math.round(Math.abs(n)).toLocaleString();
const num  = id => parseFloat(document.getElementById(id)?.value) || 0;

// Render 1 dòng kết quả
function makeResultRow(dotColor, label, calc, val, isAccent) {
  return `<div class="result-row">
    <div class="result-row-left">
      <div class="result-row-dot" style="background:${dotColor};"></div>
      <div>
        <div class="result-row-name">${label}</div>
        ${calc ? `<div class="result-row-calc">${calc}</div>` : ''}
      </div>
    </div>
    <div class="result-row-val${isAccent?' accent':''}">${val}</div>
  </div>`;
}

// Render 1 dòng result-dark
function makeDarkRow(label, val) {
  return `<div class="result-dark-row">
    <span class="result-dark-row-label">${label}</span>
    <span class="result-dark-row-val">¥${fmt(val)}</span>
  </div>`;
}

// Thêm dòng khoản tự nhập
function addExtra(containerId, listKey) {
  const S = Object.assign({}, LANG[lang], LANG_EXTRA[lang]);
  const idx = extraLists[listKey].length;
  const id  = listKey + '_' + idx;
  extraLists[listKey].push({ name: '', amount: 0 });

  const row = document.createElement('div');
  row.className = 'extra-row';
  row.id = 'extraRow_' + id;
  row.innerHTML = `
    <input class="extra-name"   type="text"   placeholder="Tên khoản" oninput="extraLists['${listKey}'][${idx}].name=this.value">
    <input class="extra-amount" type="number" placeholder="0" min="0"  oninput="extraLists['${listKey}'][${idx}].amount=parseFloat(this.value)||0">
    <button class="extra-del" onclick="document.getElementById('extraRow_${id}').remove();extraLists['${listKey}'].splice(${idx},1)">×</button>
  `;
  document.getElementById(containerId).appendChild(row);
}

// Tổng extra list
function sumExtras(listKey) {
  return (extraLists[listKey] || []).reduce((s, r) => s + (r.amount || 0), 0);
}


// ============================================================
// PHẦN 12 — TOGGLE LOẠI NHÀ (chung cư / nhà riêng)
// ============================================================
function setHouseType(type, btn) {
  houseType = type;
  btn.parentElement.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('cardApartment').classList.toggle('hidden', type !== 'apartment');
  document.getElementById('cardHouse').classList.toggle('hidden', type !== 'house');
}


// ============================================================
// PHẦN 13 — TÍNH CHI PHÍ MUA NHÀ
// ============================================================

// Hiện section sau khi tính vay xong
function showBuyCostSection() {
  document.getElementById('buyCostSection').classList.remove('hidden');
}

function calcBuyCost() {
  const S = LANG[lang];

  // A — Chi phí 1 lần
  const stamp   = num('buyStamp');
  const agent   = num('buyAgent');
  const reg1    = num('buyReg1');
  const reg2    = num('buyReg2');
  const extras1 = sumExtras('buyOnetimeExtraList');
  const onetime = stamp + agent + reg1 + reg2 + extras1;

  // B — Định kỳ quy về tháng
  const taxMonthly  = num('buyTax') / 12;
  const fireMonthly = num('buyFire') / 60;

  // C hoặc D — Hàng tháng
  let monthlyExtra = 0;
  let monthlyExtraLabel = '';
  if (houseType === 'apartment') {
    monthlyExtra = num('buyMgmt') + num('buyParking');
    monthlyExtraLabel = S.rowMgmt;
  } else {
    const repairCost  = num('buyRepairCost');
    const repairYears = num('buyRepairEvery') || 10;
    monthlyExtra = repairCost / (repairYears * 12);
    monthlyExtraLabel = S.rowRepair;
  }

  // Tiền vay hàng tháng (lấy từ kết quả tính vay)
  const loanMonthly = parseFloat(
    document.getElementById('rMonthly')?.textContent?.replace(/[¥,]/g,'')
  ) || 0;

  const totalMonthly = loanMonthly + taxMonthly + fireMonthly + monthlyExtra;

  // --- Hiện kết quả 1 lần ---
  const boxOnetime = document.getElementById('buyResultOnetime');
  boxOnetime.classList.remove('hidden');
  document.getElementById('buyResOnetimeVal').textContent = '¥' + fmt(onetime);
  document.getElementById('buyResOnetimeRows').innerHTML = [
    stamp   ? makeDarkRow(S.buyLabelStamp,  stamp)  : '',
    agent   ? makeDarkRow(S.buyLabelAgent,  agent)  : '',
    reg1    ? makeDarkRow(S.buyLabelReg1,   reg1)   : '',
    reg2    ? makeDarkRow(S.buyLabelReg2,   reg2)   : '',
    extras1 ? makeDarkRow('+ ' + S.buyAddOnetime, extras1) : '',
  ].join('');

  // --- Hiện kết quả hàng tháng ---
  const boxMonthly = document.getElementById('buyResultMonthly');
  boxMonthly.classList.remove('hidden');
  document.getElementById('buyResMonthlyVal').textContent = '¥' + fmt(totalMonthly);
  document.getElementById('buyResMonthlyLoanPart').textContent =
    loanMonthly ? `${S.rowLoan}: ¥${fmt(loanMonthly)}` : '';

  let rows = '';
  if (loanMonthly)   rows += makeResultRow('#FD7B41', S.rowLoan,   '',                              '¥'+fmt(loanMonthly),   true);
  if (taxMonthly)    rows += makeResultRow('#4a90d9', S.rowTax,    '¥'+fmt(num('buyTax'))+'÷12',    '¥'+fmt(taxMonthly),    false);
  if (fireMonthly)   rows += makeResultRow('#a78bfa', S.rowFire,   '¥'+fmt(num('buyFire'))+'÷60',   '¥'+fmt(fireMonthly),   false);
  if (monthlyExtra)  rows += makeResultRow('#EDBF9B', monthlyExtraLabel, '',                        '¥'+fmt(monthlyExtra),  false);
  document.getElementById('buyResMonthlyRows').innerHTML = rows;

  document.getElementById('buyResNote').textContent = S.buyResNote;
  document.getElementById('buyResNote').classList.remove('hidden');
}


// ============================================================
// PHẦN 14 — TÍNH TIỀN THUÊ NHÀ
// ============================================================
function setRentalCycle(cycle, btn) {
  rentalCycle = cycle;
  btn.parentElement.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function calcRental() {
  const S = LANG[lang];
  const years = num('rYears') || 2;
  const months = years * 12;

  // ① Hàng tháng
  const rent    = num('rRent');
  const parking = num('rParking');
  const extrasM = sumExtras('rMonthlyExtraList');
  const monthly = rent + parking + extrasM;

  // ② Đầu vào 1 lần
  const ins        = num('rIns');
  const guarantee  = num('rGuarantee');
  const key        = num('rKey');
  const broker     = num('rBroker');
  const sanitation = num('rSanitation');
  const extrasMI   = sumExtras('rMoveInExtraList');
  const moveIn     = ins + guarantee + key + broker + sanitation + extrasMI;

  // ③ Gia hạn — tính số lần
  // Số lần gia hạn = số lần kết thúc chu kỳ trong khoảng [1..years-1]
  const renewal     = num('rRenewal');
  const renewalGuar = num('rRenewalGuar');
  const extrasR     = sumExtras('rRenewalExtraList');
  const perRenewal  = renewal + renewalGuar + extrasR;

  let renewalCount = 0;
  for (let y = rentalCycle; y < years; y += rentalCycle) renewalCount++;
  const totalRenewal = perRenewal * renewalCount;

  // ④ Ra nhà
  const clean      = num('rClean');
  const earlyExit  = num('rEarlyExit');
  const extrasMO   = sumExtras('rMoveOutExtraList');

  // Logic phá HĐ sớm: nếu số năm không chia hết cho chu kỳ thì tính earlyExit
  const isEarlyBreak = (years % rentalCycle) !== 0;
  const moveOut = clean + (isEarlyBreak ? earlyExit : 0) + extrasMO;

  // Tổng
  const totalRent    = monthly * months;
  const grandTotal   = totalRent + moveIn + totalRenewal + moveOut;
  const avgMonthly   = grandTotal / months;

  // --- Kết quả 1 lần ---
  const boxOnetime = document.getElementById('rResOnetime');
  boxOnetime.classList.remove('hidden');
  document.getElementById('rResOnetimeVal').textContent = '¥' + fmt(moveIn);
  document.getElementById('rResOnetimeRows').innerHTML = [
    ins        ? makeDarkRow(S.rLabelIns,        ins)        : '',
    guarantee  ? makeDarkRow(S.rLabelGuarantee,  guarantee)  : '',
    key        ? makeDarkRow(S.rLabelKey,         key)        : '',
    broker     ? makeDarkRow(S.rLabelBroker,      broker)     : '',
    sanitation ? makeDarkRow(S.rLabelSanitation,  sanitation) : '',
    extrasMI   ? makeDarkRow('+ ' + S.rAddMoveIn, extrasMI)   : '',
  ].join('');

  // --- Kết quả hàng tháng ---
  const boxMonthly = document.getElementById('rResMonthly');
  boxMonthly.classList.remove('hidden');
  document.getElementById('rResMonthlyVal').textContent = '¥' + fmt(monthly);
  document.getElementById('rResMonthlyAvg').textContent =
    `Tổng ${years} năm: ¥${fmt(grandTotal)} (TB ¥${fmt(avgMonthly)}/tháng)`;

  let rows = '';
  if (monthly)       rows += makeResultRow('#FD7B41', S.rowMonthly, `¥${fmt(monthly)} × ${months}月`, '¥'+fmt(totalRent),   true);
  if (moveIn)        rows += makeResultRow('#EDBF9B', S.rowMoveIn,  '1回',                            '¥'+fmt(moveIn),      false);
  if (totalRenewal)  rows += makeResultRow('#4a90d9', S.rowRenewal, `${renewalCount}回 × ¥${fmt(perRenewal)}`, '¥'+fmt(totalRenewal), false);
  if (moveOut)       rows += makeResultRow('#e05555', S.rowMoveOut, isEarlyBreak ? '⚠️ Phá HĐ sớm' : '', '¥'+fmt(moveOut), false);
  document.getElementById('rResMonthlyRows').innerHTML = rows;

  // Ghi chú logic
  const note = document.getElementById('rResNote');
  note.classList.remove('hidden');
  if (isEarlyBreak) {
    note.textContent = `⚠️ Thuê ${years} năm với chu kỳ ${rentalCycle} năm → tính phí phá hợp đồng sớm.\n💡 Thuê đúng ${Math.ceil(years/rentalCycle)*rentalCycle} năm sẽ không mất khoản này.`;
  } else {
    note.textContent = `✅ Thuê đúng ${years} năm (${renewalCount} lần gia hạn) → không mất phí phá hợp đồng sớm.`;
  }
}


// ============================================================
// PHẦN 15 — PATCH: hiện buyCostSection sau doCalc
// ============================================================
const _origDoCalc = doCalc;
doCalc = function() {
  _origDoCalc();
  // Hiện section chi phí mua nhà sau khi tính vay xong
  const result = document.getElementById('calcResult');
  if (!result.classList.contains('hidden')) showBuyCostSection();
};
