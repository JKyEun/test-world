// Imgur 정보
// Client ID  // 6f7c913df440aaa
// Client SEC  // 7a58dcbf84283963d61b6cc9c17ed9f3692ae889

// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init("e58306c7f515389029d75ba525fae068");

// SDK 초기화 여부를 판단합니다.
console.log(Kakao.isInitialized());

// 이미지 정보 전달용 변수
let img;

function capture() {
  // 카카오 버튼을 클릭하면 body 태지그 전체를 이미로 변경해 주는 함수
  html2canvas(document.querySelector("body"), {}).then(function (canvas) {
    // 이미지를 jpg 파일 타입으로 변경하는 코드
    img = canvas.toDataURL("image/jpg").split(",")[1];
    // 이미 정보를 imgur 업로드용 함수로 전달
    uploadImageTest(img);
  });
}

function uploadImageTest(img) {
  // axios 라이브러리를 이용하여 imgur api 에 캡쳐한 이미지 업로드
  axios
    .post(
      "https://api.imgur.com/3/image",
      {
        image: img,
        type: "base64",
      },
      {
        headers: {
          Authorization: "Client-ID 6f7c913df440aaa",
        },
      }
    )
    .then((res) => {
      // 이미지 업로드가 끝나면 이미지 업로드 주소를 응답으로 받아옴
      console.log(res.data.data.link);
      // 이미지 주소를 공유해야 하므로 카카오 공유 함수에 인자로 이미지 주소 전달
      kakaoShare(res.data.data.link);
    })
    .catch((e) => {
      console.log(e);
    });
}

function kakaoShare(img) {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "Test-World",
      description: "당신의 눈은 색감의 달인인가요?!",
      // 받은 이미지 주소를 카카오 공유!
      imageUrl: img,
      link: {
        mobileWebUrl: "https://posco-test-world.netlify.app",
        webUrl: "https://posco-test-world.netlify.app",
      },
    },
    buttons: [
      {
        title: "색의 달인이 되보자!",
        link: {
          mobileWebUrl: "https://posco-test-world.netlify.app",
          webUrl: "https://posco-test-world.netlify.app",
        },
      },
    ],
    // 카카오톡 미설치 시 카카오톡 설치 경로이동
    installTalk: true,
  });
}

// 디바이스 반별
let isIphone = false;
const user = navigator.userAgent;
if (user.includes("iPhone") || user.includes("iPad")) {
  isIphone = true;
}
// 이미지 캡쳐, 저장하기
function captureExport() {
  if (isIphone) {
    alert("아이폰에서는 불가능한 기능입니다. 화면 캡쳐를 사용하세요!");
  } else {
    html2canvas(document.querySelector(".capture-area"), {}).then(function (
      canvas
    ) {
      // 이미지를 jpg 파일 타입으로 변경하는 코드
      const el = document.createElement("a");
      el.href = canvas.toDataURL("image/jpeg");
      el.download = "색감의 달인.jpg"; //다운로드 할 파일명 설정
      el.click();
    });
  }
}

// URL 클립보드에 복사하기
function copyToClipBoard() {
  const url = "https://posco-test-world.netlify.app";

  navigator.clipboard
    .writeText(url)
    .then(() => {
      console.log("Text copied to clipboard...");
      alert("복사되었습니다!");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
}
