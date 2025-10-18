document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  const dotsContainer = document.getElementById('carousel-dots');
  let currentIndex = 0;

  // Crear puntos
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.carousel-dot');

  function goToSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentIndex = index;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  document.querySelector('.next-btn').addEventListener('click', () => {
    goToSlide((currentIndex + 1) % slides.length);
  });

  document.querySelector('.prev-btn').addEventListener('click', () => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  });
});