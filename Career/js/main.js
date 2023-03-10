// 아이폰인지 확인
let isIphone = false;
const user = navigator.userAgent;
if (user.includes("iPhone") || user.includes("iPad")) {
  isIphone = true;
}

// 질문 리스트
const questions = [
  "내가 리더가 되는 것을 즐긴다.",
  "특정 분야를 깊게 탐구하는 것을 좋아한다.",
  "조직에 룰이 있다면 불만없이 따르는 편이다.",
  "나는 창의적이다.",
  "어딘가에 종속되어 있고 싶지 않다.",
  "남을 돕는 것에서 보람을 느낀다.",
  "쉬운 길보다는 어려운 길이 더 재미있다.",
  "야근수당보다 칼퇴를 원한다.",
  "워라밸보다 회사 내 입지가 더 중요하다.",
  "회사 내 정치적인 문제는 신경쓰고 싶지 않다.",
  "60살까지 월급을 받으며 일하고 싶다.",
  "모험을 즐기는 편이다.",
  "집에서 일하는 것이 좋다.",
  "서비스업이 나와 잘 맞는다고 느낀다.",
  "승부욕이 많은 편이다.",
  "취미가 많은 편이다.",
  "사람을 다루는 능력이 좋은 편이다.",
  "특정 분야에 재능이 있다고 느낀다.",
  "이직에 대한 생각이 별로 없다.",
  "공상을 자주 하는 편이다.",
  "일하는 시간을 내 마음대로 정하고 싶다.",
  "나에게는 돈보다 중요한 가치들이 많다.",
  "남들과 경쟁하는 것이 재미있다.",
  "일은 적게 할수록 좋다.",
  "돈보다 중요한 것은 권력이다.",
  "여러 가지 일을 하는 것보다 내 분야의 일만 하는 것이 좋다.",
  "계약직으로 입사하는 것은 불안하다.",
  "돈을 벌기 위한 고민을 항상 하고있다.",
  "가끔은 돈을 벌지 않고 쉬고 싶다.",
  "다른 사람의 아픔에 공감하는 편이다.",
  "스포츠를 좋아한다.",
  "일보다 가정이 중요하다.",
  "일을 할 때, 나무보단 숲을 보는 편이다.",
  "여러 분야의 업무를 경험하는 것은 피곤한 일이다.",
  "먼 지역으로 발령나는 것은 피하고 싶다.",
  "권력, 자아실현, 명예, 워라밸, 돈 중에 가장 중요한 가치는 돈이다.",
  "남이 시키는 일보다 내 스스로 하는 일이 더 능률이 좋다.",
  "사람을 상대하는 것이 힘들지 않다.",
  "한번 시작한 일은 끝을 봐야한다.",
  "돈보다 복지가 중요하다.",
];
const questionDivs = document.querySelectorAll(".test .question");

// 질문지 작성 및 HTML 소스 입력
for (let i = 1; i <= questions.length; i++) {
  // radio 태그의 name 바꿔주기
  const question = document.querySelector(`#question${i}`);
  const radioWrap = question.querySelectorAll(".choice .radio-wrap");
  for (let j = 0; j < 5; j++) {
    radioWrap[j].querySelector("input").setAttribute("name", `question${i}`);
  }

  // 질문 내용 입력
  questionDivs[i - 1].innerText = questions[i - 1];
}

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
const firstQuestion = document.querySelector(".intro+.test");
const secondQuestion = document.querySelector(".intro+.test+.test");
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

// 다음 페이지로 넘기기, 사용자 입력 값 받아오기
let answerArr = new Array(questions.lenth).fill(0);
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

  // 프로그레스 바 애니메이션
  questionStatus.querySelector(".progress-bar").value++;
  currentPage = questionStatus.querySelector(".progress-bar").value;
  document.querySelector(".current-percentage").style.width = `${
    2.5 * currentPage
  }%`;
  questionStatus.querySelector(
    ".question-count"
  ).innerText = `${currentPage}/${questions.length}`;

  // 배열에 사용자 입력 값 받아오기
  answerArr[currentPage - 1] = Number(t.value);

  // 마지막 페이지일때
  if (currentPage === 40) {
    getResult();
    return;
  }

  // 제목 변경
  h2.innerText = `Question ${currentPage + 1}`;
}

