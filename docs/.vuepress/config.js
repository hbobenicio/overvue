module.exports = {
  base: process.env.BASE_URL || '',
  
  title: 'Overvue',
  description: 'Um Overview sobre o Vue',

  themeConfig: {
    search: false,
    nav: [
      { text: 'Página Inicial', link: '/' },
      { text: 'Apresentação', link: '/apresentacao/' }
    ]
  }
}
