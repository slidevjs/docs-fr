---
outline: deep
---

# Animations

## Animations de Clics

> [!NOTE]
> Depuis v0.48.0, nous avons réécrit le système d'animations de clic avec des comportements beaucoup plus cohérents. Cela pourrait changer les comportements de vos diapositives existantes dans des cas limites. Bien que cette page montre le nouveau système de clics, vous pouvez trouver plus de détails sur la refactorisation dans [#1279](https://github.com/slidevjs/slidev/pull/1279).

### `v-click`

Pour appliquer des "animations de clic" aux éléments, vous pouvez utiliser la directive `v-click` ou les composants `<v-click>`

```md
<!-- Utilisation des composants :
     cela sera invisible jusqu'à ce que vous appuyiez sur "suivant" -->
<v-click>

Hello World

</v-click>

<!-- Utilisation de la directive :
     cela sera invisible jusqu'à ce que vous appuyiez sur "suivant" la deuxième fois -->
<div v-click class="text-xl p-2">

Bonjour !

</div>
```

### `v-after`

`v-after` n'est fourni qu'en tant que directive. Il rendra l'élément visible lorsque le `v-click` précédent sera déclenché.

```md
<div v-click> Hello </div>
<div v-after> World </div>
```

Lorsque vous cliquez sur le bouton "suivant", `Hello` et `World` s'affichent ensemble.

### Masquer après le clic

Ajoutez un modificateur `.hide` à `v-click` ou `v-after` pour masquer l'élément après le clic, au lieu de l'afficher.

```md
<div v-click> Visible après 1 clic </div>
<div v-click.hide> Masqué après 2 clics </div>
<div v-after.hide> Masqué après 2 clics </div>
```

Pour le composant `v-click`, vous pouvez utiliser la prop `hide` pour obtenir le même effet :

```md
<v-click> Visible après 1 clic </v-click>
<v-click hide> Masqué après 2 clics </v-click>
```

### `v-clicks`

`v-clicks` n'est fourni qu'en tant que composant. C'est un raccourci pour appliquer la directive `v-click` à tous ses éléments enfants. C'est particulièrement utile lorsque vous travaillez avec des listes et des tableaux.

```md
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

Un élément deviendra visible à chaque fois que vous cliquerez sur "suivant".

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

- Item 1 (partie 1)
- Item 1 (partie 2)
- Item 2 (partie 1)
- Item 2 (partie 2)

</v-clicks>
```

### Positionnement

Par défaut, les animations de clic se déroulent une par une. Vous pouvez personnaliser la position d'animation des éléments en utilisant la prop `at` ou la directive `v-click` avec une valeur.

Comme le système de mise en page CSS, les éléments animés par clic peuvent être "relatifs" ou "absolus" :

#### Position Relative

La position réelle des éléments relatifs est calculée en fonction des éléments relatifs précédents :

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

En fait, `v-after` ne sont que des raccourcis pour `v-click` avec la prop `at` :

```md
<!-- Les 2 utilisations suivantes sont équivalentes -->
<img v-after />
<img v-click="'+0'" />

<!-- Les 3 utilisations suivantes sont équivalentes -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

:::info
Seules les valeurs de chaîne commençant par `'+'` ou `'-'` comme `'+1'` sont traitées comme des positions relatives :

| Valeur         | Type     |
| -------------- | -------- |
| `'-1'`, `'+1'` | Relatif  |
| `+1` === `1`   | Absolu   |
| `'1'`          | Absolu   |

N'oubliez donc pas les guillemets simples pour les valeurs relatives.
:::

#### Position Absolue

La valeur donnée est le nombre exact de clics pour afficher l'élément :

````md
<div v-click="3"> visible après 3 clics </div>
<v-click at="2"><div> visible après 2 clics </div></v-click>
<div v-click.hide="1"> masqué après 1 clic </div>

```js {none|1|2}{at:3}
1  // surligné après 3 clics
2  // surligné après 4 clics
```
````

#### Cas Mixte

Vous pouvez mélanger les positions absolues et relatives :

```md
<div v-click> visible après 1 clic </div>
<div v-click="3"> visible après 3 clics </div>
<div v-click> visible après 2 clics </div>
<div v-click="'-1'"> visible après 1 clic </div>
<div v-click="4"> visible après 4 clics </div>
```

L'exemple suivant synchronise la mise en évidence des deux blocs de code :

````md
```js {1|2}{at:1}
1 + 1
'a' + 'b'
```

```js {1|2}{at:1}
2
'ab'
```
````

### Entrée & Sortie

Vous pouvez également spécifier l'index d'entrée et de sortie pour la directive `v-click` en passant un tableau. L'index de fin est exclusif.

```md
<div v-click.hide="[2, 4]">
  Cela sera masqué au clic 2 et 3.
</div>
<div v-click />
<div v-click="'[+1, +1]'">
  Cela sera affiché au clic 3, et masqué depuis le clic 4.
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

