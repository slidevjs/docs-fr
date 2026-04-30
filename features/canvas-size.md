---
relates:
  - guide/faq#adjust-size
  - features/zoom-slide
  - features/transform-component
tags: [layout]
description: |
  Définir la taille de toutes vos diapositives.
---

# Taille du canevas des diapositives

Slidev vous permet de définir la taille du canevas des diapositives via les options `canvasWidth` et `aspectRatio` dans le headmatter :

```md
---
# aspect ratio pour les diapositives
aspectRatio: 16/9
# largeur réelle des canevas, unité en px
canvasWidth: 980
---

# Vos diapositives ici
```

Pour mettre à l'échelle plusieurs diapositives de votre présentation, vous pouvez utiliser l'option `zoom` :

<LinkCard link="features/zoom-slide" />

Pour ajuster la taille de certains éléments sur vos diapositives, vous pouvez utiliser le composant `Transform` :

<LinkCard link="features/transform-component" />
