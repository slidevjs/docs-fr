---
outline: deep
---

# Animations

## Animations de Clics

> [!NOTE]
> Since v0.48.0, we are rewritten the click animations system with much more consistent behaviors. It might change the behaviors of your existing slides in edge cases. While this page is showing the new click system, you can find more details about the refactor in [#1279](https://github.com/slidevjs/slidev/pull/1279).

### `v-click`

Pour appliquer des "animations de clic" aux éléments, vous pouvez utiliser la directive `v-click` ou les composants `<v-click>`

```md
<!-- Component usage:
     this will be invisible until you press "next" -->
<v-click> Hello **World** </v-click>

<<<<<<< HEAD
<!-- Utilisation des composants : ce sera invisible jusqu'à ce que vous appuyiez sur "suivant" -->
<v-click>

Hello World

</v-click>

<!-- Utilisation de la directive : elle sera invisible jusqu'à ce que vous appuyiez sur "suivant" la deuxième fois -->
<div v-click class="text-xl p-2">

Bonjour!

</div>
=======
<!-- Directive usage:
     this will be invisible until you press "next" the second time -->
<div v-click class="text-xl"> Hey! </div>
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402
```

### `v-after`

<<<<<<< HEAD
L'utilisation de `v-after` est similaire à `v-click` mais cela rendra l'élément visible lorsque le `v-click` précédent sera déclenché.
=======
`v-after` is only provided as a directive. It will turn the element visible when the previous `v-click` is triggered.
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

```md
<div v-click> Hello </div>
<div v-after> World </div>
```

<<<<<<< HEAD
Lorsque vous cliquez sur le bouton "suivant", `Hello` et `World` s'affichent ensemble.
=======
When you press "next", both `Hello` and `World` will show up together.
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

### Hide after clicking

Add a `.hide` modifier to `v-click` or `v-after` to make the element invisible after clicking, instead of showing up.

```md
<div v-click> Visible after 1 click </div>
<div v-click.hide> Hidden after 2 click </div>
<div v-after.hide> Hidden after 2 click </div>
```

For `v-click` component, you can use the `hide` prop to achieve the same effect:

```md
<v-click> Visible after 1 click </v-click>
<v-click hide> Hidden after 2 click </v-click>
```

### `v-clicks`

<<<<<<< HEAD
`v-clicks` n'est fourni qu'en tant que composant. C'est un raccourci pour appliquer la directive `v-click` à tous ses éléments enfants. C'est particulièrement utile lorsque vous travaillez avec des listes.
=======
`v-clicks` is only provided as a component. It's a shorthand to apply the `v-click` directive to all its child elements. It is especially useful when working with lists and tables.
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

```md
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

<<<<<<< HEAD
Un élément deviendra visible à chaque fois que vous cliquerez sur "suivant".

### Nombre de clics personnalisés
=======
An item will become visible each time you click "next".
It accepts a `depth` prop for nested list:

```md
<v-clicks depth="2">

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2

</v-clicks>
```

Also, you can use the `every` prop to specify the number of items to show after each click:

```md
<v-clicks every="2">

- Item 1 (part 1)
- Item 1 (part 2)
- Item 2 (part 1)
- Item 2 (part 2)

</v-clicks>
```

### Positioning

By default, the clicking animations take place one by one. You can customize the animation position of elements by using the `at` prop or the `v-click` directive with value.

Like the CSS layout system, click-animated elements can be "relative" or "absolute":

#### Relative Position

This actual position of relative elements are calculated based on the previous relative elements:

~~~md
<div v-click> visible after 1 click </div>
<v-click at="+2"><div> visible after 3 clicks </div></v-click>
<div v-click.hide="'-1'"> hidden after 2 clicks </div>

```js {none|1|2}{at:'+5'}
1  // highlighted after 7 clicks
2  // highlighted after 8 clicks
```
~~~

> [!NOTE]
> The default value of `v-click` is `'+1'` when you don't specify it.

In fact, `v-after` are just shortcuts for `v-click` with `at` prop:

```md
<!-- The following 2 usages are equivalent -->
<img v-after />
<img v-click="'+0'" />

<!-- The following 3 usages are equivalent -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

:::info
Only string values start with `'+'` or `'-'` like `'+1'` are treated as relative positions:

| Value          | Kind     |
| -------------- | -------- |
| `'-1'`, `'+1'` | Relative |
| `+1` === `1`   | Absolute |
| `'1'`          | Absolute |

So don't forget the single quotes for the relative values.
:::

#### Absolute Position

The given value is the exact click count to show the element:

~~~md
<div v-click="3"> visible after 3 clicks </div>
<v-click at="2"><div> visible after 2 clicks </div></v-click>
<div v-click.hide="1"> hidden after 1 click </div>

```js {none|1|2}{at:3}
1  // highlighted after 3 clicks
2  // highlighted after 4 clicks
```
~~~

#### Mixed Case

You can mix the absolute and relative positions:

~~~md
<div v-click> visible after 1 click </div>
<div v-click="3"> visible after 3 clicks </div>
<div v-click> visible after 2 click </div>
<div v-click="'-1'"> visible after 1 click </div>
<div v-click="4"> visible after 4 clicks </div>
~~~

The following example synchronizes the highlighting of the two code blocks:

~~~md
```js {1|2}{at:1}
1 + 1
'a' + 'b'
```

```js {1|2}{at:1}
2
'ab'
```
~~~

### Enter & Leave

> Available since v0.43.0

You can also specify the enter and leave index for the `v-click` directive by passing an array. The end index is exclusive.

```md
<div v-click="[2, 4]">This will be shown on the 2nd and 3rd clicks, and hide again after the 4th.</div>
```

### Custom Total Clicks Count
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

Par défaut, Slidev compte le nombre d'étapes nécessaires avant de passer à la diapositive suivante. Vous pouvez remplacer ce paramètre en passant l'option frontmatter `clicks` :

```yaml
---
# 10 clicks in this slide, before going to the next
clicks: 10
---
```

<<<<<<< HEAD
### Ordre

En passant l'index de clic à vos directives, vous pouvez personnaliser l'ordre de la révélation

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- the order is reversed -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- visible après 3 clics -->
<v-clicks at="3">
  <div>Bonjour</div>
</v-clicks>
```

### Transitions d'éléments
=======
### Element Transitions
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

Lorsque vous appliquez la directive `v-click` à vos éléments, elle y attache le nom de classe` slidev-vclick-target`. Lorsque les éléments sont masqués, le nom de classe `slidev-vclick-hidden` sera également attaché. Par exemple :

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

Après un clic, il deviendra

```html
<div class="slidev-vclick-target">Text</div>
```

Par défaut, une transition d'opacité subtile est appliquée à ces classes :

```css
// the default

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

<<<<<<< HEAD
Vous pouvez les remplacer pour personnaliser les effets de transition dans vos feuilles de style personnalisées.

Par exemple, vous pouvez réaliser les transitions de mise à l'échelle en :
=======
You can override them to customize the transition effects in your custom stylesheets.

For example, you can achieve the scaling up transitions by:
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

Pour spécifier des animations uniquement pour certaines diapositives ou mises en page

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

En savoir plus sur la [personnalisation des styles](/custom/directory-structure#style).

## Mouvement

Slidev a [@vueuse/motion](https://motion.vueuse.org/) intégré. Vous pouvez utiliser la directive `v-motion` sur n'importe quel élément pour y appliquer un mouvement. Par exemple

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

Le texte `Slidev` passera de `-80px` à sa position d'origine lors de l'initialisation.

> Remarque : Slidev précharge la diapositive suivante pour les performances, ce qui signifie que les animations peuvent démarrer avant que vous ne naviguiez vers la page. Pour que cela fonctionne correctement, vous pouvez désactiver le préchargement pour la diapositive particulière
>
> ```md
> ---
> preload: false
> ---
> ```
>
> Ou contrôlez le cycle de vie de l'élément avec `v-if` pour avoir des contrôles fins
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

<<<<<<< HEAD
Mode d'apprentissage: [Démo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Préréglages]f(https://motion.vueuse.org/presets.html)

## Transitions de pages

> La prise en charge intégrée des diapositives n'est PAS ENCORE fournie dans la version actuelle. Nous prévoyons d'ajouter un support pour eux dans la prochaine version majeure. Avant cela, vous pouvez toujours utiliser vos styles et bibliothèques personnalisés pour ce faire.
=======
Learn mode: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Presets](https://motion.vueuse.org/features/presets)

## Slide Transitions

<div id="pages-transitions" />

> Available since v0.39.0

Slidev supports slide transitions out of the box. You can enable it by setting the `transition` frontmatter option:

```md
---
transition: slide-left
---
```

This will give you a nice sliding effects on slide switching. Setting it in the frontmatter will apply to all slides. You can also set different transition per slide.

### Builtin Transitions

- `fade` - Crossfade in/out
- `fade-out` - Fade out and then fade in
- `slide-left` - Slides to the left (slide to right when going backward)
- `slide-right` - Slides to the right (slide to left when going backward)
- `slide-up` - Slides to the top (slide to bottom when going backward)
- `slide-down` - Slides to the bottom (slide to top when going backward)
- `view-transition` - Slides with the view transitions API

### View Transitions

> Available since v0.43.0

The **View Transitions API** provides a mechanism for easily creating animated transitions between different DOM states. Learn more how it works in [View Transitions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

:::warning
Experimental: This is not supported by all browsers. Check the [Browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility) carefully before using this.
:::

You can use the `view-transition-name` CSS property to name view transitions, which creates connections between different page elements and smooth transitions when switching slides.

You can enable [MDC (Markdown Component) Syntax](/syntax#mdc-syntax) support to conveniently name view-transitions:

```md
---
transition: view-transition
mdc: true
---
# View Transition {.inline-block.view-transition-title}
---
# View Transition {.inline-block.view-transition-title}
```

### Custom Transitions

Slidev's slide transitions are powered by [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). You can provide your custom transitions by:

```md
---
transition: my-transition
---
```

and then in your custom stylesheets:

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

Learn more how it works in [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Forward & Backward Transitions

You can specify different transitions for forward and backward navigation using `|` as a separator in the transition name:

```md
---
transition: go-forward | go-backward
---
```

With this, when you go from slide 1 to slide 2, the `go-forward` transition will be applied. When you go from slide 2 to slide 1, the `go-backward` transition will be applied.

### Advanced Usage

The `transition` field accepts an option that will passed to the [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) component. For example:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402
