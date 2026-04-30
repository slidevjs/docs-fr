# Configurer les routes

<Environment type="client" />

Ajouter des pages personnalisées à l'application Slidev.

## Utilisation

Créez `./setup/routes.ts` avec le contenu suivant :

```ts twoslash [./setup/routes.ts]
import { defineRoutesSetup } from '@slidev/types'

export default defineRoutesSetup((routes) => {
  return [
    ...routes,
    {
      path: '/my-page',
      // ---cut-start---
      // @ts-expect-error missing types
      // ---cut-end---
      component: () => import('../pages/my-page.vue'),
    },
  ]
})
```

En savoir plus sur les routes dans la [documentation de Vue Router](https://router.vuejs.org/).
