---
relates:
  - Demo: /demo/starter/11
  - KaTeX: https://katex.org/
tags: [codeblock, syntax]
description: |
  Slidev intègre le support LaTeX nativement, propulsé par KaTeX.
---

# LaTeX

Slidev intègre le support LaTeX nativement, propulsé par [KaTeX](https://katex.org/).

## En ligne

Entourez votre LaTeX d'un seul `$` de chaque côté pour un rendu en ligne.

```md
$\sqrt{3x-1}+(1+x)^2$
```

## En bloc

Utilisez deux (`$$`) pour un rendu en bloc. Ce mode utilise des symboles plus grands et centre le résultat.

```latex
$$
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial\vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}
$$
```

## Surlignage de lignes

Pour surligner des lignes spécifiques, ajoutez simplement les numéros de ligne entre accolades `{}`. Les numéros de ligne commencent à compter à partir de 1 par défaut.

```latex
$$ {1|3|all}
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial\vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}
$$
```

Les options `at` et `finally` des [blocs de code](#line-highlighting) sont également disponibles pour les blocs LaTeX.

## Équations chimiques

Pour activer le rendu des équations chimiques, l'extension KaTeX [mhchem](https://github.com/KaTeX/KaTeX/tree/main/contrib/mhchem) doit être chargée.

Créez `vite.config.ts` avec le contenu suivant :

```ts
import 'katex/contrib/mhchem'

export default {}
```

Maintenant les équations chimiques peuvent être rendues correctement.

```latex
$$
\displaystyle{\ce{B(OH)3 + H2O <--> B(OH)4^- + H+}}
$$
```

En savoir plus : [Syntaxe](https://mhchem.github.io/MathJax-mhchem)

---

<TheTweet id="1392246507793915904" />
