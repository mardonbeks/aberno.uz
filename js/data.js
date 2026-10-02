/* ==========================================================
   Bulut — mahsulotlar katalogi ma'lumotlari
   Yangi mahsulot qo'shish uchun PRODUCTS massiviga obyekt qo'shing.
   ========================================================== */

window.CATEGORIES = {
  "tualet-qogozi": { name: "Tualet qog'ozi", short: "Tualet qog'ozi", desc: "Har kuni his qilinadigan yumshoqlik va ishonchli mustahkamlik." },
  "qogoz-sochiq": { name: "Qog'oz sochiq", short: "Qog'oz sochiq", desc: "Oshxona va qo'l uchun tez shimuvchi, pishiq sochiqlar." },
  "salfetka": { name: "Salfetkalar", short: "Salfetka", desc: "Dasturxon, yuz va cho'ntak uchun nafis salfetkalar." }
};

window.LINES = {
  home: "Uy uchun",
  pro: "Professional"
};

window.PRODUCTS = [
  /* ---------- TUALET QOG'OZI ---------- */
  {
    id: "bulut-classic-4",
    name: "Bulut Classic",
    category: "tualet-qogozi",
    line: "home",
    art: "roll", rolls: 4,
    color: "#8FB9E3",
    badge: "Xit",
    tagline: "Har kungi ishonchli tanlov",
    desc: "Ikki qatlamli klassik tualet qog'ozi. Yumshoq, pishiq va suvda tez eriydi — butun oila uchun muvozanatli tanlov.",
    ply: 2, count: "4 rulon", size: "9,5 × 12,5 sm", length: "18 m", sheets: "150 varaq",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 12 paket",
    features: ["Nozik relyefli naqsh", "Suvda tez eriydi", "Kanalizatsiya uchun xavfsiz", "Hidsiz, bo'yoqsiz"]
  },
  {
    id: "bulut-soft-8",
    name: "Bulut Soft",
    category: "tualet-qogozi",
    line: "home",
    art: "roll", rolls: 8,
    color: "#EDB8B2",
    badge: "Yangi",
    tagline: "Uch qatlamli bulutdek yumshoqlik",
    desc: "Uch qatlamli, ayniqsa yumshoq tualet qog'ozi. Qatlamlar maxsus texnologiya bilan biriktirilgan — qalin, mayin va teriga yoqimli.",
    ply: 3, count: "8 rulon", size: "9,5 × 12,5 sm", length: "20 m", sheets: "160 varaq",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 6 paket",
    features: ["3 qatlamli qalinlik", "Mikro-relyef texnologiyasi", "Gipoallergen", "Sezgir teri uchun"]
  },
  {
    id: "bulut-premium-4",
    name: "Bulut Premium",
    category: "tualet-qogozi",
    line: "home",
    art: "roll", rolls: 4,
    color: "#D8C29A",
    badge: "Premium",
    tagline: "To'rt qatlamli hashamat",
    desc: "Brendning eng nafis mahsuloti. To'rt qatlam, zich va baxmaldek sirt — kundalik parvarishni kichik bir marosimga aylantiradi.",
    ply: 4, count: "4 rulon", size: "10 × 13 sm", length: "17 m", sheets: "130 varaq",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 10 paket",
    features: ["4 qatlam", "Baxmal sirt", "Dekorativ bosma naqsh", "Premium qadoq"]
  },
  {
    id: "bulut-eco-12",
    name: "Bulut Eco",
    category: "tualet-qogozi",
    line: "home",
    art: "roll", rolls: 12,
    color: "#A9CBA0",
    tagline: "Tabiatga hurmat bilan",
    desc: "Oqartirilmagan tabiiy rangdagi ikki qatlamli tualet qog'ozi. Kamroq kimyo, kamroq plastik — sifatdan voz kechmagan holda.",
    ply: 2, count: "12 rulon", size: "9,5 × 12,5 sm", length: "18 m", sheets: "150 varaq",
    material: "Oqartirilmagan tsellyuloza", box: "Qutida: 4 paket",
    features: ["Xlorsiz ishlov", "Tabiiy rang", "Minimal qadoq", "Iqtisodiy katta paket"]
  },
  {
    id: "bulut-family-24",
    name: "Bulut Family",
    category: "tualet-qogozi",
    line: "home",
    art: "roll", rolls: 24,
    color: "#A7B4EE",
    tagline: "Katta oila uchun katta zaxira",
    desc: "24 rulonli iqtisodiy oilaviy paket. Uzoq vaqtga yetadi, har bir rulon narxi eng qulay.",
    ply: 2, count: "24 rulon", size: "9,5 × 12,5 sm", length: "18 m", sheets: "150 varaq",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 2 paket",
    features: ["Eng qulay narx / rulon", "Oson ko'tariladigan tutqich", "2 qatlam", "Uzoq zaxira"]
  },
  {
    id: "bulut-pro-jumbo",
    name: "Bulut Pro Jumbo",
    category: "tualet-qogozi",
    line: "pro",
    art: "jumbo", rolls: 1,
    color: "#AEB6C1",
    tagline: "Yuqori oqimli joylar uchun",
    desc: "Dispenserlar uchun katta hajmli rulon. Ofislar, savdo markazlari va jamoat joylari uchun — kam almashtirish, kam xarajat.",
    ply: 2, count: "1 rulon", size: "9 sm eni", length: "200 m", sheets: "—",
    material: "Tsellyuloza + qayta ishlangan tola", box: "Qutida: 12 rulon",
    features: ["200 metr uzunlik", "Standart dispenserlarga mos", "Kam almashtirish", "Iqtisodiy sarf"]
  },

  /* ---------- QOG'OZ SOCHIQ ---------- */
  {
    id: "bulut-kitchen-2",
    name: "Bulut Kitchen",
    category: "qogoz-sochiq",
    line: "home",
    art: "towel", rolls: 2,
    color: "#F0CF7E",
    badge: "Xit",
    tagline: "Oshxonadagi eng yaqin yordamchi",
    desc: "Ikki qatlamli oshxona sochig'i. Suyuqlik va yog'ni bir zumda shimadi, ho'l holatda ham yirtilmaydi.",
    ply: 2, count: "2 rulon", size: "22 × 23 sm", length: "12,5 m", sheets: "50 varaq",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 12 paket",
    features: ["Yuqori shimuvchanlik", "Ho'lda ham pishiq", "Oziq-ovqat bilan xavfsiz aloqa", "Oson yirtiladigan perforatsiya"]
  },
  {
    id: "bulut-kitchen-maxi",
    name: "Bulut Kitchen Maxi",
    category: "qogoz-sochiq",
    line: "home",
    art: "towel", rolls: 1,
    color: "#EE9F5C",
    tagline: "Bitta rulon — uch barobar ko'p",
    desc: "Uch qatlamli, katta hajmli oshxona sochig'i. Og'ir ishlar uchun: pishiq, qalin va juda shimuvchan.",
    ply: 3, count: "1 rulon", size: "22 × 25 sm", length: "35 m", sheets: "140 varaq",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 12 rulon",
    features: ["3 qatlam", "Uzun rulon", "Yog'ni tez shimadi", "Qayta ishlatiladigan tutqichga mos"]
  },
  {
    id: "bulut-pro-zfold",
    name: "Bulut Pro Z-Fold",
    category: "qogoz-sochiq",
    line: "pro",
    art: "zfold",
    color: "#9FB0C4",
    tagline: "Bitta varaq — bitta qo'l",
    desc: "Z-simon buklangan varaqli qo'l sochiqlari. Dispenserdan birma-bir chiqadi — gigienik va tejamkor.",
    ply: 2, count: "200 varaq", size: "21 × 23 sm", length: "—", sheets: "200 varaq",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 20 paket",
    features: ["Birma-bir uzatish", "Gigienik foydalanish", "Barcha Z-dispenserlarga mos", "Tez shimish"]
  },
  {
    id: "bulut-pro-centerfeed",
    name: "Bulut Pro Center-Feed",
    category: "qogoz-sochiq",
    line: "pro",
    art: "jumbo", rolls: 1,
    color: "#8FA3B8",
    tagline: "Markazdan uzatiladigan universal sochiq",
    desc: "Markazdan tortiladigan katta rulon. Oshxonalar, ustaxonalar va tibbiyot muassasalari uchun ko'p maqsadli yechim.",
    ply: 2, count: "1 rulon", size: "20 sm eni", length: "120 m", sheets: "600 varaq",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 6 rulon",
    features: ["Markazdan uzatish", "Ko'p maqsadli", "Perforatsiyali varaqlar", "Dispenserli va dispensersiz"]
  },

  /* ---------- SALFETKALAR ---------- */
  {
    id: "bulut-servis-100",
    name: "Bulut Servis",
    category: "salfetka",
    line: "home",
    art: "napkin",
    color: "#DCE6EF",
    tagline: "Har bir dasturxon uchun",
    desc: "Bir qatlamli klassik dasturxon salfetkasi. Oq, toza va nafis — kundalik va bayramona dasturxonlar uchun.",
    ply: 1, count: "100 dona", size: "24 × 24 sm", length: "—", sheets: "100 dona",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 36 paket",
    features: ["Qorday oq", "Nozik relyefli chekka", "Iqtisodiy paket", "Oziq-ovqat bilan xavfsiz"]
  },
  {
    id: "bulut-color-33",
    name: "Bulut Color",
    category: "salfetka",
    line: "home",
    art: "napkin", colored: true,
    color: "#C99BD6",
    badge: "Yangi",
    tagline: "Dasturxonga kayfiyat qo'shing",
    desc: "Uch qatlamli rangli salfetkalar. Bayramlar, to'ylar va maxsus kechalar uchun — bir necha rangda.",
    ply: 3, count: "20 dona", size: "33 × 33 sm", length: "—", sheets: "20 dona",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 24 paket",
    features: ["3 qatlam", "Oziq-ovqatga mos bo'yoqlar", "Bir necha rang", "Katta o'lcham"]
  },
  {
    id: "bulut-face-150",
    name: "Bulut Face",
    category: "salfetka",
    line: "home",
    art: "box",
    color: "#9ED3CF",
    tagline: "Yuz uchun nozik parvarish",
    desc: "Ikki qatlamli kosmetik salfetkalar qutida. Yuz, makiyaj va shamollash kunlari uchun — juda yumshoq va mayin.",
    ply: 2, count: "150 dona", size: "20 × 20 sm", length: "—", sheets: "150 dona",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 24 quti",
    features: ["Pop-up quti", "Gipoallergen", "Ipakdek sirt", "Changsiz"]
  },
  {
    id: "bulut-pocket-10",
    name: "Bulut Pocket",
    category: "salfetka",
    line: "home",
    art: "pocket",
    color: "#F2A0A8",
    tagline: "Doim yoningizda",
    desc: "To'rt qatlamli cho'ntak ro'molchalari. Kichik, ixcham va juda pishiq — sumka va cho'ntak uchun ideal.",
    ply: 4, count: "10 paket × 10 dona", size: "21 × 21 sm", length: "—", sheets: "100 dona",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 24 blok",
    features: ["4 qatlam", "Ixcham qadoq", "Juda pishiq", "Yumshoq va qalin"]
  },
  {
    id: "bulut-pro-dispenser",
    name: "Bulut Pro Dispenser",
    category: "salfetka",
    line: "pro",
    art: "napkin", tall: true,
    color: "#B7C0CB",
    tagline: "Restoran va kafelar uchun",
    desc: "Dispenserli stol salfetkalari. Birma-bir chiqadi, ortiqcha sarfni kamaytiradi va stolni toza saqlaydi.",
    ply: 1, count: "250 dona", size: "17 × 17 sm", length: "—", sheets: "250 dona",
    material: "100% birlamchi tsellyuloza", box: "Qutida: 30 paket",
    features: ["Birma-bir uzatish", "Sarfni 30% gacha kamaytiradi", "Stol dispenserlariga mos", "Gigienik"]
  }
];

