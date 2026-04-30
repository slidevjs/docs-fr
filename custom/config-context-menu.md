# Configurer le menu contextuel

<Environment type="client" />

Personnaliser les éléments du menu contextuel dans Slidev.

Créez `./setup/context-menu.ts` avec le contenu suivant :

```ts twoslash [./setup/context-menu.ts]
// ---cut---
import { useNav } from '@slidev/client'
import { defineContextMenuSetup } from '@slidev/types'
import { computed } from 'vue'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import Icon3DCursor from '~icons/carbon/3d-cursor'

export default defineContextMenuSetup((items) => {
  const { isPresenter } = useNav()
  return computed(() => [
    ...items.value,
    {
      small: false,
      icon: Icon3DCursor, // si `small` est `true`, seule l'icône est affichée
      label: 'Élément de menu personnalisé', // ou un composant Vue
      action() {
        alert('Élément de menu personnalisé cliqué !')
      },
      disabled: isPresenter.value,
    },
  ])
})
```

Cela ajoutera un nouvel élément de menu au menu contextuel.

Pour désactiver le menu contextuel globalement, définissez `contextMenu` à `false` dans le frontmatter. `contextMenu` peut également être défini à `dev` ou `build` pour n'activer le menu contextuel qu'en mode développement ou build.
