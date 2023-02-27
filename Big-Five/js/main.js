const startbtn = document.querySelector(".start");
const homebtn = document.querySelector(".home");
const backbtn = document.querySelector(".back");
const main = document.querySelector(".content");
const qna = document.querySelector(".qna");
const aBox = document.querySelector(".aBox");

const qList = [
  {
    q: "나는 나의 생각을 말할 수 있다",
  },
  {
    q: "나는 하루가 즐겁다",
  },
];

// BUTTON
startbtn.addEventListener("pointerdown", function () {
  startbtn.setAttribute("src", "./img/start-touch.png");
});

startbtn.addEventListener("pointerup", function () {
  startbtn.setAttribute("src", "./img/start.png");
});

homebtn.addEventListener("pointerdown", function () {
  homebtn.setAttribute("src", "./img/home-touch.png");
});

homebtn.addEventListener("pointerup", function () {
  homebtn.setAttribute("src", "./img/home.png");
});

backbtn.addEventListener("pointerdown", function () {
  backbtn.setAttribute("src", "./img/back-touch.png");
});

backbtn.addEventListener("pointerup", function () {
  backbtn.setAttribute("src", "./img/back.png");
});

// 시작하기 버튼 누르면 질문페이지 나옴
function begin() {
  main.style.display = "none";
  qna.style.display = "block";
  backbtn.classList.remove("hide");
  homebtn.classList.add("hide");
  qna.classList.remove("hide");
  qna.classList.add("on");
}

//다음페이지
let answerArr = new Array(60);
let currentPage = 0;

function goNext(t) {
  console.log("asdf");
  const prev = document.querySelector(".prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");
  const nextQna = document.querySelector(".next+.hide");

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
  if (nextQna !== null) {
    nextQna.classList.add("next");
    nextQna.classList.remove("hide");
  }
}

//이전페이지

function goPrev(t) {
  const prevQna = document.querySelector(`.qna:nth-child(${currentPage})`);
  const prev = document.querySelector("prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");

  if (currentPage === 0) {
    console.log("d");
  }

  if (prevQna !== null) {
    prevQna.classList.add("prev");
    prevQna.classList.remove("hide");
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
}

backbtn.addEventListener("click", goPrev);

// const next = document.querySelector(".next");
// aBox.addEventListener("click", function () {
//   qna.classList.add("next");
//   qna.classList.add("hide");
// });

// const prev = document.querySelector(".prev");
