// Fonction pour ouvrir le modal
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

// Fonction pour fermer le modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Fermer le modal en cliquant n'importe où en dehors de l'image
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



