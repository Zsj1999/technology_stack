export const themeData = JSON.parse("{\"logo\":\"/images/logo.jpg\",\"home\":\"/\",\"navbar\":[{\"text\":\"🏠 首页\",\"link\":\"/\"},{\"text\":\"📖 前端开发笔记\",\"link\":\"/guide/webblog/home.md\"},{\"text\":\"📝 面试题\",\"link\":\"/guide/webblog/interview.md\"},{\"text\":\"🤖 AI工具\",\"link\":\"https://ixz.netlify.app/\"}],\"lastUpdated\":false,\"contributors\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
