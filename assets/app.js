/* EasyCare Phone Service — pilot site
   ============================================================
   EDIT ME — all site content lives here.
   - SERVICES: name, description and "from" price per service.
     Set price to 0 for a free service.
   - STR: every word on the page, in English and Spanish.
   ============================================================ */

const SERVICES = [
  { id:"screen",  from:69, featured:true,
    en:{ name:"Screen replacement",   desc:"Cracked or unresponsive display, replaced fast." },
    es:{ name:"Reemplazo de pantalla", desc:"Pantalla quebrada o que no responde, reemplazada rápido." } },
  { id:"battery", from:49,
    en:{ name:"Battery replacement",  desc:"Dying too fast or won't hold a charge." },
    es:{ name:"Reemplazo de batería", desc:"Se descarga muy rápido o no retiene la carga." } },
  { id:"port",    from:59,
    en:{ name:"Charging port repair",          desc:"Won't charge, or only charges at an angle." },
    es:{ name:"Reparación del puerto de carga", desc:"No carga, o solo carga en cierta posición." } },
  { id:"camera",  from:69,
    en:{ name:"Camera repair",      desc:"Blurry photos, or a camera that won't open." },
    es:{ name:"Reparación de cámara", desc:"Fotos borrosas, o una cámara que no abre." } },
  { id:"back",    from:59,
    en:{ name:"Back panel replacement",   desc:"Cracked or shattered back glass." },
    es:{ name:"Reemplazo de tapa trasera", desc:"Tapa trasera quebrada o estrellada." } },
  { id:"diag",    from:0,
    en:{ name:"Diagnostic",  desc:"Not sure what's wrong? Free check, honest answer." },
    es:{ name:"Diagnóstico", desc:"¿No sabes qué le pasa? Revisión gratis, respuesta honesta." } },
];

