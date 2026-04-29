# Éléments déplaçables

Les éléments déplaçables vous donnent la possibilité de déplacer, redimensionner et faire pivoter des éléments en les faisant glisser avec la souris. Cela est utile pour créer des éléments flottants dans vos diapositives.

## Utilisation de la directive

### Données provenant du frontmatter

```md
---
dragPos:
  square: Gauche,Haut,Largeur,Hauteur,Rotation
---

<img v-drag="'square'" src="https://sli.dev/logo.png">
```

### Données provenant de la valeur de la directive

::: warning
Slidev utilise une expression régulière pour mettre à jour la valeur de position dans le contenu de la diapositive. Si vous rencontrez des problèmes, veuillez utiliser le frontmatter pour définir les valeurs à la place.
:::

```md
<img v-drag="[Gauche,Haut,Largeur,Hauteur,Rotation]" src="https://sli.dev/logo.png">
```

## Utilisation du composant

### Données provenant du frontmatter

```md
---
dragPos:
  foo: Gauche,Haut,Largeur,Hauteur,Rotation
---

<v-drag pos="foo" text-3xl>
  <carbon:arrow-up />
  Utilisez le composant `v-drag` pour avoir un conteneur déplaçable !
</v-drag>
```

### Données provenant des props

```md
<v-drag pos="Gauche,Haut,Largeur,Hauteur,Rotation" text-3xl>
  <carbon:arrow-up />
  Utilisez le composant `v-drag` pour avoir un conteneur déplaçable !
</v-drag>
```

## Hauteur automatique

Vous pouvez définir `Hauteur` sur `NaN` (si vous utilisez la directive) ou `_` (si vous utilisez le composant) pour que la hauteur de l'élément déplaçable s'ajuste automatiquement à son contenu.

## Créer un élément déplaçable

Lorsque vous créez un élément déplaçable pour la première fois, vous n'avez pas besoin de spécifier la valeur de position (mais vous devez spécifier le nom de la position si vous souhaitez utiliser le frontmatter). Slidev générera automatiquement la valeur de position initiale pour vous.

## Contrôles

- Double-cliquez sur l'élément déplaçable pour commencer à le faire glisser.
- Vous pouvez également utiliser les touches fléchées pour déplacer l'élément.
- Maintenez `Shift` en faisant glisser pour conserver son ratio d'aspect.
- Cliquez en dehors de l'élément déplaçable pour arrêter de le faire glisser.

## Flèche déplaçable

Le composant `<v-drag-arrow>` crée un élément flèche déplaçable. Utilisez-le simplement comme ceci :

```md
<v-drag-arrow />
```

Et vous obtiendrez un élément flèche déplaçable. Les autres props sont les mêmes que [le composant `Arrow`](/builtin/components#arrow).
