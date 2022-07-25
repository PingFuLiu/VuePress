export const data = JSON.parse("{\"key\":\"v-05cab828\",\"path\":\"/README%20copy.html\",\"title\":\"页面的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题\",\"description\":\"页面的描述\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"1.1\",\"slug\":\"_1-1\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README copy.md\"}")

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
