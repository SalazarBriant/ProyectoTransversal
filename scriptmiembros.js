const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.al');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;

function nextSlide() {
    if (currentIndex >= slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlide();
}

function updateSlide() {
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, 3500)