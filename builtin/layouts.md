# Mises en page

## Mises en page intégrées

> Comme les thèmes peuvent remplacer le comportement des mises en page, le meilleur moyen de connaître exactement l'usage, les paramètres et les exemples est de se référer à leur documentation

### `center`

Affiche le contenu au milieu de l'écran.

### `cover`

Utilisé pour afficher la page de couverture pour la présentation, peut contenir le titre de la présentation, la contextualisation, etc.

### `default`

La mise en page la plus basique, pour afficher n'importe quel type de contenu.

### `end`

La page finale de la présentation.

### `fact`

Pour montrer un fait ou des données avec beaucoup d'importance à l'écran.

### `full`

Utilise tout l'espace de l'écran pour afficher le contenu.

### `image-left`

Affiche une image sur le côté gauche de l'écran, le contenu sera placé sur le côté droit.

#### Usage

```yaml
---
layout: image-left

# la source de l'image
image: ./path/to/the/image

# un nom de classe customisé du contenu
class: my-cool-content-on-the-right
---
```

### `image-right`

Affiche une image sur le côté droit de l'écran, le contenu sera placé sur le côté gauche.

#### Usage

```yaml
---
layout: image-right

# la source de l'image
image: ./path/to/the/image

# un nom de classe customisé du contenu
class: my-cool-content-on-the-left
---
```

### `image`

Affiche une image comme contenu principal de la page.

#### Usage

```yaml
---
layout: image

# la source de l'image
image: ./path/to/the/image
---
```


### `iframe-left`

Affiche une page Web sur le côté gauche de l'écran, le contenu sera placé sur le côté droit.

#### Usage

```yaml
---
layout: iframe-left

# la source de la page Web
url: https://github.com/slidevjs/slidev

# un nom de classe personnalisé au contenu
class: my-cool-content-on-the-right
---
```

### `iframe-right`

Affiche une page Web sur le côté droit de l'écran, le contenu sera placé sur le côté gauche.

#### Usage

```yaml
---
layout: iframe-right

# la source de la page Web
url: https://github.com/slidevjs/slidev

# un nom de classe personnalisé au contenu
class: my-cool-content-on-the-left
---
```

### `iframe`

Affiche une page Web comme contenu principal de la page.

#### Usage

```yaml
---
layout: iframe

# la source de la page Web
url: https://github.com/slidevjs/slidev
---
```


### `intro`

Pour introduire la présentation, habituellement avec le titre de présentation, une courte description, l'auteur, etc.

### `none`

Une mise en page sans style existant.

### `quote`

Pour afficher une citation avec proéminence.

### `section`

Utilisé pour marquer le début d'une nouvelle section de présentation.

### `statement`

Faire une affirmation/déclaration comme contenu de la page principale.

### `two-cols`

Séparer le contenu de la page en deux colonnes.

#### Usage


```md
---
layout: two-cols
---

# Left

Cela apparait sur la gauche

::right::

# Right

Cela apparait sur la droite
```

<<<<<<< HEAD
## Mises en page customisées
=======
### `tow-cols-header`

Separates the upper and lower lines of the page content, and the second line separates the left and right columns.

#### Usage


```md
---
layout: two-cols-header
---

This spans both

::left::

# Left

This shows on the left

::right::

# Right

This shows on the right
```

## Custom Layouts
>>>>>>> 4b8e2bb7224b7e213ae6dee3f33b6f36fa32f0d1

Créer un répertoire `layouts/` sous la racine de votre projet, et placez simplement vos composants Vue personnalisés sous celui-ci.

Pour en savoir plus, consultez la section [Customisation](/custom/directory-structure#layouts).

## Mises en page fournies par thème

Les thèmes peuvent fournir des mises en page ou remplacer celles existantes. Veuillez lire leurs documentations pour découvrir ce qu'ils fournissent.
