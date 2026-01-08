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
