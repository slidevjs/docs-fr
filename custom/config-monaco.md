# Configurer Monaco

<Environment type="client" />

> Par défaut, uniquement Monaco est activé uniquement en mode développement. Pour le faire fonctionner sur la version SPA, ajoutez `monaco: true` à vos configurations frontmatter.

Créer `./setup/monaco.ts` avec le contenu suivant:

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // use `monaco` to configure
})
```

En savoir plus sur [la configuration de Monaco](https://github.com/Microsoft/monaco-editor).

## Utilisation

Pour utiliser Monaco dans vos diapositives, ajoutez simplement `{monaco}` à vos extraits de code:

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

Par défaut, Monaco fonctionnera UNIQUEMENT en mode `dev`. Si vous souhaitez également l'avoir disponible dans le SPA exporté, vous pouvez le configurer dans votre frontmatter:

```yaml
---
monaco: true # default "dev"
---
```

## Types d'installation automatique

Lorsque vous utilisez TypeScript avec Monaco, les types de dépendances sont installés automatiquement côté client.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

Dans l'exemple ci-dessus, assurez-vous simplement que `vue` et` @vueuse/core` sont installés localement en tant que dependencies / devDependencies, Slidev s'occupera du reste et votre éditeur fonctionnera !
