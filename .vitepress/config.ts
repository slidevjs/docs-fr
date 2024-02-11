import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import vite from '../vite.config'

const CURRENT_VERSION = '0.47.1'

const Guide: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Pourquoi Slidev',
    link: '/guide/why',
  },
  {
    text: 'Commencer',
    link: '/guide/',
  },
  {
    text: 'Installation',
    link: '/guide/install',
  },
  {
    text: 'Syntaxe Markdown',
    link: '/guide/syntax',
  },
  {
    text: 'Navigation',
    link: '/guide/navigation',
  },
  {
    text: 'Animations',
    link: '/guide/animations',
  },
  {
    text: 'Exportation',
    link: '/guide/exporting',
  },
  {
    text: 'Hébergement statique',
    link: '/guide/hosting',
  },
  {
    text: 'Enregistrer la présentation',
    link: '/guide/recording',
  },
  {
    text: 'Mode présentateur',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Dessins & Annotations',
    link: '/guide/drawing',
  },
  {
    text: 'Intégrations de l\'éditeur',
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const BuiltIn: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Theme: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: 'Utiliser un thème',
    link: '/themes/use',
  },
  {
    text: 'Galerie de thèmes',
    link: '/themes/gallery',
  },
  {
    text: 'Écrire un thème',
    link: '/themes/write-a-theme',
  },
]

const Addon: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Utiliser un Addon',
    link: '/addons/use',
  },
  {
    text: 'Écrire un Addon',
    link: '/addons/write-an-addon',
  },
]

<<<<<<< HEAD:.vitepress/config.js
const Translations = [
  {
    text: 'Français',
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
  },
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
  },
]

const Customizations = [
=======
const Customizations: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
  {
    text: 'Personnalisations',
    link: '/custom/',
  },
  {
    text: 'Structure des répertoires',
    link: '/custom/directory-structure',
  },
  {
    text: 'Polices',
    link: '/custom/fonts',
  },
  {
    text: 'Surligneurs',
    link: '/custom/highlighters',
  },
  {
    text: 'Configurer Vue',
    link: '/custom/config-vue',
  },
  {
    text: 'Configurer Vite',
    link: '/custom/config-vite',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Configurer Windi CSS',
    link: '/custom/config-windicss',
=======
    text: 'Configure UnoCSS',
    link: '/custom/config-unocss',
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
  },
  {
    text: 'Configurer Monaco',
    link: '/custom/config-monaco',
  },
  {
    text: 'Configurer KaTeX',
    link: '/custom/config-katex',
  },
  {
    text: 'Configurer Mermaid',
    link: '/custom/config-mermaid',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Configurer les Raccourcis',
=======
    text: 'Configure Parser',
    link: '/custom/config-parser',
  },
  {
    text: 'Configure Shortcuts',
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Contexte Global Vue',
    link: '/custom/vue-context',
  },
  {
    text: 'Couches Globales',
    link: '/custom/global-layers',
  },
]

const Resources: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Vitrines',
    link: '/showcases',
  },
  {
    text: 'Ressources d\'apprentissage',
    link: '/resources/learning',
  },
  {
    text: 'Couvertures organisées',
    link: '/resources/covers',
  },
]

const slidebars: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guide',
    items: Guide,
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Thèmes',
    children: Theme,
=======
    text: 'Themes',
    items: Theme,
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
  },
  {
    text: 'Addons',
    items: Addon,
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Personnalisation',
    children: Customizations,
  },
  {
    text: 'Intégrations',
    children: [
      {
        text: 'Composants',
        link: '/builtin/components',
      },
      {
        text: 'Mises en page',
        link: '/builtin/layouts',
      },
    ],
=======
    text: 'Customizations',
    items: Customizations,
  },
  {
    text: 'Built-in',
    items: BuiltIn,
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
  },
]

export default defineConfig({
  title: 'Slidev',
  description: 'Diapositives de présentation pour les développeurs',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Presentation slides for developers' }],
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
      )
    },
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
  cleanUrls: true,
  themeConfig: {
<<<<<<< HEAD:.vitepress/config.js
    repo: 'slidevjs/docs-fr',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggérer un changement sur cette page',

    algolia: {
      apiKey: '1a5c5a504139c58f428974c78c55291d',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:fr']
      }
=======
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/slidevjs/docs/edit/main/:path',
      text: 'Suggest changes to this page',
    },

    search: {
      provider: 'local',
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
    },

    nav: [
      {
        text: 'Guide',
        items: Guide,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Thème',
        items: Theme,
      },
      {
        text: 'Addon',
        items: Addon,
      },
      {
        text: 'Personnaliser',
        items: Customizations,
=======
        text: 'Theme',
        items: [
          ...Theme,
          {
            text: 'Built-in',
            items: BuiltIn,
          },
        ],
      },
      {
        text: 'Customize',
        items: [
          ...Customizations,
          {
            text: 'Addon',
            items: Addon,
          },
        ],
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
      },
      {
        text: 'Ressources',
        items: Resources,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Français',
        items: Translations,
=======
        text: `v${CURRENT_VERSION}`,
        items: [
          { text: 'Release Notes', link: 'https://github.com/slidevjs/slidev/releases' },
        ],
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
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
      '/': slidebars,
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 Anthony Fu.',
    },
  },

  locales: {
    root: {
      label: 'English',
    },
    zh: {
      label: '简体中文',
      link: 'https://cn.sli.dev/',
    },
    fr: {
      label: 'Français',
      link: 'https://fr.sli.dev/',
    },
    es: {
      label: 'Español',
      link: 'https://es.sli.dev/',
    },
    ru: {
      label: 'Русский',
      link: 'https://ru.sli.dev/',
    },
    vn: {
      label: 'Việt Nam',
      link: 'https://vn.sli.dev/',
    },
    de: {
      label: 'Deutsch',
      link: 'https://de.sli.dev/',
    },
    br: {
      label: 'Português (BR)',
      link: 'https://br.sli.dev/',
    },
    el: {
      label: 'Ελληνικά',
      link: 'https://el.sli.dev/',
    },
    ja: {
      label: '日本語',
      link: 'https://ja.sli.dev/',
    },
  },
})
