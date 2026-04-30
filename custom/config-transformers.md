# Configurer les transformateurs

<Environment type="node" />

Cette fonction de configuration vous permet de définir des transformateurs personnalisés pour le contenu markdown de **chaque diapositive**. C'est utile lorsque vous souhaitez ajouter une syntaxe Markdown personnalisée et rendre des blocs de code personnalisés. Pour commencer, créez un fichier `./setup/transformers.ts` avec le contenu suivant :

```ts twoslash [setup/transformers.ts]
import { defineCodeblockTransformer, defineMarkdownTransformer, defineTransformersSetup } from '@slidev/types'
import lz from 'lz-string'

const mySyntax = defineMarkdownTransformer((ctx) => {
  console.log('index in presentation', ctx.slide.index)
  ctx.s.replace(
    /^\[\[\[(.*)\]\]\]/gm,
    (full, content) => {
      return `...`
    },
  )
})

const myCodeblock = defineCodeblockTransformer((ctx) => {
  if (ctx.info.startsWith('myblock')) {
    console.log('index in presentation', ctx.slide?.index)
    return `<MyBlockRenderer code="${lz.compressToEncodedURIComponent(ctx.code)}" />`
  }
})

export default defineTransformersSetup(() => {
  return {
    // Ceci s'applique avant l'analyse du Markdown, par diapositive
    pre: [mySyntax],
    // Ceci s'applique par bloc de code Markdown
    codeblocks: [myCodeblock],
  }
})
```

> [!NOTE]
> Lorsque c'est possible, implémentez les transformateurs `pre` comme des plugins markdown-it pour une meilleure robustesse.
