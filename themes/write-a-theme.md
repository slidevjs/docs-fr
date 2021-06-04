# Ecrire un thème

Pour commencer, nous vous recommandons d'utiliser notre générateur pour échafauder votre premier thème

```bash
$ npm init slidev-theme
```

Ensuite, vous pouvez le modifier et jouer avec. Vous pouvez également vous référer aux [thèmes officiels](/themes/gallery) comme exemples.

## Aptitude

Un thème peut contribuer aux points suivants:

<<<<<<< HEAD
- Styles globaux
- Fournir des polices Web
- Fournir des mises en page personnalisées ou remplacer celle existante
- Fournir des composants personnalisés ou remplacer l'existant
- Étendre les configurations CSS Windi
- Configurer des outils comme Monaco et Prism
=======
- Global styles
- Provide default configurations (fonts, color schema, highlighters, etc.)
- Provide custom layouts or override the existing one
- Provide custom components or override the existing one
- Extend Windi CSS configurations
- Configure tools like Monaco and Prism
>>>>>>> ebf9abaa42c2dbfabfc2218bf88daf49b3b82ec3

## Conventions

Les thèmes sont publiés dans le registre npm et doivent respecter les conventions ci-dessous:

- Le nom du package doit commencer par `slidev-theme-`, par exemple: `slidev-theme-awesome`
- Ajoutez `slidev-theme` et` slidev` dans le champ `keywords` de votre` package.json`

## Installer

<<<<<<< HEAD
Pour configurer le terrain de jeu de test pour votre thème, vous pouvez créer `example.md` avec le frontmatter suivant, pour indiquer à Slidev que vous n'héritez d'aucun thème existant.
=======
To set up the testing playground for your theme, you can create `example.md` with the following frontmatter, to tell Slidev you are using the current directory as a theme.
>>>>>>> ebf9abaa42c2dbfabfc2218bf88daf49b3b82ec3

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

Pour publier votre thème, lancez simplement `npm publish` et vous êtes prêt à partir. Il n'y a pas de processus de construction requis (ce qui signifie que vous pouvez publier directement les fichiers `.vue` et` .ts`, Slidev est assez intelligent pour les comprendre).

Les points de contribution de thème suivent les mêmes conventions que la personnalisation locale, veuillez vous référer à [la documentation pour les conventions](/custom/).

<<<<<<< HEAD
## Schéma de couleurs
=======
## Default Configurations

> Available since v0.19

A theme can provide default [configurations](/custom/#frontmatter-configures) via `package.json`.

```json
// package.json
{
  "slidev": {
    "default": {
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

Fonts will be auto imported from [Google Fonts](https://fonts.google.com/).

Learn more about [fonts](/custom/fonts) and [frontmatter configurations](/custom/#frontmatter-configures).

## Theme Metadata

### Color Schema
>>>>>>> ebf9abaa42c2dbfabfc2218bf88daf49b3b82ec3

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
/* general css here */

html:not(.dark) {
  /* light mode css here */
}

html.dark {
  /* dark mode css here */
}
```

Slidev bascule une classe `dark` sur l'élément` html` de la page pour changer de schéma de couleur.

<<<<<<< HEAD
## Surligneur
=======
### Highlighter
>>>>>>> ebf9abaa42c2dbfabfc2218bf88daf49b3b82ec3

Les couleurs de mise en évidence de la syntaxe sont également fournies dans le thème. Nous prenons en charge à la fois [Prism](https://prismjs.com/) et [Shiki](https://github.com/shikijs/shiki). Pour plus d'informations, veuillez consulter [la documentation sur la coloration syntaxique](/custom/highlighters).

Vous pouvez prendre en charge l'un d'entre eux, ou les deux. Reportez-vous au thème par défaut pour des exemples de configurations [`./styles/prism.css`](https://github.com/slidevjs/slidev/blob/main/packages/theme-default/styles/prism.css) / [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/theme-default/setup/shiki.ts).

N'oubliez pas non plus de spécifier les surligneurs pris en charge dans votre `package.json`

```json
// package.json
{
  "slidev": {
    "highlighter": "shiki" // or "prism" or "all"
  }
}
```

### Slidev Version

If the theme is relying on a specific feature of Slidev that are newly introduced, you can set the minimal Slidev version required to have your theme working properly:

```json
// package.json
{
  "engines": {
    "slidev": ">=0.19.3"
  }
}
```

If users are using older versions of Slidev, an error will be thrown.
