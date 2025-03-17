---
home: true
heroImage: /images/logo.jpg
heroText: 前端开发笔记 
tagline: 记录学习，分享成长
actions:
  - text: 开始阅读 →
    link: /guide/webblog/home.md
    type: primary
features:
  - title: 🎯 体系化学习
    details: 从基础到进阶，构建完整的前端知识体系。HTML、CSS、JavaScript 到主流框架，一步步打造扎实的技术栈。
  - title: 💡 实践为主
    details: 注重实战演练，每个知识点都配有实例。在动手实践中加深理解，提升编程能力。
  - title: 🚀 持续更新
    details: 定期更新前端最新技术，及时跟进行业动态。包含面试题解析，助你在技术道路上更进一步。
footer: MIT Licensed | Copyright © 2024-present
---

<div class="custom-home-page">
  <div class="feature-section">
    <h2>🌈 最新更新</h2>
    <ul>
      <li>
        <span class="date">2024-03-20</span>
        <a href="/guide/webblog/javascript.md">JavaScript 高级特性解析</a>
      </li>
      <li>
        <span class="date">2024-03-18</span>
        <a href="/guide/webblog/vue.md">Vue3 组合式 API 最佳实践</a>
      </li>
      <li>
        <span class="date">2024-03-15</span>
        <a href="/guide/webblog/React.md">React Hooks 深入浅出</a>
      </li>
    </ul>
  </div>

  <div class="feature-section">
    <h2>🎯 学习路线</h2>
    <div class="roadmap">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>Web 基础</h3>
          <p>HTML5 / CSS3 / JavaScript</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>框架学习</h3>
          <p>Vue / React</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>工程化</h3>
          <p>Webpack / Vite</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.custom-home-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.feature-section {
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.feature-section h2 {
  margin-top: 0;
  border-bottom: 2px solid var(--c-brand);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.feature-section ul {
  list-style: none;
  padding: 0;
}

.feature-section li {
  margin: 1rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px dashed var(--c-border);
  display: flex;
  align-items: center;
}

.date {
  color: var(--c-text-lighter);
  margin-right: 1rem;
  font-size: 0.9em;
  min-width: 100px;
}

.roadmap {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}

.step {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
}

.step:hover {
  transform: translateY(-5px);
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--c-brand);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.step-content {
  flex: 1;
}

.step-content h3 {
  margin: 0;
  color: var(--c-text);
}

.step-content p {
  margin: 0.5rem 0 0;
  color: var(--c-text-lighter);
}

@media (max-width: 719px) {
  .roadmap {
    flex-direction: column;
    gap: 1rem;
  }
  
  .feature-section {
    padding: 1rem;
  }
  
  .step {
    width: 100%;
  }
}

/* 深色模式适配 */
.dark .feature-section {
  background: rgba(30, 30, 30, 0.8);
}
</style>
