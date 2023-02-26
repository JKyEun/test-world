const testScreen = document.querySelector(".content__test-screen");
const recordUl = document.querySelector(".content__record");

window.onload = () => {
  startGame();
};
function startGame() {
  const randomTime = Math.floor(Math.random() * 5 + 3) * 1000;
  testScreen.style.backgroundColor = "greenyellow";
  testScreen.textContent = "Wait for Blue";
  setTimeout(() => {
    testScreen.style.backgroundColor = "royalblue";
    testScreen.textContent = "Click!";
    const startTime = new Date();
    testScreen.addEventListener("touchstart", function () {
      const endTime = new Date();
      const recordedTime = endTime - startTime + "ms";
      const recordTimeList = document.createElement("i");
      recordTimeList.textContent = recordedTime;
      recordUl.append(recordTimeList);
    });
  }, randomTime);
}
