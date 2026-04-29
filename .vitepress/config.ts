import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

const CURRENT_VERSION = '0.48.0-beta.22'

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
    text: 'Éléments déplaçables',
    link: '/guide/draggable',
  },
  {
    text: 'Mode présentateur',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Aperçu des diapositives',
    link: '/guide/overview',
  },
  {
    text: 'Dessins & Annotations',
    link: '/guide/drawing',
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
    text: 'Composants',
    link: '/builtin/components',
  },
  {
    text: 'Mises en page',
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

const Customizations: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
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
    text: 'Configurer UnoCSS',
    link: '/custom/config-unocss',
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
    text: 'Configurer le Parser',
    link: '/custom/config-parser',
  },
  {
    text: 'Configurer les Routes',
    link: '/custom/config-routes',
  },
  {
    text: 'Configurer les Raccourcis',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Configurer le Menu Contextuel',
    link: '/custom/config-context-menu',
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
    text: 'Thèmes',
    items: Theme,
  },
  {
    text: 'Addons',
    items: Addon,
  },
  {
    text: 'Personnalisation',
    items: Customizations,
  },
  {
    text: 'Intégrations',
    items: BuiltIn,
  },
  {
    text: 'Ressources',
    items: Resources,
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
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/slidevjs/slidev/edit/main/docs/:path',
      text: 'Suggérer un changement sur cette page',
    },

    search: {
      provider: 'local',
    },

    nav: [
      {
        text: 'Guide',
        items: Guide,
      },
      {
        text: 'Thème',
        items: [
          ...Theme,
          {
            text: 'Intégrations',
            items: BuiltIn,
          },
        ],
      },
      {
        text: 'Personnaliser',
        items: [
          ...Customizations,
          {
            text: 'Addon',
            items: Addon,
          },
        ],
      },
      {
        text: 'Ressources',
        items: Resources,
      },
      {
        text: `v${CURRENT_VERSION}`,
        items: [
          { text: 'Notes de version', link: 'https://github.com/slidevjs/slidev/releases' },
        ],
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
      message: 'Publié sous la licence MIT.',
      copyright: 'Copyright © 2020 Anthony Fu.',
    },
  },

  locales: {
    root: {
      label: 'Français',
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
