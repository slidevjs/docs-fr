# Configurer le rendu Mermaid

<Environment type="client" />

1. L'utilisateur installe la bibliothèque Mermaid qu'il souhaite utiliser. Par ex. : `npm install beautiful-mermaid`
2. Créez `./setup/mermaid-renderer.ts` avec le contenu suivant :

```ts
// setup/mermaid-renderer.ts
import { defineMermaidRendererSetup } from '@slidev/types'
// exemple. https://github.com/lukilabs/beautiful-mermaid?tab=readme-ov-file#readme
import { renderMermaid } from 'beautiful-mermaid'

export default defineMermaidRendererSetup(() => {
  return (code, _options) => renderMermaid(code)
})
```

Ce paramètre vous permet d'utiliser une bibliothèque Mermaid tierce. Remplacez la partie `renderMermaid()` par la fonction de rendu de la bibliothèque.
