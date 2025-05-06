document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    const totalSlides = slides.length;
    let autoScroll;

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

    function startAutoScroll() {
        autoScroll = setInterval(() => {
            // Si la vidéo est visible et en cours de lecture, on n'active pas l'auto-scroll
            const currentSlide = slides[index];
            const video = currentSlide.querySelector("video");
            if (video && !video.paused) {
                return; // Ne pas faire défiler si la vidéo est en lecture
            }

            index = (index + 1) % totalSlides; // Passe à la prochaine slide
            updateCarousel();
        }, 4000);
    }

    // Démarrer l'auto-scroll
    startAutoScroll();

    // Arrêter l'auto-scroll lorsque la souris est dessus
    document.querySelector(".carousel").addEventListener("mouseenter", () => {
        clearInterval(autoScroll);
    });

    // Reprendre l'auto-scroll lorsque la souris quitte le carrousel
    document.querySelector(".carousel").addEventListener("mouseleave", () => {
        startAutoScroll();
    });

    // Arrêter l'auto-scroll si une vidéo est lue et redémarrer si elle est terminée
    document.querySelector(".carousel").addEventListener("click", () => {
        const currentSlide = slides[index];
        const video = currentSlide.querySelector("video");

        if (video) {
            // Si la vidéo est en cours de lecture, on la met en pause
            if (!video.paused) {
                video.pause();
                // Redémarrer l'auto-scroll après la vidéo
                startAutoScroll();
            }
        }
    });
});
