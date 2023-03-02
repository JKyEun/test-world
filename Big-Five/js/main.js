const startbtn = document.querySelector(".start"); //시작버튼
const homebtn = document.querySelector(".home"); //홈버튼
const backbtn = document.querySelector(".back"); //뒤로가기
const content = document.querySelector(".content"); //시작페이지
const qna = document.querySelector(".qna"); //질문페이지
const firstQuestion = document.querySelector("#question1"); //첫번째 질문
const secondQuestion = document.querySelector(".qna+.hide"); //두번째 질문
const qBox = document.querySelectorAll(".qBox");
const h2 = document.querySelector("h2");
const result = document.querySelector(".result");
const count = document.querySelector(".question-count");

// const questionDivs = document.querySelectorAll(".qna .qBox"); //
const endPoint = 60;
const qList = [
  "나는 상상력이 풍부하다.",
  "나는 아이디어를 떠올리는 일을 즐긴다.",
  "나는 미술관이나 문화관람을 좋아한다.",
  "나는 보여지는 것을 중요시 한다.",
  "나는 감정기복이 심하다.",
  "나는 타인의 감정에 영향을 많이 받는다.",
  "나는 여러 방면에 호기심이 많다.",
  "나는 반복되는 일보다 새로운 일이 좋다.",
  "나는 새로운 방식을 잘 받아들인다.",
  "나는 철학적인 대화가 좋다.",
  "진보적질문1",
  "진보적질문2",
  "나는 일을 효율적으로 하는 사람이다.",
  "나는 평소에 어떤일을 하든 자신감이 있다.",
  "나는 일을 하기전 계획을 세운다.",
  "나는 어떤일이든 꼼꼼하게 한다.",
  "나는 약속을 잘 지킨다.",
  "나는 맡은일은 포기하지 않는다.",
  "나는 스스로에게 엄격하다.",
  "나는 목표는 무조건 이뤄야 한다.",
  "나는 일을 미루지 않고 바로 시작한다.",
  "나는 쉽게 산만해지지 않는다.",
  "나는 신중하다는 소리를 많이 듣는다.",
  "나는 어떤 일을 시작할 때 생각하고 행동하는 편이다.",
  "나는 처음 만난사람들과 쉽게 친해진다. ",
  "나는 사람들과 자주 연락한다.",
  "나는 여러모임이 있다.",
  "나는 새로운 만남을 즐긴다.",
  "나는 나의 생각을 말하는 것을 좋아한다. ",
  "나는 당당한 편이다.",
  "나는 빠르게 움직이는 편이다.",
  "나는 동시에 여러 일을 처리할 수 있다. ",
  "나는 새로운 일을 좋아한다.",
  "나는 모험을 즐기는 편이다.",
  "나는 걱정이 없다.",
  "나는 안좋은일은 빨리 잊어 버린다.",
  "나는 남을 잘 믿는 편이다. ",
  "나는 사람들이 착하다고 생각한다. ",
  "나는 규칙을 어기지 않는 편이다.",
  "나는 거짓말을 잘 하지 않는다.",
  "나는 남을 돕는 일을 좋아한다.",
  "나는 배려심이 있는 편이다.",
  "나는 싸움을 피하는 편이다.",
  "나는 다른 사람의 의견을 잘 수긍하는 편이다.",
  "나는 스스로를 낮게 평가한다.",
  "나는 나 자신에게 엄격하다.",
  "나는 다른 사람의 슬픔을 잘 느낀다.",
  "나는 다른 사람에게 관심이 많다. ",
  "나는 시작하기도 전에 걱정이 앞선다.",
  "나는 쉽게 스트레스를 받는 편이다.",
  "나는 화가 많은 편이다.",
  "나는 쉽게 신경이 날카로워지는 편이다. ",
  "나는 종종 기분이 가라앉는다.",
  "나는 혼자 있으면 우울해진다.",
  "나는 실수했을 때 쉽게 당황해 한다.",
  "나는 자주 부끄러워 한다.",
  "나는 충동적인 소비가 많은 편이다.",
  "나는 팔랑귀라는 소리는 듣는 편이다.",
  "나는 마감일자가 다가오면 불안하다.",
  "나는 압박이 느껴지면 평정심을 유지할 수 없다.",
];

