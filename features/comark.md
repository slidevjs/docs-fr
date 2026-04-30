---
relates:
  - Comark Syntax: https://comark.dev/syntax/markdown
  - '@comark/markdown-it': https://github.com/comarkdown/comark
since: v0.43.0
tags: [syntax, styling]
description: |
  Une syntaxe puissante pour enrichir votre contenu markdown avec des composants et des styles.
---

# Syntaxe Comark

Slidev supporte la [Syntaxe Comark](https://comark.dev/syntax/markdown) optionnelle (anciennement connue sous le nom de MDC, Markdown Components) propulsée par [`@comark/markdown-it`](https://github.com/comarkdown/comark).

Vous pouvez l'activer en ajoutant `comark: true` dans le frontmatter de votre fichier markdown.

```mdc
---
comark: true
---

Ceci est un [text rouge]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
Le slot **par défaut**
::
```

En savoir plus sur la [Syntaxe Comark](https://comark.dev/syntax/markdown).
