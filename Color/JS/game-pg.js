let stage = 1;
let time = 15;
let paletteRow = 2;
let paletteSize = paletteRow ** 2; //
let targetIndex = 0;
let targetOpacity = 0.5;
let color = {};

let timer = 0;

// 게임 시작
const modal = document.getElementsByClassName("modal")[0];

function startGame() {
  createPlatteItem();

  timer = setInterval(() => {
    playerTime.innerHTML = --time;

    if (time <= 0) {
      playerTime.innerHTML = 0;
      clearInterval(timer);
      showGameResult();
      initGame();
    }
  }, 1000);
}

// 팔레트 아이템 생성
function createPlatteItem() {
  targetIndex = createTargetItem(paletteSize);
  settingPlatteItem();
}

// 타겟 생성
function createTargetItem(paletteSize) {
  return Math.floor(Math.random() * paletteSize);
}

// 팔레트 아이템 세팅
const palette = document.getElementsByClassName("palette")[0];
const paletteItem = document.getElementsByClassName("palette-item");

function settingPlatteItem() {
  for (let i = 0; i < paletteSize; i++) {
    if (i === targetIndex) {
      palette.innerHTML =
        palette.innerHTML +
        `
                <div class="palette-item" id="target"></div>
            `;
    } else {
      palette.innerHTML =
        palette.innerHTML +
        `
                <div class="palette-item"></div>
            `;
    }
  }

  // 아이템 크기 세팅
  let itemSize = 100 / paletteRow;

  // 랜덤 색상 생성
  color = createColor(color);

  // 아이템 크기, 색상 적용
  for (let i = 0; i < paletteItem.length; i++) {
    // 크기 적용
    paletteItem[i].style.width = `${itemSize}%`;
    paletteItem[i].style.height = `${itemSize}%`;

    // 색상 적용
    let opacity = 1;

    if (paletteItem[i].id === "target") {
      opacity = targetOpacity;
    }

    paletteItem[i].style.backgroundColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${opacity}`;
  }
}

// 랜덤 색상 생성
function createColor(color) {
  color.red = Math.floor(Math.random() * 101) + 100;
  color.green = Math.floor(Math.random() * 101) + 100;
  color.blue = Math.floor(Math.random() * 101) + 100;

  return color;
}

// 아이템 클릭 이벤트
palette.addEventListener("click", function (e) {
  if (e.target.className === "palette-item") {
    if (e.target.id === "target") {
      selectTargetItem();
    } else {
      selectWrongItem();
    }
  }
});

// 정답 처리
function selectTargetItem() {
  updateSettings();
  createPlatteItem();
}

// 정답 맞췄을 때 다음 설정값 변경
function updateSettings() {
  palette.innerHTML = "";

  stage++;
  time = 15;

  if (stage % 3 === 1) {
    paletteRow++;
    paletteSize = paletteRow ** 2;
  }

  if (targetOpacity <= 0.94) {
    targetOpacity = +(targetOpacity + 0.02).toFixed(2);
  }

  // 화면 갱신
  playerTime.innerHTML = time;
  playerStage.innerHTML = stage;
}

// 오답 처리
function selectWrongItem() {
  if (time - 3 < 0) {
    time = 0;
  } else {
    time = time - 3;
  }

  palette.classList.add("vibration");

  setTimeout(function () {
    palette.classList.remove("vibration");
  }, 300);

  playerTime.innerHTML = time;
}

// 설정 값 초기화
function initGame() {
  stage = 1;
  time = 15;
  paletteRow = 2;
  paletteSize = paletteRow ** 2;
  targetIndex = 0;
  targetOpacity = 0.5;
  color = {};
}

// 게임 종료 시 출력 문구
function showGameResult() {
  let resultText = "";

  if (stage > 0 && stage <= 5) {
    resultText = "한 번 더 해볼까요?";
  } else if (stage > 5 && stage <= 10) {
    resultText = "조금만 더! 다시 도전해봐요!";
  } else if (stage > 10 && stage <= 15) {
    resultText = "색깔 찾기 능력이 대단해요!<br />다시 도전해볼까요?";
  } else if (stage > 15 && stage <= 20) {
    resultText = "엄청난 눈을 가지고 있군요!!!";
  } else if (stage > 20 && stage <= 25) {
    resultText = "색깔 찾기의<br/>달인이 나타났다!";
  } else if (stage > 26 && stage <= 30) {
    resultText = "와우!! 여기까지 온 당신,<br/>혹시 '절대색감'??";
  } else if (stage > 30) {
    resultText = "탈인간의 능력을 가지셨습니다!!!";
  }

  modalTitle.innerHTML = `
    <h1 class="modal__content-title--result">
        게임 종료!
    </h1>
    <span class="modal__content-title--stage">
        기록 : <strong>STAGE ${stage}</strong>
    </span>
    <p class="modal__content-title--desc">
        ${resultText}
    </p>
    `;

  modal.classList.add("show");
}

// 모달 창 닫기
const modalTitle = document.getElementsByClassName("modal__content-title")[0];
const modalCloseButton = document.getElementsByClassName("modal__content-close-button")[0];

modal.addEventListener("click", function (e) {
  if (e.target === modal || e.target === modalCloseButton) {
    modal.classList.remove("show");

    // 모달창 닫으면 화면 초기화 후 게임 재시작
    palette.innerHTML = "";
    playerTime.innerHTML = time;
    playerStage.innerHTML = stage;

    startGame();
  }
});

// 기본 값 세팅 및 다른 색깔 찾기 게임 자동 시작
const playerTime = document.getElementById("player-time");
const playerStage = document.getElementById("player-stage");

window.onload = function () {
  playerTime.innerHTML = time;
  playerStage.innerHTML = stage;

  startGame();
};
