import type { DefaultTheme } from 'vitepress'
import { fileURLToPath } from 'node:url'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { version } from '../package.json'
import Customizations from './customizations'
import { Advanced, BuiltIn, Guides, Resources } from './pages'
import { getSidebarObject } from './sidebar-gen'

export const slidebars: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guide',
    items: Guides,
  },
  {
    text: 'Avancé',
    items: Advanced,
  },
  {
    text: 'Personnalisations',
    items: Customizations,
  },
  {
    text: 'Intégré',
    items: BuiltIn,
  },
  {
    text: 'Ressources',
    items: Resources,
  },
]

export default defineConfig({
  title: 'Slidev',
  description: 'Diapositives de présentation pour développeurs',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Diapositives de présentation pour développeurs' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    async shikiSetup(shiki) {
      await shiki.loadLanguage(
        'html',
        'xml',
        'vue',
        'markdown',
        'mermaid',
        'latex',
      )
    },
    codeTransformers: [
      transformerTwoslash({
        twoslashOptions: {
          // The @slidev/* installed in docs package are very old and should only be used in the homepage demo
          vfsRoot: fileURLToPath(import.meta.url),
          compilerOptions: {
            resolveJsonModule: true,
            moduleResolution: /* Bundler */ 100,
          },
        },
      }),
    ],
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/slidevjs/slidev/edit/main/docs/:path',
      text: 'Suggérer des modifications sur cette page',
    },

    search: {
      provider: 'local',
    },

    nav: [
      {
        text: '📖 Guide',
        items: [
          ...Guides,
          {
            text: 'Avancé',
            items: Advanced,
          },
        ],
      },
      {
        text: '✨ Fonctionnalités',
        link: '/features/',
      },
      {
        text: 'Référence',
        items: [
          {
            text: 'Intégré',
            items: BuiltIn,
          },
          {
            text: 'Personnaliser',
            items: Customizations,
          },
        ],
      },
      {
        text: 'Ressources',
        items: Resources,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/slidevjs/slidev' },
      { icon: 'twitter', link: 'https://twitter.com/slidevjs' },
      { icon: 'discord', link: 'https://chat.sli.dev' },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      // eslint-disable-next-line antfu/no-top-level-await
      ...await getSidebarObject(),
      '/features/': [],
      '/': slidebars,
    },

    footer: {
      message: 'Publié sous la licence MIT.',
      copyright: 'Copyright © 2020-2025 Anthony Fu.',
    },
  },

  locales: {
    root: {
      label: `Français (v${version})`,
    },
    en: {
      label: 'English',
      link: 'https://sli.dev/',
    },
    zh: {
      label: '简体中文',
      link: 'https://cn.sli.dev/',
    },
    ja: {
      label: '日本語',
      link: 'https://ja.sli.dev/',
    },
  },
})
