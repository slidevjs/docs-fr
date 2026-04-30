---
depends:
  - features/monaco-editor
  - features/import-snippet
relates:
  - features/import-snippet
  - Custom Code Runners: /custom/config-code-runners
since: v0.49.5
tags: [codeblock, editor]
description: |
  Un éditeur Monaco qui permet d'écrire du code directement dans les diapositives et d'enregistrer les modifications dans le fichier.
---

# Éditeur Monaco en écriture

Vous pouvez également utiliser la syntaxe [Importer des extraits de code](#import-code-snippets) combinée avec la directive `{monaco-write}`, pour lier votre éditeur Monaco à un fichier sur votre système de fichiers. Cela vous permettra de modifier le code directement dans l'éditeur et d'enregistrer les modifications dans le fichier.

```md
<<< ./some-file.ts {monaco-write}
```

Lors de l'utilisation de cette fonctionnalité, assurez-vous de sauvegarder vos fichiers au préalable, car les modifications seront enregistrées directement dans le fichier.
