const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const nextSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active');
    }
    else {
        slides[0].classList.add('active');
    }
} // nextSlide
const prevSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('active');
    }
    else {
        slides[slides.length - 1].classList.add('active');
    }
}  // prevSlide

next.addEventListener('click', () => {
    nextSlide();
} // nextSlide
);
prev.addEventListener('click', () => {
    prevSlide();
} // prevSlide
);
