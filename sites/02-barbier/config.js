/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "barbier",
  nom: "COUPE COURT",
  metier: "Barbier · Coiffeur homme",
  accroche: "Entre. Assieds-toi. Ressors mieux.",
  intro: "Coupes nettes, barbes taillées au coupe-chou, café offert. Sans rendez-vous le matin, sur créneau l'après-midi.",
  defilant: ["DÉGRADÉ", "BARBE", "COUPE-CHOU", "TAPER", "RASAGE", "SOIN"],

  couleurs: { fond: "#0c0c0c", encre: "#f2f2ea", accent: "#c8ff2e" },

  telephone: "01 23 45 67 89",
  whatsapp: "33600000000",
  adresse: "48 avenue de la Gare, 75000 Paris",
  credit: "Site réalisé par Votre Studio",

  horaires: {
    0: null,
    1: null,
    2: ["09:30", "19:30"],
    3: ["09:30", "19:30"],
    4: ["09:30", "21:00"],
    5: ["09:30", "19:30"],
    6: ["09:00", "18:00"],
  },

  prestations: [
    { nom: "Coupe", prix: 24, duree: "30 min", desc: "Shampoing, coupe, coiffage." },
    { nom: "Coupe + barbe", prix: 36, duree: "45 min", desc: "Le classique de la maison." },
    { nom: "Barbe", prix: 16, duree: "20 min", desc: "Taille, contours, serviette chaude." },
    { nom: "Rasage à l'ancienne", prix: 28, duree: "30 min", desc: "Coupe-chou, mousse au blaireau." },
    { nom: "Enfant (-12 ans)", prix: 16, duree: "20 min", desc: "Avec la patience qui va avec." },
  ],

  equipe: [
    { nom: "Sofiane", role: "Fondateur · dégradés" },
    { nom: "Malik", role: "Barbes & rasages" },
    { nom: "Jules", role: "Coupes classiques" },
  ],
};
