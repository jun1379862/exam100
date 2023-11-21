const slides = document.querySelectorAll('.slide');
const progressBar = document.querySelector('.progress');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

const showSlide = (n) => {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === n);
  });
};

const updateProgress = (n) => {
  const percent = ((n + 1) / slides.length) * 100;
  progressBar.style.width = `${percent}%`;
};

const navigateSlide = (n) => {
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  showSlide(currentSlide);
  updateProgress(currentSlide);
};

prevBtn.addEventListener('click', () => navigateSlide(-1));
nextBtn.addEventListener('click', () => navigateSlide(1));

// Show the initial slide and progress
showSlide(currentSlide);
updateProgress(currentSlide);