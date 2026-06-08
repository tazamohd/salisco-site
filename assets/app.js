/* ============================================================
   Salisco — interactions v2
   i18n (EN/AR + RTL) · scroll reveals · live telemetry ·
   magnetic buttons · cursor spotlight · orbit parallax
   ============================================================ */

// NOTE: Arabic brand wordmark "ساليسكو" is a transliteration placeholder.
const I18N = {
  en: {
    "brand": "Salisco",
    "nav.divisions": "Divisions", "nav.salisauto": "SalisAuto", "nav.next": "Next", "nav.contact": "Contact",
    "hero.location": "Riyadh · Kingdom of Saudi Arabia", "hero.ai": "AI-native", "hero.building": "Now building",
    "hero.title1": "Technology, talent", "hero.title2": "& automotive solutions.",
    "hero.lede": "Salisco is a Riyadh-based company building across three divisions — technology, manpower and automotive. SalisAuto, our fleet & garage platform, is the first to ship.",
    "hero.ctaPrimary": "Explore divisions", "hero.ctaSecondary": "Meet SalisAuto",
    "cue.scroll": "Scroll",
    "stats.est": "Established", "stats.divisions": "Divisions", "stats.hq": "Headquarters", "stats.hqValue": "Riyadh",
    "chip.tech": "Technology", "chip.manpower": "Manpower",
    "divisions.kicker": "Three solution divisions", "divisions.title": "One company, built for the Kingdom.",
    "div.tech.title": "Technology", "div.tech.body": "Product engineering, platforms and data — the software backbone behind every Salisco service.",
    "div.people.title": "Manpower", "div.people.body": "Skilled talent and workforce solutions — recruiting, deploying and supporting the people who keep operations running.",
    "div.auto.tag": "SalisAuto live", "div.auto.title": "Automotive", "div.auto.body": "Fleet & garage technology for the Saudi market. Live today as SalisAuto, with more automotive products on the way.", "div.auto.link": "See SalisAuto",
    "spot.tag": "Live now", "spot.title": "SalisAuto",
    "spot.lede": "The fleet & garage management platform shipping today — vehicles, jobs, parts and technicians in one operational view, built for workshops across the Kingdom.",
    "spot.p1": "Real-time fleet & job tracking", "spot.p2": "Parts network & purchase workflows", "spot.p3": "Technician & customer portals", "spot.p4": "AI-assisted diagnostics & predictive maintenance",
    "tele.title": "Fleet telemetry", "tele.live": "LIVE", "tele.online": "Vehicles online", "tele.uptime": "Fleet uptime", "tele.jobs": "Jobs today", "tele.response": "Avg response",
    "ai.title": "SalisAuto Copilot", "ai.status": "online",
    "coming.kicker": "More automotive products", "coming.tag": "Coming soon",
    "coming.fleetco": "Fleet leasing & financing — vehicles on subscription for Saudi businesses.",
    "coming.salissp": "Spare parts marketplace & supply — sourcing genuine parts across the network.",
    "next.kicker": "What's next", "next.title": "The road ahead.",
    "next.lede": "A clear path — from a live automotive platform to one connected network across the Kingdom.",
    "next.m1.year": "2026 · Now", "next.m1.title": "SalisAuto live", "next.m1.body": "Fleet & garage management shipping to Saudi workshops today.",
    "next.m2.year": "2026", "next.m2.title": "FleetCo", "next.m2.body": "Fleet leasing & financing — vehicles on subscription for businesses.",
    "next.m3.year": "2027", "next.m3.title": "Salis SP", "next.m3.body": "Spare-parts marketplace & supply sourced across the network.",
    "next.m4.year": "Beyond", "next.m4.title": "One platform", "next.m4.body": "Technology, manpower and automotive — connected across the Kingdom.",
    "footer.title": "Let's build what's next in the Kingdom.", "footer.cta": "Get in touch",
    "footer.loc": "Riyadh, Kingdom of Saudi Arabia", "footer.copy": "© 2026 Salisco LTD · Riyadh, KSA"
  },
  ar: {
    "brand": "ساليسكو",
    "nav.divisions": "القطاعات", "nav.salisauto": "ساليس أوتو", "nav.next": "القادم", "nav.contact": "تواصل",
    "hero.location": "الرياض · المملكة العربية السعودية", "hero.ai": "ذكاء اصطناعي", "hero.building": "نبني الآن",
    "hero.title1": "التقنية والكوادر", "hero.title2": "وحلول السيارات.",
    "hero.lede": "ساليسكو شركة مقرّها الرياض تعمل عبر ثلاثة قطاعات — التقنية والكوادر البشرية والسيارات. ومنصّتنا ساليس أوتو لإدارة الأساطيل والورش هي أول منتجاتنا التي تنطلق.",
    "hero.ctaPrimary": "استكشف القطاعات", "hero.ctaSecondary": "تعرّف على ساليس أوتو",
    "cue.scroll": "تصفّح",
    "stats.est": "التأسيس", "stats.divisions": "القطاعات", "stats.hq": "المقر الرئيسي", "stats.hqValue": "الرياض",
    "chip.tech": "التقنية", "chip.manpower": "الكوادر",
    "divisions.kicker": "ثلاثة قطاعات للحلول", "divisions.title": "شركة واحدة، مبنية لخدمة المملكة.",
    "div.tech.title": "التقنية", "div.tech.body": "هندسة المنتجات والمنصّات والبيانات — البنية البرمجية خلف كل خدمات ساليسكو.",
    "div.people.title": "الكوادر البشرية", "div.people.body": "كوادر ماهرة وحلول قوى عاملة — استقطاب الكفاءات وتأهيلها ودعم من يُديرون العمليات.",
    "div.auto.tag": "ساليس أوتو — مباشر", "div.auto.title": "السيارات", "div.auto.body": "تقنيات إدارة الأساطيل والورش للسوق السعودي. متاحة اليوم عبر ساليس أوتو، مع منتجات سيارات أخرى قادمة.", "div.auto.link": "اكتشف ساليس أوتو",
    "spot.tag": "متاح الآن", "spot.title": "ساليس أوتو",
    "spot.lede": "منصّة إدارة الأساطيل والورش المتاحة اليوم — المركبات والمهام وقطع الغيار والفنّيون في واجهة تشغيلية واحدة، مصمّمة لورش المملكة.",
    "spot.p1": "تتبّع الأسطول والمهام لحظيًا", "spot.p2": "شبكة قطع الغيار وعمليات الشراء", "spot.p3": "بوّابات الفنّيين والعملاء", "spot.p4": "تشخيص وصيانة تنبؤية بالذكاء الاصطناعي",
    "tele.title": "بيانات الأسطول الحيّة", "tele.live": "مباشر", "tele.online": "المركبات المتصلة", "tele.uptime": "جاهزية الأسطول", "tele.jobs": "مهام اليوم", "tele.response": "متوسط الاستجابة",
    "ai.title": "مساعد ساليس أوتو", "ai.status": "متصل",
    "coming.kicker": "منتجات سيارات أخرى", "coming.tag": "قريبًا",
    "coming.fleetco": "تأجير وتمويل الأساطيل — مركبات بنظام الاشتراك للمنشآت السعودية.",
    "coming.salissp": "سوق وتوريد قطع الغيار — توفير قطع أصلية عبر الشبكة.",
    "next.kicker": "ما هو قادم", "next.title": "الطريق إلى الأمام.",
    "next.lede": "مسار واضح — من منصّة سيارات مباشرة إلى شبكة واحدة متّصلة عبر المملكة.",
    "next.m1.year": "2026 · الآن", "next.m1.title": "ساليس أوتو مباشر", "next.m1.body": "إدارة الأساطيل والورش متاحة لورش المملكة اليوم.",
    "next.m2.year": "2026", "next.m2.title": "فليت كو", "next.m2.body": "تأجير وتمويل الأساطيل — مركبات بنظام الاشتراك للمنشآت.",
    "next.m3.year": "2027", "next.m3.title": "ساليس إس بي", "next.m3.body": "سوق وتوريد قطع الغيار عبر الشبكة.",
    "next.m4.year": "وأبعد", "next.m4.title": "منصّة واحدة", "next.m4.body": "التقنية والكوادر والسيارات — متّصلة عبر المملكة.",
    "footer.title": "لنبنِ ما هو قادم في المملكة.", "footer.cta": "تواصل معنا",
    "footer.loc": "الرياض، المملكة العربية السعودية", "footer.copy": "© 2026 شركة ساليسكو المحدودة · الرياض، المملكة العربية السعودية"
  }
};

