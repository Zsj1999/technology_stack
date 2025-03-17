import comp from "/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/guide/webblog/home.html.vue"
const data = JSON.parse("{\"path\":\"/guide/webblog/home.html\",\"title\":\"前端开发笔记\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"前端开发笔记\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/webblog/home.md\"}")
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
