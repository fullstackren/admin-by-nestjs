import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/guide/': [
    {
      text: '文档指南',
      items: [
        { text: '内心要说的话', link: '/guide/index' },
        { text: '基础', collapsed: false, 
          items: [
            { text: '数据类型', link: '/guide/data-types' },
          ]
        }
      ]
    }
  ],
}
