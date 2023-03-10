// BTN EVENT
const homeBtn = document.querySelector(".header__home>img");
const burgerBtn = document.querySelector(".header__burger>img");
const playBtn = document.querySelector(".content__title-btn");
const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".menu");

homeBtn.addEventListener("touchstart", function () {
  homeBtn.setAttribute("src", "./img/home_active.png");
});
homeBtn.addEventListener("mousedown", function () {
  homeBtn.setAttribute("src", "./img/home_active.png");
});

homeBtn.addEventListener("touchend", function () {
  homeBtn.setAttribute("src", "./img/home.png");
});
homeBtn.addEventListener("mouseup", function () {
  homeBtn.setAttribute("src", "./img/home.png");
});

playBtn.addEventListener("touchstart", function () {
  playBtn.setAttribute("src", "./img/btn_play_active.png");
});
playBtn.addEventListener("mousedown", function () {
  playBtn.setAttribute("src", "./img/btn_play_active.png");
});

playBtn.addEventListener("touchend", function () {
  playBtn.setAttribute("src", "./img/btn_play.png");
});
playBtn.addEventListener("mouseup", function () {
  playBtn.setAttribute("src", "./img/btn_play.png");
});

burger.addEventListener("click", function () {
  if (burgerMenu.classList.contains("hide")) {
    burgerMenu.classList.remove("hide");
  } else {
    burgerMenu.classList.add("hide");
  }
});
