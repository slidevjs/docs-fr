# Couches globales

<<<<<<< HEAD
> Disponible depuis v0.17

Les couches globales vous permettent d'avoir des composants personnalisés qui **persistent** sur les diapositives. Cela pourrait être utile pour avoir des pieds de page, des animations de diapositives croisées, des effets globaux, etc.
=======
Global layers allow you to have custom components that **persist** across slides. This could be useful for having footers, cross-slide animations, global effects, etc.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Slidev fournit deux couches pour cet usage, créez `global-top.vue`, `global-bottom.vue` ou `custom-nav-controls.vue` sous la racine de votre projet et il reprendra automatiquement.

<<<<<<< HEAD
Relation des couches :

- Global Top (`global-top.vue`)
- Diapositives
- Global Bottom (`global-bottom.vue`)
=======
There are also layers for **each** slide: `layouts/slide-top.vue` and `layouts/slide-bottom.vue`. The usage is similar to the global layers, but they are applied to every slide, so there may be more than one instance of them.

::: tip
When exporting, the `--per-slide` option should be used to ensure the global layers are applied to each slide correctly.
:::

## Layers relationship

At z-axis, from top to bottom:

>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)
- Global Top (`global-top.vue`) - single instance
- Slide Top (`slide-top.vue`) - instance per slide
- Slide Content
- Slide Bottom (`slide-bottom.vue`) - instance per slide
- Global Bottom (`global-bottom.vue`) - single instance

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
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
