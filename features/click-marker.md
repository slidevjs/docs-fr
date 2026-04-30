---
depends:
  - guide/syntax#notes
  - guide/animations
since: v0.48.0
tags: [presenter, animation]
description: |
  Surligner les notes et défiler automatiquement vers la section active des notes.
---

# Marqueurs de clic

Pour certaines diapositives, vous pouvez avoir des notes plus longues qui pourraient être difficiles à situer. Slidev supporte les marqueurs de clic qui permettent de mettre en surbrillance et de défiler automatiquement vers la section de notes correspondant à votre contenu. Placez des marqueurs `[click]` au début de n'importe quelle ligne dans vos notes pour le moment où vous devez passer à un autre [click](/guide/animations#click-animation). Vous pouvez sauter `n` clics en utilisant `[click:{n+1}]`. Par exemple :

```md
<!--
Contenu avant le premier clic

[click] Celui-ci sera mis en surbrillance après le premier clic 

Également mis en évidence après le premier clic 

- [click] Cet élément de liste sera mis en surbrillance après le deuxième clic 

[click:3] Dernier clic (ignorer deux clics) -->
-->
```

Slidev divise le contenu entre les marqueurs de clic et le met en surbrillance dans les notes du présentateur, synchronisé avec la progression de votre diapositive.

<video src="https://github.com/slidevjs/slidev/assets/11247099/40014e34-67cd-4830-8c8d-8431754a3672" controls rounded shadow w-full></video>
