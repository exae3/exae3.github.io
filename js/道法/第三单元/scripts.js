const participants = ['我国公民享有哪些权利和自由', '公民依法行使政治权利的意义', '人身自由', '我国公民的社会经济与文化教育权利有哪些', '公民应该如何依法行使权利', '维护权利守程序的作用和要求是什么', '公民维护权利的方式有哪些']; // 这里是参与抽奖的人名列表
const resultElement = document.getElementById('result');

function draw() {
    const randomIndex = Math.floor(Math.random() * participants.length);
    resultElement.textContent = '背诵：' + participants[randomIndex];
}

// 初始化时清空结果
resultElement.textContent = '';
