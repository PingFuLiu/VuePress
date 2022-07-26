export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo.png\",\"actions\":[{\"text\":\"Quick Start Guide →\",\"link\":\"/reference/cli.md\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Simple is Best\",\"details\":\"Markdown-centric project structure helps you focus on writing with minimal configuration.\"},{\"title\":\"Vue Drive\",\"details\":\"Enjoy the development experience of Vue + Webpack, use Vue components in Markdown, and develop custom themes using Vue.\"},{\"title\":\"High Performance\",\"details\":\"VuePress pre-renders static HTML for each page, and as VuePress pre-renders static HTML for each page when the page is loaded, and runs as SPA when the page is loaded.\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present Mr Liu\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1658730306000,\"contributors\":[{\"name\":\"liupingfu\",\"email\":\"liupf09@chinatelecom.cn\",\"commits\":4}]},\"filePathRelative\":\"README.md\"}")

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
