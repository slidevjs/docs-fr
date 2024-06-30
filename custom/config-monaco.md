# Configurer Monaco

<Environment type="client" />

> Par défaut, uniquement Monaco est activé uniquement en mode développement. Pour le faire fonctionner sur la version SPA, ajoutez `monaco: true` à vos configurations frontmatter.

Créer `./setup/monaco.ts` avec le contenu suivant :

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // use `monaco` to configure
})
```

En savoir plus sur [la configuration de Monaco](https://github.com/Microsoft/monaco-editor).

## Utilisation

Pour utiliser Monaco dans vos diapositives, ajoutez simplement `{monaco}` à vos extraits de code :

````md
```js {monaco} // [!code ++]
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
<<<<<<< HEAD
//```
~~~

À

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## Exporter

Par défaut, Monaco fonctionnera UNIQUEMENT en mode `dev`. Si vous souhaitez également l'avoir disponible dans le SPA exporté, vous pouvez le configurer dans votre frontmatter :

```yaml
---
monaco: true # default "dev"
---
=======
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
```
````

<<<<<<< HEAD
## Types d'installation automatique
=======
## TypeScript Types
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Lorsque vous utilisez TypeScript avec Monaco, les types de dépendances sont installés automatiquement côté client.

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

<<<<<<< HEAD
Dans l'exemple ci-dessus, assurez-vous simplement que `vue` et` @vueuse/core` sont installés localement en tant que dependencies / devDependencies, Slidev s'occupera du reste et votre éditeur fonctionnera !

## Configure Themes

Le thème est controllé par Slidev basé sur le thème clair/sombre. Si vous souhaitez le customiser, vous pouvez passer l'identifiant du thème dans la fonction setup :
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically. When deploy as SPA, those types will also be bundled for static hosting.

### Additional Types

Slidev will scan all the monaco codeblocks in your slides and import the types for those used libraries for you. In case it missed some, you can explicitly specify extra packages to import the types for:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Auto Type Acquisition

You can optionally switch to load types from CDN by setting the following headmatter:

```md
---
monacoTypesSource: ata
---
```

This feature is powered by [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) and runs completely on the client-side.

## Configure Themes

Since v0.48.0, Monaco will reuse the Shiki theme you configured in [Shiki's setup file](/custom/highlighters#configure-shiki), powered by [`@shikijs/monaco`](https://shiki.style/packages/monaco). You don't need to worry about it anymore and it will have a consistent style with the rest of your code blocks.

## Configure the Editor

> Available since v0.43.0

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```

<<<<<<< HEAD
Si vous souhaitez charger des thèmes customisés :
=======
## Disabling
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Since v0.48.0, Monaco editor is enabled by default and only be bundled when you use it. If you want to disable it, you can set `monaco` to `false` in the frontmatter of your slide:

```yaml
---
monaco: false # can also be `dev` or `build` tp conditionally enable it
---
```
<<<<<<< HEAD

> Si vous créez un thème pour Slidev, utilisez dynamiquement `import()` au sein de la fonction de setup afin d'avoir le meilleur résultat d'arborescence et de fractionnement de code possible.
=======
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
