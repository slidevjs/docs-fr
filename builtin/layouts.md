# Mises en page

Cette page liste toutes les mises en page intégrées fournies par Slidev. Ces mises en page peuvent être utilisées via l'option `layout` dans les frontmatters de vos diapositives.

Notez que <LinkInline link="guide/theme-addon" /> peut fournir des mises en page supplémentaires ou remplacer les existantes. Pour ajouter vos propres mises en page, voir <LinkInline link="guide/write-layout" />.

## `center`

Affiche le contenu au milieu de l'écran.

## `cover`

Utilisé pour afficher la page de couverture de la présentation, peut contenir le titre de la présentation, la contextualisation, etc.

## `default`

La mise en page la plus basique, pour afficher tout type de contenu.

## `end`

La page finale de la présentation.

## `fact`

Pour afficher un fait ou des données avec une grande importance à l'écran.

## `full`

Utilise tout l'espace de l'écran pour afficher le contenu.

## `image-left`

Affiche une image sur le côté gauche de l'écran, le contenu sera placé sur le côté droit.

### Utilisation

```yaml
---
layout: image-left

# la source de l'image
image: /path/to/the/image

# un nom de classe customisée pour le contenu
class: my-cool-content-on-the-right
---
```

## `image-right`

Affiche une image sur le côté droit de l'écran, le contenu sera placé sur le côté gauche.

### Utilisation

```yaml
---
layout: image-right

# la source de l'image
image: /path/to/the/image

# un nom de classe customisée pour le contenu
class: my-cool-content-on-the-left
---
```

## `image`

Affiche une image comme contenu principal de la page.

### Utilisation

```yaml
---
layout: image

# la source de l'image
image: /path/to/the/image
---
```

Vous pouvez changer la taille de fond par défaut (`cover`) en ajoutant l'attribut `backgroundSize` :

```yaml
---
layout: image
image: /path/to/the/image
backgroundSize: contain
---
```

```yaml
---
layout: image-left
image: /path/to/the/image
backgroundSize: 20em 70%
---
```

## `iframe-left`

Affiche une page web sur le côté gauche de l'écran, le contenu sera placé sur le côté droit.

### Utilisation

```yaml
---
layout: iframe-left

# la source de la page web
url: https://github.com/slidevjs/slidev

# un nom de classe customisée pour le contenu
class: my-cool-content-on-the-right
---
```

## `iframe-right`

Affiche une page web sur le côté droit de l'écran, le contenu sera placé sur le côté gauche.

### Utilisation

```yaml
---
layout: iframe-right

# la source de la page web
url: https://github.com/slidevjs/slidev

# un nom de classe customisée pour le contenu
class: my-cool-content-on-the-left
---
```

## `iframe`

Affiche une page web comme contenu principal de la page.

### Utilisation

```yaml
---
layout: iframe

# la source de la page web
url: https://github.com/slidevjs/slidev
---
```

## `intro`

Pour introduire la présentation, généralement avec le titre de la présentation, une courte description, l'auteur, etc.

## `none`

Une mise en page sans aucun style existant.

## `quote`

Pour afficher une citation avec importance.

## `section`

Utilisé pour marquer le début d'une nouvelle section de la présentation.

## `statement`

Faire une affirmation/déclaration comme contenu principal de la page.

## `two-cols`

Sépare le contenu de la page en deux colonnes.

### Utilisation

```md
---
layout: two-cols
---

# Gauche

Ceci s'affiche à gauche

::right::

# Droite

Ceci s'affiche à droite
```

## `two-cols-header`

Sépare les lignes supérieure et inférieure du contenu de la page, et la seconde ligne sépare les colonnes gauche et droite.

### Utilisation

```md
---
layout: two-cols-header
---

Ceci s'affiche sur les deux côté

::left::

# Gauche

Ceci s'affiche à gauche

::right::

# Droite

Ceci s'affiche à droite

<style>
.two-cols-header {
  column-gap: 20px; /* Ajustez la taille de l'espace selon vos besoins */
}
</style>
```
