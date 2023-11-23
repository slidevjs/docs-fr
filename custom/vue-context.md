# Contexte Global Vue 

Slidev a injecté un [contexte global Vue](https://v3.vuejs.org/api/application-config.html#globalproperties) `$slidev` pour les conditions avancées ou les commandes de navigation.

## Usage

Vous pouvez y accéder n'importe où dans votre markdown et modèle Vue, avec la [syntaxe "Mustache"](https://v3.vuejs.org/guide/template-syntax.html#interpolations).

```md
<!-- slides.md -->

# Page 1

La page actuelle est : {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Title: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Page suivante</button>
</template>
```

## Propriétés

### `$clicks`

`$clicks` hold a number of clicks on the current slide. Can be used conditionally to show different content on clicks.

```html
<div v-if="$clicks > 3">Content</div>
```

### `$page`

`$page` holds the number of the current page, 1-indexed.

```md
Page: {{ $page }}

Is current page active: {{ $page === $slidev.nav.currentPage }}
```

### `$renderContext`

`$renderContext` holds the current render context, can be `slide`, `overview`, `presenter` or `previewNext`

```md
<div v-if="$renderContext === 'slide'">
  This content will only be rendered in slides view
</div>
```

### `$slidev.nav`

Un objet réactif contenant les propriétés et les contrôles de la navigation des diapositives. Par exemple :

```js
$slidev.nav.next() // passer à l'étape suivante

$slidev.nav.nextSlide() // passer à la diapositive suivante (saute les v-clicks)

$slidev.nav.go(10) // aller à la diapositive #10
```

```js
$slidev.nav.currentPage // numéro de la diapositive actuelle

<<<<<<< HEAD
$slidev.nav.currentLayout // ID de mise en page actuelle

$slidev.nav.clicks // nombre de clics en cours
=======
$slidev.nav.currentLayout // current layout id
>>>>>>> e041d9f163908ef9fbd5eb7731224b8314fef92a
```

Pour plus de propriétés disponibles, reportez-vous aux exportations [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

> Note: `$slidev.nav.clicks` is a global state while `$clicks` is local to each slide. It's recommended to **use `$clicks` over `$slidev.nav.clicks`** to avoid clicks changed been triggered on page transitions.

### `$slidev.configs`

Un objet réactif contenant les [configurations analysées dans le premier frontmatter](/custom/#frontmatter-configures) de votre `slides.md`. Par example :

```yaml
---
title: Ma première Slidev
---
```

```
{{ $slidev.configs.title }} // Ma première Slidev
```

### `$slidev.themeConfigs`

Un objet réactif contenant les configurations de thème analysées.

```yaml
---
title: Ma première Slidev
themeConfig:
  primary: #213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```

### `$nav`

> Available since v0.43.0

A shorthand of `$slidev.nav`.
