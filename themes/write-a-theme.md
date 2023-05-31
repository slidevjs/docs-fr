# Ecrire un thème

Pour commencer, nous vous recommandons d'utiliser notre générateur pour créer votre premier thème

```bash
$ npm init slidev-theme
```

Ensuite, vous pouvez le modifier et jouer avec. Vous pouvez également vous référer aux [thèmes officiels](/themes/gallery) comme exemples.

## Aptitude

Un thème peut contribuer aux points suivants :

<<<<<<< HEAD
- Styles globaux
- Fournir des configurations par défaut (police, schéma de couleurs, surligneurs, etc.)
- Fournir des mises en page personnalisées ou remplacer celle existante
- Fournir des composants personnalisés ou remplacer l'existant
- Étendre les configurations de WindiCSS 
- Configurer des outils comme Monaco et Prism
=======
- Global styles
- Provide default configurations (fonts, color schema, highlighters, etc.)
- Provide custom layouts or override the existing one
- Provide custom components or override the existing one
- Extend UnoCSS/Windi CSS configurations
- Configure tools like Monaco and Prism
>>>>>>> 44920cd4f45ab8edf0e33ec63ba535a44d6418a2

## Conventions

Les thèmes sont publiés dans le registre npm et doivent respecter les conventions ci-dessous :

- Le nom du package doit commencer par `slidev-theme-`, par exemple : `slidev-theme-awesome`
- Ajoutez `slidev-theme` et `slidev` dans le champ `keywords` de votre `package.json`

## Installer

Pour configurer le terrain de jeu de test pour votre thème, vous pouvez créer `example.md` avec le frontmatter suivant, pour dire à Slidev que vous utilisez le répertoire actuel comme thème.

```md
---
theme: ./
---
```

En option, vous pouvez également ajouter des scripts à votre `package.json`

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

Pour publier votre thème, lancez simplement `npm publish` et vous êtes prêt à partir. Il n'y a pas de processus de construction requis (ce qui signifie que vous pouvez publier directement les fichiers `.vue` et `.ts`, Slidev est assez intelligent pour les comprendre).

Les points de contribution de thème suivent les mêmes conventions que la personnalisation locale, veuillez vous référer à [la documentation pour les conventions](/custom/).

## Configurations par défaut

> Disponible depuis v0.19

Un thème peut fournir des [configurations par défaut](/custom/#frontmatter-configures) via `package.json`

```json
// package.json
{
  "slidev": {
    "defaults": {
      "aspectRatio": "16/9",
      "canvasWidth": 980,
      "fonts": {
        "sans": "Robot",
        "mono": "Fira Code"
      }
    }
  }
}
```

Les polices seront importées automatiquement depuis [Google Fonts](https://fonts.google.com/).

En savoir plus sur les [polices](/custom/fonts) et sur les [configurations frontmatter](/custom/#frontmatter-configures).

## Métadonnées du thème

### Color Schema

Par défaut, Slidev suppose que les thèmes prennent en charge à la fois le mode clair et le mode sombre. Si vous voulez seulement que votre thème soit présenté dans un schéma de couleurs conçu, vous devrez le spécifier explicitement dans `package.json`

```json
// package.json
{
  "name": "slidev-theme-my-cool-theme",
  "keywords": [
    "slidev-theme",
    "slidev"
  ],
  "slidev": {
    "colorSchema": "light" // or "dark" or "both"
  }
}
```

Pour accéder au mode sombre lors de la création de vos styles de thème, vous pouvez envelopper le css spécifique au mode sombre dans une classe `dark`:

```css
/* css general ici */

html:not(.dark) {
  /* css mode clair ici */
}

html.dark {
  /* css mode sombre ici */
}
```

Slidev bascule une classe `dark` sur l'élément `html` de la page pour changer de schéma de couleur.

## Surligneur

Les couleurs de mise en évidence de la syntaxe sont également fournies dans le thème. Nous prenons en charge à la fois [Prism](https://prismjs.com/) et [Shiki](https://github.com/shikijs/shiki). Pour plus d'informations, veuillez consulter [la documentation sur la coloration syntaxique](/custom/highlighters).

Vous pouvez prendre en charge l'un d'entre eux, ou les deux. Reportez-vous au thème par défaut pour des exemples de configurations [`./styles/code.css`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/styles/code.css) / [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/setup/shiki.ts).

N'oubliez pas non plus de spécifier les surligneurs pris en charge dans votre `package.json`

```json
// package.json
{
  "slidev": {
    "highlighter": "shiki" // or "prism" or "both"
  }
}
```

### Version de Slidev

Si le thème repose sur une fonctionnalité spécifique de Slidev récemment introduite, vous pouvez définir la version minimale de Slidev requise pour que votre thème fonctionne correctement :

```json
// package.json
{
  "engines": {
    "slidev": ">=0.19.3"
  }
}
```

Si les utilisateurs utilisent des versions plus anciennes de Slidev, une erreur sera générée.
