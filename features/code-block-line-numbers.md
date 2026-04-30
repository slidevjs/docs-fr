---
depends:
  - guide/syntax#code-block
tags: [codeblock]
description: |
  Activer la numérotation des lignes pour tous les blocs de code dans les diapositives ou individuellement.
---

# Numéros de ligne

Vous pouvez activer la numérotation des lignes pour tous les blocs de code dans les diapositives en définissant `lineNumbers: true` dans le headmatter, ou activer chaque bloc de code individuellement en définissant `lines: true`.

Vous pouvez également définir la ligne de départ pour chaque bloc de code et surligner les lignes en conséquence via `{startLine: number}`, dont la valeur par défaut est 1.

````md
```ts {6,7}{lines:true,startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

Notez que vous pouvez utiliser `{*}` comme espace réservé pour <LinkInline link="features/line-highlighting" /> :

````md
```ts {*}{lines:true,startLine:5}
// ...
```
````
