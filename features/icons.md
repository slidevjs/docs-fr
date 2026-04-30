---
relates:
  - Iconify: https://iconify.design/
  - Icones: https://icones.js.org/
  - unplugin-icons: https://github.com/antfu/unplugin-icons
tags: [components]
description: |
  Utiliser des icônes de pratiquement tous les ensembles d'icônes open-source directement dans votre markdown.
---

# Icônes

Slidev vous permet d'accéder à pratiquement tous les ensembles d'icônes open-source **directement** dans votre markdown après avoir installé le paquet correspondant. Propulsé par [`unplugin-icons`](https://github.com/antfu/unplugin-icons) et [Iconify](https://iconify.design/).

Le nommage suit la convention [Iconify](https://iconify.design/) de `{collection-name}-{icon-name}`. Par exemple :

- `<mdi-account-circle />` - <mdi-account-circle /> de [Material Design Icons](https://github.com/Templarian/MaterialDesign) - [`@iconify-json/mdi`](https://npmjs.com/package/@iconify-json/mdi)
- `<carbon-badge />` - <carbon-badge /> de [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) - [`@iconify-json/carbon`](https://npmjs.com/package/@iconify-json/carbon)
- `<uim-rocket />` - <uim-rocket /> de [Unicons Monochrome](https://github.com/Iconscout/unicons) - [`@iconify-json/uim`](https://npmjs.com/package/@iconify-json/uim)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> de [Twemoji](https://github.com/twitter/twemoji) - [`@iconify-json/twemoji`](https://npmjs.com/package/@iconify-json/twemoji)
- `<logos-vue />` - <logos-vue /> de [SVG Logos](https://github.com/gilbarbara/logos) - [`@iconify-json/logos`](https://npmjs.com/package/@iconify-json/logos)
- Et bien plus encore...

::: code-group

```bash [pnpm]
pnpm add @iconify-json/[the-collection-you-want]
```

```bash [npm]
npm install @iconify-json/[the-collection-you-want]
```

```bash [yarn]
yarn add @iconify-json/[the-collection-you-want]
```

```bash [bun]
bun add @iconify-json/[the-collection-you-want]
```

```bash [deno]
deno add jsr:@iconify-json/[the-collection-you-want]
```

:::

Nous utilisons [Iconify](https://iconify.design) comme source de données pour les icônes. Vous devez installer l'ensemble d'icônes correspondant dans `dependencies` en suivant le motif `@iconify-json/*`. Par exemple, `@iconify-json/mdi` pour [Material Design Icons](https://materialdesignicons.com/), `@iconify-json/tabler` pour [Tabler](https://tabler-icons.io/). Vous pouvez vous référer à [Icônes](https://icones.js.org/) ou [Iconify](https://icon-sets.iconify.design/) pour toutes les collections disponibles.

### Styliser les icônes

Vous pouvez styliser les icônes comme n'importe quel autre élément HTML. Par exemple :

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />
