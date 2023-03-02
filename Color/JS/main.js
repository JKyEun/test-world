// 아이폰인지 확인
let isIphone = false;
const user = navigator.userAgent;
if (user.includes("iPhone")) {
  isIphone = true;
}

// 버튼
const playBtn = document.querySelector(".play");
const homeBtn = document.querySelector(".home");

// PlayBtn 활성화
playBtn.addEventListener("mousedown", () => {
  playBtn.src = "./img/play-act.png";
});

playBtn.addEventListener("touchstart", () => {
  playBtn.src = "./img/play-act.png";
});

playBtn.addEventListener("mouseup", () => {
  playBtn.src = "./img/play.png";
});
playBtn.addEventListener("touchend", () => {
  playBtn.src = "./img/play.png";
});

// homeBtn 활성화
homeBtn.addEventListener("mousedown", () => {
  homeBtn.src = "./img/home-act.png";
});

homeBtn.addEventListener("touchstart", () => {
  homeBtn.src = "./img/home-act.png";
});

homeBtn.addEventListener("mouseup", () => {
  homeBtn.src = "./img/home.png";
});

homeBtn.addEventListener("touchend", () => {
  homeBtn.src = "./img/home.png";
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

//GamePage 이동
document.querySelector(".play").addEventListener("click", (e) => {
  location.href = "./game-pg.html";
});
