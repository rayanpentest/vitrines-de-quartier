/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "yoga",
  nom: "Studio Souffle",
  metier: "Yoga · Pilates · Méditation",
  accroche: "Commencez par respirer.",
  intro: "Un studio lumineux à deux pas de chez vous. Douze élèves maximum par cours, tous niveaux bienvenus. Suivez le cercle, le temps de trois respirations.",

  couleurs: { fond: "#f4efe8", encre: "#2f2a3a", accent: "#8a6fd1", doux: "#e4dcf5", sable: "#e9dcc6" },

  // Rythme du cercle de respiration (en secondes)
  respiration: { inspire: 4, expire: 6 },

  telephone: "01 23 45 67 89",
  whatsapp: "33600000000",
  adresse: "14 passage des Tilleuls, 75000 Paris",
  credit: "Site réalisé par Votre Studio",

  horaires: {
    0: ["09:00", "13:00"],
    1: ["07:30", "21:00"],
    2: ["07:30", "21:00"],
    3: ["07:30", "21:00"],
    4: ["07:30", "21:00"],
    5: ["07:30", "20:00"],
    6: ["09:00", "18:00"],
  },

  // Planning : 1 = lundi … 6 = samedi, 0 = dimanche
  planning: {
    1: [{ h: "07:30", nom: "Yoga du matin", prof: "Inès", niveau: "Tous niveaux" }, { h: "12:30", nom: "Pilates express", prof: "Tom", niveau: "Tous niveaux" }, { h: "19:00", nom: "Vinyasa", prof: "Inès", niveau: "Intermédiaire" }],
    2: [{ h: "09:00", nom: "Hatha doux", prof: "Claire", niveau: "Débutant" }, { h: "18:30", nom: "Pilates", prof: "Tom", niveau: "Tous niveaux" }, { h: "20:00", nom: "Yin & méditation", prof: "Claire", niveau: "Tous niveaux" }],
    3: [{ h: "07:30", nom: "Yoga du matin", prof: "Inès", niveau: "Tous niveaux" }, { h: "17:00", nom: "Yoga enfants", prof: "Claire", niveau: "6–10 ans" }, { h: "19:00", nom: "Ashtanga", prof: "Inès", niveau: "Avancé" }],
    4: [{ h: "12:30", nom: "Pilates express", prof: "Tom", niveau: "Tous niveaux" }, { h: "18:30", nom: "Vinyasa", prof: "Inès", niveau: "Intermédiaire" }, { h: "20:00", nom: "Yoga nidra", prof: "Claire", niveau: "Tous niveaux" }],
    5: [{ h: "07:30", nom: "Yoga du matin", prof: "Inès", niveau: "Tous niveaux" }, { h: "18:00", nom: "Yin du vendredi", prof: "Claire", niveau: "Tous niveaux" }],
    6: [{ h: "10:00", nom: "Vinyasa", prof: "Inès", niveau: "Tous niveaux" }, { h: "11:30", nom: "Prénatal", prof: "Claire", niveau: "Futures mamans" }],
    0: [{ h: "10:00", nom: "Yoga & brunch", prof: "Toute l'équipe", niveau: "Tous niveaux" }],
  },

  tarifs: [
    { nom: "Cours d'essai", prix: 10, detail: "Pour découvrir, sans engagement." },
    { nom: "Carte 10 cours", prix: 160, detail: "Valable 6 mois, partageable.", phare: true },
    { nom: "Illimité", prix: 89, detail: "Par mois, tous les cours." },
  ],
};
