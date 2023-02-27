const testScreen = document.querySelector(".content__test-screen");
const testScreenText = testScreen.querySelector("p");
const recordUl = document.querySelector(".content__record");

function setGreenPanel() {
  testScreen.style.backgroundColor = "greenyellow";
  testScreenText.textContent = "Wait for Blue";
}

function setBluePanel() {
  testScreen.style.backgroundColor = "royalblue";
  testScreenText.textContent = "Click!";
}

function startGame() {
  setGreenPanel();
  const randomTime = Math.floor(Math.random() * 5 + 3) * 1000;

  setTimeout(function () {
    const startTime = new Date();
    setBluePanel();
    function touchEvent() {
      const endTime = new Date();
      const recordedTime = endTime - startTime + "ms";
      const recordTimeList = document.createElement("i");
      recordTimeList.textContent = recordedTime;
      recordUl.append(recordTimeList);
      setGreenPanel();
      testScreen.removeEventListener("touchstart", touchEvent);
      recordUl.childElementCount < 5
        ? startGame()
        : (testScreenText.textContent = "Done");
    }

    testScreen.addEventListener("touchstart", touchEvent);
  }, randomTime);
  return;
}

window.onload = () => {
  startGame();
};
