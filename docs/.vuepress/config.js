module.exports = {
  base: process.env.BASE_URL || '',
  
  title: 'Overvue',
  description: 'Um Overview sobre o Vue',

  themeConfig: {
    search: false,
    nav: [
      { text: 'Página Inicial', link: '/' },
      { text: 'Apresentação', link: '/o-que-eh-vue/' },
      { text: 'GitHub', link: 'https://github.com/hbobenicio/overvue' }
    ],

    sidebar: [
      '/',
      {
        title: 'Overvue',
        collapsable: false,
        children: [
          '/o-que-eh-vue/',
          '/funcionalidades/',
          '/ecossistema/',
        ]
      },
      {
        title: 'Conclusão',
        collapsable: false,
        children: [
          '/conclusao/pontos-fortes/',
          '/conclusao/pontos-fracos/',
          '/conclusao/resumo/'
        ]
      },
      '/saiba-mais/'
    ]
  }
}
