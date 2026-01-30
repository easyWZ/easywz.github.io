// 单词卡片数据对象
let wordCardsData = [];
// 2026/1/26 更新单词卡片数据对象
wordCardsData.push(
  {
    word: "combine",
    pronunciation: "/kəm'baɪn/",
    meaning: "v. 结合，联合",
    example:
      "Some people combine shopping with visits to the town's restaurants and cafes",
    translation: "一些人在前往城镇的餐厅和咖啡厅的同时进行购物。",
  },
  {
    word: "primary",
    pronunciation: "/'praɪmeri/",
    meaning:
      "adj. 首要的，主要的；最初的；原本的；第一手的, 直接的；初级的, 小学的；初等的 n. 初选者；原色",
    example:
      "The primary aim of this course is to improve your spoken English.",
    translation: "这门课的主要目的是提高英语会话能力。",
  },
  {
    word: "cue",
    pronunciation: "/kjuː/",
    meaning: "n. 暗示，提示",
    example: "They started washing up, so that was our cue to leave.",
    translation: "他们开始洗刷碗碟了，这就是在暗示我们该离开了。",
  },
  {
    word: "illuminate",
    pronunciation: "/ɪ'luːmɪneɪt/",
    meaning: "v. 照明，照射；阐释，说明；用彩灯装饰；使精神焕发",
    example: "The earth is illuminated by the sun.",
    translation: "太阳照亮地球。",
  },
  {
    word: "formulate",
    pronunciation: "/'fɔːrmjuleɪt/",
    meaning: "v. 制订，规划，构想；确切表达，认真阐述",
    example: "He struggled to formulate an answer.",
    translation: "他试图去构想一个答案。",
  },
  {
    word: "approximate",
    pronunciation: "/ə'prɑːksɪmət/",
    meaning: "adj. 大约的，近似的 v. 接近，约等于",
    example: "The approximate cost was 100 dollars.",
    translation: "花费大概是100美元。",
  },
  {
    word: "affect",
    pronunciation: "/ə'fekt/",
    meaning: "v. 影响；感染",
    example: "Your opinion will not affect my decision.",
    translation: "你的意见不会影响我的决定。",
  },
  {
    word: "signal",
    pronunciation: "/'sɪɡnəl/",
    meaning:
      "n. 信号，暗号；迹象；信号灯 v. 发信号，示意；显示，表示 adj. 显著的，不寻常的",
    example: "a danger/warning/distress etc. signal",
    translation: "危险、警告、求救等信号",
  },
  {
    word: "county",
    pronunciation: "/'kaʊnti/",
    meaning: "n. （英）郡，（美）县",
    example: "A county usually consists of several towns and rural areas.",
    translation: "郡通常由几个镇以及乡村地区组成。",
  },
  {
    word: "behave",
    pronunciation: "/bɪ'heɪv/",
    meaning: "v. 表现；守规矩，举止得体",
    example: "They behaved very badly towards their guests.",
    translation: "他们对客人们很不礼貌。",
  },
  {
    word: "indicate",
    pronunciation: "/'ɪndɪkeɪt/",
    meaning: "v. 显示，表明；暗示；是…的标志，象征",
    example:
      "Record profits in the retail market indicate a boom in the economy.",
    translation: "零售市场上有史以来的最高利润显示出经济的突飞猛进。",
  },
  {
    word: "occur",
    pronunciation: "/ə'kɜːr/",
    meaning: "v. 发生；出现",
    example: "When exactly did the incident occur?",
    translation: "这一事件究竟是什么时候发生的？",
  },
  {
    word: "flush",
    pronunciation: "/flʌʃ/",
    meaning:
      "v. 冲洗；发红，脸红 n. 脸红；一阵强烈情感 adj. 完全齐平的；富有的",
    example: "They flushed the toilet paper down the toilet.",
    translation: "他们用马桶把厕纸冲走了。",
  },
  {
    word: "vision",
    pronunciation: "/'vɪʒn/",
    meaning: "n. 视觉，视力；幻想，幻觉；远见",
    example: "It came within my range of vision.",
    translation: "它进入了我的视野。",
  },
  {
    word: "blade",
    pronunciation: "/bleɪd/",
    meaning: "n. 刀片；桨叶；草叶",
    example: "The blade of the sword flashed in the moonlight.",
    translation: "月光下剑锋闪闪发亮。",
  },
  {
    word: "bid",
    pronunciation: "/bɪd/",
    meaning: "n. 出价；投标；努力争取 v. 出价；投标；吩咐；努力争取",
    example:
      "Several firms have bid for the contract to build the new concert hall.",
    translation: "有几家公司投标，争取建造新音乐厅的合同。",
  },
  {
    word: "disrupt",
    pronunciation: "/dɪs'rʌpt/",
    meaning: "v. 使中断；扰乱",
    example: "Traffic was disrupted by a serious car accident.",
    translation: "一场严重的车祸扰乱了交通。",
  },
  {
    word: "massive",
    pronunciation: "/'mæsɪv/",
    meaning: "adj. 巨大的；大量的；厚重的；严重的",
    example: "The explosion made a massive hole in the ground.",
    translation: "爆炸在地面留下了一个巨大的坑。",
  },
  {
    word: "event",
    pronunciation: "/ɪ'vent/",
    meaning:
      "n. 大事, 事件；事情的进程；活动, 经历；结果, 后果；比赛项目；[物][统]事件",
    example: "In the light of later events the decision was proved right.",
    translation: "从后来发生的事看，这一决定证明是正确的。",
  },
  {
    word: "disapprove",
    pronunciation: "/ˌdɪsə'pruːv/",
    meaning: "v. 不赞成，反对",
    example: "I strongly disapprove of child marriage.",
    translation: "我强烈反对童婚。",
  },
  {
    word: "womb",
    pronunciation: "/wuːm/",
    meaning: "n. 子宫",
    example: "A mother's health can affect the baby in the womb.",
    translation: "母亲的健康会对子宫中的胎儿产生影响。",
  },
  {
    word: "pulley",
    pronunciation: "/'pʊli/",
    meaning: "n. 滑轮；滑车",
    example: "The sculpture was moved by ropes and pulleys.",
    translation: "这块雕像是用绳子和滑轮给移走的。",
  },
  {
    word: "label",
    pronunciation: "/'leɪbl/",
    meaning: "n. 标签，标记；称号 v. 贴标签于…；把…称为",
    example:
      "The rich madam never cares about price labels when she is shopping.",
    translation: "这位阔太太买东西时从不关心价格标签。",
  },
  {
    word: "engage",
    pronunciation: "/ɪn'ɡeɪdʒ/",
    meaning: "v. 吸引住；参与；订婚；与…建立密切关系；与（某人）交战",
    example: "Jack and Anne are engaged.",
    translation: "杰克和安妮订婚了。",
  },
  {
    word: "argument",
    pronunciation: "/'ɑːrɡjumənt/",
    meaning: "n. 争论；观点",
    example: "She got into an argument with the teacher.",
    translation: "她和老师争论了起来。",
  },
  {
    word: "mutual",
    pronunciation: "/'mjuːtʃuəl/",
    meaning: "adj. 共同的，相互的",
    example: "They share a mutual interest in sports.",
    translation: "他们对体育运动兴趣相投。",
  },
  {
    word: "intense",
    pronunciation: "/ɪn'tens/",
    meaning: "adj. 强烈的；紧张的；热情的",
    example: "This work demands intense concentration.",
    translation: "这项工作要求高度的专注力。",
  },
  {
    word: "circumstance",
    pronunciation: "/'sɜːrkəmstæns/",
    meaning: "n. 情况；情形；境况",
    example:
      "The company reserves the right to cancel this agreement in certain circumstances.",
    translation: "本公司保留在一定条件下取消这项协议的权利。",
  },
  {
    word: "contact",
    pronunciation: "/'kɑːntækt/",
    meaning: "n. 接触；联系 v. 联系（某人）",
    example: "He lost contact with his friends after graduation.",
    translation: "他自毕业后，就和他的朋友失去了联系。",
  },
  {
    word: "feature",
    pronunciation: "/'fiːtʃər/",
    meaning: "n. 特征，特色；相貌；特写 v. 以…为特色",
    example:
      "A distinctive feature of Indian movies is that they always contain dancing scenes.",
    translation: "印度电影的一个显著特征是里面有很多跳舞的桥段。",
  },
  {
    word: "molecule",
    pronunciation: "/'mɑːlɪkjuːl/",
    meaning: "n. 分子",
    example: "The molecules of oxygen contain two atoms.",
    translation: "氧分子含有两个原子。",
  },
  {
    word: "extension",
    pronunciation: "/ɪk'stenʃn/",
    meaning: "n. 扩大范围；延展，延伸；电话分机；延期",
    example: "a gradual extension of the powers of central government",
    translation: "中央政府权力的逐渐扩大",
  },
);
// 2026/1/28 更新单词卡片数据对象
wordCardsData.push(
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
    pronunciation: "/'dʒestʃər/",
    meaning: "n. 手势；姿态 v. 打手势",
    example: "They communicated entirely by gesture.",
    translation: "他们完全通过手势来交流。",
  },
  {
    word: "motion",
    pronunciation: "/'moʊʃn/",
    meaning: "n. 运动；移动；动作",
    example: "The video is replayed in slow motion.",
    translation: "视频被慢动作回放。",
  },
  {
    word: "receiver",
    pronunciation: "/rɪ'siːvər/",
    meaning:
      "n. 收受者; 收件人; 接待者; (电话)听筒, 耳机; 收音机; (电视)接收机; 接收器; 接球手",
    example: "He put the receiver back to his ear.",
    translation: "他把听筒放回耳边。",
  },
  {
    word: "spot",
    pronunciation: "/spɑːt/",
    meaning:
      "n. 斑点; 污渍; 粉刺; 丘疹; 污点; 地点; 场所; 少量; 职位 v. 用斑点装饰; 使有污渍; 沾上污渍; 发现, 认出; 玷污 adj. 当场作出的; 现付的; 当即支付的; 抽样的; 从现场报道的; 插播的",
    example: "Which has spots, the leopard or the tiger?",
    translation: "有斑点的是豹还是虎？",
  },
  {
    word: "investigate",
    pronunciation: "/ɪn'vestɪɡeɪt/",
    meaning: "v. 调查，研究；审查",
    example: "Sherlock Holmes investigates problems carefully.",
    translation: "夏洛克·福尔摩斯仔细地调查问题。",
  },
  {
    word: "recipient",
    pronunciation: "/rɪ'sɪpiənt/",
    meaning: "n. 接受者，领受者",
    example:
      "Bob Dylan is the recipient of the Nobel Prize for Literature in 2016.",
    translation: "鲍勃·迪伦是2016年诺贝尔文学奖得主。",
  },
  {
    word: "involve",
    pronunciation: "/ɪn'vɑːlv/",
    meaning: "v. 使卷入，牵涉；包含",
    example:
      "The manager likes to be democratic by involving everyone in the decision making.",
    translation: "这位经理喜欢民主的方式，让每个人都参与决策制定。",
  },
  {
    word: "ignore",
    pronunciation: "/ɪɡ'nɔːr/",
    meaning: "v. 忽视，忽略",
    example: "I made a suggestion but they chose to ignore it.",
    translation: "我提了个建议，但他们不予理会。",
  },
  {
    word: "coordinate",
    pronunciation: "/koʊ'ɔːrdɪneɪt/",
    meaning: "v. 协调，整合； 使一致 n. 坐标；套装",
    example: "The nursing staff coordinate smoothly.",
    translation: "护理人员之间协同配合得很顺畅。",
    appendInfo: ["co(共同)+ordin(顺序)+ate(使…) → 顺序相同的 → 并列的"],
  },
);
// 2026/1/29 更新单词卡片数据对象
wordCardsData.push(
  {
    word: "decade",
    pronunciation: "/'dekeɪd/",
    meaning: "n. 十年",
    example: "He spent last decade in a small town in China.",
    translation: "过去的十年里，他待在了中国的一个小镇上。",
    appendInfo: [
      "decade十年 century百年 millennium千年",
      "several decades 数十年",
    ],
  },
  {
    word: "focus",
    pronunciation: "/'foʊkəs/",
    meaning: "v. （使）聚焦 n. 焦点；中心",
    example: "The discussion focused on three main problems.",
    translation: "讨论集中在三个主要问题上。",
    appendInfo: ["focus(...)on/upon(使...)集中于..."],
  },
  {
    word: "offset",
    pronunciation: "/'ɔːfset/",
    meaning: "v. 抵消；弥补；补偿 adj. 胶印的，平板印刷的",
    example: "He raised the prices to offset the increased cost of materials.",
    translation: "他提高售价以补偿材料增加的成本。",
    appendInfo: [
      "offset the loss 弥补损失",
      "be offset by =compensate; compensate for 补偿",
    ],
  },
  {
    word: "huddle",
    pronunciation: "/'hʌdl/",
    meaning: "v. 挤作一团；聚集 n. 杂乱的一堆；聚在一起的一群人",
    example: "The girl huddled in a corner and started weeping.",
    translation: "这个女孩蜷缩在角落，哭了起来。",
    appendInfo: [
      "huddle up  集合，蜷缩",
      "huddle together 挤作一团 huddle up 卷缩",
    ],
  },
  {
    word: "turret",
    pronunciation: "/'tɜːrət/",
    meaning: "n. 塔楼，角塔",
    example: "Our house has a turret you can’t get into from inside.",
    translation: "我们这座房子有个角楼，从房子里面进不去。",
    appendInfo: ["tower->tur->塔    r->无义 et->表示小的后缀"],
  },
  {
    word: "attraction",
    pronunciation: "/ə'trækʃn/",
    meaning: "n. 吸引，吸引力；有吸引力的人或事物",
    example:
      "They fell in love so quickly for they had a very strong attraction towards each other.",
    translation: "他们一见钟情，因为他们对彼此都有很强的吸引力。",
    appendInfo: ["attract [ə'trækt]    vt. 吸引；引起 vi. 吸引；有吸引力"],
  },
  {
    word: "ecology",
    pronunciation: "/i'kɑːlədʒi/",
    meaning: "n. 生态；生态学",
    example: "Concern about ecology is a recent development.",
    translation: "对生态学的关心是最近才有的事。",
    appendInfo: ["ecological 生态学的、生态的", "biology n. 生物学"],
  },
  {
    word: "overall",
    pronunciation: "/ˌoʊvər'ɔːl/",
    meaning:
      "adv. 全部；总计；一般来说；大致上 n. 外套；罩衣；工装服；连身工作服 adj. 全面的；综合的；总体的",
    example:
      "There will be winners in each of three age groups, and one overall winner.",
    translation: "三个年龄组将各产生一名优胜者，另有一位总优胜者。",
    appendInfo: [
      "over(从头到尾)+all(所有的) → 全面的，综合的",
      "overalls 工作服",
    ],
  },
  {
    word: "former",
    pronunciation: "/'fɔːrmər/",
    meaning: "adj. 在前的 n. 前者",
    example: "the countries of the former Soviet Union",
    translation: "前苏联加盟共和国",
    appendInfo: [
      "former 前者 latter 后者",
      "form（形成）+er（人，物）——已形成的东西——在前的",
    ],
  },
  {
    word: "invalid",
    pronunciation: "/ɪn'vælɪd/",
    meaning:
      "adj. （法律上）无效的，不合法的；（观点）站不住脚的 n. 病人，久病衰弱者",
    example: "People with invalid papers are deported to another country.",
    translation: "持无效证件的人被驱逐到别国。",
    appendInfo: ["反义词 valid 有效的", "be invalided out 免除义务"],
  },
);
// 2026/1/30 更新单词卡片数据对象
wordCardsData.push(
  {
    word: "crash",
    pronunciation: "/kræʃ/",
    meaning:
      "n. 崩溃；撞车，相撞；巨大声响；（飞机的）坠毁；（某物价值或价格的）暴跌；狂跌 v. 猛撞，撞击；发出巨响；崩溃；〔股市或股票〕狂跌，暴跌",
    example: "The great financial crash in 1929 ruined international trade.",
    translation: "1929年的经济大萧条摧毁了国际贸易.",
    appendInfo: ["crash into 与....相撞", "financial crash:金融危机"],
  },
  {
    word: "cell",
    pronunciation: "/sel/",
    meaning: "n. 细胞；牢房；手机",
    example: "the nucleus of a cell",
    translation: "细胞核",
    appendInfo: ["blood cell 血细胞", "prison /gaol /jail cell 牢房"],
  },
  {
    word: "output",
    pronunciation: "/'aʊtpʊt/",
    meaning: "n. 产量；输出信息，输出功率 v. 输出（信息）",
    example: "Manufacturing output has increased by 8%.",
    translation: "制造业产量增长了8%。",
    appendInfo: [],
  },
  {
    word: "migrant",
    pronunciation: "/'maɪɡrənt/",
    meaning: "n. 移居者；迁徙动物 adj. 迁移的；迁徙的",
    example:
      "Many migrant families face significant challenges when adjusting to life in a new country.",
    translation: "许多移民家庭在适应新国家的生活时面临重重挑战。",
    appendInfo: ["migrant workers（农民工）"],
  },
  {
    word: "consolation",
    pronunciation: "/ˌkɑːnsə'leɪʃn/",
    meaning: "n. 安慰；慰问",
    example:
      "If it's of any consolation to you, you are not the only one losing money",
    translation: "不仅仅只有你一个人损失了金钱，这也许能让你略感安慰。",
    appendInfo: ["console   v   安慰"],
  },
  {
    word: "teem",
    pronunciation: "/tiːm/",
    meaning: "v. 充满；大量出现；下大雨",
    example: "It's been teeming down all night.",
    translation: "倾盆大雨下了一整夜。",
    appendInfo: [],
  },
  {
    word: "collection",
    pronunciation: "/kə'lekʃn/",
    meaning: "n. 收藏品，收集物；收集，采集",
    example: "Tom's collection of oil paintings has been stolen.",
    translation: "汤姆收藏的油画失窃了。",
    appendInfo: [],
  },
  {
    word: "channel",
    pronunciation: "/'tʃænl/",
    meaning: "n. 海峡；频道；手段，渠道",
    example: "What's on Channel 4 tonight?",
    translation: "电视四台今晚有什么节目？",
    appendInfo: ["canal 运河 channel 海峡"],
  },
  {
    word: "calf",
    pronunciation: "/kæf/",
    meaning: "n. 牛犊，幼崽",
    example: "How many calves were given birth by the cow?",
    translation: "这只奶牛生了几只牛犊？",
    appendInfo: ["calves 复数"],
  },
  {
    word: "cylinder",
    pronunciation: "/'sɪlɪndər/",
    meaning: "n. 圆柱体；圆筒状物；（发动机的）气缸",
    example: "The cylinder is a crucial part of the washing machine.",
    translation: "滚筒是洗衣机必不可少的部分。",
    appendInfo: [
      "cycle → cyl ； inter → inder   cyl+inder →里面有一定空间的圆形 → 圆筒",
    ],
  },
  {
    word: "",
    pronunciation: "",
    meaning: "",
    example: "",
    translation: "",
    appendInfo: [],
  },
);

// 创建单词卡片的函数
function createWordCards() {
  const container = document.getElementById("word-cards-container");
  if (!container) return;
  // 过滤掉空单词数据
  wordCardsData = wordCardsData.filter((item) => item.word);
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
