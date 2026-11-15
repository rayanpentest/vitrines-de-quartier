/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "institut",
  nom: "Éclat",
  metier: "Institut de beauté & bien-être",
  accroche: "Une heure rien que pour vous.",
  intro: "Soins du visage, massages et beauté des mains dans une bulle de calme. Dites-nous le temps dont vous disposez et ce dont vous avez envie : on vous propose le soin idéal.",

  couleurs: { fond: "#f7ece8", encre: "#3b2530", accent: "#c4577c", lueur1: "#f8b9a8", lueur2: "#c9b6f2", lueur3: "#ffe1b8" },

  telephone: "01 23 45 67 89",
  whatsapp: "33600000000",
  adresse: "8 rue des Roses, 75000 Paris",
  credit: "Site réalisé par Votre Studio",

  horaires: {
    0: null,
    1: null,
    2: ["10:00", "19:00"],
    3: ["10:00", "19:00"],
    4: ["10:00", "20:30"],
    5: ["10:00", "19:00"],
    6: ["09:30", "18:00"],
  },

  // Le sélecteur de rituel croise ces deux listes avec les soins ci-dessous
  durees: [30, 60, 90],
  envies: ["Détente", "Éclat", "Mains & pieds"],

  soins: [
    { nom: "Coup d'éclat express", duree: 30, envie: "Éclat", prix: 39, desc: "Nettoyage, gommage, masque : le teint réveillé en une demi-heure." },
    { nom: "Soin signature Éclat", duree: 60, envie: "Éclat", prix: 72, desc: "Massage du visage sculptant et masque sur mesure." },
    { nom: "Grand soin jeunesse", duree: 90, envie: "Éclat", prix: 105, desc: "Le soin complet : visage, cou, décolleté et mains." },
    { nom: "Massage dos & nuque", duree: 30, envie: "Détente", prix: 42, desc: "Pour dénouer les épaules après une longue journée." },
    { nom: "Massage aux huiles chaudes", duree: 60, envie: "Détente", prix: 75, desc: "Corps entier, pression à votre goût." },
    { nom: "Rituel évasion", duree: 90, envie: "Détente", prix: 110, desc: "Gommage, enveloppement et massage : on éteint le téléphone." },
    { nom: "Manucure express", duree: 30, envie: "Mains & pieds", prix: 28, desc: "Limage, cuticules, base et vernis." },
    { nom: "Beauté des pieds complète", duree: 60, envie: "Mains & pieds", prix: 49, desc: "Bain, gommage, soin et pose de vernis." },
    { nom: "Mains + pieds semi-permanent", duree: 90, envie: "Mains & pieds", prix: 79, desc: "Tenue trois semaines, brillance miroir." },
  ],

  avis: [
    { texte: "On ressort avec dix ans de moins et zéro stress. Mon rendez-vous préféré du mois.", auteur: "Camille" },
    { texte: "Accueil adorable et conseils honnêtes : on ne vous pousse jamais à acheter.", auteur: "Nadia" },
    { texte: "Le massage aux huiles chaudes est une merveille. J'ai offert des bons cadeaux à toute la famille.", auteur: "Hélène" },
  ],
};
