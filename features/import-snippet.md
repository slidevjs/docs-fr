---
relates:
  - features/monaco-write
  - features/monaco-editor
since: v0.47.0
tags: [codeblock, syntax]
description: |
  Importer des extraits de code depuis des fichiers existants dans vos diapositives.
---

# Importer des extraits de code

Vous pouvez importer des extraits de code depuis des fichiers existants via la syntaxe suivante :

```md
<<< @/snippets/snippet.js
```

::: tip
La valeur de `@` correspond au répertoire racine de votre paquet. Il est recommandé de placer les extraits dans `@/snippets` pour être compatible avec l'éditeur Monaco. Alternativement, vous pouvez également importer depuis des chemins relatifs.
:::

Vous pouvez également utiliser une [région VS Code](https://code.visualstudio.com/docs/editor/codebasics#_folding) pour n'inclure que la partie correspondante du fichier code :

```md
<<< @/snippets/snippet.js#region-name
```

Pour spécifier explicitement le langage du code importé, vous pouvez ajouter un identifiant de langage après :

```md
<<< @/snippets/snippet.js ts
```

Toutes les fonctionnalités de bloc de code comme [le surlignage de lignes](#line-highlighting) et [l'éditeur Monaco](#monaco-editor) sont également supportées :

```md
<<< @/snippets/snippet.js {2,3|5}{lines:true}
<<< @/snippets/snippet.js ts {monaco}{height:200px}
```

Notez que vous pouvez utiliser `{*}` comme espace réservé pour <LinkInline link="features/line-highlighting" /> :

<!-- eslint-skip -->

```md
<<< @/snippets/snippet.js {*}{lines:true}
```
