/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "clickcollect",
  nom: "Le Panier de Saison",
  metier: "Commandez, passez prendre",
  couleurs: { fond: "#f5f7ec", encre: "#1d3a24", accent: "#e8492b", doux: "#dfe9c9", ext: "#1d3a24" },

  whatsapp: "33600000000",          // la commande arrive sur ce numéro WhatsApp
  telephone: "01 23 45 67 89",
  adresse: "21 rue du Marché, 75000 Paris",
  preparation: 30,                  // minutes nécessaires avant le premier créneau de retrait

  horaires: {
    0: ["08:30", "13:00"],
    1: null,
    2: ["08:30", "19:30"],
    3: ["08:30", "19:30"],
    4: ["08:30", "19:30"],
    5: ["08:30", "19:30"],
    6: ["08:00", "19:30"],
  },

  // Pour une photo : ajoutez  image: "photos/nom.jpg"
  rayons: [
    { nom: "Fruits", produits: [
      { nom: "Pommes Gala", prix: 3.2, unite: "le kg", emoji: "🍎" },
      { nom: "Poires Conférence", prix: 3.6, unite: "le kg", emoji: "🍐" },
      { nom: "Clémentines", prix: 4.5, unite: "le kg", emoji: "🍊" },
      { nom: "Raisin Chasselas", prix: 6.9, unite: "le kg", emoji: "🍇" },
    ]},
    { nom: "Légumes", produits: [
      { nom: "Carottes des sables", prix: 2.4, unite: "le kg", emoji: "🥕" },
      { nom: "Potimarron", prix: 3.5, unite: "la pièce", emoji: "🎃" },
      { nom: "Poireaux", prix: 2.9, unite: "la botte", emoji: "🥬" },
      { nom: "Champignons de Paris", prix: 2.8, unite: "250 g", emoji: "🍄" },
      { nom: "Pommes de terre", prix: 1.9, unite: "le kg", emoji: "🥔" },
    ]},
    { nom: "Crèmerie", produits: [
      { nom: "Œufs fermiers", prix: 3.2, unite: "les 6", emoji: "🥚" },
      { nom: "Beurre demi-sel", prix: 3.9, unite: "250 g", emoji: "🧈" },
      { nom: "Comté 18 mois", prix: 7.5, unite: "200 g", emoji: "🧀" },
    ]},
    { nom: "Épicerie", produits: [
      { nom: "Miel du quartier", prix: 8.5, unite: "le pot", emoji: "🍯" },
      { nom: "Pain de campagne", prix: 4.2, unite: "500 g", emoji: "🍞" },
      { nom: "Jus de pomme", prix: 3.8, unite: "1 L", emoji: "🧃" },
    ]},
  ],
};
