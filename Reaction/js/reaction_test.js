const YELLOW = "rgb(255, 222, 57)";
//color
const GREEN = "rgb(52, 211, 53)";
const RED = "rgb(249, 1, 21)";

// variable
let START_TIME = 0;
let END_TIME = 0;
let resultArr = [];
let timeOut = null;

//dom
const container = document.querySelector(".content");
const resultDiv = document.querySelector(".result");
const testScreen = document.querySelector(".content__test-screen");
const testScreenText = testScreen.querySelector("p");
const recordUl = document.querySelector(".content__record");
const recordLi = recordUl.querySelectorAll("li");
const recordBtn = document.querySelector(".content__submit img");
const share = document.querySelector(".share");
const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".menu");

//버거 메뉴 컨트롤
burger.addEventListener("click", function () {
  if (burgerMenu.classList.contains("hide")) {
    burgerMenu.classList.remove("hide");
  } else {
    burgerMenu.classList.add("hide");
  }
});

//사용자 디바이스 확인
function isMobile() {
  const user = navigator.userAgent;
  let CHECK = false;

  if (
    user.indexOf("iPhone") > -1 ||
    user.indexOf("Android") > -1 ||
    user.indexOf("iPad") > -1
  ) {
    CHECK = true;
  }

  return CHECK;
}

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
  testScreenText.innerHTML = `초록색에 버튼을 눌러주세요 <br> 버튼을 눌러 다시 시작하세요!`;
  recordBtn.setAttribute("src", "./img/btn/btn_red.png");
}

// 정답 노출 함수
function timer() {
  const randomTime = Math.floor(Math.random() * 5 + 3) * 1000;
  timeOut = setTimeout(() => {
    recordBtn.classList.add("animate__animated", "animate__bounceIn");
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
  recordTimeList.classList.add("content__record__list");
  recordTimeList.textContent = `Trial ${
    recordUl.childElementCount + 1
  }: ${recordedTime} ms`;
  recordTimeList.classList.add("animate__animated", "animate__bounceInLeft");
  recordUl.append(recordTimeList);
}

//결과 호출 함수
function isEnd() {
  if (recordUl.childElementCount === 5) {
    resultDiv.classList.remove("hide");
    const avgResult =
      resultArr.reduce((acc, cur) => {
        return acc + cur;
      }) / resultArr.length;
    const maxResult = Math.min(...resultArr);
    testScreen.style.display = "none";
    recordBtn.style.display = "none";
    printAnalyzeResult(avgResult);
    printMaxResult(maxResult);
    printAvgSpeed(avgResult);
    share.classList.remove("hide");
  }
}

//평균 반응속도 출력 함수 (count up 애니메이션)
function printAvgSpeed(avgResult) {
  const result = document.createElement("p");
  result.classList.add("result--avg");

  let now = avgResult;
  const handle = setInterval(() => {
    if (avgResult - now < 150) {
      result.style.color = "red";
    }
    if (avgResult - now >= 150 && avgResult - now < 200) {
      result.style.color = "gold";
    }
    if (avgResult - now >= 200 && avgResult - now < 273) {
      result.style.color = "purple";
    }
    if (avgResult - now >= 273 && avgResult - now < 300) {
      result.style.color = "green";
    }
    if (avgResult - now >= 300 && avgResult - now < 370) {
      result.style.color = "white";
    }
    if (avgResult - now >= 370 && avgResult - now < 400) {
      result.style.color = "pink";
    }
    if (avgResult - now >= 400) {
      result.style.color = "blue";
    }

    result.innerHTML = `당신의 평균 반응속도<br>
    ${Math.round(avgResult - now)} ms`;

    if (now < 1) {
      clearInterval(handle);
    }
    const step = now / 10;
    now -= step;
  }, 50);
  resultDiv.prepend(result);
}

//최고 속도 출력 함수
function printMaxResult(maxResult) {
  const maxResultText = document.createElement("p");
  maxResultText.classList.add("result--max");
  maxResultText.textContent = `최고 속도: ${maxResult} ms`;
  resultDiv.prepend(maxResultText);
}

//결과 분석 함수
function printAnalyzeResult(avgResult) {
  let content = " ";
  const resultAnalyze = document.createElement("p");
  resultAnalyze.classList.add("result--analyze");
  resultDiv.prepend(resultAnalyze);

  if (avgResult < 150) {
    content = "손에 꼽히는 반응속도네요! 당신은 반응속도 랭커!";
  }

  if (avgResult >= 150 && avgResult < 200) {
    content = "수준급의 반응속도입니다! 혹시 프로게이머?";
  }

  if (avgResult >= 200 && avgResult < 273) {
    content = "평균보다 좋은 반응속도를 가지셨군요!";
  }

  if (avgResult >= 273 && avgResult < 300) {
    content = "평균정도의 반응속도 입니다!";
  }

  if (avgResult >= 300 && avgResult < 370) {
    content = "평균보다 조금 느리시네요! 조금더 힘내봅시다!";
  }

  if (avgResult >= 370 && avgResult < 400) {
    content = "아쉬운 속도에요 ㅠㅠ 한번 더 시도해보세요!";
  }

  if (avgResult >= 400) {
    content = "세월이 야속하네요 ㅠㅠ 더 연습해볼까요?";
  }

  //typing 효과
  let i = 0;
  function typingAnalyze() {
    if (i < content.length) {
      let text = content.charAt(i);
      resultAnalyze.innerHTML += text;
      i++;
    }
    if (content.length - 1 === i) {
      clearInterval(typingAnalyze);
    }
  }

  setInterval(typingAnalyze, 100);
}

//모든 기록 삭제 함수
function clearResult() {
  recordUl.innerHTML = "";
  resultArr = [];
}

// 이벤트 리스너 함수
function touchEvent() {
  recordBtn.classList.remove("animate__animated", "animate__bounceIn");
  if (testScreen.style.backgroundColor === YELLOW) {
    setRedPanel();
    clearTimeout(timeOut);
    return;
  }
  if (testScreen.style.backgroundColor === GREEN) {
    setYellowPanel();
    timer();
    getRecord();
    isEnd();
    return;
  }
  if (testScreen.style.backgroundColor === RED) {
    clearResult();
    setYellowPanel();
    timer();
    return;
  }
}

//게임시작
function setGame() {
  setYellowPanel();
  timer();
  if (isMobile()) recordBtn.addEventListener("touchstart", touchEvent);
  if (!isMobile()) recordBtn.addEventListener("mousedown", touchEvent);
}

window.onload = () => {
  setGame();
};
