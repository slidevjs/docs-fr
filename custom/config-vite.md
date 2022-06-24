# Configure Vite

<Environment type="node" />

<<<<<<< HEAD
Slidev est alimenté par [Vite](http://vitejs.dev/) sous le capot. Cela signifie que vous pouvez tirer parti de l'excellent système de plugins de Vite pour personnaliser encore plus vos diapositives.
=======
Slidev is powered by [Vite](https://vitejs.dev/) under the hood. This means you can leverage Vite's great plugin system to customize your slides even further.
>>>>>>> c8121c161efd5a726d336648d2b101540c346dd2

La configuration `vite.config.ts` sera respectée si vous en avez une.

Slidev a les plugins suivants préconfigurés :

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)

Découvrez le mode sur les [pré-configurations ici](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Configurer les plugins internes

> Disponible depuis v0.21

Pour configurer la liste des plugins intégrés ci-dessus, créez `vite.config.ts` avec le contenu suivant. Veuillez noter que Slidev a quelques options de préconfiguration pour ces plugins, cette utilisation remplacera certaines d'entre elles, ce qui pourrait potentiellement provoquer la panne de l'application. Veuillez considérer cela comme **une fonctionnalité avancée**, assurez-vous de savoir ce que vous faites avant de continuer.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(/* ... */)
      },
    },
    /* options for other plugins */
  },
})
```

Voir les [déclarations de types](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) pour plus d'options.
