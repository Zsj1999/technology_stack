export const siteData = JSON.parse("{\"base\":\"/blog/\",\"lang\":\"en-US\",\"title\":\"前端开发笔记\",\"description\":\"前端开发学习笔记和面试题整理\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/logo.jpg\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
