/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "roue",
  nom: "Kawa Club",
  metier: "La roue du jour",
  accroche: "Un tour par jour. Un cadeau à chaque passage.",
  couleurs: { fond: "#2a0f4a", encre: "#fff7e8", accent: "#ffcf33", rose: "#ff4f8b", ext: "#150626" },

  whatsapp: "33600000000",
  telephone: "01 23 45 67 89",
  adresse: "3 rue du Canal, 75000 Paris",

  prefixeCode: "KAWA",              // les codes ressemblent à KAWA-7F3K
  validiteJours: 7,                 // durée de validité d'un lot gagné

  // MODE DÉMO : true = on peut tourner autant qu'on veut (pour la présentation au commerçant).
  // Mettez false en usage réel : un seul tour par jour et par téléphone.
  demo: true,

  // poids = chance de tomber dessus (plus c'est grand, plus c'est fréquent).  perdu: true = pas de lot.
  lots: [
    { court: "Café offert", nom: "Un café offert", poids: 2, couleur: "#ff4f8b" },
    { court: "−10 %", nom: "10 % sur votre commande", poids: 4, couleur: "#ffcf33" },
    { court: "Cookie", nom: "Un cookie offert", poids: 2, couleur: "#7c4dff" },
    { court: "Retentez", nom: "Pas de chance… à demain !", poids: 4, couleur: "#fff7e8", perdu: true },
    { court: "−20 %", nom: "20 % sur les grains", poids: 2, couleur: "#22d3a6" },
    { court: "Taille L", nom: "Votre boisson en grande taille", poids: 3, couleur: "#ffcf33" },
    { court: "JACKPOT", nom: "Une formule petit-déj offerte", poids: 1, couleur: "#ff4f8b" },
    { court: "Retentez", nom: "Pas de chance… à demain !", poids: 4, couleur: "#fff7e8", perdu: true },
  ],
};
