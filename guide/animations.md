# Animations

## Animations de Clics

### `v-click`

Pour appliquer des "animations de clic" aux éléments, vous pouvez utiliser la directive `v-click` ou les composants `<v-click>`

```md
# Hello

<!-- Utilisation des composants : ce sera invisible jusqu'à ce que vous appuyiez sur "suivant" -->
<v-click>

Hello World

</v-click>

<!-- Utilisation de la directive : elle sera invisible jusqu'à ce que vous appuyiez sur "suivant" la deuxième fois -->
<div v-click class="text-xl p-2">

Bonjour!

</div>
```

### `v-after`

L'utilisation de `v-after` est similaire à `v-click` mais cela rendra l'élément visible lorsque le `v-click` précédent sera déclenché.

```md
<div v-click>Hello</div>
<div v-after>World</div>
```

Lorsque vous cliquez sur le bouton "suivant", `Hello` et `World` s'affichent ensemble.

### `v-click-hide`

Same as `v-click` but instead of making the element appear, it makes the element invisible after clicking.

```md
<div v-click-hide>Hello</div>
```

### `v-clicks`

`v-clicks` n'est fourni qu'en tant que composant. C'est un raccourci pour appliquer la directive `v-click` à tous ses éléments enfants. C'est particulièrement utile lorsque vous travaillez avec des listes.

```md
<v-clicks>

- Item 1
- Item 2
- Item 3
- Item 4

</v-clicks>
```

Un élément deviendra visible à chaque fois que vous cliquerez sur "suivant".

<<<<<<< HEAD
### Nombre de clics personnalisés
=======
It accepts a `depth` props for nested list:

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

### Custom Clicks Count
>>>>>>> 19d3ad78801d41f8e35b2c2f4cbeecc8b90afaea

Par défaut, Slidev compte le nombre d'étapes nécessaires avant de passer à la diapositive suivante. Vous pouvez remplacer ce paramètre en passant l'option frontmatter `clicks` :

```yaml
---
# 10 clicks in this slide, before going to the next
clicks: 10
---
```

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

Vous pouvez les remplacer pour personnaliser les effets de transition dans vos feuilles de style personnalisées.

Par exemple, vous pouvez réaliser les transitions de mise à l'échelle en :

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

Mode d'apprentissage: [Démo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Préréglages]f(https://motion.vueuse.org/presets.html)

<<<<<<< HEAD
## Transitions de pages

> La prise en charge intégrée des diapositives n'est PAS ENCORE fournie dans la version actuelle. Nous prévoyons d'ajouter un support pour eux dans la prochaine version majeure. Avant cela, vous pouvez toujours utiliser vos styles et bibliothèques personnalisés pour ce faire.
=======
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
>>>>>>> 19d3ad78801d41f8e35b2c2f4cbeecc8b90afaea
