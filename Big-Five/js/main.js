// 아이폰인지 확인
let isIphone = false;
const user = navigator.userAgent;
if (user.includes("iPhone")) {
  isIphone = true;
}

//질문리스트
const qList = [
  //개방성
  "나는 아이디어를 떠올리는 일을 즐긴다.",
  "나는 문화관람을 좋아한다.",
  "나는 반복되는 일보다 새로운 일을 좋아한다.",
  "나는 여러 방면에 호기심이 많다.",
  "나는 새로운 방식을 잘 받아들인다.",
  "나는 철학적인 대화를 좋아한다.",

  //성실성
  "나는 일을 하기 전에 계획을 세운다.",
  "나는 일을 효율적으로 하는 사람이다.",
  "나는 일을 미루지 않고 바로 시작한다.",
  "나는 쉽게 산만해지지 않는다.",
  "나는 신중하다는 소리를 많이 듣는다.",
  "나는 무모한 의사결정을 하지 않는다.",

  //외향성
  "나는 여러 모임이 있다.",
  "나는 새로운 만남을 즐긴다.",
  "나는 내 생각을 말하는 것을 좋아한다. ",
  "나는 당당한 편이다.",
  "나는 새로운 일을 좋아한다.",
  "나는 안 좋은 일은 빨리 잊어버린다.",

  //친화성
  "나는 남을 잘 믿는다.",
  "나는 규칙을 어기지 않는 편이다.",
  "나는 다른 사람의 의견을 잘 수긍한다.",
  "나는 싸움을 피하는 편이다.",
  "나는 다른 사람의 감정변화를 잘 느낀다.",
  "나는 다른 사람에게 관심이 많다. ",

  //감정민감성
  "나는 실수했을 때 쉽게 당황해한다.",
  "나는 종종 기분이 가라앉는다.",
  "나는 충동적인 소비가 많은 편이다.",
  "나는 팔랑귀라는 소리를 듣는 편이다.",
  "나는 마감 일자가 다가오면 불안하다.",
  "나는 압박이 느껴지면 평정심을 유지하기 어렵다.",
];

const startBtn = document.querySelector(".start"); //시작버튼
const homeBtn = document.querySelector(".home"); //홈버튼
const previousBtn = document.querySelector(".previous"); //뒤로가기

const content = document.querySelector(".content"); //시작페이지
const qna = document.querySelector(".qna"); //질문페이지

const question = document.querySelectorAll(".question");

const result = document.querySelector(".result");
const count = document.querySelector(".question-count");
const endPoint = 30;

//질문
//애초에 있어야 하기 때문에 함수로 쓸 필요가 없음
for (let i = 0; i < qList.length; i++) {
  question[i].innerText = qList[i];
  // console.log(qList[i]);
}

const questionDivs = document.querySelectorAll(".test .question");

for (let i = 1; i <= qList.length; i++) {
  // radio 태그의 name 바꿔주기

  const question = document.querySelector(`#question${i}`);
  const radioWrap = question.querySelectorAll(".choice .radio-wrap");
  for (let j = 0; j < 5; j++) {
    radioWrap[j].querySelector("input").setAttribute("name", `question${i}`);
  }
  questionDivs[i - 1].innerText = qList[i - 1];
}

// BUTTON
startBtn.addEventListener("pointerdown", function () {
  startBtn.setAttribute("src", "./img/start-touch.png");
});

startBtn.addEventListener("pointerup", function () {
  startBtn.setAttribute("src", "./img/start.png");
});

homeBtn.addEventListener("pointerdown", function () {
  homeBtn.setAttribute("src", "./img/home-touch.png");
});

homeBtn.addEventListener("pointerup", function () {
  homeBtn.setAttribute("src", "./img/home.png");
});

previousBtn.addEventListener("pointerdown", function () {
  previousBtn.setAttribute("src", "./img/back-touch.png");
});

previousBtn.addEventListener("pointerup", function () {
  previousBtn.setAttribute("src", "./img/back.png");
});

// 햄버거 메뉴 활성화
const bar = document.querySelector(".bar");
const menu = document.querySelector(".menu");
bar.addEventListener("click", () => {
  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
});

// Canvas 활용 트랜지션
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const questionStatus = document.querySelector(".question-status");
const intro = document.querySelector(".intro");
const firstQuestion = document.querySelector(".intro+.test"); //첫번째 질문
const secondQuestion = document.querySelector(".intro+.test+.test"); //두번째 질문
const h2 = document.querySelector("header h2");
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

