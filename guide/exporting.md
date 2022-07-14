# Exportation

## PDF

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

Par défaut, Slide export une page par diapositive avec les animations de clics désactivées. Si vous souhaitez exporter des diapositives avec plusieurs étapes dans plusieurs pages, passez l'option `--with-clicks`.

```bash
$ slidev export --with-clicks
```

## PNGs

En passant l'option `--format png`, Slidev exportera des images PNG pour chaque diapositive au lieu d'un PDF.

```bash
$ slidev export --format png
```

## Single-Page Application (SPA)

Voir [Hébergement statique](/guide/hosting).
