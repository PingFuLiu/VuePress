const navbarZh = [
  {
    text: '首页',
    link: '/zh/',
    activeMatch:'/zh/$'
  },
  {
    text: '参考',
    children: [
      {
        text: 'Markdown 参考',
        children: [
          '/zh/reference/cli.md',
          '/zh/reference/config.md'
        ],
      },
    ],
  },
]

module.exports = navbarZh
