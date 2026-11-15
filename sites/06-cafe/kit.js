/* ───────────────────────────────────────────────────────────────
   KIT COMMUN — petites fonctions partagées par tous les modèles.
   Vous n'avez normalement PAS besoin de modifier ce fichier :
   tout le contenu (textes, prix, couleurs, horaires) se règle dans config.js
   ─────────────────────────────────────────────────────────────── */
(function () {
  const C = (window.CONFIG = window.CONFIG || {});
  const K = (window.K = {});

  K.$ = (s, r = document) => r.querySelector(s);
  K.$$ = (s, r = document) => [...r.querySelectorAll(s)];
  K.esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ── Horaires ── */
  K.JOURS = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  K.min = (s) => { const [a, b] = s.split(":"); return a * 60 + +b; };
  K.fh = (s) => s.replace(/^0/, "").replace(":", "h").replace(/h00$/, "h");
  K.plages = (h) => (!h ? [] : Array.isArray(h[0]) ? h : [h]);
  K.etat = function (hor = C.horaires || {}, d = new Date()) {
    const p = K.plages(hor[d.getDay()]);
    const m = d.getHours() * 60 + d.getMinutes();
    for (const [a, b] of p) if (m >= K.min(a) && m < K.min(b)) return { ouvert: true, txt: "Ouvert jusqu’à " + K.fh(b) };
    const next = p.find(([a]) => m < K.min(a));
    return { ouvert: false, txt: next ? "Ouvre à " + K.fh(next[0]) : p.length ? "Fermé pour aujourd’hui" : "Fermé aujourd’hui" };
  };
  K.horairesHTML = function (hor = C.horaires || {}) {
    const auj = new Date().getDay();
    return [1, 2, 3, 4, 5, 6, 0].map((i) => {
      const p = K.plages(hor[i]);
      const t = p.length ? p.map(([a, b]) => K.fh(a) + " – " + K.fh(b)).join(" · ") : "Fermé";
      return `<li class="${i === auj ? "auj" : ""}"><span>${K.JOURS[i]}</span><span>${t}</span></li>`;
    }).join("");
  };

  /* ── Formats & liens ── */
  K.euro = (n) => Number(n).toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });
  K.wa = (msg) => "https://wa.me/" + (C.whatsapp || "") + "?text=" + encodeURIComponent(msg);
  K.tel = () => "tel:" + String(C.telephone || "").replace(/\s/g, "");
  K.maps = () => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent((C.nom || "") + " " + (C.adresse || ""));
  K.mail = () => "mailto:" + (C.email || "");

  /* ── Visuel : une photo si "image" est renseignée, sinon l'emoji ── */
  K.visuel = (o) => (o.image ? `<img src="${K.esc(o.image)}" alt="${K.esc(o.nom || "")}" loading="lazy">` : `<span aria-hidden="true">${K.esc(o.emoji || "")}</span>`);

  /* ── Mémoire locale (les apps retiennent les données sur le téléphone) ── */
  const pre = (C.id || "vitrine") + ":";
  K.store = {
    get(k, d) { try { const v = JSON.parse(localStorage.getItem(pre + k)); return v ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(pre + k, JSON.stringify(v)); } catch {} },
  };

  /* ── Petit message qui apparaît en bas ── */
  K.toast = function (msg) {
    let t = K.$("#k-toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "k-toast";
      t.style.cssText = "position:fixed;left:50%;bottom:28px;transform:translate(-50%,20px);background:#111;color:#fff;padding:12px 18px;border-radius:99px;font:600 14px/1.2 system-ui;z-index:999;opacity:0;transition:.3s;pointer-events:none;max-width:86vw;text-align:center";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(() => { t.style.opacity = 1; t.style.transform = "translate(-50%,0)"; });
    clearTimeout(t._h);
    t._h = setTimeout(() => { t.style.opacity = 0; t.style.transform = "translate(-50%,20px)"; }, 2400);
  };

  /* ── Couleurs de config.js → variables CSS (--fond, --accent…) ── */
  Object.entries(C.couleurs || {}).forEach(([k, v]) => typeof v === "string" && document.documentElement.style.setProperty("--" + k, v));

  /* ── Animations d'apparition (.rv) ── */
  const st = document.createElement("style");
  st.textContent = "[hidden]{display:none!important}.rv{opacity:0;transform:translateY(26px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}.rv.in{opacity:1;transform:none}@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01s!important;transition-duration:.01s!important}.rv{opacity:1;transform:none}}";
  document.head.appendChild(st);

  document.addEventListener("DOMContentLoaded", () => {
    if (C.nom) document.title = C.nom + (C.metier ? " · " + C.metier : "");
    if (C.accroche) {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = C.nom + " — " + C.accroche + (C.adresse ? " " + C.adresse : "");
      document.head.appendChild(m);
    }
    // Textes automatiques : <span data-t="nom"></span> affiche CONFIG.nom
    K.$$("[data-t]").forEach((e) => { const v = C[e.dataset.t]; if (v != null) e.textContent = v; });
    // Liens automatiques : data-href="tel" | "maps" | "mail"
    K.$$("[data-href]").forEach((e) => { e.href = K[e.dataset.href](); });
    K.$$("[data-horaires]").forEach((e) => { e.innerHTML = K.horairesHTML(); });
    K.$$("[data-etat]").forEach((e) => { const s = K.etat(); e.textContent = s.txt; e.classList.add(s.ouvert ? "ouvert" : "ferme"); });
    K.$$("[data-copy]").forEach((e) => { e.textContent = "© " + new Date().getFullYear() + " " + (C.nom || "") + (C.credit ? " · " + C.credit : ""); });

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
      K.$$(".rv").forEach((e) => io.observe(e));
    } else K.$$(".rv").forEach((e) => e.classList.add("in"));

    // Référencement local (Google) : fiche LocalBusiness
    if (C.nom && C.adresse) {
      const ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: C.nom, description: C.accroche, telephone: C.telephone, address: C.adresse });
      document.head.appendChild(ld);
    }
    // Mode application (installable) : uniquement si la page a un manifest et tourne en ligne
    if (K.$('link[rel="manifest"]') && "serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  });
})();
