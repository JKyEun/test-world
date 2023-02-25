// 버튼 활성화 이벤트
const startBtn = document.querySelector(".start");
const homeBtn = document.querySelector(".home");
const previousBtn = document.querySelector(".previous");

startBtn.addEventListener("mousedown", () => {
  startBtn.src = "./img/startBtn-active.png";
});
startBtn.addEventListener("touchstart", () => {
  startBtn.src = "./img/startBtn-active.png";
});
startBtn.addEventListener("mouseup", () => {
  startBtn.src = "./img/startBtn.png";
});
startBtn.addEventListener("touchend", () => {
  startBtn.src = "./img/startBtn.png";
});

homeBtn.addEventListener("mousedown", () => {
  homeBtn.src = "./img/homeBtn-active.png";
});
homeBtn.addEventListener("touchstart", () => {
  homeBtn.src = "./img/homeBtn-active.png";
});
homeBtn.addEventListener("mouseup", () => {
  homeBtn.src = "./img/homeBtn.png";
});
homeBtn.addEventListener("touchend", () => {
  homeBtn.src = "./img/homeBtn.png";
});

previousBtn.addEventListener("mousedown", () => {
  previousBtn.src = "./img/previousBtn-active.png";
});
previousBtn.addEventListener("touchstart", () => {
  previousBtn.src = "./img/previousBtn-active.png";
});
previousBtn.addEventListener("mouseup", () => {
  previousBtn.src = "./img/previousBtn.png";
});
previousBtn.addEventListener("touchend", () => {
  previousBtn.src = "./img/previousBtn.png";
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

function draw() {
  const num = 15;
  x = Math.floor(Math.random() * (canvas.width / num)) * num;
  y = Math.floor(Math.random() * (canvas.height / num)) * num;
  locateArr.push([x, y]);
  ctx.fillRect(x, y, num, num);
}

function startTest() {
  homeBtn.classList.add("hide");
  previousBtn.classList.remove("hide");
}

startBtn.addEventListener("mouseup", () => {
  const firstQuestion = document.querySelector(".intro+.hide");
  intro.classList.add("hide");
  canvas.style.zIndex = 1;
  for (let i = 0; i < 5000; i++) {
    setTimeout(draw, 10);
  }
  setTimeout(() => {
    for (let i = 0; i < 5000; i++) {
      setTimeout(() => {
        const num = 15;
        ctx.clearRect(locateArr[i][0], locateArr[i][1], num, num);
      }, 10);
    }
    firstQuestion.classList.add("on");
    firstQuestion.classList.remove("hide");
    setTimeout(() => {
      locateArr = [];
      canvas.style.zIndex = -1;
      ctx.reset();
    }, 1000);
  }, 1000);
});

// 다음 페이지로 넘기기
const intro = document.querySelector(".intro");

function goNextPage() {
  const prev = document.querySelector(".prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");
  const nextNext = document.querySelector(".next+.hide");

  if (previousBtn.classList.contains("hide")) {
    homeBtn.classList.add("hide");
    previousBtn.classList.remove("hide");
  }

  if (prev !== null) {
    prev.classList.add("hide");
    prev.classList.remove("prev");
  }

  if (on !== null) {
    on.classList.add("prev");
    on.classList.remove("on");
  }

  if (next !== null) {
    next.classList.add("on");
    next.classList.remove("next");
  }
  if (nextNext !== null) {
    nextNext.classList.add("next");
    nextNext.classList.remove("hide");
  }
}