Voir le [Composant `VSwitch`](/builtin/components#vswitch) pour plus de détails.

### Nombre de clics personnalisés

Par défaut, Slidev compte le nombre d'étapes nécessaires avant de passer à la diapositive suivante. Vous pouvez remplacer ce paramètre en passant l'option frontmatter `clicks` :

```yaml
---
# 10 clics dans cette diapositive, avant de passer à la suivante
clicks: 10
---
```

### Transitions d'éléments

Lorsque vous appliquez la directive `v-click` à vos éléments, elle y attache le nom de classe `slidev-vclick-target`. Lorsque les éléments sont masqués, le nom de classe `slidev-vclick-hidden` sera également attaché. Par exemple :

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

Après un clic, il deviendra

```html
<div class="slidev-vclick-target">Text</div>
```

Par défaut, une transition d'opacité subtile est appliquée à ces classes :

```css
// par défaut

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
/* styles.css */

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

## Marqueurs Rough

> Disponible depuis v0.48.0

Slidev intègre [Rough Notation](https://github.com/linkstrifer/react-rough-notation) pour permettre de marquer ou de surligner des éléments dans vos diapositives.

### `v-mark`

L'intégration de Rough Notation s'accompagne de la directive `v-mark`.

#### Type

`v-mark.underline` pour le soulignement, `v-mark.circle` pour le cercle, etc. La valeur par défaut est `underline`.

#### Couleur

`v-mark.red` rend la notation `red`. Les thèmes de couleurs intégrés pris en charge proviennent d'UnoCSS. Pour les couleurs personnalisées, utilisez la syntaxe objet `v-mark="{ color: '#234' }"`.

#### Clics

`v-mark` fonctionne comme `v-click` et se déclenche après un clic. Comme `v-click`, il vous permet de passer une valeur de clic personnalisée, comme `v-mark="5"` ou `v-mark="'+1'"`.

#### Options

Vous pouvez optionnellement passer un objet à `v-mark` pour spécifier les options, par exemple :

```vue
<span v-mark="{ at: 5, color: '#234', type: 'circle' }">
Texte important
</span>
```

#### Aperçu

<video src="https://github.com/slidevjs/slidev/assets/11247099/c840340c-0aa1-4cde-b228-e6c67e5f6879" rounded-lg shadow controls></video>

## Mouvement

Slidev a [@vueuse/motion](https://motion.vueuse.org/) intégré. Vous pouvez utiliser la directive `v-motion` sur n'importe quel élément pour y appliquer un mouvement. Par exemple :

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

Mode d'apprentissage : [Démo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Préréglages](https://motion.vueuse.org/features/presets)

## Transitions de diapositives

<div id="pages-transitions" />

> Disponible depuis v0.39.0

Slidev supporte les transitions de diapositives directement. Vous pouvez les activer en définissant l'option frontmatter `transition` :

```md
---
transition: slide-left
---
```

Cela vous donnera de jolis effets de glissement lors du changement de diapositive. La définir dans le frontmatter s'appliquera à toutes les diapositives. Vous pouvez également définir des transitions différentes par diapositive.

### Transitions intégrées

- `fade` - Fondu enchaîné
- `fade-out` - Fondu sortant puis entrant
- `slide-left` - Glisse vers la gauche (glisse vers la droite en arrière)
- `slide-right` - Glisse vers la droite (glisse vers la gauche en arrière)
- `slide-up` - Glisse vers le haut (glisse vers le bas en arrière)
- `slide-down` - Glisse vers le bas (glisse vers le haut en arrière)
- `view-transition` - Diapositives avec l'API View Transitions

### View Transitions

> Disponible depuis v0.43.0

L'**API View Transitions** fournit un mécanisme pour créer facilement des transitions animées entre différents états du DOM. Apprenez-en plus sur son fonctionnement dans [View Transitions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

:::warning
Expérimental : Ce n'est pas supporté par tous les navigateurs. Vérifiez attentivement la [table de compatibilité des navigateurs](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility) avant de l'utiliser.
:::

Vous pouvez utiliser la propriété CSS `view-transition-name` pour nommer les transitions de vue, ce qui crée des connexions entre différents éléments de la page et des transitions fluides lors du changement de diapositives.

Vous pouvez activer le support de la [Syntaxe MDC (Markdown Component)](/guide/syntax#mdc-syntax) pour nommer facilement les view-transitions :

```md
---
transition: view-transition
mdc: true
---

# View Transition {.inline-block.view-transition-title}

---

# View Transition {.inline-block.view-transition-title}
```

### Transitions personnalisées

Les transitions de diapositives de Slidev sont propulsées par [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). Vous pouvez fournir vos transitions personnalisées en :

```md
---
transition: my-transition
---
```

et ensuite dans vos feuilles de style personnalisées :

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

Apprenez-en plus sur son fonctionnement dans [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Transitions Avant & Arrière

Vous pouvez spécifier des transitions différentes pour la navigation avant et arrière en utilisant `|` comme séparateur dans le nom de la transition :

```md
---
transition: go-forward | go-backward
---
```

Avec cela, lorsque vous passez de la diapositive 1 à la diapositive 2, la transition `go-forward` sera appliquée. Lorsque vous passez de la diapositive 2 à la diapositive 1, la transition `go-backward` sera appliquée.

### Utilisation Avancée

Le champ `transition` accepte une option qui sera passée au composant [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transitiongroup). Par exemple :

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
