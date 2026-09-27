// =====================================================================
//  SOURCE UNIQUE DES DONNEES DE COTISATION
//  ---------------------------------------------------------------
//  C'est le SEUL fichier a modifier pour mettre a jour les cotisations.
//  Toutes les pages lisent ici : accueil (2026), 2024, 2025, stats,
//  et l'assistant Poupoune.
//
//  Pour marquer un mois paye : remplacer 0 par 5000 dans le tableau.
//  Ordre des mois :
//  [ Jan,  Fev,  Mar,  Avr,  Mai,  Juin, Juil, Aout, Sep,  Oct,  Nov,  Dec ]
//
//  Pour une nouvelle annee : ajouter "2027: [0,0,0,0,0,0,0,0,0,0,0,0]"
//  a chaque membre, la page d'accueil et les stats la prendront en compte
//  automatiquement.
// =====================================================================

var COTISATION_MENSUELLE = 5000;
var PHOTO_DEFAUT = "/frontend/assets/images/photo1.png";

var PHOTOS = {
    "Waza":     "/frontend/assets/images/waza.jpg",
    "Melissa":  "/frontend/assets/images/melissa.jpg",
    "Victoire": "/frontend/assets/images/stephanie.jpg",
    "Isis":     "/frontend/assets/images/isis.jpg",
    "Norbert":  PHOTO_DEFAUT,
    "Bolingo":  PHOTO_DEFAUT,
    "Evan's":   PHOTO_DEFAUT,
    "Tic-Tac":  PHOTO_DEFAUT,
    "Naz-K":    "/frontend/assets/images/nazk.jpg",
    "Bagio":    PHOTO_DEFAUT
};

var allYearsData = {
    "Waza":     { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,5000,5000,5000,5000,5000,5000,0,0,0] },
    "Melissa":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,5000,5000,5000,5000,0,0,0,0,0] },
    "Victoire": { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,0,0,0,0,0,0,0,0,0,0] },
    "Isis":     { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,5000,5000,0,0,0,0,0,0,0] },
    "Norbert":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [0,0,0,0,0,0,0,0,0,0,0,0] },
    "Bolingo":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,0,0,0,0,0,0,0,0],                         2026: [0,0,0,0,0,0,0,0,0,0,0,0] },
    "Evan's":   { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000] },
    "Tic-Tac":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,5000,5000,5000,5000,5000,5000,0,0,0]  },
    "Naz-K":    { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,5000,5000,5000,0,0,0,0,0,0] },
    "Bagio":    { 2024: [],                                                            2025: [],                                                            2026: [] }
};

// ---- Helpers derives (ne pas modifier pour une simple mise a jour) ----

// Liste triee des annees presentes dans les donnees, ex: [2024, 2025, 2026]
function getAnnees() {
    var set = {};
    Object.keys(allYearsData).forEach(function(nom) {
        Object.keys(allYearsData[nom]).forEach(function(y) {
            set[y] = true;
        });
    });
    return Object.keys(set).map(Number).sort(function(a, b) { return a - b; });
}

// Membres actifs pour une annee donnee, au format attendu par script.js :
// [{ nom, photo, cotisations }]
function getMembresAnnee(annee) {
    return Object.keys(allYearsData)
        .map(function(nom) {
            return {
                nom: nom,
                photo: PHOTOS[nom] || PHOTO_DEFAUT,
                cotisations: allYearsData[nom][annee] || []
            };
        })
        .filter(function(m) { return m.cotisations.length > 0; });
}
