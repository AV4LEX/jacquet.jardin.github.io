// Sélection des éléments nécessaires
const modal = document.getElementById('modal'); // La modale
const modalImage = document.getElementById('modal-image'); // L'image dans la modale
const closeBtn = document.getElementById('close-btn'); // Le bouton de fermeture

// Sélectionner toutes les images dans la galerie
const galerieImages = document.querySelectorAll('.galerie-card img');

// Fonction pour ouvrir la modale et afficher l'image
galerieImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex'; // Afficher la modale
        modalImage.src = image.src; // Mettre l'image dans la modale
    });
});

// Fonction pour fermer la modale
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Masquer la modale
});

// Fermer la modale si on clique en dehors de l'image
modal.addEventListener('click', (e) => {
    if (e.target === modal) { // Vérifier si c'est le fond qui a été cliqué
        modal.style.display = 'none'; // Masquer la modale
    }
});