function drawTransitionEffect() {
  canvas.style.zIndex = 1;
  for (let i = 0; i < 1500; i++) {
    setTimeout(() => {
      const num = 30;
      x = Math.floor(Math.random() * (canvas.width / num)) * num;
      y = Math.floor(Math.random() * (canvas.height / num)) * num;
      locateArr.push([x, y]);
      ctx.fillRect(x, y, num, num);
    }, 10);
  }
}

function clearTransitionEffect() {
  for (let i = 0; i < 1500; i++) {
    setTimeout(() => {
      const num = 30;
      ctx.clearRect(locateArr[i][0], locateArr[i][1], num, num);
    }, 10);
  }
}

function resetCanvas() {
  setTimeout(() => {
    locateArr = [];
    canvas.style.zIndex = -1;
    ctx.reset();
  }, 500);
}

// 설명 넣어주기
const answer = document.querySelectorAll(".answer");
const explain = document.createElement("div");
const e1 = document.createElement("p");
const e2 = document.createElement("p");
e1.innerText = "매우 그렇지 않다";
e2.innerText = "매우 그렇다";

e1.style.display = "inline-block";
e2.style.display = "inline-block";

explain.style.display = "flex";
explain.style.justifyContent = "space-between";

explain.append(e1);
explain.append(e2);

answer.forEach((box) => {
  const clone = explain.cloneNode(true);
  box.appendChild(clone);
});

// 테스트 페이지와 인트로 페이지 간 이동
// 테스트 페이지와 인트로 페이지 간 이동
function goTestPageInIphone() {
  intro.classList.add("hide");
  h2.innerText = "Question 1";
  questionStatus.classList.remove("hide");
  homeBtn.classList.add("hide");
  previousBtn.classList.remove("hide");
  firstQuestion.classList.add("on");
  firstQuestion.classList.remove("hide");
  secondQuestion.classList.add("next");
  secondQuestion.classList.remove("hide");
}

function goTestPage() {
  intro.classList.add("hide");
  drawTransitionEffect();
  setTimeout(() => {
    clearTransitionEffect();
    h2.innerText = "Question 1";
    questionStatus.classList.remove("hide");
    homeBtn.classList.add("hide");
    previousBtn.classList.remove("hide");
    firstQuestion.classList.add("on");
    firstQuestion.classList.remove("hide");
    secondQuestion.classList.add("next");
    secondQuestion.classList.remove("hide");
    resetCanvas();
  }, 500);
}

function goIntroPageInIphone() {
  firstQuestion.classList.add("hide");
  h2.innerText = "Career Anchor";
  questionStatus.classList.add("hide");
  homeBtn.classList.remove("hide");
  previousBtn.classList.add("hide");
  firstQuestion.classList.remove("on");
  intro.classList.remove("hide");
  secondQuestion.classList.remove("next");
  secondQuestion.classList.add("hide");
}

function goIntroPage() {
  firstQuestion.classList.add("hide");
  drawTransitionEffect();
  setTimeout(() => {
    clearTransitionEffect();
    h2.innerText = "Career Anchor";
    questionStatus.classList.add("hide");
    homeBtn.classList.remove("hide");
    previousBtn.classList.add("hide");
    firstQuestion.classList.remove("on");
    intro.classList.remove("hide");
    secondQuestion.classList.remove("next");
    secondQuestion.classList.add("hide");
    resetCanvas();
  }, 500);
}

if (isIphone) {
  startBtn.addEventListener("mouseup", goTestPageInIphone);
} else {
  startBtn.addEventListener("mouseup", goTestPage);
}

//다음페이지
let answerArr = new Array(qList.length).fill(0);
let currentPage = 0;

//다음페이지로 넘어가기
function goNextPage(t) {
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

  //프로그레스 바 애니메이션
  questionStatus.querySelector(".progress-bar").value++;
  currentPage = questionStatus.querySelector(".progress-bar").value;
  document.querySelector(".current-percentage").style.width = `${
    3.4 * currentPage
  }%`;
  questionStatus.querySelector(
    ".question-count"
  ).innerText = `${currentPage}/${qList.length}`;

  // 배열에 사용자 입력 값 받아오기
  answerArr[currentPage - 1] = Number(t.value);

  // 마지막 페이지일때
  if (currentPage === 30) {
    getResult();
    return;
  }

  // 제목 변경
  h2.innerText = `Question ${currentPage + 1}`;
}

