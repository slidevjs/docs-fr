Surligneurs

Slidev est livré avec deux surligneurs de syntaxe parmi lesquels vous pouvez choisir :

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** est l'un des surligneurs de syntaxe les plus populaires. La mise en évidence est effectuée en ajoutant des classes de jetons au code et il est coloré à l'aide de CSS. Vous pouvez parcourir leurs [thèmes officiels](https://github.com/PrismJS/prism-themes), ou en créer/personnaliser un vous-même très facilement en utilisant [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

**Shiki**, d'autre part, est un surligneur de syntaxe basé sur la grammaire TextMate. Il génère des jetons colorés, il n'y a donc pas besoin de CSS supplémentaire. Comme il prend en charge la grammaire, les couleurs générées sont très précises, tout comme ce que vous verrez dans VS Code. Shiki est également livré avec [un tas de thèmes intégrés](https://github.com/shikijs/shiki/blob/master/docs/themes.md). L'inconvénient de Shiki est qu'il nécessite également des thèmes TextMate (compatibles avec le thème VS Code) pour faire la mise en évidence, ce qui peut être un peu plus difficile à personnaliser.

Les thèmes Slidev prennent généralement en charge Prism et Shiki, mais selon le thème que vous utilisez, il se peut qu'il ne prenne en charge que l'un d'entre eux.

Lorsque vous avez le choix, le compromis est essentiellement :

- **Prism** pour une personnalisation plus facile
- **Shiki** pour une mise en évidence plus précise

Par défaut, Slidev utilise Prism. Vous pouvez le changer en modifiant votre frontmatter :

```yaml
---
highlighter: shiki
---
```

## Configurer Prism

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
      dark: await loadTheme('path/to/theme.json')),
      light: await loadTheme('path/to/theme.json')),
    },
  }
})
```
