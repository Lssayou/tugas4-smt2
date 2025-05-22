let slideIndex = 0;
const slides = [
  document.getElementById('slide1')
];

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === slideIndex ? 1 : 0;
  });
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlide, 5000);
}
showSlide();

