import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/Minecraft.png" }]],
  base: "/ftcraft/",
  title: "FTCraft | Minecraft",
  description: "彻底摆烂~",
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
    outline: [2, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: [
      {
        text: '简介',
        collapsed: true,
        items: [
          { text: '关于', link: '/about' },
          { text: '历史', link: '/history' },
          { text: '团队', link: '/team'},
          { text: '计划', link: '/plan'},
        ],
      },
      {
        text: '指南',
        collapsed: true,
        items: [
          { text: '安装', link: '/guide/installation' },
          {
            text: '下载',
            items: [
            { text: '客户端下载', link: '/guide/download' },
            ]
          }
        ],
      },
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
      copyright: 'Copyright © 2024 FTCraft Team'
    },
  }
})