import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/Minecraft.png" }]],
  base: "/wemc-wiki/",
  title: "WeMC-Wiki",
  themeConfig: {
    logo: '/Minecraft.png',
    lastUpdated: {
			text: '最后更新日期',
			formatOptions: {
				dateStyle: 'full',
				timeStyle: 'medium',
			},
		},
    outlineTitle: "本页目录",
    docFooter: { prev: '上一篇', next: '下一篇' },
    outline: [1, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
//      { text: '关于', link: '/about' }
    ],
    sidebar: [
      {
        text: '快速开始',
        collapsed: false,
        items: [
          { text: '小白无脑开服', link: '/start' },
          { text: '常见问题[必看]', link: '/notic'},
          { text: '进阶开服Ⅰ', link: '/more_1' },
          { text: '进阶开服Ⅱ', link: '/more_2'},
          { text: '进阶开服Ⅲ', link: '/more_3'},
        ],
      },
//      {
//        text: '指南',
//        collapsed: true,
//        items: [
//          { text: '安装', link: '/guide/installation' },
//          {
//            text: '配置',
//            items: [
//              { text: '优化配置', link: '/guide/configuration' },
//              { text: '顶级画质', link: '/guide/beautiful' },
//              { text: '好的材质', link: '/guide/good' },
//            ]
//          }
//        ],
//      },
//      {
//        text: '彩蛋',
//        collapsed: true,
//        items: [
//          {
//            text: '赠语',
//            items: [
//              { text: '腐竹赠语', link: '/fuck/owner' },
//              { text: '宣传赠语', link: '/fuck/helper' },
//              { text: '指导赠语', link: '/fuck/awa'},
//            ],
//          },
//        ],
//      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    footer: {
      copyright: 'Copyright © 2024 WeMC第三方Wiki'
    },
  }
})