const html = document.documentElement;
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] !== undefined) el.textContent = dict[k];
  });
  try { localStorage.setItem("salisco-lang", lang); } catch (e) {}
}
document.getElementById("langToggle").addEventListener("click", () =>
  applyLang(html.getAttribute("lang") === "ar" ? "en" : "ar"));
let saved = "en";
try { saved = localStorage.getItem("salisco-lang") || "en"; } catch (e) {}
if (saved === "ar") applyLang("ar");

/* ---------- Scroll progress + nav state ---------- */
const nav = document.getElementById("nav");
const prog = document.getElementById("scrollProgress");
function onScroll() {
  const st = window.scrollY;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  if (prog) prog.style.width = (h > 0 ? (st / h) * 100 : 0) + "%";
  if (nav) nav.classList.toggle("scrolled", st > 12);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Reveal on scroll ---------- */
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reduce) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.setProperty("--d", e.target.getAttribute("data-d") || 0);
        e.target.classList.add("in");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
  reveals.forEach((r) => io.observe(r));
} else {
  reveals.forEach((r) => r.classList.add("in"));
}

/* ---------- Count-up (stats) ---------- */
function countUp(el) {
  if (el.hasAttribute("data-plain") || reduce) return;
  const target = parseInt(el.getAttribute("data-count"), 10);
  if (isNaN(target)) return;
  const dur = 1100, start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const counters = document.querySelectorAll("[data-count]");
if ("IntersectionObserver" in window && !reduce) {
  const io2 = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => { if (e.isIntersecting) { countUp(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.6 });
  counters.forEach((c) => io2.observe(c));
}

/* ---------- Live telemetry ---------- */
const lives = document.querySelectorAll("[data-live]");
if (!reduce && lives.length) {
  setInterval(() => {
    lives.forEach((el) => {
      const min = +el.getAttribute("data-min"), max = +el.getAttribute("data-max");
      let v = +el.textContent + (Math.random() < 0.5 ? -1 : 1);
      v = Math.max(min, Math.min(max, v));
      el.textContent = v;
      el.style.transition = "color .2s ease";
      el.style.color = "#6aa9ef";
      setTimeout(() => { el.style.color = ""; }, 220);
    });
  }, 2400);
}

/* ---------- Cursor spotlight on cards ---------- */
if (!reduce && window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".spotlight").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  /* ---------- Magnetic buttons ---------- */
  document.querySelectorAll(".magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.3}px)`;
    });
    btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
  });

  /* ---------- Orbit / shape parallax ---------- */
  const core = document.querySelector("[data-parallax]");
  const shapes = document.querySelectorAll(".shape");
  window.addEventListener("mousemove", (e) => {
    const dx = (e.clientX / window.innerWidth - 0.5);
    const dy = (e.clientY / window.innerHeight - 0.5);
    if (core) core.style.transform = `translate(${dx * -22}px, ${dy * -22}px)`;
    shapes.forEach((s, i) => {
      const k = (i + 1) * 8;
      s.style.marginLeft = (dx * k) + "px";
      s.style.marginTop = (dy * k) + "px";
    });
  }, { passive: true });
}

