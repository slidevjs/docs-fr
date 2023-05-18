# Composants

## Composants Intégrés

<<<<<<< HEAD
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
=======
### `Arrow`

Draw an arrow.
>>>>>>> 7acc3394a2458462d04fe918c5d45c5414a749e6

#### Usage

~~~md
<Arrow x1="10" y1="20" x2="100" y2="200" />
~~~

Or:

~~~md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
~~~

Parameters:

<<<<<<< HEAD
* `columns` (`string | number`, défaut : `1`): Le nombre de colonnes de l'affichage
* `listClass` (`string | string[]`, défaut : `''`): Classes à appliquer à la table des matières
* `maxDepth` (`string | number`, défaut : `Infinity`): Le niveau de profondeur maximum du titre à afficher
* `minDepth` (`string | number`, défaut : `1`): Le niveau de profondeur minimum du titre à afficher
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, défaut : `'all'`):
  * `'all'`: Afficher tous les articles
  * `'onlyCurrentTree'`: Afficher uniquement les éléments qui sont dans l'arborescence actuelle (élément actif, parents et enfants de l'élément actif)
  * `'onlySiblings'`: Afficher uniquement les éléments qui sont dans l'arborescence actuelle et leurs frères et sœurs directs
=======
* `x1` (`string | number`, required): start point x position
* `y1` (`string | number`, required): start point y position
* `x2` (`string | number`, required): end point x position
* `y2` (`string | number`, required): end point x position
* `width` (`string | number`, default: `2`): line width
* `color` (`string`, default: `'currentColor'`): line color

### `AutoFitText`

> Experimental

Box inside which the font size will automatically adapt to fit the content. Similar to PowerPoint or Keynote TextBox.

#### Usage

~~~md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
~~~

Parameters:

* `max` (`string | number`, default `100`): Maximum font size
* `min` (`string | number`, default `30`): Minimum font size
* `modelValue` (`string`, default `''`): text content

### `LightOrDark`

Use it to display one thing or another depending on the active light or dark theme.

#### Usage

Use it with the two named Slots `#dark` and `#light`:
~~~md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
~~~

Provided props on `LightOrDark` component will be available using scoped slot props:
~~~md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
~~~

You can provide markdown in the slots, but you will need to surround the content with blank lines:
~~~md
<LightOrDark>
  <template #dark>
  
![dark](/dark.png)

  </template>
  <template #light>
  
![light](/light.png)

  </template>
</LightOrDark>
~~~
>>>>>>> 7acc3394a2458462d04fe918c5d45c5414a749e6

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

### `RenderWhen`

Render slot only when the context match (for example when we are in presenter view).

#### Usage

~~~md
<RenderWhen context="presenter">This will only be rendered in presenter view.</RenderWhen>
~~~

Context type: `'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Parameters:

* `context` (`Context | Context[]`): context or array of contexts you want the slot to be rendered

### `SlideCurrentNo`

Current slide number.

#### Usage

~~~md
<SlideCurrentNo />
~~~

### `SlidesTotal`

Total number of slides.

#### Usage

~~~md
<SlidesTotal />
~~~

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

<<<<<<< HEAD
## Composants Customisés
=======
### `Toc`

Insert a Table Of Content.

If you want a slide to not appear in the `<Toc>` component, you can use in the front matter block of the slide:
```yml
---
hideInToc: true
---
```

Titles are displayed using the [`<Titles>` component](#titles)

#### Usage

~~~md
<Toc />
~~~

Parameters:

* `columns` (`string | number`, default: `1`): The number of columns of the display
* `listClass` (`string | string[]`, default: `''`): Classes to apply to the table of contents list
* `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
* `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Display all items
  * `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  * `'onlySiblings'`: Display only items that are in current tree and their direct siblings

### `Transform`

Apply scaling or transforming to elements.

#### Usage

~~~md
<Transform :scale="0.5">
  <YourElements />
</Transform>
~~~

Parameters:

* `scale` (`number | string`, default `1`): transform scale value
* `origin` (`string`, default `'top left'`): transform origin value

### `Tweet`

Embed a tweet.

#### Usage

~~~md
<Tweet id="20" />
~~~

Parameters:

* `id` (`number | string`, required): id of the tweet
* `scale` (`number | string`, default `1`): transform scale value
* `conversation` (`string`, default `'none'`): [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

See https://sli.dev/guide/animations.html
### `Youtube`

Embed a youtube video.

#### Usage

~~~md
<Youtube id="luoMHjh-XcQ" />
~~~

Parameters:

* `id` (`string`, required): id of the youtube video
* `width` (`number`): width of the video
* `height` (`number`): height of the video

## Custom Components
>>>>>>> 7acc3394a2458462d04fe918c5d45c5414a749e6

Créer un répertoire `components/` sous la racine de votre projet, et placez simplement vos composants Vue personnalisés sous celui-ci, puis vous pouvez l'utiliser avec le même nom dans votre fichier markdown!

Pour en savoir plus, consultez la section [Customisation](/custom/directory-structure#components).

## Composants fournis par thème

Les thèmes peuvent également fournir des composants. Veuillez lire leurs documentations pour découvrir ce qu'ils fournissent.

En savoir plus sur la section [structure de répertoires](/custom/directory-structure)
