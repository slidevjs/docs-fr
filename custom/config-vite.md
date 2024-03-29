# Configure Vite

<Environment type="node" />

Slidev est alimenté par [Vite](http://vitejs.dev/) sous le capot. Cela signifie que vous pouvez tirer parti de l'excellent système de plugins de Vite pour personnaliser encore plus vos diapositives.

La configuration `vite.config.ts` sera respectée si vous en avez une.

Slidev a les plugins suivants préconfigurés :

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

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
