# Configurer Windi CSS

<Environment type="node" />

<<<<<<< HEAD
Markdown prend naturellement en charge les balises HTML intégrées. Vous pouvez donc styliser votre contenu comme vous le souhaitez. Pour plus de commodité, nous avons [Windi CSS](https://github.com/windicss/windicss) intégré, vous pouvez donc styliser le balisage directement à l'aide des utilitaires de classe.
=======
::: warning
Since Slidev v0.47.0, we no longer support Windi CSS. Please migrate to [UnoCSS](/custom/config-unocss).
:::

Markdown naturally supports embedded HTML markups. You can therefore style your content the way you want.
>>>>>>> 081241c66e4b17a1a524facc9585f0b6f74f5699

Par exemple :

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Nom

- Item 1
- Item 2

</div>
```

Le [Mode Attributify](https://windicss.org/posts/v30.html#attributify-mode) dans [Windi CSS v3.0](https://windicss.org/posts/v30.html) est activé par défaut.

## Configurations

Pour configurer Windi CSS, créez `setup/windicss.ts` avec le contenu suivant pour étendre les configurations intégrées

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// étendre les configurations de windics intégrées
export default defineWindiSetup(() => ({
  shortcuts: {
    // personnaliser l'arrière-plan par défaut
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // les polices peuvent être remplacées ici, n'oubliez pas de mettre à jour les liens de polices Web dans `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

En savoir plus sur les [configurations WindiCSS](https://windicss.org/guide/configuration.html)
