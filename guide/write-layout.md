# Écrire des mises en page

> Veuillez d'abord lire <LinkInline link="guide/layout" />.

Pour créer une mise en page personnalisée, créez simplement un nouveau fichier Vue dans le répertoire `layouts` :

```bash
your-slidev/
  ├── ...
  ├── slides.md
  └── layouts/
      ├── ...
      └── MyLayout.vue
```

Les mises en page sont des composants Vue, vous pouvez donc utiliser toutes les fonctionnalités de Vue dans celles-ci.

Dans le composant de mise en page, utilisez `<slot/>` (le slot par défaut) pour le contenu de la diapositive :

```vue [default.vue]
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

Vous pouvez également avoir des [slots nommés](https://vuejs.org/guide/components/slots.html) pour des mises en page plus complexes :

```vue [split.vue]
<template>
  <div class="slidev-layout split">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>
```

Et ensuite l'utiliser avec <LinkInline link="features/slot-sugar" />.
