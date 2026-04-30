---
outline: deep
---

# FAQ

## Gestion des ressources {#assets-handling}

Vous pouvez utiliser des ressources statiques comme des images et des vidéos dans vos diapositives. Comme Slidev est basé sur Vite, vous pouvez les importer directement dans vos fichiers markdown.

Les URLs qui peuvent être analysées statiquement comme des ressources peuvent utiliser des chemins relatifs :

```md
![alt](./image.png)
<img src="./image.png" />
```

Dans le cas ci-dessus, les URLs seront résolues en `/BASE_URL/assets/image.png` après la construction.

Cependant, les chemins relatifs dans le frontmatter et d'autres composants seront cassés après la construction :

```md
---
background: ./image.png  # Cassé après la construction
---

<Comp src="./image.png" />
```

Dans le cas ci-dessus, les URLs ne sont pas analysables statiquement et seront conservées telles quelles, ce qui entraînera des erreurs 404 après la construction.

Pour résoudre ce problème, vous pouvez placer ces ressources dans le [dossier public](../custom/directory-structure#public) et utiliser un chemin absolu pour les importer :

```md
---
background: /image.png
---

<Comp src="/image.png" />
```

Pour plus de détails, consultez la [documentation de Vite](https://vitejs.dev/guide/assets.html).

## Positionnement {#positioning}

Comme Slidev est basé sur le web, CSS est la principale façon de positionner les éléments. Voici quelques conseils utiles pour positionner les éléments :

### Grilles et Flexboxes

Vous pouvez utiliser CSS Grids pour créer des mises en page complexes :

::: code-group

```md [Deux colonnes]
<div class="grid grid-cols-2 gap-4">
  <div>
    La première colonne
  </div>
  <div>
    La deuxième colonne
  </div>
</div>
```

```md [Cas complexe]
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
  <div>
    La première colonne (200px)
  </div>
  <div>
    La deuxième colonne (ajustement automatique)
  </div>
  <div>
    La troisième colonne (10% de largeur par rapport au conteneur parent)
  </div>
</div>
```

:::

Et utilisez Flexboxes pour créer des mises en page plus réactives :

::: code-group

```md [Horizontal]
<div class="flex items-center">
  <div>
    Premier bloc
  </div>
  <div>
    Deuxième bloc
  </div>
</div>
```

```md [Vertical]
<div class="flex flex-col items-center">
  <div>
    Contenu centré
  </div>
</div>
```

:::

En savoir plus : [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/), [flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), ou même [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/).

### Position absolue

Vous pouvez utiliser UnoCSS pour positionner les éléments de manière absolue :

```md
<div class="absolute left-30px bottom-30px">
  Ceci est un pied de page aligné en bas à gauche
</div>
```

Ou utilisez la fonctionnalité d'éléments déplaçables :

<LinkCard link="features/draggable" />

## Ajuster les tailles {#adjust-size}

- Ajuster la taille de toutes les diapositives :

<LinkCard link="features/canvas-size" />

- Ajuster la taille de plusieurs diapositives :

<LinkCard link="features/zoom-slide" />

- Ajuster la taille de certains éléments :

<LinkCard link="features/transform-component" />
