---
relates:
  - Vue's Scoped CSS: https://vuejs.org/api/sfc-css-features.html#scoped-css
  - UnoCSS directives: https://unocss.dev/transformers/directives
tags: [styling, syntax]
description: |
  Définir des styles uniquement pour la diapositive actuelle.
---

# Styles à portée de diapositive

Vous pouvez utiliser la balise `<style>` dans votre Markdown pour définir des styles **uniquement pour la diapositive actuelle**.

```md
# Ceci est rouge

<style>
h1 {
  color: red;
}
</style>

---

# Les autres diapositives ne sont pas affectées
```

La balise `<style>` en Markdown est toujours [scopée](https://vuejs.org/api/sfc-css-features.html#scoped-css). Par conséquent, un sélecteur avec un combinateur enfant (`.a > .b`) est inutilisable tel quel ; voir le lien précédent. Pour avoir des styles globaux, consultez la [section de personnalisation](/custom/directory-structure#style).

Propulsé par [UnoCSS](/custom/config-unocss), vous pouvez directement utiliser le CSS imbriqué et les [directives](https://unocss.dev/transformers/directives) :

```md
# Slidev

> Hello **world**

<style>
blockquote {
  strong {
    --uno: 'text-teal-500 dark:text-teal-400';
  }
}
</style>
```
