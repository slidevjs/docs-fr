---
outline: deep
---

# Animation

L'animation est une partie essentielle des présentations de diapositives. Slidev propose une variété de moyens pour animer vos diapositives, du plus simple au plus complexe. Ce guide vous montrera comment les utiliser efficacement.

## Animation au clic {#click-animation}

Un « **clic** » peut être considéré comme l'unité des étapes d'animation dans les diapositives. Une diapositive peut avoir un ou plusieurs clics, et chaque clic peut déclencher une ou plusieurs animations — par exemple, afficher ou masquer des éléments.

> [!NOTE]
> Depuis la v0.48.0, nous avons réécrit le système d'animations au clic avec des comportements beaucoup plus cohérents. Cela pourrait modifier le comportement de vos diapositives existantes dans certains cas limites. Cette page présente le nouveau système de clics, et vous pouvez trouver plus de détails sur la refactorisation dans [#1279](https://github.com/slidevjs/slidev/pull/1279).

### `v-click` {#v-click}

Pour appliquer des « animations de clic » d'affichage/masquage aux éléments, vous pouvez utiliser le composant `<v-click>` ou la directive `v-click`.

<!-- eslint-skip -->

```md
<!-- Utilisation du composant :
     sera invisible jusqu'à ce que vous appuyiez sur "next" -->
<v-click> Hello World! </v-click>

<!-- Utilisation de la directive :
     sera invisible jusqu'à ce que vous appuyiez sur "next" une deuxième fois -->
<div v-click class="text-xl"> Hey! </div>
```

### `v-after` {#v-after}

`v-after` rendra l'élément visible lorsque le `v-click` précédent est déclenché.

```md
<div v-click> Hello </div>
<div v-after> World </div>  <!-- ou <v-after> World </v-after> -->
```

Lorsque vous appuyez sur « suivant », `Hello` et `World` apparaîtront ensemble.

### Masquer après le clic {#hide-after-clicking}

Ajoutez un modificateur `.hide` aux directives `v-click` ou `v-after` pour rendre les éléments invisibles après le clic, au lieu de les afficher.

```md
<div v-click> Visible après 1 clic </div>
<div v-click.hide> Masqué après 2 clics </div>
<div v-after.hide> Masqué après 2 clics </div>
```

Pour les composants, vous pouvez utiliser la prop `hide` pour obtenir le même effet :

```md
<v-click> Visible après 1 clic </v-click>
<v-click hide> Masqué après 2 clics </v-click>
<v-after hide> Également masqué après 2 clics </v-after>
```

### `v-clicks` {#v-clicks}

`v-clicks` est uniquement fourni en tant que composant. C'est un raccourci pour appliquer la directive `v-click` à tous ses éléments enfants. Il est particulièrement utile pour travailler avec des listes et des tableaux.

```md
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

Un élément deviendra visible chaque fois que vous cliquez sur « suivant ».
Il accepte une prop `depth` pour les listes imbriquées :

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

Vous pouvez également utiliser la prop `every` pour spécifier le nombre d'éléments à afficher après chaque clic :

```md
<v-clicks every="2">

- Item 1.1
- Item 1.2
- Item 2.1
- Item 2.2

</v-clicks>
```

### Positionnement {#positioning}

Par défaut, les animations au clic sont déclenchées une par une. Vous pouvez personnaliser la « position » d'animation des éléments en utilisant la prop `at` ou la directive `v-click` avec une valeur.

Comme le système de mise en page CSS, les éléments animés au clic peuvent être « relatifs » ou « absolus » :

#### Position relative {#relative-position}

La position réelle des éléments relatifs est calculée par rapport aux éléments relatifs précédents :

````md
<div v-click> visible après 1 clic </div>
<v-click at="+2"><div> visible après 3 clics </div></v-click>
<div v-click.hide="'-1'"> masqué après 2 clics </div>

```js {none|1|2}{at:'+5'}
1  // surligné après 7 clics
2  // surligné après 8 clics
```
````

> [!NOTE]
> La valeur par défaut de `v-click` est `'+1'` lorsque vous ne la spécifiez pas.

En fait, `v-after` sont simplement des raccourcis pour `v-click` avec la prop `at` :

```md
<!-- Les 2 utilisations suivantes sont équivalentes -->
<img v-after />
<img v-click="'+0'" />

<!-- Les 3 utilisations suivantes sont équivalentes -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

::: tip Format de la valeur de la prop `at`
Seules les valeurs de chaîne commençant par `'+'` ou `'-'` comme `'+1'` sont traitées comme des positions relatives :

| Value          | Kind     |
| -------------- | -------- |
| `'-1'`, `'+1'` | Relative |
| `+1` === `1`   | Absolute |
| `'1'`          | Absolute |

N'oubliez donc pas les guillemets simples pour les valeurs relatives.
:::

#### Position absolue {#absolute-position}

