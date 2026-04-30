export interface ThemeInfo {
  id: string
  name: string
  description: string
  previews: string[]
  repo?: string
  author?: {
    name: string
    link?: string
  }
  link?: string
  tags?: string[]
}

export const official: ThemeInfo[] = [
  {
    id: '@slidev/theme-default',
    name: 'Default',
    description: 'Le thème minimaliste par défaut de Slidev',
    author: {
      name: 'Anthony Fu',
      link: 'https://github.com/antfu',
    },
    repo: 'https://github.com/slidevjs/themes/tree/main/packages/theme-default',
    previews: [
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-default/01.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-default/02.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-default/06.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-default/08.png',
    ],
    tags: [
      'official',
      'minimalism',
      'dark',
      'light',
    ],
  },
  {
    id: '@slidev/theme-seriph',
    name: 'Seriph',
    description: 'Un thème plus formel utilisant des polices Serif',
    author: {
      name: 'Anthony Fu',
      link: 'https://github.com/antfu',
    },
    repo: 'https://github.com/slidevjs/themes/tree/main/packages/theme-seriph',
    previews: [
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-seriph/01.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-seriph/02.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-seriph/03.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-seriph/08.png',
    ],
    tags: [
      'official',
      'minimalism',
      'dark',
      'light',
    ],
  },
  {
    id: '@slidev/theme-apple-basic',
    name: 'Apple Basic',
    description: 'Inspiré du thème Basic Black/White d\'Apple Keynote',
    author: {
      name: 'Jeremy Meissner',
      link: 'https://github.com/JeremyMeissner',
    },
    repo: 'https://github.com/slidevjs/themes/tree/main/packages/theme-apple-basic',
    previews: [
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-apple-basic/01.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-apple-basic/02.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-apple-basic/03.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-apple-basic/09.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-apple-basic/11.png',
    ],
    tags: [
      'minimalism',
      'dark',
      'light',
    ],
  },
  {
    id: '@slidev/theme-bricks',
    name: 'Bricks',
    description: 'Briques de construction',
    author: {
      name: 'iiiiiiinès',
      link: 'https://github.com/iiiiiiines',
    },
    repo: 'https://github.com/slidevjs/themes/tree/main/packages/theme-bricks',
    previews: [
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-bricks/01.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-bricks/04.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-bricks/06.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-bricks/05.png',
    ],
    tags: [
      'light',
    ],
  },
  {
    id: '@slidev/theme-shibainu',
    name: 'Shibainu',
    description: 'Miaou !',
    author: {
      name: 'iiiiiiinès',
      link: 'https://github.com/iiiiiiines',
    },
    repo: 'https://github.com/slidevjs/themes/tree/main/packages/theme-shibainu',
    previews: [
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-shibainu/01.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-shibainu/03.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-shibainu/04.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-shibainu/09.png',
    ],
    tags: [
      'dark',
    ],
  },
]

