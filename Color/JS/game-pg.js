// 게임 상태 관리에 필요한 변수 초기화
let stage = 1; // 게임 스테이지
let time = 15; // 남은 시간
let paletteRow = 2; // 팔레트 행
let paletteSize = paletteRow ** 2; // 팔레트 아이템 전체 갯수 (행의 제곱)
let targetIndex = 0;
let targetOpacity = 0.4; // 타겟 아이템 opacity
let color = {}; // 팔레트 아이템 색상 (red, green, blue 값을 저장하는 object)

let timer = 0; // 타이머

// 게임 시작
const modal = document.getElementsByClassName("modal")[0];

function startGame() {
  createPlatteItem();

  timer = setInterval(() => {
    playerTime.innerHTML = --time;

    // 시간 초과
    if (time <= 0) {
      playerTime.innerHTML = 0;

      // 타이머 종료
      clearInterval(timer);

      // 결과 모달 출력
      showGameResult();

      // 게임 설정 값 초기화
      initGame();
    }
  }, 1000);
}
