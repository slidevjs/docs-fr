# Configurer l'application Vue

<Environment type="client" />

Slidev utilise [Vue 3](https://v3.vuejs.org/) pour rendre l'application côté client. Vous pouvez étendre l'application pour ajouter des plugins ou des configurations personnalisés.

Créez `./setup/main.ts` avec le contenu suivant :

```ts twoslash [setup/main.ts]
/* eslint-disable import/first */
import type { Plugin } from 'vue'

declare const YourPlugin: Plugin
// ---cut---
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Application Vue
  app.use(YourPlugin)
})
```

Cela peut également être utilisé comme point d'entrée principal de votre application Slidev pour effectuer des initialisations avant le démarrage de l'application.

En savoir plus : [API de l'application Vue](https://v3.vuejs.org/api/application-api.html#component).
