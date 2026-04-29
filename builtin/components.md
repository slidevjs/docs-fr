---
outline: [2, 3]
---

# Composants

## Composants Intégrés

### `Arrow`

Dessine une flèche.

#### Usage

```md
<Arrow x1="10" y1="20" x2="100" y2="200" />
```

Ou :

```md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
```

Paramètres :

- `x1` (`string | number`, requis) : position x du point de départ
- `y1` (`string | number`, requis) : position y du point de départ
- `x2` (`string | number`, requis) : position x du point d'arrivée
- `y2` (`string | number`, requis) : position y du point d'arrivée
- `width` (`string | number`, défaut : `2`) : épaisseur de ligne
- `color` (`string`, défaut : `'currentColor'`) : couleur de ligne
- `two-way` (`boolean`, défaut : `false`) : dessine une flèche bidirectionnelle

### `VDragArrow`

Un composant `Arrow` qui peut être déplacé.

#### Usage

Voir https://sli.dev/guide/draggable.html#draggable-arrow

Les paramètres non liés à la position sont les mêmes que [le composant `Arrow`](#arrow).

### `AutoFitText`

> Expérimental

Boîte à l'intérieur de laquelle la taille de police s'adaptera automatiquement au contenu. Similaire à la zone de texte de PowerPoint ou Keynote.

#### Usage

```md
<AutoFitText :max="200" :min="100" modelValue="Du texte"/>
```

Paramètres :

- `max` (`string | number`, défaut `100`) : taille de police maximale
- `min` (`string | number`, défaut `30`) : taille de police minimale
- `modelValue` (`string`, défaut `''`) : contenu textuel

### `LightOrDark`

Utilisez-le pour afficher une chose ou une autre selon que le thème clair ou sombre est actif.

#### Usage

Utilisez-le avec les deux slots nommés `#dark` et `#light` :

```md
<LightOrDark>
  <template #dark>Le mode sombre est actif</template>
  <template #light>Le mode clair est actif</template>
</LightOrDark>
```

Les props fournies sur le composant `LightOrDark` seront disponibles via les props de slot à portée limitée :

```md
<LightOrDark width="100" alt="une image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
```

Vous pouvez fournir du markdown dans les slots, mais vous devrez entourer le contenu de lignes vides :

```md
<LightOrDark>
  <template #dark>

![dark](/dark.png)

  </template>
  <template #light>

![light](/light.png)

  </template>
</LightOrDark>
```

### `Link`

Insérez un lien que vous pouvez utiliser pour accéder à une diapositive donnée.

#### Usage

```md
<Link to="42">Aller à la diapositive 42</Link>
<Link to="42" title="Aller à la diapositive 42"/>
<Link to="solutions" title="Aller aux solutions"/>
```

Paramètres :

- `to` (`string | number`) : le chemin de la diapositive vers laquelle naviguer (les diapositives commencent à `1`)
- `title` (`string`) : le titre à afficher

On peut utiliser une chaîne comme `to`, à condition que la route correspondante existe, par exemple :

```md
---
routeAlias: solutions
---

# Voici quelques solutions !
```

### `PoweredBySlidev`

Rend « Powered by Slidev » avec un lien vers le site de Slidev.

### `RenderWhen`

Rend le slot uniquement lorsque le contexte correspond (par exemple lorsque nous sommes en vue présentateur).

#### Usage

```md
<RenderWhen context="presenter">Ceci ne sera rendu qu'en vue présentateur.</RenderWhen>
```

Type de contexte : `'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Paramètres :

- `context` (`Context | Context[]`) : contexte ou tableau de contextes dans lesquels vous voulez que le slot soit rendu

### `SlideCurrentNo`

Numéro de la diapositive actuelle.

#### Usage

```md
<SlideCurrentNo />
```

### `SlidesTotal`

Nombre total de diapositives.

#### Usage

```md
<SlidesTotal />
```

### `Titles`

Insère le titre principal d'une diapositive analysée au format HTML.

Les titres et les niveaux de titre sont automatiquement récupérés à partir du premier élément de titre de chaque diapositive.

Vous pouvez remplacer ce comportement automatique pour une diapositive en utilisant la syntaxe front matter :

```yml
---
title: Titre de diapositive incroyable
level: 2
---
```

#### Usage

Le composant `<Titles>` est un composant virtuel que vous pouvez importer avec :

```js
import Titles from '/@slidev/titles.md'
```

Puis vous pouvez l'utiliser avec :

```md
<Titles no="42" />
```

Paramètres :

- `no` (`string | number`) : le numéro de la diapositive à partir de laquelle afficher le titre (les diapositives commencent à `1`)

### `Toc`

Insère une table des matières.

Si vous souhaitez qu'une diapositive n'apparaisse pas dans le composant `<Toc>`, vous pouvez utiliser dans le bloc front matter de la diapositive :

```yml
---
hideInToc: true
---
```

Les titres sont affichés à l'aide du composant [`<Titles>`](#titles)

#### Usage

```md
<Toc />
```

Paramètres :

- `columns` (`string | number`, défaut : `1`) : le nombre de colonnes de l'affichage
- `listClass` (`string | string[]`, défaut : `''`) : classes à appliquer à la liste de la table des matières
- `maxDepth` (`string | number`, défaut : `Infinity`) : le niveau de profondeur maximum du titre à afficher
- `minDepth` (`string | number`, défaut : `1`) : le niveau de profondeur minimum du titre à afficher
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, défaut : `'all'`):
  - `'all'` : Afficher tous les éléments
  - `'onlyCurrentTree'` : Afficher uniquement les éléments qui sont dans l'arborescence actuelle (élément actif, parents et enfants de l'élément actif)
  - `'onlySiblings'` : Afficher uniquement les éléments qui sont dans l'arborescence actuelle et leurs frères et sœurs directs

### `Transform`

Applique une mise à l'échelle ou une transformation aux éléments.

#### Usage

```md
<Transform :scale="0.5">
  <YourElements />
</Transform>
```

Paramètres :

- `scale` (`number | string`, défaut `1`) : valeur de l'échelle de transformation
- `origin` (`string`, défaut `'top left'`) : valeur de l'origine de transformation

### `Tweet`

Intègre un tweet.

#### Usage

```md
<Tweet id="20" />
```

Paramètres :

- `id` (`number | string`, requis) : id du tweet
- `scale` (`number | string`, défaut `1`) : valeur de l'échelle de transformation
- `conversation` (`string`, défaut `'none'`) : [paramètre d'intégration de tweet](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`, défaut `'visible'`) : [paramètre d'intégration de tweet](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` et `VClicks`

Voir https://sli.dev/guide/animations.html

### `VSwitch`

Basculer entre plusieurs slots en fonction des clics.

Voir https://sli.dev/guide/animations.html#enter-leave

- Si la prop `unmount` est définie sur `true`, le slot précédent sera démonté lors du basculement vers le slot suivant. La valeur par défaut est `false`.
- Utilisez les props `tag` et `childTag` pour changer la balise par défaut du composant et de ses enfants. La valeur par défaut est `div`.
- Utilisez la prop `transition` pour changer l'effet de transition. La valeur par défaut est `false` (désactivé).

### `VDrag`

Voir https://sli.dev/guide/draggable.html

### `SlidevVideo`

Intègre une vidéo.

#### Usage

```md
<SlidevVideo v-click autoplay controls>
  <!-- Tout ce qui peut aller dans un élément vidéo HTML. -->
  <source src="/myMovie.mp4" type="video/mp4" />
  <source src="/myMovie.webm" type="video/webm" />
  <p>
    Votre navigateur ne supporte pas les vidéos. Vous pouvez la télécharger
    <a href="/myMovie.mp4">ici</a>.
  </p>
</SlidevVideo>
```

Consultez la [documentation de l'élément vidéo HTML](https://developer.mozilla.org/docs/Web/HTML/Element/Video) pour voir ce qui peut être inclus dans le slot de ce composant.

Paramètres :

- `controls` (`boolean`, défaut : `false`) : affiche les contrôles de la vidéo
- `autoplay` (`boolean | 'once'`, défaut : `false`) :
  - `true` ou `'once'` : démarre la vidéo une seule fois et ne la redémarre pas une fois terminée ou mise en pause
  - `false` : ne démarre jamais automatiquement la vidéo (se repose sur `controls` à la place)
- `autoreset` (`'slide' | 'click'`, défaut : `undefined`) :
  - `'slide'` : revient au début de la vidéo lors du retour à la diapositive
  - `'click'` : revient au début de la vidéo lors du retour au tour de clic du composant
- `poster` (`string | undefined`, défaut : `undefined`) :
  - La source de l'image à afficher lorsque la vidéo ne joue pas.
- `printPoster` (`string | undefined`, défaut : `undefined`) :
  - La surcharge pour `poster` lors de l'impression.
- `timestamp` (`string | number`, défaut : `0`) :
  - Le temps de démarrage de la vidéo en secondes.
- `printTimestamp` (`string | number | 'last' | undefined`, défaut : `undefined`) :
  - La surcharge pour `timestamp` lors de l'impression.

::: warning
Lors de l'exportation, la vidéo peut échouer à se charger car Chromium ne supporte pas certains formats vidéo. Dans ce cas, vous pouvez spécifier le chemin exécutable du navigateur. Voir [Chemin exécutable de Chromium](/guide/exporting.html#executable-path) pour plus d'informations.
:::

### `Youtube`

Intègre une vidéo YouTube.

#### Usage

```md
<Youtube id="luoMHjh-XcQ" />
```

Paramètres :

- `id` (`string`, requis) : id de la vidéo YouTube
- `width` (`number`) : largeur de la vidéo
- `height` (`number`) : hauteur de la vidéo

Vous pouvez également faire démarrer la vidéo à un moment précis si vous ajoutez `?start=1234` à la valeur de l'id (où 1234 sont des secondes).

## Composants Customisés

Créez un répertoire `components/` sous la racine de votre projet, et placez simplement vos composants Vue personnalisés sous celui-ci, puis vous pouvez les utiliser avec le même nom dans votre fichier markdown !

Pour en savoir plus, consultez la section [Personnalisation](/custom/directory-structure#components).

## Composants fournis par thème

Les thèmes peuvent également fournir des composants. Veuillez lire leurs documentations pour découvrir ce qu'ils fournissent.

En savoir plus sur la section [structure de répertoires](/custom/directory-structure)
