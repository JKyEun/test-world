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
const questionStatus = document.querySelector(".question-status");
const intro = document.querySelector(".intro");
const firstQuestion = document.querySelector(".intro+.hide");
const secondQuestion = document.querySelector(".intro+.hide+.hide");
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

startBtn.addEventListener("mouseup", () => {
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
    questionStatus.classList.remove("hide");
    homeBtn.classList.add("hide");
    previousBtn.classList.remove("hide");
    firstQuestion.classList.add("on");
    firstQuestion.classList.remove("hide");
    secondQuestion.classList.add("next");
    secondQuestion.classList.remove("hide");
    setTimeout(() => {
      locateArr = [];
      canvas.style.zIndex = -1;
      ctx.reset();
    }, 1000);
  }, 1000);
});

// 다음 페이지로 넘기기, 사용자 입력 값 받아오기
let answerArr = new Array(40);
let currentPage = 0;

function goNextPage(t) {
  const prev = document.querySelector(".prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");
  const nextNext = document.querySelector(".next+.hide");

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

  questionStatus.querySelector(".progress-bar").value++;
  currentPage = questionStatus.querySelector(".progress-bar").value;
  answerArr[currentPage] = t.value;
  questionStatus.querySelector(".question-count").innerText = `${currentPage}/40`;
}

// 이전 페이지로 넘기기
function goPrevPage() {
  const prevPrev = document.querySelector(`.test:nth-child(${currentPage})`)
  const prev = document.querySelector(".prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");

  if (currentPage === 0) {
    console.log("d");
  }

  if (prevPrev !== null) {
    prevPrev.classList.add("prev");
    prevPrev.classList.remove("hide");
  }

  if (prev !== null) {
    prev.classList.add("on");
    prev.classList.remove("prev");
  }

  if (on !== null) {
    on.classList.add("next");
    on.classList.remove("on");
  }

  if (next !== null) {
    next.classList.add("hide");
    next.classList.remove("next");
  }

  questionStatus.querySelector(".progress-bar").value--;
  currentPage = questionStatus.querySelector(".progress-bar").value;
  questionStatus.querySelector(".question-count").innerText = `${currentPage}/40`;
}

previousBtn.addEventListener("click", goPrevPage);