La valeur donnée est le nombre exact de clics pour déclencher cette animation :

````md
<div v-click="3"> visible après 3 clics </div>
<v-click at="2"><div> visible après 2 clics </div></v-click>
<div v-click.hide="1"> masqué après 1 clic </div>

```js {none|1|2}{at:3}
1  // surligné après 3 clics
2  // surligné après 4 clics
```
````

#### Cas mixte {#mixed-case}

Vous pouvez mélanger les positions absolues et relatives :

```md
<div v-click> visible après 1 clic </div>
<div v-click="3"> visible après 3 clics </div>
<div v-click> visible après 2 clics </div>
<div v-click="'-1'"> visible après 1 clic </div>
<div v-click="4"> visible après 4 clics </div>
```

L'exemple suivant synchronise la mise en surbrillance des deux blocs de code :

````md {1,6}
```js {1|2}{at:1}
1 + 1
'a' + 'b'
```

```js {1|2}{at:1}
= 2
= 'ab'
```
````

### Entrée & Sortie {#enter-leave}

Vous pouvez également spécifier les index d'entrée et de sortie pour la directive `v-click` en passant un tableau. L'index de fin est exclusif.

```md
<div v-click.hide="[2, 4]">
  Ceci sera masqué au clic 2 et 3 (et affiché autrement).
</div>
<div v-click />
<div v-click="['+1', '+1']">
  Ceci sera affiché uniquement au clic 2 (et masqué autrement).
</div>
```

Vous pouvez également utiliser `v-switch` pour obtenir le même effet :

```md
<v-switch>
  <template #1> affiché au clic 1, masqué au clic 2. </template>
  <template #2> affiché au clic 2, masqué au clic 5. </template>
  <template #5-7> affiché au clic 5, masqué au clic 7. </template>
</v-switch>
```

