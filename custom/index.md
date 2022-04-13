# Customisations

Slidev est entièrement personnalisable, du style aux configurations d'outillage. Il vous permet de configurer les outils ci-dessous ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Configurations du frontmatter

Vous pouvez configurer Slidev dans le frontmatter de votre première diapositive, ce qui suit montre la valeur par défaut pour chaque option.

```yaml
---
# identifiant du thème ou nom du package
theme: 'default'
# titre de votre diapositive, sera automatiquement déduit du premier en-tête s'il n'est pas spécifié
title: ''
# titre pour la page Web, `%s` sera remplacé par le titre de la page
titleTemplate: '%s - Slidev'

# téléchargement de pdf activé dans la version SPA, peut également être une URL personnalisée
download: true
# surligneur de syntaxe, peut être 'prism' ou 'shiki'
highlighter: 'prism'
# afficher le numéro de ligne dans les blocs de code
lineNumbers: false
# activer l'éditeur de monaco, par défaut sur dev uniquement
monaco: 'dev'
# forcer le schéma de couleur pour les diapositives, peut être 'auto', 'light' ou 'dark'
colorSchema: 'auto'
# le mode routeur pour vue-router, peut être "history" ou "hash"
routerMode: 'history'
# rapport hauteur/largeur des diapositives
aspectRatio: '16/9'
# largeur réelle du canevas, unité en px

<<<<<<< HEAD
canvasWidth: 980
# les polices seront importées automatiquement depuis Google fonts
# En savoir plus : https://fr.sli.dev/custom/fonts
=======
# favicon, can be a local file path or URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# fonts will be auto imported from Google fonts
# Learn more: https://sli.dev/custom/fonts
>>>>>>> 9fa6829bca1bd8a2262cbc20eb2759d08a0f11fa
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'
  
# Le frontmatter par défaut s'applique à toutes les diapositives
defaults:
  layout: 'default'
  # ...
  
# informations pour vos diapositives, peut être une chaîne de démarque
info: |
  ## Slidev

  Ma première présentation [Slidev](http://sli.dev/)!
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
