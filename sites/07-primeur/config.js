/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "primeur",
  nom: "Le Panier de Saison",
  metier: "Primeur · Épicerie locale",
  accroche: "Ce qui pousse maintenant, à moins de 100 km.",
  intro: "Tournez la roue des mois : vous saurez toujours ce qui est de saison sur nos étals.",

  couleurs: { fond: "#f2f5e6", encre: "#1d3a24", accent: "#e8492b", doux: "#dbe7c3", soleil: "#f6c445" },

  telephone: "01 23 45 67 89",
  whatsapp: "33600000000",
  adresse: "21 rue du Marché, 75000 Paris",
  credit: "Site réalisé par Votre Studio",

  horaires: {
    0: ["08:30", "13:00"],
    1: null,
    2: ["08:30", "19:30"],
    3: ["08:30", "19:30"],
    4: ["08:30", "19:30"],
    5: ["08:30", "19:30"],
    6: ["08:00", "19:30"],
  },

  // mois : 1 = janvier … 12 = décembre
  produits: [
    { nom: "Pomme", emoji: "🍎", mois: [1, 2, 3, 4, 9, 10, 11, 12] },
    { nom: "Poire", emoji: "🍐", mois: [1, 2, 9, 10, 11, 12] },
    { nom: "Carotte", emoji: "🥕", mois: [1, 2, 3, 6, 7, 8, 9, 10, 11, 12] },
    { nom: "Poireau", emoji: "🥬", mois: [1, 2, 3, 4, 10, 11, 12] },
    { nom: "Pomme de terre", emoji: "🥔", mois: [1, 2, 3, 8, 9, 10, 11, 12] },
    { nom: "Champignon", emoji: "🍄", mois: [9, 10, 11, 12, 1] },
    { nom: "Courge", emoji: "🎃", mois: [9, 10, 11, 12, 1] },
    { nom: "Châtaigne", emoji: "🌰", mois: [10, 11, 12] },
    { nom: "Agrumes", emoji: "🍊", mois: [11, 12, 1, 2, 3] },
    { nom: "Asperge", emoji: "🌱", mois: [4, 5, 6] },
    { nom: "Fraise", emoji: "🍓", mois: [4, 5, 6, 7] },
    { nom: "Petit pois", emoji: "🫛", mois: [5, 6, 7] },
    { nom: "Cerise", emoji: "🍒", mois: [5, 6, 7] },
    { nom: "Tomate", emoji: "🍅", mois: [6, 7, 8, 9] },
    { nom: "Courgette", emoji: "🥒", mois: [6, 7, 8, 9] },
    { nom: "Aubergine", emoji: "🍆", mois: [6, 7, 8, 9] },
    { nom: "Pêche", emoji: "🍑", mois: [6, 7, 8, 9] },
    { nom: "Melon", emoji: "🍈", mois: [6, 7, 8, 9] },
    { nom: "Maïs", emoji: "🌽", mois: [8, 9, 10] },
    { nom: "Raisin", emoji: "🍇", mois: [8, 9, 10] },
    { nom: "Brocoli", emoji: "🥦", mois: [6, 7, 8, 9, 10, 11] },
    { nom: "Ail & oignon", emoji: "🧅", mois: [1, 2, 3, 7, 8, 9, 10, 11, 12] },
  ],

  paniers: [
    { nom: "Le Solo", prix: 15, desc: "4 kg de fruits et légumes pour 1 à 2 personnes." },
    { nom: "Le Famille", prix: 28, desc: "8 kg, œufs fermiers inclus. Notre best-seller." },
    { nom: "Le Tout-Fruit", prix: 22, desc: "5 kg de fruits mûrs à point, pour la semaine." },
  ],
};