// 설명 넣어주기
const aBox = document.querySelectorAll(".aBox");
const explain = document.createElement("div");
const e1 = document.createElement("p");
const e2 = document.createElement("p");
e1.innerText = "매우 그렇지 않다";
e2.innerText = "매우 그렇다";

e1.style.display = "inline-block";
e2.style.display = "inline-block";

explain.style.display = "flex";
explain.style.justifyContent = "space-between";

explain.append(e1);
explain.append(e2);

aBox.forEach((box) => {
  const clone = explain.cloneNode(true);
  box.appendChild(clone);
});

//질문 넣기
//애초에 있어야 하기 때문에 함수로 쓸 필요가 없음
for (let i = 0; i < qList.length; i++) {
  qBox[i].innerText = qList[i];
  // console.log(qList[i]);
}

for (let i = 1; i <= qList.length; i++) {
  // radio 태그의 name 바꿔주기
  const question = document.querySelector(`#question${i}`);
  const choice = question.querySelectorAll(".aBox .select");
  for (let j = 0; j < 5; j++) {
    choice[j].querySelector("input").setAttribute("name", `qna${i}`);
  }
  qBox[i - 1].innerText = qList[i - 1];
}

//STATUSBAR
const questionStatus = document.querySelector(".question-status");

// BUTTON
startbtn.addEventListener("pointerdown", function () {
  startbtn.setAttribute("src", "./img/start-touch.png");
});

startbtn.addEventListener("pointerup", function () {
  startbtn.setAttribute("src", "./img/start.png");
});

homebtn.addEventListener("pointerdown", function () {
  homebtn.setAttribute("src", "./img/home-touch.png");
});

homebtn.addEventListener("pointerup", function () {
  homebtn.setAttribute("src", "./img/home.png");
});

backbtn.addEventListener("pointerdown", function () {
  backbtn.setAttribute("src", "./img/back-touch.png");
});

backbtn.addEventListener("pointerup", function () {
  backbtn.setAttribute("src", "./img/back.png");
});

//START눌렀을 때
startbtn.addEventListener("click", function () {
  homebtn.classList.add("hide"); //집모양 숨기고
  backbtn.classList.remove("hide"); //뒤로가기모양 나타나기
  content.classList.add("hide"); // 시작하는 페이지 숨기고
  qna.classList.remove("hide"); // 질문페이지 활성화

  questionStatus.classList.remove("hide"); //진행바 나타나기
  firstQuestion.classList.add("on");
  firstQuestion.classList.remove("hide");
  secondQuestion.classList.add("next");
  secondQuestion.classList.remove("hide");
  h2.innerText = `Qestion 1`;
  count.innerText = "0/60";
});

//다음페이지
let answerArr = new Array(qList.length).fill(0);
let currentPage = 0;

//다음페이지로 넘어가기
function goNext(t) {
  const prev = document.querySelector(".prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");
  const nextQna = document.querySelector(".next+.hide");

  console.log(t);

  if (prev !== null) {
    prev.classList.add("hide");
    prev.classList.remove("prev");
  }

  if (on !== null) {
    on.classList.add("prev");
    on.classList.remove("on");
  }
  if (next !== null) {
    next.classList.add("on");
    next.classList.remove("next");
  }
  if (nextQna !== null) {
    nextQna.classList.add("next");
    nextQna.classList.remove("hide");
  }

  //프로그레스 바 애니메이션
  questionStatus.querySelector(".progress-bar").value++;
  currentPage = questionStatus.querySelector(".progress-bar").value;
  document.querySelector(".current-percentage").style.width = `${
    1.6 * currentPage
  }%`;
  questionStatus.querySelector(
    ".question-count"
  ).innerText = `${currentPage}/${qList.length}`;

  // 배열에 사용자 입력 값 받아오기
  answerArr[currentPage - 1] = Number(t.value);

  // 마지막 페이지일때
  if (currentPage === 60) {
    getResult();
    return;
  }

  // 제목 변경
  h2.innerText = `Qestion ${currentPage + 1}`;
}

