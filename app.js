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
    nl1:'Trang chủ', nl2:'Nhà bán', nl3:'Kiến thức', nl4:'Tính vay', nl5:'Liên hệ',
    catAll:'Tất cả', sfYear:'năm', sfMo:'tháng', hSfYear:'năm',
    forSale:'Đang bán', apt:'Chung cư', house:'Nhà riêng',
  },
  en: {
    heroLabel: '🧮 Loan Calculator',
    heroTitle: 'Estimate your\nJapan home loan',
    hDetailTxt: 'View chart & full schedule →',
    qL:'Listings',   qLs:'Browse now',
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
    nl1:'Home', nl2:'Listings', nl3:'Knowledge', nl4:'Loan Calc', nl5:'Contact',
    catAll:'All', sfYear:'yr', sfMo:'mo', hSfYear:'yr',
    forSale:'For Sale', apt:'Apartment', house:'House',
  },
  ja: {
    heroLabel: '🧮 ローン計算ツール',
    heroTitle: '住宅ローンを\n今すぐ試算',
    hDetailTxt: 'グラフ・返済表を見る →',
    qL:'物件一覧',     qLs:'一覧を見る',
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
    nl1:'ホーム', nl2:'物件', nl3:'ガイド', nl4:'ローン', nl5:'相談',
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
