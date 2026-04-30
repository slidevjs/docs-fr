---
depends:
  - guide/syntax#code-block
  - guide/animations
relates:
  - Shiki Magic Move: https://github.com/shikijs/shiki-magic-move
since: v0.48.0
tags: [codeblock, animation]
description: |
  Activer une transition granulaire entre les modifications de code, similaire au Magic Move de Keynote.
---

# Shiki Magic Move

[Shiki Magic Move](https://github.com/shikijs/shiki-magic-move) vous permet d'avoir une transition granulaire entre les modifications de code, similaire au Magic Move de Keynote. Vous pouvez consulter [le playground](https://shiki-magic-move.netlify.app/) pour voir comment ça fonctionne.

<video src="https://github.com/slidevjs/slidev/assets/11247099/79927794-27ba-4342-9911-9996cec889d6" controls rounded shadow w-full></video>

Dans Slidev, nous lions le magic-move au [système de clics](/guide/animations#click-animation). La syntaxe consiste à envelopper plusieurs blocs de code représentant chaque étape avec <code>````md magic-move</code> (attention, ce sont **4** backticks), cela sera transformé en un seul bloc de code, qui se morphing à chaque étape au fur et à mesure que vous cliquez.

`````md
````md magic-move
```js
console.log(`Step ${1}`)
```
```js
console.log(`Step ${1 + 1}`)
```
```ts
console.log(`Step ${3}` as string)
```
````
`````

Il est également possible de combiner Magic Move avec <LinkInline link="features/line-highlighting" /> et <LinkInline link="features/code-block-line-numbers" />, par exemple :

`````md
````md magic-move {at:4, lines: true} // [!code hl]
```js {*|1|2-5} // [!code hl]
let count = 1
function add() {
  count++
}
```

Non-code blocks in between as ignored, you can put some comments.

```js {*}{lines: false} // [!code hl]
let count = 1
const add = () => count += 1
```
````
`````

## Barre de titre {#title-bar}

> Disponible depuis la v0.52.0

Vous pouvez ajouter une barre de titre aux blocs magic move en spécifiant un nom de fichier dans la clôture d'ouverture de chaque étape :

`````md
````md magic-move [app.js]
```js
console.log('Step 1')
```
```js
console.log('Step 2')
```
````
`````

La barre de titre affichera également une icône automatiquement appariée basée sur le nom de fichier (voir <LinkInline link="features/code-groups#title-icon-matching" />).

## Durée de l'animation {#duration}

> Disponible depuis la v0.52.0

Vous pouvez personnaliser la durée de l'animation pour les transitions magic move globalement via le headmatter :

```yaml
---
magicMoveDuration: 500 # duration in milliseconds, default is 800
---
```

Ou par bloc en passant l'option `duration` :

`````md
````md magic-move {duration:500}
```js
console.log('Step 1')
```
```js
console.log('Step 2')
```
````
`````

## Bouton de copie {#copy-button}

> Disponible depuis la v0.52.0

Les blocs de code magic move supportent un bouton de copie qui apparaît au survol. Configurez ce comportement globalement avec l'option headmatter `magicMoveCopy` :

<!-- eslint-skip -->

```yaml
---
# Options: true | false | 'always' | 'final'
magicMoveCopy: true     # afficher le bouton de copie sur toutes les étapes (par défaut)
magicMoveCopy: false    # désactiver le bouton de copie
magicMoveCopy: 'final'  # afficher le bouton de copie uniquement sur la dernière étape
---
```

Le bouton de copie respecte le paramètre global `codeCopy`. Si `codeCopy` est `false`, le bouton de copie magic move sera également désactivé.
