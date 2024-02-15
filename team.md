<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'ysy.jpg',
    name: 'YSY',
    title: '腐竹',
    links: [
      { icon: 'github', link: 'https://github.com/minecarft-ysy' },
      { icon:  {
        svg: '<svg t="1707905132927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8315" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="8316"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="8317"></path></svg>'},
        link: 'mailto:ysyerror@outlook.com' }
    ]
  },
  {
    avatar: 'lhx0126.jpg',
    name: 'LHX0126',
    title: '腐竹',
    links: [
      { icon: 'github', link: '#' },
      { icon:  {
        svg: '<svg t="1707905132927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8315" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="8316"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="8317"></path></svg>'},
        link: 'mailto:lhx20090126@outlook.com' }
    ]
  },
  {
    avatar: 'enders.jpg',
    name: 'Enders',
    title: '副腐竹',
    links: [
      { icon: 'github', link: '#' },
      { icon: {
        svg: '<svg t="1707905132927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8315" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="8316"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="8317"></path></svg>'},
      link: '#' }
    ]
  },
  {
    avatar: 'zszf.jpg',
    name: 'zszf',
    title: '技术',
    links: [
      { icon: 'github', link: 'https://github.com/zszfympx' },
      { icon: {
        svg: '<svg t="1707905132927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8315" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="8316"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="8317"></path></svg>'},
      link: 'mailto:zszfympx@gmail.com'
      }
    ]
  },
  {
    avatar: '芃.jpg',
    name: '芃',
    title: '技术',
    links: [
      { icon: 'github', link: '#' },
      { icon:  {
        svg: '<svg t="1707905132927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8315" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="8316"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="8317"></path></svg>'},
        link: '#' }
    ]
  },
  {
    avatar: 'NUFK_TLM.jpg',
    name: 'NUFK_TLM',
    title: '宣传',
    links: [
      { icon: 'github', link: '#' },
      { icon:  {
        svg: '<svg t="1707905132927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8315" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="8316"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="8317"></path></svg>'},
        link: 'mailto:nufk_tlm@163.com' }
    ]
  },
  {
    avatar: 'huyuanhang.jpg',
    name: 'huyuanhang',
    title: '宣传',
    links: [
      { icon: 'github', link: '#' },
      { icon:  {
        svg: '<svg t="1707905132927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8315" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="8316"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="8317"></path></svg>'},
        link: '#' }
    ]
  },
  {
    avatar: 'TIANHAN.jpg',
    name: 'TIANHAN',
    title: '宣传',
    links: [
      { icon: 'github', link: '#' },
      { icon:  {
        svg: '<svg t="1707905132927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8315" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="8316"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="8317"></path></svg>'},
        link: 'mailto:960993167@qq.com' }
    ]
  },
  {
    avatar: 'dj_azO9.jpg',
    name: 'dj_azO9',
    title: '宣传',
    links: [
      { icon: 'github', link: '#' },
      { icon:  {
        svg: '<svg t="1707905132927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8315" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="8316"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="8317"></path></svg>'},
        link: '#' }
    ]
  },
  {
    avatar: 'suyeku.jpg',
    name: 'suyeku',
    title: '指导',
    links: [
      { icon: 'github', link: 'https://github.com/suyekun' },
      { icon:  {
        svg: '<svg t="1707905132927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8315" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="8316"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="8317"></path></svg>'},
        link: 'mailto:2944518176@qq.com' }
    ]
  },
  {
    avatar: 'fantang.jpg',
    name: 'fantang',
    title: '指导',
    links: [
      { icon: 'github', link: '#' },
      { icon:  {
        svg: '<svg t="1707905132927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8315" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="8316"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="8317"></path></svg>'},
        link: '#' }
    ]
  },
]
</script>

# 我们的团队

**FTCraft Minecraft**~~摆烂の~~**开发组**

<VPTeamMembers size="small" :members="members" />

::: tip 浅浅的提示一下
FTCraft招收新人，但是所有收入用于维护项目开发和运行，也就是说没有工资。
:::