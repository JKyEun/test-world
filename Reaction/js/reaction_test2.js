//color
const YELLOW = "#ffde39";
const GREEN = "#34d335";
const RED = "#f90115";

//dom
const testScreen = document.querySelector(".content__test-screen");
const testScreenText = testScreen.querySelector("p");
const recordUl = document.querySelector(".content__record");
const recordLi = recordUl.querySelectorAll("li");
const recordBtn = document.querySelector(".content__submit img");

// variable
let startTime = 0;

//패널,버튼 색깔 바꾸기
function setYellowPanel() {
  testScreen.style.backgroundColor = YELLOW;

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
  clearTimeout(timeOut);
  setGame();
}

//패널 색에 따른 터치 이벤트

function greenTouchEvent() {
  recordBtn.removeEventListener("touchstart", greenTouchEvent);

  recordUl.childElementCount < 5
    ? setGame()
    : setGreenPanel() && (testScreenText.textContent = "Done"); //결과창 함수로 바꿀것
}

function touchEvent() {
  timer();
}

function getRecord() {
  const endTime = new Date();
  const recordedTime = endTime - startTime + "ms";
  const recordTimeList = document.createElement("li");
  recordTimeList.textContent = `Trial ${
    recordUl.childElementCount + 1
  }: ${recordedTime}`;
  recordUl.append(recordTimeList);
}

function timer() {
  //   clearTimeout(timeOut);
  testScreenText.textContent = "Wait for Green";
  const randomTime = Math.floor(Math.random() * 5 + 3) * 1000;
  let timeOut = setTimeout(() => {
    setGreenPanel();
    startTime = new Date();
  }, randomTime);
}

//게임시작
function setGame() {
  testScreenText.textContent = "Touch to Start";
  setYellowPanel();
  recordBtn.addEventListener("touchstart", touchEvent);
}

window.onload = () => {
  setGame();
};
