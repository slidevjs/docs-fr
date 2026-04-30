---
tags: [layout]
description: |
  Déplacer, redimensionner et faire pivoter des éléments en les faisant glisser avec la souris.
---

# Éléments déplaçables

Les éléments déplaçables vous donnent la possibilité de déplacer, redimensionner et faire pivoter des éléments en les faisant glisser avec la souris. C'est utile pour créer des éléments flottants dans vos diapositives.

## Utilisation avec directive

### Données du frontmatter

```md
---
dragPos:
  square: Left,Top,Width,Height,Rotate
---

<img v-drag="'square'" src="https://sli.dev/logo.png">
```

### Données de la valeur de la directive

::: warning
Slidev utilise des expressions régulières pour mettre à jour la valeur de la position dans le contenu de la diapositive. Si vous rencontrez des problèmes, veuillez utiliser le frontmatter pour définir les valeurs à la place.
:::

```md
<img v-drag="[Left,Top,Width,Height,Rotate]" src="https://sli.dev/logo.png">
```

## Utilisation avec composant

### Données du frontmatter

```md
---
dragPos:
  foo: Left,Top,Width,Height,Rotate
---

<v-drag pos="foo" text-3xl>
  <div class="i-carbon:arrow-up" />
  Utilisez le composant `v-drag` pour avoir un conteneur déplaçable !
</v-drag>
```

### Données des props

```md
<v-drag pos="Left,Top,Width,Height,Rotate" text-3xl>
  <div class="i-carbon:arrow-up" />
  Utilisez le composant `v-drag` pour avoir un conteneur déplaçable !
</v-drag>
```

## Créer un élément déplaçable

Lorsque vous créez un nouvel élément déplaçable, vous n'avez pas besoin de spécifier la valeur de la position (mais vous devez spécifier le nom de la position si vous souhaitez utiliser le frontmatter). Slidev générera automatiquement la valeur de position initiale pour vous.

## Hauteur automatique

Vous pouvez définir `Height` sur `NaN` (en) ou `_` (si vous utilisez le composant) pour que la hauteur de l'élément déplaçable s'adapte automatiquement à son contenu.

## Contrôles

- Double-cliquez sur l'élément déplaçable pour commencer à le déplacer.
- Vous pouvez également utiliser les touches fléchées pour déplacer l'élément.
- Maintenez `Shift` pendant le déplacement pour conserver son rapport d'aspect.
- Cliquez en dehors de l'élément déplaçable pour arrêter de le déplacer.

## Flèche déplaçable

Le composant `<v-drag-arrow>` crée un élément de flèche déplaçable. Utilisez-le simplement comme ceci :

```md
<v-drag-arrow />
```

Et vous obtiendrez un élément de flèche déplaçable. Les autres props sont les mêmes que [le composant `Arrow`](/builtin/components#arrow).
