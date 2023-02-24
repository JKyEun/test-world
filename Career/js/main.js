// 버튼 활성화 이벤트
const startBtn = document.querySelector(".start");
const homeBtn = document.querySelector(".home");

startBtn.addEventListener("mousedown", () => {
  startBtn.setAttribute("src", "./img/start-active.png");
});

startBtn.addEventListener("mouseup", () => {
  startBtn.setAttribute("src", "./img/start.png");
});

homeBtn.addEventListener("mousedown", () => {
  homeBtn.setAttribute("src", "./img/home-active.png");
});

homeBtn.addEventListener("mouseup", () => {
  homeBtn.setAttribute("src", "./img/home.png");
});