/* ==========================================================
   Mahsulot illyustratsiyalari (SVG) — rasmsiz, har doim tiniq
   ========================================================== */
(function () {
  function hexToRgb(h) {
    h = h.replace("#", "");
    return [0, 2, 4].map(function (i) { return parseInt(h.substr(i, 2), 16); });
  }
  function mix(hex, target, t) {
    var a = hexToRgb(hex), b = hexToRgb(target);
    return "#" + a.map(function (v, i) {
      var c = Math.round(v + (b[i] - v) * t);
      return ("0" + c.toString(16)).slice(-2);
    }).join("");
  }
  var light = function (c, t) { return mix(c, "#ffffff", t); };
  var dark = function (c, t) { return mix(c, "#0e1116", t); };

  var uid = 0;

  function shadow(cx, cy, rx) {
    return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + (rx * 0.16) + '" fill="#0e1116" opacity=".10" filter="url(#blur' + uid + ')"/>';
  }

  /* Bitta rulon (silindr) */
  function roll(cx, base, r, h, color, opts) {
    opts = opts || {};
    var ry = r * 0.3, L = cx - r, R = cx + r, top = base - h, id = "g" + uid;
    var s = "";
    s += '<path d="M' + L + ',' + top + ' L' + L + ',' + base + ' A' + r + ',' + ry + ' 0 0 0 ' + R + ',' + base + ' L' + R + ',' + top + ' Z" fill="url(#' + id + 'body)"/>';
    // embossing chiziqlari
    if (!opts.plain) {
      for (var i = 1; i < 6; i++) {
        var y = top + (h / 6) * i;
        s += '<path d="M' + L + ',' + y + ' A' + r + ',' + ry + ' 0 0 0 ' + R + ',' + y + '" fill="none" stroke="#0e1116" stroke-opacity=".035" stroke-width="1.2"/>';
      }
    }
    // rangli qadoq lentasi
    if (opts.band !== false) {
      var y1 = base - h * 0.64, y2 = base - h * 0.36;
      s += '<path d="M' + L + ',' + y1 + ' A' + r + ',' + ry + ' 0 0 0 ' + R + ',' + y1 + ' L' + R + ',' + y2 + ' A' + r + ',' + ry + ' 0 0 1 ' + L + ',' + y2 + ' Z" fill="url(#' + id + 'band)"/>';
      if (r > 55) {
        s += '<text x="' + cx + '" y="' + ((y1 + y2) / 2 + ry * 0.75 + 6) + '" text-anchor="middle" font-family="Instrument Serif, Georgia, serif" font-style="italic" font-size="' + (r * 0.42) + '" fill="#fff" opacity=".95">bulut</text>';
      }
    }
    // tepa yuzasi
    s += '<ellipse cx="' + cx + '" cy="' + top + '" rx="' + r + '" ry="' + ry + '" fill="#fbfbfa" stroke="#0e1116" stroke-opacity=".06"/>';
    // spiral halqalar
    for (var k = 1; k <= 3; k++) {
      var f = 1 - k * 0.16;
      s += '<ellipse cx="' + cx + '" cy="' + top + '" rx="' + (r * f) + '" ry="' + (ry * f) + '" fill="none" stroke="#0e1116" stroke-opacity=".04"/>';
    }
    var core = opts.core || 0.3;
    s += '<ellipse cx="' + cx + '" cy="' + top + '" rx="' + (r * core) + '" ry="' + (ry * core) + '" fill="#d9c7a7"/>';
    s += '<ellipse cx="' + cx + '" cy="' + (top + 1.5) + '" rx="' + (r * core * 0.78) + '" ry="' + (ry * core * 0.72) + '" fill="#8e7a58"/>';
    return s;
  }

  function rollDefs(color) {
    var id = "g" + uid;
    return '' +
      '<linearGradient id="' + id + 'body" x1="0" x2="1">' +
      '<stop offset="0" stop-color="#e4e4e1"/><stop offset=".18" stop-color="#fbfbfa"/>' +
      '<stop offset=".55" stop-color="#ffffff"/><stop offset=".86" stop-color="#ecebe8"/>' +
      '<stop offset="1" stop-color="#d6d5d1"/></linearGradient>' +
      '<linearGradient id="' + id + 'band" x1="0" x2="1">' +
      '<stop offset="0" stop-color="' + dark(color, .18) + '"/><stop offset=".3" stop-color="' + color + '"/>' +
      '<stop offset=".6" stop-color="' + light(color, .15) + '"/><stop offset="1" stop-color="' + dark(color, .25) + '"/></linearGradient>';
  }

  /* Izometrik blok */
  function iso(cx, topY, hw, hh, height, top, left, right) {
    var p = function (a) { return a.map(function (q) { return q.join(","); }).join(" "); };
    var T = [[cx, topY - hh], [cx + hw, topY], [cx, topY + hh], [cx - hw, topY]];
    var Lf = [[cx - hw, topY], [cx, topY + hh], [cx, topY + hh + height], [cx - hw, topY + height]];
    var Rf = [[cx, topY + hh], [cx + hw, topY], [cx + hw, topY + height], [cx, topY + hh + height]];
    return '<polygon points="' + p(Lf) + '" fill="' + left + '"/>' +
      '<polygon points="' + p(Rf) + '" fill="' + right + '"/>' +
      '<polygon points="' + p(T) + '" fill="' + top + '"/>';
  }

  function sheetLines(cx, topY, hw, hh, height, step, alpha) {
    var s = "";
    for (var y = step; y < height; y += step) {
      s += '<polyline points="' + (cx - hw) + ',' + (topY + y) + ' ' + cx + ',' + (topY + hh + y) + ' ' + (cx + hw) + ',' + (topY + y) + '" fill="none" stroke="#0e1116" stroke-opacity="' + alpha + '" stroke-width="1"/>';
    }
    return s;
  }

  var ART = {
    roll: function (p) {
      var n = p.rolls || 1;
      if (n >= 8) {
        return { defs: rollDefs(p.color), body: shadow(200, 318, 150) + roll(140, 250, 58, 118, p.color) + roll(260, 250, 58, 118, p.color) + roll(200, 300, 64, 128, p.color) };
      }
      if (n >= 2) {
        return { defs: rollDefs(p.color), body: shadow(200, 305, 150) + roll(128, 290, 62, 140, p.color) + roll(272, 290, 62, 140, p.color) + roll(200, 305, 70, 150, p.color) };
      }
      return { defs: rollDefs(p.color), body: shadow(200, 310, 110) + roll(200, 300, 92, 190, p.color) };
    },
    towel: function (p) {
      if ((p.rolls || 1) >= 2) {
        return { defs: rollDefs(p.color), body: shadow(200, 330, 140) + roll(145, 320, 66, 230, p.color, { core: .34 }) + roll(260, 330, 66, 230, p.color, { core: .34 }) };
      }
      return { defs: rollDefs(p.color), body: shadow(200, 335, 110) + roll(200, 325, 84, 250, p.color, { core: .3 }) };
    },
    jumbo: function (p) {
      return { defs: rollDefs(p.color), body: shadow(200, 300, 160) + roll(200, 290, 140, 120, p.color, { core: .22, band: false }) };
    },
    napkin: function (p) {
      var c = p.color;
      var top = p.colored ? light(c, .35) : "#ffffff";
      var left = p.colored ? c : "#eceae6";
      var right = p.colored ? dark(c, .12) : "#dedcd7";
      var H = p.tall ? 110 : 70, topY = p.tall ? 150 : 175;
      var s = shadow(200, topY + 65 + H + 10, 150);
      s += iso(200, topY, 140, 70, H, top, left, right);
      s += sheetLines(200, topY, 140, 70, H, p.tall ? 5 : 6, .06);
      // bukilgan chiziq
      s += '<line x1="' + (200 - 70) + '" y1="' + (topY - 35) + '" x2="' + (200 + 70) + '" y2="' + (topY + 35) + '" stroke="#0e1116" stroke-opacity=".07" stroke-width="1.5"/>';
      // lenta
      var b = 34;
      s += '<polygon points="' + [[200 + 70 - b, topY - 35 - b / 2], [200 + 70 + b, topY - 35 + b / 2], [200 - 70 + b, topY + 35 + b / 2], [200 - 70 - b, topY + 35 - b / 2]].map(function (q) { return q.join(","); }).join(" ") + '" fill="' + (p.colored ? "#ffffff" : c) + '" opacity=".92"/>';
      // lenta yon tomonda
      var y0 = topY + 35 + b / 2;
      s += '<polygon points="' + [[200 - 70 - b, topY + 35 - b / 2], [200 - 70 + b, y0], [200 - 70 + b, y0 + H], [200 - 70 - b, topY + 35 - b / 2 + H]].map(function (q) { return q.join(","); }).join(" ") + '" fill="' + (p.colored ? "#f3f1ee" : dark(c, .08)) + '" opacity=".95"/>';
      s += '<text x="' + (200 - 70) + '" y="' + (topY + 35 + H / 2 + 6) + '" text-anchor="middle" font-family="Instrument Serif, Georgia, serif" font-style="italic" font-size="22" fill="' + (p.colored ? dark(c, .3) : "#fff") + '" transform="rotate(26.5 ' + (200 - 70) + ' ' + (topY + 35 + H / 2) + ')">bulut</text>';
      return { defs: "", body: s };
    },
    zfold: function (p) {
      var c = p.color, topY = 150, H = 120;
      var s = shadow(200, topY + 70 + H + 10, 140);
      s += iso(200, topY, 120, 60, H, "#ffffff", "#ecebe7", "#dedcd6");
      // zigzag chiziqlar
      for (var y = 8; y < H; y += 8) {
        s += '<polyline points="' + (200) + ',' + (topY + 60 + y) + ' ' + (320) + ',' + (topY + y) + '" stroke="#0e1116" stroke-opacity=".07"/>';
        s += '<polyline points="' + (80) + ',' + (topY + y) + ' ' + (200) + ',' + (topY + 60 + y) + '" stroke="#0e1116" stroke-opacity=".05"/>';
      }
      // yuqori varaqning Z-buklamasi
      s += '<polygon points="140,' + (topY - 30) + ' 260,' + (topY + 30) + ' 250,' + (topY + 35) + ' 130,' + (topY - 25) + '" fill="#0e1116" opacity=".05"/>';
      s += '<line x1="140" y1="' + (topY - 30) + '" x2="260" y2="' + (topY + 30) + '" stroke="#0e1116" stroke-opacity=".12"/>';
      // brend lentasi
      s += '<polygon points="80,' + (topY + 40) + ' 200,' + (topY + 100) + ' 200,' + (topY + 130) + ' 80,' + (topY + 70) + '" fill="' + c + '"/>';
      s += '<polygon points="200,' + (topY + 100) + ' 320,' + (topY + 40) + ' 320,' + (topY + 70) + ' 200,' + (topY + 130) + '" fill="' + dark(c, .15) + '"/>';
      s += '<text x="140" y="' + (topY + 92) + '" text-anchor="middle" font-family="Instrument Serif, Georgia, serif" font-style="italic" font-size="20" fill="#fff" transform="rotate(26.5 140 ' + (topY + 85) + ')">bulut pro</text>';
      return { defs: "", body: s };
    },
    box: function (p) {
      var c = p.color, topY = 170, H = 100;
      var s = shadow(200, topY + 75 + H + 10, 150);
      s += iso(200, topY, 140, 70, H, light(c, .25), c, dark(c, .14));
      // teshik
      s += '<ellipse cx="200" cy="' + topY + '" rx="62" ry="22" fill="' + dark(c, .35) + '" transform="rotate(-26.5 200 ' + topY + ')" opacity=".55"/>';
      // salfetka
      s += '<path d="M150,' + (topY + 8) + ' C140,' + (topY - 70) + ' 185,' + (topY - 120) + ' 205,' + (topY - 95) + ' C220,' + (topY - 130) + ' 262,' + (topY - 85) + ' 250,' + (topY - 18) + ' C235,' + (topY - 5) + ' 175,' + (topY + 22) + ' 150,' + (topY + 8) + ' Z" fill="#ffffff" stroke="#0e1116" stroke-opacity=".08"/>';
      s += '<path d="M178,' + (topY - 10) + ' C176,' + (topY - 60) + ' 196,' + (topY - 90) + ' 205,' + (topY - 95) + '" fill="none" stroke="#0e1116" stroke-opacity=".06"/>';
      // yon tomonda yozuv
      s += '<text x="130" y="' + (topY + 78) + '" text-anchor="middle" font-family="Instrument Serif, Georgia, serif" font-style="italic" font-size="30" fill="#fff" transform="rotate(26.5 130 ' + (topY + 70) + ')">bulut</text>';
      s += '<circle cx="265" cy="' + (topY + 70) + '" r="14" fill="#fff" opacity=".35"/>';
      return { defs: "", body: s };
    },
    pocket: function (p) {
      var c = p.color, s = shadow(200, 320, 150);
      var blocks = [[200, 200], [140, 240], [260, 240]];
      blocks.forEach(function (b) {
        s += iso(b[0], b[1], 70, 35, 40, light(c, .3), c, dark(c, .14));
        s += '<polygon points="' + (b[0] - 30) + ',' + (b[1] - 15) + ' ' + (b[0] + 30) + ',' + (b[1] + 15) + ' ' + (b[0] + 22) + ',' + (b[1] + 19) + ' ' + (b[0] - 38) + ',' + (b[1] - 11) + '" fill="#fff" opacity=".85"/>';
      });
      return { defs: "", body: s };
    }
  };

  window.productArt = function (p) {
    uid++;
    var fn = ART[p.art] || ART.roll;
    var out = fn(p);
    return '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + p.name + '">' +
      '<defs><filter id="blur' + uid + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8"/></filter>' + out.defs + '</defs>' +
      out.body + '</svg>';
  };

  window.tint = function (c) { return light(c, .78); };
  window.tintStrong = function (c) { return light(c, .55); };
})();
