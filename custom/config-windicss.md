# Configurer Windi CSS

<Environment type="node" />

Markdown prend naturellement en charge les balises HTML intégrées. Vous pouvez donc styliser votre contenu comme vous le souhaitez. Pour plus de commodité, nous avons [Windi CSS](https://github.com/windicss/windicss) intégré, vous pouvez donc styliser le balisage directement à l'aide des utilitaires de classe.

Par example:

```html
<div class="grid pt-4 gap-4 grids-cols-[100px,1fr]">

### Nom

- Item 1
- Item 2

</div>
```

Le [Mode Attributify](https://windicss.org/posts/v30.html#attributify-mode) dans [Windi CSS v3.0](https://windicss.org/posts/v30.html) est activé par défaut.

## Configurations

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
```
