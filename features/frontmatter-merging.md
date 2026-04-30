---
depends:
  - guide/syntax#importing-slides
  - features/importing-slides
tags: [syntax]
description: |
  Fusionner le frontmatter de plusieurs fichiers markdown.
---

# Fusion du frontmatter

Vous pouvez fournir des instructions frontmatter depuis votre entrée principale et des pages markdown externes. S'il y a des clés en double, celles de l'**entrée principale ont la priorité la plus élevée**. Par exemple :

::: code-group

```md [./slides.md]
---
src: ./cover.md
background: https://sli.dev/bar.png // [!code highlight]
class: text-center
---
```

```md [./cover.md]
---
layout: cover
background: https://sli.dev/foo.png // [!code highlight]
---

# Couverture

Page de couverture
```

:::

Ils finiront par être équivalents à la page suivante :

```md
---
layout: cover
background: https://sli.dev/bar.png // [!code highlight]
class: text-center
---

# Couverture

Page de couverture
```
