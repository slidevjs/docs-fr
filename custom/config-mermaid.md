# Configurer Mermaid

<Environment type="client" />

Créer `./setup/mermaid.ts` avec le contenu suivant :

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

Avec la configuration, vous pouvez fournir un paramètre par défaut personnalisé pour [Mermaid](https://mermaid-js.github.io/). Reportez-vous aux définitions de type et à sa documentation pour plus de détails.
