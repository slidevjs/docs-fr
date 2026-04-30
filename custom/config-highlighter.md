# Configurer le colorateur syntaxique

Slidev utilise [Shiki](https://github.com/shikijs/shiki) comme colorateur syntaxique. C'est un colorateur syntaxique basé sur TextMate Grammar, aussi précis que VS Code. Il génère des tokens colorés donc aucun CSS supplémentaire n'est requis. Shiki propose également [de nombreux thèmes intégrés](https://shiki.style/themes). Dans Slidev, nous fournissons également le support [TwoSlash](#twoslash-integration).

## Configurer Shiki

<Environment type="both" />

Créez le fichier `./setup/shiki.ts` avec le contenu suivant :

```ts twoslash [setup/shiki.ts]
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ],
  }
})
```

Si vous souhaitez ajouter un thème ou un langage personnalisé (grammaires/thèmes TextMate en JSON), vous pouvez les importer dans le fichier de configuration :

```ts twoslash [setup/shiki.ts]
import { defineShikiSetup } from '@slidev/types'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import customLanguage from './customLanguage.tmLanguage.json'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import customTheme from './customTheme.tmTheme.json'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: customTheme,
      light: 'min-light',
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      customLanguage,
      // ...
    ],
    transformers: [
      // ...
    ],
  }
})
```

Consultez les [Langages intégrés](https://shiki.style/languages) et les [Thèmes intégrés](https://shiki.style/themes), et référez-vous à la [documentation de Shiki](https://shiki.style) pour plus de détails.

:::info
Pour le moment, Shiki Magic Move ne supporte pas les transformateurs.
:::

## Configurer Prism

:::warning
Le support de Prism a été supprimé depuis la v0.50. Veuillez utiliser Shiki à la place.
:::