/* ============================================================
   Cinematic intro
   ============================================================ */
(function intro() {
  const el = document.getElementById("intro");
  if (!el) return;
  if (reduce) { el.classList.add("intro--done"); return; }
  document.body.classList.add("intro-lock");
  const done = () => { el.classList.add("intro--done"); document.body.classList.remove("intro-lock"); };
  // CSS animation hides it at ~2.6s; remove from flow shortly after, with a safety timeout.
  el.addEventListener("animationend", (e) => { if (e.animationName === "introOut") done(); });
  setTimeout(done, 2900);
})();

/* ============================================================
   Custom glow cursor
   ============================================================ */
(function glowCursor() {
  const cur = document.getElementById("cursor");
  if (!cur || reduce || !window.matchMedia("(hover: hover)").matches) return;
  let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
  addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; cur.classList.add("ready"); }, { passive: true });
  addEventListener("mousedown", () => cur.classList.add("down"));
  addEventListener("mouseup", () => cur.classList.remove("down"));
  addEventListener("mouseleave", () => cur.classList.remove("ready"));
  const hoverSel = "a, button, .magnetic, .pillar, .lang-toggle";
  document.querySelectorAll(hoverSel).forEach((h) => {
    h.addEventListener("mouseenter", () => cur.classList.add("hover"));
    h.addEventListener("mouseleave", () => cur.classList.remove("hover"));
  });
  (function loop() {
    x += (tx - x) * 0.18; y += (ty - y) * 0.18;
    cur.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(loop);
  })();
})();

/* ============================================================
   Interactive canvas constellation (cursor-reactive)
   ============================================================ */
