const startbtn = document.querySelector(".start"); //시작버튼
const homebtn = document.querySelector(".home"); //홈버튼
const backbtn = document.querySelector(".back"); //뒤로가기
const content = document.querySelector(".content"); //시작페이지
const qna = document.querySelector(".qna"); //질문페이지
const firstQuestion = document.querySelector("#question1"); //첫번째 질문
const secondQuestion = document.querySelector(".qna+.hide"); //두번째 질문
const statusBar = document.querySelector(".status");
const qBox = document.querySelectorAll(".qBox");
const question = document.querySelector("h2");

const endPoint = 60;
const qList = [
  "나는 상상력이 풍부하다.",
  "나는 아이디어를 떠올리는 일을 즐긴다.",
  "나는 몽상에 빠지는 것을 즐긴다.",
  "나는 생각에 잠기는 것을 좋아한다.",
  "나는 예술적 경험을 중요하게 생가한다.",
];

// BUTTON
startbtn.addEventListener("pointerdown", function () {
  startbtn.setAttribute("src", "../img/start-touch.png");
});

startbtn.addEventListener("pointerup", function () {
  startbtn.setAttribute("src", "../img/start.png");
});

homebtn.addEventListener("pointerdown", function () {
  homebtn.setAttribute("src", "../img/home-touch.png");
});

homebtn.addEventListener("pointerup", function () {
  homebtn.setAttribute("src", "../img/home.png");
});

backbtn.addEventListener("pointerdown", function () {
  backbtn.setAttribute("src", "../img/back-touch.png");
});

backbtn.addEventListener("pointerup", function () {
  backbtn.setAttribute("src", "../img/back.png");
});

//START눌렀을 때
startbtn.addEventListener("click", function () {
  homebtn.classList.add("hide"); //집모양 숨기고
  backbtn.classList.remove("hide"); //뒤로가기모양 나타나기
  content.classList.add("hide"); // 시작하는 페이지 숨기고
  qna.classList.remove("hide"); // 질문페이지 활성화
  statusBar.classList.remove("hide");
  firstQuestion.classList.add("on");
  firstQuestion.classList.remove("hide");
  secondQuestion.classList.add("next");
  secondQuestion.classList.remove("hide");
});

//질문
for (let i = 0; i < qList.length; i++) {
  qBox[i].innerText = qList[i];
  console.log(qList[i]);
}

//다음페이지
let answerArr = new Array(60);
let currentPage = 1;

function goNext(t) {
  console.log("asdf");
  const prev = document.querySelector(".prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");
  const nextQna = document.querySelector(".next+.hide");

  console.log(t);

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
  currentPage++;
  // let status = document.querySelector(".statusBar");
  // status.getElementsByClassName.width = (100 / endPoint) * (qIdx + 1) + "%";
}

//이전페이지
function goPrev() {
  const prevQna = document.querySelector(`.qna:nth-child(${currentPage - 2})`);
  const prev = document.querySelector(".prev");
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
  currentPage--;
}

backbtn.addEventListener("click", goPrev);
