import comp from "/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/guide/webblog/PersonalProfile.html.vue"
const data = JSON.parse("{\"path\":\"/guide/webblog/PersonalProfile.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/webblog/PersonalProfile.md\"}")
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
