import SwiftUI

// Point d'entrée de l'app iOS.
// Tout le contenu vient du dossier ios/web (une copie d'un modèle du dossier apps/).
// Pour changer d'app ou de client :  sh outils/ios-choisir-app.sh apps/03-rendez-vous "Nom affiché"
@main
struct VitrineApp: App {
    var body: some Scene {
        WindowGroup { Ecran() }
    }
}

struct Ecran: View {
    // Couleurs du haut et du bas de la page, pour habiller l'encoche et la barre d'accueil.
    @State private var haut = Color(.systemBackground)
    @State private var bas = Color(.systemBackground)

    var body: some View {
        ZStack {
            VStack(spacing: 0) { haut; bas }.ignoresSafeArea()
            PageWeb(haut: $haut, bas: $bas)
        }
    }
}
