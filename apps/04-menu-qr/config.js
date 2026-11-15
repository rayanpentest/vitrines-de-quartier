/* ═══ TOUT SE MODIFIE ICI ═══
   Astuce : imprimez un QR code vers  …/index.html?table=12  → le numéro de table s'affiche tout seul. */
window.CONFIG = {
  id: "menuqr",
  nom: "Chez Margaux",
  metier: "La carte",
  couleurs: { fond: "#f4ecdf", encre: "#1f2a24", accent: "#b3402a", carte: "#fffaf0", ext: "#1f2a24" },

  telephone: "01 23 45 67 89",
  whatsapp: "33600000000",
  adresse: "5 place du Marché, 75000 Paris",

  // Étiquettes utilisables dans  tags: [...]  — elles servent aussi de filtres
  tags: {
    veg: { emoji: "🌱", fr: "Végétarien", en: "Vegetarian" },
    sg: { emoji: "🌾", fr: "Sans gluten", en: "Gluten-free" },
    maison: { emoji: "👩‍🍳", fr: "Fait maison", en: "Homemade" },
    epice: { emoji: "🌶️", fr: "Relevé", en: "Spicy" },
  },

  // Chaque texte existe en français (fr) et en anglais (en)
  carte: [
    { fr: "Entrées", en: "Starters", plats: [
      { fr: "Œuf parfait, champignons, lard", en: "Slow-cooked egg, mushrooms, bacon", prix: 9, tags: ["sg", "maison"], allergenes: "œuf, lait",
        desc: { fr: "Œuf cuit 1 h à 64 °C, poêlée de champignons de Paris, chips de lard.", en: "Egg cooked 1 h at 64 °C, sautéed mushrooms, crispy bacon." } },
      { fr: "Poireaux vinaigrette, œuf mimosa", en: "Leeks vinaigrette, mimosa egg", prix: 8, tags: ["veg", "sg", "maison"], allergenes: "œuf, moutarde",
        desc: { fr: "Le classique de bistrot, vinaigrette à la moutarde ancienne.", en: "The bistro classic, wholegrain mustard dressing." } },
      { fr: "Terrine de campagne", en: "Country terrine", prix: 9.5, tags: ["maison"], allergenes: "gluten, œuf",
        desc: { fr: "Recette de la grand-mère de Margaux, cornichons et pain grillé.", en: "Margaux's grandmother's recipe, pickles and toast." } },
    ]},
    { fr: "Plats", en: "Mains", plats: [
      { fr: "Volaille fermière, jus au thym", en: "Free-range chicken, thyme jus", prix: 21, tags: ["sg", "maison"], allergenes: "lait",
        desc: { fr: "Suprême rôti sur peau, purée de pommes de terre au beurre.", en: "Roasted supreme, buttery mashed potatoes." } },
      { fr: "Poisson du marché, beurre blanc", en: "Catch of the day, beurre blanc", prix: 23, tags: ["sg"], allergenes: "poisson, lait",
        desc: { fr: "Selon l'arrivage du matin, légumes de saison.", en: "Depending on the morning's catch, seasonal vegetables." } },
      { fr: "Saucisse-purée, jus corsé", en: "Sausage & mash, rich gravy", prix: 18, tags: ["maison", "epice"], allergenes: "lait, moutarde",
        desc: { fr: "Saucisse au couteau du boucher d'en face, pointe de piment d'Espelette.", en: "Hand-cut sausage from the butcher across the street, hint of Espelette pepper." } },
      { fr: "Risotto de saison", en: "Seasonal risotto", prix: 17, tags: ["veg", "sg", "maison"], allergenes: "lait",
        desc: { fr: "Potimarron rôti, sauge, parmesan 24 mois.", en: "Roasted squash, sage, 24-month parmesan." } },
    ]},
    { fr: "Desserts", en: "Desserts", plats: [
      { fr: "Mousse au chocolat à partager", en: "Chocolate mousse to share", prix: 8, tags: ["veg", "sg", "maison"], allergenes: "œuf, lait",
        desc: { fr: "Servie au saladier, à la louche. Chocolat noir 70 %.", en: "Served by the ladle from the bowl. 70% dark chocolate." } },
      { fr: "Riz au lait, caramel beurre salé", en: "Rice pudding, salted caramel", prix: 7.5, tags: ["veg", "sg", "maison"], allergenes: "lait",
        desc: { fr: "Vanille de Madagascar, caramel maison.", en: "Madagascar vanilla, homemade caramel." } },
      { fr: "Tarte tatin, crème crue", en: "Tarte tatin, raw cream", prix: 8.5, tags: ["veg", "maison"], allergenes: "gluten, lait",
        desc: { fr: "Pommes caramélisées 3 heures, servie tiède.", en: "Apples caramelised for 3 hours, served warm." } },
    ]},
    { fr: "Boissons", en: "Drinks", plats: [
      { fr: "Verre de vin du moment", en: "Glass of wine of the moment", prix: 6, tags: [], allergenes: "sulfites", desc: { fr: "Rouge, blanc ou rosé — demandez l'ardoise.", en: "Red, white or rosé — ask for the board." } },
      { fr: "Limonade artisanale", en: "Craft lemonade", prix: 4.5, tags: ["veg", "sg"], allergenes: "aucun", desc: { fr: "Citron, gingembre ou nature.", en: "Lemon, ginger or plain." } },
      { fr: "Café ou thé", en: "Coffee or tea", prix: 2.5, tags: ["veg", "sg"], allergenes: "aucun", desc: { fr: "Café de spécialité, thés en vrac.", en: "Speciality coffee, loose-leaf teas." } },
    ]},
  ],
};
