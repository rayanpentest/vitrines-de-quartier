/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "plombier",
  nom: "Allô Fuite",
  metier: "Plombier · Chauffagiste",
  accroche: "Dites-nous ce qui coule, on vous dit quoi faire.",
  intro: "Un diagnostic en 3 clics : le bon geste tout de suite, une fourchette de prix honnête, et un artisan du quartier chez vous rapidement.",

  couleurs: { fond: "#f3f7fb", encre: "#0b2545", accent: "#ff5a1f", bleu: "#1769ff", doux: "#dce8f7" },

  telephone: "01 23 45 67 89",
  whatsapp: "33600000000",
  adresse: "Interventions à domicile — atelier : 30 rue des Artisans, 75000 Paris",
  credit: "Site réalisé par Votre Studio",

  horaires: {
    0: ["09:00", "18:00"],
    1: ["07:00", "20:00"],
    2: ["07:00", "20:00"],
    3: ["07:00", "20:00"],
    4: ["07:00", "20:00"],
    5: ["07:00", "20:00"],
    6: ["08:00", "19:00"],
  },

  // Le diagnostic : problème → gravité → résultat
  problemes: [
    { nom: "Fuite d'eau", emoji: "💧", prix: [90, 180], geste: "Coupez l'arrivée d'eau au compteur et placez un récipient sous la fuite." },
    { nom: "WC ou évier bouché", emoji: "🚽", prix: [80, 150], geste: "N'utilisez plus l'évacuation et évitez les produits chimiques : ils abîment les joints." },
    { nom: "Plus d'eau chaude", emoji: "🚿", prix: [95, 220], geste: "Vérifiez le disjoncteur du chauffe-eau et la pression de la chaudière (entre 1 et 2 bars)." },
    { nom: "Chauffage en panne", emoji: "🌡️", prix: [100, 240], geste: "Notez le code d'erreur affiché sur la chaudière : il nous fera gagner du temps." },
    { nom: "Robinet qui goutte", emoji: "🚰", prix: [60, 110], geste: "Fermez le robinet d'arrêt sous le lavabo en attendant notre passage." },
    { nom: "Installation neuve", emoji: "🛁", prix: [250, 1200], geste: "Prenez 2 ou 3 photos de la pièce : le devis sera plus précis." },
  ],
  gravites: [
    { nom: "Ça peut attendre", detail: "Cette semaine, c'est bien", coef: 1, delai: "sous 48 h", niveau: 1 },
    { nom: "C'est gênant", detail: "Aujourd'hui si possible", coef: 1.15, delai: "dans la journée", niveau: 2 },
    { nom: "C'est urgent", detail: "Ça coule, ça déborde", coef: 1.4, delai: "en moins d'une heure", niveau: 3 },
  ],

  zones: ["Centre-ville", "Les Lilas", "Quartier de la Gare", "Les Hauts-Prés", "Vieux Port", "Beaulieu"],
  garanties: [
    { titre: "Prix annoncé = prix payé", texte: "Devis gratuit avant toute intervention. Aucun supplément caché." },
    { titre: "Artisan du quartier", texte: "Pas de plateforme, pas de sous-traitant : c'est nous qui venons." },
    { titre: "Garantie 2 ans", texte: "Pièces et main-d'œuvre, assurance décennale à jour." },
  ],
};