//이전페이지
function goPrev() {
  const prevQna = document.querySelector(`.qna:nth-child(${currentPage - 1})`);
  const prev = document.querySelector(".prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");
  console.log(currentPage);
  console.log(prevQna);
  if (currentPage === 0) {
    // goIntroPage();
    return;
  }

  if (prevQna !== null) {
    prevQna.classList.add("prev");
    prevQna.classList.remove("hide");
  }
  if (prev !== null) {
    prev.classList.add("on");
    prev.classList.remove("prev");
  }
  if (on !== null) {
    on.classList.add("next");
    on.classList.remove("on");
  }
  if (next !== null) {
    next.classList.add("hide");
    next.classList.remove("next");
  }

  if (currentPage === 60) {
    result.classList.add("hide");
    questionStatus.classList.remove("hide");
  }

  //프로그레스 바 애니메이션
  questionStatus.querySelector(".progress-bar").value--;
  currentPage = questionStatus.querySelector(".progress-bar").value;
  document.querySelector(".current-percentage").style.width = `${
    1.6 * currentPage
  }%`;
  h2.innerText = `Qestion ${currentPage + 1}`;
  questionStatus.querySelector(
    ".question-count"
  ).innerText = `${currentPage}/${qList.length}`;
}

backbtn.addEventListener("click", goPrev);

//검사 결과 페이지

