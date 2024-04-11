const participants = ['党的领导地位如何确立', '我国的国家性质和根本制度是什么', '为什么要坚持中国共产党的领导', '如何坚持中国共产党的领导', '中国共产党的根本组织原则', '中国共产党与宪法和法律直接的关系', '我国宪法的基本原则有哪些', '宪法如何保障国家权利属于人民', ' 一切权力属于人民的宪法原则目的和要求分别是什么', '什么是最大的人权', '中国人权的特点', '我国人权的广泛性表现在哪些方面', '宪法与国家机构的关系', '我国国家机构实行的原则及主要', '为什么要规范权力运行', '宪法如何规范权力的运行？']; // 这里是参与抽奖的人名列表
const resultElement = document.getElementById('result');

function draw() {
    const randomIndex = Math.floor(Math.random() * participants.length);
    resultElement.textContent = '背诵：' + participants[randomIndex];
}

// 初始化时清空结果
resultElement.textContent = '';
