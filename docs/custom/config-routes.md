# Configurer les routes

<Environment type="client" />

Ajoutez vos pages à l'application Slidev.

## Utilisation

Créez `./setup/routes.ts` avec le contenu suivant :

```ts
import { defineRoutesSetup } from '@slidev/types'

export default defineRoutesSetup((routes) => {
  return [
    ...routes,
    {
      path: '/my-page',
      component: () => import('../pages/my-page.vue'),
    },
  ]
})
```

En savoir plus sur les routes dans la [documentation de Vue Router](https://router.vuejs.org/).
