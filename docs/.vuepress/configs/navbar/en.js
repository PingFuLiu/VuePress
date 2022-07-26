const navbarEn = [
  {
    text: 'Home',
    link: '/',
    activeMatch:'/zh/$'
  },
  {
    text: 'Reference',
    children: [
      {
        text: 'Markdown Reference',
        children: [
          '/reference/cli.md',
          '/reference/config.md'
        ],
      },
    ],
  },
]

module.exports = navbarEn
