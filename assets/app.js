/* ============================================================
   Salisco — interactions v2
   i18n (EN/AR + RTL) · scroll reveals · live telemetry ·
   magnetic buttons · cursor spotlight · orbit parallax
   ============================================================ */

// NOTE: Arabic brand wordmark "ساليسكو" is a transliteration placeholder.
const I18N = {
  en: {
    "brand": "Salisco",
    "nav.divisions": "Divisions", "nav.salisauto": "SalisAuto", "nav.contact": "Contact",
    "hero.location": "Riyadh · Kingdom of Saudi Arabia",
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
    "spot.p1": "Real-time fleet & job tracking", "spot.p2": "Parts network & purchase workflows", "spot.p3": "Technician & customer portals",
    "tele.title": "Fleet telemetry", "tele.live": "LIVE", "tele.online": "Vehicles online", "tele.uptime": "Fleet uptime", "tele.jobs": "Jobs today", "tele.response": "Avg response",
    "coming.kicker": "More automotive products", "coming.tag": "Coming soon",
    "coming.fleetco": "Fleet leasing & financing — vehicles on subscription for Saudi businesses.",
    "coming.salissp": "Spare parts marketplace & supply — sourcing genuine parts across the network.",
    "footer.title": "Let's build what's next in the Kingdom.", "footer.cta": "Get in touch",
    "footer.loc": "Riyadh, Kingdom of Saudi Arabia", "footer.copy": "© 2026 Salisco LTD · Riyadh, KSA"
  },
  ar: {
    "brand": "ساليسكو",
    "nav.divisions": "القطاعات", "nav.salisauto": "ساليس أوتو", "nav.contact": "تواصل",
    "hero.location": "الرياض · المملكة العربية السعودية",
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
    "spot.p1": "تتبّع الأسطول والمهام لحظيًا", "spot.p2": "شبكة قطع الغيار وعمليات الشراء", "spot.p3": "بوّابات الفنّيين والعملاء",
    "tele.title": "بيانات الأسطول الحيّة", "tele.live": "مباشر", "tele.online": "المركبات المتصلة", "tele.uptime": "جاهزية الأسطول", "tele.jobs": "مهام اليوم", "tele.response": "متوسط الاستجابة",
    "coming.kicker": "منتجات سيارات أخرى", "coming.tag": "قريبًا",
    "coming.fleetco": "تأجير وتمويل الأساطيل — مركبات بنظام الاشتراك للمنشآت السعودية.",
    "coming.salissp": "سوق وتوريد قطع الغيار — توفير قطع أصلية عبر الشبكة.",
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
      el.style.color = "#7fe3ff";
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
