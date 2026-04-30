---
depends:
  - guide/syntax#code-block
relates:
  - TwoSlash: https://twoslash.netlify.app/
since: v0.46.0
tags: [codeblock]
description: |
  Un outil puissant pour le rendu des blocs de code TypeScript avec des informations de type au survol ou en ligne.
---

# Intégration TwoSlash

[TwoSlash](https://twoslash.netlify.app/) est un outil puissant pour le rendu des blocs de code TypeScript avec des informations de type au survol ou en ligne. C'est très utile pour préparer des diapositives sur des sujets liés à JavaScript/TypeScript.

Pour l'utiliser, vous pouvez ajouter `twoslash` à l'identifiant de langage du bloc de code :

````md
```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```
````

Il sera rendu comme :

```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```

<!-- Pour que la popup ne chevauche pas le contenu ci-dessous -->
<div class="py-20" />
