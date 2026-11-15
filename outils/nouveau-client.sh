#!/bin/sh
# Crée le dossier d'un nouveau client à partir d'un modèle.
# Usage :  sh outils/nouveau-client.sh sites/01-boulangerie boulangerie-dupont
#          → copie le modèle dans  clients/boulangerie-dupont/  (il ne reste qu'à modifier config.js)
cd "$(dirname "$0")/.." || exit 1
if [ -z "$1" ] || [ -z "$2" ]; then echo "Usage : sh outils/nouveau-client.sh <modele> <nom-du-client>"; exit 1; fi
if [ ! -f "$1/index.html" ]; then echo "Modèle introuvable : $1"; exit 1; fi
if [ -e "clients/$2" ]; then echo "Le dossier clients/$2 existe déjà."; exit 1; fi
mkdir -p clients
cp -R "$1" "clients/$2"
echo "Créé : clients/$2  — ouvrez clients/$2/config.js dans VS Code pour le personnaliser."
