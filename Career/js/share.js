// Imgur 정보
// Client ID  // 6f7c913df440aaa
// Client SEC  // 7a58dcbf84283963d61b6cc9c17ed9f3692ae889

// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init("e58306c7f515389029d75ba525fae068");

// SDK 초기화 여부를 판단합니다.
console.log(Kakao.isInitialized());

// // 이미지 정보 전달용 변수
// let img;

// function capture() {
//   // 카카오 버튼을 클릭하면 body 태그 전체를 이미지로 변경해 주는 함수
//   html2canvas(document.querySelector("body"), {}).then(function (canvas) {
//     // 이미지를 jpg 파일 타입으로 변경하는 코드
//     img = canvas.toDataURL("image/jpg").split(",")[1];
//     // 이미 정보를 imgur 업로드용 함수로 전달
//     uploadImageTest(img);
//   });
// }

// function uploadImageTest(img) {
//   // axios 라이브러리를 이용하여 imgur api 에 캡쳐한 이미지 업로드
//   axios
//     .post(
//       "https://api.imgur.com/3/image",
//       {
//         image: img,
//         type: "base64",
//       },
//       {
//         headers: {
//           Authorization: "Client-ID 6f7c913df440aaa",
//         },
//       }
//     )
//     .then((res) => {
//       // 이미지 업로드가 끝나면 이미지 업로드 주소를 응답으로 받아옴
//       console.log(res.data.data.link);
//       // 이미지 주소를 공유해야 하므로 카카오 공유 함수에 인자로 이미지 주소 전달
//       kakaoShare(res.data.data.link);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }

const eachTypeName = [
  "관리자 지향형 - 경력 유형 검사",
  "전문능력 지향형 - 경력 유형 검사",
  "안전성 지향형 - 경력 유형 검사",
  "사업가적 창의성 지향형 - 경력 유형 검사",
  "자율성 지향형 - 경력 유형 검사",
  "봉사 지향형 - 경력 유형 검사",
  "순수한 도전 지향형 - 경력 유형 검사",
  "라이프스타일 지향형 - 경력 유형 검사",
];

const eachTypeImgLink = [
  "https://imgur.com/cCmxIiv.png",
  "https://imgur.com/Ddz4dSh.png",
  "https://imgur.com/Iz3KM5w.png",
  "https://imgur.com/KvDqebr.png",
  "https://imgur.com/io11RzN.png",
  "https://imgur.com/65wEZcH.png",
  "https://imgur.com/LzE3edD.png",
  "https://imgur.com/zV3An88.png",
];

function kakaoShare(userType) {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "Test-World",
      description: eachTypeName[userType],
      // 받은 이미지 주소를 카카오 공유!
      imageUrl: eachTypeImgLink[userType],
      link: {
        mobileWebUrl: "https://posco-test-world.netlify.app",
        webUrl: "https://posco-test-world.netlify.app",
      },
    },
    buttons: [
      {
        title: "내 경력 지향 알아보기",
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
      el.download = "경력 유형 결과.jpg"; //다운로드 할 파일명 설정
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
      alert("복사되었습니다!");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
}
