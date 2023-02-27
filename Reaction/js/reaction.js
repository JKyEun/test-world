// BTN EVENT
const homeBtn = document.querySelector(".header__home>img");
const burgerBtn = document.querySelector(".header__burger>img");
const playBtn = document.querySelector(".content__title-btn");

homeBtn.addEventListener("touchstart", function () {
  homeBtn.setAttribute("src", "./img/home_active.png");
});
homeBtn.addEventListener("touchend", function () {
  homeBtn.setAttribute("src", "./img/home.png");
});

playBtn.addEventListener("touchstart", function () {
  playBtn.setAttribute("src", "./img/btn_play_active.png");
});
playBtn.addEventListener("touchend", function () {
  playBtn.setAttribute("src", "./img/btn_play.png");
});
