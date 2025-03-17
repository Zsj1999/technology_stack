export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/webblog/PersonalProfile.html", { loader: () => import(/* webpackChunkName: "guide_webblog_PersonalProfile.html" */"/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/guide/webblog/PersonalProfile.html.js"), meta: {"title":""} }],
  ["/guide/webblog/React.html", { loader: () => import(/* webpackChunkName: "guide_webblog_React.html" */"/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/guide/webblog/React.html.js"), meta: {"title":"React 完全指南"} }],
  ["/guide/webblog/css.html", { loader: () => import(/* webpackChunkName: "guide_webblog_css.html" */"/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/guide/webblog/css.html.js"), meta: {"title":"CSS3 完整参考手册"} }],
  ["/guide/webblog/home.html", { loader: () => import(/* webpackChunkName: "guide_webblog_home.html" */"/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/guide/webblog/home.html.js"), meta: {"title":"前端开发笔记"} }],
  ["/guide/webblog/html.html", { loader: () => import(/* webpackChunkName: "guide_webblog_html.html" */"/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/guide/webblog/html.html.js"), meta: {"title":"HTML 完整指南"} }],
  ["/guide/webblog/interview.html", { loader: () => import(/* webpackChunkName: "guide_webblog_interview.html" */"/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/guide/webblog/interview.html.js"), meta: {"title":"前端开发面试题集"} }],
  ["/guide/webblog/javascript.html", { loader: () => import(/* webpackChunkName: "guide_webblog_javascript.html" */"/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/guide/webblog/javascript.html.js"), meta: {"title":"JavaScript 完全指南"} }],
  ["/guide/webblog/vue.html", { loader: () => import(/* webpackChunkName: "guide_webblog_vue.html" */"/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/guide/webblog/vue.html.js"), meta: {"title":"Vue 2 指南"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/mac/ZSJ/zhou/my-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
