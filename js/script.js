const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// ☰ ボタン
btn.addEventListener("click", (e) => {
  e.stopPropagation(); // ← ここ重要
  btn.classList.toggle("active");
  menu.classList.toggle("open");
});

// メニュー内クリックは閉じない
menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// 画面のどこかを押したら閉じる
document.addEventListener("click", () => {
  btn.classList.remove("active");
  menu.classList.remove("open");
});
