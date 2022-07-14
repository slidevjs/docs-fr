# Composants

## Composants Intégrés

> Les documentations de cette section sont toujours en cours d'élaboration. Avant cela, vous pouvez directement jeter un coup d'oeil au [code source](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin)

### `Toc`

Insérez une table des matières.

Si vous souhaitez qu'une diapositive n'apparaisse pas dans le composant `<Toc>`, vous pouvez utiliser dans le bloc de présentation de la diapositive :
```yml
---
hideInToc: true
---
```

Les titres sont affichés à l'aide du composant [`<Titres>`](#titles)

#### Usage

~~~md
<Toc />
~~~

Parameters:

* `columns` (`string | number`, default: `1`): Le nombre de colonnes de l'affichage
* `listClass` (`string | string[]`, default: `''`): Classes à appliquer à la table des matières
* `maxDepth` (`string | number`, default: `Infinity`): Le niveau de profondeur maximum du titre à afficher
* `minDepth` (`string | number`, default: `1`): Le niveau de profondeur minimum du titre à afficher
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Afficher tous les articles
  * `'onlyCurrentTree'`: Afficher uniquement les éléments qui sont dans l'arborescence actuelle (élément actif, parents et enfants de l'élément actif)
  * `'onlySiblings'`: Afficher uniquement les éléments qui sont dans l'arborescence actuelle et leurs frères et sœurs directs

### `Link`

Insérez un lien que vous pouvez utiliser pour accéder à une diapositive donnée.

#### Usage

~~~md
<Link to="42">Aller à la diapositive 42</Link>
<Link to="42" title="Aller à la diapositive 42"/>
~~~

Paramètres:

* `to` (`string | number`): Le chemin de la diapositive vers laquelle naviguer (les diapositives commencent à partir de "1")
* `title` (`string`): Le titre à afficher

### `Titles`

Insérez le titre principal d'une diapositive analysée au format HTML.

Les titres et les niveaux de titre sont automatiquement récupérés à partir du premier élément de titre de chaque diapositive.

Vous pouvez remplacer ce comportement automatique pour une diapositive à l'aide de la syntaxe frontale :
```yml
---
title: Amazing slide title
level: 2
---
```

#### Usage

Le composant `<Titles>` est un composant virtuel avec lequel vous pouvez importer :
```js
import Titles from '/@slidev/titles.md'
```

Ensuite, vous pouvez l'utiliser avec :
~~~md
<Titles no="42" />
~~~

Paramètres:

* `no` (`string | number`): Le numéro de la diapositive à partir de laquelle afficher le titre (les diapositives commencent à partir de `1`)

## Composants Customisés

Créer un répertoire `components/` sous la racine de votre projet, et placez simplement vos composants Vue personnalisés sous celui-ci, puis vous pouvez l'utiliser avec le même nom dans votre fichier markdown!

Pour en savoir plus, consultez la section [Customisation](/custom/directory-structure#components).

## Composants fournis par thème

Les thèmes peuvent également fournir des composants. Veuillez lire leurs documentations pour découvrir ce qu'ils fournissent.

En savoir plus sur la section [structure de répertoires](/custom/directory-structure)
