# Syntaxe de Markdown

Les diapositives sont écrites dans **un seul fichier markdown** (par défaut `./slides.md`).

<<<<<<< HEAD
Vous pouvez utiliser [les fonctionnalités Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) comme vous le feriez normalement, avec le support supplémentaire du HTML intégré et des composants Vue. Le style à l'aide de [Windi CSS](https://windicss.org) est également pris en charge. Utilisez `---` avec une nouvelle ligne pour séparer vos diapositives.
=======
You can use [the Markdown features](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) as you normally would, with the additional support of inlined HTML and Vue Components. Styling using [UnoCSS](/custom/config-unocss) is also supported. Use `---` padded with a new line to separate your slides. 
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

~~~md
# Slidev

Hello, World!

---

# Page 2

Utilisez directement des blocs de code pour la mise en évidence

//```ts
console.log('Hello, World!')
//```

---

# Page 3

Vous pouvez directement utiliser les composants Windi CSS et Vue pour styliser et enrichir vos diapositives.

<div class="p-3">
  <Tweet id="20" />
</div>
~~~

## Front Matter & Layouts

Vous pouvez spécifier des mises en page et d'autres métadonnées pour chaque diapositive en convertissant les séparateurs en [blocs de présentation](https://jekyllrb.com/docs/front-matter/). Chaque avant-propos commence par un triple tiret et se termine par un autre. Les textes entre eux sont des objets de données au format [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/). Par exemple :

~~~md
---
layout: cover
---

# Slidev

Ceci est la page de garde.

---
layout: center
background: './images/background-1.png'
class: 'text-white'
---

# Page 2

Ceci est une page avec la mise en page «centre» et une image d'arrière-plan.

---

# Page 3

Il s'agit d'une page par défaut sans métadonnées supplémentaires.
~~~

Reportez-vous à [personnalisations](/custom/) pour plus de détails.

<<<<<<< HEAD
## Blocs de code
=======
> The custom syntax might not be compactible with some formatters like Prettier. To improve that, we also support using a direct `yaml` code block to define the frontmatter:
>
> ~~~markdown
> ---
> layout: cover
> ---
> 
> # Slidev
> 
> This is the cover page.
> 
> ---
> 
> ```yaml
> # The first yaml block will be treated as the frontmatter of that slide
> layout: center
> background: './images/background-1.png'
> class: 'text-white'
> ```
> 
> # Page 2
> 
> This is a page with the layout `center` and a background image.
> ~~~
>
> (Available since v0.44.0)

## Code Blocks
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

L'une des principales raisons pour lesquelles je construis Slidev est de faire en sorte que mon code apparaisse parfaitement dans les diapositives. Donc, comme vous vous y attendiez, vous pouvez utiliser le bloc de code aromatisé Markdown pour mettre en évidence votre code.

~~~ts
//```ts
console.log('Hello, World!')
//```
~~~

