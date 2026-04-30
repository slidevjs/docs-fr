---
relates:
  - features/block-frontmatter
  - GitHub Repo: https://github.com/slidevjs/prettier-plugin
  - Prettier: https://prettier.io/
tags: [editor]
description: |
  Utiliser le plugin Prettier pour formater vos diapositives.
---

# Plugin Prettier

La syntaxe de Slidev peut être incompatible avec l'analyseur Markdown par défaut de [Prettier](https://prettier.io/). Pour résoudre cela, Slidev fournit un plugin Prettier pour formater vos diapositives. Vous pouvez l'utiliser avec votre éditeur préféré qui supporte Prettier.

## 1. Installer

::: code-group

```bash [npm]
npm i -D prettier prettier-plugin-slidev
```

```bash [pnpm]
pnpm i -D prettier prettier-plugin-slidev
```

```bash [yarn]
yarn add -D prettier prettier-plugin-slidev
```

```bash [bun]
bun add -D prettier prettier-plugin-slidev
```

```bash [deno]
deno add -D npm:prettier npm:prettier-plugin-slidev
```

:::

## 2. Activer le plugin

Créez ou modifiez votre [fichier de configuration prettier](https://prettier.io/docs/en/configuration) pour activer le plugin :

```json
{
  "overrides": [
    {
      "files": ["slides.md", "pages/*.md"],
      "options": {
        "parser": "slidev",
        "plugins": ["prettier-plugin-slidev"]
      }
    }
  ]
}
```

Notez que spécifier uniquement `plugins` ne suffit pas, car Slidev et les fichiers Markdown courants partagent la même extension de fichier `.md`.
