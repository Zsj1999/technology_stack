<template>
  <header class="navbar">
    <div class="navbar-left">
      <RouterLink :to="$site.base" class="home-link">
        <img
          v-if="$site.themeConfig.logo"
          class="logo"
          :src="withBase($site.themeConfig.logo)"
          :alt="$site.title"
        >
      </RouterLink>
      <NavbarItems />
    </div>

    <div class="navbar-right">
      <NavbarSearch />
      <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />
    </div>
  </header>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { withBase } from '@vuepress/client'
import NavbarItems from '@vuepress/theme-default/lib/client/components/NavbarItems.vue'
import NavbarSearch from '@vuepress/theme-default/lib/client/components/NavbarSearch.vue'
import ToggleSidebarButton from '@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    NavbarItems,
    NavbarSearch,
    ToggleSidebarButton
  },
  setup() {
    onMounted(() => {
      console.log('Navbar mounted, CityWeather should be visible')
    })
    return {
      withBase
    }
  }
})
</script>

<style>
.navbar {
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--c-border);
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* 天气组件容器样式 */
.nav-weather-wrapper {
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  /* 添加边框使其可见 */
  border: 1px solid red;
  padding: 4px;
}

/* 响应式调整 */
@media (max-width: 719px) {
  .navbar-links {
    display: none;
  }
  
  /* 在小屏幕上隐藏部分天气信息 */
  .nav-weather-wrapper :deep(.weather-detail),
  .nav-weather-wrapper :deep(.weather-text),
  .nav-weather-wrapper :deep(.divider:last-of-type) {
    display: none;
  }
  
  .nav-weather-wrapper {
    margin-right: 3.6rem;
  }
}

/* 在更小的屏幕上进一步简化显示 */
@media (max-width: 419px) {
  .nav-weather-wrapper :deep(.city-name) {
    max-width: 60px;
  }
}
</style> 