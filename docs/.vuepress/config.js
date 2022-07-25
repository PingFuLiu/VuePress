const { defaultTheme } = require('vuepress')
module.exports = {
  // 网站的一些基本配置
  // base:配置部署站点的基础路径，后续再介绍
  title: 'lpf', // 网站的标题
  description: 'lpf测试网页', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
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
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
        activeMatch:'/zh/$'
      },
      {
        text: 'Reference',
        link: '/reference/cli.md',
        activeMatch: '/reference/'
      },
    ],
    logo: '/logo.png',
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
      '/zh/reference/': [
        {
          text: 'VuePress Reference',
          collapsible: true,
          children: [
            {
              text: 'cli',
              link: '/zh/reference/cli.md'
            },
            {
              text: 'config',
              link: '/zh/reference/config.md'
            },
          ]
        }
      ],
    },
  }),
}