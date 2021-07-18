# Configurer Monaco

<Environment type="client" />

<<<<<<< HEAD
> Par défaut, uniquement Monaco est activé uniquement en mode développement. Pour le faire fonctionner sur la version SPA, ajoutez `monaco: true` à vos configurations frontmatter.

Créer `./setup/monaco.ts` avec le contenu suivant :
=======
Create `./setup/monaco.ts` with the following content:
>>>>>>> 9ed9a0405e1553cea7cf84885bd0fee4e0c863ac

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // use `monaco` to configure
})
```

En savoir plus sur [la configuration de Monaco](https://github.com/Microsoft/monaco-editor).

## Utilisation

Pour utiliser Monaco dans vos diapositives, ajoutez simplement `{monaco}` à vos extraits de code :

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
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

<<<<<<< HEAD
Par défaut, Monaco fonctionnera UNIQUEMENT en mode `dev`. Si vous souhaitez également l'avoir disponible dans le SPA exporté, vous pouvez le configurer dans votre frontmatter :
=======
By default, Monaco will ONLY work on `dev` mode. If you would like to have it available in the exported SPA, configure it in your frontmatter:
>>>>>>> 9ed9a0405e1553cea7cf84885bd0fee4e0c863ac

```yaml
---
monaco: true # default "dev"
---
```

## Types d'installation automatique

<<<<<<< HEAD
Lorsque vous utilisez TypeScript avec Monaco, les types de dépendances sont installés automatiquement côté client.
=======
When use TypeScript with Monaco, types for dependencies will be installed to the client-side automatically.
>>>>>>> 9ed9a0405e1553cea7cf84885bd0fee4e0c863ac

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

<<<<<<< HEAD
Dans l'exemple ci-dessus, assurez-vous simplement que `vue` et` @vueuse/core` sont installés localement en tant que dependencies / devDependencies, Slidev s'occupera du reste et votre éditeur fonctionnera !
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically!

## Configure Themes

The theme is controlled by Slidev based on the light/dark theme. If you want to customize it, you can pass the theme id to the setup function:

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

If you want to load custom themes:

```ts
import { defineMonacoSetup } from '@slidev/types'

// change to your themes
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

> If you are creating a theme for Slidev, use dynamic `import()` inside the setup function to get better tree-shaking and code-splitting results.
>>>>>>> 9ed9a0405e1553cea7cf84885bd0fee4e0c863ac
