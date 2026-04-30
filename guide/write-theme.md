# Écrire des thèmes

> Veuillez d'abord lire <LinkInline link="guide/theme-addon" />.

Chaque projet de diapositives ne peut avoir qu'un seul thème. Les thèmes doivent se concentrer sur l'apparence des diapositives. Si la fonctionnalité n'est pas liée à l'apparence et peut être utilisée séparément, elle doit être implémentée comme un [addon](./write-addon).

Pour commencer, nous vous recommandons d'utiliser notre générateur pour échafauder votre premier thème

::: code-group

```bash [pnpm]
$ pnpm create slidev-theme
```

```bash [npm]
$ npm init slidev-theme@latest
```

```bash [yarn]
$ yarn create slidev-theme
```

```bash [bun]
$ bun create slidev-theme
```

```bash [deno]
$ deno init --npm slidev-theme
```

:::

Ensuite, vous pouvez le modifier et l'expérimenter. Vous pouvez également vous référer aux [thèmes officiels](../resources/theme-gallery#official-themes) comme exemples.

## Capacités

Un thème peut contribuer aux points suivants :

- Styles globaux
- Fournir des configurations par défaut
- Fournir des dispositions personnalisées ou remplacer les existantes
- Fournir des composants personnalisés
- Configurer des outils comme UnoCSS, Shiki, etc.

Cependant, les points suivants **ne** sont **pas** recommandés pour un thème, et seraient mieux implémentés comme un [addon](./write-addon) :

- Nouveaux extraits de code
- Nouveaux exécuteurs de code
- Autres choses qui peuvent être utilisées séparément

Fondamentalement, la façon de fournir des styles globaux, des dispositions, des composants et de configurer des outils est la même que dans un projet de diapositives. Par exemple, pour configurer Shiki, vous pouvez créer un fichier `./setup/shiki.ts` comme décrit dans [Configurer le surligneur](../custom/config-highlighter). Vous pouvez vous référer au [guide de personnalisation](/custom/) pour plus d'informations.

Pour fournir des configurations Slidev par défaut, vous pouvez ajouter un champ `slidev.defaults` dans le fichier `package.json`, qui sera fusionné avec les configurations de l'utilisateur :

```json [package.json]
{
  "slidev": {
    "defaults": {
      "transition": "slide-left",
      "aspectRatio": "4/3"
    }
  }
}
```

### Version de Slidev requise

Si le thème dépend d'une fonctionnalité spécifique de Slidev récemment introduite, vous pouvez définir la version minimale de Slidev requise pour que votre thème fonctionne correctement :

```json
{
  "engines": {
    "slidev": ">=0.48.0"
  }
}
```

Un message d'erreur sera affiché lorsqu'une version incompatible est utilisée.

### Métadonnées du thème

Par défaut, Slidev suppose que les thèmes prennent en charge à la fois le mode clair et le mode sombre. Si vous souhaitez que votre thème soit présenté uniquement dans un schéma de couleurs spécifique, vous devez le spécifier explicitement dans le `package.json` :

```json [package.json]
{
  "slidev": {
    "colorSchema": "light" // ou "dark" ou "both"
  }
}
```

## Aperçu

Vous pouvez prévisualiser votre thème pendant le développement en utilisant un jeu de diapositives de démonstration. Pour ce faire, créez un fichier `./slides.md` avec l'en-tête suivant :

```md [slides.md]
---
theme: ./  # Utiliser le thème dans le répertoire courant
---
```

Ensuite, vous pouvez démarrer les diapositives de démonstration comme d'habitude.

## Publication

Lors de la publication du thème, les fichiers non-JS comme les fichiers `.vue` et `.ts` peuvent être publiés directement sans compilation. Slidev les compilera automatiquement lors de l'utilisation du thème.

Les thèmes doivent suivre les conventions suivantes :

- Le nom du package doit commencer par `slidev-theme-`. Par exemple, `slidev-theme-name` ou `@scope/slidev-theme-name`
- Ajoutez `"slidev-theme"` et `"slidev"` dans le champ `keywords` de votre `package.json`

Les thèmes peuvent être utilisés localement sans être publiés sur NPM. Si votre thème est uniquement à usage personnel, vous pouvez simplement l'utiliser comme thème local, ou le publier comme package privé avec portée. Cependant, il est recommandé de le publier sur le registre NPM si vous souhaitez le partager avec d'autres.
