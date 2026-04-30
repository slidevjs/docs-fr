# Configurer Vite et les plugins

<Environment type="node" />

Slidev est propulsé par [Vite](https://vitejs.dev/) en coulisses. Cela signifie que vous pouvez tirer parti du formidable système de plugins de Vite pour personnaliser vos diapositives encore plus.

Le fichier `vite.config.ts` sera respecté si vous en avez un, et sera fusionné avec la configuration Vite fournie par Slidev, votre thème et les addons.

## Configurer les plugins internes

Slidev ajoute en interne les plugins suivants à Vite :

- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)
- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
- [unplugin-icons](https://github.com/unplugin/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/unplugin/unplugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

Pour configurer les plugins intégrés listés ci-dessus, créez un `vite.config.ts` avec le contenu suivant. Veuillez noter que Slidev a des [configurations par défaut](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/vite/index.ts) pour ces plugins, cette utilisation en remplacera certaines, ce qui pourrait potentiellement casser l'application. Veuillez traiter cela comme **une fonctionnalité avancée**, et assurez-vous de savoir ce que vous faites avant de continuer.

```ts twoslash [vite.config.ts]
/* eslint-disable import/first */
/// <reference types="@slidev/types" />
import type MarkdownExit from 'markdown-exit'

declare const MyPlugin: (md: any) => void
// ---cut---
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* options vue */
    },
    markdown: {
      /* options markdown-exit */
      markdownSetup(md) {
        /* plugins markdown-exit personnalisés */
        md.use(MyPlugin)
      },
    },
    /* options pour les autres plugins */
  },
})
```

Voir les [déclarations de types](https://github.com/slidevjs/slidev/blob/main/packages/types/src/vite.ts#L11) pour plus d'options.

::: warning
Il n'est pas permis de ré-ajouter des plugins qui sont déjà utilisés en interne par Slidev. Par exemple, au lieu de

```ts twoslash
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue({
      /* options vue */
    })
  ],
})
```

Veuillez passer les options Vue au champ `slidev.vue` comme décrit ci-dessus
:::

## Ajouter des plugins personnalisés basés sur les données des diapositives

Habituellement, vous pouvez ajouter des plugins Vite dans votre `vite.config.ts` (voir ci-dessus).
Cependant, si vous souhaitez ajouter des plugins basés sur les données des diapositives, vous devez ajouter un `./setup/vite-plugins.ts` avec le contenu suivant :

```ts twoslash
import { defineVitePluginsSetup } from '@slidev/types'

export default defineVitePluginsSetup((options) => {
  return [
    // Vos plugins ici
    // Les données des diapositives sont disponibles via options.data.slides
  ]
})
```
