/* ═══ TOUT SE MODIFIE ICI ═══
   L'app « association de commerçants » : un seul lien pour tout le quartier. */
window.CONFIG = {
  id: "quartier",
  nom: "Les Lilas",
  metier: "Le guide des commerces du quartier",
  couleurs: { fond: "#fffdf7", encre: "#1c1b29", accent: "#6c3bff", doux: "#f0ebff", ext: "#1c1b29" },

  // Couleur de la pastille de chaque catégorie
  categories: { "Bouche": "#ffd9c2", "Beauté": "#ffd0e4", "Services": "#cfe4ff", "Sorties": "#d6f5d0", "Boutiques": "#fff0b3" },

  // horaires : 0 = dimanche … 6 = samedi, null = fermé.  offre = avantage réservé aux habitants (facultatif)
  commerces: [
    { nom: "Maison Levain", cat: "Bouche", emoji: "🥖", desc: "Boulangerie au levain, tout est fait sur place.", adresse: "12 rue des Lilas", tel: "01 23 45 67 01",
      horaires: { 0: ["07:00", "13:00"], 1: null, 2: ["06:30", "19:30"], 3: ["06:30", "19:30"], 4: ["06:30", "19:30"], 5: ["06:30", "19:30"], 6: ["06:30", "19:30"] }, offre: "La 10ᵉ baguette offerte" },
    { nom: "Chez Margaux", cat: "Bouche", emoji: "🍽️", desc: "Bistrot de marché, ardoise qui change chaque jour.", adresse: "5 place du Marché", tel: "01 23 45 67 02",
      horaires: { 0: [["12:00", "15:00"]], 1: null, 2: [["12:00", "14:30"], ["19:00", "22:30"]], 3: [["12:00", "14:30"], ["19:00", "22:30"]], 4: [["12:00", "14:30"], ["19:00", "22:30"]], 5: [["12:00", "14:30"], ["19:00", "23:00"]], 6: [["12:00", "15:00"], ["19:00", "23:00"]] } },
    { nom: "Kawa Club", cat: "Bouche", emoji: "☕", desc: "Cafés de spécialité torréfiés sur place.", adresse: "3 rue du Canal", tel: "01 23 45 67 03",
      horaires: { 0: ["09:00", "18:00"], 1: ["08:00", "18:30"], 2: ["08:00", "18:30"], 3: ["08:00", "18:30"], 4: ["08:00", "18:30"], 5: ["08:00", "19:00"], 6: ["09:00", "19:00"] }, offre: "Un cookie offert pour 2 cafés" },
    { nom: "Le Panier de Saison", cat: "Bouche", emoji: "🥕", desc: "Primeur local, paniers de la semaine.", adresse: "21 rue du Marché", tel: "01 23 45 67 04",
      horaires: { 0: ["08:30", "13:00"], 1: null, 2: ["08:30", "19:30"], 3: ["08:30", "19:30"], 4: ["08:30", "19:30"], 5: ["08:30", "19:30"], 6: ["08:00", "19:30"] } },
    { nom: "Coupe Court", cat: "Beauté", emoji: "💈", desc: "Barbier et coiffeur homme, avec ou sans rendez-vous.", adresse: "48 avenue de la Gare", tel: "01 23 45 67 05",
      horaires: { 0: null, 1: null, 2: ["09:30", "19:30"], 3: ["09:30", "19:30"], 4: ["09:30", "21:00"], 5: ["09:30", "19:30"], 6: ["09:00", "18:00"] } },
    { nom: "Éclat", cat: "Beauté", emoji: "💅", desc: "Institut : soins du visage, massages, manucure.", adresse: "8 rue des Roses", tel: "01 23 45 67 06",
      horaires: { 0: null, 1: null, 2: ["10:00", "19:00"], 3: ["10:00", "19:00"], 4: ["10:00", "20:30"], 5: ["10:00", "19:00"], 6: ["09:30", "18:00"] }, offre: "−10 % sur le premier soin" },
    { nom: "Atelier Moteur 9", cat: "Services", emoji: "🔧", desc: "Garage toutes marques, devis gratuit.", adresse: "9 rue de l'Industrie", tel: "01 23 45 67 07",
      horaires: { 0: null, 1: ["08:00", "18:30"], 2: ["08:00", "18:30"], 3: ["08:00", "18:30"], 4: ["08:00", "18:30"], 5: ["08:00", "18:30"], 6: ["09:00", "12:30"] } },
    { nom: "Allô Fuite", cat: "Services", emoji: "🚿", desc: "Plombier-chauffagiste du quartier, 7 j/7.", adresse: "30 rue des Artisans", tel: "01 23 45 67 08",
      horaires: { 0: ["09:00", "18:00"], 1: ["07:00", "20:00"], 2: ["07:00", "20:00"], 3: ["07:00", "20:00"], 4: ["07:00", "20:00"], 5: ["07:00", "20:00"], 6: ["08:00", "19:00"] } },
    { nom: "Pressing du Coin", cat: "Services", emoji: "👔", desc: "Nettoyage, retouches, cordonnerie minute.", adresse: "2 rue des Lilas", tel: "01 23 45 67 09",
      horaires: { 0: null, 1: ["08:30", "19:00"], 2: ["08:30", "19:00"], 3: ["08:30", "19:00"], 4: ["08:30", "19:00"], 5: ["08:30", "19:00"], 6: ["09:00", "13:00"] } },
    { nom: "Studio Souffle", cat: "Sorties", emoji: "🧘", desc: "Yoga, pilates et méditation en petit groupe.", adresse: "14 passage des Tilleuls", tel: "01 23 45 67 10",
      horaires: { 0: ["09:00", "13:00"], 1: ["07:30", "21:00"], 2: ["07:30", "21:00"], 3: ["07:30", "21:00"], 4: ["07:30", "21:00"], 5: ["07:30", "20:00"], 6: ["09:00", "18:00"] }, offre: "Cours d'essai à 5 €" },
    { nom: "Pétale", cat: "Boutiques", emoji: "💐", desc: "Fleuriste de saison, livraison à vélo.", adresse: "27 rue des Jardins", tel: "01 23 45 67 11",
      horaires: { 0: ["09:00", "13:00"], 1: null, 2: ["09:30", "19:30"], 3: ["09:30", "19:30"], 4: ["09:30", "19:30"], 5: ["09:30", "20:00"], 6: ["09:00", "20:00"] } },
    { nom: "Indigo", cat: "Boutiques", emoji: "🧥", desc: "Prêt-à-porter de créateurs locaux.", adresse: "11 rue des Créateurs", tel: "01 23 45 67 12",
      horaires: { 0: null, 1: ["14:00", "19:00"], 2: ["10:30", "19:00"], 3: ["10:30", "19:00"], 4: ["10:30", "19:00"], 5: ["10:30", "19:30"], 6: ["10:00", "19:30"] } },
    { nom: "La Page d'Après", cat: "Boutiques", emoji: "📚", desc: "Librairie indépendante, rencontres d'auteurs.", adresse: "6 place du Marché", tel: "01 23 45 67 13",
      horaires: { 0: ["10:00", "13:00"], 1: null, 2: ["10:00", "19:00"], 3: ["10:00", "19:00"], 4: ["10:00", "19:00"], 5: ["10:00", "20:00"], 6: ["10:00", "20:00"] }, offre: "Carte lecteur : 5 % toute l'année" },
  ],
  ville: "75000 Paris", // ajouté à l'adresse pour l'itinéraire
};
