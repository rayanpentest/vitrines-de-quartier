/* ═══ TOUT SE MODIFIE ICI ═══  (textes, prix, couleurs, horaires) */
window.CONFIG = {
  id: "boulangerie",
  nom: "Maison Levain",
  metier: "Boulangerie artisanale",
  accroche: "Le pain qui prend son temps.",
  intro: "Levain naturel, farines de meule et 24 heures de fermentation. Tout est pétri, façonné et cuit ici, sous vos yeux.",
  badge: "PÉTRI · FAÇONNÉ · CUIT SUR PLACE · ",

  couleurs: { fond: "#f6efe3", encre: "#2a1d12", accent: "#c8752d", doux: "#ead9bf" },

  telephone: "01 23 45 67 89",
  whatsapp: "33600000000",          // numéro au format international, sans + ni espaces
  adresse: "12 rue des Lilas, 75000 Paris",
  credit: "Site réalisé par Votre Studio",

  // 0 = dimanche … 6 = samedi.  null = fermé.
  horaires: {
    0: ["07:00", "13:00"],
    1: null,
    2: ["06:30", "19:30"],
    3: ["06:30", "19:30"],
    4: ["06:30", "19:30"],
    5: ["06:30", "19:30"],
    6: ["06:30", "19:30"],
  },

  // Le site met en avant automatiquement la dernière fournée sortie selon l'heure.
  fournees: [
    { h: "06:30", nom: "Baguettes tradition", note: "Croûte fine, mie alvéolée." },
    { h: "07:15", nom: "Croissants & pains au chocolat", note: "Pur beurre AOP, feuilletage maison." },
    { h: "09:00", nom: "Pains au levain", note: "Campagne, seigle, épeautre." },
    { h: "11:00", nom: "Fougasses & quiches", note: "Pour le déjeuner, encore tièdes." },
    { h: "14:30", nom: "Brioches", note: "Tressées, au sucre perlé." },
    { h: "16:30", nom: "Seconde fournée de baguettes", note: "Pour le dîner." },
  ],

  // Pour une photo : ajoutez  image: "photos/nom.jpg"  (sinon l'emoji est affiché)
  produits: [
    { nom: "Tradition", prix: 1.3, desc: "La baguette de tous les jours.", emoji: "🥖", couleur: "#f1d9a8" },
    { nom: "Miche au levain", prix: 6.5, desc: "1 kg, se garde 5 jours.", emoji: "🍞", couleur: "#e2c39a" },
    { nom: "Croissant", prix: 1.4, desc: "27 couches de beurre.", emoji: "🥐", couleur: "#f6d08a" },
    { nom: "Tarte aux pommes", prix: 3.8, desc: "Pommes du verger voisin.", emoji: "🥧", couleur: "#eeb98f" },
    { nom: "Cookie noisette", prix: 2.6, desc: "Cœur fondant, sel de Guérande.", emoji: "🍪", couleur: "#d9b08c" },
    { nom: "Brioche tressée", prix: 5.9, desc: "À partager (ou pas).", emoji: "🥯", couleur: "#f3cf9c" },
  ],
};
