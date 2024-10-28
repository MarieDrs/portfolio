let currentPanel = 1;
const totalPanels = 17;

function changePanel(direction) {
    currentPanel += direction;

    if (currentPanel < 1) {
        currentPanel = totalPanels;
    } else if (currentPanel > totalPanels) {
        currentPanel = 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const panelContainer = document.querySelector('.carousel-container');
    const panelWidth = panelContainer.clientWidth; // Dynamically get the panel width
    const translateValue = -panelWidth * (currentPanel - 1);
    carousel.style.transform = `translateX(${translateValue}px)`;
}

window.addEventListener('resize', updateCarousel); // Update carousel on window resize

updateCarousel();