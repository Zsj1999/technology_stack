<template>
  <nav class="navbar-items">
    <div v-for="item in navbarItems" :key="item.text" class="navbar-item">
      <DropdownLink v-if="item.children" :item="item" />
      <NavLink v-else :item="item" />
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouteLocale } from '@vuepress/client'
import { useNavbarItems } from '@vuepress/theme-default/lib/client/composables'
import DropdownLink from '@vuepress/theme-default/lib/client/components/DropdownLink.vue'
import NavLink from '@vuepress/theme-default/lib/client/components/NavLink.vue'

export default defineComponent({
  name: 'NavbarItems',
  components: {
    DropdownLink,
    NavLink
  },
  setup() {
    const routeLocale = useRouteLocale()
    const navbarItems = useNavbarItems()
    return {
      navbarItems
    }
  }
})
</script>

<style>
.navbar-items {
  display: flex;
  align-items: center;
}

.navbar-item {
  margin-left: 1.5rem;
}
</style> 