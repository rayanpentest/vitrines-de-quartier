/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "bistrot",
  nom: "Chez Margaux",
  metier: "Bistrot de quartier",
  accroche: "On cuisine comme à la maison, en mieux.",
  intro: "Produits du marché, carte courte qui change chaque semaine, et une ardoise qui change chaque jour.",

  // Le site passe tout seul en ambiance « soir » à partir de cette heure
  heureDuSoir: 17,
  couleurs: {
    midi: { fond: "#f4ecdf", encre: "#1f2a24", accent: "#b3402a", carte: "#fffaf0" },
    soir: { fond: "#101c17", encre: "#f1e6d0", accent: "#e8a24c", carte: "#182a22" },
  },

  telephone: "01 23 45 67 89",
  whatsapp: "33600000000",
  adresse: "5 place du Marché, 75000 Paris",
  credit: "Site réalisé par Votre Studio",

  // Deux services par jour : [[midi], [soir]]
  horaires: {
    0: [["12:00", "15:00"]],
    1: null,
    2: [["12:00", "14:30"], ["19:00", "22:30"]],
    3: [["12:00", "14:30"], ["19:00", "22:30"]],
    4: [["12:00", "14:30"], ["19:00", "22:30"]],
    5: [["12:00", "14:30"], ["19:00", "23:00"]],
    6: [["12:00", "15:00"], ["19:00", "23:00"]],
  },

  ardoise: {
    titre: "L'ardoise du jour",
    lignes: ["Velouté de potimarron, noisettes", "Joue de bœuf confite, purée maison", "Tarte tatin, crème crue"],
    prix: "Entrée + plat + dessert · 24 €",
  },

  carte: {
    "Entrées": [
      { nom: "Œuf parfait, champignons, lard", prix: 9 },
      { nom: "Poireaux vinaigrette, œuf mimosa", prix: 8 },
      { nom: "Terrine de campagne maison", prix: 9.5 },
    ],
    "Plats": [
      { nom: "Volaille fermière, jus au thym", prix: 21 },
      { nom: "Poisson du marché, beurre blanc", prix: 23 },
      { nom: "Saucisse-purée, jus corsé", prix: 18 },
      { nom: "Risotto de saison (végétarien)", prix: 17 },
    ],
    "Desserts": [
      { nom: "Mousse au chocolat à partager", prix: 8 },
      { nom: "Riz au lait, caramel beurre salé", prix: 7.5 },
      { nom: "Assiette de fromages affinés", prix: 9 },
    ],
    "Vins": [
      { nom: "Verre du moment (rouge, blanc, rosé)", prix: 6 },
      { nom: "Côtes-du-Rhône nature, la bouteille", prix: 28 },
      { nom: "Chablis, la bouteille", prix: 38 },
    ],
  },
};
