// Cibler tous les boutons qui ouvrent des modales
const openButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Fonction pour ouvrir la modale
openButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';  // Affiche la modale
    document.body.style.overflow = 'hidden';  // Désactive le scroll sur le body
    document.body.classList.add('modal-open'); // Ajoute la classe pour empêcher le défilement
  });
});

// Fonction pour fermer la modale
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';  // Cache la modale
    document.body.style.overflow = 'auto';  // Réactive le scroll sur le body
    document.body.classList.remove('modal-open'); // Retire la classe pour réactiver le défilement
  });
});

// Fermer la modale en cliquant en dehors du contenu de la modale
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';  // Réactive le scroll sur le body
      document.body.classList.remove('modal-open'); // Retire la classe pour réactiver le défilement
    }
  });
});

