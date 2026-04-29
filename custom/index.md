# Customisations

Slidev est entièrement personnalisable, du style aux configurations d'outillage. Il vous permet de configurer les outils ci-dessous ([Vite](/custom/config-vite), [UnoCSS](/custom/config-unocss), [Monaco](/custom/config-monaco), etc.)

## Configurations du frontmatter

Vous pouvez configurer Slidev dans le frontmatter de votre première diapositive, ce qui suit montre la valeur par défaut pour chaque option.

```yaml
---
# identifiant du thème ou nom du package
# En savoir plus : https://sli.dev/themes/use.html
theme: default
# titre de votre diapositive, sera automatiquement déduit du premier en-tête s'il n'est pas spécifié
title: Slidev
# titleTemplate pour la page Web, `%s` sera remplacé par le titre de la page
titleTemplate: '%s - Slidev'
# informations pour vos diapositives, peut être une chaîne de démarquage
info: false
# champ auteur pour le PDF ou PPTX exporté
author: Your Name Here
# champ mots-clés pour le PDF exporté, séparés par des virgules
keywords: keyword1,keyword2

# mode présentateur activé, peut être booléen, 'dev' ou 'build'
presenter: true
# téléchargement de pdf activé dans la version SPA, peut également être une URL personnalisée
download: false
# nom de fichier du fichier d'exportation
exportFilename: slidev-exported
# options d'exportation
# utilisez les options CLI d'exportation au format camelCase
# En savoir plus : https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# surligneur de syntaxe, peut être 'prism', 'shiki'
highlighter: shiki
# afficher les numéros de ligne dans les blocs de code
lineNumbers: false
# activer l'éditeur monaco, peut être booléen, 'dev' ou 'build'
monaco: true
# d'où charger les types monaco, peut être 'cdn', 'local' ou 'none'
monacoTypesSource: local
# spécifier explicitement des packages locaux supplémentaires pour importer les types
monacoTypesAdditionalPackages: []
# spécifier explicitement des modules locaux supplémentaires comme dépendance de monaco exécutable
monacoRunAdditionalDeps: []
# télécharger les actifs distants en local à l'aide de vite-plugin-remote-assets, peut être booléen, 'dev' ou 'build'
remoteAssets: false
# contrôle si les textes des diapositives sont sélectionnables
selectable: true
# activer l'enregistrement de diapositives, peut être booléen, 'dev' ou 'build'
record: dev
# activer le menu contextuel de Slidev, peut être booléen, 'dev' ou 'build'
contextMenu: true
# activer le verrouillage de l'écran, peut être booléen, 'dev' ou 'build'
wakeLock: true

# forcer le schéma de couleur pour les diapositives, peut être 'auto', 'light' ou 'dark'
colorSchema: auto
# mode routeur pour vue-router, peut être 'history' ou 'hash'
routerMode: history
# ratio d'aspect pour les diapositives
aspectRatio: 16/9
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
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code

# le frontmatter par défaut s'applique à toutes les diapositives
defaults:
  layout: default
  # ...

# options de dessin
# En savoir plus : https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# attributs de balise HTML
htmlAttrs:
  dir: ltr
  lang: en
---
```

Consultez les [définitions de type](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L29) pour plus d'options.

## Configuration par diapositive

En outre, chaque diapositive accepte la configuration suivante dans le bloc Frontmatter :

- `clicks` (`number`) : Nombre de clics personnalisé (en savoir plus [ici](/guide/animations.html#custom-total-clicks-count)).
- `disabled` (`boolean`) : Désactiver complètement et masquer la diapositive.
- `hide` (`boolean`) : Identique à `disabled`.
- `hideInToc` (`boolean`) : Masquer la diapositive pour les composants `<Toc>` (en savoir plus [ici](/builtin/components.html#toc)).
- `layout` (`string`) : Définit le composant de mise en page appliqué à la diapositive (en savoir plus [ici](/guide/syntax.html#front-matter-layouts) et [ici](/builtin/layouts.html)).
- `level` (`number`) : Remplace le niveau de titre pour les composants `<Title>` et `<Toc>` (uniquement si `title` a également été déclaré, en savoir plus [ici](/builtin/components.html#titles)).
- `preload` (`boolean`, par défaut `true`) : Précharger la diapositive suivante (en savoir plus [ici](/guide/animations.html#motion)).
- `routeAlias` (`string`) : Crée un alias de route qui peut être utilisé dans l'URL ou avec le composant `<Link>` (en savoir plus [ici](/builtin/components.html#link)).
- `src` (`string`) : Inclut un fichier markdown (en savoir plus [ici](/guide/syntax.html#multiple-entries)).
- `title` (`string`) : Remplace le titre pour les composants `<Title>` et `<Toc>` (en savoir plus [ici](/builtin/components.html#titles)).
- `transition` (`string | TransitionProps`) : Définit la transition entre la diapositive et la suivante (en savoir plus [ici](/guide/animations.html#slide-transitions)).
- `zoom` (`number`) : Échelle de zoom personnalisée. Utile pour les diapositives avec beaucoup de contenu.
- `dragPos` (`Record<string,string>`) : Utilisé comme positions des éléments déplaçables (en savoir plus [ici](/guide/draggable.html)).

## Structure du répertoire

Slidev utilise des conventions de structure de répertoires pour minimiser la surface de configuration et rendre les extensions de fonctionnalités flexibles et intuitives.

Reportez-vous à la section [Structure des répertoires](/custom/directory-structure).

- [Surligneurs](/custom/highlighters)
- [Configurer Vue](/custom/config-vue)
- [Configurer Vite](/custom/config-vite)
- [Configurer UnoCSS](/custom/config-unocss)
- [Configurer Monaco](/custom/config-monaco)
- [Configurer KaTeX](/custom/config-katex)
- [Configurer Mermaid](/custom/config-mermaid)
