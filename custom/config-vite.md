# Configure Vite

<Environment type="node" />

Slidev est alimenté par [Vite](http://vitejs.dev/) sous le capot. Cela signifie que vous pouvez tirer parti de l'excellent système de plugins de Vite pour personnaliser encore plus vos diapositives.

La configuration `vite.config.ts` sera respectée si vous en avez une.

Slidev a les plugins suivants préconfigurés :

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [vite-plugin-components](https://github.com/antfu/vite-plugin-components)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-icons](https://github.com/antfu/vite-plugin-icons)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)

<<<<<<< HEAD
Découvrez le mode sur les [pré-configurations ici](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).
=======
Learn more about the [pre-configurations here](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Configure Internal Plugins

> Available since v0.21

To configure the built-in plugins list above, create `vite.config.ts` with the following content. Please note Slidev has some preconfigure options for those plugins, this usage will override some of them, which could potentially cause the app to break. Please treat this as **an advanced feature**, make sure you know what you are doing before moving on.

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

See the [type decalrations](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) for more options.
>>>>>>> 83d754553616372f9655366cd91e125b8d17f855
