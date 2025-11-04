// js/script.js

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchIcon = document.querySelector('.search-box i');
    const searchInput = document.querySelector('.search-box input');
    
    if (searchIcon && searchInput) {
        // 点击搜索图标
        searchIcon.addEventListener('click', function() {
            performSearch();
        });
        
        // 按回车键搜索
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // 文章卡片加载动画
    const postCards = document.querySelectorAll('.post-card');
    if (postCards.length > 0) {
        postCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    // 暗色模式切换功能（可选）
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.style.background = 'none';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.cursor = 'pointer';
    darkModeToggle.style.fontSize = '1.2rem';
    darkModeToggle.style.color = 'var(--text-color)';
    darkModeToggle.style.marginLeft = '1rem';
    
    // 添加到导航栏
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.appendChild(darkModeToggle);
        
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // 保存用户偏好
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
        
        // 检查保存的主题偏好
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    
    // 添加暗色模式样式
    const darkModeStyles = `
        <style>
            body.dark-mode {
                --text-color: #e2e8f0;
                --light-text: #a0aec0;
                --bg-color: #1a202c;
                --white: #2d3748;
            }
            
            body.dark-mode .sidebar-widget,
            body.dark-mode .post-card,
            body.dark-mode footer {
                background: #2d3748;
            }
            
            body.dark-mode .search-box {
                background: #4a5568;
            }
            
            body.dark-mode .search-box input {
                color: #e2e8f0;
            }
            
            body.dark-mode .categories-list span,
            body.dark-mode .tag {
                background: #4a5568;
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', darkModeStyles);
});

// 搜索功能
function performSearch() {
    const searchTerm = document.querySelector('.search-box input').value.trim();
    if (searchTerm !== '') {
        alert(`搜索: ${searchTerm}`);
        // 实际应用中这里应该执行搜索逻辑，比如：
        // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    } else {
        alert('请输入搜索关键词');
    }
}

// 文章阅读时间计算（可选功能）
function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
}

// 初始化文章阅读时间
function initReadingTime() {
    const articles = document.querySelectorAll('.post-excerpt');
    articles.forEach(article => {
        const text = article.textContent;
        const readingTime = calculateReadingTime(text);
        
        const readingTimeElement = document.createElement('span');
        readingTimeElement.innerHTML = `<i class="far fa-clock"></i> ${readingTime} 分钟阅读`;
        readingTimeElement.style.marginLeft = '1rem';
        
        article.closest('.post-content').querySelector('.post-meta').appendChild(readingTimeElement);
    });
}

// 当页面完全加载后初始化阅读时间
window.addEventListener('load', initReadingTime);
