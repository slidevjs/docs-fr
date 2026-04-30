---
relates:
  - features/frontmatter-merging
tags: [syntax]
description: |
  Diviser votre `slides.md` en plusieurs fichiers pour une meilleure réutilisabilité et organisation.
---

# Importer des diapositives

Vous pouvez diviser votre `slides.md` en plusieurs fichiers pour une meilleure réutilisabilité et organisation. Pour ce faire, vous pouvez utiliser l'option frontmatter `src` pour spécifier le chemin vers le fichier markdown externe. Par exemple :

::: code-group

<!-- eslint-skip -->

```md [./slides.md]
# Title

Ceci est une page normale

---
src: ./pages/toc.md // [!code highlight]
---

<!-- cette page sera chargée depuis './pages/toc.md' -->

Le contenu ici est ignoré

---

# Page 4

Une autre page normale

---
src: ./pages/toc.md   # Reuse the same file // [!code highlight]
---
```

```md [./pages/toc.md]
# Table des matières

Partie 1

---

# Table des matières

Partie 2
```

:::

## Importer des diapositives spécifiques

Pour réutiliser certaines diapositives dans un autre fichier Markdown, vous pouvez utiliser la partie hash du chemin d'importation :

```md
---
src: ./another-presentation.md#2,5-7
---
```

Cela importera les diapositives 2, 5, 6 et 7 de `./another-presentation.md`.

## Fusion du frontmatter

<LinkCard link="features/frontmatter-merging" />
