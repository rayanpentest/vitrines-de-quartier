import SwiftUI
import WebKit
import UniformTypeIdentifiers

/// Affiche l'app web embarquée (dossier « web » du bundle) dans une WKWebView.
/// - Les fichiers sont servis par un schéma maison  vitrine://app/…  : l'app marche sans réseau
///   et garde ses données (localStorage) d'un lancement à l'autre.
/// - Les liens externes (WhatsApp, téléphone, Plans, sites web) s'ouvrent dans l'app iOS concernée.
struct PageWeb: UIViewRepresentable {
    @Binding var haut: Color
    @Binding var bas: Color

    static let schema = "vitrine"
    static let accueil = URL(string: "vitrine://app/index.html")!

    func makeCoordinator() -> Pilote { Pilote(self) }

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.setURLSchemeHandler(context.coordinator, forURLScheme: Self.schema)
        config.allowsInlineMediaPlayback = true
        config.userContentController.add(context.coordinator, name: "couleurs")
        config.userContentController.addUserScript(
            WKUserScript(source: Self.scriptCouleurs, injectionTime: .atDocumentEnd, forMainFrameOnly: true))

        let vue = WKWebView(frame: .zero, configuration: config)
        vue.navigationDelegate = context.coordinator
        vue.uiDelegate = context.coordinator
        vue.isOpaque = false
        vue.backgroundColor = .clear
        vue.scrollView.backgroundColor = .clear
        vue.scrollView.bounces = false
        vue.scrollView.contentInsetAdjustmentBehavior = .never
        vue.allowsLinkPreview = false
        #if DEBUG
        vue.isInspectable = true   // Safari > Développement > Simulateur
        #endif
        vue.load(URLRequest(url: Self.accueil))
        return vue
    }

    func updateUIView(_ vue: WKWebView, context: Context) {}

    /// Relève la couleur de fond tout en haut et tout en bas de la page, et prévient l'app quand elle change.
    static let scriptCouleurs = """
    (function () {
      function fond(y) {
        var e = document.elementFromPoint(innerWidth / 2, y);
        while (e) {
          var c = getComputedStyle(e).backgroundColor;
          if (c && c !== "transparent" && !/, 0\\)$/.test(c)) return c;
          e = e.parentElement;
        }
        return "rgb(255, 255, 255)";
      }
      var avant = "";
      function releve() {
        var m = fond(1) + "|" + fond(innerHeight - 2);
        if (m !== avant) { avant = m; webkit.messageHandlers.couleurs.postMessage(m); }
      }
      releve(); setInterval(releve, 300);
    })();
    """

    final class Pilote: NSObject, WKNavigationDelegate, WKUIDelegate, WKURLSchemeHandler, WKScriptMessageHandler {
        let parent: PageWeb
        init(_ parent: PageWeb) { self.parent = parent }

        // MARK: Fichiers du dossier « web »
        func webView(_ webView: WKWebView, start tache: WKURLSchemeTask) {
            guard let url = tache.request.url,
                  let racine = Bundle.main.resourceURL?.appendingPathComponent("web", isDirectory: true) else {
                return tache.didFailWithError(URLError(.badURL))
            }
            var chemin = url.path.isEmpty || url.path == "/" ? "/index.html" : url.path
            if chemin.hasSuffix("/") { chemin += "index.html" }
            let fichier = racine.appendingPathComponent(chemin).standardizedFileURL
            guard fichier.path.hasPrefix(racine.standardizedFileURL.path),
                  let donnees = try? Data(contentsOf: fichier) else {
                return tache.didFailWithError(URLError(.fileDoesNotExist))
            }
            let ext = fichier.pathExtension.lowercased()
            let type = ext == "webmanifest" ? "application/manifest+json"
                : UTType(filenameExtension: ext)?.preferredMIMEType ?? "application/octet-stream"
            let texte = ["html", "js", "css", "json", "svg", "webmanifest"].contains(ext)
            let reponse = HTTPURLResponse(url: url, statusCode: 200, httpVersion: "HTTP/1.1", headerFields: [
                "Content-Type": texte ? type + "; charset=utf-8" : type,
                "Content-Length": String(donnees.count),
                "Cache-Control": "no-cache",
            ])!
            tache.didReceive(reponse)
            tache.didReceive(donnees)
            tache.didFinish()
        }
        func webView(_ webView: WKWebView, stop tache: WKURLSchemeTask) {}

        // MARK: Liens externes → app iOS concernée (WhatsApp, Téléphone, Plans, Safari)
        func webView(_ webView: WKWebView, decidePolicyFor action: WKNavigationAction,
                     decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            guard let url = action.request.url else { return decisionHandler(.cancel) }
            let interne = url.scheme == PageWeb.schema || url.scheme == "about"
            if interne || action.targetFrame?.isMainFrame == false { return decisionHandler(.allow) }
            UIApplication.shared.open(url)
            decisionHandler(.cancel)
        }
        func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration,
                     for action: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
            if let url = action.request.url { UIApplication.shared.open(url) }   // liens target="_blank"
            return nil
        }

        // MARK: Couleurs du haut et du bas de page
        func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
            guard let texte = message.body as? String else { return }
            let c = texte.split(separator: "|").map { Self.couleur(String($0)) }
            guard c.count == 2 else { return }
            withAnimation(.easeInOut(duration: 0.3)) { parent.haut = c[0]; parent.bas = c[1] }
        }
        /// "rgb(255, 248, 240)" ou "rgba(…)" → Color
        static func couleur(_ css: String) -> Color {
            let n = css.split(whereSeparator: { !"0123456789.".contains($0) }).compactMap { Double($0) }
            guard n.count >= 3 else { return .white }
            return Color(red: n[0] / 255, green: n[1] / 255, blue: n[2] / 255)
        }
    }
}
