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

<<<<<<< HEAD
Avec la configuration, vous pouvez fournir un paramètre par défaut personnalisé pour [Mermaid](https://mermaid-js.github.io/). Reportez-vous aux définitions de type et à sa documentation pour plus de détails.
=======
With the setup, you can provide a custom default setting for [Mermaid](https://mermaid-js.github.io/). Refer to the type definitions and its documentation for more details.

## Custom theme/styles

In case you want to create your custom Mermaid themes or styles, you can do this by defining `themeVariables` like in the following example:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // General theme variables
      noteBkgColor: "#181d29",
      noteTextColor: "#F3EFF5cc",
      noteBorderColor: "#404551",

      // Sequence diagram variables
      actorBkg: "#0E131F",
      actorBorder: "#44FFD2",
      actorTextColor: "#F3EFF5",
      actorLineColor: "#F3EFF5",
      signalColor: "#F3EFF5",
      signalTextColor: "#F3EFF5",
    }
  }
})
```

You can find all theme variables on the [Mermaid Theme Configuration](https://mermaid.js.org/config/theming.html) page.
>>>>>>> d29625cb3633171f7cf2087a777e68a1cd76ea6f
