---
tags: [navigation, layout]
description: |
  Créer des composants personnalisés qui persistent entre les diapositives.
---

# Couches globales

Les couches globales vous permettent d'avoir des composants personnalisés qui **persistent** entre les diapositives. Cela peut être utile pour avoir des pieds de page, des animations inter-diapositives, des effets globaux, etc.

Slidev fournit trois couches pour cet usage, créez `global-top.vue`, `global-bottom.vue`, ou `custom-nav-controls.vue` à la racine de votre projet et il les détectera automatiquement.

Il existe également des couches pour **chaque** diapositive : `slide-top.vue` et `slide-bottom.vue`. L'usage est similaire aux couches globales, mais elles sont appliquées à chaque diapositive, il peut donc y avoir plus d'une instance de celles-ci.

::: tip
Si vous utilisez `global-top.vue` ou `global-bottom.vue` en fonction de l'état de navigation actuel, lors de l'exportation, l'option `--per-slide` doit être utilisée pour garantir que l'état correct est appliqué à chaque diapositive. Ou vous pouvez utiliser `slide-top.vue` et `slide-bottom.vue` à la place.
:::

## Relation des couches

En z-axis, de haut en bas :

- NavControls
  - Contrôles de navigation personnalisés (`custom-nav-controls.vue`)
- Global Top (`global-top.vue`) - instance unique
- Slide Top (`slide-top.vue`) - instance par diapositive
- Contenu de la diapositive
- Slide Bottom (`slide-bottom.vue`) - instance par diapositive
- Global Bottom (`global-bottom.vue`) - instance unique

## Exemple

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Votre Nom</footer>
</template>
```

Le texte `Your Name` apparaîtra sur toutes vos diapositives.

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Suivant" @click="$nav.next">
    <div class="i-carbon:arrow-right" />
  </button>
</template>
```

Le bouton `Next` apparaîtra dans NavControls.

Pour l'activer conditionnellement, vous pouvez utiliser <LinkInline link="guide/global-context" />

```html
<!-- masquer le pied de page à partir de la page 4 -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Votre Nom
  </footer>
</template>
```

```html
<!-- masquer le pied de page pour la mise en page "cover" -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Votre Nom
  </footer>
</template>
```

```html
<!-- un exemple de pied de page pour les pages -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- masquer le bouton en mode présentateur -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Suivant" @click="$nav.next">
    <div class="i-carbon:arrow-right" />
  </button>
</template>
```
