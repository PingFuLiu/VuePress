const { defaultTheme } = require('vuepress')
module.exports = {
  // 网站的一些基本配置
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
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
  theme: defaultTheme({
    logo: '/logo.png',
    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: [
          {
            text: 'Home',
            link: '/',
            activeMatch:'/zh/$'
          },
          {
            text: 'Reference',
            children: [
              {
                text: 'VuePress Reference',
                children: [
                  '/reference/cli.md',
                  '/reference/config.md'
                ],
              },
            ],
          },
        ],
        sidebar: {
          '/reference/': [
            {
              text: 'VuePress Reference',
              collapsible: true,
              children: [
                '/reference/cli.md',
                '/reference/config.md'
              ]
            }
          ],
        }
      },
      '/zh/': {
        selectLanguageText: '语言',
        selectLanguageName: '简体中文',
        contributorsText: '贡献者',
        lastUpdatedText: '最近更新时间',
        navbar: [
          {
            text: '首页',
            link: '/zh/',
            activeMatch:'/zh/$'
          },
          {
            text: '参考',
            children: [
              {
                text: 'VuePress 参考',
                children: [
                  '/zh/reference/cli.md',
                  '/zh/reference/config.md'
                ],
              },
            ],
          },
        ],
        sidebar: {
          '/zh/reference/': [
            {
              text: 'VuePress 参考',
              collapsible: true,
              children: [
                '/zh/reference/cli.md',
                '/zh/reference/config.md'
              ]
            }
          ],
        }
      },
    },
  }),
}