Voir le [composant `VSwitch`](/builtin/components#vswitch) pour plus de détails.

### Nombre total de clics personnalisé {#total}

Par défaut, Slidev calcule automatiquement le nombre de clics nécessaires avant de passer à la diapositive suivante. Vous pouvez remplacer cela via l'option frontmatter `clicks` :

```yaml
---
# 10 clics dans cette diapositive, avant de passer à la suivante
clicks: 10
---
```

### Préréglages d'animation au clic {#click-animation-presets}

Vous pouvez définir des préréglages d'animation au clic par défaut dans le headmatter/frontmatter :

```yaml
---
clickAnimation: up
---
```

Ou les spécifier par élément avec des modificateurs de directive :

```md
<div v-click>Utilise le préréglage d'animation par défaut défini dans le frontmatter</div>
<div v-click.scale>Agrandit à l'affichage et réduit au masquage</div>
<div v-click.fade.right>Composes multiple animations: fade and right</div>
<div v-click.none>Pas d'animation pour cet élément</div>
```

Voici les préréglages intégrés disponibles :

- `fade` : Fondu depuis l'opacité 0.5 jusqu'à 1
- `fade-in` : Fondu depuis l'opacité 0 jusqu'à 1
- `up` : Translation de 20px vers le haut
- `down` : Translation de 20px vers le bas
- `left` : Translation de 20px vers la gauche
- `right` : Translation de 20px vers la droite
- `scale` : Mise à l'échelle à 0.9
- `none` : Désactive l'animation pour cet élément

Vous pouvez également définir vos propres préréglages avec des règles CSS personnalisées pour `.slidev-vclick-anim-{presetName}` :

```css
.slidev-vclick-anim-pop.slidev-vclick-hidden {
  transform: scale(0.96) translateY(8px);
}
```

### Transitions d'éléments {#element-transitions}

Lorsque vous appliquez la directive `v-click` à vos éléments, elle attache le nom de classe `slidev-vclick-target` à l'élément. Lorsque les éléments sont masqués, le nom de classe `slidev-vclick-hidden` est également ajouté. Par exemple :

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

Après un clic, il peut devenir :

```html
<div class="slidev-vclick-target">Text</div>
```

Par défaut, une transition subtile d'opacité est appliquée à ces classes :

```css
/* ci-dessous le style par défaut */

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

Vous pouvez les remplacer pour personnaliser les effets de transition dans vos feuilles de style personnalisées. Par exemple, vous pouvez obtenir des transitions de mise à l'échelle avec :

```css
/* styles.css */

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

Pour spécifier des animations uniquement pour certaines diapositives ou mises en page :

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

## Mouvement {#motion}

Slidev intègre [@vueuse/motion](https://motion.vueuse.org/). Vous pouvez utiliser la directive `v-motion` sur n'importe quel élément pour lui appliquer un mouvement. Par exemple :

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :leave="{ x: 80 }"
>
  Slidev
</div>
```

Le texte `Slidev` se déplacera de `-80px` vers sa position originale lors de l'entrée dans la diapositive. À la sortie, il se déplacera de `80px`.

> Avant la v0.48.9, vous deviez ajouter `preload: false` au frontmatter de la diapositive pour activer le mouvement.

### Mouvement avec clics {#motion-with-clicks}

> Disponible depuis la v0.48.9

Vous pouvez également déclencher le mouvement par des clics :

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0, y: 0 }"
  :click-1="{ x: 0, y: 30 }"
  :click-2="{ y: 60 }"
  :click-2-4="{ x: 40 }"
  :leave="{ y: 0, x: 80 }"
>
  Slidev
</div>
```

Ou combiner `v-click` avec `v-motion` :

```html
<div v-click="[2, 4]" v-motion
  :initial="{ x: -50 }"
  :enter="{ x: 0 }"
  :leave="{ x: 50 }"
>
  Affiché au clic 2 et masqué au clic 4.
</div>
```

Signification des variantes :

- `initial` : Lorsque `currentPage < thisPage`, ou que `v-click` masque l'élément courant car `$clicks` est trop petit.
- `enter` : Lorsque `currentPage === thisPage`, et que `v-click` affiche l'élément. _Priorité : la plus basse_
- `click-x` : `x` est un nombre représentant le numéro de clic **absolu**. La variante prendra effet si `$clicks >= x`. _Priorité : `x`_
- `click-x-y` : La variante prendra effet si `x <= $clicks < y`. _Priorité : `x`_
- `leave` : `currentPage > thisPage`, ou que `v-click` masque l'élément courant car `$clicks` est trop grand.

Les variantes seront combinées selon la priorité définie ci-dessus.

::: warning
En raison d'un [bug](https://github.com/vuejs/core/issues/10295) interne à Vue, actuellement **seul** `v-click` appliqué au même élément que `v-motion` peut contrôler l'animation de mouvement. En contournement, vous pouvez utiliser quelque chose comme `v-if="3 < $clicks"` pour obtenir le même effet.
:::

En savoir plus : [Démo](https://sli.dev/demo/starter/10) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Préréglages](https://motion.vueuse.org/features/presets)

## Transitions de diapositives {#slide-transitions}

<div id="pages-transitions" />

Slidev supporte les transitions de diapositives nativement. Vous pouvez les activer en définissant l'option frontmatter `transition` :

```md
---
transition: slide-left
---
```

Cela vous donnera un bel effet de glissement lors du changement de diapositive. Le définir dans le headmatter l'appliquera à toutes les diapositives. Vous pouvez également définir différentes transitions par diapositive dans les frontmatters.

### Transitions intégrées {#builtin-transitions}

- `fade` - Fondu croisé entrée/sortie
- `fade-out` - Fondu sortant puis fondu entrant
- `slide-left` - Glissement vers la gauche (glissement vers la droite en arrière)
- `slide-right` - Glissement vers la droite (glissement vers la gauche en arrière)
- `slide-up` - Glissement vers le haut (glissement vers le bas en arrière)
- `slide-down` - Glissement vers le bas (glissement vers le haut en arrière)
- `view-transition` - Via l'API view transitions

### API View Transition {#view-transitions}

L'API View Transitions fournit un mécanisme pour créer facilement des transitions animées entre différents états du DOM. En savoir plus dans [View Transitions API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

:::warning
Expérimental : Ce n'est pas supporté par tous les navigateurs. Vérifiez attentivement le [tableau de compatibilité des navigateurs](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility) avant de l'utiliser.
:::

Vous pouvez utiliser la propriété CSS `view-transition-name` pour nommer les transitions de vue, ce qui crée des connexions entre les différents éléments de la page et des transitions fluides lors du changement de diapositives.

Vous pouvez activer le support de la [syntaxe Comark](/guide/syntax#comark-syntax) pour nommer facilement les view-transitions :

```md
---
transition: view-transition
comark: true
---

# View Transition {.inline-block.view-transition-title}

---

# View Transition {.inline-block.view-transition-title}
```

### Transitions personnalisées {#custom-transitions}

Les transitions de diapositives de Slidev sont alimentées par [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). Vous pouvez fournir vos propres transitions personnalisées en :

```md
---
transition: my-transition
---
```

puis dans vos feuilles de style personnalisées :

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

En savoir plus sur son fonctionnement dans [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Transitions avant & arrière {#forward-backward-transitions}

Vous pouvez spécifier des transitions différentes pour la navigation avant et arrière en utilisant `|` comme séparateur dans le nom de la transition :

```md
---
transition: go-forward | go-backward
---
```

Ainsi, lorsque vous passez de la diapositive 1 à la diapositive 2, la transition `go-forward` sera appliquée. Lorsque vous passez de la diapositive 2 à la diapositive 1, la transition `go-backward` sera appliquée.

### Utilisation avancée {#advanced-usage}

Le champ `transition` accepte une option qui sera passée au composant [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition). Par exemple :

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
