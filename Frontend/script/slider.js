document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        const offset = -index * 100; // Décalage en pourcentage
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener("click", () => {
        index = (index + 1) % totalSlides; // Passe à l'image suivante
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + totalSlides) % totalSlides; // Passe à l'image précédente
        updateCarousel();
    });

    // Défilement automatique toutes les 3 secondes
    let autoScroll = setInterval(() => {
        index = (index + 1) % totalSlides;
        updateCarousel();
    }, 4000);

    // Arrêter l'auto-scroll lorsque la souris est dessus
    document.querySelector(".carousel").addEventListener("mouseenter", () => {
        clearInterval(autoScroll);
    });

    // Reprendre l'auto-scroll lorsque la souris quitte le carrousel
    document.querySelector(".carousel").addEventListener("mouseleave", () => {
        autoScroll = setInterval(() => {
            index = (index + 1) % totalSlides;
            updateCarousel();
        }, 4000);
    });
});
