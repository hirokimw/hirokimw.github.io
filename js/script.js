const navColors = ["black", "darkred", "darkblue", "darkgreen"];
const textColors = ["black", "red", "blue", "green"];
const messages = ["ここが変わります", "変わりました！", "さらに変化！", "最高潮！"];
let index = 0;

function changeColors() {
  const nav = document.getElementById("mainNav");
  const msg = document.getElementById("message");

  nav.style.backgroundColor = navColors[index];
  msg.style.color = textColors[index];
  msg.textContent = messages[index];

  index = (index + 1) % navColors.length;
}

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

