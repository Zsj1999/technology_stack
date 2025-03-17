<template>
  <div class="theme-container">
    <!-- 动画背景 -->
    <div class="animated-bg">
      <div class="gradient-bg"></div>
      <div class="floating-shapes">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <ParentLayout>
      <template #navbar>
        <Navbar @toggle-sidebar="$emit('toggle-sidebar')" />
      </template>
    </ParentLayout>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Navbar from '../components/Navbar.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    ParentLayout,
    Navbar
  }
})
</script>

<style>
/* 重置基础样式 */
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

/* 动画背景 */
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.gradient-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #f3f5f7 0%, #ffffff 100%);
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-shapes span {
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  background: rgba(62, 175, 124, 0.1);
  border: 2px solid rgba(62, 175, 124, 0.3);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

/* 浮动形状位置 */
.floating-shapes span:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
}

.floating-shapes span:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.floating-shapes span:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.floating-shapes span:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-duration: 18s;
}

.floating-shapes span:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
}

.floating-shapes span:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

/* 内容区域样式 */
.theme-container {
  position: relative;
  z-index: 1;
  background: transparent !important;
}

.page {
  background: transparent !important;
  padding: 0 2rem;
}

.theme-default-content {
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem !important;
  margin: 1rem auto !important;
}

/* 导航和侧边栏 */
.navbar,
.sidebar {
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

/* 首页样式 */
.home {
  background: transparent !important;
  padding: 2rem !important;
}

.home .hero,
.home .features,
.home .footer {
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem 0;
}

/* 深色模式 */
.dark .theme-default-content,
.dark .home .hero,
.dark .home .features,
.dark .home .footer {
  background: rgba(30, 30, 30, 0.8) !important;
}

.dark .navbar,
.dark .sidebar {
  background: rgba(30, 30, 30, 0.9) !important;
}

/* 代码块和表格 */
.theme-default-content pre,
.theme-default-content code,
.theme-default-content table {
  background: rgba(255, 255, 255, 0.95) !important;
}

.dark .theme-default-content pre,
.dark .theme-default-content code,
.dark .theme-default-content table {
  background: rgba(0, 0, 0, 0.3) !important;
}

/* 移动端适配 */
@media (max-width: 719px) {
  .page {
    padding: 0 1rem;
  }
  
  .theme-default-content,
  .home {
    padding: 1rem !important;
  }
}
</style> 