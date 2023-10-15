<?php
// Chemin vers le fichier de compteur
$compteur_fichier = 'files/compteur.txt';

// Fonction pour lire le compteur depuis le fichier
function lireCompteur($fichier) {
    if (file_exists($fichier)) {
        return (int) file_get_contents($fichier);
    } else {
        return 0;
    }
}

// Fonction pour incrémenter le compteur et écrire dans le fichier
function incrementerCompteur($fichier) {
    $compteur = lireCompteur($fichier);
    $compteur++;
    file_put_contents($fichier, $compteur);
}

// Incrémenter le compteur lorsqu'un utilisateur visite le site
incrementerCompteur($compteur_fichier);

// Obtenir le nombre de visiteurs en temps réel
$nombre_visiteurs = lireCompteur($compteur_fichier);

// Afficher le résultat
echo "Nombre de visiteurs en temps réel : $nombre_visiteurs";
?>
