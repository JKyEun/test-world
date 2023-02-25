// 버튼 활성화 이벤트
const startBtn = document.querySelector(".start");
const homeBtn = document.querySelector(".home");

startBtn.addEventListener("mousedown", () => {
  startBtn.setAttribute("src", "./img/start-active.png");
});

startBtn.addEventListener("touchstart", () => {
  startBtn.setAttribute("src", "./img/start-active.png");
});

startBtn.addEventListener("mouseup", () => {
  startBtn.setAttribute("src", "./img/start.png");
});

startBtn.addEventListener("touchend", () => {
  startBtn.setAttribute("src", "./img/start.png");
});

homeBtn.addEventListener("mousedown", () => {
  homeBtn.setAttribute("src", "./img/home-active.png");
});

homeBtn.addEventListener("touchstart", () => {
  homeBtn.setAttribute("src", "./img/home-active.png");
});

homeBtn.addEventListener("mouseup", () => {
  homeBtn.setAttribute("src", "./img/home.png");
});

homeBtn.addEventListener("touchend", () => {
  homeBtn.setAttribute("src", "./img/home.png");
});

// Canvas 활용 트랜지션
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let locateArr = [];
let x = 0;
let y = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
ctx.fillStyle = "#181818";

const draw = () => {
  const num = 15;
  x = Math.floor(Math.random() * (canvas.width / num)) * num;
  y = Math.floor(Math.random() * (canvas.height / num)) * num;
  locateArr.push([x, y]);
  ctx.fillRect(x, y, num, num);
};

startBtn.addEventListener("mouseup", () => {
  canvas.style.zIndex = 1;
  for (let i = 0; i < 5000; i++) {
    setTimeout(draw, 10);
  }
  setTimeout(() => {
    for (let i = 0; i < 5000; i++) {
      setTimeout(() => {
        const num = 15;
        ctx.clearRect(locateArr[i][0], locateArr[i][1], num, num);
      }, 10)
    }
    setTimeout(() => {
      locateArr = [];
      canvas.style.zIndex = -1;
      ctx.reset();
    }, 1000);
  }, 1000);
});