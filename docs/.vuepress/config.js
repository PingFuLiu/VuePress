const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
const { navbarEn, navbarZh, sidebarEn, sidebarZh } = require('./configs')

module.exports = {
  // favicon
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  // 多语言
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress 中文',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  // 主题
  theme: defaultTheme({
    logo: '/logo.png',
    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: navbarEn,
        sidebar: sidebarEn,
      },
      '/zh/': {
        selectLanguageText: '语言',
        selectLanguageName: '简体中文',
        contributorsText: '贡献者',
        lastUpdatedText: '最近更新时间',
        navbar: navbarZh,
        sidebar: sidebarZh,
      }
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
  ],
}