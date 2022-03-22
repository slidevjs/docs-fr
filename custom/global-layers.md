# Couches globales

> Disponible depuis v0.17

Les couches globales vous permettent d'avoir des composants personnalisés qui **persistent** sur les diapositives. Cela pourrait être utile pour avoir des pieds de page, des animations de diapositives croisées, des effets globaux, etc.

<<<<<<< HEAD
Slidev fournit deux couches pour cet usage, créez `global-top.vue` ou `global-bottom.vue` sous la racine de votre projet et il reprendra automatiquement.
=======
Slidev provides three layers for this usage, create `global-top.vue`, `global-bottom.vue` or `custom-nav-controls.vue` under your project root and it will pick up automatically.
>>>>>>> b18d6f476b18393dabf793d2f08d22f243683948

Relation des couches :

- Global Top (`global-top.vue`)
- Diapositives
- Global Bottom (`global-bottom.vue`)
- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)

## Exemple

```html
<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Votre nom</footer>
</template>
```

Le texte `Votre nom` apparaîtra sur toutes vos diapositives.

<<<<<<< HEAD
Pour l'activer conditionnellement, vous pouvez l'appliquer avec le [Contexte Global Vue](/custom/vue-context).
=======
```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

The button `Next` will appear in NavControls.

To enabled it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).
>>>>>>> b18d6f476b18393dabf793d2f08d22f243683948

```html
<!-- masquer le pied de page de la page 4 -->
<template>
  <footer
    v-if="$slidev.nav.currentPage !== 4"
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
    v-if="$slidev.nav.currentLayout !== 'cover'"
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
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$slidev.nav.isPresenter" class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
