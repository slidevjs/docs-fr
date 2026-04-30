---
depends:
  - guide/global-context
tags: [client-api]
description: |
  Hooks pour gérer le cycle de vie des diapositives.
---

# Hooks de diapositives

Slidev fournit un ensemble de hooks pour vous aider à gérer le cycle de vie des diapositives :

```ts twoslash
import { onSlideEnter, onSlideLeave, useIsSlideActive } from '@slidev/client'

const isActive = useIsSlideActive()

onSlideEnter((to, from) => {
  /* Appelé chaque fois que la diapositive devient active */
})

onSlideLeave((to, from) => {
  /* Appelé chaque fois que la diapositive devient inactive */
})
```

Vous pouvez également utiliser <LinkInline link="guide/global-context" /> pour accéder à d'autres informations de contexte utiles.

::: warning

Dans le composant de diapositive, les hooks `onMounted` et `onUnmounted` ne sont pas disponibles, car l'instance du composant est préservée même lorsque la diapositive n'est pas active. Utilisez `onSlideEnter` et `onSlideLeave` à la place.

:::
