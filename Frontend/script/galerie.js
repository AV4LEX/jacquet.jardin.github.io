document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.filtre-btn');
    const cards = document.querySelectorAll('.galerie-card');

    const showCards = (filter) => {
        buttons.forEach(btn => btn.classList.remove('active'));

        const activeButton = document.querySelector(`[data-filter="${filter}"]`);
        if (activeButton) activeButton.classList.add('active');

        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            const shouldShow = filter === 'all' || category === filter;

            card.classList.remove('visible');
            card.style.display = shouldShow ? 'block' : 'none';

            if (shouldShow) {
                // Désactive le hover en ajoutant la classe no-hover
                card.classList.add('no-hover');

                setTimeout(() => {
                    card.classList.add('visible');
                    
                    // Retire la classe "no-hover" une fois l'animation terminée
                    card.addEventListener('animationend', () => {
                        card.classList.remove('visible');
                        card.classList.remove('no-hover');
                    }, { once: true });
                }, 10); // Petite pause pour bien déclencher l'animation
            }
        });
    };

    // Init au chargement
    showCards('all');

    // Event listeners sur les boutons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            showCards(filter);
        });
    });
});
