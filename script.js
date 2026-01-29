document.getElementById('action-btn').addEventListener('click', function() {
    alert('恭喜你！網站的 JavaScript 已經成功運作了！');
    document.querySelector('h1').innerText = "你點擊了按鈕！";
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // 切換 .active 類別，控制選單顯示或隱藏
    navLinks.classList.toggle('active');
    
    // 選做：讓漢堡變成 X 的小動畫
    hamburger.classList.toggle('open');
});