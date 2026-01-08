document.addEventListener("DOMContentLoaded", () => {
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("open");
});
});
