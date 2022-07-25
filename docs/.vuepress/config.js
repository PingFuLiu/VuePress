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
            link: '/reference/cli.md',
            activeMatch: '/reference/'
          },
        ],
        sidebar: {
          '/reference/': [
            {
              text: 'VuePress Reference',
              collapsible: true,
              children: [
                {
                  text: 'cli',
                  link: '/reference/cli.md'
                },
                {
                  text: 'config',
                  link: '/reference/config.md'
                },
              ]
            }
          ],
        }
      },
      '/zh/': {
        selectLanguageText: '语言',
        selectLanguageName: '简体中文',
        navbar: [
          {
            text: '首页',
            link: '/',
            activeMatch:'/zh/$'
          },
          {
            text: '参考',
            link: '/reference/cli.md',
            activeMatch: '/reference/'
          },
        ],
        sidebar: {
          '/zh/reference/': [
            {
              text: 'VuePress 参考',
              collapsible: true,
              children: [
                {
                  text: '命令行',
                  link: '/zh/reference/cli.md'
                },
                {
                  text: '配置',
                  link: '/zh/reference/config.md'
                },
              ]
            }
          ],
        }
      },
    },
  }),
}