function getResult() {
  // let eachScore = new Array(60).fill(0);
  let eachScore = new Array(5);
  for (let i = 0; i < eachScore.length; i++) {
    eachScore[i] = new Array(6).fill(0);
  }

  // const summary = document.querySelector(".result .summary");
  result.classList.remove("hide");
  questionStatus.classList.add("hide");

  h2.innerText = `결과페이지`;
  // for (let i = 0; i < answerArr.length; i++) {
  //   const index = i % 5;
  //   eachScore[index] += answerArr[i] * 4;
  // }

  //삼중for문
  //각 성향의 점수를 더해줌
  let ansIdx = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 6; j++) {
      for (let k = 0; k < 2; k++) {
        eachScore[i][j] += answerArr[ansIdx++];
      }
    }
  }
  //소수점 자르기
  // for (let i = 0; i < eachScore.length; i++) {
  //   eachScore[i] = Number(eachScore[i].toFixed(1));
  // }

  //각 유형의 성향 점수
  let characterArr = [
    [
      "상상력",
      "예술적 감수성",
      "감정 존중",
      "모험성",
      "지적 호기심",
      "가치 진보성",
    ],
    ["자신감", "계획성", "책임감", "성취욕", "자제력", "신중함"],
    ["친밀감", "사교성", "리더십", "활동성", "흥미 추구", "명랑함"],
    ["신뢰", "강직함", "이타주의", "협조성", "겸손함", "공감력"],
    ["걱정", "분노", "우울", "자의식", "충동성", "심약함"],
  ];
  console.log(characterArr);

  //각 유형의 점수로 나타냄
  let resultArr = new Array(5).fill(0);

  //설명배열
  let explainArr = [
    [
      "당신은 본인만의 세계를 구축하여 상상의 나래를 펼치는 것을 즐깁니다. ",
      "당신은 평소에 예술 분야에 관심이 많고 미적 아름다움을 중요시 합니다.",
      "당신은 긍정적이든 부정적이든 상관없이 모든 감정을 소중이 받아들여 주변 사람들의 감정을 정확히 이해합니다.",
      "당신은 끊임없이 새로운 것을 시도하는 성향이 강합니다.",
      "당신은 새로운 생각을 쉽게 수용하고 받아들이며 과거의 아이디어 보다 새로운 아이디어에 흥미를 느낍니다.",
      "진보성이 좋아요",
    ],
    [
      "당신은 어떤일을 시작할 때 두려움이 없습니다. ",
      "당신은 즉흥적이 일보다는 계획적으로 움직이는 것을 좋아합니다.",
      "당신은 자신에게 맡겨진 의무를 매우 중요하게 생각하며 스스로 맡은 바를 해내기 위해 노력합니다.",
      "당신은 성공하기 위해 자신의 에너지를 쏟습니다.",
      "당신은 집중력이 강합니다. 또한, 목적 이외의 다른 일들에 주의를 쉽게 빼앗길 확률이 낮습니다. ",
      "당신은 생각을 행동으로 옮기기까지 많은 시간이 걸리는 편입니다. ",
    ],
    [
      "당신은 처음보는 사람들을 편안하게 해주는 편입니다. ",
      "당신의 주변에는 항상 사람이 많습니다.",
      "당신은 자신의 생각을 표현하는 것을 좋아하고 단정적인 표현을 자주 쓰는 편입니다. ",
      "당신은 어떤 행동이든 빠르고 활기차게 행동하는 편입니다. ",
      "당신은 정적인 일보다 동적인일을 좋아하는 편입니다. ",
      "당신은 사소한 일에도 기쁨을 찾고 낮척적인 삶의 태도를 가지고 있습니다. ",
    ],
    [
      "당신은 사람을 의심하기 보다는 잘 믿는 편입니다. ",
      "당신은 자신의 모습을 남에게 잘보여줍니다.",
      "당신은 도움이 필요한 사람들을 기꺼이 도우려는 경향이 있습니다. ",
      "당신은 경쟁보다는 공존을 추구하는 편입니다. ",
      "당신은 타인 앞에서 자기자신을 낮추는 편입니다. ",
      "당신은 타인의 행동에 쉽게 반응하는 편입니다. ",
    ],
    [
      "당신은 미래의 일의 걱정이 많은 편입니다.",
      "당신은 평소 예민하다는 생각을 가지고 있는 편입니다. ",
      "당신은 작은 상실에도 쉽게 우울해지곤 합니다.",
      "당신은 난처한 상황에 크게 당황하고 부끄러워지는 편입니다.",
      "당신은 작은 유혹에도 휩게 흔들려 깊이 빠지는 경향이 있습니다.",
      "당신은 위기에 처했을 때 크게 스트레스를 받고 대처 과정에서 어려움을 겪곤 합니다. ",
    ],
  ];

  let explainList = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 6; j++) {
      resultArr[i] += eachScore[i][j];

      if (eachScore[i][j] >= 8) {
        explainList.push(explainArr[i][j]);
      }
    }
  }
  const explainText = document.querySelector(".result .explain");
  explainText.innerText = explainList;

  // for (let i = 0; i < eachScore.length; i++) {
  //   for (let j = 0; j < eachScore[i].length; j++) {
  //     console.log("eachScore [" + i + "][" + j + "]' : " + eachScore[i][j]);
  //     console.log("eachScore [" + i + "][" + j + "]' : " + eachScore[i][j]);

  //   }
  // }

  // 각 유형의 합계 그래프 만들기
  for (let i = 0; i < resultArr.length; i++) {
    const typeGraph = document.querySelector(
      `.graph .type:nth-child(${i + 1}) .type-graph`
    );
    setTimeout(() => {
      typeGraph.style.width = `${resultArr[i] * (78 / 100)}%`;

      setTimeout(() => {
        typeGraph.innerText = `${resultArr[i] * (100 / 60)}점`;
      }, 2000);
    }, 2000);

    for (let j = 0; j < eachScore[0].length; j++) {
      const character = document.querySelector(
        `.graph .type:nth-child(${i + 1}) .type-character`
      );
      // let text = null;
      // if (eachScore[i][j] >= 6) {
      //   text = document.createTextNode(
      //     `${characterArr[i][j]} : ${eachScore[i][j] * 10} - ${
      //       explainArr[i][j]
      //     }`
      //   );
      // } else {
      //   text = document.createTextNode(
      //     `${characterArr[i][j]} : ${eachScore[i][j] * 10}`
      //   );
      // }
      let text = document.createTextNode(
        `${characterArr[i][j]} : ${eachScore[i][j] * 10}점`
      );
      character.appendChild(text);

      // character.innerText = `${characterArr[i][j]} : ${eachScore[i][j]}`;
    }
  }

  //SUMMARY 내용
  //해당 사용자의 유형을 나타냄
  // const userType = eachScore.indexOf(Math.max(...eachScore));
  // if (userType === 0) {
  //   summary.innerText = `당신은 개방성이 강해요`;
  // } else if (userType === 1) {
  //   summary.innerText = `당신은 성실성이 강해요`;
  // } else if (userType === 2) {
  //   summary.innerText = `당신은 외향성이 강해요`;
  // } else if (userType === 3) {
  //   summary.innerText = `당신은 우호성이 강해요`;
  // } else if (userType === 4) {
  //   summary.innerText = `당신은 신경증이 강해요`;
  // }

  //설명입력
  // const explain = document.querySelector(".result .explain");
  // explain.innerText = moreInfo.querySelector(
  //   `.explain${userType + 1}`
  // ).innerText;
}
