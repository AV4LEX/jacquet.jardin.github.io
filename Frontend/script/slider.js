document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const mailtoButton = document.querySelector(".contact-btn"); // Sélectionner le bouton mailto

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

    // Fonction pour mettre en pause la vidéo
    function pauseVideo() {
        const video = document.querySelector('video'); // Chercher la vidéo dans le carrousel
        if (video) {
            video.pause(); // Met la vidéo en pause
        }
    }

    // Lorsque le bouton mailto est cliqué, on met la vidéo en pause
    mailtoButton.addEventListener("click", (event) => {
        pauseVideo(); // Met la vidéo en pause
    });

    window.addEventListener('focus', () => {
        const video = document.querySelector('video');
        if (video && video.paused) {
            video.play(); // Redémarrer la vidéo si elle était en pause
        }
    });
});
