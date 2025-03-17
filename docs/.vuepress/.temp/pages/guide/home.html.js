import comp from "/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/guide/home.html.vue"
const data = JSON.parse("{\"path\":\"/guide/home.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.jpg\",\"heroText\":\"前端开发笔记\",\"tagline\":\"记录学习，分享成长\",\"actions\":[{\"text\":\"开始阅读 →\",\"link\":\"/guide/README.md\",\"type\":\"primary\"}],\"features\":[{\"title\":\"🎯 体系化学习\",\"details\":\"从基础到进阶，构建完整的前端知识体系。HTML、CSS、JavaScript 到主流框架，一步步打造扎实的技术栈。\"},{\"title\":\"💡 实践为主\",\"details\":\"注重实战演练，每个知识点都配有实例。在动手实践中加深理解，提升编程能力。\"},{\"title\":\"🚀 持续更新\",\"details\":\"定期更新前端最新技术，及时跟进行业动态。包含面试题解析，助你在技术道路上更进一步。\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/home.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
