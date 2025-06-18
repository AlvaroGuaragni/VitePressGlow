import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Glow Salão de Beleza',
  description: 'Documentação do Sistema de Gestão para Salões de Beleza',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentação', link: '/1-introducao' }
    ],
    sidebar: [
      {
        text: 'Documento de Visão',
        items: [
          { text: '1. Introdução', link: '/1-introducao' },
          { text: '2. Descrição do Projeto', link: '/2-descricao' },
          { text: '3. Recursos e Funcionalidades', link: '/3-recursos' },
          { text: '4. Diagramas', link: '/4-diagramas' },
          { text: '5. Protótipos', link: '/5-prototipos' },
          { text: '6. Cronograma', link: '/6-cronograma' },
          { text: '7. Riscos e Mitigação', link: '/7-riscos' },
          { text: '8. Custos e Orçamento', link: '/8-custos' },
          { text: '9. Considerações Finais', link: '/9-consideracoes' }
        ]
      }
    ]
  }
})