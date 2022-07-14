# Configurer les raccourcis

> Disponible depuis v0.20

<Environment type="client" />

Créez `./setup/shortcuts.ts` avec le contenu suivant :

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
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

Avec la configuration, vous pouvez fournir le paramètre personnalisé pour les raccourcis mentionnés dans [Navigation](/guide/navigation#navigation-bar). La configuration ci-dessus lie l'animation ou la diapositive suivante à <kbd>enter</kbd> et l'animation ou la diapositive précédente à <kbd>backspace</kbd>.

La fonction de configuration reçoit un objet avec certaines méthodes de navigation et renvoie un tableau contenant une configuration de raccourci. Reportez-vous aux définitions de type pour plus de détails.

Le type `key` n'autorise que les chaînes, mais vous pouvez toujours lier plusieurs clés en utilisant la convention suivante :

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

Reportez-vous à [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) pour plus de détails sur l'événement de pression de touche.
