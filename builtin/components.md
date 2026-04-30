# Composants

Cette page liste tous les composants intégrés fournis par Slidev. Ces composants peuvent être utilisés **directement** dans vos diapositives.

Notez que <LinkInline link="guide/theme-addon" /> peut fournir des composants supplémentaires. Pour ajouter vos propres composants, voir <LinkInline link="guide/component#write" />.

## `Arrow`

Dessiner une flèche.

### Utilisation

```md
<Arrow x1="10" y1="20" x2="100" y2="200" />
```

Ou :

```md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
```

Props :

- `x1` (`string | number`, requis) : position x du point de départ
- `y1` (`string | number`, requis) : position y du point de départ
- `x2` (`string | number`, requis) : position x du point d'arrivée
- `y2` (`string | number`, requis) : position y du point d'arrivée
- `width` (`string | number`, par défaut : `2`) : épaisseur de la ligne
- `color` (`string`, par défaut : `'currentColor'`) : couleur de la ligne
- `two-way` (`boolean`, par défaut : `false`) : dessiner une flèche bidirectionnelle

## `VDragArrow`

Un composant `Arrow` qui peut être déplacé.

### Utilisation

<LinkCard link="features/draggable#draggable-arrow" />

Les props non liées à la position sont les mêmes que [le composant `Arrow`](#arrow).

## `AutoFitText`

> Expérimental

Boîte à l'intérieur de laquelle la taille de la police s'adapte automatiquement au contenu. Similaire aux zones de texte de PowerPoint ou Keynote.

### Utilisation

```md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
```

Props :

- `max` (`string | number`, par défaut `100`) : taille de police maximale
- `min` (`string | number`, par défaut `30`) : taille de police minimale
- `modelValue` (`string`, par défaut `''`) : contenu du texte

## `LightOrDark`

Utilisez-le pour afficher un contenu ou un autre en fonction du thème clair ou sombre actif.

### Utilisation

Utilisez-le avec les deux Slots nommés `#dark` et `#light` :

```md
<LightOrDark>
  <template #dark>Dark mode actif</template>
  <template #light>Light mode actif</template>
</LightOrDark>
```

Les props fournies sur le composant `LightOrDark` seront disponibles via les props de slot scopé :

```md
<LightOrDark width="100" alt="some image">
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

## `Link`

Insérer un lien que vous pouvez utiliser pour naviguer vers une diapositive donnée.

### Utilisation

```md
<Link to="42">Aller à la diapositive 42</Link>
<Link to="42" title="Aller à la diapositive 42"/>
<Link to="solutions" title="Voir les solutions"/>
```

Props :

- `to` (`string | number`) : le chemin de la diapositive vers laquelle naviguer (les chemins des diapositives commencent à `1`)
- `title` (`string`) : le titre à afficher

On peut utiliser une chaîne comme `to`, à condition que la route correspondante existe, par ex.

```md
---
routeAlias: solutions
---

# Quelques solutions!
```

## `PoweredBySlidev`

Affiche « Powered by Slidev » avec un lien vers le site web de Slidev.

## `RenderWhen`

Rendre les slots en fonction du contexte (par exemple si nous sommes dans la vue présentateur).

### Utilisation

```md
<RenderWhen context="presenter">Cela ne sera rendu qu’en vue présentateur.</RenderWhen>
```

Type de contexte : `'main' | 'visible' | 'print' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Props :

- `context` (`Context | Context[]`) : un contexte ou un tableau de contextes à vérifier
  - `'main'` : Rendre dans les diapositives et la vue présentateur (équivalent à ['slide', 'presenter']),
  - `'visible'` : Rendre le contenu s'il est visible
  - `'print'` : Rendre en mode impression
  - `'slide'` : Rendre dans les diapositives
  - `'overview'` : Rendre dans la vue d'ensemble
  - `'presenter'` : Rendre dans la vue présentateur
  - `'previewNext'` : Rendre dans la vue de la prochaine diapositive du présentateur

Slots :

- `#default` : Rendu lorsque le contexte correspond
- `#fallback` : Rendu lorsque le contexte ne correspond pas

## `SlideCurrentNo`

Numéro de la diapositive actuelle.

### Utilisation

```md
<SlideCurrentNo />
```

## `SlidesTotal`

Nombre total de diapositives.

### Utilisation

```md
<SlidesTotal />
```

## `TitleRenderer`

Insérer le titre principal d'une diapositive analysé en HTML.

Les titres et les niveaux de titre sont automatiquement récupérés à partir du premier élément de titre de chaque diapositive.

Vous pouvez remplacer ce comportement automatique pour une diapositive en utilisant la syntaxe front matter :

```yml
---
title: Amazing slide title
level: 2
---
```

### Utilisation

Le composant `<TitleRenderer>` est un composant virtuel que vous pouvez importer avec :

```js
import TitleRenderer from '#slidev/title-renderer'
```

Ensuite, vous pouvez l'utiliser avec :

```md
<TitleRenderer no="42" />
```

Props :

- `no` (`string | number`) : le numéro de la diapositive dont afficher le titre (les diapositives commencent à `1`)

## `Toc`

Insérer une table des matières.

Si vous souhaitez qu'une diapositive n'apparaisse pas dans le composant `<Toc>`, vous pouvez utiliser l'option `hideInToc` dans le frontmatter de la diapositive :

```yml
---
hideInToc: true
---
```

Les titres sont affichés en utilisant [le composant `<Titles>`](#titles)

### Utilisation

```md
<Toc />
```

Props :

- `columns` (`string | number`, par défaut : `1`) : le nombre de colonnes de l'affichage
- `listClass` (`string | string[]`, par défaut : `''`) : classes à appliquer à la liste de la table des matières
- `maxDepth` (`string | number`, par défaut : `Infinity`) : le niveau de profondeur maximal des titres à afficher
- `minDepth` (`string | number`, par défaut : `1`) : le niveau de profondeur minimal des titres à afficher
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, par défaut : `'all'`) :
  - `'all'` : Afficher tous les éléments
  - `'onlyCurrentTree'` : Afficher uniquement les éléments de l'arborescence actuelle (élément actif, parents et enfants de l'élément actif)
  - `'onlySiblings'` : Afficher uniquement les éléments de l'arborescence actuelle et leurs frères et sœurs directs

