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

### `$slidev.nav`

Un objet réactif contenant les propriétés et les contrôles de la navigation des diapositives. Par exemple :

```js
$slidev.nav.next() // passer à l'étape suivante

$slidev.nav.nextSlide() // passer à la diapositive suivante (saute les v-clicks)

$slidev.nav.go(10) // aller à la diapositive #10
```

```js
$slidev.nav.currentPage // numéro de la diapositive actuelle

$slidev.nav.currentLayout // ID de mise en page actuelle

$slidev.nav.clicks // nombre de clics en cours
```

Pour plus de propriétés disponibles, reportez-vous aux exportations [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

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
