# Configurer les raccourcis

> Disponible depuis v0.20

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

<<<<<<< HEAD
Créez `./setup/shortcuts.ts` avec le contenu suivant :
=======
## Getting started

Create `./setup/shortcuts.ts` with the following content:
>>>>>>> 55df176a16c5693491d5823c68f1af798e1f718f

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
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

<<<<<<< HEAD
Le type `key` n'autorise que les chaînes, mais vous pouvez toujours lier plusieurs clés en utilisant la convention suivante :
=======
## Advanced key binding

The `key` type only allows for strings, but you can still bind multiple keys by using following convention:
>>>>>>> 55df176a16c5693491d5823c68f1af798e1f718f

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base,
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

<<<<<<< HEAD
Reportez-vous à [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) pour plus de détails sur l'événement de pression de touche.
=======
## Advanced navigation features

The `nav` navigation operations allows you to access some functionalities than basic _next slide_ or _previous slide_. See the following for use-cases:

```ts
import { NavOperations, defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',

      // Set the `e` keyboard shortcut to be used as a bookmark
      // or quick-access of sorts, to navigate specifically to
      // slide number 42
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> 55df176a16c5693491d5823c68f1af798e1f718f
