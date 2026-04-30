---
outline: deep
---

# Exporter

Généralement, les diapositives sont affichées dans un navigateur web, mais vous pouvez aussi les exporter en PDF, PPTX, PNG ou fichiers Markdown pour le partage ou l'impression. Cette fonctionnalité est disponible via la commande CLI [`slidev export`](../builtin/cli#export).

Cependant, les fonctionnalités interactives de vos diapositives peuvent ne pas être disponibles dans les fichiers exportés. Vous pouvez construire et héberger vos diapositives en tant qu'application web pour conserver l'interactivité. Voir [Construction et hébergement](./hosting) pour plus d'informations.

## L'exportateur navigateur <Badge> Recommandé </Badge> {#browser}

> Disponible depuis la v0.50.0-beta.11

Slidev fournit une interface dans le navigateur pour exporter vos diapositives. Vous pouvez y accéder en cliquant sur le bouton « Export » dans le menu « Plus d'options » de la [barre de navigation](./ui#navigation-bar), ou en allant directement à `http://localhost:<port>/export`.

Dans l'interface, vous pouvez exporter les diapositives en PDF, ou capturer les diapositives en images et les télécharger en fichier PPTX ou zip.

Notez que les navigateurs autres que les **navigateurs modernes basés sur Chromium** peuvent ne pas fonctionner correctement avec l'interface d'exportation. Si vous rencontrez des problèmes, essayez d'utiliser la CLI à la place.

> Le contenu suivant de cette page concerne uniquement la CLI.

## La CLI {#cli}

L'exportation en PDF, PPTX ou PNG repose sur [Playwright](https://playwright.dev) pour le rendu des diapositives. Par conséquent, [`playwright-chromium`](https://npmjs.com/package/playwright-chromium) doit être installé dans votre projet :

::: code-group

```bash [pnpm]
$ pnpm add -D playwright-chromium
```

```bash [npm]
$ npm i -D playwright-chromium
```

```bash [yarn]
$ yarn add -D playwright-chromium
```

```bash [bun]
$ bun add -D playwright-chromium
```

```bash [deno]
$ deno add -D npm:playwright-chromium
```

:::

## Formats

### PDF

Après avoir installé `playwright-chromium` comme décrit ci-dessus, vous pouvez exporter vos diapositives en PDF avec la commande suivante :

```bash
$ slidev export
```

Par défaut, le PDF sera placé dans `./slides-export.pdf`.

### PPTX

Slidev peut également exporter vos diapositives en fichier PPTX :

```bash
$ slidev export --format pptx
```

Notez que toutes les diapositives du fichier PPTX seront exportées en tant qu'images, le texte ne sera donc pas sélectionnable. Les notes du présentateur seront intégrées dans le fichier PPTX par diapositive.

Dans ce mode, l'option `--with-clicks` est activée par défaut. Pour la désactiver, passez `--with-clicks false`.

### PNG et Markdown

En passant l'option `--format png`, Slidev exportera des images PNG pour chaque diapositive au lieu d'un PDF :

```bash
$ slidev export --format png
```

Vous pouvez également compiler un fichier markdown composé de PNG compilés avec `--format md` :

```bash
$ slidev export --format md
```

## Options

