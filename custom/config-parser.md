# Configurer et étendre le parseur

Slidev analyse votre fichier de présentation (par exemple `slides.md`) en trois étapes :

1. Une étape de « pré-analyse » est effectuée : le fichier est divisé en diapositives en utilisant le séparateur `---`, et en tenant compte des éventuels blocs de frontmatter.
2. Chaque diapositive est analysée avec une bibliothèque externe.
3. Slidev résout la propriété spéciale du frontmatter `src: ....`, qui permet d'inclure d'autres fichiers md.

## Parseur Markdown

La configuration du parseur Markdown utilisé à l'étape 2 peut être effectuée en [configurant les plugins internes de Vite](/custom/config-vite#configure-internal-plugins).

## Extensions du pré-parseur

> Disponible depuis la v0.37.0.

:::warning
Important : lors de la modification de la configuration du pré-parseur, vous devez arrêter et redémarrer slidev (un redémarrage simple pourrait ne pas suffire).
:::

Le pré-parseur (étape 1 ci-dessus) est hautement extensible et permet d'implémenter des syntaxes personnalisées pour vos fichiers md. Étendre le pré-parseur est considéré comme **une fonctionnalité avancée** et est susceptible de casser les [intégrations éditeur](/guide/editors) en raison de modifications implicites de la syntaxe.

Pour le personnaliser, créez un fichier `./setup/preparser.ts` avec le contenu suivant :

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({ filepath, headmatter, mode }) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {
          if (lines[i] === '@@@')
            lines[i] = 'HELLO'
        }
      },
    }
  ]
})
```

Cet exemple remplace systématiquement toute ligne `@@@` par une ligne avec `hello`. Il illustre la structure d'un fichier de configuration du pré-parseur et certains des concepts principaux impliqués par le pré-parseur :

- `definePreparserSetup` doit être appelé avec une fonction en paramètre.
- La fonction reçoit le chemin du fichier (du fichier de présentation racine), le headmatter (du fichier md) et, depuis la v0.48.0, un mode (dev, build ou export). Elle peut utiliser ces informations (par exemple, activer des extensions en fonction du fichier de présentation ou du fait que nous exportons un PDF).
- La fonction doit retourner une liste d'extensions du pré-parseur.
- Une extension peut contenir :
  - une fonction `transformRawLines(lines)` qui s'exécute juste après l'analyse du headmatter du fichier md et reçoit une liste de toutes les lignes (du fichier md). La fonction peut muter la liste arbitrairement.
  - une fonction `transformSlide(content, frontmatter)` qui est appelée pour chaque diapositive, juste après la division du fichier, et reçoit le contenu de la diapositive sous forme de chaîne de caractères et le frontmatter de la diapositive sous forme d'objet. La fonction peut muter le frontmatter et doit retourner la chaîne de contenu (éventuellement modifiée, éventuellement `undefined` si aucune modification n'a été effectuée).
  - un `name`

## Exemples d'extensions du pré-parseur

### Cas d'usage 1 : syntaxe compacte pour une présentation de premier niveau

Imaginez une situation où (une partie de) votre présentation montre principalement des images de couverture et inclut d'autres fichiers md. Vous pourriez vouloir une notation compacte où par exemple (une partie de) `slides.md` est comme suit :

<!-- eslint-skip -->

```md
@cover: /nice.jpg
# Welcome
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://source.unsplash.com/collection/94734566/1920x1080
# Questions?
see you next time
```

Pour autoriser ces syntaxes `@src:` et `@cover:`, créez un fichier `./setup/preparser.ts` avec le contenu suivant :

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(
              i,
              1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          if (l.match(/^@src:/i)) {
            lines.splice(
              i,
              1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          i++
        }
      }
    },
  ]
})
```

Et c'est tout.

### Cas d'usage 2 : utilisation d'un frontmatter personnalisé pour envelopper les diapositives

Imaginez un cas où vous souhaitez souvent mettre à l'échelle certaines de vos diapositives tout en voulant utiliser une variété de mises en page existantes, de sorte que créer une nouvelle mise en page ne serait pas adapté.
Par exemple, vous pourriez vouloir écrire votre `slides.md` comme suit :

<!-- eslint-skip -->

```md
---
layout: quote
_scale: 0.75
---

# Welcome

> great!

---
_scale: 4
---
# Break

---

# Ok

---
layout: center
_scale: 2.5
---
# Questions?
see you next time
```

Ici, nous avons utilisé un underscore dans `_scale` pour éviter d'éventuels conflits avec les propriétés de frontmatter existantes (en effet, le cas de `scale`, sans underscore, pourrait causer des problèmes potentiels).

Pour gérer cette syntaxe `_scale: ...` dans le frontmatter, créez un fichier `./setup/preparser.ts` avec le contenu suivant :

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformSlide(content, frontmatter) {
        if ('_scale' in frontmatter) {
          return [
            `<Transform :scale=${frontmatter._scale}>`,
            '',
            content,
            '',
            '</Transform>'
          ].join('\n')
        }
      },
    },
  ]
})
```

Et c'est tout.
