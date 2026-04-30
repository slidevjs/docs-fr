---
depends:
  - guide/syntax#code-block
tags: [codeblock, layout]
description: |
  Définir une hauteur maximale pour un bloc de code et activer le défilement.
---

# Hauteur maximale

Si le code ne tient pas dans une diapositive, vous pouvez utiliser `maxHeight` pour définir une hauteur fixe et activer le défilement :

````md
```ts {2|3|7|12}{maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...autant de lignes que vous souhaitez
const c = add(1, 2)
```
````

Notez que vous pouvez utiliser `{*}` comme espace réservé pour <LinkInline link="features/line-highlighting" /> :

````md
```ts {*}{maxHeight:'100px'}
// ...
```
````
