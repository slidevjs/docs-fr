---
relates:
  - guide/faq#adjust-size
  - features/canvas-size
  - features/transform-component
tags: [layout]
description: |
  Mettre à l'échelle le contenu d'une diapositive à une échelle spécifique.
---

# Zoom des diapositives

Vous trouverez peut-être certaines diapositives de votre présentation trop spacieuses ou trop encombrées. Slidev fournit une option `zoom` pour chaque diapositive qui vous permet de mettre à l'échelle le contenu d'une diapositive :

```md
---
zoom: 0.8
---

# Une diapositive avec beaucoup de contenu

---

# Les autres diapositives ne sont pas affectées
```

Pour mettre à l'échelle toutes les diapositives de votre présentation, vous pouvez définir la taille du canevas des diapositives :

<LinkCard link="features/canvas-size" />

Pour ajuster la taille de certains éléments sur vos diapositives, vous pouvez utiliser le composant `Transform` :

<LinkCard link="features/transform-component" />
