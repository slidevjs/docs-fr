# Configurer Vue

<Environment type="client" />

Slidev utilise [Vue 3](https://v3.vuejs.org/) pour rendre l'application côté client. Vous pouvez étendre l'application pour ajouter des plugins ou des configurations personnalisés.

Créer `./setup/main.ts` avec le contenu suivant :

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

Cela peut également être utilisé comme entrée principale de votre application Slidev pour effectuer des initialisations avant le démarrage de l'application.

En savoir plus: [Vue Application API](https://v3.vuejs.org/api/application-api.html#component).
