#!/bin/sh
# Recopie le kit commun dans chaque modèle (à relancer si vous modifiez _kit/kit.js ou _kit/sw.js).
# Usage :  sh outils/installer-kit.sh
cd "$(dirname "$0")/.." || exit 1
for d in sites/*/ apps/*/ clients/*/; do
  [ -f "$d/index.html" ] || continue
  cp _kit/kit.js "$d/kit.js"
  [ -f "$d/manifest.webmanifest" ] && cp _kit/sw.js "$d/sw.js"
done
echo "Kit installé dans tous les modèles."
