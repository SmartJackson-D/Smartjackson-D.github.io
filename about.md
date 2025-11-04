---
layout: page
title: 关于我
permalink: /about/
---

<div class="about-page">
    <section class="about-hero">
        <div class="about-avatar">
            <img src="{{ '/assets/images/avatar.jpg' | relative_url }}" alt="{{ site.author.name }}" onerror="this.src='{{ '/assets/images/avatar-placeholder.jpg' | relative_url }}'">
        </div>
        <div class="about-intro">
            <h1>你好，我是 {{ site.author.name }} 👋</h1>
            <p class="about-description">{{ site.author.description }}</p>
            <div class="about-social">
                {% if site.github_username %}
                <a href="https://github.com/{{ site.github_username }}" target="_blank" class="social-link">
                    <i class="fab fa-github"></i>
                    GitHub
                </a>
                {% endif %}
                {% if site.author.email %}
                <a href="mailto:{{ site.author.email }}" class="social-link">
                    <i class="fas fa-envelope"></i>
                    邮箱
                </a>
                {% endif %}
            </div>
        </div>
    </section>

    <section class="about-content">
        <div class="about-section">
            <h2>🚀 我的技能</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>前端技术</h3>
                    <ul>
                        <li>HTML5 / CSS3 / JavaScript (ES6+)</li>
                        <li>React / Vue.js / TypeScript</li>
                        <li>Responsive Web Design</li>
                        <li>Sass / Less / Stylus</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>后端技术</h3>
                    <ul>
                        <li>Node.js / Python / Java</li>
                        <li>Express / Django / Spring Boot</li>
                        <li>MySQL / MongoDB / Redis</li>
                        <li>RESTful API / GraphQL</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>工具和平台</h3>
                    <ul>
                        <li>Git / Docker / CI/CD</li>
                        <li>AWS / Vercel / Netlify</li>
                        <li>Webpack / Vite</li>
                        <li>Linux / Nginx</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="about-section">
            <h2>📚 学习经历</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">2023 - 至今</div>
                    <div class="timeline-content">
                        <h3>全栈开发深入学习</h3>
                        <p>专注于云原生技术和微服务架构，学习 Docker、Kubernetes 等容器化技术。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2021 - 2023</div>
                    <div class="timeline-content">
                        <h3>前端框架精通</h3>
                        <p>深入学习和实践 React、Vue.js 等现代前端框架，掌握 TypeScript。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2019 - 2021</div>
                    <div class="timeline-content">
                        <h3>Web 开发基础</h3>
                        <p>系统学习 HTML、CSS、JavaScript 等 Web 开发基础知识。</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-section">
            <h2>🎯 当前专注</h2>
            <div class="focus-areas">
                <div class="focus-item">
                    <i class="fas fa-code"></i>
                    <h3>技术深度</h3>
                    <p>深入理解 JavaScript 核心概念和浏览器工作原理</p>
                </div>
                <div class="focus-item">
                    <i class="fas fa-cloud"></i>
                    <h3>云原生</h3>
                    <p>学习云原生技术和微服务架构设计</p>
                </div>
                <div class="focus-item">
                    <i class="fas fa-brain"></i>
                    <h3>AI 探索</h3>
                    <p>探索人工智能和机器学习的应用</p>
                </div>
                <div class="focus-item">
                    <i class="fas fa-project-diagram"></i>
                    <h3>系统设计</h3>
                    <p>提升系统架构和设计模式的理解</p>
                </div>
            </div>
        </div>

        <div class="about-section">
            <h2>💼 项目经验</h2>
            <div class="projects-showcase">
                <div class="project-card">
                    <h3>个人博客系统</h3>
                    <p>使用 Jekyll 构建的静态博客，支持 Markdown 写作，部署在 GitHub Pages。</p>
                    <div class="project-tech">
                        <span class="tech-tag">Jekyll</span>
                        <span class="tech-tag">GitHub Pages</span>
                        <span class="tech-tag">Markdown</span>
                    </div>
                </div>
                <div class="project-card">
                    <h3>任务管理应用</h3>
                    <p>全栈任务管理应用，支持实时协作和多种视图模式。</p>
                    <div class="project-tech">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">MongoDB</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-section">
            <h2>📫 联系我</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <strong>邮箱</strong>
                        <p>{{ site.author.email }}</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fab fa-github"></i>
                    <div>
                        <strong>GitHub</strong>
                        <p><a href="https://github.com/{{ site.github_username }}" target="_blank">github.com/{{ site.github_username }}</a></p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-globe"></i>
                    <div>
                        <strong>博客</strong>
                        <p><a href="{{ site.url }}" target="_blank">{{ site.url }}</a></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-section quote-section">
            <blockquote class="inspiration-quote">
                "持续学习，不断进步，用代码创造价值"
            </blockquote>
            <p class="quote-author">— 我的座右铭</p>
        </div>
    </section>
</div>

<style>
.about-page {
    max-width: 1000px;
    margin: 0 auto;
}

.about-hero {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 4rem;
    padding: 2rem;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
    border-radius: 15px;
}

.about-avatar {
    flex-shrink: 0;
}

.about-avatar img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: var(--shadow);
}

.about-intro h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.about-description {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 1.5rem;
}

.about-social {
    display: flex;
    gap: 1rem;
}

.social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    transition: var(--transition);
}

.social-link:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

.about-section {
    margin-bottom: 3rem;
    padding: 2rem;
    background: var(--white);
    border-radius: 10px;
    box-shadow: var(--shadow);
}

.about-section h2 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--gray-light);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.skill-category h3 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
}

.skill-category ul {
    list-style: none;
}

.skill-category li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--gray-light);
}

.skill-category li:before {
    content: "▸";
    color: var(--primary-color);
    margin-right: 0.5rem;
}

.timeline {
    position: relative;
    padding-left: 2rem;
}

.timeline:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-color);
}

.timeline-item {
    position: relative;
    margin-bottom: 2rem;
}

.timeline-item:before {
    content: '';
    position: absolute;
    left: -2.4rem;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 3px solid var(--white);
    box-shadow: 0 0 0 3px var(--primary-color);
}

.timeline-date {
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.timeline-content h3 {
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.focus-areas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
}

.focus-item {
    text-align: center;
    padding: 1.5rem;
    background: var(--gray-light);
    border-radius: 10px;
    transition: var(--transition);
}

.focus-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.focus-item i {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.focus-item h3 {
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.projects-showcase {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.project-card {
    padding: 1.5rem;
    background: var(--gray-light);
    border-radius: 10px;
    border-left: 4px solid var(--primary-color);
}

.project-card h3 {
    margin-bottom: 1rem;
    color: var(--text-color);
}

.project-tech {
    margin-top: 1rem;
}

.tech-tag {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--gray-light);
    border-radius: 8px;
}

.contact-item i {
    font-size: 1.5rem;
    color: var(--primary-color);
    width: 40px;
    text-align: center;
}

.contact-item strong {
    display: block;
    margin-bottom: 0.25rem;
    color: var(--text-color);
}

.contact-item a {
    color: var(--primary-color);
    text-decoration: none;
}

.contact-item a:hover {
    text-decoration: underline;
}

.quote-section {
    text-align: center;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
}

.inspiration-quote {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.quote-author {
    opacity: 0.8;
    font-size: 1rem;
}

@media (max-width: 768px) {
    .about-hero {
        flex-direction: column;
        text-align: center;
    }
    
    .about-social {
        justify-content: center;
    }
    
    .skills-grid,
    .focus-areas,
    .projects-showcase,
    .contact-info {
        grid-template-columns: 1fr;
    }
}
</style>
