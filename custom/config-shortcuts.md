# Configurer les raccourcis

> Disponible depuis v0.20

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

## Pour commencer

Créez `./setup/shortcuts.ts` avec le contenu suivant :

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

## Liaison de touches avancée

Le type `key` n'autorise que les chaînes, mais vous pouvez toujours lier plusieurs touches en utilisant la convention suivante :

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

## Fonctionnalités de navigation avancées

Les opérations de navigation `nav` vous permettent d'accéder à certaines fonctionnalités allant au-delà du simple _diapositive suivante_ ou _diapositive précédente_. Voir les cas d'utilisation suivants :

```ts
import { NavOperations, defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',

      // Définir le raccourci clavier `e` comme un marque-page
      // ou un accès rapide, pour naviguer spécifiquement
      // vers la diapositive numéro 42
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

Reportez-vous à [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) pour plus de détails sur l'événement de pression de touche.
