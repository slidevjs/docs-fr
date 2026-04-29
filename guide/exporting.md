# Exportation

## Slides

### PDF

> L'exportation au format PDF, PPTX ou PNG repose sur [Playwright](https://playwright.dev) pour le rendu. Vous devrez donc installer [`playwright-chromium`](https://npmjs.com/package/playwright-chromium) pour utiliser cette fonctionnalité.
> Si vous effectuez une exportation dans un environnement CI, [le guide Playwright CI](https://playwright.dev/docs/ci) peut être utile.

1. Installez `playwright-chromium` :

```bash
$ npm i -D playwright-chromium
```

2. Exportez maintenant vos diapositives au format PDF à l'aide de la commande suivante :

```bash
$ slidev export
```

Après quelques secondes, vos diapositives seront prêtes dans `./slides-exports.pdf`.

### PNG et Markdown

En passant l'option `--format png`, Slidev exportera des images PNG pour chaque diapositive au lieu d'un PDF :

```bash
$ slidev export --format png
```

Vous pouvez également compiler un fichier markdown composé d'images PNG compilées en utilisant `--format md` :

```bash
$ slidev export --format md
```

### PPTX (Microsoft PowerPoint)

Slidev peut également exporter vos diapositives sous forme de fichier PPTX :

```bash
$ slidev export --format pptx
```

Notez que toutes les diapositives du fichier PPTX seront exportées en tant qu'images, donc le texte ne sera pas sélectionnable. Les notes du présentateur seront intégrées dans le fichier PPTX pour chaque diapositive.

Dans ce mode, l'option `--with-clicks` est activée par défaut. Pour la désactiver, utilisez `--with-clicks false`.

### Mode sombre

Si vous souhaitez exporter vos diapositives en utilisant la version sombre du thème, utilisez l'option `--dark` :

> Disponible depuis v0.21

### Étapes d'exportation des clics

> Disponible depuis v0.21

Par défaut, Slidev exporte une page par diapositive avec les animations de clics désactivées. Si vous souhaitez exporter des diapositives avec plusieurs étapes sur plusieurs pages, passez l'option `--with-clicks` :

```bash
$ slidev export --with-clicks
```

### Plan PDF

> Disponible depuis v0.36.10

Vous pouvez générer le plan du PDF en passant l'option `--with-toc` :

```bash
$ slidev export --with-toc
```

### Nom du fichier de sortie

Vous pouvez spécifier le nom du fichier de sortie avec l'option `--output` :

```bash
$ slidev export --output mon-export-pdf
```

Ou dans la configuration du frontmatter :

```yaml
---
exportFilename: mon-export-pdf
---
```

### Exporter une plage de diapositives

Par défaut, toutes les diapositives de la présentation sont exportées. Si vous souhaitez exporter une diapositive spécifique ou une plage de diapositives, vous pouvez définir l'option `--range` et spécifier quelles diapositives vous souhaitez exporter :

```bash
$ slidev export --range 1,6-8,10
```

Cette option accepte à la fois des numéros de diapositive spécifiques et des plages.

L'exemple ci-dessus exporterait les diapositives 1, 6, 7, 8 et 10.

### Entrées multiples

Vous pouvez également exporter plusieurs présentations à la fois :

```bash
$ slidev export slides1.md slides2.md
```

Ou

```bash
$ slidev export *.md
```

Dans ce cas, chaque fichier d'entrée générera son propre fichier PDF.

## Notes du présentateur

> Disponible depuis v0.36.8

Exportez uniquement les notes du présentateur (le dernier bloc de commentaire pour chaque diapositive) dans un document texte en PDF :

```bash
$ slidev export-notes
```

Cette commande accepte également plusieurs entrées comme pour la [commande d'exportation](#entrées-multiples)

## Single-Page Application (SPA)

Voir [Hébergement statique](/guide/hosting).

## Image Docker exportable

Pour prendre en charge la fonctionnalité d'exportation, il existe une [image docker](/guide/install#install-on-docker) (maintenue par [@tangramor](https://github.com/tangramor)) avec le tag **playwright**. Exécutez la commande suivante dans votre dossier de travail :

```bash
docker run --name slidev --rm -it \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:playwright
```

Vous pouvez ensuite utiliser la fonctionnalité d'exportation comme suit dans votre dossier de travail :

```bash
docker exec -i slidev npx slidev export --timeout 2m --output slides.pdf
```

## Résolution des problèmes

### Dépassements de délai (Timeouts)

Pour les grandes présentations, vous pouvez augmenter le délai d'attente de Playwright avec `--timeout` :

```bash
$ slidev export --timeout 60000
```

### Attente

Certaines parties de vos diapositives peuvent nécessiter plus de temps pour le rendu. Vous pouvez utiliser l'option `--wait` pour ajouter un délai supplémentaire avant l'exportation :

```bash
$ slidev export --wait 10000
```

Il existe également une option `--wait-until` pour attendre un état avant d'exporter chaque diapositive :

```bash
$ slidev export --wait-until none
```

Valeurs possibles :

- `'networkidle'` - (_par défaut_) considère l'opération comme terminée lorsqu'il n'y a plus de connexions réseau pendant au moins `500` ms. N'utilisez pas cette méthode pour les tests, fiez-vous plutôt aux assertions web pour évaluer la disponibilité.
- `'domcontentloaded'` - considère l'opération comme terminée lorsque l'événement `DOMContentLoaded` est déclenché.
- `'load'` - considère l'opération comme terminée lorsque l'événement `load` est déclenché.
- `'none'` - n'attend aucun événement.

::: warning
Lorsque vous spécifiez des valeurs autres que `'networkidle'`, assurez-vous que les diapositives imprimées sont complètes et correctes. Si certains contenus sont manquants, vous devrez peut-être utiliser l'option `--wait`.
:::

### Chemin de l'exécutable

Chromium peut manquer certaines fonctionnalités comme les codecs nécessaires pour décoder certaines vidéos. Vous pouvez définir le chemin de l'exécutable du navigateur pour Playwright vers votre Chrome ou Edge en utilisant `--executable-path` :

```bash
$ slidev export --executable-path [chemin_vers_chromium]
```