// 이전 페이지로 넘기기
function goPrevPage() {
  const prevPrev = document.querySelector(`.test:nth-child(${currentPage})`);
  const prev = document.querySelector(".prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");

  // 첫번째 질문지일때
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

  questionStatus.querySelector(".progress-bar").value--;
  currentPage = questionStatus.querySelector(".progress-bar").value;
  document.querySelector(".current-percentage").style.width = `${
    2.5 * currentPage
  }%`;
  h2.innerText = `Question ${currentPage + 1}`;
  questionStatus.querySelector(
    ".question-count"
  ).innerText = `${currentPage}/${questions.length}`;
}

previousBtn.addEventListener("click", goPrevPage);

// 검사 결과 만들기
const result = document.querySelector(".result");
let eachScore = new Array(8).fill(0);
let userType = 0;

function getResult() {
  const summary = document.querySelector(".result .summary");

  // 점수 할당
  for (let i = 0; i < answerArr.length; i++) {
    const index = i % 8;
    eachScore[index] += answerArr[i] * 4;
  }

  // 보너스 점수, 감점
  eachScore[0] += answerArr[37] * 2 - answerArr[9] * 2;
  eachScore[1] += answerArr[38] * 1 - answerArr[35] * 3;
  eachScore[1] = eachScore[1] * (100 / 90);
  eachScore[2] += answerArr[7] * 1 - answerArr[11] * 3;
  eachScore[2] = eachScore[2] * (100 / 90);
  eachScore[3] += answerArr[4] * 2 - answerArr[10] * 2;
  eachScore[4] += answerArr[25] * 2 - answerArr[18] * 2;
  eachScore[5] += answerArr[16] * 2 - answerArr[23] * 2;
  eachScore[6] += answerArr[11] * 3 - answerArr[28] * 1;
  eachScore[6] = eachScore[6] * (100 / 110);
  eachScore[7] += answerArr[21] * 2 - answerArr[8] * 2;

  // 소수점 자르기
  for (let i = 0; i < eachScore.length; i++) {
    eachScore[i] = Number(eachScore[i].toFixed(1));
  }

  // SUMMARY 내용 입력
  userType = eachScore.indexOf(Math.max(...eachScore));
  if (userType === 0) {
    summary.innerText = `당신은 "관리자 지향형" 입니다.`;
  } else if (userType === 1) {
    summary.innerText = `당신은 "전문능력 지향형" 입니다.`;
  } else if (userType === 2) {
    summary.innerText = `당신은 "안전성 지향형" 입니다.`;
  } else if (userType === 3) {
    summary.innerText = `당신은 "사업가적 창의성 지향형" 입니다.`;
  } else if (userType === 4) {
    summary.innerText = `당신은 "자율성 지향형" 입니다.`;
  } else if (userType === 5) {
    summary.innerText = `당신은 "봉사 지향형" 입니다.`;
  } else if (userType === 6) {
    summary.innerText = `당신은 "순수한 도전 지향형" 입니다.`;
  } else if (userType === 7) {
    summary.innerText = `당신은 "라이프스타일 지향형" 입니다.`;
  }

  // 설명 입력
  const explain = document.querySelector(".result .explain");
  explain.querySelector("p").innerText = moreInfo
    .querySelector(`.explain${userType + 1}`)
    .innerText.trim()
    .replaceAll("\n", "")
    .split(" ")
    .filter((x) => x != "")
    .join(" ");
  explain.querySelector("div").innerText = moreInfo.querySelector(
    `.explain${userType + 1} + div`
  ).innerText;

  // 그래프 만들기
  for (let i = 0; i < eachScore.length; i++) {
    const typeGraph = document.querySelector(
      `.graph .type:nth-child(${i + 1}) .type-graph`
    );
    setTimeout(() => {
      typeGraph.style.width = `${eachScore[i] * (78 / 100)}%`;
      setTimeout(() => {
        typeGraph.innerText = `${eachScore[i]}점`;
      }, 2000);
    }, 1000);
  }

  // 트랜지션 효과
  const prev = document.querySelector(".prev");
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

// 카카오톡 공유 버튼 클릭시 userType을 받아 kakaoShare 함수 실행
const kakaoShareBtn = document.querySelector(".kakao-share");
kakaoShareBtn.addEventListener("click", () => kakaoShare(userType));