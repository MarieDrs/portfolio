let currentPanel = 1;
const totalPanels = 21;

function initCarousel() {
    const carousel = document.getElementById('carousel');
    const indicatorsContainer = document.getElementById('indicators');

    for (let i = 1; i <= totalPanels; i++) {
        // Create panel
        const panel = document.createElement('div');
        panel.className = 'panel';
        const img = document.createElement('img');
        img.src = `resources/${i}-min.jpg`;
        img.alt = `Image ${i}`;
        panel.appendChild(img);
        carousel.appendChild(panel);

        // Create indicator
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => goToPanel(i);
        indicatorsContainer.appendChild(dot);
    }
    updateCarousel();
}

function changePanel(direction) {
    currentPanel += direction;

    if (currentPanel < 1) {
        currentPanel = totalPanels;
    } else if (currentPanel > totalPanels) {
        currentPanel = 1;
    }

    updateCarousel();
}

function goToPanel(index) {
    currentPanel = index;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const panelContainer = document.querySelector('.carousel-container');
    const panelWidth = panelContainer.clientWidth; // Dynamically get the panel width
    const translateValue = -panelWidth * (currentPanel - 1);
    carousel.style.transform = `translateX(${translateValue}px)`;

    // Update indicators
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        if (idx + 1 === currentPanel) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

window.addEventListener('resize', updateCarousel); // Update carousel on window resize

document.addEventListener('DOMContentLoaded', initCarousel); // Initialize carousel
