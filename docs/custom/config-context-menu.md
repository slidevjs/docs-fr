# Configurer le menu contextuel

<Environment type="client" />

Personnalisez les éléments du menu contextuel dans Slidev.

Créez `./setup/context-menu.ts` avec le contenu suivant :

```ts
import { defineContextMenuSetup } from '@slidev/types'
import { computed } from 'vue'
import Icon3DCursor from '~icons/carbon/3d-cursor'

export default defineContextMenuSetup((items) => {
  const { isPresenter } = useNav()
  return computed(() => [
    ...items.value,
    {
      small: false,
      icon: Icon3DCursor, // Utilisé comme `title` si `small` est `true`
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

Pour désactiver le menu contextuel globalement, définissez `contextMenu` sur `false` dans le frontmatter. `contextMenu` peut également être défini sur `dev` ou `build` pour n'activer le menu contextuel qu'en mode développement ou build.
