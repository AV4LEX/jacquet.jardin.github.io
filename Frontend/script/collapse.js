function toggleCollapse(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling; // Le bouton juste avant le contenu
    
    // Si la section est actuellement fermée, on l'ouvre, sinon on la ferme
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Afficher le contenu
        button.classList.add("active");  // Changer la couleur du bouton pour refléter l'état ouvert
    } else {
        content.style.display = "none"; // Fermer le contenu
        button.classList.remove("active"); // Retirer la classe active
    }
}
