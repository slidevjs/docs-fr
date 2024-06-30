# Exportation

## Slides

<<<<<<< HEAD
> L'exportation au format PDF ou PNG repose sur [Playwright](https://playwright.dev) pour le rendu. Vous devrez donc installer [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) pour utiliser cette fonctionnalité.
> Si vous effectuez une exportation dans un environnement CI, [le guide du dramaturge CI](https://playwright.dev/docs/ci) peut être utile.

Installez `playwright-chrome`
=======
### PDF

> Exporting to PDF, PPTX, or PNG relies on [Playwright](https://playwright.dev) for rendering. You will therefore need to install [`playwright-chromium`](https://npmjs.com/package/playwright-chromium) to use this feature.
> If you are exporting within a CI environment, [the playwright CI guide](https://playwright.dev/docs/ci) can be helpful.

1. Install `playwright-chromium`:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ npm i -D playwright-chromium
```

<<<<<<< HEAD
Exportez maintenant vos diapositives au format PDF à l'aide de la commande suivante
=======
2. Now export your slides to PDF using the following command:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev export
```

Après quelques secondes, vos diapositives seront prêtes dans `./slides-exports.pdf`.

<<<<<<< HEAD
### Étapes d'exportation des clics
=======
### PNGs and Markdown

When passing in the `--format png` option, Slidev will export PNG images for each slide instead of a PDF:

```bash
$ slidev export --format png
```

You can also compile a markdown file composed of compiled png using `--format md`:

```bash
$ slidev export --format md
```

### PPTX (Microsoft PowerPoint)

Slidev can also export your slides as a PPTX file:

```bash
$ slidev export --format pptx
```

Note that all the slides in the PPTX file will be exported as images, so the text will not be selectable. Presenter notes will be conveyed into the PPTX file on a per-slide basis.

In this mode, the `--with-clicks` option is enabled by default. To disable it, use `--with-clicks false`.

### Dark mode

In case you want to export your slides using the dark version of the theme, use the `--dark` option:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

> Disponible depuis v0.21

<<<<<<< HEAD
Par défaut, Slide export une page par diapositive avec les animations de clics désactivées. Si vous souhaitez exporter des diapositives avec plusieurs étapes dans plusieurs pages, passez l'option `--with-clicks`.
=======
### Export Clicks Steps

> Available since v0.21

By default, Slidev exports one page per slide with clicks animations disabled. If you want to export slides with multiple steps into multiple pages, pass the `--with-clicks` option:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev export --with-clicks
```

### PDF outline

<<<<<<< HEAD
En passant l'option `--format png`, Slidev exportera des images PNG pour chaque diapositive au lieu d'un PDF.
=======
> Available since v0.36.10

You can generate the PDF outline by passing the `--with-toc` option:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev export --with-toc
```

### Output filename

You can specify the output filename with the `--output` option:

```bash
$ slidev export --output my-pdf-export
```

Or in the frontmatter configuration:

```yaml
---
exportFilename: my-pdf-export
---
```

### Export a range of slides

By default, all slides in the presentation are exported. If you want to export a specific slide or a range of slides you can set the `--range` option and specify which slides you would like to export:

```bash
$ slidev export --range 1,6-8,10
```

This option accepts both specific slide numbers and ranges.

The example above would export slides 1,6,7,8, and 10.

### Multiple entries

You can also export multiple slides at once:

```bash
$ slidev export slides1.md slides2.md
```

Or

```bash
$ slidev export *.md
```

In this case, each input file will generate its own PDF file.

## Presenter notes

> Available since v0.36.8

Export only the presenter notes (the last comment block for each slide) into a text document in PDF:

```bash
$ slidev export-notes
```

This command also accept multiple entries like for the [export command](#multiple-entries)

## Single-Page Application (SPA)

<<<<<<< HEAD
Voir [Hébergement statique](/guide/hosting).
=======
See [Static Hosting](/guide/hosting).

## Exportable Docker Image

To support the export feature, there is a [docker image](/guide/install#install-on-docker) (maintained by [@tangramor](https://github.com/tangramor)) with tag **playwright**. Run following command in your work folder:

```bash
docker run --name slidev --rm -it \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:playwright
```

Then you can use the export feature like the following under your work folder:

```bash
docker exec -i slidev npx slidev export --timeout 2m --output slides.pdf
```

## Troubleshooting

### Timeouts

For big presentations you might want to increase the Playwright timeout with `--timeout`:

```bash
$ slidev export --timeout 60000
```

### Wait

Some parts of your slides may require a longer time to render. You can use the `--wait` option to have an extra delay before exporting:

```bash
$ slidev export --wait 10000
```

There is also a `--wait-until` option to wait for a state before exporting each slide:

```bash
$ slidev export --wait-until none
```

Possible values:

- `'networkidle'` - (_default_) consider operation to be finished when there are no network connections for at least `500` ms. Don't use this method for testing, rely on web assertions to assess readiness instead.
- `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
- `'load'` - consider operation to be finished when the `load` event is fired.
- `'none'` - do not wait for any event.

::: warning
When specifying values other than `'networkidle'`, please make sure the printed slides are complete and correct. If some contents are missing, you may need to use the `--wait` option.
:::

### Executable path

Chromium may miss some features like codecs that are required to decode some videos. You can set the browser executable path for Playwright to your Chrome or Edge using `--executable-path`:

```bash
$ slidev export --executable-path [path_to_chromium]
```
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
