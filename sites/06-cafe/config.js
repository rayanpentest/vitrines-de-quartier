/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "cafe",
  nom: "Kawa Club",
  metier: "Coffee shop & torréfaction",
  accroche: "Faites défiler, on vous sert.",
  intro: "Cafés de spécialité torréfiés sur place, pâtisseries maison et wifi qui marche. Votre tasse se remplit pendant que vous descendez la page.",

  couleurs: { fond: "#f3e3c8", encre: "#3a1f12", accent: "#e2572b", second: "#f2a93b", cafe: "#5a2f18" },

  telephone: "01 23 45 67 89",
  whatsapp: "33600000000",
  adresse: "3 rue du Canal, 75000 Paris",
  credit: "Site réalisé par Votre Studio",

  horaires: {
    0: ["09:00", "18:00"],
    1: ["08:00", "18:30"],
    2: ["08:00", "18:30"],
    3: ["08:00", "18:30"],
    4: ["08:00", "18:30"],
    5: ["08:00", "19:00"],
    6: ["09:00", "19:00"],
  },

  carte: [
    { titre: "Les cafés", items: [
      { nom: "Espresso", prix: 2.2 }, { nom: "Flat white", prix: 4.2 }, { nom: "Cappuccino", prix: 4 },
      { nom: "Filtre du jour (V60)", prix: 4.5 }, { nom: "Cold brew maison", prix: 4.5 },
    ]},
    { titre: "Sans café", items: [
      { nom: "Chaï latte", prix: 4.5 }, { nom: "Matcha latte", prix: 5 }, { nom: "Chocolat chaud", prix: 4.2 }, { nom: "Citronnade gingembre", prix: 4 },
    ]},
    { titre: "À grignoter", items: [
      { nom: "Cookie tout chocolat", prix: 3 }, { nom: "Banana bread", prix: 3.5 }, { nom: "Roulé à la cannelle", prix: 3.8 }, { nom: "Tartine avocat-œuf", prix: 8.5 },
    ]},
  ],

  grains: [
    { nom: "Éthiopie · Guji", notes: "Fleur d'oranger, pêche, thé noir", prix: 14 },
    { nom: "Colombie · Huila", notes: "Caramel, noisette, pomme rouge", prix: 12.5 },
    { nom: "Brésil · Cerrado", notes: "Chocolat, amande, rond et doux", prix: 11 },
  ],
};
