# Configurer Mermaid

<Environment type="client" />

Créez `./setup/mermaid.ts` avec le contenu suivant :

```ts twoslash [setup/mermaid.ts]
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

La valeur de retour doit être les configurations personnalisées pour [Mermaid](https://mermaid.js.org/). Référez-vous à la [documentation Mermaid](https://mermaid.js.org/config/schema-docs/config.html) ou à la définition de type pour la liste complète des configurations.

## Thèmes/styles personnalisés

Dans le cas où vous souhaitez créer vos propres thèmes ou styles Mermaid, vous pouvez le faire en définissant `themeVariables` comme dans l'exemple suivant :

```ts twoslash
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // Variables générales du thème
      noteBkgColor: '#181d29',
      noteTextColor: '#F3EFF5cc',
      noteBorderColor: '#404551',

      // Variables du diagramme de séquence
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

Vous pouvez trouver toutes les variables de thème sur la page [Configuration des thèmes Mermaid](https://mermaid.js.org/config/theming.html).
