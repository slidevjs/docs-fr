# Configurer UnoCSS

<Environment type="node" />

[UnoCSS](https://unocss.dev) est désormais le framework CSS par défaut pour Slidev depuis la v0.42.0. UnoCSS est un moteur CSS atomique rapide qui offre une grande flexibilité et extensibilité. La plupart des classes Tailwind CSS sont supportées **nativement**, et vous pouvez également l'étendre avec vos propres configurations.

Par défaut, Slidev active les presets suivants nativement :

- [@unocss/preset-wind3](https://unocss.dev/presets/wind3) - Utilitaires compatibles Tailwind / Windi CSS
- [@unocss/preset-attributify](https://unocss.dev/presets/attributify) - Mode Attributify
- [@unocss/preset-icons](https://unocss.dev/presets/icons) - Utiliser n'importe quelle icône comme classe
- [@unocss/preset-web-fonts](https://unocss.dev/presets/web-fonts) - Utiliser des polices web facilement
- [@unocss/transformer-directives](https://unocss.dev/transformers/directives) - Utiliser `@apply` en CSS

Slidev ajoute également des raccourcis comme on peut le voir dans son [code source](https://github.com/slidevjs/slidev/blob/main/packages/client/uno.config.ts).

Vous pouvez donc styliser votre contenu comme vous le souhaitez. Par exemple :

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

## Configurations

Vous pouvez créer `uno.config.ts` à la racine de votre projet pour étendre les configurations intégrées

```ts twoslash [uno.config.ts]
import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // personnaliser l'arrière-plan par défaut
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  // ...
})
```

En savoir plus sur les [configurations UnoCSS](https://unocss.dev/guide/config-file)
