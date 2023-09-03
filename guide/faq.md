# FAQ

## Grilles

Étant donné que Slidev est basé sur le Web, vous pouvez appliquer n'importe quelle disposition de grille à votre guise. [Grilles CSS](https://css-tricks.com/snippets/css/complete-guide-grid/), [flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), ou même [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/), vous obtenez tous les contrôles.

<<<<<<< HEAD
Puisque nous avons [Windi CSS](https://windicss.org/) intégré, voici un moyen simple de référence :
=======
Since we have [UnoCSS](https://unocss.dev/) built-in, here is one simple way for you to reference:
>>>>>>> 6e0af1f2744db999dfeb58e8528478dea41a1240

```html
<div class="grid grid-cols-2 gap-4">
<div>

La première colonne

</div>
<div>

La seconde colonne

</div>
</div>
```

Pour allez plus loin, vous pouvez personnaliser la taille de chaque colonne comme :

```html
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
<div>
    
La première colonne (200px)

</div>
<div>

La seconde colonne (ajustement automatique)

</div>
<div>

La troisième colonne (10% de largeur jusqu'au conteneur parent)

</div>
</div>
```

<<<<<<< HEAD
En savoir plus sur [les grilles Windi CSS](https://windicss.org/utilities/grid.html).
=======
Learn more about [Windi CSS Grids](https://windicss.org/utilities/layout/grid.html).
>>>>>>> 6e0af1f2744db999dfeb58e8528478dea41a1240

## Positionnement

Les diapositives sont définies dans des tailles fixes (par défaut `980x552px`) et à l'échelle pour s'adapter à l'écran de l'utilisateur. Vous pouvez utiliser en toute sécurité la position absolue dans vos diapositives car elles évolueront avec l'écran.

Par exemple :

```html
<div class="absolute left-30px bottom-30px">
Ceci est un pied de page aligné en bas à gauche
</div>
```

Pour changer la taille réelle du canvas, vous pouvez passer les options `canvasWidth` dans votre premier frontmatter :

```yaml
---
canvasWidth: 800
---
```

## Taille de police

Si vous pensez que la taille de la police de vos diapositives est trop petite, vous pouvez l'ajuster de plusieurs manières :

### Remplacer le style local

Vous pouvez remplacer les styles de chaque diapositive avec la balise `<style>` en ligne.

```md
# Page 1

<style>
h1 {
  font-size: 10em;
}
</style>

---

# Page 2

Cela ne sera pas affecté.
```

En savoir plus: [Styles intégrés](/guide/syntax.html#embedded-styles)

### Remplacer le style global

Vous pouvez fournir des styles globaux personnalisés en créant `./style.css`, par exemple

```css
/* style.css */ 

h1 {
  font-size: 10em !important;
}
```

En savoir plus: [Style Global](/custom/directory-structure.html#style)

### Mettre à l'échelle le canvas

Changer la taille réelle du canvas mettra à l'échelle tout votre contenu (texte, images, composants, etc.) et les diapositives

```yaml
---
# defaut : 980
# puisque la toile devient plus petite, la taille visuelle deviendra plus grande
canvasWidth: 800
---
```

### Utiliser la transformation

Nous fournissons un composant intégré `<Transform />`, qui est un wrapper de la propriété de transformation CSS.

```md
<Transform :scale="1.4">

- Item 1
- Item 2

</Transform>
```
