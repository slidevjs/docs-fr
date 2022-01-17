# Composants

## Composants Intégrés

> Les documentations de cette section sont toujours en cours d'élaboration. Avant cela, vous pouvez directement jeter un coup d'oeil au [code source](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin)

<<<<<<< HEAD
## Composants Customisés
=======
### `TOC`

Insert a Table Of Content.

Titles and title levels get automatically retrieved from the first title element of each slides.

You can override this automatic behaviour for a slide by using the front matter syntax:
```yml
---
title: Amazing slide title
level: 2
---
```

Or if you prefer the slide to not appear in the TOC at all, you can use:
```yml
---
hideInToc: true
---
```

#### Usage
~~~md
<Toc />
~~~

Parameters:

* `columns` (`string | number`, default: `1`): The number of columns of the display
* `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
* `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Display all items
  * `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  * `'onlySiblings'`: Display only items that are in current tree and their direct siblings

## Custom Components
>>>>>>> 06ae2757fe5d59fbc9f2acd5867bba7521f3d679

Créer un répertoire `components/` sous la racine de votre projet, et placez simplement vos composants Vue personnalisés sous celui-ci, puis vous pouvez l'utiliser avec le même nom dans votre fichier markdown!

Pour en savoir plus, consultez la section [Customisation](/custom/directory-structure#components).

## Composants fournis par thème

Les thèmes peuvent également fournir des composants. Veuillez lire leurs documentations pour découvrir ce qu'ils fournissent.

En savoir plus sur la section [structure de répertoires](/custom/directory-structure)
