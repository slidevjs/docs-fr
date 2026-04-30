---
depends:
  - guide/syntax#code-block
tags: [codeblock]
description: |
  Regrouper plusieurs blocs de code et associer automatiquement une icône par le nom du titre.
---

# Groupes de code

> [!NOTE]
> Cette fonctionnalité nécessite la [Syntaxe Comark](/features/comark#comark-syntax). Activez `comark: true` pour l'utiliser.

Vous pouvez regrouper plusieurs blocs de code comme ceci :

````md
::code-group

```sh [npm]
npm i @slidev/cli
```

```sh [yarn]
yarn add @slidev/cli
```

```sh [pnpm]
pnpm add @slidev/cli
```

::
````

## Correspondance d'icônes par titre

Les `groupes de code`, les `blocs de code` et [`Shiki Magic Move`](/features/shiki-magic-move) supportent également la correspondance automatique d'icônes par le nom du titre.

![code-groups-demo](/assets/code-groups-demo.png)

::: info

Par défaut, nous fournissons des icônes intégrées, vous pouvez les utiliser en installant [@iconify-json/vscode-icons](https://www.npmjs.com/package/@iconify-json/vscode-icons).

:::

::: details Toutes les icônes intégrées

```js
const builtinIcons = {
  // gestionnaires de paquets
  'pnpm': 'i-vscode-icons:file-type-light-pnpm',
  'npm': 'i-vscode-icons:file-type-npm',
  'yarn': 'i-vscode-icons:file-type-yarn',
  'bun': 'i-vscode-icons:file-type-bun',
  'deno': 'i-vscode-icons:file-type-deno',
  // frameworks
  'vue': 'i-vscode-icons:file-type-vue',
  'svelte': 'i-vscode-icons:file-type-svelte',
  'angular': 'i-vscode-icons:file-type-angular',
  'react': 'i-vscode-icons:file-type-reactjs',
  'next': 'i-vscode-icons:file-type-light-next',
  'nuxt': 'i-vscode-icons:file-type-nuxt',
  'solid': 'logos:solidjs-icon',
  'astro': 'i-vscode-icons:file-type-light-astro',
  // bundlers
  'rollup': 'i-vscode-icons:file-type-rollup',
  'webpack': 'i-vscode-icons:file-type-webpack',
  'vite': 'i-vscode-icons:file-type-vite',
  'esbuild': 'i-vscode-icons:file-type-esbuild',
  // fichiers de configuration
  'package.json': 'i-vscode-icons:file-type-node',
  'tsconfig.json': 'i-vscode-icons:file-type-tsconfig',
  '.npmrc': 'i-vscode-icons:file-type-npm',
  '.editorconfig': 'i-vscode-icons:file-type-editorconfig',
  '.eslintrc': 'i-vscode-icons:file-type-eslint',
  '.eslintignore': 'i-vscode-icons:file-type-eslint',
  'eslint.config': 'i-vscode-icons:file-type-eslint',
  '.gitignore': 'i-vscode-icons:file-type-git',
  '.gitattributes': 'i-vscode-icons:file-type-git',
  '.env': 'i-vscode-icons:file-type-dotenv',
  '.env.example': 'i-vscode-icons:file-type-dotenv',
  '.vscode': 'i-vscode-icons:file-type-vscode',
  'tailwind.config': 'vscode-icons:file-type-tailwind',
  'uno.config': 'i-vscode-icons:file-type-unocss',
  'unocss.config': 'i-vscode-icons:file-type-unocss',
  '.oxlintrc': 'i-vscode-icons:file-type-oxlint',
  'vue.config': 'i-vscode-icons:file-type-vueconfig',
  // extensions de fichiers
  '.mts': 'i-vscode-icons:file-type-typescript',
  '.cts': 'i-vscode-icons:file-type-typescript',
  '.ts': 'i-vscode-icons:file-type-typescript',
  '.tsx': 'i-vscode-icons:file-type-typescript',
  '.mjs': 'i-vscode-icons:file-type-js',
  '.cjs': 'i-vscode-icons:file-type-js',
  '.json': 'i-vscode-icons:file-type-json',
  '.js': 'i-vscode-icons:file-type-js',
  '.jsx': 'i-vscode-icons:file-type-js',
  '.md': 'i-vscode-icons:file-type-markdown',
  '.py': 'i-vscode-icons:file-type-python',
  '.ico': 'i-vscode-icons:file-type-favicon',
  '.html': 'i-vscode-icons:file-type-html',
  '.css': 'i-vscode-icons:file-type-css',
  '.scss': 'i-vscode-icons:file-type-scss',
  '.yml': 'i-vscode-icons:file-type-light-yaml',
  '.yaml': 'i-vscode-icons:file-type-light-yaml',
  '.php': 'i-vscode-icons:file-type-php',
}
```

:::

## Icônes personnalisées

Vous pouvez utiliser n'importe quel nom de la collection [iconify](https://icones.js.org) en utilisant la syntaxe `~icon~`, par exemple :

````md
```js [npm ~i-uil:github~]
console.log('Hello, GitHub!')
```
````

Pour que cela fonctionne, vous devez :

1. Installer la collection de l'icône.

:::code-group

```sh [npm]
npm add @iconify-json/uil
```

```sh [yarn]
yarn add @iconify-json/uil
```

```sh [pnpm]
pnpm add @iconify-json/uil
```

```sh [bun]
bun add @iconify-json/uil
```

:::

2. Ajouter l'icône au fichier `uno.config.ts`.

```ts [uno.config.ts] {4-6}
import { defineConfig } from 'unocss'

export default defineConfig({
  safelist: [
    'i-uil:github',
  ],
})
```
