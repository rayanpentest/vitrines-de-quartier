/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "fleuriste",
  nom: "Pétale",
  metier: "Fleuriste de saison",
  accroche: "Composez votre bouquet, on s'occupe du reste.",
  intro: "Des fleurs françaises et de saison, livrées à vélo dans le quartier. Cliquez sur les fleurs pour composer votre bouquet, puis envoyez-le-nous.",

  couleurs: { fond: "#fbf3ef", encre: "#27312a", accent: "#d9577a", doux: "#e9efe2" },

  telephone: "01 23 45 67 89",
  whatsapp: "33600000000",
  adresse: "27 rue des Jardins, 75000 Paris",
  credit: "Site réalisé par Votre Studio",

  horaires: {
    0: ["09:00", "13:00"],
    1: null,
    2: ["09:30", "19:30"],
    3: ["09:30", "19:30"],
    4: ["09:30", "19:30"],
    5: ["09:30", "20:00"],
    6: ["09:00", "20:00"],
  },

  // Les fleurs du compositeur. petales = nombre de pétales, forme = 0.3 (fin) à 0.8 (rond)
  fleurs: [
    { nom: "Pivoine", prix: 4.5, couleur: "#f29bb4", coeur: "#f7d774", petales: 12, forme: 0.7 },
    { nom: "Renoncule", prix: 3, couleur: "#f7b267", coeur: "#7a4a1d", petales: 9, forme: 0.8 },
    { nom: "Anémone", prix: 3.5, couleur: "#f4f1fb", coeur: "#2b2440", petales: 7, forme: 0.6 },
    { nom: "Dahlia", prix: 4, couleur: "#c8455f", coeur: "#f7d774", petales: 16, forme: 0.35 },
    { nom: "Bleuet", prix: 2, couleur: "#6f8fe8", coeur: "#3a3f8f", petales: 10, forme: 0.3 },
    { nom: "Marguerite", prix: 1.5, couleur: "#ffffff", coeur: "#f2b705", petales: 14, forme: 0.3 },
  ],
  emballage: 6, // prix du papier + ruban, ajouté au total

  services: [
    { titre: "Abonnement", texte: "Un bouquet frais chaque semaine ou chaque mois, dès 25 €." },
    { titre: "Mariages", texte: "Bouquet, boutonnières, arches et tables — devis sous 48 h." },
    { titre: "Deuil", texte: "Compositions livrées avec délicatesse, le jour même." },
  ],
};
