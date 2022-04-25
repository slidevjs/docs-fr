// @ts-check

const Guide = [
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
<<<<<<< HEAD
    text: 'Enregistrer la présentation',
=======
    text: 'Static Hosting',
    link: '/guide/hosting',
  },
  {
    text: 'Record Presentation',
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
    link: '/guide/recording',
  },
  {
    text: 'Mode présentateur',
    link: '/guide/presenter-mode',
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    text: 'Intégrations de l\'éditeur',
=======
    text: 'Drawing & Annonations',
=======
    text: 'Drawing & Annotations',
>>>>>>> 030576270f137f7a9f12dda14c167d21a7eb432c
    link: '/guide/drawing',
  },
  {
    text: 'Editor Integrations',
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const Theme = [
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
    text: 'Configurer Windi CSS',
    link: '/custom/config-windicss',
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
    text: 'Configurer les Raccourcis',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Contexte Global Vue',
    link: '/custom/vue-context',
  },
  {
    text: 'Couches Globales',
    link: '/custom/global-layers',
  }
]

const Resources = [
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

const slidebars = [
  {
    text: 'Guide',
    children: Guide,
  },
  {
    text: 'Thèmes',
    children: Theme,
  },
  {
    text: 'Personnalisations',
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
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
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
  themeConfig: {
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
    },

    nav: [
      {
        text: 'Guide',
        items: Guide,
      },
      {
        text: 'Thème',
        items: Theme,
      },
      {
        text: 'Personnaliser',
        items: Customizations,
      },
      {
        text: 'Ressources',
        items: Resources,
      },
      {
        text: 'Français',
        items: Translations,
      },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
