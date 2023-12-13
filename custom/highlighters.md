Surligneurs

Slidev est livré avec deux surligneurs de syntaxe parmi lesquels vous pouvez choisir :

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)
- [Shikiji](https://github.com/antfu/shikiji)

**Prism** est l'un des surligneurs de syntaxe les plus populaires. La mise en évidence est effectuée en ajoutant des classes de jetons au code et il est coloré à l'aide de CSS. Vous pouvez parcourir leurs [thèmes officiels](https://github.com/PrismJS/prism-themes), ou en créer/personnaliser un vous-même très facilement en utilisant [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

**Shiki**, d'autre part, est un surligneur de syntaxe basé sur la grammaire TextMate. Il génère des jetons colorés, il n'y a donc pas besoin de CSS supplémentaire. Comme il prend en charge la grammaire, les couleurs générées sont très précises, tout comme ce que vous verrez dans VS Code. Shiki est également livré avec [un tas de thèmes intégrés](https://github.com/shikijs/shiki/blob/master/docs/themes.md). L'inconvénient de Shiki est qu'il nécessite également des thèmes TextMate (compatibles avec le thème VS Code) pour faire la mise en évidence, ce qui peut être un peu plus difficile à personnaliser.

<<<<<<< HEAD
Les thèmes Slidev prennent généralement en charge Prism et Shiki, mais selon le thème que vous utilisez, il se peut qu'il ne prenne en charge que l'un d'entre eux.
=======
**Shikiji** is a ESM rewrite of Shiki bringing many improvements and new features. You could have [AST-based transformers](https://github.com/antfu/shikiji#hast-transformers) to customize how the code is rendered. And the [TwoSlash](#twoslash) support is also built-in.

Slidev themes usually support both Prism and Shiki, but depending on the theme you are using, it might only support one of them.
>>>>>>> a6529b60e6a2f963398d169ce543df66469f74df

Lorsque vous avez le choix, le compromis est essentiellement :

<<<<<<< HEAD
- **Prism** pour une personnalisation plus facile
- **Shiki** pour une mise en évidence plus précise

Par défaut, Slidev utilise Prism. Vous pouvez le changer en modifiant votre frontmatter :
=======
- **Prism** for easier customization
- **Shiki** for more accurate highlighting
- **Shikiji** on top of Shiki, it also enables [TwoSlash](#twoslash) support and custom transformers addons. 

Slidev uses Prism by default for compatibility. We recommend using Shikiji for more accurate and feature-rich highlighting, you can switch to it by adding the following to your `slides.md`:
>>>>>>> a6529b60e6a2f963398d169ce543df66469f74df

```yaml
---
highlighter: shikiji
---
```

<<<<<<< HEAD
## Configurer Prism
=======
## TwoSlash Integration

This feature is only available when you set `highlighter` to `shikiji`.

[TwoSlash](https://www.typescriptlang.org/dev/twoslash/) is a powerful tool for rendering TypeScript code blocks with type informations on hover or inlined. It's quite useful for preapring slides for JavaScript/TypeScript related topics.

To use it, you can add `twoslash` to the code block's language identifier:

~~~md
```ts twoslash
console.log('hello')
```
~~~

And example of TwoSlash enabled code snippet [can be found here](https://antfu.me/posts/shikiji-twoslash).

## Configure Prism
>>>>>>> a6529b60e6a2f963398d169ce543df66469f74df

Pour configurer votre Prism, vous pouvez simplement importer le thème css ou utiliser [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) pour configurer des thèmes pour les modes clair et sombre. Reportez-vous à sa documentation pour plus de détails.

## Configurer Shiki

<Environment type="node" />

Créer un fichier `./setup/shiki.ts` avec le contenu suivant :

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

Reportez-vous à la [documentation de Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes) pour les noms de thèmes disponibles.

Ou si vous souhaitez utiliser votre propre thème :

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json'),
      light: await loadTheme('path/to/theme.json'),
    },
  }
})
```

## Configure Shikiji

<Environment type="node" />

Create `./setup/shikiji.ts` file with the following content:

```ts
/* ./setup/shikiji.ts */
import { defineShikijiSetup } from '@slidev/types'

export default defineShikijiSetup(() => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    transformers: [
      ...
    ]
  }
})
```

Refer to [Shikiji's docs](https://github.com/antfu/shikji) for all available options.

> It make it easier for the community to adapt, when no `shikiji.ts` it presented, we will look for `shiki.ts` and try to convert it to Shikiji options.
