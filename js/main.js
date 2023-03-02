const headerTxt = document.querySelector(".header__text");
let content = "Test-World";
let i = 0;

function typingHeader() {
  if (i < content.length) {
    let text = content.charAt(i);
    headerTxt.innerHTML += text;
    i++;
  }
  if (content.length - 1 === i) {
    clearInterval(typingHeader);
  }
}

window.onload = () => {
  setInterval(typingHeader, 150);
};
