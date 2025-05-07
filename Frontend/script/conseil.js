// Cibler tous les boutons qui ouvrent des modales
const openButtons = document.querySelectorAll('.open-modal');
const conseilCards = document.querySelectorAll('.conseil-bloc-white, .conseil-bloc-green'); // Cibler les cartes conseils
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Fonction pour ouvrir la modale
openButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêcher l'activation de l'événement sur les parents
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';  // Affiche la modale
    document.body.style.overflow = 'hidden';  // Désactive le scroll sur le body
    document.body.classList.add('modal-open'); // Empêche le défilement
  });
});

// Ajouter l'événement de clic sur chaque carte pour ouvrir la modale
conseilCards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.querySelector('.open-modal')?.getAttribute('data-modal'); // Récupérer l'ID de la modale à partir du bouton
    if (modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';  // Affiche la modale
      document.body.style.overflow = 'hidden';  // Désactive le scroll sur le body
      document.body.classList.add('modal-open'); // Empêche le défilement
    }
  });
});

// Fonction pour fermer la modale
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';  // Masque la modale
    document.body.style.overflow = 'auto';  // Réactive le scroll sur le body
    document.body.classList.remove('modal-open'); // Retire la classe pour réactiver le défilement
  });
});

// Fermer la modale en cliquant en dehors du contenu de la modale
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {  // Si l'utilisateur clique en dehors de la modale
      modal.style.display = 'none';  // Masque la modale
      document.body.style.overflow = 'auto';  // Réactive le scroll sur le body
      document.body.classList.remove('modal-open'); // Retire la classe pour réactiver le défilement
    }
  });
});
