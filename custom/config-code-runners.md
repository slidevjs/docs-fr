# Configurer les exécuteurs de code

<Environment type="client" />

Définir des exécuteurs de code pour des langages personnalisés dans votre éditeur Monaco.

Par défaut, les exécuteurs JavaScript et TypeScript sont supportés nativement. Ils s'exécutent dans le navigateur **sans** environnement sandbox. Si vous souhaitez des intégrations plus avancées, vous pouvez fournir votre propre exécuteur de code qui envoie le code vers un serveur distant, s'exécute dans un Web Worker, ou autre, selon vos besoins.

Créez `./setup/code-runners.ts` avec le contenu suivant :

```ts twoslash [setup/code-runners.ts]
/* eslint-disable import/first */
declare const executePythonCodeRemotely: (code: string) => Promise<string>
declare const sanitizeHtml: (html: string) => string
// ---cut---
import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    async python(code, ctx) {
      // Exécuter le code d'une manière ou d'une autre et retourner le résultat
      const result = await executePythonCodeRemotely(code)
      return {
        text: result
      }
    },
    html(code, ctx) {
      return {
        html: sanitizeHtml(code)
      }
    },
    // ou autres langages, la clé est l'identifiant du langage
  }
})
```

## Contexte de l'exécuteur

Le second argument `ctx` est le contexte de l'exécuteur, qui contient les propriétés suivantes :

```ts twoslash
import type { CodeRunnerOutputs } from '@slidev/types'
import type { CodeToHastOptions } from 'shiki'
// ---cut---
export interface CodeRunnerContext {
  /**
   * Options passées à l'exécuteur via la prop `runnerOptions`.
   */
  options: Record<string, unknown>
  /**
   * Colorer le code avec shiki.
   */
  highlight: (code: string, lang: string, options?: Partial<CodeToHastOptions>) => string
  /**
   * Utiliser un (autre) exécuteur de code pour exécuter le code.
   */
  run: (code: string, lang: string) => Promise<CodeRunnerOutputs>
}
```

## Sortie de l'exécuteur

L'exécuteur peut retourner une sortie texte ou HTML, ou un élément à monter. Référez-vous à https://github.com/slidevjs/slidev/blob/main/packages/types/src/code-runner.ts pour plus de détails.

## Dépendances supplémentaires de l'exécuteur

Par défaut, Slidev analyse la source Markdown et importe automatiquement les dépendances nécessaires pour les exécuteurs de code. Si vous souhaitez importer manuellement des dépendances, vous pouvez utiliser l'option `monacoRunAdditionalDeps` dans le [headmatter](./index#headmatter) :

```yaml
monacoRunAdditionalDeps:
  - ./path/to/dependency
  - lodash-es
```

::: tip
Les chemins sont résolus relativement au répertoire `snippets`. Et les noms des dépendances doivent être exactement les mêmes que ceux importés dans le code.
:::
