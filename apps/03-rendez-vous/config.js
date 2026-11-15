/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "rdv",
  nom: "COUPE COURT",
  metier: "Prise de rendez-vous",
  couleurs: { fond: "#0e0e0e", encre: "#f2f2ea", accent: "#c8ff2e", gris: "#1c1c1c", ext: "#000000" },

  whatsapp: "33600000000",          // la demande de rendez-vous arrive sur ce numéro
  telephone: "01 23 45 67 89",
  adresse: "48 avenue de la Gare, 75000 Paris",
  pas: 30,                          // durée d'un créneau en minutes
  joursAffiches: 7,                 // nombre de jours ouverts proposés

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
    { nom: "Coupe", prix: 24, duree: 30, emoji: "✂️" },
    { nom: "Coupe + barbe", prix: 36, duree: 45, emoji: "🧔" },
    { nom: "Barbe", prix: 16, duree: 20, emoji: "🪒" },
    { nom: "Rasage à l'ancienne", prix: 28, duree: 30, emoji: "🧖" },
    { nom: "Enfant (-12 ans)", prix: 16, duree: 20, emoji: "🧒" },
  ],
};
