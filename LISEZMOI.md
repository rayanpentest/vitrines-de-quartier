# Vitrines de quartier — 10 sites + 10 apps

Vingt modèles prêts à adapter pour les commerces et artisans du quartier.
Aucune installation, aucun framework : du HTML, du CSS et du JavaScript simples, lisibles dans VS Code.

## Ce qu'il y a dans le dossier

| Dossier | Contenu |
|---|---|
| `index.html` | **Votre catalogue** : la page à montrer aux commerçants (mettez votre nom et votre e-mail dans l'objet `STUDIO`, en bas du fichier). |
| `sites/` | 10 sites vitrines : boulangerie, barbier, bistrot, fleuriste, garage, café, primeur, yoga, plombier, institut. |
| `apps/` | 10 applications mobiles (installables sur l'écran d'accueil) : fidélité, click & collect, rendez-vous, menu QR, devis, file d'attente, planning de cours, roue des cadeaux, lookbook, guide du quartier. |
| `_kit/` | Le code commun (`kit.js`, `sw.js`). Chaque modèle en contient déjà une copie : un dossier de modèle se suffit à lui-même. |
| `outils/` | Deux petits scripts (voir plus bas). |

## Modifier un modèle (5 minutes)

Dans chaque dossier, **tout le contenu est dans `config.js`** : nom, textes, prix, horaires, couleurs, numéro WhatsApp.
Vous ne touchez à `index.html` que pour changer la mise en page.

1. Ouvrez le dossier dans VS Code.
2. Modifiez `config.js`, enregistrez.
3. Rechargez la page dans le navigateur.

Repères utiles :

- **Couleurs** : `couleurs: { fond, encre, accent… }` — des codes couleur classiques (`#c8752d`).
- **Horaires** : `0` = dimanche … `6` = samedi, `null` = fermé. Le badge « Ouvert / Fermé » se calcule tout seul.
  Deux services dans la journée : `[["12:00","14:30"],["19:00","22:30"]]`.
- **Photos** : là où il y a un `emoji`, ajoutez `image: "photos/mon-image.jpg"` et la photo le remplace.
- **WhatsApp** : `whatsapp: "33612345678"` (format international, sans `+`). Les commandes, réservations et devis arrivent sur ce numéro, sans serveur ni abonnement.
- **Signature** : `credit: "Site réalisé par …"` s'affiche en pied de page — votre publicité chez chaque client.

## Voir les modèles sur votre Mac

Dans le Terminal, depuis ce dossier :

```bash
python3 -m http.server 4173
```

Puis ouvrez `http://localhost:4173` dans Safari ou Chrome. (Dans VS Code, l'extension « Live Server » fait la même chose en un clic.)

## Créer le site d'un client

```bash
sh outils/nouveau-client.sh sites/01-boulangerie boulangerie-dupont
```

Cela copie le modèle dans `clients/boulangerie-dupont/`. Modifiez son `config.js`, c'est prêt à livrer.

Si vous améliorez `_kit/kit.js`, recopiez-le partout avec `sh outils/installer-kit.sh`.

## Mettre en ligne

Un dossier de modèle est un site complet. Il suffit de le déposer chez un hébergeur de sites statiques :

- **GitHub Pages** (gratuit) : dépôt public → *Settings → Pages → Deploy from a branch → main*. Le catalogue est alors en ligne, et chaque modèle à l'adresse `…/sites/01-boulangerie/`.
- **Netlify** ou **Cloudflare Pages** (gratuits) : glissez le dossier du client, branchez son nom de domaine (≈ 10–15 €/an, à refacturer).

Les apps deviennent installables dès qu'elles sont en ligne en `https` : sur iPhone, *Partager → Sur l'écran d'accueil* ; sur Android, *Installer l'application*.

## Ce que les apps font — et ne font pas encore

Les apps fonctionnent **sans serveur** : c'est ce qui permet de les livrer vite et sans frais mensuels. La contrepartie :

| App | Fonctionne tel quel | Demande un petit serveur pour… |
|---|---|---|
| Click & collect, rendez-vous, devis, lookbook | Oui : la demande part par WhatsApp. | Bloquer un créneau déjà pris par un autre client, paiement en ligne. |
| Menu QR, guide du quartier | Oui, complètement. | — |
| Carte de fidélité, roue des cadeaux | Oui : les tampons et les lots sont gardés sur le téléphone du client, validés par le code du commerçant. | Retrouver sa carte en changeant de téléphone ; empêcher un client débrouillard de tricher. |
| File d'attente, planning de cours | En **démonstration** (`demo: true` : la file avance seule, les cours sont remplis de chiffres fictifs). | Partager la vraie file et les vraies places entre tous les téléphones. |

Le « petit serveur » peut être Supabase ou Firebase (offres gratuites) : c'est une bonne **option payante** à proposer ensuite.

Côté sites : le contenu est affiché par JavaScript à partir de `config.js`. Google le lit correctement, et chaque site déclare automatiquement sa fiche d'établissement (`LocalBusiness`). Pour un client très dépendant du référencement, prévoyez d'écrire les textes directement dans le HTML.

## Vendre

Trois façons de gagner de l'argent avec ce dossier (les montants sont des **ordres de grandeur à ajuster** à votre ville et à votre expérience) :

1. **La création** — site vitrine adapté : 300 à 800 €. App : 400 à 1 200 €. Commencez bas pour vos trois premiers clients, en échange d'un avis et du droit de les citer.
2. **L'abonnement** — hébergement, nom de domaine, mises à jour des horaires et des prix : 15 à 40 €/mois. C'est le revenu qui dure.
3. **Les options** — photos du commerce, QR codes imprimés pour les tables, fiche Google à jour, version avec serveur (vraie file d'attente, vraie fidélité).

Pour démarcher :

- Créez d'abord le dossier du commerçant (`nouveau-client.sh`), mettez **son** nom, **ses** horaires, **ses** couleurs. Dix minutes de travail.
- Passez à un moment calme et montrez-lui son site sur votre téléphone. Une démo à son nom vaut mieux que tous les arguments.
- Le **guide du quartier** (`apps/10-guide-quartier`) est une bonne porte d'entrée : proposez-le à l'association des commerçants, chaque commerce listé devient un client potentiel.
- Avant de livrer : faites valider les textes et les prix par le client, ajoutez des mentions légales, et n'utilisez que des photos qui lui appartiennent.

## Et Xcode ?

Les apps sont des « web apps » : elles s'installent depuis Safari, sans App Store, ce qui évite le compte développeur Apple (99 $/an) et la validation. Si un client veut absolument être sur l'App Store, le dossier `ios/` contient un projet Xcode qui emballe n'importe laquelle des apps dans une vraie app iOS.

### L'app iOS (dossier `ios/`)

1. Choisissez l'app à embarquer et le nom affiché sous l'icône :
   `sh outils/ios-choisir-app.sh apps/03-rendez-vous "Salon Léa"`
   (un dossier `clients/...` marche aussi). Le script copie l'app dans `ios/web` et refait l'icône.
2. Ouvrez `ios/Vitrine.xcodeproj` dans Xcode, choisissez un simulateur d'iPhone, puis ▶.
3. Après chaque modification de `config.js`, relancez le script puis ▶.

Ce que fait l'app : elle affiche le contenu de `ios/web` hors ligne, garde les données (tampons, favoris, réservations) d'un lancement à l'autre, et ouvre WhatsApp, le téléphone ou Plans pour les liens externes. Le code tient dans deux fichiers : `ios/Vitrine/VitrineApp.swift` et `ios/Vitrine/PageWeb.swift`.

Pour l'installer sur un vrai iPhone ou la publier, il faut dans Xcode (cible Vitrine → Signing & Capabilities) : choisir votre équipe (un identifiant Apple gratuit suffit pour tester sur votre iPhone ; l'App Store demande le compte développeur à 99 $/an) et remplacer l'identifiant `fr.vitrinesdequartier.vitrine` par un identifiant propre à chaque client. Apple refuse parfois les apps qui ne sont qu'un site emballé : mettez en avant ce que l'app fait vraiment (carte de fidélité, réservation, file d'attente).
