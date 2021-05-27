# Configurer Windi CSS

<Environment type="node" />

Markdown prend naturellement en charge les balises HTML intégrées. Vous pouvez donc styliser votre contenu comme vous le souhaitez. Pour plus de commodité, nous avons [Windi CSS](https://github.com/windicss/windicss) intégré, vous pouvez donc styliser le balisage directement à l'aide des utilitaires de classe.

Par exemple:

```html
<div class="grid pt-4 gap-4 grids-cols-[100px,1fr]">

### Nom

- Item 1
- Item 2

</div>
```

Le [Mode Attributify](https://windicss.org/posts/v30.html#attributify-mode) dans [Windi CSS v3.0](https://windicss.org/posts/v30.html) est activé par défaut.

## Configurations

<<<<<<< HEAD
Pour configurer Windi CSS, vous devrez étendre la configuration de base Windi CSS.

```ts
import { mergeWindicssConfig, defineConfig } from 'vite-plugin-windicss'
import BaseConfig from '@slidev/client/windi.config'
// ou en prolongement du thème:
/* import BaseConfig from '@slidev/theme-seriph/windi.config' */

export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#42b883'
          }
        }
      }
    }
  })
)
=======
To configure Windi CSS, create `setup/windicss.ts` with the following content to extend the builtin configurations

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
>>>>>>> 2725558a0fdb273102dde01cb9b3cfb80a5a7b43
```

Learn more about [Windi CSS configurations](https://windicss.org/guide/configuration.html)