//이전페이지
function goPrevPage() {
  const prevPrev = document.querySelector(`.test:nth-child(${currentPage})`);
  const prev = document.querySelector(".prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");
  console.log(currentPage);
  console.log(prevPrev);
  if (currentPage === 0) {
    if (isIphone) {
      goIntroPageInIphone();
    } else {
      goIntroPage();
    }
    return;
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

  if (currentPage === 30) {
    result.classList.add("hide");
    questionStatus.classList.remove("hide");
  }

  //프로그레스 바 애니메이션
  questionStatus.querySelector(".progress-bar").value--;
  currentPage = questionStatus.querySelector(".progress-bar").value;
  document.querySelector(".current-percentage").style.width = `${
    3.4 * currentPage
  }%`;
  h2.innerText = `Question ${currentPage + 1}`;
  questionStatus.querySelector(
    ".question-count"
  ).innerText = `${currentPage}/${qList.length}`;
}

previousBtn.addEventListener("click", goPrevPage);

//검사 결과 페이지
function getResult() {
  let eachScore = new Array(5);
  for (let i = 0; i < eachScore.length; i++) {
    eachScore[i] = new Array(3).fill(0);
  }
  const summary = document.querySelector(".result .summary");
  // result.classList.remove("hide");
  // questionStatus.classList.add("hide");

  const prev = document.querySelector(".prev");

  //이중for문
  //각 성향의 점수를 더해줌
  let ansIdx = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 2; k++) {
        eachScore[i][j] += answerArr[ansIdx++];
      }
    }
  }

  //각 유형의 성향 점수
  let characterArr = [
    ["감수성", "모험성", "호기심"],
    ["계획성", "자제력", "신중함"],
    ["사교성", "리더십", "활동성"],
    ["신뢰성", "협조성", "공감력"],
    ["자의식", "충동성", "심약함"],
  ];

  //각 유형의 점수로 나타냄
  let resultArr = new Array(5).fill(0);

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      resultArr[i] += eachScore[i][j];
    }
  }

  // 각 유형의 합계 그래프 만들기
  for (let i = 0; i < resultArr.length; i++) {
    const typeGraph = document.querySelector(
      `.graph .type:nth-child(${i + 1}) .type-graph`
    );
    setTimeout(() => {
      typeGraph.style.width = `${resultArr[i] * (100 / 30) * (78 / 100)}%`;

      setTimeout(() => {
        typeGraph.innerText = `${Number(
          (resultArr[i] * (100 / 30)).toFixed(1)
        )}점`;
      }, 2000);
    }, 1000);

    for (let j = 0; j < eachScore[0].length; j++) {
      const character = document.querySelector(
        `.graph .type:nth-child(${i + 1}) .type-character`
      );
      let text = document.createElement("div");
      text.style.textAlign = "center";
      // text.style.backgroundColor = "pink";
      text.innerText = `${characterArr[i][j]}\n${eachScore[i][j] * 10}점 `;
      character.appendChild(text);
    }
  }
  // SUMMARY 내용 입력
  const userType = resultArr.indexOf(Math.max(...resultArr));
  if (userType === 0) {
    summary.innerText = `당신은 개방성 성향이 높아요!`;
  } else if (userType === 1) {
    summary.innerText = `당신은 성실성 성향이 높아요!`;
  } else if (userType === 2) {
    summary.innerText = `당신은 외향성 성향이 높아요!`;
  } else if (userType === 3) {
    summary.innerText = `당신은 친화성 성향이 높아요!`;
  } else if (userType === 4) {
    summary.innerText = `당신은 감정민감성 성향이 높아요!`;
  }
  console.log(userType, resultArr);
  prev.classList.add("hide");
  prev.classList.remove("prev");
  questionStatus.classList.add("hide");
  if (isIphone) {
    h2.innerText = "Result";
    result.classList.remove("hide");
    homeBtn.classList.remove("hide");
    previousBtn.classList.add("hide");
  } else {
    drawTransitionEffect();
    setTimeout(() => {
      clearTransitionEffect();
      h2.innerText = "Result";
      result.classList.remove("hide");
      homeBtn.classList.remove("hide");
      previousBtn.classList.add("hide");
      resetCanvas();
    }, 500);
  }
}

// 각 유형 설명창 열어주는 함수
const moreInfo = document.querySelector(".more-info");

function getInfoOfType() {
  moreInfo.classList.remove("hide");
  result.classList.add("hide");
}

function closeInfoOfType() {
  moreInfo.classList.add("hide");
  result.classList.remove("hide");
}

// 테스트 다시 시작하는 함수
function restartTest() {
  location.reload();
}
