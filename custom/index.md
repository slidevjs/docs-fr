# Customisations

Slidev est entièrement personnalisable, du style aux configurations d'outillage. Il vous permet de configurer les outils ci-dessous ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Configurations du frontmatter

Vous pouvez configurer Slidev dans le frontmatter de votre première diapositive, ce qui suit montre la valeur par défaut pour chaque option.

```yaml
---
<<<<<<< HEAD
# identifiant du thème ou nom du package
theme: 'default'
# titre de votre diapositive, sera automatiquement déduit du premier en-tête s'il n'est pas spécifié
title: ''
# titre pour la page Web, `%s` sera remplacé par le titre de la page
=======
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
theme: 'default'
# title of your slide, will auto infer from the first header if not specified
title: 'Slidev'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
>>>>>>> afa4515b72ea8814d0a633bdb4ec4c41734b502c
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string
info: false

<<<<<<< HEAD
# téléchargement de pdf activé dans la version SPA, peut également être une URL personnalisée
download: true
# surligneur de syntaxe, peut être 'prism' ou 'shiki'
=======
# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'slidev-exported.pdf'
# syntax highlighter, can be 'prism' or 'shiki'
>>>>>>> afa4515b72ea8814d0a633bdb4ec4c41734b502c
highlighter: 'prism'
# afficher le numéro de ligne dans les blocs de code
lineNumbers: false
<<<<<<< HEAD
# activer l'éditeur de monaco, par défaut sur dev uniquement
monaco: 'dev'
# forcer le schéma de couleur pour les diapositives, peut être 'auto', 'light' ou 'dark'
colorSchema: 'auto'
# le mode routeur pour vue-router, peut être "history" ou "hash"
=======
# enable monaco editor, can be boolean, 'dev' or 'build'
monaco: 'dev'
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build'
record: 'dev'

# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: 'auto'
# router mode for vue-router, can be "history" or "hash"
>>>>>>> afa4515b72ea8814d0a633bdb4ec4c41734b502c
routerMode: 'history'
# rapport hauteur/largeur des diapositives
aspectRatio: '16/9'
<<<<<<< HEAD
# largeur réelle du canevas, unité en px

canvasWidth: 980
# les polices seront importées automatiquement depuis Google fonts
# En savoir plus : https://fr.sli.dev/custom/fonts
=======
# real width of the canvas, unit in px
canvasWidth: 980
# used for theme customization, will inject root styles as `--slidev-theme-x` for attribute `x`
themeConfig:
  primary: '#5d8392'

# favicon, can be a local file path or URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL of PlantUML server used to render diagrams
plantUmlServer: 'https://www.plantuml.com/plantuml'
# fonts will be auto imported from Google fonts
# Learn more: https://sli.dev/custom/fonts
>>>>>>> afa4515b72ea8814d0a633bdb4ec4c41734b502c
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'
  
# Le frontmatter par défaut s'applique à toutes les diapositives
defaults:
  layout: 'default'
  # ...
<<<<<<< HEAD
  
# informations pour vos diapositives, peut être une chaîne de démarque
info: |
  ## Slidev

  Ma première présentation [Slidev](http://sli.dev/)!
=======

# drawing options
# Learn more: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true
---
>>>>>>> afa4515b72ea8814d0a633bdb4ec4c41734b502c
```

Consultez les [définitions de type](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L29) pour plus d'options.

## Structure du répertoire

Slidev utilise des conventions de structure de répertoires pour minimiser la surface de configuration et rendre les extensions de fonctionnalités flexibles et intuitives.

Reportez-vous à la section [Structure des répertoires](/custom/directory-structure).

## `vite.config.ts`

Reportez-vous à la section [Configurer Vite](/custom/config-vite).

## `windicss.config.ts`

Reportez-vous à la section [Configurer Windi CSS](/custom/config-windicss).

## Configuration des outils

- [Surligneurs](/custom/highlighters)
- [Configurer Vue](/custom/config-vue)
- [Configurer Vite](/custom/config-vite)
- [Configurer Windi CSS](/custom/config-windicss)
- [Configurer Monaco](/custom/config-monaco)
- [Configurer KaTeX](/custom/config-katex)
- [Configurer Mermaid](/custom/config-mermaid)
