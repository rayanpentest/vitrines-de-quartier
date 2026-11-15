/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "file",
  nom: "Boucherie Martin",
  metier: "File d'attente sans attendre",
  couleurs: { fond: "#fff8f0", encre: "#2b1a1a", accent: "#d7263d", doux: "#f6e3d3", ext: "#2b1a1a" },

  telephone: "01 23 45 67 89",
  adresse: "17 rue du Marché, 75000 Paris",

  minutesParClient: 4,              // sert à estimer l'attente
  depart: { servi: 41, dernier: 46 }, // numéros au démarrage de la démo
  codeCommercant: "1234",           // ouvre le mode « comptoir » (bouton Suivant)

  // MODE DÉMO : la file avance toute seule pour montrer l'app à un client.
  // Mettez  demo: false  en usage réel (voir LISEZMOI : la synchro entre téléphones demande un petit serveur).
  demo: true,
  demoSecondes: 6,
};