<<<<<<< HEAD
Nous supportons [Prism](http://prismjs.com) et [Shiki](https://github.com/shiki/shiki) en tant que surligneurs de syntaxe. Se référer à [la section Surligneurs](/custom/highlighters) pour plus de détails.
=======
We support [Prism](https://prismjs.com), [Shiki](https://github.com/shikijs/shiki) and [Shikiji](https://github.com/antfu/shikiji) as syntax highlighters. Refer to [the highlighters section](/custom/highlighters) for more details.
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

### Mise en évidence de ligne

<<<<<<< HEAD
Pour mettre en évidence des lignes spécifiques, ajoutez simplement des numéros de ligne entre crochets `{}`. Les numéros de ligne commencent à compter de 1.
=======
To highlight specific lines, simply add line numbers within bracket `{}`. Line numbers start counting from 1 by default.
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

~~~ts
//```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

<<<<<<< HEAD
Pour changer la surbrillance en plusieurs étapes, vous pouvez utiliser `|` pour les séparer. Par exemple
=======
You can enable line number to all slides by setting `lineNumbers: true` on the config or enable each code block individually by setting `lines:true`. In case you want to disable the numbering for an specific block when `lineNumbers: true` you can set `lines:false` for that block:

~~~ts
//```ts {2,3}{lines:true}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

You can also set the starting line for each code block and highlight the lines accordingly, defaults to 1:

~~~ts
//```ts {6,7}{lines:true, startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

To change the highlight in multiple steps, you can use `|` to separate them. For example
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

~~~ts
//```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

Cela mettra d'abord en évidence `a: Ref <number> | number` et `b: Ref <number> | number`, puis `return computed (() => unref (a) + unref (b))` après un clic, et enfin, tout le bloc. Pour en savoir plus, consultez le [guide des animations de clics](/guide/animations).

<<<<<<< HEAD
Pour ignorer la mise en surbrillance des lignes, vous pouvez définir le numéro de ligne sur "0". Par exemple
=======
You can start the highlight at a specific click:

~~~ts
//```ts {2-3|5|all}{at:0}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

This is especially useful when you need to sync different animations (when using `two-cols` layout and list animation for instance).
You may need to set the [custom clicks count](/guide/animations#custom-clicks-count) for the slide progression to function correctly.

To skip highlighting any lines, you can set the line number to `0`. For example
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

~~~ts {0}
//```ts {0}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

Si le code ne rentre pas dans une diapositive, vous pouvez passer une option maxHeight supplémentaire qui définira une hauteur fixe
et activer le défilement

~~~ts {2|3|7|12}
//```ts {2|3|7|12}{maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...as many lines as you want
const c = add(1, 2)
//```
~~~

### Éditeur Monaco

Chaque fois que vous souhaitez apporter des modifications à la présentation, ajoutez simplement `{monaco}` après l'identifiant de la langue - cela transforme le bloc en un éditeur Monaco complet!

~~~ts
//```ts {monaco}
console.log('HelloWorld')
//```
~~~

En savoir plus sur la [configuration de Monaco](/custom/config-monaco).

<<<<<<< HEAD
## Styles intégrés
=======
### Monaco diff

Monaco can also generate a diff between two code blocks. Use `{monaco-diff}` to turn the block into a [diff Monaco editor](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example) and use `~~~` to separate both original and modified version of the code!

```md
//```ts {monaco-diff}
This line is removed on the right.
just some text
abcd
efgh
Some more text
~~~
just some text
abcz
zzzzefgh
Some more text.
This line is removed on the left.
//```
```

## Embedded Styles
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

Vous pouvez utiliser la balise `<style>` dans votre Markdown directement pour remplacer les styles de la **diapositive actuelle**.

```md
# C'est rouge

<style>
h1 {
  color: red
}
</style>

---

# La prochaine diapositive n'est pas affectée
```

<<<<<<< HEAD
La balise `<style>` dans Markdown est toujours [scoped](https://vue-loader.vuejs.org/guide/scoped-css.html). Pour avoir des remplacements de style globaux, consultez la [section de personnalisation](/custom/directory-structure#style).

Propulsé par [Windi CSS](https://windicss.org), vous pouvez utiliser directement des css imbriqués et des [répertoires](https://windicss.org/features/directives.html) (par exemple, `@apply`)
=======
`<style>` tag in Markdown is always [scoped](https://vuejs.org/api/sfc-css-features.html#scoped-css). As an outstanding result, a selector with the child combinator (`.a > .b`) is unusable as such; see the previous link. To have global style overrides, check out the [customization section](/custom/directory-structure#style).

Powered by [UnoCSS](/custom/config-unocss), you can directly use nested css and [directives](https://windicss.org/features/directives.html) (e.g. `@apply`)
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

```md
# Slidev

> Hello `world`

<style>
blockquote {
  code {
    @apply text-teal-500 dark:text-teal-400;
  }
}
</style>
```

## Assets statiques

Tout comme vous le feriez dans Markdown, vous pouvez utiliser des images pointant vers une URL distante ou locale.

Pour les assets statiques, le [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) intégré les mettra en cache sur le disque à la première exécution afin que vous puissiez avoir un chargement instantané même pour de grandes images plus tard.

```md
![Image distante](https://sli.dev/favicon.png)
```

Pour les ressources locales, placez-les dans le [dossier `public`](/custom/directory-structure.html#public) et référencez-les avec **la barre oblique principale**.

```md
![Image locale](/pic.png)
```

Si vous souhaitez appliquer des tailles ou des styles personnalisés, vous pouvez les convertir en balise `<img>`

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```

## Remarques

Vous pouvez également prendre des notes pour chaque diapositive. Ils apparaîtront en [Mode Présentateur](/guide/presenter-mode) pour que vous puissiez vous y référer pendant les présentations.

Dans Markdown, le dernier bloc de commentaire de chaque diapositive sera traité comme une note.

~~~md
---
layout: cover
---

# Page 1

Ceci est la page de garde.

<!-- Ceci est une note -->

---

# Page 2

<!-- Ce n'est PAS une note car elle précède le contenu de la diapositive -->

La deuxième page

<!--
Ceci est une autre note
-->
~~~

## Icônes

Slidev vous permet d'accéder à presque tous les jeux d'icônes open-source populaires **directement** dans votre markdown. Propulsé par [`unplugin-icons`](https://github.com/antfu/unplugin-icons) et [Iconify](https://iconify.design/).

Le nom suit la conversion de [Iconify](https://iconify.design/) `{collection-name}-{icon-name}`. Par exemple:

- `<mdi-account-circle />` - <mdi-account-circle /> de [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> de [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> de [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-chat-avec-des-larmes-de-joie />` - <twemoji-cat-with-tears-of-joy /> de [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> de [Logos SVG](https://github.com/gilbarbara/logos)
- Et beaucoup plus...

Vous pouvez parcourir et rechercher toutes les icônes disponibles avec [Icônes](https://icones.js.org/).

### Icônes de style

Vous pouvez styliser les icônes comme les autres éléments HTML. Par exemple :

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## Emplacements

> Disponible depuis v0.18

Certaines mises en page peuvent fournir de multiples points de contributions utilisant [Les emplacements nommés de Vue](https://v3.vuejs.org/guide/component-slots.html).

Par exemple, dans [la mise en page `two-cols`](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue), vous pouvez avoir deux colonnes à gauche (emplacement `par défaut`) et à droite (emplacement de `droite`) côte à côte.

```md
---
layout: two-cols
---

<template v-slot:default>

# Gauche

Cela apparaît sur la gauche

</template>
<template v-slot:right>

# Droite

Cela apparaît sur la droite

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>

<h3>Gauche</h3>
<p>Cela apparaît sur la gauche</p>
</div>
<div>
<h3>Droite</h3>
<p>Cela apparaît sur la droite</p>
</div>
</div>

Nous fournissons également une syntaxe abrégée `::name::` pour le nom de l'emplacement. L'exemple suivant fonctionne exactement de la même manière que le précédent.

```md
---
layout: two-cols
---

# Gauche

Cela apparaît sur la gauche

::right::

# Droite

Cela apparaît sur la droite
```

Vous pouvez également spécifier explicitement l'emplacement par défaut et fournir dans un ordre personnalisé

```md
---
layout: two-cols
---

::right::

# Droite

Cela apparaît sur la droite

::default::

# Gauche

Cela apparaît sur la gauche
```

## Configurations

Toutes les configurations nécessaires peuvent être définies dans le fichier Markdown. Par exemple :

```md
---
theme: seriph
layout: cover
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# Slidev

Ceci est la page de garde.
```

En savoir plus sur les [configurations frontmatter](/custom/#frontmatter-configures).

## LaTeX

Slidev est livré avec le support LaTeX prêt à l'emploi, alimenté par [KaTeX](https://katex.org/).

<Tweet id="1392246507793915904" />

### Rendu en ligne

Entourez votre LaTeX d'un seul `$` de chaque côté pour un rendu en ligne.

```md
$\sqrt{3x-1}+(1+x)^2$
```

### Block

Utilisez deux (`$$`) pour le rendu en bloc. Ce mode utilise des symboles plus grands et centre
le résultat.

```md
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$
```

En savoir plus: [Démo](https://sli.dev/demo/starter/8) | [KaTeX](https://katex.org/) | [`markdown-it-katex`](https://github.com/waylonflinn/markdown-it-katex)

<<<<<<< HEAD
## Diagrammes
=======
### LaTex line highlighting

> Available since v0.43.1

To highlight specific lines, simply add line numbers within bracket `{}`. Line numbers start counting from 1 by default.

```md
$$ {1|3|all}
\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}
$$
```

## Diagrams
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

Vous pouvez également créer des diagrammes / graphiques à partir de descriptions textuelles dans votre Markdown, alimenté par [Mermaid](https://mermaid-js.github.io/mermaid).

Les blocs de code marqués comme `mermaid` seront convertis en digrammes, par exemple :

~~~md
//```mermaid
sequenceDiagram
Alice->John: Hello John, how are you?
Note over Alice,John: A typical interaction
//```
~~~

Vous pouvez en outre lui transmettre un objet d'options pour spécifier la mise à l'échelle et la thématisation. La syntaxe de l'objet est un littéral d'objet JavaScript, vous devrez ajouter des guillemets (`` '') pour les chaînes et utiliser une virgule (`,`) entre les clés.

~~~md
//```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
//```
~~~

En savoir plus: [Démo](https://sli.dev/demo/starter/9) | [Mermaid](https://mermaid-js.github.io/mermaid)

## Entrées multiples

Depuis la version v0.15.0, nous avons livré le support multi-entrées. Cela signifie que vous pouvez diviser votre `slides.md` en plusieurs fichiers and les organiser comme vous le souhaitez.

> Disponible depuis v0.15

Vous pouvez diviser votre `slides.md` en plusieurs fichiers et les organiser comme vous le souhaitez.

`slides.md` :

```md
# Page 1

Ceci est une page normale

---
src: ./sous-page2.md
---

<!-- Cette page sera chargée depuis './subpage2.md' -->
Le contenu en ligne sera ignoré
```

`sous-page2.md` :

```md
# Page 2

Cette page provient d'un autre fichier
```

### Fusion de frontmatter

Vous pouvez fournir des frontmatters depuis l'entrée principale mais également depuis une page markdown externe. S'il y a les mêmes clés, celles de l'**entrée principale ont la priorité la plus élevée**. Par exemple

`slides.md` :

```md
---
src: ./cover.md
background: https://sli.dev/bar.png
class: text-center
---
```

`cover.md` :

```md
---
layout: cover
background: https://sli.dev/foo.png
---

# Couverture

Page de couverture
```

Ils finiront par être équivalents à la page suivante :

```md
---
layout: cover
background: https://sli.dev/bar.png
class: text-center
---

# Couverture

Page de couverture
```

### Réutilisation de la page

Avec la prise en charge des entrées multiples, la réutilisation des pages peut être simple. Par exemple :

```yaml
---
src: ./cover.md
---

---
src: ./intro.md
---

---
src: ./content.md
---

---
# réutilisation
src: ./content.md
---
```

## MDC Syntax

> Available since v0.43.0

Slidev has and experimental support for [MDC (Markdown Components) Syntax](https://content.nuxtjs.org/guide/writing/mdc) powered by [`markdown-it-mdc`](https://github.com/antfu/markdown-it-mdc).

You can enable it by add `mdc: true` to the frontmatter of your markdown file.

```md
---
mdc: true
---

This is a [red text]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
The **default** slot
::
```

Learn more about [the syntax](https://content.nuxtjs.org/guide/writing/mdc).
