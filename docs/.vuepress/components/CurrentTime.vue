<template>
  <div class="time-display">
    <div class="time-content">
      <span class="time-icon">🕐</span>
      <span class="time-text">{{ currentTime }}</span>
    </div>
    <!-- <span class="time-label">当前时间</span> -->
  </div>
</template>

<script>
export default {
  name: 'CurrentTime',
  data() {
    return {
      currentTime: '',
      timer: null
    }
  },
  mounted() {
    this.updateTime()
    this.timer = setInterval(this.updateTime, 1000)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    updateTime() {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      this.currentTime = `${hours}:${minutes}:${seconds}`
    }
  }
}
</script>

<style>
.time-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.time-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
}

.time-icon {
  font-size: 1.2rem;
}

.time-text {
  font-family: monospace;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--c-text);
  min-width: 85px;
  text-align: center;
}

.time-label {
  font-size: 0.9rem;
  color: #666;
}

/* 深色模式适配 */
.dark .time-content {
  background: rgba(30, 30, 30, 0.8);
}

.dark .time-label {
  color: #888;
}
</style> 