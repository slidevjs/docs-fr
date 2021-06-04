# Syntaxe de Markdown

Les diapositives sont écrites dans **un seul fichier markdown** (par défaut `./slides.md`).

Vous pouvez utiliser [les fonctionnalités Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) comme vous le feriez normalement, avec le support supplémentaire du HTML intégré et des composants Vue. Le style à l'aide de [Windi CSS](https://windicss.org) est également pris en charge. Utilisez `---` avec une nouvelle ligne pour séparer vos diapositives.

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

Vous pouvez spécifier des mises en page et d'autres métadonnées pour chaque diapositive en convertissant les séparateurs en [blocs de présentation](https://jekyllrb.com/docs/front-matter/). Chaque avant-propos commence par un triple tiret et se termine par un autre. Les textes entre eux sont des objets de données au format [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/). Par exemple:

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
---​

# Page 2

Ceci est une page avec la mise en page «centre» et une image d'arrière-plan.

---

# Page 3

Il s'agit d'une page par défaut sans métadonnées supplémentaires.
~~~

Reportez-vous à [personnalisations](/custom/) pour plus de détails.

## Blocs de code

L'une des principales raisons pour lesquelles je construis Slidev est de faire en sorte que mon code apparaisse parfaitement dans les diapositives. Donc, comme vous vous y attendiez, vous pouvez utiliser le bloc de code aromatisé Markdown pour mettre en évidence votre code.

~~~ts
//```ts
console.log('Hello, World!')
//```
~~~

### Mise en évidence de ligne

Pour mettre en évidence des lignes spécifiques, ajoutez simplement des numéros de ligne entre crochets `{}`. Les numéros de ligne commencent à compter de 1.

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

Pour changer la surbrillance en plusieurs étapes, vous pouvez utiliser `|` pour les séparer. Par exemple

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

### Éditeur Monaco

Chaque fois que vous souhaitez apporter des modifications à la présentation, ajoutez simplement `{monaco}` après l'identifiant de la langue - cela transforme le bloc en un éditeur Monaco complet!

~~~ts
//```ts {monaco}
console.log('HelloWorld')
//```
~~~

En savoir plus sur la [configuration de Monaco](/custom/config-monaco).

## Styles intégrés

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

La balise `<style>` dans Markdown est toujours [scoped](https://vue-loader.vuejs.org/guide/scoped-css.html). Pour avoir des remplacements de style globaux, consultez la [section de personnalisation](/custom/directory-structure#style).

Propulsé par [Windi CSS](https://windicss.org), vous pouvez utiliser directement des css imbriqués et des [répertoires](https://windicss.org/features/directives.html) (par exemple, `@apply`)

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

Slidev vous permet d'accéder à presque tous les jeux d'icônes open-source populaires ** directement ** dans votre démarque. Propulsé par [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) et [Iconify](https://iconify.design/).

Le nom suit la conversion de [Iconify](https://iconify.design/) `{collection-name}-{icon-name}`. Par exemple:

- `<mdi-account-circle />` - <mdi-account-circle /> de [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> de [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> de [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-chat-avec-des-larmes-de-joie />` - <twemoji-cat-with-tears-of-joy /> de [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> de [Logos SVG](https://github.com/gilbarbara/logos)
- Et beaucoup plus...

Vous pouvez parcourir et rechercher toutes les icônes disponibles avec [Icônes](https://icones.js.org/).

### Icônes de style

Vous pouvez styliser les icônes comme les autres éléments HTML. Par exemple:

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## Slots

> Available since v0.18

Some layouts can provide multiple contributing points using [Vue's named slots](https://v3.vuejs.org/guide/component-slots.html).

For example, in [`two-cols` layout](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue), you can have two columns left (`default` slot) and right (`right` slot) side by side.

```md
---
layout: two-cols
---

<template v-slot:default>

# Left

This shows on the left

</template>
<template v-slot:right>

# Right

This shows on the right

<template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>Left</h3>
<p>This shows on the left</p>
</div>
<div>
<h3>Right</h3>
<p>This shows on the right</p>
</div>
</div>

We also provide a shorthand syntax sugar `::name::` for slot name. The following example works exactly the same as the previous one.

```md
---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right
```

You can also explicitly specify the default slot and provide in custom order

```md
---
layout: two-cols
---

::right::

# Right

This shows on the right

::default::

# Left

This shows on the left
```

## Configurations

Toutes les configurations nécessaires peuvent être définies dans le fichier Markdown. Par exemple:

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

## Diagrammes

Vous pouvez également créer des diagrammes / graphiques à partir de descriptions textuelles dans votre Markdown, alimenté par [Mermaid](https://mermaid-js.github.io/mermaid).

Les blocs de code marqués comme `mermaid` seront convertis en digrammes, par exemple:

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

<<<<<<< HEAD
Depuis la version v0.15.0, we shipped multi-entries support. This means you can split your `slides.md` into multiple files and organize them as you want.
Depuis la version v0.15.0, nous avons livré le support multi-entrées. Cela signifie que vous pouvez diviser votre `slides.md` en plusieurs fichiers and les organiser comme vous le souhaitez.
=======
> Available since v0.15

You can split your `slides.md` into multiple files and organize them as you want.
>>>>>>> aa3bde2c57d659efb1d2071a573574c0a9e545c6

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

Ils finiront par être équivalents à la page suivante:

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

Avec la prise en charge des entrées multiples, la réutilisation des pages peut être simple. Par exemple:

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
