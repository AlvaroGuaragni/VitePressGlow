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
          { text: '4. Diagrama Casos De Uso', link: '/4-diagramas' },
          { text: '5. Diagrama de classe', link: '/5-diagramadeclasse' },
          { text: '6. Protótipo', link: '/6-prototipos' },
          { text: '7. Cronograma e Entrega', link: '/7-cronograma' },
          { text: '8. Riscos E mitigação', link: '/8-riscos' },
          { text: '9. Custos E Orçamento', link: '/9-custos' },
          { text: '10. Considerações Finais', link: '/10-consideracoes' }
        ]
      }
    ]
  }
})