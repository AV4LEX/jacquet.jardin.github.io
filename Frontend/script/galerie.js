document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.filtre-btn');
    const cards = document.querySelectorAll('.galerie-card');

    // Fonction pour afficher toutes les cartes (filtre 'all')
    const showAllCards = () => {
        buttons.forEach(button => button.classList.remove('active')); // Retirer l'active de tous les boutons
        const allButton = document.querySelector('[data-filter="all"]'); // Trouver le bouton "all"
        allButton.classList.add('active'); // Ajouter l'active au bouton "all"

        cards.forEach((card, index) => {
            card.style.display = 'block'; // Afficher toutes les cartes
            card.classList.remove('visible'); // Retirer la classe visible avant de la réappliquer
            setTimeout(() => {
                card.classList.add('visible'); // Ajouter la classe d'animation après un délai pour déclencher l'animation
            }, 100 * index); // Augmenter le délai pour chaque carte (100ms entre chaque)
        });
    };

    // Initialiser avec "Tout afficher" au chargement de la page
    showAllCards();

    // Gérer les clics sur les filtres
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
  
            // Gère la classe active
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
  
            // Affiche/Masque les cartes
            cards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.classList.remove('visible'); // Retirer l'animation avant de la réappliquer
                    setTimeout(() => {
                        card.classList.add('visible'); // Ajouter la classe d'animation après un délai
                    }, 100 * index); // Délai progressif entre chaque carte
                } else {
                    card.style.display = 'none';
                    card.classList.remove('visible'); // Supprimer l'animation si masqué
                }
            });
        });
    });
});
