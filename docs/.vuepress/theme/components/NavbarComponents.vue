<template>
  <div class="navbar-components">
    <component
      v-for="(comp, name) in components"
      :key="name"
      :is="comp.component"
      v-bind="comp.props"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CityWeather from '../../components/CityWeather.vue'

export default defineComponent({
  name: 'NavbarComponents',
  components: {
    CityWeather
  },
  computed: {
    components() {
      return this.$site.themeConfig.navbarComponents || {}
    }
  }
})
</script>

<style>
.navbar-components {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style> 