// Sauvegarder une nouvelle séance
function sauvegarderSeance(nouvelleSeance) {
    let historique = JSON.parse(localStorage.getItem('mesSeancesMuscu')) || [];
    historique.push(nouvelleSeance);
    localStorage.setItem('mesSeancesMuscu', JSON.stringify(historique));
}

// Récupérer l'historique des séances pour l'affichage
function chargerSeances() {
    return JSON.parse(localStorage.getItem('mesSeancesMuscu')) || [];
}
