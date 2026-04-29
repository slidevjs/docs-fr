# Surligneurs

Slidev utilise [Shiki](https://github.com/shikijs/shiki) comme surligneur de syntaxe. C'est un surligneur de syntaxe basé sur la grammaire TextMate qui génère des jetons colorés, il n'y a donc pas besoin de CSS supplémentaire. Comme il prend en charge la grammaire, les couleurs générées sont très précises, tout comme ce que vous verriez dans VS Code. Shiki est également livré avec [un tas de thèmes intégrés](https://shiki.style/themes). Dans Slidev, la prise en charge de [TwoSlash](#integration-twoslash) est également intégrée.

## Configurer Shiki

<Environment type="both" />

Créer un fichier `./setup/shiki.ts` avec le contenu suivant :

```ts
/* ./setup/shiki.ts */
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

Si vous souhaitez ajouter un thème ou un langage personnalisé (grammaire/thèmes TextMate en JSON), vous pouvez les importer dans le fichier de configuration :

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import customTheme from './customTheme.tmTheme.json'
import customLanguage from './customLanguage.tmLanguage.json'

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

Consultez [Langages intégrés](https://shiki.style/languages) et [Thèmes intégrés](https://shiki.style/themes), et reportez-vous à la [documentation de Shiki](https://shiki.style) pour plus de détails.

:::info
Pour l'instant, Shiki Magic Move ne supporte pas les transformers.
:::

## Configurer Prism

:::warning
La prise en charge de Prism est dépréciée et sera supprimée à l'avenir. Veuillez envisager d'utiliser Shiki à la place.
:::

Pour configurer votre Prism, vous pouvez simplement importer le thème CSS ou utiliser [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) pour configurer des thèmes pour les modes clair et sombre. Reportez-vous à sa documentation pour plus de détails.
