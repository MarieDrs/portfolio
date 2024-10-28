let currentPanel = 1;
const panelWidth = 1100; 
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
    const translateValue = -panelWidth * (currentPanel - 1);
    carousel.style.transform = `translateX(${translateValue}px)`;
    panelContainer.style.width = `${panelWidth}px`;
}

updateCarousel();
