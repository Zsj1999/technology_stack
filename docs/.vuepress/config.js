import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  bundler: viteBundler(),
  title: '前端开发笔记',
  description: '前端开发学习笔记和面试题整理',
  head: [['link', { rel: 'icon', href: '/images/logo.jpg' }]],
  plugins: [
    searchPlugin()
  ],
  notFound: '/',
  defaultURL: '/',
  theme: defaultTheme({
    logo: '/images/logo.jpg',
    home: '/',
    navbar: [
      {
        text: '🏠 首页',
        link: '/',
      },
      {
        text: '📖 前端开发笔记',
        link: '/guide/webblog/home.md',
      },
    
      // {
      //   text: '📚 学习笔记',
      //   children: [
      //     { text: '🌐 HTML', link: '/guide/webblog/html.md' },
      //     { text: '🎨 CSS', link: '/guide/webblog/css.md' },
      //     { text: '⚡ JavaScript', link: '/guide/webblog/javascript.md' },
      //     { text: '⚛️ React', link: '/guide/webblog/React.md' },
      //     { text: '🖖 Vue', link: '/guide/webblog/vue.md' }
      //   ]
      // },
      {
        text: '📝 面试题',
        link: '/guide/webblog/interview.md'
      },
      {
        text: '🤖 AI工具',
        link: 'https://ixz.netlify.app/'
      }
    ],
    lastUpdated: false,
    contributors: false
  }),
  alias: {
    '@theme/Layout.vue': path.resolve(__dirname, './theme/layouts/Layout.vue'),
    '@theme/Navbar.vue': path.resolve(__dirname, './theme/components/Navbar.vue'),
    '@theme/NavbarItems.vue': path.resolve(__dirname, './theme/components/NavbarItems.vue')
  },
  base: '/blog/'
})