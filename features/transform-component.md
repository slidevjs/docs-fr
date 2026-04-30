---
relates:
  - guide/faq#adjust-size
  - features/canvas-size
  - features/zoom-slide
tags: [layout]
description: |
  Un composant pour mettre à l'échelle certains éléments.
---

# Le composant `Transform`

Le composant `Transform` vous permet de mettre à l'échelle la taille des éléments sur vos diapositives :

```md
<Transform :scale="0.5" origin="top center">
  <YourElements />
</Transform>
```

C'est utile lorsque vous souhaitez ajuster la taille de certains éléments sur vos diapositives sans affecter la mise en page de l'ensemble de la diapositive.

Pour mettre à l'échelle toutes les diapositives de votre présentation, vous pouvez définir la taille du canevas des diapositives :

<LinkCard link="features/canvas-size" />

Pour mettre à l'échelle plusieurs diapositives de votre présentation, vous pouvez utiliser l'option `zoom` :

<LinkCard link="features/zoom-slide" />
