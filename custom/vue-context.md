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

`$clicks` contient le nombre de clics sur la diapositive actuelle. Peut être utilisé conditionnellement pour afficher différents contenus selon les clics.

```html
<div v-if="$clicks > 3">Contenu</div>
```

### `$page`

`$page` contient le numéro de la page actuelle, indexé à partir de 1.

```md
Page : {{ $page }}

La page actuelle est active : {{ $page === $slidev.nav.currentPage }}
```

### `$renderContext`

`$renderContext` contient le contexte de rendu actuel, peut être `slide`, `overview`, `presenter` ou `previewNext`

```md
<div v-if="$renderContext === 'slide'">
  Ce contenu ne sera rendu que dans la vue des diapositives
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

$slidev.nav.currentLayout // ID de mise en page actuelle
```

Pour plus de propriétés disponibles, reportez-vous aux exportations [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

> Note : `$slidev.nav.clicks` est un état global tandis que `$clicks` est local à chaque diapositive. Il est recommandé d'**utiliser `$clicks` plutôt que `$slidev.nav.clicks`** pour éviter que les changements de clics ne soient déclenchés lors des transitions de page.

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
  primary: # 213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```

### `$nav`

> Disponible depuis v0.43.0

Un raccourci pour `$slidev.nav`.

## Utilisation des Composables

> Disponible depuis v0.48.0

### Contexte

Si vous souhaitez obtenir le contexte par programmation (également de manière typée), vous pouvez importer les composables depuis `@slidev/client` :

```vue
<script setup>
import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const { currentPage, currentLayout, currentSlideRoute } = useNav()
const { isDark } = useDarkMode()
const isActive = useIsSlideActive()
onSlideEnter(() => { /* ... */ })
onSlideLeave(() => { /* ... */ })
// ...
</script>
```

> [!NOTE]
> Auparavant, vous pouviez voir l'utilisation de modules imbriqués comme `import { isDark } from '@slidev/client/logic/dark.ts'`, ceci est **DÉCONSEILLÉ** car ce sont des détails d'implémentation internes et pourraient être modifiés à l'avenir. Essayez toujours d'utiliser l'API publique de `@slidev/client` autant que possible.

### Types

Si vous souhaitez obtenir un type par programmation, vous pouvez importer des types comme `TocItem` depuis `@slidev/types` :

```vue
<script setup>
import type { TocItem } from '@slidev/types'

function tocFunc(tree: TocItem[]): TocItem[] {
  // ...
}
</script>
```