const STR = {
en:{
  title:"EasyCare Phone Service | Phone Repair in Wichita, KS",
  skip:"Skip to content", call_now:"Call now",
  hero_eyebrow:"📍 Inside Mi Super Mercado Baratísimo · Wichita, KS",
  hero_title:"Phone repair while you shop.",
  hero_lede:"Walk in with a broken phone and walk out with it fixed. Most repairs are finished in 25–45 minutes — no appointment needed.",
  call_us:"Call (316) 461-0492", directions:"Get directions",
  chip_speed:"25–45 min repairs", chip_warranty:"45-day screen warranty", chip_diag:"Free diagnostic",
  services_title:"Services & pricing",
  services_sub:"Straightforward pricing. You approve the exact quote before we touch your phone — no surprises.",
  services_fine:"Prices are starting rates and vary by model. Final quote confirmed in store before any work begins.",
  from:"from", free:"Free", popular:"Most popular",
  why_title:"Why choose EasyCare",
  why1t:"Certified technicians", why1d:"Trained specialists handle every repair with precision and care.",
  why2t:"Fast same-day service", why2d:"Most repairs finished in 25–45 minutes while you shop.",
  why3t:"45-day screen warranty", why3d:"Screen repairs backed in writing. If it fails, we make it right.",
  why4t:"Locally owned", why4d:"A real neighborhood shop — talk directly to the person fixing your phone.",
  why5t:"Free diagnostic", why5d:"Not sure what's wrong? We'll check it out and tell you honestly.",
  why6t:"Premium parts only", why6d:"Quality components, installed right — your phone leaves in top condition.",
  visit_title:"Visit us",
  address_label:"Address", inside:"Inside Mi Super Mercado Baratísimo",
  hours_label:"Hours", hours_week:"Mon–Sat: 11:00 AM – 8:00 PM", hours_sun:"Sunday: 12:30 PM – 8:00 PM",
  phone_label:"Phone", email_label:"Email",
  walkin_title:"Walk-ins welcome",
  walkin_body:"No appointment necessary. Stop by the booth on South Seneca Street for a free diagnostic — whether it's a shattered iPhone screen or a failing Samsung battery, we're here to help.",
  foot_tag:"Fast, honest phone repair in the heart of Wichita."
},
es:{
  title:"EasyCare Phone Service | Reparación de teléfonos en Wichita, KS",
  skip:"Saltar al contenido", call_now:"Llamar ahora",
  hero_eyebrow:"📍 Dentro de Mi Super Mercado Baratísimo · Wichita, KS",
  hero_title:"Reparamos tu teléfono mientras compras.",
  hero_lede:"Entra con tu teléfono dañado y sal con él reparado. La mayoría de las reparaciones se terminan en 25–45 minutos — sin cita necesaria.",
  call_us:"Llamar al (316) 461-0492", directions:"Cómo llegar",
  chip_speed:"Reparaciones en 25–45 min", chip_warranty:"45 días de garantía en pantallas", chip_diag:"Diagnóstico gratis",
  services_title:"Servicios y precios",
  services_sub:"Precios claros. Tú apruebas el precio exacto antes de que toquemos tu teléfono — sin sorpresas.",
  services_fine:"Los precios son tarifas iniciales y varían según el modelo. El precio final se confirma en la tienda antes de comenzar.",
  from:"desde", free:"Gratis", popular:"Más popular",
  why_title:"Por qué elegir EasyCare",
  why1t:"Técnicos certificados", why1d:"Especialistas capacitados que reparan cada teléfono con precisión y cuidado.",
  why2t:"Servicio rápido el mismo día", why2d:"La mayoría de las reparaciones se terminan en 25–45 minutos mientras compras.",
  why3t:"45 días de garantía en pantallas", why3d:"Las reparaciones de pantalla están garantizadas por escrito. Si falla, lo resolvemos.",
  why4t:"Negocio local", why4d:"Una tienda de verdad en tu vecindario — hablas directamente con quien repara tu teléfono.",
  why5t:"Diagnóstico gratis", why5d:"¿No sabes qué le pasa? Lo revisamos y te decimos la verdad.",
  why6t:"Solo repuestos premium", why6d:"Componentes de calidad, bien instalados — tu teléfono sale en óptimas condiciones.",
  visit_title:"Visítanos",
  address_label:"Dirección", inside:"Dentro de Mi Super Mercado Baratísimo",
  hours_label:"Horario", hours_week:"Lun–Sáb: 11:00 AM – 8:00 PM", hours_sun:"Domingo: 12:30 PM – 8:00 PM",
  phone_label:"Teléfono", email_label:"Correo electrónico",
  walkin_title:"Sin cita necesaria",
  walkin_body:"No necesitas cita. Pasa por nuestro local en South Seneca Street para un diagnóstico gratis — ya sea una pantalla de iPhone quebrada o una batería de Samsung que falla, estamos para ayudarte.",
  foot_tag:"Reparación de teléfonos rápida y honesta en el corazón de Wichita."
}};

/* ---------- engine (no need to edit below) ---------- */
let LANG = localStorage.getItem("ec_lang") || "en";

function money(n){ return "$" + n; }

function renderPrices(){
  const grid = document.getElementById("price-grid");
  const t = STR[LANG];
  grid.innerHTML = SERVICES.map(s=>{
    const price = s.from === 0
      ? `<div class="price">${t.free}</div>`
      : `<div class="price"><small>${t.from}</small> ${money(s.from)}</div>`;
    const tag = s.featured ? `<span class="tag">${t.popular}</span>` : "";
    return `<div class="price-card${s.featured?" featured":""}">${tag}<h3>${s[LANG].name}</h3><p class="desc">${s[LANG].desc}</p>${price}</div>`;
  }).join("");
}

function applyLang(){
  const t = STR[LANG];
  document.documentElement.lang = LANG;
  document.title = t.title;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.getElementById("lang-en").setAttribute("aria-pressed", LANG==="en");
  document.getElementById("lang-es").setAttribute("aria-pressed", LANG==="es");
  renderPrices();
  localStorage.setItem("ec_lang", LANG);
}

document.getElementById("lang-en").addEventListener("click", ()=>{ LANG="en"; applyLang(); });
document.getElementById("lang-es").addEventListener("click", ()=>{ LANG="es"; applyLang(); });

applyLang();
