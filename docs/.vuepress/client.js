import { defineClientConfig } from '@vuepress/client'
import CurrentTime from './components/CurrentTime.vue'

export default defineClientConfig({
  enhance({ app, router }) {
    app.component('CurrentTime', CurrentTime)
    router.beforeEach((to) => {
      // 修改这里的重定向路径
      if (to.path === '/blog/') {
        return '/blog/guide/README.html'  // 改为你想要的默认页面
      }
    })
  },
}) 