(function constellation() {
  const cv = document.getElementById("fx");
  if (!cv || reduce) return;
  const ctx = cv.getContext("2d");
  let w, h, dpr, pts = [], raf, running = true;
  const mouse = { x: -999, y: -999 };
  const TINT = [ "47,128,230", "239,122,42", "91,140,255" ];

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.clientWidth; h = cv.clientHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const target = Math.min(90, Math.round((w * h) / 16000));
    pts = [];
    for (let i = 0; i < target; i++) {
      pts.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6, t: TINT[i % TINT.length]
      });
    }
  }

  function frame() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    const LINK = 130, MOUSE = 190;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      // gentle pull toward cursor
      const mdx = mouse.x - p.x, mdy = mouse.y - p.y;
      const md = Math.hypot(mdx, mdy);
      if (md < MOUSE) {
        const f = (1 - md / MOUSE) * 0.04;
        p.vx += (mdx / (md || 1)) * f; p.vy += (mdy / (md || 1)) * f;
        p.vx = Math.max(-0.8, Math.min(0.8, p.vx));
        p.vy = Math.max(-0.8, Math.min(0.8, p.vy));
        ctx.strokeStyle = `rgba(${p.t},${(1 - md / MOUSE) * 0.5})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      // links to neighbours
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(${p.t},${(1 - d / LINK) * 0.22})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
      ctx.fillStyle = `rgba(${p.t},.85)`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  }

  addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  addEventListener("mouseleave", () => { mouse.x = -999; mouse.y = -999; });
  addEventListener("resize", size);
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) { size(); frame(); } else { cancelAnimationFrame(raf); }
  });
  size(); frame();
})();

/* ============================================================
   Rotating keyword (typewriter)
   ============================================================ */
(function rotator() {
  const el = document.getElementById("rotWord");
  if (!el) return;
  const WORDS = {
    en: ["AI fleet intelligence", "Predictive maintenance", "Automation platforms", "Connected garages", "Smart logistics"],
    ar: ["ذكاء الأساطيل", "الصيانة التنبؤية", "منصّات الأتمتة", "ورش متّصلة", "لوجستيات ذكية"]
  };
  if (reduce) { el.textContent = WORDS.en[0]; return; }
  let i = 0, j = 0, deleting = false;
  function tick() {
    const list = WORDS[html.getAttribute("lang")] || WORDS.en;
    const word = list[i % list.length];
    j += deleting ? -1 : 1;
    el.textContent = word.slice(0, j);
    let delay = deleting ? 45 : 80;
    if (!deleting && j === word.length) { deleting = true; delay = 1500; }
    else if (deleting && j === 0) { deleting = false; i++; delay = 250; }
    setTimeout(tick, delay);
  }
  tick();
})();

/* ============================================================
   AI Copilot console (typewriter loop)
   ============================================================ */
(function aiConsole() {
  const box = document.getElementById("aiConsole");
  if (!box) return;
  const SCRIPT = {
    en: [
      { s: "›", c: "pr", t: " analyzing fleet telemetry…" },
      { s: "✓", c: "ok", t: " 3 vehicles flagged for predictive maintenance" },
      { s: "✓", c: "ok", t: " route optimized · 12% fuel saved" },
      { s: "›", c: "pr", t: " auto-assigning open jobs…" },
      { s: "✓", c: "ok", t: " 5 work orders dispatched to technicians" },
      { s: "▌", c: "hl", t: " Copilot ready — monitoring 128 vehicles" }
    ],
    ar: [
      { s: "›", c: "pr", t: " تحليل بيانات الأسطول…" },
      { s: "✓", c: "ok", t: " 3 مركبات بحاجة لصيانة تنبؤية" },
      { s: "✓", c: "ok", t: " تحسين المسارات · توفير 12% من الوقود" },
      { s: "›", c: "pr", t: " إسناد المهام المفتوحة تلقائيًا…" },
      { s: "✓", c: "ok", t: " إرسال 5 أوامر عمل إلى الفنّيين" },
      { s: "▌", c: "hl", t: " المساعد جاهز — مراقبة 128 مركبة" }
    ]
  };
  const cursor = document.createElement("span");
  cursor.className = "ai-cursor";
  let timer = null, active = false;

  function renderStatic() {
    const lines = SCRIPT[html.getAttribute("lang")] || SCRIPT.en;
    box.innerHTML = "";
    lines.forEach((ln) => {
      const row = document.createElement("span");
      row.className = "ai-line";
      row.innerHTML = `<span class="${ln.c}">${ln.s}</span>${ln.t}`;
      box.appendChild(row);
    });
  }

  function run() {
    if (reduce) { renderStatic(); return; }
    const lines = SCRIPT[html.getAttribute("lang")] || SCRIPT.en;
    box.innerHTML = "";
    let li = 0;
    function nextLine() {
      if (li >= lines.length) { timer = setTimeout(() => { if (active) run(); }, 2600); return; }
      const ln = lines[li];
      const row = document.createElement("span");
      row.className = "ai-line";
      row.innerHTML = `<span class="${ln.c}">${ln.s}</span><span class="t"></span>`;
      box.appendChild(row);
      const t = row.querySelector(".t");
      row.appendChild(cursor);
      let k = 0;
      (function type() {
        if (!active) return;
        t.textContent = ln.t.slice(0, ++k);
        if (k < ln.t.length) { timer = setTimeout(type, 26); }
        else { li++; timer = setTimeout(nextLine, 480); }
      })();
    }
    nextLine();
  }

  const io = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (e.isIntersecting && !active) { active = true; run(); }
      else if (!e.isIntersecting && active) { active = false; clearTimeout(timer); }
    });
  }, { threshold: 0.25 });
  io.observe(box);
})();