Voici quelques options courantes que vous pouvez utiliser avec la commande `slidev export`. Pour une liste complète des options, consultez la [documentation de la CLI](../builtin/cli#export).

### Exporter les étapes des clics

Par défaut, Slidev exporte une page par diapositive avec les animations de clics désactivées. Si vous souhaitez exporter des diapositives avec plusieurs étapes en plusieurs pages, passez l'option `--with-clicks` :

```bash
$ slidev export --with-clicks
```

### Nom du fichier de sortie

Vous pouvez spécifier le nom du fichier de sortie avec l'option `--output` :

```bash
$ slidev export --output my-pdf-export
```

Ou dans la configuration headmatter :

```yaml
---
exportFilename: my-pdf-export
---
```

### Exporter avec une plage

Par défaut, toutes les diapositives de la présentation sont exportées. Si vous souhaitez exporter une diapositive spécifique ou une plage de diapositives, vous pouvez définir l'option `--range` et spécifier les diapositives à exporter :

```bash
$ slidev export --range 1,6-8,10
```

Cette option accepte à la fois des numéros de diapositives spécifiques et des plages. L'exemple ci-dessus exporterait les diapositives 1, 6, 7, 8 et 10.

### Exportations multiples

Vous pouvez également exporter plusieurs diapositives à la fois :

```bash
$ slidev export slides1.md slides2.md
```

Ou (disponible uniquement dans certains shells) :

```bash
$ slidev export *.md
```

Dans ce cas, chaque fichier d'entrée générera son propre fichier PDF.

### Mode sombre

Si vous souhaitez exporter vos diapositives avec la version sombre du thème, utilisez l'option `--dark` :

```bash
$ slidev export --dark
```

### Délais d'attente

Pour les grandes présentations, vous pouvez augmenter le délai d'attente Playwright avec `--timeout` :

```bash
$ slidev export --timeout 60000
```

### Attente

Certaines parties de vos diapositives peuvent nécessiter plus de temps pour le rendu. Vous pouvez utiliser l'option `--wait` pour ajouter un délai supplémentaire avant l'exportation :

```bash
$ slidev export --wait 10000
```

Il existe également une option `--wait-until` pour attendre un état avant d'exporter chaque diapositive. Si vous continuez à rencontrer des problèmes de délai d'attente, essayez de définir cette option :

```bash
$ slidev export --wait-until none
```

Valeurs possibles :

- `'networkidle'` - (_par défaut_) considère l'opération terminée lorsqu'il n'y a pas de connexions réseau pendant au moins `500` ms. C'est le plus sûr, mais peut provoquer des dépassements de délai.
- `'domcontentloaded'` - considère l'opération terminée lorsque l'événement `DOMContentLoaded` est déclenché.
- `'load'` - considère l'opération terminée lorsque l'événement `load` est déclenché.
- `'none'` - n'attend aucun événement.

::: warning
Lorsque vous spécifiez des valeurs autres que `'networkidle'`, assurez-vous que les diapositives imprimées sont complètes et correctes. Si du contenu manque, vous devrez peut-être utiliser l'option `--wait`.
:::

### Chemin de l'exécutable

Chromium peut manquer de certaines fonctionnalités comme les codecs nécessaires au décodage de certaines vidéos. Vous pouvez définir le chemin de l'exécutable du navigateur pour Playwright vers votre Chrome ou Edge avec `--executable-path` :

```bash
$ slidev export --executable-path [path_to_chromium]
```

### Structure du PDF

> Disponible depuis la v0.36.10

Vous pouvez générer la structure du PDF en passant l'option `--with-toc` :

```bash
$ slidev export --with-toc
```

### Omettre l'arrière-plan

Lors de l'exportation en PNG, vous pouvez supprimer l'arrière-plan par défaut du navigateur en passant `--omit-background` :

```bash
$ slidev export --omit-background
```

L'arrière-plan par défaut du navigateur est l'arrière-plan blanc visible sur toutes les fenêtres de navigateur et est différent des autres arrière-plans appliqués dans l'application via le style CSS. [Voir la documentation Playwright](https://playwright.dev/docs/api/class-page#page-screenshot-option-omit-background). Vous devrez ensuite appliquer un style CSS supplémentaire à l'application pour rendre la transparence visible.

Voici un exemple de base qui couvre tous les arrière-plans de l'application :

```css
* {
  background: transparent !important;
}
```

## Dépannage

### Contenu manquant ou animation non terminée

Si vous constatez que du contenu manque ou que les animations ne sont pas terminées dans le PDF exporté, essayez d'ajouter un temps d'attente avant l'exportation de chaque diapositive :

```bash
$ slidev export --wait 1000
```

### Emojis cassés

Si les emojis sont manquants dans le PDF ou le PNG, il vous manque probablement les polices requises (comme par exemple [_Noto Emoji_ de Google](https://fonts.google.com/noto/specimen/Noto+Emoji)) dans votre environnement.

Cela peut affecter par exemple les environnements Linux de type CI/CD dans des conteneurs. Cela peut être corrigé par exemple ainsi :

```bash
$ curl -L --output NotoColorEmoji.ttf https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf
$ sudo mv NotoColorEmoji.ttf /usr/local/share/fonts/
$ fc-cache -fv
```

### Contexte incorrect dans les couches globales

Voir l'astuce dans https://sli.dev/features/global-layers.
