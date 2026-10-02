/* ==========================================================
   BULUT by ABERNO — interaktivlik
   ========================================================== */
(function () {
  "use strict";

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var ARROW = '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var ARROW_UR = '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>';
  var P = window.PRODUCTS || [];
  var CATS = window.CATEGORIES || {};
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function byId(id) { for (var i = 0; i < P.length; i++) if (P[i].id === id) return P[i]; return null; }
  function param(k) { return new URLSearchParams(location.search).get(k); }

  /* ---------- Sahifalar orasida silliq o'tish ---------- */
  var fade = document.createElement("div");
  fade.className = "page-fade";
  document.body.appendChild(fade);
  window.addEventListener("pageshow", function () { fade.classList.remove("on"); });
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a");
    if (!a || reduce) return;
    var href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#" || a.target === "_blank" || /^(mailto|tel|http)/.test(href) || e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (href.indexOf(".html") === -1) return;
    e.preventDefault();
    fade.classList.add("on");
    setTimeout(function () { location.href = href; }, 380);
  });

  /* ---------- Header ---------- */
  var header = $(".header");
  var lastY = 0;
  function onScroll() {
    var y = window.scrollY;
    if (header) {
      header.classList.toggle("is-scrolled", y > 20);
      header.classList.toggle("is-hidden", y > 400 && y > lastY && !document.body.classList.contains("menu-open"));
    }
    lastY = y;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var burger = $(".burger");
  if (burger) burger.addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open);
  });
  $$(".mobile-menu a").forEach(function (a) { a.addEventListener("click", function () { document.body.classList.remove("menu-open"); }); });

  // aktiv menyu bandi
  var page = (location.pathname.split("/").pop() || "index.html");
  if (page === "product.html") page = "catalog.html";
  $$(".nav a").forEach(function (a) { if (a.getAttribute("href") === page) a.classList.add("is-active"); });

  /* ---------- Kursor yorug'ligi ---------- */
  if (window.matchMedia("(hover: hover)").matches && !reduce) {
    var glow = document.createElement("div");
    glow.className = "glow";
    document.body.appendChild(glow);
    var gx = 0, gy = 0, tx = 0, ty = 0;
    document.addEventListener("mousemove", function (e) { tx = e.clientX; ty = e.clientY; glow.classList.add("on"); });
    document.addEventListener("mouseleave", function () { glow.classList.remove("on"); });
    (function loop() {
      gx += (tx - gx) * .08; gy += (ty - gy) * .08;
      glow.style.left = gx + "px"; glow.style.top = gy + "px";
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- Hero parallaks ---------- */
  var heroProduct = $(".hero__product-wrap");
  if (heroProduct && !reduce) {
    document.addEventListener("mousemove", function (e) {
      var x = (e.clientX / innerWidth - .5), y = (e.clientY / innerHeight - .5);
      heroProduct.style.transform = "translate3d(" + x * 24 + "px," + y * 18 + "px,0) rotate(" + x * 4 + "deg)";
    });
  }

  /* ---------- Mahsulot rasmlari (data-art) ---------- */
  $$("[data-art]").forEach(function (el) {
    var p = byId(el.getAttribute("data-art"));
    if (p) el.innerHTML = window.productArt(p);
  });
  $$("[data-cat-count]").forEach(function (el) {
    var c = el.getAttribute("data-cat-count");
    el.textContent = P.filter(function (p) { return p.category === c; }).length + " mahsulot";
  });
  $$("[data-total]").forEach(function (el) { el.textContent = P.length; });

  /* ---------- Mahsulot kartasi ---------- */
  function card(p) {
    return '<a class="pcard" href="product.html?id=' + p.id + '">' +
      '<div class="pcard__media" style="--c:' + window.tint(p.color) + '">' +
      (p.badge ? '<span class="pcard__badge">' + esc(p.badge) + '</span>' : '') +
      '<span class="pcard__line">' + (p.line === "pro" ? "Professional" : "Uy uchun") + '</span>' +
      window.productArt(p) +
      '<span class="pcard__quick">Batafsil ko\'rish <span class="round">' + ARROW + '</span></span>' +
      '</div>' +
      '<div class="pcard__body"><div>' +
      '<h3 class="pcard__name">' + esc(p.name) + '</h3>' +
      '<p class="pcard__tag">' + esc(CATS[p.category].short) + ' · ' + esc(p.count) + '</p>' +
      '</div></div>' +
      '<div class="pcard__specs"><span class="spec-pill">' + p.ply + ' qatlam</span><span class="spec-pill">' + esc(p.size) + '</span></div>' +
      '</a>';
  }

  /* ---------- Asosiy sahifa: tanlangan mahsulotlar ---------- */
  var rail = $("#featured");
  if (rail) {
    var feat = ["bulut-soft-8", "bulut-kitchen-2", "bulut-face-150", "bulut-premium-4", "bulut-color-33", "bulut-classic-4", "bulut-pocket-10", "bulut-eco-12"];
    rail.innerHTML = feat.map(byId).filter(Boolean).map(card).join("");
    $$("[data-rail]").forEach(function (b) {
      b.addEventListener("click", function () {
        var dir = +b.getAttribute("data-rail");
        rail.scrollBy({ left: dir * rail.clientWidth * .8, behavior: "smooth" });
      });
    });
  }

  /* ---------- Professional mahsulotlar ---------- */
  var pro = $("#pro-products");
  if (pro) pro.innerHTML = P.filter(function (p) { return p.line === "pro"; }).map(card).join("");

  /* ---------- Katalog ---------- */
  var grid = $("#catalog");
  if (grid) {
    var state = { cat: param("cat") || "all", line: param("line") || "all", q: "", sort: "default" };
    var countEl = $("#count"), emptyEl = $("#empty"), search = $("#search"), sort = $("#sort");

    $$("[data-filter]").forEach(function (b) {
      var c = b.getAttribute("data-filter");
      var n = c === "all" ? P.length : P.filter(function (p) { return p.category === c; }).length;
      b.insertAdjacentHTML("beforeend", "<sup>" + n + "</sup>");
      b.addEventListener("click", function () { state.cat = c; render(true); });
    });
    $$("[data-line]").forEach(function (b) {
      b.addEventListener("click", function () { state.line = b.getAttribute("data-line"); render(true); });
    });
    if (search) search.addEventListener("input", function () { state.q = search.value.trim().toLowerCase(); render(); });
    if (sort) sort.addEventListener("change", function () { state.sort = sort.value; render(); });

    function render(push) {
      $$("[data-filter]").forEach(function (b) { b.classList.toggle("is-active", b.getAttribute("data-filter") === state.cat); });
      $$("[data-line]").forEach(function (b) { b.classList.toggle("is-active", b.getAttribute("data-line") === state.line); });
      var list = P.filter(function (p) {
        if (state.cat !== "all" && p.category !== state.cat) return false;
        if (state.line !== "all" && p.line !== state.line) return false;
        if (state.q) {
          var hay = (p.name + " " + p.tagline + " " + p.desc + " " + CATS[p.category].name + " " + p.features.join(" ")).toLowerCase();
          if (hay.indexOf(state.q) === -1) return false;
        }
        return true;
      });
      if (state.sort === "ply") list.sort(function (a, b) { return b.ply - a.ply; });
      if (state.sort === "name") list.sort(function (a, b) { return a.name.localeCompare(b.name); });
      grid.innerHTML = list.map(card).join("");
      $$(".pcard", grid).forEach(function (c, i) { c.style.animationDelay = (i * 0.05) + "s"; });
      countEl.textContent = list.length + " ta mahsulot topildi";
      emptyEl.classList.toggle("show", list.length === 0);
      var title = $("#cat-title");
      if (title) title.innerHTML = state.cat === "all" ? "Barcha <em>mahsulotlar</em>" : esc(CATS[state.cat].name);
      if (push && history.replaceState) {
        var qs = [];
        if (state.cat !== "all") qs.push("cat=" + state.cat);
        if (state.line !== "all") qs.push("line=" + state.line);
        history.replaceState(null, "", location.pathname + (qs.length ? "?" + qs.join("&") : ""));
      }
    }
    render();
  }

  /* ---------- Mahsulot sahifasi ---------- */
  var pdp = $("#pdp");
  if (pdp) {
    var p = byId(param("id")) || P[0];
    var cat = CATS[p.category];
    document.title = p.name + " — " + cat.name + " | Bulut";
    var meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", p.desc);

    $("#crumb-cat").textContent = cat.name;
    $("#crumb-cat").href = "catalog.html?cat=" + p.category;
    $("#crumb-name").textContent = p.name;

    var media = $("#pdp-media");
    media.style.setProperty("--c", window.tint(p.color));
    media.innerHTML = window.productArt(p) +
      '<span class="chip"><i style="background:' + p.color + '"></i>' + esc(cat.short) + '</span>' +
      '<span class="chip">' + (p.line === "pro" ? "Professional" : "Uy uchun") + '</span>';

    $("#pdp-eyebrow").innerHTML = '<span class="num">' + esc(cat.name) + '</span>&nbsp;·&nbsp;' + (p.line === "pro" ? "Bulut Professional" : "Bulut Home");
    $("#pdp-name").textContent = p.name;
    $("#pdp-tagline").textContent = p.tagline;
    $("#pdp-desc").textContent = p.desc;
    $("#pdp-keys").innerHTML =
      '<div class="keyspec"><b>' + p.ply + '</b><span>qatlam</span></div>' +
      '<div class="keyspec"><b>' + esc(p.count.split(" ")[0]) + '</b><span>' + esc(p.count.split(" ").slice(1).join(" ")) + '</span></div>' +
      '<div class="keyspec"><b>' + esc(p.length !== "—" ? p.length : p.size.split(" ")[0]) + '</b><span>' + (p.length !== "—" ? "uzunlik" : "sm, o'lcham") + '</span></div>';

    var rows = [
      ["Kategoriya", cat.name],
      ["Qatlamlar soni", p.ply + " qatlam"],
      ["Paketda", p.count],
      ["Varaq o'lchami", p.size],
      ["Rulon uzunligi", p.length],
      ["Varaqlar soni", p.sheets],
      ["Xomashyo", p.material],
      ["Transport qadoq", p.box]
    ].filter(function (r) { return r[1] && r[1] !== "—"; });
    $("#pdp-specs").innerHTML = rows.map(function (r) { return "<tr><th>" + esc(r[0]) + "</th><td>" + esc(r[1]) + "</td></tr>"; }).join("");
    $("#pdp-features").innerHTML = p.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");

    $("#pdp-wholesale").href = "professional.html?product=" + p.id + "#request";

    var related = P.filter(function (x) { return x.category === p.category && x.id !== p.id; }).slice(0, 4);
    if (related.length < 4) related = related.concat(P.filter(function (x) { return x.category !== p.category; }).slice(0, 4 - related.length));
    $("#related").innerHTML = related.map(card).join("");
  }

  /* ---------- Qatlamlar vizualizatsiyasi ---------- */
  var stack = $(".sheet-stack");
  if (stack) {
    var PLY = {
      1: { t: "1 qatlam — <em>yengil</em>", d: "Dasturxon salfetkalari va dispenser tizimlari uchun. Tejamkor, tez shimuvchi, kundalik foydalanishga mo'ljallangan.", s: [40, 45, 95], id: "bulut-servis-100" },
      2: { t: "2 qatlam — <em>muvozanat</em>", d: "Yumshoqlik va mustahkamlikning oltin o'rtasi. Bulut Classic va Kitchen seriyalarining asosi.", s: [65, 70, 80], id: "bulut-classic-4" },
      3: { t: "3 qatlam — <em>bulutdek</em>", d: "Qalin, mayin va juda yumshoq. Sezgir teri va eng talabchan oilalar uchun — Bulut Soft.", s: [88, 85, 65], id: "bulut-soft-8" },
      4: { t: "4 qatlam — <em>hashamat</em>", d: "Baxmaldek sirt va maksimal qalinlik. Bulut Premium va Pocket ro'molchalarida.", s: [98, 95, 50], id: "bulut-premium-4" }
    };
    var sheets = [];
    for (var i = 0; i < 4; i++) {
      var sh = document.createElement("div");
      sh.className = "sheet";
      sh.style.transform = "translateZ(" + (i * 26) + "px)";
      stack.appendChild(sh);
      sheets.push(sh);
    }
    function setPly(n) {
      sheets.forEach(function (s, i) { s.classList.toggle("off", i >= n); });
      $$(".ply-picker button").forEach(function (b) { b.classList.toggle("is-active", +b.dataset.ply === n); });
      var d = PLY[n];
      $("#ply-title").innerHTML = d.t;
      $("#ply-desc").textContent = d.d;
      $$(".meter__bar i").forEach(function (bar, i) { bar.style.width = d.s[i] + "%"; });
      $$(".meter__val").forEach(function (v, i) { v.textContent = d.s[i]; });
      var link = $("#ply-link");
      var prod = byId(d.id);
      if (link && prod) { link.href = "product.html?id=" + prod.id; link.querySelector("span").textContent = prod.name + " bilan tanishing"; }
    }
    $$(".ply-picker button").forEach(function (b) { b.addEventListener("click", function () { setPly(+b.dataset.ply); }); });
    setPly(3);
  }

  /* ---------- Reveal ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      io.unobserve(en.target);
    });
  }, { threshold: .15, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal, .img-reveal, .ring").forEach(function (el) { io.observe(el); });

  /* ---------- Raqamlar hisoblagichi ---------- */
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target, to = parseFloat(el.dataset.count), dec = (el.dataset.count.split(".")[1] || "").length;
      var start = null, dur = 1800;
      function step(t) {
        if (!start) start = t;
        var k = Math.min((t - start) / dur, 1);
        k = 1 - Math.pow(1 - k, 4);
        el.textContent = (to * k).toFixed(dec).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      cio.unobserve(el);
    });
  }, { threshold: .5 });
  $$("[data-count]").forEach(function (el) { cio.observe(el); });

  /* ---------- Manifest: so'zma-so'z yorishadi ---------- */
  $$(".manifesto").forEach(function (m) {
    var walker = document.createTreeWalker(m, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(function (part) {
        if (/^\s+$/.test(part) || !part) { frag.appendChild(document.createTextNode(part)); return; }
        var s = document.createElement("span");
        s.className = "w";
        s.textContent = part;
        frag.appendChild(s);
      });
      n.parentNode.replaceChild(frag, n);
    });
    var words = $$(".w", m);
    function upd() {
      var r = m.getBoundingClientRect();
      var prog = (innerHeight * .85 - r.top) / (r.height + innerHeight * .35);
      prog = Math.max(0, Math.min(1, prog));
      var n = Math.round(prog * words.length);
      words.forEach(function (w, i) { w.classList.toggle("on", i < n); });
    }
    if (reduce) { words.forEach(function (w) { w.classList.add("on"); }); return; }
    window.addEventListener("scroll", upd, { passive: true });
    upd();
  });

  /* ---------- Formalar ---------- */
  $$("form[data-form]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      $$("[required]", f).forEach(function (inp) {
        var field = inp.closest(".field");
        var valid = inp.value.trim() !== "" && (inp.type !== "email" || /.+@.+\..+/.test(inp.value)) && (inp.type !== "tel" || inp.value.replace(/\D/g, "").length >= 9);
        if (field) field.classList.toggle("invalid", !valid);
        if (!valid) ok = false;
      });
      if (!ok) return;
      // TODO: backend ulanganda shu yerda ma'lumot yuboriladi (fetch)
      var box = document.getElementById(f.getAttribute("data-form"));
      f.style.display = "none";
      if (box) box.classList.add("show");
    });
    $$("input, textarea, select", f).forEach(function (inp) {
      inp.addEventListener("input", function () { var fl = inp.closest(".field"); if (fl) fl.classList.remove("invalid"); });
    });
  });

  // mahsulot sahifasidan so'rov: select'ni oldindan to'ldirish
  var preselect = param("product");
  var psel = $("#req-product");
  if (preselect && psel) {
    var pp = byId(preselect);
    if (pp) { var o = document.createElement("option"); o.textContent = pp.name; o.selected = true; psel.appendChild(o); }
  }

  $$(".subscribe").forEach(function (s) {
    s.addEventListener("submit", function (e) {
      e.preventDefault();
      var inp = $("input", s), msg = s.nextElementSibling;
      if (!/.+@.+\..+/.test(inp.value)) { msg.textContent = "Iltimos, to'g'ri e-mail kiriting."; return; }
      msg.textContent = "Rahmat! Yangiliklarni birinchilardan bo'lib olasiz.";
      inp.value = "";
    });
  });

  /* ---------- Yil ---------- */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