## `Transform`

Appliquer une mise à l'échelle ou une transformation aux éléments.

### Utilisation

```md
<Transform :scale="0.5" origin="top center">
  <YourElements />
</Transform>
```

Props :

- `scale` (`number | string`, par défaut `1`) : valeur de l'échelle de transformation
- `origin` (`string`, par défaut `'top left'`) : valeur de l'origine de transformation

## `Tweet`

Intégrer un tweet.

### Utilisation

```md
<Tweet id="20" />
```

Props :

- `id` (`number | string`, requis) : id du tweet
- `scale` (`number | string`, par défaut `1`) : valeur de l'échelle de transformation
- `conversation` (`string`, par défaut `'none'`) : [paramètre d'intégration de tweet](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`, par défaut `'visible'`) : [paramètre d'intégration de tweet](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

## `BlueSky`

Intégrer un post Bluesky.

### Utilisation

```md
<BlueSky uri="https://bsky.app/profile/sli.dev/post/3la7gcgfwpe2n" />
<BlueSky uri="at://did:plc:432mbsu2xucyvxl6sluohidu/app.bsky.feed.post/3la7gcgfwpe2n" />
```

Props :

- `uri` (`string`, requis) : AT-URI du post Bluesky, ou une URL `https://bsky.app/profile/.../post/...`
- `scale` (`number | string`, par défaut `1`) : valeur de l'échelle de transformation

## `VAfter`, `VClick` et `VClicks`

<LinkCard link="guide/animations#click-animation" />

## `VSwitch`

Basculer entre plusieurs slots en fonction des clics.

<LinkCard link="guide/animations#enter-leave" />

- Si la prop `unmount` est définie à `true`, le slot précédent sera démonté lors du passage au slot suivant. La valeur par défaut est `false`.
- Utilisez les props `tag` et `childTag` pour changer la balise par défaut du composant et de ses enfants. La valeur par défaut est `div`.
- Utilisez la prop `transition` pour changer l'effet de transition. La valeur par défaut est `false` (désactivé).

## `VDrag`

<LinkCard link="features/draggable" />

## `SlidevVideo`

Intégrer une vidéo.

### Utilisation

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

Props :

- `controls` (`boolean`, par défaut : `false`) : afficher les contrôles de la vidéo
- `autoplay` (`boolean | 'once'`, par défaut : `false`) :
  - `true` ou `'once'` : démarrer la vidéo une seule fois et ne pas la redémarrer une fois terminée ou mise en pause
  - `false` : ne jamais démarrer automatiquement la vidéo (utiliser `controls` à la place)
- `autoreset` (`'slide' | 'click'`, par défaut : `undefined`) :
  - `'slide'` : revenir au début de la vidéo lors du retour à la diapositive
  - `'click'` : revenir au début de la vidéo lors du retour au tour de clic du composant
- `poster` (`string | undefined`, par défaut : `undefined`) :
  - La source de l'image à afficher lorsque la vidéo ne joue pas.
- `printPoster` (`string | undefined`, par défaut : `undefined`) :
  - Le remplacement pour `poster` lors de l'impression.
- `timestamp` (`string | number`, par défaut : `0`) :
  - Le temps de départ de la vidéo en secondes.
- `printTimestamp` (`string | number | 'last' | undefined`, par défaut : `undefined`) :
  - Le remplacement pour `timestamp` lors de l'impression.

::: warning
Lors de l'exportation, la vidéo peut ne pas se charger car Chromium ne supporte pas certains formats vidéo. Dans ce cas, vous pouvez spécifier le chemin de l'exécutable du navigateur. Voir [Chemin de l'exécutable Chromium](/guide/exporting.html#executable-path) pour plus d'informations.
:::

## `Youtube`

Intégrer une vidéo YouTube.

### Utilisation

```md
<Youtube id="luoMHjh-XcQ" />
```

Props :

- `id` (`string`, requis) : id de la vidéo YouTube
- `width` (`number`) : largeur de la vidéo
- `height` (`number`) : hauteur de la vidéo

Vous pouvez également faire démarrer la vidéo à un moment précis en ajoutant `?start=1234` à la valeur de l'id (où `1234` est le nombre de secondes),
