export const themeData = JSON.parse("{\"logo\":\"/logo.png\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\",\"activeMatch\":\"/zh/$\"},{\"text\":\"Reference\",\"children\":[{\"text\":\"VuePress Reference\",\"children\":[\"/reference/cli.md\",\"/reference/config.md\"]}]}],\"sidebar\":{\"/reference/\":[{\"text\":\"VuePress Reference\",\"collapsible\":true,\"children\":[\"/reference/cli.md\",\"/reference/config.md\"]}]}},\"/zh/\":{\"selectLanguageText\":\"语言\",\"selectLanguageName\":\"简体中文\",\"contributorsText\":\"贡献者\",\"lastUpdatedText\":\"最近更新时间\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/zh/\",\"activeMatch\":\"/zh/$\"},{\"text\":\"参考\",\"children\":[{\"text\":\"VuePress 参考\",\"children\":[\"/zh/reference/cli.md\",\"/zh/reference/config.md\"]}]}],\"sidebar\":{\"/zh/reference/\":[{\"text\":\"VuePress 参考\",\"collapsible\":true,\"children\":[\"/zh/reference/cli.md\",\"/zh/reference/config.md\"]}]}}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
