# Couches globales

> Disponible depuis v0.17

Les couches globales vous permettent d'avoir des composants personnalisés qui **persistent** sur les diapositives. Cela pourrait être utile pour avoir des pieds de page, des animations de diapositives croisées, des effets globaux, etc.

Slidev fournit deux couches pour cet usage, créez `global-top.vue`, `global-bottom.vue` ou `custom-nav-controls.vue` sous la racine de votre projet et il reprendra automatiquement.

Il existe également des couches pour **chaque** diapositive : `layouts/slide-top.vue` et `layouts/slide-bottom.vue`. L'utilisation est similaire aux couches globales, mais elles sont appliquées à chaque diapositive, il peut donc y avoir plusieurs instances d'entre elles.

::: tip
Lors de l'exportation, l'option `--per-slide` doit être utilisée pour s'assurer que les couches globales sont appliquées correctement à chaque diapositive.
:::

## Relation des couches

Sur l'axe z, de haut en bas :

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
  <footer class="absolute bottom-0 left-0 right-0 p-2">Votre nom</footer>
</template>
```

Le texte `Votre nom` apparaîtra sur toutes vos diapositives.

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

Le bouton `Next` apparaîtra dans NavControls.

Pour l'activer conditionnellement, vous pouvez l'appliquer avec le [Contexte Global Vue](/custom/vue-context).

```html
<!-- masquer le pied de page de la page 4 -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Votre name
  </footer>
</template>
```

```html
<!-- masquer le pied de page de la mise en page "cover" -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Votre nom
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
<!-- masquer le bouton en mode Présentateur -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
