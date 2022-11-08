# Exportation

## Slides

### PDF

> L'exportation au format PDF ou PNG repose sur [Playwright](https://playwright.dev) pour le rendu. Vous devrez donc installer [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) pour utiliser cette fonctionnalité.
> Si vous effectuez une exportation dans un environnement CI, [le guide du dramaturge CI](https://playwright.dev/docs/ci) peut être utile.

Installez `playwright-chrome`

```bash
$ npm i -D playwright-chromium
```

Exportez maintenant vos diapositives au format PDF à l'aide de la commande suivante

```bash
$ slidev export
```

Après quelques secondes, vos diapositives seront prêtes dans `./slides-exports.pdf`.

### Étapes d'exportation des clics

> Disponible depuis v0.21

<<<<<<< HEAD
Par défaut, Slide export une page par diapositive avec les animations de clics désactivées. Si vous souhaitez exporter des diapositives avec plusieurs étapes dans plusieurs pages, passez l'option `--with-clicks`.
=======
#### Export Clicks Steps

> Available since v0.21

By default, Slidev exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` options.
>>>>>>> eb148aa43004e4f35f192bf482a90cc220e943c3

```bash
$ slidev export --with-clicks
```

### PNGs

En passant l'option `--format png`, Slidev exportera des images PNG pour chaque diapositive au lieu d'un PDF.

```bash
$ slidev export --format png
```

### Single-Page Application (SPA)

<<<<<<< HEAD
Voir [Hébergement statique](/guide/hosting).
=======
See [Static Hosting](/guide/hosting).

## Presenter notes

> Available since v0.36.8

Export only the presenter notes (the last comment block for each slide) into a text document in PDF.

```bash
$ slidev export-notes
```
>>>>>>> eb148aa43004e4f35f192bf482a90cc220e943c3
