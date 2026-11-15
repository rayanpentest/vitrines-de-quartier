/* ═══ TOUT SE MODIFIE ICI ═══ */
window.CONFIG = {
  id: "devis",
  nom: "Atelier Couleur",
  metier: "Peintre en bâtiment · devis instantané",
  couleurs: { fond: "#fbf7f0", encre: "#1b1b3a", accent: "#ff5c39", bleu: "#3d5afe", doux: "#ece6da", ext: "#1b1b3a" },

  whatsapp: "33600000000",
  telephone: "01 23 45 67 89",
  adresse: "Interventions dans tout le quartier",

  // Réglages du calcul
  surface: { min: 10, max: 150, depart: 45 },   // m² au sol
  coefMurs: 2.6,                                // m² de murs ≈ m² au sol × ce coefficient
  marge: 0.12,                                  // fourchette affichée : ± 12 %

  etats: [
    { nom: "Murs en bon état", detail: "Simple rafraîchissement", coef: 1 },
    { nom: "Quelques fissures", detail: "Rebouchage et ponçage", coef: 1.25 },
    { nom: "Murs abîmés", detail: "Enduit complet avant peinture", coef: 1.6 },
  ],
  finitions: [
    { nom: "Standard", detail: "Blanc mat, 2 couches", prixM2: 22 },
    { nom: "Premium", detail: "Couleurs au choix, lessivable", prixM2: 29 },
    { nom: "Haut de gamme", detail: "Peinture écologique, finition velours", prixM2: 38 },
  ],
  options: [
    { nom: "Plafonds", detail: "par m² au sol", prixM2Sol: 16 },
    { nom: "Portes et boiseries", detail: "forfait", forfait: 280 },
    { nom: "Protection et déplacement des meubles", detail: "forfait", forfait: 120 },
  ],
};
