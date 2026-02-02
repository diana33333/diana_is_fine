document.addEventListener('DOMContentLoaded', () => {
    // 1. 抓取漢堡按鈕與選單 (使用 Class 選擇器)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // 2. 綁定漢堡選單點擊事件
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // 切換選單顯示/隱藏
            navLinks.classList.toggle('active');
            // 讓漢堡變換動畫 (三條線變 X)
            hamburger.classList.toggle('open');
            console.log("選單開關狀態切換中...");
        });
    }

    // 3. 抓取原本的測試按鈕 (如果有 ID 為 action-btn 的按鈕)
    const actionBtn = document.getElementById('action-btn');
    if (actionBtn) {
        actionBtn.addEventListener('click', function() {
            alert('恭喜你！網站的 JavaScript 已經成功運作了！');
            const title = document.querySelector('h1');
            if (title) title.innerText = "你點擊了按鈕！";
        });
    }
});

// 簡單防盜：禁用右鍵與圖片拖動
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
});

document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
});