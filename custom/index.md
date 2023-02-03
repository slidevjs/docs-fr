# Customisations

Slidev est entièrement personnalisable, du style aux configurations d'outillage. Il vous permet de configurer les outils ci-dessous ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Configurations du frontmatter

Vous pouvez configurer Slidev dans le frontmatter de votre première diapositive, ce qui suit montre la valeur par défaut pour chaque option.

```yaml
---
# identifiant du thème ou nom du package
# En savoir plus : https://sli.dev/themes/use.html
theme: 'default'
# titre de votre diapositive, sera automatiquement déduit du premier en-tête s'il n'est pas spécifié
title: 'Slidev'
# titleTemplate pour la page Web, `%s` sera remplacé par le titre de la page
titleTemplate: '%s - Slidev'
# informations pour vos diapositives, peut être une chaîne de démarquage
info: false

<<<<<<< HEAD
# téléchargement de pdf activé dans la version SPA, peut également être une URL personnalisée
=======
# enable presenter mode, can be boolean, 'dev' or 'build'
presenter: true
# enabled pdf downloading in SPA build, can also be a custom url
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a
download: false
# nom de fichier du fichier d'exportation
exportFilename: 'slidev-exported'
# surligneur de syntaxe, peut être 'prism' ou 'shiki'
highlighter: 'prism'
# afficher les numéros de ligne dans les blocs de code
lineNumbers: false
# activer l'éditeur monaco, peut être booléen, 'dev' ou 'build'
monaco: 'dev'
# télécharger les actifs distants en local à l'aide de vite-plugin-remote-assets, peut être booléen, 'dev' ou 'build'
remoteAssets: false
# contrôle si les textes des diapositives sont sélectionnables
selectable: true
# activer l'enregistrement de diapositives, peut être booléen, 'dev' ou 'build'
record: 'dev'

# forcer le schéma de couleur pour les diapositives, peut être 'auto', 'light' ou 'dark'
colorSchema: 'auto'
# mode routeur pour vue-router, peut être 'history' ou 'hash'
routerMode: 'history'
# ratio d'aspect pour les diapositives
aspectRatio: '16/9'
# largeur réelle du canvas, unité en px
canvasWidth: 980
# utilisé pour la personnalisation du thème, injectera les styles racine comme `--slidev-theme-x` pour l'attribut `x`
themeConfig:
  primary: '#5d8392'

# favicon, peut être un chemin de fichier local ou une URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL du serveur PlantUML utilisé pour afficher les diagrammes
plantUmlServer: 'https://www.plantuml.com/plantuml'
# polices seront automatiquement importées à partir des polices Google
# En savoir plus : https://sli.dev/custom/fonts
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# le frontmatter par défaut s'applique à toutes les diapositives
defaults:
  layout: 'default'
  # ...

# options de dessin
# En savoir plus : https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true
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
