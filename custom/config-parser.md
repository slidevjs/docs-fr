# Configurer le pré-analyseur

::: info
Les pré-analyseurs personnalisés ne sont pas censés être utilisés trop souvent. Habituellement, vous pouvez utiliser les [Transformateurs](./config-transformers) pour les syntaxes personnalisées.
:::

Slidev analyse votre fichier de présentation (par ex. `slides.md`) en trois étapes :

1. Une étape de « pré-analyse » est effectuée : le fichier est découpé en diapositives en utilisant le séparateur `---`, en tenant compte des blocs frontmatter possibles.
2. Chaque diapositive est analysée avec une bibliothèque externe.
3. Slidev résout la propriété frontmatter spéciale `src: ....`, qui permet d'inclure d'autres fichiers md.

## Analyseur Markdown

La configuration de l'analyseur markdown utilisé à l'étape 2 peut être faite en [configurant les plugins internes de Vite](/custom/config-vite#configure-internal-plugins).

## Extensions du pré-analyseur

> Disponible depuis la v0.37.0.

::: warning
Important : lors de la modification de la configuration du pré-analyseur, vous devez arrêter et redémarrer Slidev (le redémarrage peut ne pas suffire).
:::

Le pré-analyseur (étape 1 ci-dessus) est hautement extensible et vous permet d'implémenter des syntaxes personnalisées pour vos fichiers md. L'extension du pré-analyseur est considérée comme **une fonctionnalité avancée** et est susceptible de casser les [intégrations d'éditeur](../features/side-editor) en raison de changements implicites dans la syntaxe.

Pour le personnaliser, créez un fichier `./setup/preparser.ts` avec le contenu suivant :

```ts twoslash [./setup/preparser.ts]
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

Cet exemple remplace systématiquement toute ligne `@@@` par une ligne avec `hello`. Il illustre la structure d'un fichier de configuration du pré-analyseur et certains des concepts principaux impliqués :

- `definePreparserSetup` doit être appelé avec une fonction comme paramètre.
- La fonction reçoit le chemin du fichier (du fichier de présentation racine), le headmatter (du fichier md) et, depuis la v0.48.0, un mode (dev, build ou export). Elle peut utiliser ces informations (par ex., activer des extensions en fonction du fichier de présentation ou si nous exportons un PDF).
- La fonction doit retourner une liste d'extensions du pré-analyseur.
- Une extension peut contenir :
  - une fonction `transformRawLines(lines)` qui s'exécute juste après l'analyse du headmatter du fichier md et reçoit une liste de toutes les lignes (du fichier md). La fonction peut modifier la liste de manière arbitraire.
  - une fonction `transformSlide(content, frontmatter)` qui est appelée pour chaque diapositive, juste après la division du fichier, et reçoit le contenu de la diapositive sous forme de chaîne et le frontmatter de la diapositive sous forme d'objet. La fonction peut modifier le frontmatter et doit retourner la chaîne de contenu (possiblement modifiée, possiblement `undefined` si aucune modification n'a été faite).
  - une fonction `transformNote(note, frontmatter)` qui est appelée pour chaque diapositive, juste après la division du fichier, et reçoit la note de la diapositive sous forme de chaîne ou undefined et le frontmatter de la diapositive sous forme d'objet. La fonction peut modifier le frontmatter et doit retourner la chaîne de note (possiblement modifiée, possiblement `undefined` si aucune modification n'a été faite).
  - un `name`

## Exemples d'extensions du pré-analyseur

### Cas d'utilisation 1 : présentation de haut niveau avec syntaxe compacte

Imaginez une situation où (une partie de) votre présentation montre principalement des images de couverture et inclut d'autres fichiers md. Vous pourriez vouloir une notation compacte où par exemple (une partie de) `slides.md` est comme suit :

<!-- eslint-skip -->

```md
@cover: /nice.jpg
# Welcome
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://cover.sli.dev
# Questions?
a bientôt
```

Pour permettre ces syntaxes `@src:` et `@cover:`, créez un fichier `./setup/preparser.ts` avec le contenu suivant :

```ts twoslash [./setup/preparser.ts]
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (/^@cover:/i.test(l)) {
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
          if (/^@src:/i.test(l)) {
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

### Cas d'utilisation 2 : utiliser le frontmatter personnalisé pour envelopper les diapositives

Imaginez un cas où vous souhaitez souvent mettre à l'échelle certaines de vos diapositives mais voulez encore utiliser une variété de mises en page existantes, donc créer une nouvelle mise en page ne serait pas adapté.
Par exemple, vous pourriez vouloir écrire votre `slides.md` comme suit :

<!-- eslint-skip -->

```md
---
layout: quote
_scale: 0.75
---

# Bienvenue

> bien!

---
_scale: 4
---
# Stop

---

# Ok

---
layout: center
_scale: 2.5
---
# Questions?
a bientôt
```

Ici, nous avons utilisé un underscore dans `_scale` pour éviter les conflits possibles avec les propriétés frontmatter existantes (en effet, le cas de `scale`, sans underscore causerait des problèmes potentiels).

Pour gérer cette syntaxe `_scale: ...` dans le frontmatter, créez un fichier `./setup/preparser.ts` avec le contenu suivant :

```ts twoslash [./setup/preparser.ts]
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      async transformSlide(content, frontmatter) {
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

### Cas d'utilisation 3 : utiliser le frontmatter personnalisé pour transformer les notes

Imaginez un cas où vous souhaitez remplacer les notes par défaut des diapositives par des notes personnalisées.
Par exemple, vous pourriez vouloir écrire votre `slides.md` comme suit :

<!-- eslint-skip -->

```md
---
layout: quote
_note: notes/note.md
---

# Bienvenue

> bien!

<!--
Notes de diapositives par défaut
-->
```

Ici, nous avons utilisé un underscore dans `_note` pour éviter les conflits possibles avec les propriétés frontmatter existantes.

Pour gérer cette syntaxe `_note: ...` dans le frontmatter, créez un fichier `./setup/preparser.ts` avec le contenu suivant :

```ts twoslash [./setup/preparser.ts]
import fs, { promises as fsp } from 'node:fs'
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      async transformNote(note, frontmatter) {
        if ('_note' in frontmatter && fs.existsSync(frontmatter._note)) {
          try {
            const newNote = await fsp.readFile(frontmatter._note, 'utf8')
            return newNote
          }
          catch (err) {
          }
        }

        return note
      },
    },
  ]
})
```
