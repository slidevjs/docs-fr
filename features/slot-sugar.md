---
relates:
  - Vue's Named Slots: https://v3.vuejs.org/guide/component-slots.html
tags: [layout, syntax]
description: |
  Un sucre syntaxique pour les slots nommés dans les mises en page.
---

# Sucre syntaxique pour les slots des mises en page

Certaines mises en page peuvent fournir plusieurs points de contribution en utilisant les [slots nommés de Vue](https://vuejs.org/guide/components/slots.html).

Par exemple, dans la [mise en page `two-cols`](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue), vous pouvez avoir deux colonnes gauche (slot `default`) et droite (slot `right`) côte à côte.

```md
---
layout: two-cols
---

<template v-slot:default>

# Gauche

Ceci s'affiche à gauche

</template>
<template v-slot:right>

# Droite

Ceci s'affiche à droite

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>Gauche</h3>
<p>Ceci s'affiche à gauche</p>
</div>
<div>
<h3>Droite</h3>
<p>Ceci s'affiche à droite</p>
</div>
</div>

Nous fournissons également un raccourci syntaxique `::name::` pour le nom du slot. Ce qui suit fonctionne exactement de la même manière que l'exemple précédent.

```md
---
layout: two-cols
---

# Gauche

Ceci s'affiche à gauche

::right::

# Droite

Ceci s'affiche à droite
```

Vous pouvez également spécifier explicitement le slot par défaut et le fournir dans l'ordre personnalisé.

```md
---
layout: two-cols
---

::right::

# Droite

Ceci s'affiche à droite

::default::

# gauche

Ceci s'affiche à gauche
```
