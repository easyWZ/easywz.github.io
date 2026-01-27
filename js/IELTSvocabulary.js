// 单词卡片切换按钮事件处理
const buttons = document.querySelectorAll(".button-toggle");
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let nextElement = btn.nextElementSibling;
    while (nextElement) {
      if (nextElement.classList) {
        nextElement.classList.toggle("hidden");
        return;
      }
    }
  });
});

// 单词卡片数据对象
const wordCardsData = [
  {
    word: "occasion",
    pronunciation: "/ə'keɪʒn/",
    meaning: "n. 时刻，场合，机会，理由 vt. 引起，惹起",
    example: "They've met on several occasions to discuss the issue before.",
    translation: "他们之前会面讨论过几次这个问题。",
    appendInfo: [
      "on occasion 有时，不时；by occasion of 由于",
      "on one occasion：有一次；on another occasion: 还有一次",
    ],
  },
  {
    word: "gesture",
    pronunciation: "",
    meaning: "",
    example: "",
    translation: "",
  },
  {
    word: "",
    pronunciation: "",
    meaning: "",
    example: "",
    translation: "",
  },
  {
    word: "",
    pronunciation: "",
    meaning: "",
    example: "",
    translation: "",
  },
  {
    word: "",
    pronunciation: "",
    meaning: "",
    example: "",
    translation: "",
  },
  {
    word: "",
    pronunciation: "",
    meaning: "",
    example: "",
    translation: "",
  },
];

// 创建单词卡片的函数
function createWordCards() {
  const container = document.getElementById("word-cards-container");
  if (!container) return;

  wordCardsData.forEach((wordData, index) => {
    if (!wordData.word) return;
    const cardDiv = document.createElement("div");
    cardDiv.className = "word-card";
    // 循环appendInfo数组
    let appendInfoSection = "";
    if (wordData.appendInfo && wordData.appendInfo.length > 0) {
      wordData.appendInfo.forEach((info) => {
        appendInfoSection += `<section>${info}</section>`;
      });
    }
    // 创建单词卡片HTML结构
    cardDiv.innerHTML = `
      <h2>${index + 1}、${wordData.word}</h2>
      <div class="flex-column">
        <input placeholder=' 输入该单词词意' value="" />
        <textarea placeholder=" 例句: ${wordData.example}"></textarea>
      </div>
      <button class="button-toggle" role="button" data-index="${index}">
        点击展开/收起单词信息
      </button>
      <div class="hidden flex-column word-info">
        <section>读音: ${wordData.pronunciation}</section>
        <section>词意: ${wordData.meaning}</section>
        <section>${wordData.translation}<br />${wordData.example}</section>
        ${appendInfoSection}
      </div>
    `;
    container.appendChild(cardDiv);
  });
}

// 切换单词信息显示/隐藏
function toggleWordInfo(index) {
  const infoDivs = document.querySelectorAll(".word-info");
  if (infoDivs[index]) {
    infoDivs[index].classList.toggle("hidden");
  }
}

// 事件委托处理按钮点击
function handleWordCardEvents() {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("button-toggle")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      toggleWordInfo(index);
    }
  });
}

// 初始化函数
function initWordCards() {
  // 创建单词卡片
  createWordCards();
  // 设置事件监听
  handleWordCardEvents();
}

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", initWordCards);
