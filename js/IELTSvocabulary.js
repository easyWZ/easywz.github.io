import englishWords from "./englishWords.js";
// 单词卡片数据对象
let wordCardsData = [...englishWords];

// 创建单词卡片的函数
function createWordCards() {
  const container = document.getElementById("word-cards-container");
  if (!container) return;
  // 过滤掉空单词数据
  wordCardsData = wordCardsData.filter((item) => item.word);
  // 乱序
  // wordCardsData.sort(() => Math.random() - 0.5);
  // 遍历单词数据，创建卡片元素
  wordCardsData.forEach((wordData, index) => {
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
      <h2 id="word-${index + 1}">${index + 1}、${wordData.word}</h2>
      <div class="flex-column">
        <input placeholder=' 输入该单词词意' value="" />
        <textarea placeholder=" 翻译该例句: ${wordData.example}"></textarea>
      </div>
      <button class="button-toggle" role="button" data-index="${index}">
        展开/收起单词信息
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
function toggleWordInfo(index, eventName = "click") {
  const infoDiv = document.querySelectorAll(".word-info")[index];
  if (!infoDiv) return;

  const actions = {
    click: () => infoDiv.classList.toggle("hidden"),
    mouseover: () => infoDiv.classList.remove("hidden"),
    mouseout: () => infoDiv.classList.add("hidden"),
  };

  const action = actions[eventName];
  if (action) action();
}

// 事件委托处理按钮点击 add remove toggle
function handleWordCardEvents() {
  const triggerEvent = ["click", "mouseover", "mouseout"];
  triggerEvent.forEach((event) => {
    document.addEventListener(event, function (e) {
      if (e.target.classList.contains("button-toggle")) {
        const index = parseInt(e.target.getAttribute("data-index"));
        toggleWordInfo(index, event);
      }
    });
  });
}

// 初始化函数
function initWordCards() {
  setTimeout(() => {
    // 创建单词卡片
    createWordCards();
    // 设置事件监听
    handleWordCardEvents();
  });
}

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", initWordCards);
