---
depends:
  - features/monaco-editor
  - guide/animations
relates:
  - Custom Code Runners: /custom/config-code-runners
since: v0.48.0
tags: [codeblock, editor]
description: |
  Exécuter le code directement dans l'éditeur et voir le résultat.
---

# Exécuteur Monaco

Slidev fournit également l'éditeur Exécuteur Monaco, qui vous permet d'exécuter le code directement dans l'éditeur et de voir le résultat. Utilisez `{monaco-run}` pour transformer le bloc en un éditeur Exécuteur Monaco.

````md
```ts {monaco-run}
function distance(x: number, y: number) {
  return Math.sqrt(x ** 2 + y ** 2)
}
console.log(distance(3, 4))
```
````

Il fournit à l'éditeur un bouton « Exécuter », et affiche le résultat de l'exécution du code juste en dessous du bloc de code. Vous pouvez également modifier le code et le résultat sera réévalué à la volée.

Par défaut, il exécutera automatiquement le code lorsque la diapositive est chargée ; si vous souhaitez plutôt déclencher explicitement l'exécution, vous pouvez définir `{autorun:false}`.

````md
```ts {monaco-run} {autorun:false}
console.log('Click the play button to run me')
```
````

Si vous souhaitez n'afficher la sortie qu'à certains clics, vous pouvez utiliser la prop `showOutputAt`. La valeur est la même que `v-click`.

````md
```ts {monaco-run} {showOutputAt:'+1'}
console.log('Shown after 1 click')
```
````

Actuellement, Slidev supporte l'exécution de code JavaScript et TypeScript nativement. Référez-vous aux [Exécuteurs de code personnalisés](/custom/config-code-runners) pour le support de langages personnalisés.
