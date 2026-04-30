# Personnalisations

Slidev est entièrement personnalisable, du style aux configurations d'outils. Il vous permet de configurer les outils sous-jacents ([Vite](/custom/config-vite), [UnoCSS](/custom/config-unocss), [Monaco](/custom/config-monaco), etc.)

## Configurations du deck de diapositives {#headmatter}

Vous pouvez configurer l'ensemble du projet de diapositives dans le frontmatter de votre **première** diapositive (c'est-à-dire le headmatter). Ce qui suit montre la valeur par défaut pour chaque option :

```yaml
---
# identifiant du thème, nom du paquet ou chemin local
# En savoir plus : https://sli.dev/guide/theme-addon.html#use-theme
theme: default
# addons, peut être une liste de noms de paquets ou de chemins locaux
# En savoir plus : https://sli.dev/guide/theme-addon.html#use-addon
addons: []
# titre de votre diapositive, sera déduit du premier en-tête si non spécifié
title: Slidev
# modèle de titre pour la page web, `%s` sera remplacé par le titre du deck de diapositives
titleTemplate: '%s - Slidev'
# informations pour vos diapositives, peut être une chaîne Markdown
info: false
# champ auteur pour les PDF ou PPTX exportés
author: Votre Nom Ici
# champ mots-clés pour les PDF exportés, séparés par des virgules
keywords: motcle1,motcle2

# activer le mode présentateur, peut être boolean, 'dev' ou 'build'
presenter: true
# activer l'exportateur navigateur, peut être boolean, 'dev' ou 'build'
browserExporter: dev
# activer le téléchargement PDF dans la construction SPA, peut aussi être une url personnalisée
download: false
# nom du fichier d'exportation
exportFilename: slidev-exported
# options d'exportation
# utiliser les options CLI d'exportation en format camelCase
# En savoir plus : https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# activer twoslash, peut être boolean, 'dev' ou 'build'
twoslash: true
# afficher les numéros de ligne dans les blocs de code
lineNumbers: false
# activer l'éditeur monaco, peut être boolean, 'dev' ou 'build'
monaco: true
# Où charger les types monaco, peut être 'cdn', 'local' ou 'none'
monacoTypesSource: local
# spécifier explicitement des paquets locaux supplémentaires pour importer les types
monacoTypesAdditionalPackages: []
# spécifier explicitement des modules locaux supplémentaires comme dépendances de l'exécutable monaco
monacoRunAdditionalDeps: []
# télécharger les ressources distantes localement via vite-plugin-remote-assets, peut être boolean, 'dev' ou 'build'
remoteAssets: false
# contrôle si les textes dans les diapositives sont sélectionnables
selectable: true
# activer l'enregistrement des diapositives, peut être boolean, 'dev' ou 'build'
record: dev
# activer le menu contextuel de Slidev, peut être boolean, 'dev' ou 'build'
contextMenu: true
# activer le verrouillage de l'écran, peut être boolean, 'dev' ou 'build'
wakeLock: true
# prendre un instantané pour chaque diapositive dans la vue d'ensemble
overviewSnapshots: false
# mode du routeur pour vue-router, peut être "history" ou "hash"
routerMode: history

# forcer le schéma de couleur pour les diapositives, peut être 'auto', 'light' ou 'dark'
colorSchema: auto
# rapport d'aspect des diapositives
aspectRatio: 16/9
# largeur réelle du canevas, unité en px
canvasWidth: 980
# définit la transition par défaut entre les diapositives
# En savoir plus : https://sli.dev/guide/animations.html#slide-transitions
transition: undefined # ou BuiltinSlideTransition | string | TransitionGroupProps | null
# définit les préréglages d'animation par défaut pour les animations de clic
# En savoir plus : https://sli.dev/guide/animations.html#click-animation-presets
clickAnimation: undefined # ou chaîne séparée par des virgules
# utilisé pour la personnalisation du thème, injectera les styles racine comme `--slidev-theme-x` pour l'attribut `x`
themeConfig:
  primary: '#5d8392'

# favicon, peut être un chemin de fichier local ou une URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL du serveur PlantUML utilisé pour rendre les diagrammes
# En savoir plus : https://sli.dev/features/plantuml.html
plantUmlServer: https://www.plantuml.com/plantuml
# les polices seront automatiquement importées depuis Google Fonts
# En savoir plus : https://sli.dev/custom/config-fonts.html
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code

# frontmatter par défaut appliqué à toutes les diapositives
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

# attributs des balises HTML
htmlAttrs:
  dir: ltr
  lang: fr

# balises méta SEO
seoMeta:
  ogTitle: Modèle de démarrage Slidev
  ogDescription: Diapositives de présentation pour développeurs
  ogImage: https://cover.sli.dev
  ogUrl: https://example.com
  twitterCard: summary_large_image
  twitterTitle: Modèle de démarrage Slidev
  twitterDescription: Diapositives de présentation pour développeurs
  twitterImage: https://cover.sli.dev
  twitterSite: username
  twitterUrl: https://example.com
---
```

Consultez les [définitions de types](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) pour plus de détails.

## Configurations par diapositive {#frontmatter}

Chaque diapositive accepte également la configuration suivante dans son bloc frontmatter. Ce qui suit montre la valeur par défaut pour chaque option :

```yaml
---
# nombre de clics personnalisé
# En savoir plus : https://sli.dev/guide/animations#total
clicks: 0
# nombre de clics de départ personnalisé
clicksStart: 0
# désactiver complètement et masquer la diapositive
disabled: false
# identique à `disabled`
hide: false
# masquer la diapositive pour les composants <Toc>
hideInToc: false
# définit le composant de mise en page appliqué à la diapositive
layout: <"cover" si la diapositive est la première, sinon "default">
# remplacer le niveau de titre pour les composants <TitleRenderer> et <Toc>
# uniquement si `title` a aussi été déclaré
level: 1
# précharger cette diapositive avant d'y entrer
preload: true
# créer un alias de route utilisable dans l'URL ou avec le composant <Link>
routeAlias: undefined # ou string
# inclure un fichier markdown
# En savoir plus : https://sli.dev/guide/syntax.html#importing-slides
src: undefined # ou string
# remplacer le titre pour les composants <TitleRenderer> et <Toc>
# uniquement si `title` a aussi été déclaré
title: undefined # ou string
# définit la transition entre la diapositive et la suivante
# En savoir plus : https://sli.dev/guide/animations.html#slide-transitions
transition: undefined # ou BuiltinSlideTransition | string | TransitionGroupProps | null
# définit les préréglages d'animation par défaut pour les animations de clic dans cette diapositive
# En savoir plus : https://sli.dev/guide/animations.html#click-animation-presets
clickAnimation: undefined # ou chaîne séparée par des virgules
# échelle de zoom personnalisée
# utile pour les diapositives avec beaucoup de contenu
zoom: 1
# utilisé comme positions des éléments déplaçables
# En savoir plus : https://sli.dev/features/draggable.html
dragPos: {} # type: Record<string, string>
---
```

Consultez la [définition de type](https://github.com/slidevjs/slidev/blob/main/packages/types/src/frontmatter.ts#L260) pour plus de détails.

## Structure des répertoires

Slidev utilise des conventions de structure de répertoires pour minimiser la surface de configuration et rendre les extensions de fonctionnalités flexibles et intuitives.

Reportez-vous à la section [Structure des répertoires](/custom/directory-structure).

## Outils de configuration

<script setup>
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import customizations from '../.vitepress/customizations'
</script>

<li v-for="c of customizations.slice(2)" :key="c.text">
  <VPLink :href="c.link">
    {{ c.text }}
  </VPLink>
</li>
