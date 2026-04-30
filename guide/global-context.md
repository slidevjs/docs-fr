# Contexte global

Slidev injecte plusieurs valeurs de contexte global pour des contrôles de navigation avancés.

## Utilisation directe {#direct-usage}

Vous pouvez y accéder directement dans vos diapositives ou composants :

```md [slides.md]
# Page 1

La page actuelle est : {{ $nav.currentPage }}
```

```vue [Foo.vue]
<template>
  <div>Titre : {{ $slidev.configs.title }}</div>
  <button @click="$nav.next">
    Suivant
  </button>
  <button @click="$nav.nextSlide">
    Diapositive suivante
  </button>
</template>
```

## Utilisation composable {#composable-usage}

> Disponible depuis la v0.48.0

Si vous souhaitez obtenir le contexte de manière programmatique (et de manière typée), vous pouvez importer des composables depuis `@slidev/client` :

```vue
<script setup>
import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const { currentPage, currentLayout, currentSlideRoute } = useNav()
const { isDark } = useDarkMode()
const isActive = useIsSlideActive()
onSlideEnter((to, from) => { /* ... */ })
onSlideLeave((to, from) => { /* ... */ })
// ...
</script>
```

> [!NOTE]
> Auparavant, vous pouviez voir l'utilisation de modules imbriqués comme `import { isDark } from '@slidev/client/logic/dark.ts'`, cela est **DÉCONSEILLÉ** car ce sont des détails d'implémentation internes qui peuvent changer à l'avenir. Utilisez toujours les API publiques de `@slidev/client` si possible.

::: warning

Lorsque le composable `useSlideContext` est utilisé dans un fichier, l'injection automatique de `$slidev` sera désactivée. Vous devez obtenir manuellement l'objet `$slidev` depuis la fonction `useSlideContext`.

:::

<SeeAlso :links="['features/slide-hook']" />

## Propriétés {#properties}

### `$slidev` {#slidev}

L'objet de contexte global.

### `$frontmatter` {#frontmatter}

L'objet frontmatter de la diapositive actuelle. Notez que ceci est vide pour les composants en dehors des diapositives comme <LinkInline link="features/global-layers" />.

### `$clicks` {#clicks}

`$clicks` contient le nombre de clics sur la diapositive actuelle. Peut être utilisé conditionnellement pour afficher différents contenu selon les clics.

```html
<div v-if="$clicks > 3">Contenu</div>
```

Consultez le guide <LinkInline link="guide/animations" /> pour plus d'informations.

### `$nav` {#nav}

Un objet réactif contenant les propriétés et les contrôles de la navigation des diapositives. Par exemple :

```js
$nav.next() // passer à l'étape suivante
$nav.nextSlide() // passer à la diapositive suivante (ignorer les clics)
$nav.go(10) // aller à la diapositive #10

$nav.currentPage // numéro de la diapositive actuelle
$nav.currentLayout // nom de la mise en page actuelle
```

Pour plus de propriétés disponibles, consultez l'interface [`SlidevContextNav`](https://github.com/slidevjs/slidev/blob/main/packages/client/composables/useNav.ts).

### `$page` {#page}

`$page` contient le numéro de la page actuelle, indexé à partir de 1.

```md
Page : {{ $page }}

La page actuelle est-elle active : {{ $page === $nav.currentPage }}
```

> [!Note] > `$nav.clicks` est un état global tandis que `$clicks` est le nombre de clics local pour chaque diapositive.

### `$renderContext` {#render-context}

`$renderContext` contient le contexte de rendu actuel, qui peut être `slide`, `overview`, `presenter` ou `previewNext`

```md
<div v-if="['slide', 'presenter'].includes($renderContext)">
  Ce contenu ne sera rendu que dans la vue des diapositives principales
</div>
```

Vous pouvez également utiliser le [composant `<RenderWhen>`](../builtin/components#renderwhen).

### `$slidev.configs` {#configs}

Un objet réactif contenant les configurations du projet de diapositives. Par exemple :

```md
---
title: Ma première Slidev !
---

# Page 1

---

# N'importe quelle page

{{ $slidev.configs.title }} // 'Ma première Slidev !'
```

### `$slidev.themeConfigs` {#theme-configs}

Un objet réactif contenant les configurations parsées du thème :

```yaml
---
title: Ma première Slidev !
themeConfig:
  primary: '#213435'
---
```

Ensuite, le thème peut accéder à la couleur primaire comme suit :

```md
{{ $slidev.themeConfigs.primary }} // '#213435'
```

## Types {#types}

Si vous souhaitez obtenir un type de manière programmatique, vous pouvez importer des types comme `TocItem` depuis `@slidev/types` :

```vue
<script setup>
import type { TocItem } from '@slidev/types'

function tocFunc(tree: TocItem[]): TocItem[] {
  // ...
}
</script>
```
