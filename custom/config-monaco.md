# Configurer Monaco

<Environment type="client" />

Créez `./setup/monaco.ts` avec le contenu suivant :

```ts twoslash [./setup/monaco.ts]
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // utiliser `monaco` pour configurer
})
```

En savoir plus sur la [configuration de Monaco](https://github.com/Microsoft/monaco-editor).

## Types TypeScript

Lors de l'utilisation de TypeScript avec Monaco, les types des dépendances seront installés côté client automatiquement.

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

Dans l'exemple ci-dessus, assurez-vous que `vue` et `@vueuse/core` sont installés localement en tant que dépendances / devDependencies, Slidev gérera le reste pour que les types fonctionnent automatiquement pour l'éditeur. Lors du déploiement en SPA, ces types seront également bundlés pour l'hébergement statique.

### Types supplémentaires

Slidev analysera tous les blocs de code Monaco dans vos diapositives et importera les types des bibliothèques utilisées pour vous. Dans le cas où il en manquerait, vous pouvez spécifier explicitement des paquets supplémentaires pour lesquels importer les types :

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Acquisition automatique de types

Vous pouvez optionnellement basculer vers le chargement des types depuis le CDN en définissant le headmatter suivant :

```md
---
monacoTypesSource: ata
---
```

Cette fonctionnalité est propulsée par [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) et s'exécute entièrement côté client.

## Configurer les thèmes

Depuis la v0.48.0, Monaco réutilisera le thème Shiki que vous avez configuré dans [le fichier de configuration de Shiki](/custom/config-highlighter#configure-shiki), propulsé par [`@shikijs/monaco`](https://shiki.style/packages/monaco). Vous n'avez plus à vous en soucier et il aura un style cohérent avec le reste de vos blocs de code.

## Configurer l'éditeur

> Disponible depuis la v0.43.0

Si vous souhaitez personnaliser l'éditeur Monaco, vous pouvez passer un objet `editorOptions` qui correspond à la définition [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html).

````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

Alternativement, si vous souhaitez que ces options soient appliquées à chaque instance Monaco, vous pouvez les retourner dans la fonction `defineMonacoSetup`

```ts twoslash [./setup/monaco.ts]
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```

## Désactivation

Depuis la v0.48.0, l'éditeur Monaco est activé par défaut et n'est bundlé que lorsque vous l'utilisez. Si vous souhaitez le désactiver, vous pouvez définir `monaco` à `false` dans le frontmatter de votre diapositive :

```yaml
---
monaco: false # peut également être `dev` ou `build` pour l'activer conditionnellement
---
```

## Mode strict {#strict-mode}

> Disponible depuis la v0.52.0

Par défaut, le code exécutable de Monaco s'exécute en mode strict (`"use strict"`). Vous pouvez désactiver cela si votre code repose sur un comportement non strict :

```yaml
---
monacoRunUseStrict: false
---
```

## Configurer les exécuteurs de code

Pour configurer la façon dont l'exécuteur Monaco exécute le code, ou pour ajouter le support de langages personnalisés, veuillez vous référer à [Configurer les exécuteurs de code](/custom/config-code-runners).
