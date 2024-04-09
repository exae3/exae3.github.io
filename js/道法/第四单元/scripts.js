const participants = ['我国宪法规定的公民基本义务有哪些', '遵守宪法和法律的原因表现及做法', '维护国家利益的表现', '维护国家统一和全国各民族团结', '维护国家安全荣誉和利益', '依法服兵役', '依法纳税', '权利与义务的关系是怎样的', '公民行使权利和履行义务有什么意义', '如何正确处理权利与义务的关系', '为什么必须履行法定义务', '如何履行法定义务', '什么是违法法定义务的行为', '违法法定义务的后果']; // 这里是参与抽奖的人名列表
const resultElement = document.getElementById('result');

function draw() {
    const randomIndex = Math.floor(Math.random() * participants.length);
    resultElement.textContent = '背诵：' + participants[randomIndex];
}

// 初始化时清空结果
resultElement.textContent = '';
