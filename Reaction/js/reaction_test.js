const testScreen = document.querySelector(".content__test-screen");
const testScreenText = testScreen.querySelector("p");
const recordUl = document.querySelector(".content__record");
const recordBtn = document.querySelector(".content__submit img");

function setYellowPanel() {
  testScreen.style.backgroundColor = "#ffde39";
  testScreenText.textContent = "Wait for Green";
}

function setGreenPanel() {
  testScreen.style.backgroundColor = "#34d335";
  testScreenText.textContent = "Push!";
}

function startGame() {
  setYellowPanel();
  // function yellowTouchEvent() {
  //   recordBtn.setAttribute("src", "./img/btn/btn_red.png");
  //   testScreen.style.backgroundColor = "#f90115";
  //   testScreenText.textContent = "초록색에 선택하세요!";
  //   recordUl.querySelector("li").remove();
  // }
  // if ((testScreen.style.backgroundColor = "#ffde39")) {
  //   return recordBtn.addEventListener("touchstart", yellowTouchEvent);
  // }
  const randomTime = Math.floor(Math.random() * 5 + 3) * 1000;
  recordBtn.setAttribute("src", "./img/btn/btn_yellow.png");

  setTimeout(function () {
    const startTime = new Date();
    recordBtn.setAttribute("src", "./img/btn/btn_green.png");
    setGreenPanel();

    function greenTouchEvent() {
      const endTime = new Date();
      const recordedTime = endTime - startTime + "ms";
      const recordTimeList = document.createElement("li");
      recordTimeList.textContent = `Trial ${
        recordUl.childElementCount + 1
      }: ${recordedTime}`;
      recordUl.append(recordTimeList);
      setYellowPanel();

      recordBtn.removeEventListener("touchstart", greenTouchEvent);

      recordUl.childElementCount < 5
        ? startGame()
        : (testScreenText.textContent = "Done") &&
          (testScreen.style.backgroundColor = "#34d335");
    }

    if ((testScreen.style.backgroundColor = "#34d335")) {
      recordBtn.addEventListener("touchstart", greenTouchEvent);
    }
  }, randomTime);

  return;
}

window.onload = () => {
  startGame();
};
