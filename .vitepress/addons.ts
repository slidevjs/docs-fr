import type { ThemeInfo } from './themes'

export type AddonInfo = Omit<ThemeInfo, 'previews'>

export const official: AddonInfo[] = [
  {
    id: '',
    link: '#',
    name: 'Work in Progress',
    description: '',
    tags: [],
    author: {
      name: '',
    },
  },
]

// Please add your addon to the end of the list.
export const community: AddonInfo[] = [
  {
    id: 'slidev-addon-python-runner',
    name: 'Python Runner',
    description: 'Exécuter du code Python réel dans vos diapositives',
    tags: ['Code runner'],
    author: {
      name: '_Kerman',
      link: 'https://github.com/KermanX',
    },
    repo: 'https://github.com/KermanX/slidev-addon-python-runner',
  },
  {
    id: 'slidev-addon-tldraw',
    name: 'tldraw',
    description: 'Intégrer des diagrammes tldraw directement dans Slidev, avec support d\'édition dans la diapositive',
    tags: ['Integration', 'Diagram'],
    author: {
      name: 'Albert Brand',
      link: 'https://github.com/AlbertBrand',
    },
    repo: 'https://github.com/AlbertBrand/slidev-addon-tldraw',
  },
  {
    id: 'slidev-addon-react',
    name: 'React Components',
    description: 'Utiliser des composants React avec JSX/TSX dans vos présentations Slidev.',
    tags: ['React', 'Component', 'Integration'],
    repo: 'https://github.com/Ygilany/slidev-addon-react',
    author: {
      name: 'YGilany',
      link: 'https://github.com/YGilany',
    },
  },
  {
    id: 'slidev-addon-typst',
    name: 'Typst',
    description: 'Addon Typst pour Slidev',
    tags: ['Integration', 'Diagram'],
    author: {
      name: 'Shigma',
      link: 'https://github.com/shigma',
    },
    repo: 'https://github.com/shigma/slidev-addon-typst',
  },
  {
    id: 'slidev-addon-fancy-arrow',
    name: 'Fancy Arrow',
    description: 'Flèches dessinées à la main avec diverses options de style et de positionnement',
    tags: ['Component'],
    author: {
      name: 'whitphx',
      link: 'https://github.com/whitphx',
    },
    repo: 'https://github.com/whitphx/slidev-addon-fancy-arrow',
  },
  {
    id: 'slidev-addon-sync',
    name: 'Remote Sync',
    description: 'Composant de synchronisation pour la construction statique Slidev utilisant un serveur SSE ou WS',
    tags: ['Remote control', 'Navigation'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-addon-sync',
  },
  {
    id: 'slidev-addon-tikzjax',
    name: 'tikzjax',
    description: 'Compiler TikZ/Chemfig/... en SVG et les afficher dans Slidev',
    tags: ['Integration', 'Diagram'],
    author: {
      name: 'Ethan Goh',
      link: 'https://github.com/7086cmd',
    },
    repo: 'https://github.com/7086cmd/slidev-addon-tikzjax',
  },
  {
    id: 'slidev-component-pager',
    name: 'Pager',
    description: 'Afficher la page actuelle et le nombre total de pages',
    tags: ['Component', 'Navigation'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-pager',
  },
  {
    id: 'slidev-component-poll',
    name: 'Poll and Quiz',
    description: 'Composants de sondage et quiz pour Slidev',
    tags: ['Component'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-poll',
  },
  {
    id: 'slidev-component-progress',
    name: 'Progress',
    description: 'Afficher une barre de progression interactive pour Slidev',
    tags: ['Tool', 'Navigation'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-progress',
  },
  {
    id: 'slidev-component-scroll',
    name: 'Mouse Scroll',
    description: 'Utiliser la molette de la souris pour naviguer',
    tags: ['Navigation'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-scroll',
  },
  {
    id: 'slidev-component-spotlight',
    name: 'Spotlight',
    description: 'Activer un projecteur pour surligner une région spécifique en maintenant une touche',
    tags: ['Tool'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-spotlight',
  },
  {
    id: 'slidev-component-zoom',
    name: 'Zooming',
    description: 'Permettre le zoom dans les diapositives',
    tags: ['Tool'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-zoom',
  },
  {
    id: 'slidev-addon-rabbit',
    name: 'Rabbit',
    description: 'Gestion du temps de présentation pour Slidev inspirée de Rabbit',
    tags: ['Tool', 'Navigation'],
    author: {
      name: 'kaakaa',
      link: 'https://github.com/kaakaa',
    },
    repo: 'https://github.com/kaakaa/slidev-addon-rabbit',
  },
  {
    id: 'slidev-addon-stem',
    name: 'STEM',
    description: 'Addon Slidev pour les présentations scientifiques',
    tags: ['Component', 'Layout'],
    author: {
      name: 'yutaka-shoji',
      link: 'https://github.com/yutaka-shoji',
    },
    repo: 'https://github.com/yutaka-shoji/slidev-addon-stem',
  },
  {
    id: 'slidev-addon-naive',
    name: 'Naive UI',
    description: 'Apporte les composants Naive UI dans Slidev',
    tags: ['Component'],
    author: {
      name: 'Samuel Huang',
      link: 'https://sghuang.com',
    },
    repo: 'https://github.com/sghuang19/slidev-addon-naive',
  },
  {
    id: 'slidev-addon-hls-player',
    name: 'HLS player',
    description: 'Ajouter un lecteur vidéo basique propulsé par hls.js sur vos diapositives pour afficher des vidéos HTTP Live Streaming',
    tags: ['hls', 'video'],
    author: {
      name: 'Albert Brand',
      link: 'https://github.com/AlbertBrand',
    },
    repo: 'https://github.com/AlbertBrand/slidev-addon-hls-player',
  },
  {
    id: 'slidev-addon-window-mockup',
    name: 'Window Mockup',
    description: 'Cadres de fenêtres stylisés',
    tags: ['Component'],
    author: {
      name: 'whitphx',
      link: 'https://github.com/whitphx',
    },
    repo: 'https://github.com/whitphx/slidev-addon-window-mockup',
  },
  {
    id: 'slidev-addon-bpmn',
    name: 'BPMN viewer',
    description: 'Visualiser des fichiers BPMN dans vos diapositives',
    tags: ['Component'],
    author: {
      name: 'emaarco',
      link: 'https://github.com/emaarco',
    },
    repo: 'https://github.com/emaarco/slidev-addon-bpmn',
  },
  {
    id: 'slidev-addon-dmn',
    name: 'DMN viewer',
    description: 'Afficher des tableaux de décision DMN et des diagrammes DRD dans vos diapositives',
    tags: ['Component'],
    author: {
      name: 'emaarco',
      link: 'https://github.com/emaarco',
    },
    repo: 'https://github.com/emaarco/slidev-addon-dmn',
  },
  {
    id: 'slidev-addon-p5',
    name: 'Runner for p5js',
    description: 'Afficher, modifier et exécuter des croquis p5js dans vos diapositives',
    tags: ['Component', 'Code runner'],
    author: {
      name: 'mjvo',
      link: 'https://github.com/mjvo',
    },
    repo: 'https://github.com/mjvo/slidev-addon-p5',
  },
  {
    id: 'slidev-pane',
    name: 'slidev-pane',
    description: 'Présentateur de volets style PowerPoint pour Slidev avec vignettes de diapositives, navigation rapide et canevas principal zoomable.',
    tags: ['Navigation'],
    author: {
      name: 'xunz',
      link: 'https://github.com/xunz3',
    },
    repo: 'https://github.com/xunz3/slidev-pane',
  },
  {
    id: 'slidev-agent',
    name: 'slidev-agent',
    description: 'Addon Slidev et CLI wrapper pour la création de diapositives propulsée par LangChain.',
    tags: ['Component', 'Integration'],
    author: {
      name: 'Christian Bromann',
      link: 'https://github.com/christian-bromann',
    },
    repo: 'https://github.com/christian-bromann/slidev-agent',
  },
  {
    id: 'slidev-addon-animated-text',
    name: 'Animated text',
    description: 'Texte animé trait par trait avec n\'importe quelle police en utilisant tegaki.',
    tags: ['Component'],
    author: {
      name: 'Andreas Taranetz',
      link: 'https://andreas.taranetz.com/',
    },
    repo: 'https://github.com/andreas-taranetz/slidev-addon-animated-text',
  },
  // Ajoutez votre addon ici!
  {
    id: '',
    link: 'https://github.com/slidevjs/slidev/edit/main/docs/.vitepress/addons.ts',
    name: 'Votre addon?',
    description: 'Cliquez ici pour soumettre votre addon :)',
  },
]
