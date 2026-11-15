/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "cours",
  nom: "Forme & Co",
  metier: "Salle de sport de quartier",
  couleurs: { fond: "#eef1ff", encre: "#10143a", accent: "#ff4d6d", bleu: "#2f3cff", jaune: "#ffd23f", ext: "#10143a" },

  whatsapp: "33600000000",
  telephone: "01 23 45 67 89",
  adresse: "60 boulevard du Stade, 75000 Paris",

  // MODE DÉMO : true = les cours sont déjà en partie remplis (chiffres fictifs, pour la présentation).
  // Mettez false en usage réel (voir LISEZMOI : le vrai nombre de places demande un petit serveur).
  demo: true,

  // intensite : 1 (doux) à 3 (intense).  places = nombre de places par séance.
  // Planning par jour de la semaine : 0 = dimanche … 6 = samedi
  planning: {
    1: [{ h: "07:00", nom: "Réveil musculaire", coach: "Léa", duree: 45, intensite: 1, places: 14 }, { h: "12:30", nom: "HIIT express", coach: "Karim", duree: 30, intensite: 3, places: 12 }, { h: "18:30", nom: "Boxe fitness", coach: "Karim", duree: 60, intensite: 3, places: 16 }, { h: "19:45", nom: "Stretching", coach: "Léa", duree: 45, intensite: 1, places: 14 }],
    2: [{ h: "09:30", nom: "Pilates", coach: "Maud", duree: 60, intensite: 1, places: 10 }, { h: "12:30", nom: "Cross training", coach: "Yann", duree: 45, intensite: 3, places: 12 }, { h: "19:00", nom: "Renfo complet", coach: "Yann", duree: 60, intensite: 2, places: 16 }],
    3: [{ h: "07:00", nom: "Réveil musculaire", coach: "Léa", duree: 45, intensite: 1, places: 14 }, { h: "17:30", nom: "Cardio ados", coach: "Karim", duree: 45, intensite: 2, places: 12 }, { h: "18:30", nom: "Zumba", coach: "Maud", duree: 60, intensite: 2, places: 20 }],
    4: [{ h: "12:30", nom: "HIIT express", coach: "Karim", duree: 30, intensite: 3, places: 12 }, { h: "18:30", nom: "Boxe fitness", coach: "Karim", duree: 60, intensite: 3, places: 16 }, { h: "19:45", nom: "Yoga", coach: "Maud", duree: 60, intensite: 1, places: 12 }],
    5: [{ h: "07:00", nom: "Réveil musculaire", coach: "Léa", duree: 45, intensite: 1, places: 14 }, { h: "12:30", nom: "Cross training", coach: "Yann", duree: 45, intensite: 3, places: 12 }, { h: "18:00", nom: "Afterwork abdos-fessiers", coach: "Léa", duree: 45, intensite: 2, places: 16 }],
    6: [{ h: "10:00", nom: "Bootcamp du samedi", coach: "Yann", duree: 75, intensite: 3, places: 20 }, { h: "11:30", nom: "Pilates", coach: "Maud", duree: 60, intensite: 1, places: 10 }],
    0: [{ h: "10:30", nom: "Yoga du dimanche", coach: "Maud", duree: 75, intensite: 1, places: 14 }],
  },
};
