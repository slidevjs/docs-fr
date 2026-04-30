---
depends:
  - guide/syntax
relates:
  - features/prettier-plugin
tags: [syntax]
description: |
  Utiliser un bloc YAML comme frontmatter.
---

# Frontmatter en bloc

La façon habituelle de définir les frontmatters des diapositives est concise, mais peut manquer de support de coloration syntaxique et de formatage. Pour résoudre cela, vous pouvez utiliser un bloc YAML au tout début du contenu de la diapositive comme frontmatter de la diapositive :

````md
---
theme: default
---

# Slide 1

---

```yaml
layout: quote
```

# Slide 2

---

# Slide 3
````

::: warning À propos du headmatter

Le headmatter dans Slidev est exactement ce qu'on appelle habituellement le « frontmatter » d'un fichier Markdown, qui est supporté par la plupart des éditeurs et formatages Markdown. Vous ne pouvez donc pas utiliser un bloc YAML comme headmatter de l'ensemble du deck de diapositives.

:::