// Please add your theme to the end of the list.
export const community: ThemeInfo[] = [
  {
    id: 'slidev-theme-geist',
    name: 'Vercel',
    description: 'Un thème basé sur le système de design de Vercel.',
    author: {
      name: 'Nico Bachner',
      link: 'https://github.com/nico-bachner',
    },
    repo: 'https://github.com/nico-bachner/slidev-theme-geist',
    previews: [
      'https://cdn.jsdelivr.net/gh/nico-bachner/slidev-theme-geist@main/example-export/01.png',
      'https://cdn.jsdelivr.net/gh/nico-bachner/slidev-theme-geist@main/example-export/02.png',
      'https://cdn.jsdelivr.net/gh/nico-bachner/slidev-theme-geist@main/example-export/03.png',
      'https://cdn.jsdelivr.net/gh/nico-bachner/slidev-theme-geist@main/example-export/04.png',
      'https://cdn.jsdelivr.net/gh/nico-bachner/slidev-theme-geist@main/example-export/05.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-light-icons',
    name: 'Light Icons',
    description: 'Un thème simple, léger et élégant pour Slidev, combinant des mises en page créatives, des composants personnalisés et des polices',
    author: {
      name: 'Pulkit Aggarwal',
      link: 'https://github.com/BashCloud',
    },
    repo: 'https://github.com/lightvue/slidev-theme-light-icons',
    previews: [
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/1-layout-intro.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/2-layout-image-header-intro-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/3-layout-dynamic-image-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/5-layout-dynamic-image-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/7-layout-dynamic-image-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/8-layout-center-image-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/9-layout-dynamic-image-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/10-layout-left-image-light.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-eloc',
    name: 'Eloc',
    description: 'Concentrez-vous sur l\'écriture, présentez dans un style concis.',
    author: {
      name: 'Amio',
      link: 'https://github.com/amio',
    },
    repo: 'https://github.com/zthxxx/slides/tree/master/packages/slidev-theme-eloc',
    previews: [
      'https://media.githubusercontent.com/media/zthxxx/slides/refs/heads/master/packages/slidev-theme-eloc/screenshot/01.png',
      'https://media.githubusercontent.com/media/zthxxx/slides/refs/heads/master/packages/slidev-theme-eloc/screenshot/02.png',
      'https://media.githubusercontent.com/media/zthxxx/slides/refs/heads/master/packages/slidev-theme-eloc/screenshot/03.png',
      'https://media.githubusercontent.com/media/zthxxx/slides/refs/heads/master/packages/slidev-theme-eloc/screenshot/04.png',
      'https://media.githubusercontent.com/media/zthxxx/slides/refs/heads/master/packages/slidev-theme-eloc/screenshot/05.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-purplin',
    name: 'Purplin',
    description: 'Thème avec composant de barre inférieure. Basé sur la couleur violette',
    author: {
      name: 'Mauricio Martínez',
      link: 'https://github.com/moudev',
    },
    repo: 'https://github.com/moudev/slidev-theme-purplin',
    previews: [
      'https://i.imgur.com/BX3TpEc.png',
      'https://i.imgur.com/mqqRi1F.png',
      'https://i.imgur.com/fwm2785.png',
      'https://i.imgur.com/m8eemKt.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-unicorn',
    name: 'Unicorn',
    description: 'Basé sur le design du site web Dawntraoz',
    author: {
      name: 'Alba Silvente',
      link: 'https://github.com/dawntraoz',
    },
    repo: 'https://github.com/dawntraoz/slidev-theme-unicorn',
    previews: [
      'https://cdn.jsdelivr.net/gh/Dawntraoz/slidev-theme-unicorn@master/screenshots/dark-theme-intro.png',
      'https://cdn.jsdelivr.net/gh/Dawntraoz/slidev-theme-unicorn@master/screenshots/light-theme-cover.png',
      'https://cdn.jsdelivr.net/gh/Dawntraoz/slidev-theme-unicorn@master/screenshots/dark-theme-image-centered.png',
      'https://cdn.jsdelivr.net/gh/Dawntraoz/slidev-theme-unicorn@master/screenshots/dark-theme-center-without-header-footer.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-zhozhoba',
    name: 'Zhozhoba',
    description: 'Un thème zhozhoba pour Slidev',
    author: {
      name: 'Bogenbai Bayzharassov',
      link: 'https://github.com/thatoranzhevyy',
    },
    repo: 'https://github.com/thatoranzhevyy/slidev-theme-zhozhoba',
    previews: [
      'https://cdn.jsdelivr.net/gh/thatoranzhevyy/slidev-theme-zhozhoba@master/slides-export/01.png',
      'https://cdn.jsdelivr.net/gh/thatoranzhevyy/slidev-theme-zhozhoba@master/.github/dark.png',
      'https://cdn.jsdelivr.net/gh/thatoranzhevyy/slidev-theme-zhozhoba@master/slides-export/02.png',
      'https://cdn.jsdelivr.net/gh/thatoranzhevyy/slidev-theme-zhozhoba@master/slides-export/03.png',
      'https://cdn.jsdelivr.net/gh/thatoranzhevyy/slidev-theme-zhozhoba@master/slides-export/04.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-penguin',
    name: 'Penguin',
    description: 'Un thème Pingouin pour Slidev',
    author: {
      name: 'Alvaro Saburido',
      link: 'https://github.com/alvarosabu',
    },
    repo: 'https://github.com/alvarosabu/slidev-theme-penguin',
    previews: [
      'https://cdn.jsdelivr.net/gh/alvarosaburido/slidev-theme-penguin@master/screenshots/dark/01.png',
      'https://cdn.jsdelivr.net/gh/alvarosaburido/slidev-theme-penguin@master/screenshots/light/02.png',
      'https://cdn.jsdelivr.net/gh/alvarosaburido/slidev-theme-penguin@master/screenshots/light/06.png',
      'https://cdn.jsdelivr.net/gh/alvarosaburido/slidev-theme-penguin@master/screenshots/light/05.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-vuetiful',
    name: 'Vuetiful',
    description: 'Un thème inspiré de Vue pour Slidev',
    author: {
      name: 'Thorsten Lünborg',
      link: 'https://github.com/LinusBorg',
    },
    repo: 'https://github.com/LinusBorg/slidev-theme-vuetiful',
    previews: [
      'https://cdn.jsdelivr.net/gh/LinusBorg/slidev-theme-vuetiful@main/screenshots/cover-alt.png',
      'https://cdn.jsdelivr.net/gh/LinusBorg/slidev-theme-vuetiful@main/screenshots/section.png',
      'https://cdn.jsdelivr.net/gh/LinusBorg/slidev-theme-vuetiful@main/screenshots/big-points.png',
      'https://cdn.jsdelivr.net/gh/LinusBorg/slidev-theme-vuetiful@main/screenshots/quote.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-takahashi',
    name: 'Takahashi',
    description: 'Un thème simple pour Slidev',
    author: {
      name: 'Percy M.',
      link: 'https://github.com/kecrily',
    },
    repo: 'https://github.com/kecrily/slidev-theme-takahashi',
    previews: [
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/01.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/02.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/03.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/04.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/05.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/06.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/07.png',
    ],
    tags: [
      'light',
    ],
  },
  {
    id: 'slidev-theme-academic',
    name: 'Academic',
    description: 'Présentations académiques avec Slidev simplifiées',
    author: {
      name: 'Alexander Eble',
      link: 'https://github.com/alexanderdavide',
    },
    repo: 'https://github.com/alexanderdavide/slidev-theme-academic',
    previews: [
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/01.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/02.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/08.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/04.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/05.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/06.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/07.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-mokkapps',
    name: 'Mokkapps',
    description: 'Un thème pour ma marque personnelle « Mokkapps »',
    author: {
      name: 'Michael Hoffmann',
      link: 'https://github.com/mokkapps',
    },
    repo: 'https://github.com/mokkapps/slidev-theme-mokkapps',
    previews: [
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/001.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/002.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/003.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/004.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/005.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/006.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/007.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/008.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/009.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/010.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/011.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-the-unnamed',
    name: 'The unnamed',
    description: 'Un thème basé sur le thème VS Code The unnamed',
    author: {
      name: 'Elio Struyf',
      link: 'https://elio.dev',
    },
    repo: 'https://github.com/estruyf/slidev-theme-the-unnamed',
    previews: [
      'https://cdn.jsdelivr.net/gh/estruyf/slidev-theme-the-unnamed@main/assets/cover.png',
      'https://cdn.jsdelivr.net/gh/estruyf/slidev-theme-the-unnamed@main/assets/about-me.png',
      'https://cdn.jsdelivr.net/gh/estruyf/slidev-theme-the-unnamed@main/assets/default.png',
      'https://cdn.jsdelivr.net/gh/estruyf/slidev-theme-the-unnamed@main/assets/section.png',
    ],
    tags: [
      'dark',
    ],
  },
  {
    id: 'slidev-theme-dracula',
    name: 'Dracula',
    description: 'L\'un des meilleurs thèmes sombres rencontre Slidev',
    author: {
      name: 'JD Solanki',
      link: 'https://github.com/jd-solanki',
    },
    repo: 'https://github.com/jd-solanki/slidev-theme-dracula',
    previews: [
      'https://cdn.jsdelivr.net/gh/jd-solanki/slidev-theme-dracula/screenshots/screenshot-1.png',
      'https://cdn.jsdelivr.net/gh/jd-solanki/slidev-theme-dracula/screenshots/screenshot-2.png',
      'https://cdn.jsdelivr.net/gh/jd-solanki/slidev-theme-dracula/screenshots/screenshot-3.png',
      'https://cdn.jsdelivr.net/gh/jd-solanki/slidev-theme-dracula/screenshots/screenshot-4.png',
      'https://cdn.jsdelivr.net/gh/jd-solanki/slidev-theme-dracula/screenshots/screenshot-5.png',
    ],
    tags: [
      'dark',
      'minimalism',
    ],
  },
  {
    id: 'slidev-theme-frankfurt',
    name: 'Frankfurt',
    description: 'Inspiré du thème Beamer Frankfurt',
    author: {
      name: 'Mu-Tsun Tsai',
      link: 'https://github.com/MuTsunTsai',
    },
    repo: 'https://github.com/MuTsunTsai/slidev-theme-frankfurt',
    previews: [
      'https://cdn.jsdelivr.net/gh/MuTsunTsai/slidev-theme-frankfurt/screenshots/01.png',
      'https://cdn.jsdelivr.net/gh/MuTsunTsai/slidev-theme-frankfurt/screenshots/04.png',
      'https://cdn.jsdelivr.net/gh/MuTsunTsai/slidev-theme-frankfurt/screenshots/06.png',
      'https://cdn.jsdelivr.net/gh/MuTsunTsai/slidev-theme-frankfurt/screenshots/07.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-hep',
    name: 'HEP',
    description: 'Style académique pour la physique des hautes énergies',
    author: {
      name: 'Yulei ZHANG',
      link: 'https://github.com/AvencastF',
    },
    repo: 'https://github.com/AvencastF/slidev-theme-hep',
    previews: [
      'https://cdn.jsdelivr.net/gh/avencastf/slidev-theme-hep/screenshot/001.png',
      'https://cdn.jsdelivr.net/gh/avencastf/slidev-theme-hep/screenshot/004.png',
      'https://cdn.jsdelivr.net/gh/avencastf/slidev-theme-hep/screenshot/006.png',
      'https://cdn.jsdelivr.net/gh/avencastf/slidev-theme-hep/screenshot/008.png',
    ],
    tags: [
      'light',
    ],
  },
  {
    id: 'slidev-theme-excali-slide',
    name: 'Excali-slide',
    description: 'Un thème basé sur Excalidraw avec un effet de surlignage animé',
    author: {
      name: 'Filip Hric',
      link: 'https://github.com/filiphric',
    },
    repo: 'https://github.com/filiphric/slidev-theme-excali-slide',
    previews: [
      'https://raw.githubusercontent.com/filiphric/excali-slide/main/images/default_slide.png',
      'https://raw.githubusercontent.com/filiphric/excali-slide/main/images/intro_slide.png',
    ],
    tags: [
      'dark',
      'light',
    ],
  },
  {
    id: 'slidev-theme-mint',
    name: 'mint',
    description: 'Thème Slidev Mint',
    author: {
      name: 'Alfatta Rezqa',
      link: 'https://github.com/alfatta',
    },
    repo: 'https://github.com/alfatta/slidev-theme-mint',
    previews: [
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/1.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/2.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/3.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/4.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/5.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/6.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/7.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/8.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/9.png',
    ],
    tags: [
      'light',
      'mint',
      'green',
      'cool',
    ],
  },
  {
    id: 'slidev-theme-neversink',
    name: 'neversink',
    description: 'Thème Slidev Neversink',
    author: {
      name: 'Todd M. Gureckis',
      link: 'https://github.com/gureckis',
    },
    repo: 'https://github.com/gureckis/slidev-theme-neversink',
    previews: [
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/2.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/6.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/8.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/15.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/18.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/22.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/26.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/34.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/36.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/38.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/35.png',
    ],
    tags: [
      'light',
      'academic',
      'education',
    ],
  },
  {
    id: 'slidev-theme-ktym4a',
    name: 'ktym4a',
    description: 'Basé sur le design du site web ktym4a',
    author: {
      name: 'ktym4a',
      link: 'https://github.com/ktym4a',
    },
    repo: 'https://github.com/ktym4a/slidev-theme-ktym4a',
    previews: [
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/rotation/0.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/rotation/1.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/rotation/6.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/rotation/7.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/rotation/8.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/single/0.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/single/1.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/single/3.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/single/4.png',
    ],
    tags: [
      'dark',
      'catppuccin',
    ],
  },
  {
    id: 'slidev-theme-nord',
    name: 'Nord',
    description: 'Basé sur le thème Nord',
    author: {
      name: 'David Ollerhead',
      link: 'https://github.com/oller',
    },
    repo: 'https://github.com/oller/slidev-theme-nord',
    previews: [
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/1.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/2.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/3.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/4.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/5.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/6.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/7.png',
    ],
    tags: [
      'dark',
      'light',
      'nord',
    ],
  },
  {
    id: 'slidev-theme-scholarly',
    name: 'Scholarly',
    description: 'Basé sur le thème Nord',
    author: {
      name: 'Jiaxin Peng',
      link: 'https://github.com/jxpeng98',
    },
    repo: 'https://github.com/jxpeng98/slidev-theme-scholarly',
    previews: [
      'https://raw.githubusercontent.com/jxpeng98/slidev-theme-scholarly/HEAD/images/themes/classic-blue/1.png',
      'https://raw.githubusercontent.com/jxpeng98/slidev-theme-scholarly/HEAD/images/themes/oxford/1.png',
      'https://raw.githubusercontent.com/jxpeng98/slidev-theme-scholarly/HEAD/images/themes/cambridge/1.png',
      'https://raw.githubusercontent.com/jxpeng98/slidev-theme-scholarly/HEAD/images/themes/princeton/1.png',
      'https://raw.githubusercontent.com/jxpeng98/slidev-theme-scholarly/HEAD/images/themes/classic-blue/2.png',
      'https://raw.githubusercontent.com/jxpeng98/slidev-theme-scholarly/HEAD/images/themes/classic-blue/3.png',
      'https://raw.githubusercontent.com/jxpeng98/slidev-theme-scholarly/HEAD/images/themes/classic-blue/4.png',
    ],
    tags: [
      'dark',
      'light',
      'academic',
      'oxford',
      'cambridge',
      'princeton',
    ],
  },
  {
    id: 'slidev-theme-field-manual',
    name: 'Field Manual',
    description: 'Un thème de 24 mises en page inspiré du style des manuels de terrain militaires vintage',
    author: {
      name: 'PJ Doland',
      link: 'https://github.com/pjdoland',
    },
    repo: 'https://github.com/pjdoland/slidev-theme-field-manual',
    previews: [
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/1.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/2.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/3.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/4.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/5.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/6.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/7.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/8.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/9.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/10.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/11.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/12.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/13.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/14.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/15.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/16.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/17.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/18.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/19.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/20.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/21.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/22.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/23.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/24.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/25.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/26.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/27.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/28.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/29.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/30.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/31.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/32.jpg',
      'https://raw.githubusercontent.com/pjdoland/slidev-theme-field-manual/main/screenshots/33.jpg',
    ],
    tags: [
      'light',
      'dark',
      'vintage',
      'military',
    ],
  },
  {
    id: 'slidev-theme-touying',
    name: 'Touying',
    description: 'Un thème basé sur le design du Typst Touying',
    author: {
      name: '_Kerman',
      link: 'https://github.com/kermanx',
    },
    repo: 'https://github.com/kermanx/slidev-theme-touying',
    previews: [
      'https://github.com/user-attachments/assets/a075a45c-7ee7-4ede-b3e7-90f29edf3845',
      'https://github.com/user-attachments/assets/5ddea6cb-e604-41f9-a857-9f43b439c91b',
      'https://github.com/user-attachments/assets/2b649cbc-537d-4306-adcd-3877bbeeb87a',
      'https://github.com/user-attachments/assets/e2258aef-1c80-4db0-af2f-eb430b83f2e7',
      'https://github.com/user-attachments/assets/f3010e84-7b9c-42b7-bffc-bdf48fdfbd2e',
    ],
    tags: [
      'light',
    ],
  },
  // Ajoutez votre thème ici!
  {
    id: '',
    link: 'https://github.com/slidevjs/slidev/edit/main/docs/.vitepress/themes.ts',
    name: 'Votre thème?',
    description: 'Cliquez ici pour soumettre votre thème :)',
    previews: [
      '/theme-placeholder.png',
    ],
  },
]
