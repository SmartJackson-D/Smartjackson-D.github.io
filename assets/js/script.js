// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // 文章卡片动画
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 搜索功能
function performSearch() {
    const searchTerm = document.getElementById('search-input').value.trim();
    if (searchTerm) {
        // 在实际应用中，这里应该跳转到搜索页面或显示搜索结果
        alert(`搜索: ${searchTerm}\n\n这个功能需要后端支持，目前是演示版本。`);
    } else {
        alert('请输入搜索关键词');
    }
}

// 阅读进度指示器（可选）
function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: var(--primary-color);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// 代码高亮（如果需要）
function initCodeHighlighting() {
    // 可以集成 Prism.js 或 Highlight.js
    // 这里是一个简单的实现
    document.querySelectorAll('pre code').forEach(block => {
        block.innerHTML = block.innerHTML
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    });
}

// 初始化
if (document.querySelector('.post-content')) {
    initReadingProgress();
    initCodeHighlighting();
}
