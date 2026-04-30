# Configurer KaTeX

<Environment type="node" />

Créez `./setup/katex.ts` avec le contenu suivant :

```ts twoslash [setup/katex.ts]
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    maxExpand: 2000,
    /* ... */
  }
})
```

La valeur de retour doit être les options personnalisées pour KaTeX. Référez-vous à la [documentation de KaTeX](https://katex.org/docs/options.html) ou à la définition de type pour la liste complète des options.
