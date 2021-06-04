# Configurer KaTeX

<Environment type="node" />

Créer `./setup/katex.ts` avec le contenu suivant :

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

Avec la configuration, vous pouvez fournir le paramètre personnalisé pour [Options KaTex](https://katex.org/docs/options.html). Reportez-vous aux définitions de type et à leur documentation pour plus de détails.
