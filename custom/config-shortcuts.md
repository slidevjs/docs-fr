# Configurer les raccourcis

<Environment type="client" />

## Pour commencer

Créez `./setup/shortcuts.ts` avec le contenu suivant :

```ts twoslash [./setup/shortcuts.ts]
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // conserver les raccourcis existants
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

Dans la fonction de configuration, vous pouvez personnaliser les raccourcis clavier en retournant un nouveau tableau de raccourcis. L'exemple ci-dessus lie l'opération `next` à <kbd>enter</kbd> et l'opération `prev` à <kbd>backspace</kbd>.

Veuillez vous référer à la section [Actions de navigation](../guide/ui#navigation-actions) pour les raccourcis par défaut et les opérations de navigation.

## Format des liaisons de touches

Le `key` de chaque raccourci peut être soit une chaîne (par ex. `'Shift+Ctrl+A'`) soit un booléen calculé. Veuillez vous référer à [`useMagicKeys` de VueUse](https://vueuse.org/core/useMagicKeys/) pour
