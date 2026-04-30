---
depends:
  - guide/syntax#code-block
  - guide/animations
tags: [codeblock, animation]
description: |
  Surligner des lignes spécifiques dans les blocs de code en fonction des clics.
---

# Surlignage de lignes

Pour surligner des lignes spécifiques, ajoutez simplement les numéros de ligne entre accolades `{}`. Les numéros de ligne commencent à compter à partir de 1 par défaut.

````md
```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

## Surlignage dynamique de lignes

Pour changer ce qui est surligné avec plusieurs clics, vous pouvez utiliser `|` pour séparer chaque étape :

````md
```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

Cela surlignera d'abord `a: Ref<number> | number` et `b: Ref<number> | number`, puis `return computed(() => unref(a) + unref(b))` après un clic, et enfin, tout le bloc.

Vous pouvez définir le numéro de ligne sur `hide` pour masquer le bloc de code ou `none` pour ne surligner aucune ligne :

````md
```ts {hide|none}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

::: tip
En savoir plus dans le [guide des animations de clic](/guide/animations#positioning).
:::
