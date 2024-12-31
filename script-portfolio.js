// Ouvrir la modale et afficher l'image sélectionnée
function openModal(imageSrc) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
  
    // Charger l'image cliquée
    modalImage.src = imageSrc;
  
    // Afficher la modale
    modal.style.display = "flex";
  
    // Désactiver le scroll en arrière-plan
    document.body.style.overflow = "hidden";
  }
  
  // Fermer la modale
  function closeModal() {
    const modal = document.getElementById('photoModal');
  
    // Cacher la modale
    modal.style.display = "none";
  
    // Réactiver le scroll en arrière-plan
    document.body.style.overflow = "auto";
  }
  