//color
const YELLOW = "rgb(255, 222, 57)";
const GREEN = "rgb(52, 211, 53)";
const RED = "rgb(249, 1, 21)";

// variable
let START_TIME = 0;
let END_TIME = 0;
let resultArr = [];

//dom
const container = document.querySelector(".content");
const testScreen = document.querySelector(".content__test-screen");
const testScreenText = testScreen.querySelector("p");
const recordUl = document.querySelector(".content__record");
const recordLi = recordUl.querySelectorAll("li");
const recordBtn = document.querySelector(".content__submit img");

//패널,버튼 색깔 바꾸기
function setYellowPanel() {
  testScreen.style.backgroundColor = YELLOW;
  testScreenText.textContent = "Wait for Green";
  recordBtn.setAttribute("src", "./img/btn/btn_yellow.png");
}

function setGreenPanel() {
  testScreen.style.backgroundColor = GREEN;
  testScreenText.textContent = "Push!";
  recordBtn.setAttribute("src", "./img/btn/btn_green.png");
}

function setRedPanel() {
  testScreen.style.backgroundColor = RED;
  testScreenText.textContent = "초록색에 버튼을 눌러주세요! Retry!";
  recordBtn.setAttribute("src", "./img/btn/btn_red.png");
}

// 정답 노출 함수
function timer() {
  const randomTime = Math.floor(Math.random() * 5 + 3) * 1000;
  setTimeout(() => {
    setGreenPanel();
    START_TIME = new Date();
  }, randomTime);
}

// 시간 기록 함수
function getRecord() {
  END_TIME = new Date();
  const recordedTime = END_TIME - START_TIME;
  resultArr.push(recordedTime);
  const recordTimeList = document.createElement("li");
  recordTimeList.textContent = `Trial ${
    recordUl.childElementCount + 1
  }: ${recordedTime} ms`;
  recordUl.append(recordTimeList);
}

//결과 호출 함수
function isEnd() {
  if (recordUl.childElementCount === 5) {
    const avgResult =
      resultArr.reduce((acc, cur) => {
        return acc + cur;
      }) / resultArr.length;

    testScreen.style.display = "none";
    recordBtn.style.display = "none";
    const result = document.createElement("div");
    result.classList.add("result");
    result.innerHTML = `<p>당신의 평균 반응속도<br>${avgResult}</p>`;
    container.prepend(result);
  }
}

// 이벤트 리스너 함수
function touchEvent() {
  if (testScreen.style.backgroundColor === YELLOW) {
    // 예외처리
  }
  if (testScreen.style.backgroundColor === GREEN) {
    setYellowPanel();
    timer();
    getRecord();
    isEnd();
  }
}

//게임시작
function setGame() {
  setYellowPanel();
  timer();
  recordBtn.addEventListener("touchstart", touchEvent);
}

window.onload = () => {
  setGame();
};
