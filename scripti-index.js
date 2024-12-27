const carouselList = document.querySelector('.carousel-list');

// Clone les images pour l'effet infini
const clones = [...carouselList.children].map(child => child.cloneNode(true));
clones.forEach(clone => carouselList.appendChild(clone));

carouselList.style.transition = "none";

// Ajoutez l’animation JavaScript (en parallèle au CSS).
let startIndex = 0;

function infiniteScroll() {
  const items = carouselList.children;
  if (startIndex >= items.length / 2) {
    carouselList.style.transition = "none";
    carouselList.style.transform = "translateX(0)";
    startIndex = 0;
  }

  setTimeout(() => {
    startIndex++;
    carouselList.style.transition = "transform 0.5s linear";
    carouselList.style.transform = `translateX(-${startIndex * 100}%)`;
    infiniteScroll();
  }, 2000);
}

infiniteScroll();
