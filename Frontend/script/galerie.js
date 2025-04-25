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
                setTimeout(() => {
                    card.classList.add('visible');
                }, 10); // Juste pour déclencher l'animation CSS
            }
        });
    };

    // Init
    showCards('all');

    // Event listeners
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            showCards(filter);
        });
    });
});
