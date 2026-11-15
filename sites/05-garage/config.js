/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "garage",
  nom: "Atelier Moteur 9",
  metier: "Garage indépendant · toutes marques",
  accroche: "Le devis avant les mains dans le cambouis.",
  intro: "Entretien, freinage, pneus, diagnostic. Prix annoncés à l'avance, pièces montrées après. Estimez votre facture en 10 secondes.",

  couleurs: { fond: "#111214", encre: "#f4f4f0", accent: "#ffcc00", acier: "#1d1f23" },

  telephone: "01 23 45 67 89",
  whatsapp: "33600000000",
  adresse: "9 rue de l'Industrie, 75000 Paris",
  credit: "Site réalisé par Votre Studio",

  horaires: {
    0: null,
    1: ["08:00", "18:30"],
    2: ["08:00", "18:30"],
    3: ["08:00", "18:30"],
    4: ["08:00", "18:30"],
    5: ["08:00", "18:30"],
    6: ["09:00", "12:30"],
  },

  // Estimateur : prix de base × coefficient du véhicule
  vehicules: [
    { nom: "Citadine", coef: 1 },
    { nom: "Berline", coef: 1.2 },
    { nom: "SUV", coef: 1.35 },
    { nom: "Utilitaire", coef: 1.5 },
  ],
  prestations: [
    { nom: "Vidange + filtres", prix: 89, duree: "1 h" },
    { nom: "Plaquettes avant", prix: 110, duree: "1 h" },
    { nom: "Disques + plaquettes", prix: 240, duree: "2 h" },
    { nom: "2 pneus montés", prix: 180, duree: "45 min" },
    { nom: "Recharge clim", prix: 69, duree: "45 min" },
    { nom: "Diagnostic électronique", prix: 45, duree: "30 min" },
    { nom: "Kit distribution", prix: 520, duree: "1 journée" },
    { nom: "Préparation contrôle technique", prix: 59, duree: "1 h" },
  ],
  marge: 0.1, // fourchette affichée : ± 10 %

  chiffres: [
    { n: "18", t: "ans d'atelier" },
    { n: "4,9/5", t: "sur 320 avis" },
    { n: "24 h", t: "véhicule rendu, en moyenne" },
    { n: "0 €", t: "le devis, toujours" },
  ],
};
