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

## Thème/Styles personnalisés

Si vous souhaitez créer vos propres thèmes ou styles Mermaid, vous pouvez le faire en définissant `themeVariables` comme dans l'exemple suivant :

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // Variables de thème générales
      noteBkgColor: '#181d29',
      noteTextColor: '#F3EFF5cc',
      noteBorderColor: '#404551',

      // Variables de diagramme de séquence
      actorBkg: '#0E131F',
      actorBorder: '#44FFD2',
      actorTextColor: '#F3EFF5',
      actorLineColor: '#F3EFF5',
      signalColor: '#F3EFF5',
      signalTextColor: '#F3EFF5',
    }
  }
})
```

Vous pouvez trouver toutes les variables de thème sur la page [Mermaid Theme Configuration](https://mermaid.js.org/config/theming.html).
