Surligneurs

<<<<<<< HEAD
Slidev est livré avec deux surligneurs de syntaxe parmi lesquels vous pouvez choisir :
=======
Slidev comes with two syntax highlighters for you to choose from:
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** est l'un des surligneurs de syntaxe les plus populaires. La mise en évidence est effectuée en ajoutant des classes de jetons au code et il est coloré à l'aide de CSS. Vous pouvez parcourir leurs [thèmes officiels](https://github.com/PrismJS/prism-themes), ou en créer/personnaliser un vous-même très facilement en utilisant [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

<<<<<<< HEAD
**Shiki**, d'autre part, est un surligneur de syntaxe basé sur la grammaire TextMate. Il génère des jetons colorés, il n'y a donc pas besoin de CSS supplémentaire. Comme il prend en charge la grammaire, les couleurs générées sont très précises, tout comme ce que vous verrez dans VS Code. Shiki est également livré avec [un tas de thèmes intégrés](https://github.com/shikijs/shiki/blob/master/docs/themes.md). L'inconvénient de Shiki est qu'il nécessite également des thèmes TextMate (compatibles avec le thème VS Code) pour faire la mise en évidence, ce qui peut être un peu plus difficile à personnaliser.
=======
**Shiki** is a TextMate grammar-powered syntax highlighter. It generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

Les thèmes Slidev prennent généralement en charge Prism et Shiki, mais selon le thème que vous utilisez, il se peut qu'il ne prenne en charge que l'un d'entre eux.

Lorsque vous avez le choix, le compromis est essentiellement :

<<<<<<< HEAD
- **Prism** pour une personnalisation plus facile
- **Shiki** pour une mise en évidence plus précise

Par défaut, Slidev utilise Prism. Vous pouvez le changer en modifiant votre frontmatter :
=======
- **Prism** for easier customization
- **Shiki** for accurate highlighting

Slidev uses Shiki by default since v0.47. You can switch to it by adding the following to your `slides.md`:
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

```yaml
---
highlighter: Prism
---
```

<<<<<<< HEAD
## Configurer Prism

Pour configurer votre Prism, vous pouvez simplement importer le thème css ou utiliser [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) pour configurer des thèmes pour les modes clair et sombre. Reportez-vous à sa documentation pour plus de détails.

## Configurer Shiki
=======
## Configure Shiki
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

<Environment type="node" />

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
    ]
  }
})
```

<<<<<<< HEAD
Reportez-vous à la [documentation de Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes) pour les noms de thèmes disponibles.

Ou si vous souhaitez utiliser votre propre thème :
=======
Refer to [Shiki's docs](https://shiki.style) for available theme names.

## Configure Prism
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
