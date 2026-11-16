#!/bin/sh
# Choisit l'app web embarquée dans l'app iOS (projet Xcode du dossier ios/).
# Usage :  sh outils/ios-choisir-app.sh apps/03-rendez-vous "Salon Léa"
#          sh outils/ios-choisir-app.sh clients/cafe-dupont "Café Dupont"
# → copie le modèle dans ios/web, refait l'icône, et règle le nom affiché sous l'icône.
cd "$(dirname "$0")/.." || exit 1
if [ -z "$1" ]; then echo "Usage : sh outils/ios-choisir-app.sh <dossier-de-l-app> [\"Nom affiché\"]"; exit 1; fi
if [ ! -f "$1/index.html" ]; then echo "App introuvable : $1"; exit 1; fi
SRC=${1%/}
rm -rf ios/web && cp -R "$SRC" ios/web && rm -f ios/web/sw.js
# Icône 1024 px sans transparence (exigée par l'App Store)
TMP=$(mktemp -d)
ICONE=ios/Vitrine/Assets.xcassets/AppIcon.appiconset/icone.png
if [ -f "$SRC/icon.svg" ] && qlmanage -t -s 1024 -o "$TMP" "$SRC/icon.svg" >/dev/null 2>&1 && [ -f "$TMP/icon.svg.png" ]; then
  sips -s format jpeg -s formatOptions 100 "$TMP/icon.svg.png" --out "$TMP/i.jpg" >/dev/null
elif [ -f "$SRC/icon.png" ]; then
  sips -z 1024 1024 -s format jpeg -s formatOptions 100 "$SRC/icon.png" --out "$TMP/i.jpg" >/dev/null
fi
[ -f "$TMP/i.jpg" ] && sips -z 1024 1024 -s format png "$TMP/i.jpg" --out "$ICONE" >/dev/null
rm -rf "$TMP"
if [ -n "$2" ]; then
  NOM=$(printf '%s' "$2" | sed 's/[\\"&|]//g')
  sed -i '' "s|INFOPLIST_KEY_CFBundleDisplayName = \"[^\"]*\";|INFOPLIST_KEY_CFBundleDisplayName = \"$NOM\";|" ios/Vitrine.xcodeproj/project.pbxproj
fi
echo "ios/web contient maintenant : $SRC — ouvrez ios/Vitrine.xcodeproj dans Xcode puis ▶."
