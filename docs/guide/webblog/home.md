---
title: 前端开发笔记
---

<div class="profile-container">
  <div class="profile-header">
    <div class="avatar-section">
      <RouterLink to="/guide/README.md" class="avatar-link">
        <img class="avatar" src="/images/logo.jpg" alt="头像">
      </RouterLink>
      <CurrentTime />
    </div>
    <div class="profile-info">
      <RouterLink to="/guide/README.md" class="title-link">
        <h1>
          <span class="title-icon">📖</span>
          前端开发笔记
        </h1>
      </RouterLink>
      <p class="subtitle">把梦想种进生活，用汗水浇灌，等待花开满路。</p>
      <p class="english-quote">Be yourself the happiest</p>
      <div class="stats">
        <div class="stat-group">
          <div class="stat-item">
            <span class="stat-icon">📚</span>
            <span class="stat-value">100+</span>
            <span class="stat-label">笔记</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon">👥</span>
            <span class="stat-value">1000+</span>
            <span class="stat-label">访问</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="tech-container">
    <h2 class="section-title">技术栈</h2>
    <div class="tech-list">
      <div class="tech-item" @click="navigateTo('/guide/webblog/html.md')">
        <div class="tech-icon-wrapper">
          <span class="tech-icon">🌐</span>
        </div>
        <div class="tech-content">
          <span class="tech-name">HTML</span>
          <span class="tech-desc">Web的骨架</span>
        </div>
      </div>
      <div class="tech-item" @click="navigateTo('/guide/webblog/css.md')">
        <div class="tech-icon-wrapper">
          <span class="tech-icon">🎨</span>
        </div>
        <div class="tech-content">
          <span class="tech-name">CSS</span>
          <span class="tech-desc">网页的外观</span>
        </div>
      </div>
      <div class="tech-item" @click="navigateTo('/guide/webblog/javascript.md')">
        <div class="tech-icon-wrapper">
          <span class="tech-icon">⚡</span>
        </div>
        <div class="tech-content">
          <span class="tech-name">JavaScript</span>
          <span class="tech-desc">网页的行为</span>
        </div>
      </div>
      <div class="tech-item" @click="navigateTo('/guide/webblog/React.md')">
        <div class="tech-icon-wrapper">
          <span class="tech-icon">⚛️</span>
        </div>
        <div class="tech-content">
          <span class="tech-name">React</span>
          <span class="tech-desc">UI框架</span>
        </div>
      </div>
      <div class="tech-item" @click="navigateTo('/guide/webblog/vue.md')">
        <div class="tech-icon-wrapper">
          <span class="tech-icon">🖖</span>
        </div>
        <div class="tech-content">
          <span class="tech-name">Vue</span>
          <span class="tech-desc">渐进式框架</span>
        </div>
      </div>
      <div class="tech-item" @click="navigateTo('/guide/webblog/interview.md')">
        <div class="tech-icon-wrapper">
          <span class="tech-icon">📝</span>
        </div>
        <div class="tech-content">
          <span class="tech-name">面试题</span>
          <span class="tech-desc">知识总结</span>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-quote">
    <div class="quote-content">
      <span class="quote-mark left">"</span>
      <p class="quote-text">
        学习的道路上没有捷径
        <span class="highlight">只有不断的积累和实践</span>
      </p>
      <span class="quote-mark right">"</span>
    </div>
  </div>
</div>

<style>
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.avatar-link {
  display: block;
  transition: transform 0.3s ease;
  text-decoration: none;
}

.avatar-link:hover {
  transform: scale(1.05);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title-link {
  text-decoration: none;
  color: inherit;
}

.profile-info {
  flex: 1;
}

.profile-info h1 {
  margin: 0;
  font-size: 2.5rem;
  background: linear-gradient(120deg, #3eaf7c, #2c3e50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.title-icon {
  font-size: 2.2rem;
  -webkit-text-fill-color: initial;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
}

.title-link:hover .title-icon {
  transform: rotate(-5deg);
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0;
}

.english-quote {
  font-size: 1rem;
  color: #999;
  font-style: italic;
  margin: 0.5rem 0;
}

.tech-container {
  margin: 4rem 0;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 3rem 0 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--c-brand);
  display: inline-block;
}

.tech-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.tech-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.tech-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.tech-item:hover::before {
  transform: translateX(100%);
}

.tech-icon-wrapper {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(62, 175, 124, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.tech-item:hover .tech-icon-wrapper {
  transform: scale(1.1);
  background: rgba(62, 175, 124, 0.2);
}

.tech-icon {
  font-size: 1.8rem;
}

.tech-content {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.tech-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--c-text);
}

.tech-desc {
  font-size: 0.9rem;
  color: #666;
  opacity: 0.9;
}

/* 深色模式适配 */
.dark .tech-item {
  background: rgba(30, 30, 30, 0.8);
}

.dark .tech-desc {
  color: #888;
}

/* 移动端适配 */
@media (max-width: 719px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .profile-info h1 {
    font-size: 2rem;
  }

  .tech-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .tech-item {
    padding: 1.2rem;
  }

  .tech-icon-wrapper {
    width: 40px;
    height: 40px;
  }

  .tech-icon {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
    margin: 2rem 0 1.5rem;
  }

  .stats {
    justify-content: center;
  }
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.stat-group {
  display: flex;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.stat-icon {
  font-size: 1.2rem;
}

.stat-value {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--c-brand);
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

/* 深色模式适配 */
.dark .stat-label {
  color: #888;
}

/* 引用部分样式美化 */
.footer-quote {
  margin: 4rem 0 2rem;
  padding: 2rem;
  text-align: center;
  position: relative;
}

.quote-content {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
}

.quote-mark {
  font-size: 4rem;
  font-family: "Times New Roman", serif;
  color: var(--c-brand);
  opacity: 0.2;
  position: absolute;
  line-height: 1;
}

.quote-mark.left {
  top: -1rem;
  left: 1rem;
}

.quote-mark.right {
  bottom: -2rem;
  right: 1rem;
}

.quote-text {
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--c-text);
  margin: 0;
  font-weight: 300;
  letter-spacing: 1px;
}

.quote-text .highlight {
  display: block;
  margin-top: 0.5rem;
  color: var(--c-brand);
  font-weight: 500;
  background: linear-gradient(120deg, var(--c-brand) 0%, var(--c-brand-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 2s infinite;
}

@keyframes shine {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 深色模式适配 */
.dark .quote-content {
  background: rgba(30, 30, 30, 0.8);
}

/* 移动端适配 */
@media (max-width: 719px) {
  .footer-quote {
    padding: 1rem;
  }
  
  .quote-content {
    padding: 1.5rem;
  }
  
  .quote-text {
    font-size: 1.2rem;
  }
  
  .quote-mark {
    font-size: 3rem;
  }
}
</style>

<script>
export default {
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    }
  }
}
</script> 