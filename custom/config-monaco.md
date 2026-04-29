# Configurer Monaco

<Environment type="client" />

> Par défaut, Monaco est activé uniquement en mode développement. Pour le faire fonctionner sur la version SPA, ajoutez `monaco: true` à vos configurations frontmatter.

Créer `./setup/monaco.ts` avec le contenu suivant :

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // utilisez `monaco` pour configurer
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
```
````

## Exporter

Par défaut, Monaco fonctionnera UNIQUEMENT en mode `dev`. Si vous souhaitez également l'avoir disponible dans le SPA exporté, vous pouvez le configurer dans votre frontmatter :

```yaml
---
monaco: true # default "dev"
---
```

## Types TypeScript

Lorsque vous utilisez TypeScript avec Monaco, les types de dépendances sont installés automatiquement côté client.

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

Dans l'exemple ci-dessus, assurez-vous simplement que `vue` et `@vueuse/core` sont installés localement en tant que dependencies / devDependencies, Slidev s'occupera du reste pour faire fonctionner les types dans l'éditeur automatiquement. Lors du déploiement en SPA, ces types seront également regroupés pour l'hébergement statique.

### Types supplémentaires

Slidev analysera tous les blocs de code Monaco dans vos diapositives et importera les types pour les bibliothèques utilisées. Au cas où il en manquerait, vous pouvez spécifier explicitement des packages supplémentaires pour importer les types :

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Acquisition automatique de types

Vous pouvez optionnellement passer au chargement des types depuis un CDN en définissant le frontmatter suivant :

```md
---
monacoTypesSource: ata
---
```

Cette fonctionnalité est propulsée par [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) et s'exécute entièrement côté client.

## Configurer les thèmes

Depuis la v0.48.0, Monaco réutilisera le thème Shiki que vous avez configuré dans le [fichier de configuration de Shiki](/custom/highlighters#configurer-shiki), propulsé par [`@shikijs/monaco`](https://shiki.style/packages/monaco). Vous n'avez plus besoin de vous en soucier et il aura un style cohérent avec le reste de vos blocs de code.

## Configurer l'éditeur

> Disponible depuis v0.43.0

Si vous souhaitez personnaliser l'éditeur Monaco, vous pouvez passer un objet `editorOptions` qui correspond à la définition [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html).

````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

Alternativement, si vous souhaitez que ces options s'appliquent à chaque instance Monaco, vous pouvez les retourner dans la fonction `defineMonacoSetup` :

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

## Désactiver

Depuis la v0.48.0, l'éditeur Monaco est activé par défaut et n'est regroupé que lorsque vous l'utilisez. Si vous souhaitez le désactiver, vous pouvez définir `monaco` sur `false` dans le frontmatter de votre diapositive :

```yaml
---
monaco: false # peut également être `dev` ou `build` pour l'activer conditionnellement
---
```
