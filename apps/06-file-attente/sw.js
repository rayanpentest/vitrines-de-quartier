/* Service worker minimal : rend l'app installable et utilisable hors connexion.
   Stratégie « réseau d'abord » : on affiche toujours la dernière version en ligne,
   et la copie en mémoire seulement si le téléphone n'a pas de réseau. */
const CACHE = "vitrine-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((r) => {
        const copie = r.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copie)).catch(() => {});
        return r;
      })
      .catch(() => caches.match(e.request))
  );
});
