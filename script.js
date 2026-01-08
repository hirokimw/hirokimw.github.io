let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "block" : "none";
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// 最初のスライドを表示
showSlide(slideIndex);

// ✅ 自動切替（3秒ごと）
setInterval(() => {
  nextSlide();
}, 3000);

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

